import { Suspense, lazy } from "react";
import { Metadata } from "next";
import HeroSection from "@/components/sections/Hero/HeroSection";

// Lazy load sections below the fold
const PurposeSection = lazy(
  () => import("@/components/sections/Purpose/PurposeSection"),
);
const StorySection = lazy(
  () => import("@/components/sections/Story/StorySection"),
);
const TeachingPhilosophySection = lazy(
  () => import("@/components/sections/Philosophy/TeachingPhilosophySection"),
);
const MeetTeachersSection = lazy(
  () => import("@/components/sections/Teachers/MeetTeachersSection"),
);
const FAQCTA = lazy(() => import("@/components/sections/FAQCTA/FAQCTA"));
const Footer = lazy(() => import("@/components/sections/Footer/Footer"));

export const metadata: Metadata = {
  title: "About Fitrah Academy | Nurturing Islamic Education",
  description:
    "Fitrah Academy provides authentic, structured Islamic education that fits the lives of Muslim families around the world.",
  openGraph: {
    title: "About Fitrah Academy",
    description:
      "Learn about our mission to nurture Fitrah through structured learning.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section – above the fold, critical */}
      <HeroSection
        variant="simple"
        title={
          <>
            Nurturing <span className="text-gold">Fitrah</span> through
            Structured Learning
          </>
        }
        description="Fitrah Academy was founded with one clear mission — to provide authentic, structured Islamic education that fits the lives of Muslim families around the world."
        exploreText="Explore About Us"
      />

      {/* Sections below the fold – lazy loaded */}
      <Suspense fallback={<div className="h-screen bg-cream animate-pulse" />}>
        <PurposeSection />
      </Suspense>

      <Suspense fallback={<div className="h-[600px] bg-cream animate-pulse" />}>
        <StorySection />
      </Suspense>

      <Suspense fallback={<div className="h-[500px] bg-cream animate-pulse" />}>
        <TeachingPhilosophySection />
      </Suspense>

      <Suspense fallback={<div className="h-[600px] bg-cream animate-pulse" />}>
        <MeetTeachersSection />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse" />}>
        <FAQCTA />
      </Suspense>

      <Suspense
        fallback={<div className="h-[400px] bg-primary animate-pulse" />}
      >
        <Footer />
      </Suspense>
    </>
  );
}
