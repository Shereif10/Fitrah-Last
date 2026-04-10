import CTASection from "@/components/sections/CTA/CTASection";
import FAQSection from "@/components/sections/FAQ/FAQSection";
import Footer from "@/components/sections/Footer/Footer";
import HeroSection from "@/components/sections/Hero/HeroSection";
import IncludedSection from "@/components/sections/Included/IncludedSection";
import PricingSection from "@/components/sections/Pricing/PricingSection";
import React from "react";

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
      <Footer />
    </>
  );
}
