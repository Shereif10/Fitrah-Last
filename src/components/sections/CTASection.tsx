'use client';

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {

  const scrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-cream py-24">
      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Frame Wrapper */}
        <div className="relative min-h-[474px] flex items-center justify-center">
          {/* Frame */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/svg/cta-frame.svg"
              alt=""
              fill
              className="object-fill"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-8 py-16 px-[80px] lg:px-[40px] sm:px-6">
            {/* Text */}
            <div className="flex flex-col items-center gap-3">
              {/* H2 */}
              <h2 className="text-[48px] font-bold leading-[120%] text-[#333F3E]">
                Ready to Start Their Journey?
              </h2>

              {/* P */}
              <p className="text-[18px] font-normal leading-[120%] text-[#676767] max-w-[800px]">
                Give your child the gift of knowledge. Join thousands of happy
                families on Fitrah today and get your first class completely
                free.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-8">
              {/* Contact US */}
              <Link href="/contact">
                <button className="w-[639px] h-[70px] flex items-center justify-center gap-[10px] rounded-[12px] px-4 py-[19px] bg-gold text-neutral-50 text-[18px] font-bold hover:opacity-90 transition-opacity cursor-pointer">
                  Contact US
                </button>
              </Link>

              {/* Our Plans */}
              <div onClick={scrollToPricing}>
                <button className="w-[175px] h-[70px] flex items-center justify-center gap-[10px] rounded-[12px] px-[40px] py-[19px] border border-[#A29C7B] bg-[rgba(162,156,123,0.1)] text-gold text-[18px] font-bold hover:bg-gold/10 transition-colors cursor-pointer whitespace-nowrap">
                  our plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
