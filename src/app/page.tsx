import { Suspense, lazy } from "react";
import { Metadata } from "next";
import HeroSection from "@/components/sections/Hero/HeroSection";
import StatsSection from "@/components/sections/Stats/StatsSection";
import WhyChooseSection from "@/components/sections/WhyChoose/WhyChooseSection";
import CoreProgramsSection from "@/components/sections/CorePrograms/CoreProgramsSection";
import MethodologySection from "@/components/sections/Methodology/MethodologySection";

// Lazy load sections below the fold for better performance
const TestimonialsSection = lazy(
  () => import("@/components/sections/Testimonial/Testimonial"),
);
const PricingSection = lazy(
  () => import("@/components/sections/Pricing/PricingSection"),
);
const FAQSection = lazy(() => import("@/components/sections/FAQ/FAQSection"));
const CTASection = lazy(() => import("@/components/sections/CTA/CTASection"));
const Footer = lazy(() => import("@/components/sections/Footer/Footer"));

export const metadata: Metadata = {
  title: "Fitrah Academy | Online Quran, Arabic & Islamic Education",
  description:
    "Structured online Quran classes, Arabic lessons, and Islamic education for kids and adults. Trusted by 5,000+ parents.",
  openGraph: {
    title: "Fitrah Academy",
    description:
      "Empower your family with authentic Islamic knowledge from certified tutors.",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* Above the fold – critical sections, no lazy loading */}
      <HeroSection
        title="FITRAH ACADEMY"
        subtitle="where your family learns the Quran online"
        description="Structured online Quran classes, Arabic lessons, and Islamic education for kids and adults."
        highlight="Trusted by 5,000+ parents"
        exploreText=""
      />
      <StatsSection />
      <WhyChooseSection />
      <CoreProgramsSection />
      <MethodologySection />

      {/* Below the fold – lazy loaded with Suspense */}
      <Suspense fallback={<div className="h-screen bg-cream animate-pulse" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-screen bg-primary animate-pulse" />}
      >
        <PricingSection />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] bg-cream animate-pulse" />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<div className="h-[600px] animate-pulse" />}>
        <CTASection />
      </Suspense>

      <Suspense
        fallback={<div className="h-[400px] bg-primary animate-pulse" />}
      >
        <Footer />
      </Suspense>
    </>
  );
}
