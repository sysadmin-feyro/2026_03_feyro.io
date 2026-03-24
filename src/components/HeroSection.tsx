import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  SearchCheck,
  BadgeEuro,
  ServerCog,
  MessageSquareMore,
  Sparkles,
} from "lucide-react";
import useAnalytics from "@/hooks/useAnalytics";

const trustItems = [
  {
    icon: SearchCheck,
    title: "Kostenlose Analyse",
    text: "Wir prüfen Ihre bestehende Website und zeigen klar, was sinnvoll modernisiert werden sollte.",
  },
  {
    icon: BadgeEuro,
    title: "Klare Kalkulation",
    text: "Sie erhalten nach der Analyse einen nachvollziehbaren Festpreis statt offener Agentur-Aufwände.",
  },
  {
    icon: ServerCog,
    title: "Technik & Hosting",
    text: "Hosting in Deutschland, saubere technische Umsetzung und Betreuung auf Wunsch.",
  },
];

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-hero px-4 pb-16 pt-24 sm:pb-20 sm:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute left-[10%] top-[10%] h-96 w-96 rounded-full bg-primary/12 blur-3xl" />
        <div className="hero-orb hero-orb-delay absolute right-[8%] top-[16%] h-80 w-80 rounded-full bg-accent/12 blur-3xl" />
        <div className="hero-grid absolute inset-x-0 bottom-0 top-20 opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-card backdrop-blur-sm"
            >
              Website-Modernisierung für KMU
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[4.35rem]"
            >
              Wir modernisieren veraltete
              <br />
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Unternehmens-Websites
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl"
            >
              Für kleine und mittelständische Betriebe in Deutschland. Neue Website ohne
              internen Stress, mit klarem Ablauf, sauberer Technik und einem festen Ansprechpartner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              role="group"
              aria-label="Hero Aktionen"
            >
              <Button
                variant="hero"
                size="xl"
                className="w-full rounded-full px-8 py-4 text-base font-semibold sm:w-auto sm:text-lg"
                onClick={() => {
                  trackCTAClick("hero_cta_primary", "hero_section");
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                aria-label="Kostenlose Website-Analyse anfordern"
              >
                Kostenlose Website-Analyse anfordern
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full rounded-full border-slate-200/90 bg-white/90 px-8 py-4 text-base font-semibold text-slate-700 hover:bg-white sm:w-auto sm:text-lg"
                onClick={() => {
                  trackCTAClick("hero_cta_secondary", "hero_section");
                  document
                    .getElementById("process")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                aria-label="Ablauf ansehen"
              >
                Ablauf ansehen
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600"
              role="list"
              aria-label="Vertrauensindikatoren"
            >
              <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-white/78 px-4 py-2 shadow-card backdrop-blur-sm" role="listitem">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                klarer Ablauf statt Agentur-Chaos
              </div>
              <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-white/78 px-4 py-2 shadow-card backdrop-blur-sm" role="listitem">
                <MessageSquareMore className="h-4 w-4 text-primary" aria-hidden="true" />
                fester Ansprechpartner
              </div>
              <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-white/78 px-4 py-2 shadow-card backdrop-blur-sm" role="listitem">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                Hosting in Deutschland möglich
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-4"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-brand backdrop-blur-xl sm:p-6">
              <div className="border-b border-slate-200/80 pb-4">
                <div className="mb-3 inline-flex items-center rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Das feyro-System
                </div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-[1.8rem]">
                  Ein spezialisierter Relaunch-Prozess für Betriebe, die online professioneller wirken wollen
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Kein überladenes Agenturprojekt, sondern ein klarer Weg von der veralteten Website
                  zum modernen Unternehmensauftritt.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {trustItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.42, delay: 0.32 + index * 0.08 }}
                      className="rounded-[1.45rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,245,255,0.86))] p-4 shadow-card"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.58 }}
                className="mt-5 rounded-[1.45rem] border border-accent/18 bg-accent/8 p-4"
              >
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Ergänzende Kompetenz
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  KI und Automatisierung unterstützen wir ergänzend dort, wo sie im Betrieb wirklich
                  sinnvoll entlasten. Der Schwerpunkt bleibt klar auf der Website-Modernisierung.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
