import { useCallback } from "react";
import { isAnalyticsEnabled } from "@/lib/consent";

const push = (args: unknown[]) => {
  if (typeof window !== "undefined" && isAnalyticsEnabled()) {
    window._paq = window._paq ?? [];
    window._paq.push(args);
  }
};

export const useAnalytics = () => {
  const trackEvent = useCallback((
    eventName: string,
    eventParams?: Record<string, unknown>
  ) => {
    const category = String(eventParams?.location ?? "general");
    const name = String(eventParams?.form_name ?? eventParams?.cta_name ?? eventName);
    push(["trackEvent", category, eventName, name]);
  }, []);

  const trackPageView = useCallback((pagePath: string, pageTitle?: string) => {
    push(["setCustomUrl", pagePath]);
    push(["setDocumentTitle", pageTitle ?? document.title]);
    push(["trackPageView"]);
  }, []);

  const trackFormSubmission = useCallback((formName: string, success: boolean) => {
    push(["trackEvent", "contact_form", success ? "submit_success" : "submit_error", formName]);
  }, []);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    push(["trackEvent", location, "cta_click", ctaName]);
  }, []);

  const trackScrollDepth = useCallback((depth: number) => {
    push(["trackEvent", "scroll", "depth", String(depth)]);
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackCTAClick,
    trackScrollDepth,
  };
};

export default useAnalytics;
