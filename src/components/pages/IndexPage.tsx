import { lazy, Suspense, ReactNode } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MobileStickyCTA from "@/components/MobileStickyCTA";

// Lazy load below-the-fold sections for better performance
const WhyFeyroSection = lazy(() => import("@/components/WhyFeyroSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Skeleton placeholder reserves vertical space to avoid layout shift
const SectionSkeleton = () => (
  <div className="py-24" aria-hidden="true">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-8 w-64 mx-auto rounded bg-muted/50 animate-pulse mb-4" />
      <div className="h-4 w-96 max-w-full mx-auto rounded bg-muted/40 animate-pulse" />
    </div>
  </div>
);

const Section = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Navigation />
      <HeroSection />
      <Section><WhyFeyroSection /></Section>
      <Section><ServicesSection /></Section>
      <Section><ProcessSection /></Section>
      <Section><FAQSection /></Section>
      <Section><AboutSection /></Section>
      <Section><ContactSection /></Section>
      <Section><Footer /></Section>
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
