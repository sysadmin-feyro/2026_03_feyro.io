import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email format").max(255, "Email too long"),
  company: z.string().trim().max(100, "Company name too long").optional(),
  website: z.string().trim().max(255, "Website too long").optional(),
  message: z.string().trim().min(10, "Message too short").max(2000, "Message too long")
});

// HTML escape function to prevent XSS
const escapeHtml = (str: string): string => {
  return str.replace(/[&<>"']/g, (char) => {
    const escapeMap: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return escapeMap[char] || char;
  });
};

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "Unknown error";

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate input data
    const rawData = await req.json();
    const validatedData = ContactSchema.parse(rawData);

    console.log("Sending contact notification for:", { 
      name: validatedData.name, 
      email: validatedData.email 
    });

    // Escape all user input for HTML output
    const safeData = {
      name: escapeHtml(validatedData.name),
      email: escapeHtml(validatedData.email),
      company: validatedData.company ? escapeHtml(validatedData.company) : undefined,
      website: validatedData.website ? escapeHtml(validatedData.website) : undefined,
      message: escapeHtml(validatedData.message).replace(/\n/g, '<br>')
    };

    const emailResponse = await resend.emails.send({
      from: "Feyro Website <onboarding@resend.dev>",
      to: ["hi@feyro.io"],
      subject: `Neue Kontaktanfrage von ${safeData.name}`,
      html: `
        <h2>Neue Kontaktanfrage über feyro.io</h2>
        
        <h3>Kontaktdaten:</h3>
        <ul>
          <li><strong>Name:</strong> ${safeData.name}</li>
          <li><strong>E-Mail:</strong> ${safeData.email}</li>
          ${safeData.company ? `<li><strong>Unternehmen:</strong> ${safeData.company}</li>` : ''}
          ${safeData.website ? `<li><strong>Website:</strong> ${safeData.website}</li>` : ''}
        </ul>
        
        <h3>Nachricht:</h3>
        <p>${safeData.message}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          Diese E-Mail wurde automatisch über das Kontaktformular auf feyro.io gesendet.
        </p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-notification function:", error);
    
    // Handle validation errors specifically
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          error: "Validation failed", 
          details: error.errors 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ error: getErrorMessage(error) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
