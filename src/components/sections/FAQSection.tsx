"use client";

import { useState } from "react";

/* ========================= */
/* Data */
/* ========================= */

const FAQS = [
  {
    question: "What age group is Fitrah Academy for?",
    answer:
      "Our programs are designed for children starting from age 5, as well as teens and adults who want to learn Quran and Arabic.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a free trial session so you can test our teaching style before committing.",
  },
  {
    question: "How do online classes work?",
    answer:
      "Classes are conducted live through interactive online sessions with a qualified teacher, using simple and easy-to-use tools.",
  },
];

/* ========================= */
/* Component */
/* ========================= */

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-cream">
      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12">
        {/* Heading */}
        <h2 className="text-[48px] lg:text-[38px] sm:text-[29px] font-bold leading-[120%] text-neutral-500 text-center">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                onClick={() => toggle(index)}
                className="w-full bg-primary rounded-[16px] overflow-hidden cursor-pointer transition-all"
              >
                {/* Question */}
                <div className="flex items-center justify-between px-8 py-5 gap-4">
                  <span className="text-[18px] text-neutral-50 font-normal leading-[150%] text-left flex-1">
                    {faq.question}
                  </span>

                  {/* ✅ New Chevron */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5">
                    <svg
                      className={`w-5 h-5 text-neutral-50 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div className="px-8 pb-5 text-[16px] text-neutral-100 leading-[150%] text-left">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
