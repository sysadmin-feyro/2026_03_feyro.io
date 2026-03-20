export const COOKIE_CONSENT_NAME = "feyro-cookie-consent";
export const ANALYTICS_CONSENT_KEY = "feyro-analytics-consent";
export const MARKETING_CONSENT_KEY = "feyro-marketing-consent";
export const CONSENT_CHANGED_EVENT = "feyro-consent-changed";

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
}

export const readConsentPreferences = (): ConsentPreferences => ({
  analytics: localStorage.getItem(ANALYTICS_CONSENT_KEY) === "true",
  marketing: localStorage.getItem(MARKETING_CONSENT_KEY) === "true",
});

export const hasConsentChoice = (): boolean =>
  document.cookie.includes(`${COOKIE_CONSENT_NAME}=true`);

export const isAnalyticsEnabled = (): boolean =>
  hasConsentChoice() && readConsentPreferences().analytics;

export const persistConsentPreferences = (
  preferences: ConsentPreferences,
): void => {
  localStorage.setItem(ANALYTICS_CONSENT_KEY, String(preferences.analytics));
  localStorage.setItem(MARKETING_CONSENT_KEY, String(preferences.marketing));
  document.cookie = `${COOKIE_CONSENT_NAME}=true; path=/; max-age=31536000; SameSite=Lax; Secure`;
};

export const updateGoogleConsent = (
  preferences: ConsentPreferences,
): void => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  });
};

export const dispatchConsentChanged = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT));
};

export const applyConsentPreferences = (
  preferences: ConsentPreferences,
): void => {
  persistConsentPreferences(preferences);
  updateGoogleConsent(preferences);
  dispatchConsentChanged();
};
