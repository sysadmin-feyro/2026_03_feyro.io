import { useEffect, useState } from "react";
import {
  CONSENT_CHANGED_EVENT,
  isAnalyticsEnabled,
  readConsentPreferences,
  updateGoogleConsent,
} from "@/lib/consent";

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const syncConsentState = () => {
      setAnalyticsEnabled(isAnalyticsEnabled());
      updateGoogleConsent(readConsentPreferences());
    };

    syncConsentState();
    window.addEventListener(CONSENT_CHANGED_EVENT, syncConsentState);

    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, syncConsentState);
    };
  }, []);

  useEffect(() => {
    if (!measurementId || !analyticsEnabled) {
      return;
    }

    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
      updateGoogleConsent(readConsentPreferences());
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    updateGoogleConsent(readConsentPreferences());
    gtag("config", measurementId, {
      anonymize_ip: true,
      cookie_flags: "SameSite=None;Secure",
    });
  }, [analyticsEnabled, measurementId]);

  return null;
};

export default GoogleAnalytics;
