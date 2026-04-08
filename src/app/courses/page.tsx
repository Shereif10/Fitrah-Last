import CoreProgramsSection from '@/components/sections/CoreProgramsSection'
import CTASection from '@/components/sections/CTASection'
import EnrichmentProgramsSection from '@/components/sections/EnrichmentProgramsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import Footer from '@/components/sections/Footer'
import HeroSection from '@/components/sections/HeroSection'
import React from 'react'

export default function CoursesPage() {
  return (
    <>
      <HeroSection
        variant="simple"
        title={
          <>
            Nurturing <span className="text-gold">Fitrah</span> through
            Structured Learning
          </>
        }
        description="Fitrah Academy was founded with one clear mission — to provide authentic, structured Islamic education that fits the lives of Muslim families around the world."
        exploreText="Explore Our Programs"
      />
      <FeaturesSection />
      <CoreProgramsSection />
      <EnrichmentProgramsSection />
      <CTASection />
      <Footer />
    </>
  );
}
