import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  {
    question: "Welche Leistungen bietet feyro.io an?",
    answer: "Drei Kernleistungen: Website-Neuentwicklung, Website-Relaunch und Beratungsmandate für KI sowie Prozessautomatisierung. Wir empfehlen im Erstgespräch, was für Ihr Vorhaben sinnvoll ist.",
    link: "#services"
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer: "Schnelle Relaunches einer überschaubaren Unternehmensseite sind in 1–2 Wochen möglich. Umfangreichere Neuentwicklungen mit individueller Konzeption liegen typischerweise bei 4–8 Wochen. Beratungsmandate laufen je nach Umfang über mehrere Wochen oder als laufendes Mandat. Eine konkrete Einordnung gibt es im Erstgespräch.",
    link: "#process"
  },
  {
    question: "Wie läuft ein Erstgespräch ab?",
    answer: "Wir schauen auf Ihr Vorhaben, den aktuellen Stand und die Ziele. Sie erhalten eine fachliche Einordnung, eine Empfehlung zur Form der Zusammenarbeit und die nächsten konkreten Schritte. Unverbindlich und ohne Verkaufsdruck.",
    link: "#process"
  },
  {
    question: "Warum keine US-Dienste wie Google Analytics oder AWS?",
    answer: "Aus rechtlicher und strategischer Überzeugung. US-Cloud-Dienste unterliegen dem CLOUD Act, der US-Behörden Zugriff auf Daten ermöglicht – unabhängig vom Serverstandort. Wir setzen ausschließlich auf deutsche und europäische Infrastruktur: Hosting bei Hetzner, Analytics mit Matomo, E-Mail über IONOS – vollständig DSGVO-konform.",
    link: "#services"
  },
  {
    question: "Was bedeutet DSGVO-Konformität konkret?",
    answer: "Technische und dokumentarische Vollständigkeit: rechtssicherer Cookie-Consent, korrekte Datenschutzerklärung, Impressum, sichere Kontaktformulare, keine datenschutzwidrigen Drittdienste und ein dokumentierter Nachweis. Das schützt Sie vor Abmahnungen und schafft Vertrauen bei Ihren Nutzern.",
    link: "#services"
  },
  {
    question: "Warum keine Baukästen wie Wix, Squarespace oder WordPress?",
    answer: "Baukästen schaffen Abhängigkeiten: von US-Plattform-Anbietern, von monatlichen Abogebühren, von eingeschränkten Anpassungsmöglichkeiten und Performance-Kompromissen. Unsere Websites werden individuell entwickelt – Code und Infrastruktur gehören vollständig Ihnen.",
    link: "#about"
  },
  {
    question: "Wer steckt hinter feyro.io?",
    answer: "feyro.io ist ein Remote-First-Unternehmen mit Sitz in Berlin. Ein erfahrener Entwickler und Digitalstratege als direkter Ansprechpartner – unterstützt durch ein Netzwerk aus spezialisierten Freelancern für Design, Copywriting und spezifische technische Anforderungen. Kein Callcenter, kein Overhead.",
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
            Häufig gestellte <span className="text-primary">Fragen</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Transparenz ist Teil unserer Arbeitsweise. Hier finden Sie Antworten auf die wichtigsten Fragen.
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
            Weitere Fragen? Wir antworten in der Regel am selben Werktag.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Zum Kontaktformular navigieren"
          >
            Projekt anfragen →
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQSection;
