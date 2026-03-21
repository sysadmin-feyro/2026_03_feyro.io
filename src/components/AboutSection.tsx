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
      description: "Kein Büro, kein Overhead, kein aufgeblähtes Agenturmodell. Das hält unsere Struktur schlank und Entscheidungen schnell."
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
              für Unternehmen, die ihren Online-Auftritt professionell erneuern und digitale Prozesse sauber aufstellen wollen.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Ein Ansprechpartner:</span>{" "}
                  Hinter feyro.io steht ein erfahrener Entwickler und Digitalstratege mit einem
                  kleinen Netzwerk aus spezialisierten Freelancern - je nach Projektanforderung gezielt ergänzt.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Kein Agentur-Overhead:</span>{" "}
                  Remote-First bedeutet für uns: schlanke Strukturen, klare Kommunikation und maximale
                  Fokussierung auf das Projektergebnis statt auf Selbstvermarktung.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Deutschland, 100%:</span>{" "}
                  Entwicklung, Hosting, Kommunikation und rechtliche Grundlagen - alles findet
                  im deutschen und europäischen Rechtsraum statt.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-gradient-panel p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" aria-hidden="true" />
                Lean by Design
              </h3>
              <p className="text-muted-foreground">
                Kurze Wege, klare Verantwortung und keine unnötigen Schleifen:
                So bleibt die Umsetzung schnell, nachvollziehbar und wirtschaftlich sinnvoll.
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
            <div className="rounded-xl bg-gradient-brand p-8 text-white shadow-brand">
              <h3 className="text-xl font-bold mb-4">
                Was uns unterscheidet
              </h3>
              <p className="opacity-90 leading-relaxed">
                Wir verkaufen keine Paket-Show. Wir entwickeln konkrete Ergebnisse:
                eine tragfähige Website, eine saubere technische Basis oder ein Mandat, das Prozesse wirklich verbessert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
