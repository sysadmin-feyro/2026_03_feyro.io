import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "./ScrollAnimation";
import SEOHead from "./SEOHead";

const FAQSection = () => {
  const faqs = [
    {
      question: "Wie lange dauert ein Website-Relaunch?",
      answer: "Ein typischer Relaunch dauert 7 Werktage: von der Analyse bis zum Go-Live. Der genaue Zeitplan hängt vom Umfang der Inhalte und der Verfügbarkeit von Feedback ab. Wir kommunizieren transparent und halten fixe Meilensteine ein.",
      link: "#process"
    },
    {
      question: "Was kostet eine neue Website bei feyro.io?",
      answer: "Website-Relaunches starten bei 449 € (zzgl. MwSt., einmalig). Für Neuentwicklungen erstellen wir ein individuelles Angebot auf Basis des Projektumfangs. Der KI-Strategie Workshop kostet 349 € und ist auf Folgeprojekte anrechenbar. Wartung & Betrieb sind ab 29 €/Monat erhältlich.",
      link: "#pricing"
    },
    {
      question: "Was ist der KI-Strategie Workshop?",
      answer: "Ein 90-minütiges strukturiertes Gespräch, in dem wir Ihre aktuellen digitalen Prozesse analysieren, Automatisierungspotenziale identifizieren und einen konkreten Maßnahmenplan erstellen. Das Ergebnis ist ein schriftliches Dokument mit priorisierten Handlungsempfehlungen. Der Workshop findet remote statt und ist auf Folgeprojekte anrechenbar.",
      link: "#pricing"
    },
    {
      question: "Warum keine US-Dienste wie Google Analytics oder AWS?",
      answer: "Aus rechtlicher und strategischer Überzeugung. US-Cloud-Dienste unterliegen dem CLOUD Act, der US-Behörden Zugriff auf Daten ermöglicht – unabhängig vom Serverstandort. Wir setzen ausschließlich auf deutsche und europäische Infrastruktur: Hosting bei Hetzner, Analytics mit Matomo, E-Mail über IONOS oder Proton – vollständig DSGVO-konform.",
      link: "#services"
    },
    {
      question: "Was bedeutet DSGVO-Konformität konkret?",
      answer: "DSGVO-Konformität bedeutet technische und dokumentarische Vollständigkeit: rechtssicherer Cookie-Consent mit Consent Mode v2, korrekte Datenschutzerklärung, Impressum, sichere Kontaktformulare, keine Einbindung datenschutzwidriger Drittdienste und ein dokumentierter Nachweis der Maßnahmen. Das schützt Sie vor Abmahnungen und schafft Vertrauen bei Ihren Nutzern.",
      link: "#services"
    },
    {
      question: "Kann ich meine bestehende Domain behalten?",
      answer: "Ja. Wir übernehmen Ihre bestehende Domain und kümmern uns um die technische Migration. Falls Sie noch keine Domain haben, helfen wir bei der Auswahl und Registrierung bei einem deutschen Anbieter.",
      link: "#contact"
    },
    {
      question: "Wer steckt hinter feyro.io?",
      answer: "feyro.io ist ein Remote-First-Unternehmen mit Sitz in Deutschland. Ein erfahrener Entwickler und Digitalstratege als direkter Ansprechpartner – unterstützt durch ein Netzwerk aus spezialisierten Freelancern für Design, Copywriting und spezifische technische Anforderungen. Kein Callcenter, kein Overhead.",
      link: "#about"
    },
    {
      question: "Warum keine Baukästen wie Wix, Squarespace oder WordPress?",
      answer: "Baukästen schaffen Abhängigkeiten: von Plattform-Anbietern (meist US-Unternehmen), von monatlichen Abogebühren, von eingeschränkten Anpassungsmöglichkeiten und von Performance-Kompromissen. Unsere Websites werden individuell entwickelt – damit gehören Ihnen sowohl der Code als auch die Infrastruktur vollständig.",
      link: "#about"
    }
  ];

  const seoFaqs = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <section id="faq" className="py-24 bg-background" aria-labelledby="faq-heading">
      <SEOHead faqs={seoFaqs} />

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

        {/* FAQ Accordion */}
        <ScrollAnimation delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4 text-sm sm:text-base break-words">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                  {faq.link && (
                    <a
                      href={faq.link}
                      className="inline-block mt-2 text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      aria-label={`Mehr erfahren: ${faq.question}`}
                    >
                      Mehr erfahren →
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            Kontakt aufnehmen →
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQSection;
