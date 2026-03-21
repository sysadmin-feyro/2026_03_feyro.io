import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
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
        {/* Headline */}
        <h1
          id="hero-heading"
          className="animate-fade-in font-display text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Websites, die{" "}
          <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
            überzeugen.
          </span>
          <br />
          Prozesse, die{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
            skalieren.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-10 mt-6 max-w-2xl animate-fade-in text-base leading-relaxed text-slate-600 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          feyro.io entwickelt{" "}
          <strong className="font-semibold text-primary">
            individuelle Websites
          </strong>
          , begleitet KI-Transformationen und automatisiert digitale Prozesse –
          vollständig DSGVO-konform, gehostet in Deutschland, ohne US-Cloud-Abhängigkeiten.
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
            aria-label="Kostenloses Erstgespräch vereinbaren"
          >
            Kostenloses Erstgespräch
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
            100% DSGVO-konform
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <Zap className="h-4 w-4 text-primary" aria-hidden="true" />
            Hosting in Deutschland
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Keine US-Cloud
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <div className="flex h-10 w-6 justify-center rounded-full border border-slate-300">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
