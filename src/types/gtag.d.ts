// Google Analytics gtag type definitions
type GtagConsentCommand = "default" | "update";

interface GtagConsentOptions {
  analytics_storage?: "granted" | "denied";
  ad_storage?: "granted" | "denied";
  ad_user_data?: "granted" | "denied";
  ad_personalization?: "granted" | "denied";
  wait_for_update?: number;
  [key: string]: unknown;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: {
    (command: "js", config: Date): void;
    (command: "config", targetId: string, config?: Record<string, unknown>): void;
    (command: "event", eventName: string, config?: Record<string, unknown>): void;
    (command: "consent", consentCommand: GtagConsentCommand, config: GtagConsentOptions): void;
  };
}
