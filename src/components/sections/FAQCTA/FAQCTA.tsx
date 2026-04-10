import React from 'react'
import CTASection from '../CTA/CTASection'
import FAQSection from '../FAQ/FAQSection'
import styles from "./FAQCTA.module.css";
import Image from 'next/image';

export default function FAQCTA() {
  return (
    <section className="relative bg-primary rounded-[48px] mb-[96px]">
      <div className="absolute inset-0 z-">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative z-10">
        <FAQSection variant="alt" />
        <CTASection variant="framed" />
      </div>
    </section>
  );
}
