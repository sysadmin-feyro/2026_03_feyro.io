import { Users, Target, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Klarheit",
      description: "Transparente Kommunikation, klare Strukturen und eindeutige Ergebnisse. Kein Fachchinesisch, sondern verständliche Lösungen."
    },
    {
      icon: Award,
      title: "Rechtssicherheit",
      description: "100% DSGVO-konforme Umsetzung, professionelle Cookie-Banner und vollständige Compliance-Dokumentation."
    },
    {
      icon: Users,
      title: "KI statt Chaos",
      description: "Moderne KI-Tools für datenbasierte Entscheidungen und optimierte Ergebnisse statt Bauchgefühl."
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
              Wir sind nicht einfach nur eine Web-Agentur. Wir sind Spezialisten für 
              <span className="text-primary font-semibold"> hochwertige Website-Relaunches</span>, 
              die Technik, Design und Rechtssicherheit perfekt vereinen.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Keine Baukästen:</span> Wir entwickeln 
                  individuelle Lösungen statt 08/15-Templates.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Kein Dumping:</span> Qualität hat ihren Preis – 
                  und wir stehen zu unserem Wert.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">KI-gestützt:</span> Moderne Tools für 
                  datenbasierte Optimierungen statt Bauchgefühl.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Unsere Philosophie
              </h3>
              <p className="text-muted-foreground">
                "Wir glauben an nachhaltige, professionelle Webentwicklung, die sowohl technisch 
                exzellent als auch rechtlich einwandfrei ist. Jeder Relaunch soll langfristig Wert 
                schaffen – für dich und deine Kunden."
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8" role="list" aria-label="Unsere Werte">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Was uns antreibt
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
            <div className="bg-gradient-brand rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Warum wir anders sind
              </h3>
              <p className="opacity-90 leading-relaxed">
                Während andere auf Masse setzen, fokussieren wir uns auf Klasse. 
                Jeder Website-Relaunch wird individuell geplant, KI-gestützt optimiert 
                und mit vollständiger DSGVO-Konformität umgesetzt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;