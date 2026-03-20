import { useEffect } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  faqs?: FAQ[];
}

const SEOHead = ({ faqs }: SEOHeadProps) => {
  useEffect(() => {
    // Add FAQ Schema markup if FAQs are provided
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      // Check if script already exists
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(faqSchema);
      } else {
        const script = document.createElement('script');
        script.id = 'faq-schema';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(script);
      }
    }

    return () => {
      // Cleanup on unmount
      const script = document.getElementById('faq-schema');
      if (script) {
        script.remove();
      }
    };
  }, [faqs]);

  return null;
};

export default SEOHead;
