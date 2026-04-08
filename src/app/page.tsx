import CoreProgramsSection from '@/components/sections/CoreProgramsSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import Footer from '@/components/sections/Footer'
import HeroSection from '@/components/sections/HeroSection'
import MethodologySection from '@/components/sections/MethodologySection'
import PricingSection from '@/components/sections/PricingSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/Testimonial'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroSection
        title="FITRAH ACADEMY"
        subtitle="where your family learns the Quran online"
        description="Structured online Quran classes, Arabic lessons, and Islamic education for kids and adults."
        highlight="Trusted by 5,000+ parents"
        exploreText=''
      />
      <StatsSection />
      <WhyChooseSection />
      <CoreProgramsSection />
      <MethodologySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
