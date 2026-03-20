import { Shield, Bot, Zap, Users, Target, Award } from "lucide-react";

const WhyFeyroSection = () => {
  const features = [
    {
      icon: Shield,
      title: "DSGVO-Konformität",
      description: "Vollständige Rechtssicherheit mit professionellem Cookie-Banner und Datenschutz-Compliance.",
      color: "text-primary"
    },
    {
      icon: Bot,
      title: "KI-gestützte Analyse",
      description: "Intelligente Optimierung deiner Website-Performance und Benutzererfahrung durch moderne KI-Tools.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "SEO & Performance",
      description: "Core Web Vitals-Optimierung, strukturierte Daten und perfekte Vorbereitung für Suchmaschinen.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Keine Baukästen",
      description: "Maßgeschneiderte Lösungen statt 08/15-Templates. Individuelle Entwicklung für deine Anforderungen.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Direkter Kontakt, klare Kommunikation und transparente Projektabwicklung ohne Callcenter.",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Premium-Qualität",
      description: "Hochwertige Webentwicklung mit modernen Standards, die sich von Billig-Anbietern abhebt.",
      color: "text-accent"
    }
  ];

  return (
    <section className="bg-gradient-subtle py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 sm:mb-16 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-primary">
              Warum Feyro
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Eine Hauptseite muss sich nach Gegenwart anfühlen.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-xl">
            Wir gestalten digitale Oberflächen, die Klarheit ausstrahlen, technisch sauber
            gebaut sind und dein Unternehmen nicht wie einen weiteren Anbieter im Markt wirken lassen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group rounded-[1.3rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.7))] p-5 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-brand sm:rounded-[1.8rem] sm:p-8"
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary ${feature.color} group-hover:scale-110 transition-transform duration-300 sm:mb-6 sm:h-14 sm:w-14`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-16">
          <div className="mx-auto max-w-5xl rounded-[1.5rem] bg-[hsl(220_40%_11%)] p-6 text-white shadow-[0_30px_80px_rgba(9,17,32,0.18)] sm:rounded-[2rem] sm:p-10">
            <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <h3 className="font-display text-xl font-bold sm:text-3xl">
                Wir verkaufen keine nette Website. Wir entwickeln digitalen Eindruck.
              </h3>
              <p className="text-sm leading-relaxed text-white/72 sm:text-lg">
                Keine 99-Euro-Lösung, keine austauschbare Template-Oberfläche und kein halbgares Branding.
                Feyro richtet sich an Unternehmen, die online professionell, zeitgemäß und glaubwürdig auftreten wollen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFeyroSection;
