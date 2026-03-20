import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Über uns", href: "#about" },
      { name: "Leistungen", href: "#services" },
      { name: "Projekte", href: "#projects" },
      { name: "Kontakt", href: "#contact" }
    ],
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "AGB", href: "/agb" },
      { name: "Cookie-Einstellungen", href: "#" }
    ],
    services: [
      { name: "Website-Relaunch", href: "#services" },
      { name: "KI-Analyse", href: "#services" },
      { name: "DSGVO-Compliance", href: "#services" },
      { name: "SEO-Optimierung", href: "#services" }
    ]
  };

  return (
    <footer className="bg-foreground text-background" role="contentinfo" aria-label="Website Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/feyro-logo-white.svg" alt="feyro.io" className="h-8 w-auto" />
              <p className="text-sm text-background/70 mt-2">
                KI trifft Klarheit – Webdesign neu gedacht
              </p>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Professionelle Website-Relaunches mit KI-Unterstützung, 
              DSGVO-Konformität und technischer Exzellenz.
            </p>

            <address className="not-italic space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                <a href="mailto:hi@feyro.io" className="hover:text-background transition-colors">
                  hi@feyro.io
                </a>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                <a href="tel:+491234567890" className="hover:text-background transition-colors">
                  +49 (0) 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>Deutschland</span>
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
                    className="text-background/80 hover:text-background transition-colors"
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
                    className="text-background/80 hover:text-background transition-colors"
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
                    className="text-background/80 hover:text-background transition-colors"
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
              © {currentYear} feyro.io. Alle Rechte vorbehalten.
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
                onClick={() => {
                  // This would open cookie settings if cookie banner is implemented
                  console.log('Open cookie settings');
                }}
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