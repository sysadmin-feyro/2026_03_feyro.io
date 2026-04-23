import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Über feyro.io", href: "#about" },
      { name: "Leistungen", href: "#services" },
      { name: "Ablauf", href: "#process" },
      { name: "Kontakt", href: "#contact" }
    ],
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "AGB", href: "/agb" },
      { name: "Cookie-Einstellungen", href: "#" }
    ],
    services: [
      { name: "Website-Modernisierung", href: "#services" },
      { name: "Website-Relaunch", href: "#services" },
      { name: "Website-Neuentwicklung", href: "#services" },
      { name: "Website-Analyse anfordern", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-foreground text-background" role="contentinfo" aria-label="Website Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6">
              <span className="font-display text-2xl font-bold text-background">feyro</span>
              <p className="text-sm text-background/60 mt-1">feyro.io</p>
            </div>

            <p className="text-background/80 mb-6 leading-relaxed text-sm">
              Website-Modernisierung und Relaunch für kleine und mittelständische
              Unternehmen in Deutschland. Klar, technisch sauber und persönlich betreut.
            </p>

            <address className="not-italic space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="mailto:hi@feyro.io" className="hover:text-background transition-colors text-sm">
                  hi@feyro.io
                </a>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">Berlin · Remote</span>
              </div>
            </address>
          </div>

          {/* Company Links */}
          <nav aria-label="Unternehmen Navigation">
            <h4 className="font-semibold text-background mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors text-sm inline-block py-2 -my-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Links */}
          <nav aria-label="Leistungen Navigation">
            <h4 className="font-semibold text-background mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors text-sm inline-block py-2 -my-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Rechtliche Navigation">
            <h4 className="font-semibold text-background mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors text-sm inline-block py-2 -my-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center sm:text-left">
              © {currentYear} feyro.io · Alle Rechte vorbehalten · Hosting: Deutschland
            </p>

            <nav className="flex items-center gap-6 text-sm" aria-label="Rechtliche Schnelllinks">
              <a
                href="/impressum"
                className="text-background/80 hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground rounded"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="text-background/80 hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground rounded"
              >
                Datenschutz
              </a>
              <button
                className="text-background/80 hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground rounded"
                onClick={() => window.dispatchEvent(new CustomEvent("feyro-open-cookie-settings"))}
                aria-label="Cookie-Einstellungen öffnen"
              >
                Cookie-Einstellungen
              </button>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
