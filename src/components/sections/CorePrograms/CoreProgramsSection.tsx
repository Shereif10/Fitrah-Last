"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./CoreProgramsSection.module.css";

type Program = {
  image: string;
  badge: string;
  title: string;
  tags: string[];
  features: string[];
  price: string;
};

const PROGRAMS: Program[] = [
  {
    image: "/images/quran-recitation.jpg",
    badge: "Beginner",
    title: "Quran Recitation",
    tags: ["Ages 5–15", "30 min sessions"],
    features: [
      "Master Tajweed rules from basics",
      "Correct Arabic pronunciation",
      "Fluency building with certified tutors",
    ],
    price: "$45/mo",
  },
  {
    image: "/images/quran-memorization.jpg",
    badge: "Beginner",
    title: "Quran Memorization",
    tags: ["Ages 6–15", "Flexible Schedule"],
    features: [
      "Personalized memorization plans",
      "Regular revision & milestone tracking",
      "Sanad certified instructors",
    ],
    price: "$60/mo",
  },
  {
    image: "/images/arabic-language.jpg",
    badge: "Beginner",
    title: "Arabic Language",
    tags: ["Ages 6–16", "45 min sessions"],
    features: [
      "Modern Standard Arabic (Fusha)",
      "Reading, writing, and conversation",
      "Interactive vocabulary games",
    ],
    price: "$50/mo",
  },
  {
    image: "/images/islamic-studies.jpg",
    badge: "Beginner",
    title: "Islamic Studies",
    tags: ["Ages 8–16", "Weekend Classes"],
    features: [
      "Seerah, Adab (Etiquette), and Aqeedah",
      "Tailored for Western contexts",
      "Character building & morals",
    ],
    price: "$40/mo",
  },
];

export default function CoreProgramsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "100px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full bg-primary rounded-[48px] py-24 overflow-hidden"
      aria-labelledby="core-programs-heading"
    >
      <div
        className="absolute inset-0 z-0 bg-[url('/svg/hero-pattern.svg')] bg-cover bg-center"
        aria-hidden="true"
      />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-[1192px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="core-programs-heading"
            className={`${styles.fadeUp} ${
              visible ? styles.show : ""
            } text-[48px] font-bold leading-[40px] text-neutral-50`}
          >
            Core Programs
          </h2>
          <p
            className={`${styles.fadeUp} ${
              visible ? styles.show : ""
            } text-[22px] leading-[150%] text-neutral-100`}
            style={{ transitionDelay: "0.1s" }}
          >
            Explore our structured Quran and Islamic learning programs designed
            for all levels.
          </p>
        </div>

        <div className={styles.grid}>
          {PROGRAMS.map((program, idx) => (
            <ProgramCard
              key={program.title}
              {...program}
              visible={visible}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  image,
  badge,
  title,
  tags,
  features,
  price,
  visible,
  delay,
}: Program & { visible: boolean; delay: number }) {
  return (
    <div
      className={`${styles.card} ${visible ? styles.show : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 516px"
          className={styles.cardImg}
          loading={delay < 0.2 ? "eager" : "lazy"}
        />
        <span className={styles.badge}>{badge}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature}>
              <span className={styles.check}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
}
