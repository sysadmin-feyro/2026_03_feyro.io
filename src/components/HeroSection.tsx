import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Bot, Sparkles } from "lucide-react";
import useAnalytics from "@/hooks/useAnalytics";

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 pt-20 sm:pt-24"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-violet-400/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="animate-fade-in font-display text-5xl font-bold leading-[0.98] tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Websites, Relaunches
          <br />
          <span className="bg-gradient-to-r from-violet-600 to-primary bg-clip-text text-transparent">
            und KI-gestützte Prozessautomatisierung
          </span>
        </h1>

        <p
          className="mx-auto mb-10 mt-6 max-w-3xl animate-fade-in text-base leading-relaxed text-slate-600 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          feyro.io entwickelt neue Websites, modernisiert bestehende Auftritte und begleitet
          Unternehmen bei KI- und Automatisierungsvorhaben. Technisch sauber, DSGVO-konform
          und mit direktem Ansprechpartner aus Deutschland.
        </p>

        {/* CTA Buttons */}
        <div
          className="mb-12 flex animate-fade-in flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "0.3s" }}
          role="group"
          aria-label="Call-to-Action Buttons"
        >
          <Button
            variant="hero"
            size="xl"
            className="w-full rounded-full px-8 py-4 text-base font-semibold shadow-[0_8px_30px_rgba(16,119,212,0.25)] sm:w-auto sm:text-lg"
            onClick={() => {
              trackCTAClick("hero_cta_primary", "hero_section");
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            aria-label="Projekt anfragen"
          >
            Projekt anfragen
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="w-full rounded-full border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 sm:w-auto sm:text-lg"
            onClick={() => {
              trackCTAClick("hero_cta_secondary", "hero_section");
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            aria-label="Leistungen ansehen"
          >
            Leistungen ansehen
          </Button>
        </div>

        {/* Trust Badges */}
        <div
          className="flex animate-fade-in flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
          style={{ animationDelay: "0.4s" }}
          role="list"
          aria-label="Vertrauensindikatoren"
        >
          <div className="flex items-center gap-2" role="listitem">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Neue Website & Relaunch
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <Bot className="h-4 w-4 text-primary" aria-hidden="true" />
            KI-Beratung & Automatisierung
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            DSGVO-konform & Hosting in Deutschland
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
