import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap, Orbit, MoveRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

import useAnalytics from "@/hooks/useAnalytics";

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();
  
  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero px-0 pt-20 text-white sm:pt-24"
      aria-labelledby="hero-heading"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,30,0.2),rgba(8,16,30,0.72))]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[6%] top-24 h-40 w-40 rounded-full bg-primary/16 blur-3xl sm:h-64 sm:w-64"></div>
        <div className="absolute right-[10%] top-24 h-36 w-36 rounded-full bg-accent-glow/14 blur-3xl sm:h-56 sm:w-56"></div>
        <div className="absolute bottom-[16%] left-[18%] hidden h-2 w-2 rounded-full bg-white/70 animate-float sm:block"></div>
        <div className="absolute right-[18%] top-[30%] hidden h-3 w-3 rounded-full bg-accent-glow/70 animate-float sm:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute left-[50%] top-[18%] hidden h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent sm:block"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,12,24,0.18)_62%,rgba(5,12,24,0.34)_100%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 sm:gap-12 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="animate-fade-in text-center lg:text-left">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.08em] text-white/86 backdrop-blur sm:mb-8 sm:px-4 sm:text-sm sm:normal-case sm:tracking-normal">
              <Sparkles className="w-4 h-4 text-accent-glow" />
              Digitale Präsenz für Unternehmen mit Anspruch
            </div>

            <h1 id="hero-heading" className="font-display text-[2.55rem] font-bold leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Neue Websites,
              <span className="block text-white/76">die nicht nur</span>
              <span className="block bg-gradient-to-r from-white via-primary-glow to-accent-glow bg-clip-text text-transparent">
                modern aussehen.
              </span>
            </h1>

            <p className="mx-auto mb-8 mt-5 max-w-3xl px-1 text-[15px] leading-relaxed text-white/78 sm:mb-10 sm:mt-6 sm:px-2 sm:text-xl lg:mx-0 lg:px-0">
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

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start" role="list" aria-label="Vertrauensindikatoren">
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

          <div className="animate-slide-up px-1 sm:px-0">
            <div className="rounded-[1.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.08))] p-3 shadow-[0_24px_56px_rgba(4,11,24,0.22)] backdrop-blur-xl sm:rounded-[2rem] sm:p-4">
              <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-4 sm:rounded-[1.6rem] sm:p-6">
                <div className="mb-6 flex items-center justify-between sm:mb-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/48 sm:text-xs sm:tracking-[0.28em]">Projektfokus</p>
                    <p className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">Klar. Modern. Vertrauenswürdig.</p>
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/8 p-2.5 text-accent-glow sm:p-3">
                    <Orbit className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-[1.15rem] border border-white/10 bg-[hsl(0_0%_100%_/_0.06)] p-4 sm:rounded-[1.4rem]">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                      <Shield className="h-4 w-4 text-primary-glow" />
                      Neue Website, klare Wirkung
                    </div>
                    <p className="text-sm leading-relaxed text-white/65">
                      Wir gestalten eine moderne Seite, die professionell aussieht und deine bestehende Präsenz sinnvoll weiterentwickelt.
                    </p>
                  </div>
                  <div className="rounded-[1.15rem] border border-white/10 bg-[hsl(0_0%_100%_/_0.06)] p-4 sm:rounded-[1.4rem]">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                      <Zap className="h-4 w-4 text-accent-glow" />
                      Saubere Umsetzung in 7 Tagen
                    </div>
                    <p className="text-sm leading-relaxed text-white/65">
                      Design, Technik, SEO und DSGVO greifen von Anfang an zusammen statt erst später ergänzt zu werden.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8">
                  <div className="rounded-[1.05rem] border border-white/10 bg-black/10 p-3.5 sm:rounded-[1.25rem] sm:p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Design</p>
                    <p className="mt-2 text-2xl font-display font-bold text-white sm:text-3xl">01</p>
                    <p className="mt-1 text-sm text-white/60">Markant und klar</p>
                  </div>
                  <div className="rounded-[1.05rem] border border-white/10 bg-black/10 p-3.5 sm:rounded-[1.25rem] sm:p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Delivery</p>
                    <p className="mt-2 text-2xl font-display font-bold text-white sm:text-3xl">7</p>
                    <p className="mt-1 text-sm text-white/60">Tage bis Launch</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/62 sm:mt-8 sm:pt-5">
                  <span>Digitaler Erstkontakt mit Substanz</span>
                  <MoveRight className="h-4 w-4" />
                </div>
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
