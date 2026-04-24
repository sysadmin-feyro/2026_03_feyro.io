import { BadgeCheck, Database, Handshake, Lock, MessagesSquare, Wrench } from "@/components/EvaIcons";

const trustPoints = [
  {
    icon: Database,
    title: "Hosting in Deutschland",
    description: "Die technische Basis wird datensparsam und nachvollziehbar aufgebaut. Keine unnötige Abhängigkeit von schwer erklärbaren Plattformen."
  },
  {
    icon: Lock,
    title: "DSGVO sauber mitgedacht",
    description: "Formulare, Datenschutz, Impressum und Cookie-Logik werden nicht als Nachtrag behandelt, sondern von Anfang an eingeplant."
  },
  {
    icon: Handshake,
    title: "Fester Ansprechpartner",
    description: "Sie sprechen nicht mit wechselnden Projektrollen. Verantwortung, Rückfragen und Entscheidungen bleiben klar zugeordnet."
  },
  {
    icon: Wrench,
    title: "Betreuung nach dem Livegang",
    description: "Wartung, Updates, kleine Anpassungen und technische Fragen bleiben in einer Hand – kein Suchen nach dem richtigen Ansprechpartner."
  },
  {
    icon: MessagesSquare,
    title: "Verständliche Kommunikation",
    description: "Keine Fachsprache als Schutzschild. Sie bekommen erklärt, was gemacht wird, warum es sinnvoll ist und was es bedeutet."
  },
  {
    icon: BadgeCheck,
    title: "Klare Empfehlung vor dem Start",
    description: "Erst wird eingeordnet, ob Modernisierung, Relaunch oder Neuentwicklung sinnvoll ist. Nicht jedes Problem braucht ein großes Projekt."
  }
];

const TrustSection = () => {
  return (
    <section className="bg-gradient-subtle py-20 sm:py-24" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-primary">
              Sicherheit
            </p>
            <h2 id="trust-heading" className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Sie wissen immer, wer zuständig ist.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Viele Website-Projekte scheitern nicht am Design, sondern weil niemand weiß,
            wer zuständig ist. feyro hält Relaunch, Technik und Betreuung in einer Hand.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-[1.35rem] border border-border/80 bg-white/82 p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand sm:p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
