import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import MeetTeachersSection from '@/components/sections/MeetTeachersSection';
import PurposeSection from '@/components/sections/PurposeSection';
import StorySection from '@/components/sections/StorySection';
import TeachingPhilosophySection from '@/components/sections/TeachingPhilosophySection';
import React from 'react'

export default function AboutPage() {
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
        exploreText="Explore About Us"
      />
      <PurposeSection />
      <StorySection />
      <TeachingPhilosophySection />
      <MeetTeachersSection />
      <Footer />
    </>
  );
}
