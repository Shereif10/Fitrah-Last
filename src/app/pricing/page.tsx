import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection'
import IncludedSection from '@/components/sections/IncludedSection';
import PricingSection from "@/components/sections/PricingSection";
import React from 'react'

export default function PricingPage() {
  return (
    <>
      <HeroSection
        variant="simple"
        title={<>Nurturing Invest in Your Spiritual Growth </>}
        description="Simple, transparent pricing for every learner. Whether you prefer
group dynamics or personal mentorship, we have a path for you."
        exploreText="Explore Our Pricing"
      />
      <PricingSection />
      <IncludedSection />
      <FAQSection />
      <CTASection />
      <Footer/>
    </>
  );
}
