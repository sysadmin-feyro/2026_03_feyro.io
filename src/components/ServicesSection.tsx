import { Button } from "@/components/ui/button";
import {
  Globe,
  RefreshCw,
  Bot,
  Shield,
  BarChart2,
  Wrench,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website-Neuentwicklung",
      description: "Individuelle Webpräsenz von Grund auf – technisch sauber, performant und ohne Baukasten-Kompromisse. Entwickelt auf Basis moderner Web-Technologien, optimiert für Suchmaschinen und vollständig DSGVO-konform.",
      features: [
        "Maßgeschneidertes Design ohne Templates",
        "Mobile-First & Core Web Vitals optimiert",
        "Strukturierte Daten & On-Page-SEO",
        "DSGVO-konformes Tracking mit Matomo"
      ],
      highlighted: false
    },
    {
      icon: RefreshCw,
      title: "Website-Relaunch",
      description: "Wir entwickeln eine neue Website auf Basis Ihrer bestehenden Website. Inhalte, Domain und vorhandene Stärken werden übernommen, Struktur, Design und Technik dagegen konsequent neu aufgebaut.",
      features: [
        "KI-gestützte Ist-Analyse & Audit",
        "Übernahme bestehender Inhalte & Domain",
        "Neue Seitenstruktur, neue Gestaltung, saubere Technik",
        "In der Regel in 7 Werktagen live"
      ],
      highlighted: true
    },
    {
      icon: Bot,
      title: "KI-Beratung & Prozessautomatisierung",
      description: "Digitale Prozesse intelligent gestalten: Wir analysieren Ihre Abläufe, identifizieren Automatisierungspotenziale und implementieren KI-gestützte Lösungen – praxisnah, skalierbar und ohne Vendor-Lock-in bei US-Anbietern.",
      features: [
        "KI-Strategie Workshop (90 Min.)",
        "Prozessanalyse & Automatisierungs-Roadmap",
        "Implementierung & Schulung",
        "Ausschließlich EU-konforme KI-Tools"
      ],
      highlighted: false
    },
    {
      icon: Shield,
      title: "DSGVO & Datenschutz-Compliance",
      description: "Rechtssicherheit ist kein Optional-Feature. Wir implementieren vollständige Datenschutz-Compliance: von der technischen Umsetzung bis zur Dokumentation – ohne Abhängigkeit von US-Diensten wie Google Analytics oder Hotjar.",
      features: [
        "Rechtssicherer Cookie-Consent (Consent Mode v2)",
        "Datenschutzerklärung & Impressum",
        "Technische Dokumentation & Nachweise",
        "Regelmäßige Compliance-Reviews"
      ]
    },
    {
      icon: BarChart2,
      title: "SEO & digitale Sichtbarkeit",
      description: "Nachhaltige Suchmaschinenoptimierung auf technischer und inhaltlicher Ebene. Kein Black-Hat, kein Baukasten-SEO – strukturierte Daten, saubere Architektur und messbare Ergebnisse.",
      features: [
        "Technisches SEO-Audit & On-Page-Optimierung",
        "Schema.org & strukturierte Daten",
        "Pagespeed & Core Web Vitals",
        "DSGVO-konformes Analytics (Matomo / Plausible)"
      ]
    },
    {
      icon: Wrench,
      title: "Wartung & technischer Betrieb",
      description: "Laufender Betrieb ohne Eigenaufwand: Sicherheits-Updates, Backups, Monitoring und Content-Anpassungen – alles in einem monatlichen Festpreis ohne Überraschungen.",
      features: [
        "Regelmäßige Sicherheits- & Dependency-Updates",
        "Automatisierte Backups auf deutschen Servern",
        "Uptime-Monitoring & Incident-Response",
        "Content-Anpassungen bis 1 Std./Monat inklusive"
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
            Von der neuen Website auf Basis Ihrer bestehenden Seite bis zur laufenden Wartung:
            alles aus einer Hand, technisch sauber und vollständig DSGVO-konform.
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
                    ? 'bg-gradient-to-br from-blue-600 via-violet-600 to-pink-500 text-white border-transparent shadow-brand hover:shadow-glow'
                    : 'bg-card border-border hover:border-primary/30 shadow-card hover:shadow-brand'
                }`}
                role="listitem"
              >
                  {service.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Meist gebucht
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

                  <p className={`mb-6 leading-relaxed text-sm ${
                    service.highlighted ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>

                  <ul className="space-y-3" aria-label={`Details zu ${service.title}`}>
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
              Unverbindliches Erstgespräch vereinbaren
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Wir analysieren Ihre aktuelle Website und zeigen konkret, wie daraus eine neue,
              stärkere Website entstehen kann - kostenlos, strukturiert und ohne Verkaufsdruck.
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
                Jetzt Kontakt aufnehmen
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
