import { AlertTriangle, Smartphone, Clock, ShieldQuestion, Users, Wrench } from "@/components/EvaIcons";

const WhyFeyroSection = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Der erste Eindruck passt nicht mehr",
      description: "Die Website wirkt älter als Ihr Unternehmen heute ist. Das kostet Vertrauen, noch bevor jemand anruft oder ein Angebot anfragt.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobil nicht mehr überzeugend",
      description: "Viele Interessenten kommen über das Smartphone. Wenn Bedienung, Ladezeit oder Darstellung nicht passen, springen passende Anfragen ab.",
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Technisch fühlt sich niemand zuständig",
      description: "Updates, Hosting, Formulare, Datenschutz und kleine Änderungen bleiben liegen, weil intern Zeit und klare Verantwortung fehlen.",
      color: "text-primary"
    },
    {
      icon: ShieldQuestion,
      title: "Rechtliche Unsicherheit bleibt im Kopf",
      description: "Cookie-Banner, Datenschutz, Impressum und eingebundene Dienste wurden über Jahre zusammengestückelt. Das erzeugt Unsicherheit und unnötiges Risiko.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Klassische Agenturprozesse wirken zu groß",
      description: "Viele Betriebe wollen kein monatelanges Strategieprojekt, sondern einen verlässlichen Ansprechpartner und eine Website, die wieder funktioniert.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Im Alltag fehlt die Zeit",
      description: "Das Tagesgeschäft läuft weiter. Deshalb muss die Modernisierung klar geführt sein, mit wenig Aufwand auf Ihrer Seite.",
      color: "text-accent"
    }
  ];

  return (
    <section className="bg-gradient-subtle py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 sm:mb-16 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-primary">
              Typische Ausgangslage
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Eine veraltete Website ist selten nur ein Designproblem.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-xl">
            Für viele kleine und mittelständische Betriebe ist die Website mitgewachsen:
            etwas Inhalt hier, ein altes Plugin dort, niemand fühlt sich richtig zuständig.
            Genau dort setzt feyro an.
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
                Nach dem Relaunch wissen Sie, wo alles steht – und wer sich darum kümmert.
              </h3>
              <p className="text-sm leading-relaxed text-white/80 sm:text-lg">
                Wir sortieren Inhalte und Technik, bauen sauber auf und bleiben ansprechbar.
                Kein Projekt, das nach dem Livegang ins Leere fällt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFeyroSection;
