import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Start", href: "#hero" },
    { name: "Leistungen", href: "#services" },
    { name: "Ablauf", href: "#process" },
    { name: "Preise", href: "#pricing" },
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
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-slate-800 bg-slate-950 px-3 shadow-[0_20px_70px_rgba(5,12,24,0.42)] sm:rounded-full sm:px-6">
          <div className="flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
          <div className="flex shrink-0 items-center">
            <a href="#hero" aria-label="feyro.io – zur Startseite">
              <img
                src="/feyro-logo-white.svg"
                alt="feyro.io"
                className="h-7 w-auto sm:h-8"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold tracking-[0.02em] text-slate-100 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
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
              className="rounded-full border border-sky-300/20 bg-sky-500 px-6 text-white shadow-[0_16px_38px_rgba(14,110,194,0.32)] hover:bg-sky-400"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Projekt anfragen
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full text-slate-100 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-3 mt-2 rounded-[1.75rem] border border-slate-800 bg-slate-950 p-3 shadow-[0_24px_60px_rgba(8,19,37,0.28)] md:hidden sm:mx-6 sm:rounded-[2rem]">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-100 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
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
                Projekt anfragen
              </Button>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
};

export default Navigation;
