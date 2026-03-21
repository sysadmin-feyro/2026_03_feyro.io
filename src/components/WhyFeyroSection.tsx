import { Shield, Bot, Globe, Ban, Users, Zap } from "lucide-react";

const WhyFeyroSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Individuelle Entwicklung",
      description: "Keine Templates, keine Baukästen. Jede Website wird technisch sauber von Grund auf entwickelt – mit modernen Web-Standards, die langfristig tragen.",
      color: "text-primary"
    },
    {
      icon: Bot,
      title: "KI als Werkzeug, nicht als Buzzword",
      description: "Wir setzen KI dort ein, wo sie messbar Mehrwert schafft: bei der Analyse, der Prozessautomatisierung und der Optimierung von Inhalten und Abläufen.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Rechtssicherheit by Default",
      description: "DSGVO-Konformität ist keine Add-on-Option, sondern Teil jedes Projekts. Cookie-Consent, Datenschutz und Impressum werden strukturiert und dokumentiert umgesetzt.",
      color: "text-primary"
    },
    {
      icon: Ban,
      title: "Keine US-Cloud-Abhängigkeiten",
      description: "Hosting, Analytics, E-Mail und Tooling laufen ausschließlich auf deutschen oder europäischen Infrastrukturen. Volle Datensouveränität ohne Kompromisse.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Lean by Design",
      description: "Ein direkter Ansprechpartner, ein Netzwerk aus spezialisierten Freelancern. Kein Overhead, kein Callcenter, kein aufgeblähtes Agenturmodell – nur Ergebnis.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Performance als Standard",
      description: "Core Web Vitals, Ladezeiten und technische Sauberkeit sind keine Extras. Jede Auslieferung wird auf Performance, Barrierefreiheit und SEO geprüft.",
      color: "text-accent"
    }
  ];

  return (
    <section className="bg-gradient-subtle py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 sm:mb-16 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-primary">
              Warum feyro.io
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Digitale Infrastruktur, die hält was sie verspricht.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-xl">
            Wir bauen keine Websites um der Websites willen. Wir strukturieren digitale Prozesse,
            schaffen rechtssichere Grundlagen und setzen KI dort ein, wo sie echten Nutzen bringt –
            nicht als Marketingversprechen, sondern als Arbeitsmittel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-[1.3rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.7))] p-5 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-brand sm:rounded-[1.8rem] sm:p-8"
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,246,255,0.88))] ${feature.color} group-hover:scale-110 transition-transform duration-300 sm:mb-6 sm:h-14 sm:w-14`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-16">
          <div className="mx-auto max-w-5xl rounded-[1.5rem] bg-gradient-brand p-6 text-white shadow-brand sm:rounded-[2rem] sm:p-10">
            <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <h3 className="font-display text-xl font-bold sm:text-3xl">
                Wir entwickeln keine austauschbaren Standardlösungen. Wir entwickeln digitale Infrastruktur.
              </h3>
              <p className="text-sm leading-relaxed text-white/80 sm:text-lg">
                Keine Baukasten-Lösung, kein austauschbares Template, keine Abhängigkeit von US-Cloud-Diensten.
                feyro.io richtet sich an Unternehmen, die digital professionell aufgestellt sein wollen –
                rechtssicher, performant und zukunftsfähig.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFeyroSection;
