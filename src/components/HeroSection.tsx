import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useAnalytics from "@/hooks/useAnalytics";

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();
  
  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero px-0 pt-20 text-white sm:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#050c18_0%,#0a1628_40%,#0c1a35_70%,#060e1e_100%)]"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[6%] top-24 h-40 w-40 rounded-full bg-primary/16 blur-3xl sm:h-64 sm:w-64"></div>
        <div className="absolute right-[10%] top-24 h-36 w-36 rounded-full bg-accent-glow/14 blur-3xl sm:h-56 sm:w-56"></div>
        <div className="absolute bottom-[16%] left-[18%] hidden h-2 w-2 rounded-full bg-white/70 animate-float sm:block"></div>
        <div className="absolute right-[18%] top-[30%] hidden h-3 w-3 rounded-full bg-accent-glow/70 animate-float sm:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute left-[50%] top-[18%] hidden h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent sm:block"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,12,24,0.18)_62%,rgba(5,12,24,0.34)_100%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          <div className="animate-fade-in text-left max-w-3xl">
            <h1 id="hero-heading" className="font-display text-[2.55rem] font-bold leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Neue Websites,
              <span className="block text-white/76">die nicht nur</span>
              <span className="block bg-gradient-to-r from-white via-primary-glow to-accent-glow bg-clip-text text-transparent">
                modern aussehen.
              </span>
            </h1>

            <p className="mb-8 mt-5 max-w-3xl text-[15px] leading-relaxed text-white/78 sm:mb-10 sm:mt-6 sm:text-xl">
              feyro.io entwickelt neue Websites auf Basis bestehender Seiten oder Inhalte.
              Das Ergebnis ist ein klarer, moderner Auftritt, der Vertrauen schafft,
              professionell wirkt und dein Unternehmen digital auf ein neues Niveau hebt.
            </p>

            <div className="mb-10 flex flex-col items-stretch gap-3 sm:mb-12 sm:items-center sm:gap-4 sm:flex-row lg:items-start" role="group" aria-label="Call-to-Action Buttons">
            <Button 
              variant="hero" 
              size="xl" 
              className="group h-12 rounded-full px-6 text-base shadow-[0_18px_40px_rgba(16,119,212,0.28)] sm:h-14 sm:px-8 sm:text-lg"
              onClick={() => {
                trackCTAClick("hero_cta_primary", "hero_section");
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              aria-label="Zur kostenlosen Website-Analyse navigieren"
            >
              Projekt anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="h-12 rounded-full border-white/18 bg-white/8 px-6 text-base text-white hover:bg-white/12 hover:text-white sm:h-14 sm:px-8 sm:text-lg"
              onClick={() => {
                trackCTAClick("hero_cta_secondary", "hero_section");
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              aria-label="Zu den Leistungen navigieren"
            >
              Leistungen ansehen
            </Button>
            </div>

            <div className="flex flex-wrap justify-start gap-2.5 sm:gap-3" role="list" aria-label="Vertrauensindikatoren">
              <div className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs text-white/82 sm:px-4 sm:text-sm" role="listitem">
                Umsetzung in 7 Tagen
              </div>
              <div className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs text-white/82 sm:px-4 sm:text-sm" role="listitem">
                DSGVO-konform aufgebaut
              </div>
              <div className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs text-white/82 sm:px-4 sm:text-sm" role="listitem">
                Neue Website statt Flickwerk
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 transform animate-bounce sm:block">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/25">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/70"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
