import { Target, Award, Users, Laptop } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Direkt & ergebnisorientiert",
      description: "Kein Fachchinesisch, keine aufgeblähten Konzeptpapiere. Wir analysieren, priorisieren und liefern – mit klarer Kommunikation auf jedem Schritt."
    },
    {
      icon: Award,
      title: "Qualität ohne Kompromisse",
      description: "Rechtssicher, performant, wartbar. Wir setzen keine Standards, die wir selbst nicht erfüllen würden."
    },
    {
      icon: Laptop,
      title: "Remote-First, Deutschland-basiert",
      description: "Kein Büro, kein Overhead, kein aufgeblähtes Agenturmodell. Das hält unsere Struktur schlank und unsere Preise fair."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Über <span className="text-primary">feyro.io</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              feyro.io ist kein klassisches Webdesign-Studio.
              Wir sind ein{" "}
              <span className="text-primary font-semibold">digitaler Infrastrukturpartner</span>{" "}
              für Unternehmen, die ihren Online-Auftritt und ihre Prozesse professionell aufgestellt haben wollen.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Ein Ansprechpartner:</span>{" "}
                  Hinter feyro.io steht ein erfahrener Entwickler und Digitalstratege mit einem
                  Netzwerk aus spezialisierten Freelancern – je nach Projektanforderung skalierbar.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Kein Agentur-Overhead:</span>{" "}
                  Remote-First bedeutet für uns: schlanke Strukturen, faire Preise und maximale
                  Fokussierung auf das Projektergebnis statt auf Selbstvermarktung.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Deutschland, 100%:</span>{" "}
                  Entwicklung, Hosting, Kommunikation und rechtliche Grundlagen – alles findet
                  im deutschen und europäischen Rechtsraum statt.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" aria-hidden="true" />
                Lean by Design
              </h3>
              <p className="text-muted-foreground">
                „Ein Team ohne Overhead ist kein Nachteil – es ist ein Geschäftsmodell.
                Wir bringen die richtigen Spezialisten an den Tisch, wenn sie gebraucht werden.
                Nicht vorher, nicht pauschal."
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8" role="list" aria-label="Unsere Prinzipien">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Wie wir arbeiten
              </h3>
            </div>

            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-card rounded-xl shadow-card hover:shadow-brand transition-all duration-300 group"
                  role="listitem"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Differentiator Box */}
            <div className="bg-gradient-to-br from-blue-600 via-violet-600 to-pink-500 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Was uns unterscheidet
              </h3>
              <p className="opacity-90 leading-relaxed">
                Während Agenturen auf Masse und Retainer setzen, fokussieren wir uns auf
                klare Projektziele, messbare Ergebnisse und langfristige Partnerschaft ohne
                künstliche Abhängigkeiten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
