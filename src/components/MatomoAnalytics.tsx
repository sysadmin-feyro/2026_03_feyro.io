import { useEffect } from "react";
import { CONSENT_CHANGED_EVENT, isAnalyticsEnabled } from "@/lib/consent";

const MATOMO_URL = "https://analytics.feyro.io/";
const MATOMO_SITE_ID = "1";

declare global {
  interface Window {
    _paq: unknown[][];
  }
}

const MatomoAnalytics = () => {
  useEffect(() => {
    let pageViewTracked = false;

    const applyConsent = () => {
      if (isAnalyticsEnabled()) {
        window._paq = window._paq || [];
        window._paq.push(["requireConsent"]);
        window._paq.push(["requireCookieConsent"]);
        window._paq.push(["setTrackerUrl", MATOMO_URL + "matomo.php"]);
        window._paq.push(["setSiteId", MATOMO_SITE_ID]);
        window._paq.push(["setConsentGiven"]);
        window._paq.push(["setCookieConsentGiven"]);

        if (!document.querySelector(`script[src*="analytics.feyro.io"]`)) {
          const script = document.createElement("script");
          script.async = true;
          script.src = MATOMO_URL + "matomo.js";
          document.head.appendChild(script);
        }

        if (!pageViewTracked) {
          window._paq.push(["trackPageView"]);
          pageViewTracked = true;
        }
      }
    };

    applyConsent();
    window.addEventListener(CONSENT_CHANGED_EVENT, applyConsent);
    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, applyConsent);
    };
  }, []);

  return null;
};

export default MatomoAnalytics;
