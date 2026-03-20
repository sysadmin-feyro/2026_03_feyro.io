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
      answer: "Ein typischer Website-Relaunch dauert bei uns 7 Tage. Dabei entsteht eine neue Website auf Basis deiner bestehenden Website - inklusive Analyse, Design, Umsetzung und Testphase. Mehr Details findest du in unserem Ablauf-Bereich.",
      link: "#process"
    },
    {
      question: "Was kostet ein Website-Relaunch bei feyro.io?",
      answer: "Unser Relaunch-Paket gibt es zum Festpreis von 749€ (einmalig). Darin enthalten ist die komplette Umsetzung inkl. DSGVO-Konformität, SEO-Optimierung und responsivem Design. Zusätzlich bieten wir Wartung und Service für 59€/Monat an. Alle Preise findest du auf unserer Preise-Seite.",
      link: "#pricing"
    },
    {
      question: "Muss ich technisches Wissen mitbringen?",
      answer: "Nein, überhaupt nicht! Wir kümmern uns um alles Technische. Du lieferst uns nur die Inhalte (Texte, Bilder) – oder wir unterstützen dich mit KI bei der Content-Erstellung. Nach dem Launch zeigen wir dir, wie du einfache Änderungen selbst vornehmen kannst."
    },
    {
      question: "Was bedeutet DSGVO-konform?",
      answer: "DSGVO-Konformität bedeutet, dass deine Website alle Datenschutz-Anforderungen erfüllt: Cookie-Banner, Impressum, Datenschutzerklärung, sichere Formulare und EU-konformes Hosting. Das schützt dich vor Abmahnungen. Mehr Details findest du in unseren Leistungen.",
      link: "#services"
    },
    {
      question: "Kann ich meine bestehende Domain behalten?",
      answer: "Ja, selbstverständlich! Wir arbeiten mit deiner bestehenden Domain. Falls du noch keine hast, helfen wir dir bei der Auswahl und Einrichtung einer passenden Domain. Kontaktiere uns für mehr Informationen.",
      link: "#contact"
    },
    {
      question: "Was passiert nach dem Launch?",
      answer: "Nach dem Launch bist du nicht allein: Mit unserem monatlichen Service für 59€/Monat kümmern wir uns um Sicherheits-Updates, kleine Änderungen und technischen Support. So bleibt deine Website immer aktuell und sicher. Schau dir unsere Preisoptionen an.",
      link: "#pricing"
    },
    {
      question: "Warum keine Baukästen wie Wix oder Squarespace?",
      answer: "Baukästen haben Grenzen: eingeschränkte Anpassungsmöglichkeiten, schlechtere Ladezeiten, weniger Kontrolle über SEO und oft versteckte Kosten. Unsere individuell programmierten Websites sind schneller, flexibler und gehören dir – ohne Abo-Fallen. Erfahre mehr über uns.",
      link: "#about"
    },
    {
      question: "Wie funktioniert der KI-gestützte Prozess?",
      answer: "Wir nutzen KI für verschiedene Bereiche: Analyse deiner Zielgruppe, Optimierung von Texten, Bildbearbeitung und Code-Generierung. Das macht uns effizienter und senkt die Kosten für dich – ohne Abstriche bei der Qualität. Im Kontaktgespräch zeigen wir dir gern, wie das konkret für dein Unternehmen aussehen kann.",
      link: "#contact"
    }
  ];

  // Prepare FAQs for SEO schema
  const seoFaqs = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <section id="faq" className="py-24 bg-background" aria-labelledby="faq-heading">
      {/* FAQ Schema for SEO */}
      <SEOHead faqs={seoFaqs} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Häufig gestellte <span className="text-primary">Fragen</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Alles, was du über unseren Website-Relaunch-Service wissen musst.
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
                      aria-label={`Mehr erfahren über: ${faq.question}`}
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
            Noch Fragen? Wir helfen dir gerne!
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
