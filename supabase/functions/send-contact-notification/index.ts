import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
// @deno-types="npm:@types/nodemailer"
import nodemailer from "npm:nodemailer@6.9.13";

const ALLOWED_ORIGINS = [
  "https://feyro.io",
  "https://www.feyro.io",
  "http://localhost:5173",
];

const buildCorsHeaders = (origin: string | null): Record<string, string> => {
  const allowOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : "https://feyro.io";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
};

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(100).optional(),
  website: z.string().trim().max(255).optional(),
  message: z.string().trim().min(10).max(2000),
  _secret: z.string().optional(),
});

const escapeHtml = (str: string): string =>
  str.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char] ?? char));

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = buildCorsHeaders(req.headers.get("origin"));

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    const data = ContactSchema.parse(rawData);

    // Verify internal secret – reject direct external calls
    const expectedSecret = Deno.env.get("NOTIFICATION_SECRET");
    if (expectedSecret && data._secret !== expectedSecret) {
      console.warn("Invalid or missing NOTIFICATION_SECRET – request rejected");
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const transporter = nodemailer.createTransport({
      host: Deno.env.get("SMTP_HOST") ?? "smtp.ionos.de",
      port: parseInt(Deno.env.get("SMTP_PORT") ?? "587"),
      secure: false,
      auth: {
        user: Deno.env.get("SMTP_USER"),
        pass: Deno.env.get("SMTP_PASS"),
      },
    });

    const safe = {
      name: escapeHtml(data.name),
      email: escapeHtml(data.email),
      company: data.company ? escapeHtml(data.company) : null,
      website: data.website ? escapeHtml(data.website) : null,
      message: escapeHtml(data.message).replace(/\n/g, "<br>"),
    };

    await transporter.sendMail({
      from: `"feyro.io Kontaktformular" <${Deno.env.get("SMTP_USER")}>`,
      to: "hi@feyro.io",
      subject: `[feyro.io] Neue Anfrage von ${safe.name}`,
      html: `
        <h2>Neue Kontaktanfrage über feyro.io</h2>
        <h3>Kontaktdaten:</h3>
        <ul>
          <li><strong>Name:</strong> ${safe.name}</li>
          <li><strong>E-Mail:</strong> ${safe.email}</li>
          ${safe.company ? `<li><strong>Unternehmen:</strong> ${safe.company}</li>` : ""}
          ${safe.website ? `<li><strong>Website:</strong> ${safe.website}</li>` : ""}
        </ul>
        <h3>Nachricht:</h3>
        <p>${safe.message}</p>
        <hr>
        <p style="color:#666;font-size:12px;">
          Diese E-Mail wurde automatisch über das Kontaktformular auf feyro.io gesendet.
        </p>
      `,
    });

    console.log("Email sent successfully to hi@feyro.io");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-notification:", error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ error: "Validation failed", details: error.errors }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
