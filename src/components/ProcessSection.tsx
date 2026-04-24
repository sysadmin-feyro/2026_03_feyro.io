import { MessageSquare, Search, Code, SlidersHorizontal, Rocket, Clock } from "@/components/EvaIcons";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Kostenloses Erstgespräch",
      duration: "Schritt 1",
      description: "Wir klären, wo Sie stehen, was Sie erreichen möchten und ob feyro für Ihr Vorhaben passend ist.",
      details: [
        "Kurz, konkret und unverbindlich",
        "Keine Verkaufspräsentation",
        "Klare Einordnung der nächsten Schritte"
      ]
    },
    {
      icon: Search,
      title: "Analyse der bestehenden Website",
      duration: "Schritt 2",
      description: "Wir prüfen Inhalte, Technik, Struktur, mobile Nutzung und rechtliche Grundlagen.",
      details: [
        "Was bleibt sinnvoll erhalten?",
        "Was sollte neu aufgebaut werden?",
        "Welche Risiken oder Lücken gibt es?"
      ]
    },
    {
      icon: Code,
      title: "Erstellung der neuen Seite",
      duration: "Schritt 3",
      description: "Wir bauen die neue Website strukturiert auf: verständlich, mobil optimiert und technisch sauber.",
      details: [
        "Neue Struktur und Gestaltung",
        "Technische Umsetzung ohne Baukasten",
        "Hosting, Datenschutz und Formulare"
      ]
    },
    {
      icon: SlidersHorizontal,
      title: "Abstimmung und Anpassungen",
      duration: "Schritt 4",
      description: "Sie prüfen die neue Seite in Ruhe. Wir arbeiten Feedback ein und erklären Entscheidungen verständlich.",
      details: [
        "Klare Feedbackrunde",
        "Feinschliff an Texten und Darstellung",
        "Vorbereitung des Livegangs"
      ]
    },
    {
      icon: Rocket,
      title: "Livegang und Betreuung",
      duration: "Schritt 5",
      description: "Wir bringen die Website live und bleiben auf Wunsch für Wartung, Technik und kleinere Änderungen zuständig.",
      details: [
        "Domain, Hosting und SSL",
        "Technische Wartung nach dem Start",
        "Fester Ansprechpartner"
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
            Fünf einfache Schritte, damit die Modernisierung planbar bleibt und im Tagesgeschäft
            nicht zur Dauerbaustelle wird.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-20 h-1 bg-gradient-brand opacity-15"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6" role="list" aria-label="Prozessschritte">
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
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {step.duration}
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
            Wenig Aufwand auf Ihrer Seite, klare Verantwortung auf unserer.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Die Zusammenarbeit ist bewusst einfach gehalten: Sie wissen jederzeit, was passiert,
            was wir brauchen und wann der nächste Schritt ansteht.
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
