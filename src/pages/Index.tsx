import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const ProcessSection = lazy(() => import("@/components/ProcessSection").then(m => ({ default: m.ProcessSection })));
const StatsSection = lazy(() => import("@/components/StatsSection").then(m => ({ default: m.StatsSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <Suspense fallback={null}>
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
