import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useAnalytics from "@/hooks/useAnalytics";

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-hero px-4 pb-20 pt-28 sm:pb-28 sm:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute left-[10%] top-[10%] h-96 w-96 rounded-full bg-primary/12 blur-3xl" />
        <div className="hero-orb hero-orb-delay absolute right-[8%] top-[16%] h-80 w-80 rounded-full bg-accent/12 blur-3xl" />
        <div className="hero-grid absolute inset-x-0 bottom-0 top-20 opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center rounded-full border border-primary/15 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-card backdrop-blur-sm"
        >
          Ohne Baukasten · Ohne US-Cloud
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[4.35rem]"
        >
          Eine Website, die wieder repräsentiert
          <br />
          <span className="bg-gradient-brand bg-clip-text text-transparent">
            wofür Sie stehen.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl"
        >
          Für mittelständische Unternehmen in Deutschland: technisch sauber, rechtssicher
          und ohne Baukasten. Ein Ansprechpartner, klarer Ablauf, fertig.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
            aria-label="Erstgespräch vereinbaren"
          >
            Erstgespräch vereinbaren
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
      </div>
    </section>
  );
};

export default HeroSection;
