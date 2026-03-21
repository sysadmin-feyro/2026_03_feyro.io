import { Button } from "@/components/ui/button";
import { Check, ArrowRight, RefreshCw, Bot, Wrench } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const PricingSection = () => {
  const plans = [
    {
      icon: RefreshCw,
      name: "Website-Relaunch",
      price: "449",
      currency: "€",
      period: "einmalig",
      description: "Bestehende Website komplett modernisieren – neues Design, saubere Technik, DSGVO-konform. In der Regel in 7 Werktagen live.",
      features: [
        "Kompletter Website-Relaunch",
        "Modernes, responsives Design",
        "DSGVO-konformer Cookie-Consent",
        "On-Page-SEO & strukturierte Daten",
        "Performance-Optimierung (Core Web Vitals)",
        "Mobile-First Entwicklung",
        "SSL-Zertifikat & Hosting-Setup",
        "30 Tage Support nach Go-Live"
      ],
      highlighted: true,
      cta: "Relaunch anfragen",
      badge: "Einmalzahlung"
    },
    {
      icon: Bot,
      name: "KI-Strategie Workshop",
      price: "349",
      currency: "€",
      period: "einmalig",
      description: "90-minütiger strukturierter Workshop: Analyse Ihrer aktuellen Prozesse, Identifikation von Automatisierungspotenzialen, konkreter Maßnahmenplan.",
      features: [
        "90 Min. strukturiertes Strategie-Gespräch",
        "Ist-Analyse digitaler Prozesse",
        "Automatisierungs-Roadmap",
        "Tool-Empfehlungen (ausschließlich EU-konform)",
        "Schriftliche Zusammenfassung & Maßnahmenplan",
        "Anrechenbar auf Folgeprojekte",
        "Remote via Video-Call",
        "Auf Wunsch mit Folgetermin"
      ],
      highlighted: false,
      cta: "Workshop buchen",
      badge: "Neu"
    },
    {
      icon: Wrench,
      name: "Wartung & Betrieb",
      price: "29",
      currency: "€",
      period: "pro Monat",
      description: "Laufender technischer Betrieb ohne Eigenaufwand: Updates, Backups, Monitoring und Content-Anpassungen als monatlicher Festpreis.",
      features: [
        "Regelmäßige Sicherheits- & Dependency-Updates",
        "Automatisierte Backups auf deutschen Servern",
        "Uptime-Monitoring & Incident-Response",
        "Technischer Support per E-Mail",
        "Content-Anpassungen bis 1 Std./Monat",
        "Monatlicher Status-Report",
        "Keine Mindestlaufzeit",
        "Jederzeit kündbar"
      ],
      highlighted: false,
      cta: "Wartung beauftragen",
      badge: "Monatlich"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-subtle" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transparente <span className="text-primary">Preise</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Festpreise ohne versteckte Kosten. Alle Leistungen sind klar definiert –
            keine Überraschungen auf der Rechnung.
          </p>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16" role="list" aria-label="Preispakete">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <ScrollAnimation key={index} delay={index * 0.15} className="h-full">
                <div
                  className={`h-full relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-blue-600 via-violet-600 to-pink-500 text-white border-transparent shadow-brand hover:shadow-glow'
                      : 'bg-card border-border hover:border-primary/30 shadow-card hover:shadow-brand'
                  }`}
                  role="listitem"
                >
                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      plan.highlighted
                        ? 'bg-pink-500 text-white'
                        : 'bg-secondary text-foreground'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                    <Icon className="w-12 h-12" aria-hidden="true" />
                  </div>

                  {/* Plan Name */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 break-words ${
                    plan.highlighted ? 'text-white' : 'text-foreground'
                  }`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl font-bold ${
                        plan.highlighted ? 'text-white' : 'text-primary'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-2xl font-semibold ${
                        plan.highlighted ? 'text-white/90' : 'text-foreground'
                      }`}>
                        {plan.currency}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${
                      plan.highlighted ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {plan.period}
                    </p>
                    <p className={`text-xs mt-0.5 ${
                      plan.highlighted ? 'text-white/60' : 'text-muted-foreground/70'
                    }`}>
                      zzgl. 19% MwSt.
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed text-sm ${
                    plan.highlighted ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8" aria-label={`Leistungsumfang ${plan.name}`}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-white' : 'text-primary'
                        }`} aria-hidden="true" />
                        <span className={`text-sm ${
                          plan.highlighted ? 'text-white/90' : 'text-muted-foreground'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={plan.highlighted ? "secondary" : "hero"}
                    size="lg"
                    className={`w-full group ${!plan.highlighted ? 'bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 text-white hover:opacity-90 border-0' : ''}`}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    aria-label={`${plan.cta} – ${plan.name}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Bottom Info */}
        <ScrollAnimation delay={0.3}>
          <div className="bg-card rounded-2xl border border-border p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Individuelle Projekte auf Anfrage
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Alle Preise zzgl. 19% MwSt.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span>Keine versteckten Kosten</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Neue Website auf Anfrage (individuelles Angebot)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span>KI-Workshop anrechenbar auf Folgeprojekte</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PricingSection;
