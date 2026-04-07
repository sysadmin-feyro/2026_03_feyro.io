export const COOKIE_CONSENT_NAME = "feyro-cookie-consent";
export const ANALYTICS_CONSENT_KEY = "feyro-analytics-consent";
export const CONSENT_CHANGED_EVENT = "feyro-consent-changed";

export interface ConsentPreferences {
  analytics: boolean;
}

export const readConsentPreferences = (): ConsentPreferences => ({
  analytics: localStorage.getItem(ANALYTICS_CONSENT_KEY) === "true",
});

export const hasConsentChoice = (): boolean =>
  document.cookie.includes(`${COOKIE_CONSENT_NAME}=true`);

export const isAnalyticsEnabled = (): boolean =>
  hasConsentChoice() && readConsentPreferences().analytics;

export const persistConsentPreferences = (
  preferences: ConsentPreferences,
): void => {
  localStorage.setItem(ANALYTICS_CONSENT_KEY, String(preferences.analytics));
  document.cookie = `${COOKIE_CONSENT_NAME}=true; path=/; max-age=31536000; SameSite=Lax; Secure`;
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
  dispatchConsentChanged();
};
