import { Button } from "@/components/ui/button";
import {
  Globe,
  RefreshCw,
  Bot,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Website-Relaunch & Modernisierung",
      description: "Aus einer veralteten Website wird ein klarer, mobiler Auftritt – mit sauberer Technik, neuer Struktur und einem Design, das zum Unternehmen passt.",
      features: [
        "Analyse der bestehenden Website und Inhalte",
        "Neue Struktur, Gestaltung und technische Basis",
        "Mobile-optimiert, schnell und verständlich",
        "Go-Live, Hosting, Wartung und Betreuung"
      ],
      highlighted: true
    },
    {
      icon: Globe,
      title: "Website-Neuentwicklung",
      description: "Wenn die alte Basis nicht mehr trägt, entsteht eine neue Unternehmens-Website von Grund auf: sauber geplant, schlank umgesetzt und langfristig betreut.",
      features: [
        "Klare Seitenstruktur und Nutzerführung",
        "Professionelles Design ohne Baukasten",
        "Technische SEO-Basis und Performance",
        "DSGVO-konforme Formulare und Infrastruktur"
      ],
      highlighted: false
    },
    {
      icon: Bot,
      title: "KI & Automatisierung als Zusatz",
      description: "Ergänzend prüfen wir, wo einfache Automatisierung oder KI-Unterstützung wirklich Arbeit spart. Sachlich, praxisnah und ohne Buzzword-Show.",
      features: [
        "Einordnung sinnvoller Anwendungsfälle",
        "Automatisierung wiederkehrender Aufgaben",
        "Tool-Auswahl mit Blick auf Datenschutz",
        "Begleitung bei Einführung und Schulung"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Drei Leistungen – <span className="bg-gradient-brand bg-clip-text text-transparent">ein Ansprechpartner</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ein klarer Weg zur modernen Unternehmens-Website: erst ordnen, dann sauber
            neu aufbauen, anschließend zuverlässig betreuen.
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16" role="list" aria-label="Unsere Leistungen">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation
                key={index}
                delay={index * 0.1}
                className="h-full"
              >
              <div
                className={`h-full group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 active:scale-[0.99] ${
                  service.highlighted
                    ? 'bg-gradient-brand text-white border-transparent shadow-brand'
                    : 'bg-card border-border hover:border-primary/30 shadow-card hover:shadow-brand'
                }`}
                role="listitem"
              >
                  {service.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="rounded-full border border-white/70 bg-white px-4 py-1 text-sm font-semibold text-primary shadow-card">
                          Kernangebot
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
          <div className="text-center rounded-2xl border border-border bg-gradient-panel p-12 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              In 30 Minuten wissen Sie, was Ihre Website braucht.
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Im kostenlosen Erstgespräch prüfen wir Ihre Website, schätzen den Aufwand
              realistisch ein und sagen, was sinnvoll ist – und was nicht. Ohne Verkaufsdruck.
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
                Kostenloses Erstgespräch anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => {
                  const processSection = document.getElementById('process');
                  processSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Ablauf ansehen
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;
