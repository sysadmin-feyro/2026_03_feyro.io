import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Start", href: "#hero" },
    { name: "Leistungen", href: "#services" },
    { name: "Ablauf", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Zum Hauptinhalt springen
      </a>

      <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-slate-200/80 bg-white/90 px-3 shadow-[0_8px_32px_rgba(16,30,80,0.10)] backdrop-blur-md sm:rounded-full sm:px-6">
          <div className="flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
            <div className="flex shrink-0 items-center">
              <a href="#hero" aria-label="feyro.io – zur Startseite" className="font-display text-xl font-bold tracking-tight bg-gradient-brand bg-clip-text text-transparent sm:text-2xl">
                feyro
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-full px-3 py-2 text-sm font-semibold tracking-[0.02em] text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button
                variant="hero"
                size="lg"
                className="rounded-full px-6"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Website-Analyse
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav-menu"
              key="mobile-nav"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-3 mt-2 rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-3 shadow-[0_8px_32px_rgba(16,30,80,0.10)] backdrop-blur-md md:hidden sm:mx-6 sm:rounded-[2rem]"
            >
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-1 py-2">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full rounded-full"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                  >
                    Website-Analyse
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;
