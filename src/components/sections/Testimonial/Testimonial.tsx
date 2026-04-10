"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Testimonial.module.css";

const TESTIMONIALS = [
  {
    name: "Aisha Rahman",
    role: "Mother of 2",
    avatar: "/images/avatar-aisha.png",
    comment:
      "My child’s Quran reading improved so much in just a few weeks. The teachers are patient and very supportive.",
  },
  {
    name: "Omar Hassan",
    role: "Father of 3",
    avatar: "/images/avatar-omar.png",
    comment:
      "Fitrah made it easy for our family to stay consistent with learning. The flexibility fits perfectly into our schedule.",
  },
  {
    name: "Fatima Khan",
    role: "Mother of 1",
    avatar: "/images/avatar-fatima.png",
    comment:
      "I love how the lessons combine Quran, Arabic, and values. My kids are more engaged than ever before.",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2, rootMargin: "80px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full bg-cream pt-24"
      aria-labelledby="testimonials-heading"
    >
      <div
        ref={sectionRef}
        className="max-w-[1192px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="testimonials-heading"
            className={`${styles.fadeUp} ${
              visible ? styles.show : ""
            } text-[48px] font-bold leading-[120%] text-neutral-500`}
          >
            Loved by Muslim families
          </h2>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard
              key={item.name}
              {...item}
              visible={visible}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  avatar,
  comment,
  visible,
  delay,
}: {
  name: string;
  role: string;
  avatar: string;
  comment: string;
  visible: boolean;
  delay: number;
}) {
  return (
    <article
      className={`${styles.card} ${visible ? styles.show : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <Image
        src="/svg/hero-pattern.svg"
        alt=""
        fill
        className={styles.pattern}
        aria-hidden="true"
      />
      <div className={styles.innerBorder} />
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.avatarWrapper}>
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className={styles.avatar}
              loading="lazy"
            />
          </div>
          <div className={styles.author}>
            <span className={styles.name}>{name}</span>
            <span className={styles.role}>{role}</span>
          </div>
        </div>
        <p className={styles.quote}>“{comment}”</p>
      </div>
    </article>
  );
}
