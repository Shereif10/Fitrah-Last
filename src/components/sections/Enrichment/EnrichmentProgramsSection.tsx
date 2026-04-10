// EnrichmentProgramsSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./EnrichmentProgramsSection.module.css";

const PROGRAMS = [
  {
    icon: "/svg/icon-book.svg",
    title: "Stories of Prophets",
    age: "Ages 5–10",
    desc: "Engaging storytelling sessions that bring the lives of the Prophets to life, instilling values and lessons.",
  },
  {
    icon: "/svg/icon-dua.svg",
    title: "Daily Duas & Adhkar",
    age: "All Ages",
    desc: "Learn essential daily prayers for sleeping, eating, and travel to keep Allah in your heart.",
  },
  {
    icon: "/svg/icon-book.svg",
    title: "Islamic Art & Calligraphy",
    age: "Ages 8+",
    desc: "A creative workshop exploring the beauty of Islamic geometry and Arabic calligraphy.",
  },
];

export default function EnrichmentProgramsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2, rootMargin: "80px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="enrichment-heading">
      <div ref={ref} className={styles.container}>
        <div className={styles.heading}>
          <h2
            id="enrichment-heading"
            className={`${styles.title} ${show ? styles.show : ""}`}
          >
            Enrichment Programs
          </h2>
          <p
            className={`${styles.subtitle} ${show ? styles.show : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Supplementary courses to inspire love and understanding.
          </p>
        </div>

        <div className={styles.grid}>
          {PROGRAMS.map((program, index) => (
            <div
              key={program.title}
              className={`${styles.card} ${show ? styles.show : ""}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className={styles.cardHeader}>
                <Image
                  src={program.icon}
                  alt={program.title}
                  width={36}
                  height={32}
                  className={styles.icon}
                  loading="lazy"
                />
                <div className={styles.cardHeaderText}>
                  <h3 className={styles.cardTitle}>{program.title}</h3>
                  <span className={styles.cardAge}>{program.age}</span>
                </div>
              </div>
              <p className={styles.cardDescription}>{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
