"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

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
      "Classes are conducted live through interactive online sessions with a qualified teacher.",
  },
];

export default function FAQSection({
  variant = "default",
}: {
  variant?: "default" | "alt";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className={`w-full ${
        variant === "alt" ? "pt-24 rounded-[48px]" : "bg-cream"
      }`}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px] flex flex-col gap-12">
        <h2
          id="faq-heading"
          className={`text-[48px] font-bold text-center ${
            variant === "alt" ? "text-neutral-50" : "text-neutral-500"
          }`}
        >
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`${styles.item} ${
                  variant === "alt" ? styles.altItem : ""
                } ${isOpen ? styles.active : ""}`}
              >
                <button
                  className={`${styles.header} ${
                    variant === "alt" ? styles.altHeader : ""
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`${styles.chevron} ${
                      isOpen ? styles.rotate : ""
                    } ${variant === "alt" ? styles.altChevron : ""}`}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`${styles.answer} ${isOpen ? styles.open : ""}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div
                    className={`${styles.answerInner} ${
                      variant === "alt" ? styles.altAnswer : ""
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
