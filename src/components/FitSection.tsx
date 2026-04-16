import { CheckCircle, XCircle } from "lucide-react";

const goodFitItems = [
  "Ihre Website wirkt sichtbar älter als Ihr Unternehmen heute ist.",
  "Sie möchten online professioneller auftreten und passende Anfragen erleichtern.",
  "Sie haben wenig Zeit für ein langes Website-Projekt mit vielen Abstimmungen.",
  "Hosting, Wartung und kleine Änderungen sollen zuverlässig betreut werden.",
  "Sie wünschen einen festen Ansprechpartner, der Technik verständlich erklärt.",
  "Sie möchten bestehende Inhalte sinnvoll weiterverwenden, statt bei null anzufangen."
];

const notFitItems = [
  "Sie suchen eine klassische Werbeagentur für Kampagnen, Social Media oder Branding-Workshops.",
  "Sie möchten möglichst viele Designvarianten, Präsentationen und lange Konzeptphasen.",
  "Sie brauchen eine komplexe Plattform, ein Kundenportal oder individuelle Softwareentwicklung."
];

const FitSection = () => {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="fit-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-primary">
            Einordnung
          </p>
          <h2 id="fit-heading" className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Für wen feyro passt – und für wen nicht.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nicht jedes Unternehmen braucht eine große Agentur. feyro ist für Betriebe gemacht,
            die ihren Auftritt professionell modernisieren wollen und dabei Klarheit, Tempo
            und technische Sicherheit suchen.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-[1.5rem] border border-primary/15 bg-gradient-panel p-6 shadow-card sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">
              feyro passt, wenn Sie ...
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {goodFitItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/78 p-4 shadow-sm">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-card sm:p-8">
            <h3 className="mb-5 text-xl font-bold text-foreground">
              Nicht das Richtige, wenn Sie ...
            </h3>
            <div className="space-y-4">
              {notFitItems.map((item) => (
                <div key={item} className="flex gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl bg-primary/10 p-4 text-sm leading-relaxed text-muted-foreground">
              Diese klare Abgrenzung ist Absicht: Je genauer das Problem ist, desto ruhiger
              und verlässlicher lässt es sich lösen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitSection;
