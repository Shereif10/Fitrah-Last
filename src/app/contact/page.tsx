import { Suspense, lazy } from "react";
import { Metadata } from "next";
import ContactSection from "@/components/sections/Contact/ContactSection";

// Lazy load footer (below the fold)
const Footer = lazy(() => import("@/components/sections/Footer/Footer"));

export const metadata: Metadata = {
  title: "Contact Us | Fitrah Academy – Start Your Child's Islamic Journey",
  description:
    "Get in touch with Fitrah Academy. Request information about our Quran, Arabic, and Islamic studies programs. Our team is here to help you find the perfect learning path for your child.",
  openGraph: {
    title: "Contact Fitrah Academy",
    description:
      "Reach out to our student success team for personalized guidance and program details.",
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

export default function ContactPage() {
  return (
    <>
      {/* Critical section – loads immediately */}
      <ContactSection />

      {/* Footer lazy loaded with Suspense fallback */}
      <Suspense
        fallback={<div className="h-[400px] bg-primary animate-pulse" />}
      >
        <Footer />
      </Suspense>
    </>
  );
}
