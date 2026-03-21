import { Shield, Server, Flag, Ban, Users } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Vollständige Datenschutz-Compliance nach EU-Recht"
    },
    {
      icon: Server,
      title: "Hosting in Deutschland",
      description: "Ausschließlich deutsche und europäische Server"
    },
    {
      icon: Flag,
      title: "Made in Germany",
      description: "Entwicklung, Beratung und Support aus Deutschland"
    },
    {
      icon: Ban,
      title: "Keine US-Dienste",
      description: "Keine Abhängigkeit von US-Cloud-Anbietern"
    },
    {
      icon: Users,
      title: "Direkter Ansprechpartner",
      description: "Kein Callcenter – persönliche Projektbegleitung"
    }
  ];

  return (
    <section className="border-y border-border/70 bg-background py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-5 text-center sm:mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted-foreground">
              Unsere Standards
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-5">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="rounded-[1.15rem] border border-border/70 bg-gradient-panel p-4 text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-brand sm:rounded-[1.4rem] sm:p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mb-4 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <badge.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-base font-bold text-foreground sm:text-lg">{badge.title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {badge.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TrustBadges;
