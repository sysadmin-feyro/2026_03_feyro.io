import { MessageSquare, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Erstgespräch & Analyse",
      duration: "Tag 1",
      description: "Wir analysieren deine aktuelle Website, verstehen deine Ziele und definieren den Projektumfang. Kostenlose Erstanalyse inklusive.",
      details: [
        "Website-Audit & Performance-Check",
        "Zielgruppen-Analyse",
        "Wettbewerbs-Vergleich",
        "Unverbindliches Angebot"
      ]
    },
    {
      icon: Lightbulb,
      title: "Konzept & Design",
      duration: "Tag 2",
      description: "Auf Basis der Analyse entwickeln wir ein maßgeschneidertes Konzept mit modernem Design und klarer Struktur.",
      details: [
        "Sitemap & Informationsarchitektur",
        "Wireframes & Design-Entwürfe",
        "Corporate Design Integration",
        "Content-Strategie"
      ]
    },
    {
      icon: Code,
      title: "Entwicklung & Umsetzung",
      duration: "Tag 3-5",
      description: "Programmierung der Website mit modernsten Technologien, DSGVO-Konformität und SEO-Optimierung von Anfang an.",
      details: [
        "Frontend-Entwicklung (React/Vite)",
        "DSGVO-konforme Integration",
        "SEO-Optimierung & Meta-Tags",
        "Performance-Tuning"
      ]
    },
    {
      icon: TestTube,
      title: "Testing & Optimierung",
      duration: "Tag 6",
      description: "Ausführliche Tests auf allen Geräten, Browser-Kompatibilität und finale Optimierungen für maximale Performance.",
      details: [
        "Cross-Browser Testing",
        "Mobile Responsiveness",
        "Core Web Vitals Check",
        "Letzte Anpassungen"
      ]
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      duration: "Tag 7",
      description: "Deine Website geht live! Wir unterstützen dich beim Launch und stehen dir auch danach für Fragen zur Verfügung.",
      details: [
        "Domain-Setup & SSL",
        "Live-Schaltung",
        "Analytics-Integration",
        "30 Tage Support inklusive"
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-background" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dein Weg zur <span className="text-primary">neuen Website</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Transparenter Prozess von der ersten Idee bis zum erfolgreichen Launch. 
            Projektdauer: <span className="text-primary font-semibold">7 Tage</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-20 h-1 bg-gradient-brand opacity-20"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8" role="list" aria-label="Prozessschritte">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative" role="listitem">
                  {/* Timeline Connector - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-brand opacity-20"></div>
                  )}

                  {/* Step Card */}
                  <div className="relative group">
                    {/* Icon Circle */}
                    <div className="flex justify-center lg:mb-8 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center shadow-brand group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 z-10 relative">
                          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        {/* Step Number */}
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-card">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-brand transition-all duration-300 group-hover:-translate-y-2">
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
        <div className="mt-16 text-center bg-secondary/50 rounded-2xl p-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 px-2">
            Gesamtdauer: 7 Tage vom Erstgespräch bis zum Launch
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Jedes Projekt ist individuell. Die Zeitangaben sind Richtwerte und können je nach 
            Projektumfang variieren. Wir informieren dich transparent über jeden Schritt.
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
