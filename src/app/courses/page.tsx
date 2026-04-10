import { Suspense, lazy } from "react";
import { Metadata } from "next";
import HeroSection from "@/components/sections/Hero/HeroSection";
import FeaturesSection from "@/components/sections/Features/FeaturesSection";
import CoreProgramsSection from "@/components/sections/CorePrograms/CoreProgramsSection";

// Lazy load sections below the fold for better performance
const EnrichmentProgramsSection = lazy(
  () => import("@/components/sections/Enrichment/EnrichmentProgramsSection"),
);
const CTASection = lazy(() => import("@/components/sections/CTA/CTASection"));
const Footer = lazy(() => import("@/components/sections/Footer/Footer"));

export const metadata: Metadata = {
  title: "Courses | Fitrah Academy - Quran & Islamic Learning Programs",
  description:
    "Find the perfect course for your child with flexible schedules and expert guidance. Explore our Quran, Arabic, and Islamic studies programs.",
  openGraph: {
    title: "Fitrah Academy Courses",
    description:
      "Structured online Quran classes, Arabic lessons, and Islamic education for kids and adults.",
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

export default function CoursesPage() {
  return (
    <>
      {/* Above the fold – critical sections, no lazy loading */}
      <HeroSection
        variant="simple"
        title={<>Explore Our Quran & Islamic Learning Programs</>}
        description="Find the perfect course for your child with flexible schedules and expert guidance."
        exploreText="Explore Our Courses"
      />
      <FeaturesSection />
      <CoreProgramsSection />

      {/* Below the fold – lazy loaded with Suspense */}
      <Suspense fallback={<div className="h-screen bg-cream animate-pulse" />}>
        <EnrichmentProgramsSection />
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
