import { MessageSquare, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Erstgespräch & Analyse",
      duration: "Schritt 1",
      description: "Wir erfassen Ihr Vorhaben, analysieren den Status quo und ordnen ein, welche Form der Zusammenarbeit sinnvoll ist.",
      details: [
        "Ziele, Kontext und Rahmenbedingungen",
        "Einordnung zwischen Neuentwicklung, Relaunch oder Beratungsmandat",
        "Sichtung bestehender Systeme, Inhalte oder Prozesse",
        "Empfehlung für das weitere Vorgehen"
      ]
    },
    {
      icon: Lightbulb,
      title: "Konzept & Priorisierung",
      duration: "Schritt 2",
      description: "Auf Basis der Analyse definieren wir Struktur, Schwerpunkte und eine realistische Umsetzungslogik.",
      details: [
        "Informationsarchitektur oder Prozessbild",
        "Inhaltliche und technische Prioritäten",
        "Design- oder Automatisierungskonzept",
        "Klare Abgrenzung des Leistungsumfangs"
      ]
    },
    {
      icon: Code,
      title: "Entwicklung & Umsetzung",
      duration: "Schritt 3",
      description: "Wir setzen Websites, Relaunches oder ausgewählte Automatisierungen strukturiert und nachvollziehbar um.",
      details: [
        "Technische Entwicklung oder Implementierung",
        "DSGVO-konforme Basis und saubere Integrationen",
        "Enge Abstimmung an den relevanten Punkten",
        "Dokumentierte Entscheidungen statt Black Box"
      ]
    },
    {
      icon: TestTube,
      title: "Testing & Optimierung",
      duration: "Schritt 4",
      description: "Vor Auslieferung prüfen wir Struktur, Technik und Nutzbarkeit und schärfen die letzten Details.",
      details: [
        "Qualitätssicherung und technische Prüfung",
        "Responsiveness, Performance und Inhalt",
        "Feedbackschleife für letzte Anpassungen",
        "Saubere Vorbereitung für den Rollout"
      ]
    },
    {
      icon: Rocket,
      title: "Rollout & Begleitung",
      duration: "Schritt 5",
      description: "Nach der Umsetzung begleiten wir Go-Live, Übergabe oder nächste Ausbaustufen verlässlich weiter.",
      details: [
        "Go-Live, Übergabe oder Mandatsfortsetzung",
        "Dokumentation und Orientierung für den Betrieb",
        "Begleitung bei nächsten Entscheidungen",
        "Langfristig anschlussfähige technische Basis"
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-background" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            So läuft die <span className="text-primary">Zusammenarbeit</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ein klarer Ablauf für neue Websites, Relaunches und Beratungsmandate für KI
            sowie Prozessautomatisierung.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-20 h-1 bg-gradient-brand opacity-15"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8" role="list" aria-label="Prozessschritte">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative" role="listitem">
                  {/* Timeline Connector - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-brand opacity-15"></div>
                  )}

                  {/* Step Card */}
                  <div className="relative group">
                    {/* Icon Circle */}
                    <div className="flex justify-center lg:mb-8 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center shadow-brand transition-all duration-300 group-hover:scale-105 z-10 relative">
                          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        {/* Step Number */}
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-card">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-brand transition-all duration-300 group-hover:-translate-y-1">
                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold mb-4">
                        ⏱ {step.duration}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-words">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-gradient-panel p-8 text-center shadow-card">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 px-2">
            Klare Schritte statt unklarer Projektphasen
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Umfang und Dauer richten sich nach Aufgabe und Tiefe des Vorhabens. Entscheidend ist,
            dass Sie jederzeit wissen, woran gearbeitet wird und was als Nächstes folgt.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Transparente Kommunikation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Regelmäßige Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Fixe Meilensteine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
