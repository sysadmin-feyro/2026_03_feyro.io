import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import useAnalytics from "@/hooks/useAnalytics";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name zu lang"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail zu lang"),
  company: z.string().trim().max(100, "Firmenname zu lang").optional(),
  website: z.string().trim().max(255, "Eingabe zu lang").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Nachricht zu kurz (min. 10 Zeichen)").max(2000, "Nachricht zu lang (max. 2000 Zeichen)"),
  privacy: z.boolean().refine(val => val === true, "Zustimmung erforderlich"),
  _hp: z.string().max(0, "Spam erkannt")
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
    privacy: false,
    _hp: ""
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { trackFormSubmission, trackCTAClick } = useAnalytics();

  const validateField = (name: string, value: string | boolean) => {
    try {
      const partialData = { ...formData, [name]: value };
      contactFormSchema.parse(partialData);
      setFieldErrors(prev => ({ ...prev, [name]: "" }));
    } catch (e) {
      if (e instanceof z.ZodError) {
        const fieldError = e.errors.find(err => err.path[0] === name);
        if (fieldError) {
          setFieldErrors(prev => ({ ...prev, [name]: fieldError.message }));
        } else {
          setFieldErrors(prev => ({ ...prev, [name]: "" }));
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackCTAClick("contact_form_submit", "contact_section");

    try {
      const validatedData = contactFormSchema.parse(formData);

      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          website: validatedData.website,
          message: validatedData.message,
          _hp: validatedData._hp,
          source: "feyro.io"
        }
      });

      if (error) {
        if (import.meta.env.DEV) console.error('Submission error:', error);
        if (error.message?.includes('Rate limit') || error.message?.includes('429')) {
          toast({ title: "Zu viele Anfragen", description: "Bitte warte eine Stunde, bevor du erneut eine Nachricht sendest.", variant: "destructive" });
        } else if (error.message?.includes('Validation')) {
          toast({ title: "Validierungsfehler", description: error.message, variant: "destructive" });
        } else {
          toast({ title: "Fehler beim Senden", description: "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.", variant: "destructive" });
        }
        setIsSubmitting(false);
        return;
      }

      if (data?.error) {
        toast({ title: data.error === "Rate limit exceeded" ? "Zu viele Anfragen" : "Fehler", description: data.message || "Bitte versuche es später erneut.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }

      trackFormSubmission("contact_form", true);
      toast({ title: "Anfrage gesendet! ✓", description: "Wir melden uns in der Regel am selben Werktag bei Ihnen." });

      setFormData({ name: "", email: "", company: "", website: "", message: "", privacy: false, _hp: "" });
      setFieldErrors({});

    } catch (error) {
      trackFormSubmission("contact_form", false);

      if (error instanceof z.ZodError) {
        // Show all field errors inline
        const errors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) errors[String(err.path[0])] = err.message;
        });
        setFieldErrors(errors);
        toast({ title: "Bitte alle Pflichtfelder ausfüllen", description: "Einige Felder sind noch nicht korrekt ausgefüllt.", variant: "destructive" });
      } else {
        const msg = error instanceof Error ? error.message : "Unbekannter Fehler";
        if (import.meta.env.DEV) console.error('Unexpected error:', error);
        toast({ title: "Fehler beim Senden", description: msg, variant: "destructive" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "E-Mail", content: "hi@feyro.io", href: "mailto:hi@feyro.io" },
    { icon: MapPin, title: "Standort", content: "Berlin · Remote", href: null }
  ];

  return (
    <section id="contact" className="bg-gradient-subtle py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 px-2">
            Erste Einschätzung – <span className="text-primary">kostenlos und ohne Verkaufsdruck</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Hinterlassen Sie Ihre Website-URL und kurz, was Sie stört. Wir melden uns am
            selben Werktag mit einer klaren Einschätzung – was sinnvoll ist, was nicht und warum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">Website prüfen lassen</h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
                <label htmlFor="_hp">Bitte leer lassen</label>
                <input id="_hp" name="_hp" type="text" tabIndex={-1} autoComplete="off"
                  value={formData._hp} onChange={(e) => setFormData(prev => ({ ...prev, _hp: e.target.value }))} />
              </div>

              {/* Name + E-Mail */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    onBlur={() => validateField("name", formData.name)}
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    required
                    className="mt-1"
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="mt-1 text-sm text-destructive" role="alert">{fieldErrors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    onBlur={() => validateField("email", formData.email)}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    required
                    className="mt-1"
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Unternehmen + Website */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    onBlur={() => validateField("company", formData.company)}
                    aria-invalid={!!fieldErrors.company}
                    aria-describedby={fieldErrors.company ? "company-error" : undefined}
                    className="mt-1"
                  />
                  {fieldErrors.company && (
                    <p id="company-error" className="mt-1 text-sm text-destructive" role="alert">{fieldErrors.company}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="website">Website (optional)</Label>
                  <Input
                    id="website"
                    type="text"
                    placeholder="z. B. https://ihre-domain.de oder 'keine vorhanden'"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Nachricht */}
              <div>
                <Label htmlFor="message">Nachricht *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Was stört Sie aktuell an Ihrer Website? Zum Beispiel: wirkt veraltet, mobil schlecht nutzbar, technisch unklar, zu wenig Anfragen..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  onBlur={() => validateField("message", formData.message)}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  required
                  className="mt-1"
                />
                {fieldErrors.message && (
                  <p id="message-error" className="mt-1 text-sm text-destructive" role="alert">{fieldErrors.message}</p>
                )}
              </div>

              {/* Datenschutz */}
              <div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => {
                      setFormData(prev => ({ ...prev, privacy: checked as boolean }));
                      validateField("privacy", checked as boolean);
                    }}
                    aria-invalid={!!fieldErrors.privacy}
                    aria-describedby={fieldErrors.privacy ? "privacy-error" : undefined}
                    className="mt-1"
                  />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu. *
                  </Label>
                </div>
                {fieldErrors.privacy && (
                  <p id="privacy-error" className="mt-1 text-sm text-destructive" role="alert">{fieldErrors.privacy}</p>
                )}
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet..." : (
                  <>
                    Website-Analyse anfordern
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-6">Kontakt</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.title}</p>
                        {info.href ? (
                          <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">{info.content}</a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Objection Resolvers */}
            <div className="rounded-2xl bg-gradient-brand p-8 text-white shadow-brand">
              <h3 className="text-xl font-bold mb-6">Was Sie erwartet</h3>
              <div className="space-y-4">
                {[
                  "Antwort in der Regel am selben Werktag",
                  "Erste Einschätzung ohne Verkaufsdruck",
                  "Konkrete Empfehlung statt unklarer Fachsprache",
                  "Keine Newsletter-Anmeldung",
                  "Direkter Ansprechpartner ohne Callcenter"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
