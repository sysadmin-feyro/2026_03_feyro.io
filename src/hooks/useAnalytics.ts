import { useCallback } from "react";
import { isAnalyticsEnabled } from "@/lib/consent";

export const useAnalytics = () => {
  const trackEvent = useCallback((
    eventName: string,
    eventParams?: Record<string, unknown>
  ) => {
    if (
      typeof window !== "undefined" &&
      window.gtag &&
      isAnalyticsEnabled()
    ) {
      window.gtag("event", eventName, eventParams);
    }
  }, []);

  const trackPageView = useCallback((pagePath: string, pageTitle?: string) => {
    if (
      typeof window !== "undefined" &&
      window.gtag &&
      isAnalyticsEnabled()
    ) {
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      });
    }
  }, []);

  const trackFormSubmission = useCallback((formName: string, success: boolean) => {
    trackEvent("form_submission", {
      form_name: formName,
      success: success,
    });
  }, [trackEvent]);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    trackEvent("cta_click", {
      cta_name: ctaName,
      location: location,
    });
  }, [trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent("scroll_depth", {
      depth_percentage: depth,
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackCTAClick,
    trackScrollDepth,
  };
};

export default useAnalytics;
