import { Button } from "@/components/ui/button";
import { Check, ArrowRight, RefreshCw, Settings } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const PricingSection = () => {
  const plans = [
    {
      icon: RefreshCw,
      name: "Website-Relaunch",
      price: "449",
      currency: "€",
      period: "einmalig",
      description: "Deine bestehende Website wird komplett überarbeitet und modernisiert.",
      features: [
        "Kompletter Website-Relaunch",
        "Modernes, responsives Design",
        "DSGVO-konformer Cookie-Banner",
        "SEO-Optimierung & Meta-Tags",
        "Performance-Optimierung",
        "Mobile-First Ansatz",
        "SSL-Zertifikat Setup",
        "30 Tage Support nach Launch"
      ],
      highlighted: true,
      cta: "Jetzt Relaunch starten",
      badge: "Einmalzahlung"
    },
    {
      icon: Settings,
      name: "Wartung & Service",
      price: "29",
      currency: "€",
      period: "pro Monat",
      description: "Laufende Pflege und technischer Support für deine Website.",
      features: [
        "Regelmäßige Updates & Backups",
        "Technischer Support per E-Mail",
        "Sicherheits-Monitoring",
        "Content-Anpassungen (bis 1h/Monat)",
        "Performance-Überwachung",
        "Uptime-Monitoring",
        "Monatlicher Status-Report",
        "Jederzeit kündbar"
      ],
      highlighted: false,
      cta: "Service beauftragen",
      badge: "Optional"
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
            Keine versteckten Kosten, keine Überraschungen. Faire Preise für hochwertige Arbeit.
          </p>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16" role="list" aria-label="Preispakete">
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
                  <p className={`mb-6 leading-relaxed ${
                    plan.highlighted ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8" aria-label={`Features für ${plan.name}`}>
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
                    aria-label={`${plan.cta} - ${plan.name} für ${plan.price}${plan.currency} ${plan.period}`}
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
              Was ist im Relaunch-Preis enthalten?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Alle Preise zzgl. MwSt.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span>Keine versteckten Kosten</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span>Flexible Zahlungsoptionen</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PricingSection;
