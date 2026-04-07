import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { Button } from "@/components/ui/button";
import CookieSettings from "./CookieSettings";
import {
  applyConsentPreferences,
  COOKIE_CONSENT_NAME,
} from "@/lib/consent";

const CookieBanner = () => {
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const handler = () => setShowSettings(true);
    window.addEventListener("feyro-open-cookie-settings", handler);
    return () => window.removeEventListener("feyro-open-cookie-settings", handler);
  }, []);

  const handleAcceptAll = () => {
    applyConsentPreferences({ analytics: true });
  };

  const handleDeclineAll = () => {
    applyConsentPreferences({ analytics: false });
  };

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Alle akzeptieren"
        declineButtonText="Nur notwendige"
        cookieName={COOKIE_CONSENT_NAME}
        enableDeclineButton
        onAccept={handleAcceptAll}
        onDecline={handleDeclineAll}
        style={{
          background: "hsl(var(--card))",
          borderTop: "1px solid hsl(var(--border))",
          padding: "1rem",
          alignItems: "flex-start",
          boxShadow: "0 -4px 20px hsl(220 15% 20% / 0.1)",
          flexDirection: "column",
        }}
        contentStyle={{
          flex: "1 0 auto",
          margin: "0 0 0.75rem 0",
          color: "hsl(var(--foreground))",
          width: "100%",
        }}
        buttonWrapperClasses="flex flex-wrap gap-2 w-full sm:w-auto"
        buttonStyle={{
          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
          color: "white",
          fontSize: "13px",
          fontWeight: "600",
          padding: "0.625rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
          margin: "0",
          flex: "1 1 auto",
          minWidth: "120px",
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "hsl(var(--foreground))",
          fontSize: "13px",
          fontWeight: "600",
          padding: "0.625rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid hsl(var(--border))",
          cursor: "pointer",
          margin: "0",
          flex: "1 1 auto",
          minWidth: "120px",
        }}
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base sm:text-lg">🍪 Wir verwenden Cookies</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Wir nutzen Cookies, um deine Erfahrung zu verbessern und unseren Traffic zu analysieren. 
            Weitere Infos in unserer{" "}
            <a href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSettings(true)}
            className="self-start text-primary hover:text-primary/80 px-0 text-xs sm:text-sm h-auto py-1"
          >
            Cookie-Einstellungen anpassen
          </Button>
        </div>
      </CookieConsent>

      <CookieSettings 
        open={showSettings} 
        onOpenChange={setShowSettings}
      />
    </>
  );
};

export default CookieBanner;
