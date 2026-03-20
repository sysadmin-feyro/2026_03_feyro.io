import { Button } from "@/components/ui/button";
import { 
  RefreshCw, 
  Bot, 
  Shield, 
  Search, 
  Gauge, 
  Cookie,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Website-Relaunch",
      description: "Wir entwickeln eine neue Website auf Basis deiner bestehenden Website – mit modernem Design, klarer Struktur und optimierter Technik.",
      features: [
        "Responsive Design für alle Geräte",
        "Moderne, benutzerfreundliche Oberfläche",
        "Performance-Optimierung",
        "Barrierefreie Gestaltung"
      ],
      highlighted: true
    },
    {
      icon: Bot,
      title: "KI-Analyse & Optimierung",
      description: "Intelligente Bewertung deiner aktuellen Website mit KI-gestützten Verbesserungsvorschlägen.",
      features: [
        "Automated Content-Audit",
        "UX/UI Optimierungsvorschläge",
        "Conversion-Rate Analyse",
        "Competitor Benchmarking"
      ]
    },
    {
      icon: Shield,
      title: "DSGVO & Cookie-Consent",
      description: "Vollständige Rechtssicherheit mit professionellem Cookie-Banner und Datenschutz-Compliance.",
      features: [
        "Rechtssicherer Cookie-Banner",
        "Consent Mode v2 Integration",
        "Datenschutzerklärung erstellen",
        "DSGVO-konforme Umsetzung"
      ]
    },
    {
      icon: Search,
      title: "SEO & SEA Ready",
      description: "Optimale Vorbereitung für Suchmaschinen mit strukturierten Daten und Meta-Optimierung.",
      features: [
        "On-Page SEO Optimierung",
        "Strukturierte Daten (Schema.org)",
        "Meta-Tags & Open Graph",
        "Google Analytics 4 Setup"
      ]
    },
    {
      icon: Gauge,
      title: "Performance-Optimierung",
      description: "Maximale Ladegeschwindigkeit und optimale Core Web Vitals für bessere Rankings.",
      features: [
        "Core Web Vitals Optimierung",
        "Bildkomprimierung & -optimierung",
        "Code-Splitting & Lazy Loading",
        "CDN-Integration"
      ]
    },
    {
      icon: Cookie,
      title: "Consent Management",
      description: "Professionelle Cookie-Verwaltung mit allen rechtlichen Anforderungen und technischer Integration.",
      features: [
        "Granulare Cookie-Kategorien",
        "Benutzerfreundliche Interfaces",
        "Dokumentation & Nachweise",
        "Automatische Updates"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="text-primary">Leistungen</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Von der KI-gestützten Analyse bis zur neuen Website auf Basis deiner bisherigen Website -
            wir bieten alles aus einer Hand für deine professionelle Webpräsenz.
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" role="list" aria-label="Unsere Leistungen">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation 
                key={index} 
                delay={index * 0.1}
                className="h-full"
              >
              <div 
                className={`h-full group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  service.highlighted 
                    ? 'bg-gradient-brand text-white border-transparent shadow-brand hover:shadow-glow' 
                    : 'bg-card border-border hover:border-primary/30 shadow-card hover:shadow-brand'
                }`}
                role="listitem"
              >
                  {service.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Beliebteste Option
                      </span>
                    </div>
                  )}

                  <div className={`mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    service.highlighted ? 'text-white' : 'text-primary'
                  }`}>
                    <Icon className="w-12 h-12" aria-hidden="true" />
                  </div>

                  <h3 className={`text-lg sm:text-xl font-semibold mb-4 break-words ${
                    service.highlighted ? 'text-white' : 'text-foreground'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${
                    service.highlighted ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>

                  <ul className="space-y-3" aria-label={`Features für ${service.title}`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          service.highlighted ? 'text-white' : 'text-primary'
                        }`} aria-hidden="true" />
                        <span className={`text-sm ${
                          service.highlighted ? 'text-white/90' : 'text-muted-foreground'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* CTA Section */}
        <ScrollAnimation delay={0.5}>
          <div className="text-center bg-secondary/50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bereit für deinen Website-Relaunch?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lass uns gemeinsam analysieren, wie aus deiner bestehenden Website eine neue, stärkere Website werden kann.
              Kostenlose Erstberatung inklusive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Kostenlose Website-Analyse
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Preise ansehen
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;
