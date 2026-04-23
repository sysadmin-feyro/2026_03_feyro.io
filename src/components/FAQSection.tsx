import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  {
    question: "Ist feyro eher für Relaunch oder für komplett neue Websites geeignet?",
    answer: "Der Schwerpunkt liegt auf der Modernisierung veralteter Unternehmens-Websites. Wenn die bestehende Website inhaltlich oder technisch nicht mehr sinnvoll nutzbar ist, empfehlen wir eine Neuentwicklung. Das ordnen wir im Erstgespräch verständlich ein.",
    link: "#services"
  },
  {
    question: "Wie lange dauert die Umsetzung?",
    answer: "Das hängt vom Umfang ab. Eine überschaubare Unternehmens-Website lässt sich oft in wenigen Wochen modernisieren. Wichtig ist: Sie bekommen vor dem Start eine klare Einschätzung zu Ablauf, Aufwand und nächsten Schritten.",
    link: "#process"
  },
  {
    question: "Müssen wir alle Inhalte selbst vorbereiten?",
    answer: "Nein. Bestehende Inhalte werden gesichtet und sinnvoll übernommen, gekürzt oder neu strukturiert. Wenn Texte fehlen, klären wir gemeinsam, was wirklich gebraucht wird. Ziel ist wenig Aufwand auf Ihrer Seite.",
    link: "#process"
  },
  {
    question: "Bleibt unsere Domain erhalten?",
    answer: "Ja, in der Regel bleibt Ihre bestehende Domain erhalten. Wir kümmern uns um die technische Umstellung, SSL, Weiterleitungen und den sauberen Livegang, damit der Wechsel möglichst ruhig läuft.",
    link: "#services"
  },
  {
    question: "Wer kümmert sich nach dem Livegang um Hosting und Wartung?",
    answer: "Auf Wunsch übernimmt feyro Hosting, technische Wartung, Updates, kleine Anpassungen und Monitoring. Sie haben damit einen festen Ansprechpartner und müssen sich nicht intern um technische Details kümmern.",
    link: "#services"
  },
  {
    question: "Was bedeutet DSGVO-konforme Umsetzung konkret?",
    answer: "Wir achten auf saubere Formulare, passende Datenschutzhinweise, Impressum, Cookie-Logik und datensparsame Technik. Hosting und eingesetzte Dienste werden möglichst deutsch oder europäisch gewählt.",
    link: "#about"
  },
  {
    question: "Welche Rolle spielt KI bei feyro?",
    answer: "KI ist nicht das Hauptangebot. Sie ist eine ergänzende Kompetenz, wenn Prozesse einfacher werden sollen: zum Beispiel bei wiederkehrenden Aufgaben, interner Organisation oder sinnvoller Tool-Auswahl.",
    link: "#about"
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fragen vor dem <span className="text-primary">Relaunch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Die wichtigsten Fragen vor einem Website-Relaunch, klar und ohne Fachsprache beantwortet.
          </p>
        </ScrollAnimation>

        {/* FAQ – native <details>/<summary> für Crawler-Sichtbarkeit */}
        <ScrollAnimation delay={0.2}>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-card border border-border rounded-xl px-6 open:shadow-card transition-shadow"
              >
                <summary className="flex items-center justify-between py-6 cursor-pointer list-none hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl">
                  <span className="font-semibold text-foreground pr-4 text-sm sm:text-base break-words">
                    {faq.question}
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="text-muted-foreground pb-6 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation delay={0.3} className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Unsicher, ob ein Relaunch sinnvoll ist? Wir schauen es uns unverbindlich an.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded inline-flex items-center min-h-[44px] px-3"
            aria-label="Zum Kontaktformular navigieren"
          >
            Website-Analyse anfordern →
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQSection;
