import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name zu lang"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail zu lang"),
  company: z.string().trim().max(100, "Firmenname zu lang").optional(),
  website: z.string().trim().max(255, "Website zu lang").optional(),
  message: z.string().trim().min(10, "Nachricht zu kurz (min. 10 Zeichen)").max(2000, "Nachricht zu lang"),
  _hp: z.string().max(0).optional()
});

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "Unknown error";

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role for database operations
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    // Parse and validate input data
    const rawData = await req.json();
    const validatedData = ContactSchema.parse(rawData);

    // Honeypot check – bots fill this field, humans don't
    if (validatedData._hp && validatedData._hp.length > 0) {
      console.warn("Honeypot triggered – bot submission rejected");
      // Return 200 to not tip off bots
      return new Response(
        JSON.stringify({ success: true, message: "Nachricht erfolgreich gesendet!" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Extract IP address from request headers
    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                      req.headers.get("x-real-ip") || 
                      "unknown";
    
    const userAgent = req.headers.get("user-agent") || "unknown";

    console.log("Processing contact form submission from IP:", ipAddress);

    // IP-based rate limiting for public (unauthenticated) submissions
    // Check recent submissions from this IP in the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    
    const { count: recentSubmissions, error: countError } = await supabaseClient
      .from('contact_submissions')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', oneHourAgo)
      .eq('ip_address', ipAddress);

    if (countError) {
      console.error('Rate limit check error:', countError);
      // Continue anyway - don't block legitimate submissions due to check errors
    } else {
      const maxSubmissionsPerHour = 3;
      
      if (recentSubmissions !== null && recentSubmissions >= maxSubmissionsPerHour) {
        console.warn('Rate limit exceeded for IP:', ipAddress, '- Submissions in last hour:', recentSubmissions);
        return new Response(
          JSON.stringify({ 
            error: "Rate limit exceeded",
            message: "Zu viele Anfragen. Bitte warte eine Stunde, bevor du erneut eine Nachricht sendest."
          }),
          {
            status: 429,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }
    }

    // Insert into contact_submissions
    const { data: submission, error: insertError } = await supabaseClient
      .from('contact_submissions')
      .insert({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || null,
        website: validatedData.website || null,
        message: validatedData.message,
        ip_address: ipAddress,
        user_agent: userAgent,
        status: 'new'
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ 
          error: "Database error",
          message: "Fehler beim Speichern. Bitte versuche es später erneut."
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log('Contact submission saved:', submission.id);

    // Send email notification asynchronously (don't wait for it)
    supabaseClient.functions.invoke('send-contact-notification', {
      body: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        website: validatedData.website,
        message: validatedData.message,
        _secret: Deno.env.get("NOTIFICATION_SECRET") ?? ""
      }
    }).catch((emailError) => {
      console.error('Email notification error:', emailError);
      // Don't fail the whole request if email fails
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Nachricht erfolgreich gesendet!",
        submissionId: submission.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: unknown) {
    console.error("Error in submit-contact-form function:", error);
    
    // Handle validation errors specifically
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      return new Response(
        JSON.stringify({ 
          error: "Validation failed", 
          message: firstError.message,
          details: error.errors 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ 
        error: getErrorMessage(error),
        message: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später erneut."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
