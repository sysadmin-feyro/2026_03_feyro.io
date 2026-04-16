import { Target, Award, Users, Laptop } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Klarer Ablauf statt Agentur-Chaos",
      description: "Sie wissen, was passiert, was benötigt wird und welcher Schritt als Nächstes folgt. Ohne Fachchinesisch und ohne aufgeblähte Konzeptphasen."
    },
    {
      icon: Award,
      title: "Technisch sauber und wartbar",
      description: "Die Website soll nicht nur gut aussehen, sondern zuverlässig laufen: schnell, mobil, rechtlich sauber und langfristig betreubar."
    },
    {
      icon: Laptop,
      title: "Fester Ansprechpartner",
      description: "Sie sprechen direkt mit der Person, die Ihr Vorhaben versteht und verantwortet. Kein Callcenter, kein Weiterreichen durch Abteilungen."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Wer hinter <span className="text-primary">feyro.io</span> steht
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ich bin David, Gründer von feyro. Ich modernisiere veraltete Websites für kleine
              und mittelständische Betriebe – mit klarem Ablauf, ehrlicher Kommunikation
              und sauberer Technik.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Fokussierter Spezialist:</span>{" "}
                  feyro ist bewusst auf moderne Unternehmens-Websites für KMU ausgerichtet.
                  Keine Werbeagentur, die alles anbietet.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Pragmatische Umsetzung:</span>{" "}
                  Wir arbeiten strukturiert, aber nicht kompliziert. Das Ziel ist ein professioneller
                  Auftritt, der im Alltag funktioniert.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Technik aus einer Hand:</span>{" "}
                  Relaunch, Hosting, Wartung und spätere Anpassungen bleiben übersichtlich
                  und verantwortbar.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-gradient-panel p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" aria-hidden="true" />
                Bewusst spezialisiert
              </h3>
              <p className="text-muted-foreground">
                feyro ist passend für Betriebe, die keinen lauten Agenturauftritt suchen,
                sondern eine ruhige, zuverlässige Modernisierung ihrer Website.
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
                Wir verkaufen keine große Show. Wir lösen ein konkretes Problem:
                Ihre Website wirkt wieder professionell, läuft technisch sauber
                und wird langfristig betreut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
