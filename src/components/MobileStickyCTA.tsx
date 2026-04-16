import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import useAnalytics from "@/hooks/useAnalytics";

const MobileStickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const { trackCTAClick } = useAnalytics();

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (~600px), hide near contact section
      const scrollY = window.scrollY;
      const contact = document.getElementById("contact");
      const contactTop = contact?.getBoundingClientRect().top ?? Infinity;
      setVisible(scrollY > 600 && contactTop > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    trackCTAClick("mobile_sticky_cta", "sticky_bar");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-md p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="complementary"
      aria-label="Schnellzugriff Kontakt"
    >
      <button
        onClick={handleClick}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-base font-semibold text-white shadow-brand"
        aria-label="Website jetzt analysieren lassen"
      >
        Website jetzt analysieren lassen
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default MobileStickyCTA;
