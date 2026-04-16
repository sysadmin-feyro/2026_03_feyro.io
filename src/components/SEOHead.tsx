import { useEffect } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  faqs?: FAQ[];
}

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "feyro.io",
  "url": "https://feyro.io",
  "email": "hi@feyro.io",
  "description": "Website-Modernisierung und Relaunch für kleine und mittelständische Unternehmen in Deutschland. Klarer Ablauf, Hosting, Wartung und persönliche Betreuung.",
  "areaServed": {
    "@type": "Country",
    "name": "Deutschland"
  },
  "serviceType": [
    "Website-Modernisierung",
    "Website-Relaunch",
    "Website-Neuentwicklung",
    "Hosting und Wartung"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Website-Modernisierung für KMU",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website-Modernisierung und Relaunch" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website-Neuentwicklung" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hosting, Wartung und Betreuung" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KI und Automatisierung als Zusatzkompetenz" } }
    ]
  }
};

const SEOHead = ({ faqs }: SEOHeadProps) => {
  useEffect(() => {
    // Inject ProfessionalService schema once
    if (!document.getElementById("org-schema")) {
      const script = document.createElement("script");
      script.id = "org-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(professionalServiceSchema);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById("org-schema")?.remove();
    };
  }, []);

  useEffect(() => {
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      };

      const existingScript = document.getElementById("faq-schema");
      if (existingScript) {
        existingScript.textContent = JSON.stringify(faqSchema);
      } else {
        const script = document.createElement("script");
        script.id = "faq-schema";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(script);
      }
    }

    return () => {
      document.getElementById("faq-schema")?.remove();
    };
  }, [faqs]);

  return null;
};

export default SEOHead;
