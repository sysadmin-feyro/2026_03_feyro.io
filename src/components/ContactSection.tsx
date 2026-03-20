import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
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
  privacy: z.boolean().refine(val => val === true, "Zustimmung erforderlich")
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
    privacy: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { trackFormSubmission, trackCTAClick } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackCTAClick("contact_form_submit", "contact_section");

    try {
      // Validate form data client-side first
      const validatedData = contactFormSchema.parse(formData);

      // Submit to server-side edge function
      // Server handles all validation, rate limiting, and security checks
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          website: validatedData.website,
          message: validatedData.message,
          source: "feyro.io"
        }
      });

      // Handle errors from edge function
      if (error) {
        console.error('Submission error:', error);
        
        // Check if it's a rate limit error
        if (error.message?.includes('Rate limit') || error.message?.includes('429')) {
          toast({
            title: "Zu viele Anfragen",
            description: "Bitte warte eine Stunde, bevor du erneut eine Nachricht sendest.",
            variant: "destructive"
          });
        } else if (error.message?.includes('Validation')) {
          toast({
            title: "Validierungsfehler",
            description: error.message,
            variant: "destructive"
          });
        } else {
          toast({
            title: "Fehler beim Senden",
            description: "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.",
            variant: "destructive"
          });
        }
        setIsSubmitting(false);
        return;
      }

      // Check response data for errors
      if (data?.error) {
        toast({
          title: data.error === "Rate limit exceeded" ? "Zu viele Anfragen" : "Fehler",
          description: data.message || "Bitte versuche es später erneut.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Success - track form submission
      trackFormSubmission("contact_form", true);
      
      toast({
        title: "Nachricht gesendet! ✓",
        description: "Wir melden uns innerhalb von 24 Stunden bei dir.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        message: "",
        privacy: false
      });

    } catch (error) {
      trackFormSubmission("contact_form", false);
      
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validierungsfehler",
          description: firstError.message,
          variant: "destructive"
        });
      } else {
        const msg = error instanceof Error ? error.message : "Unbekannter Fehler";
        console.error('Unexpected error:', error);
        toast({
          title: "Fehler beim Senden",
          description: msg,
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      content: "hi@feyro.io",
      href: "mailto:hi@feyro.io"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 (0) 123 456 789",
      href: "tel:+491234567890"
    },
    {
      icon: MapPin,
      title: "Standort",
      content: "Deutschland",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 px-2">
            Lass uns deine Website auf das <span className="text-primary">nächste Level</span> bringen
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Bereit für einen professionellen Website-Relaunch? Kontaktiere uns für eine 
            kostenlose Analyse und ein unverbindliches Gespräch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Kostenlose Website-Analyse anfragen
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website (optional)</Label>
                  <Input
                    id="website"
                    type="text"
                    placeholder="z.B. https://example.com oder 'keine vorhanden'"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Nachricht *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Erzähle uns von deinem Projekt und deinen Zielen..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, privacy: checked as boolean }))
                  }
                  className="mt-1"
                />
                <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu. *
                </Label>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    Kostenlose Analyse anfordern
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
              <h3 className="text-xl font-bold text-foreground mb-6">
                Kontakt
              </h3>
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
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-brand rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">
                Was du bekommst
              </h3>
              <div className="space-y-4">
                {[
                  "Kostenlose Website-Analyse innerhalb von 48h",
                  "Unverbindliches Beratungsgespräch",
                  "Individuelle Optimierungsvorschläge",
                  "Transparente Kostenübersicht",
                  "Direkter Draht ohne Callcenter"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
              <h4 className="font-semibold text-accent mb-2">
                Schnelle Antwort garantiert
              </h4>
              <p className="text-muted-foreground text-sm">
                Wir melden uns innerhalb von 24 Stunden bei dir. Versprochen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;