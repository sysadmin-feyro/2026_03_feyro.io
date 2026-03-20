import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold sections for better performance
const TrustBadges = lazy(() => import("@/components/TrustBadges"));
const WhyFeyroSection = lazy(() => import("@/components/WhyFeyroSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading placeholder for sections
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center" aria-label="Lädt...">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <TrustBadges />
        <WhyFeyroSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
