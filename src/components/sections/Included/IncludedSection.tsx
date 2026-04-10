"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./IncludedSection.module.css";

const FEATURES = [
  {
    title: "Certified Al-Azhar Instructors",
    desc: "Engaging lessons that encourage participation and critical thinking.",
  },
  {
    title: "Flexible Schedule (24/7 Access)",
    desc: "Teachers who are both scholars and compassionate guides.",
  },
  {
    title: "Interactive Quranic Tools",
    desc: "Interactive tools that make Quran learning engaging and effective.",
  },
  {
    title: "Holistic Islamic Development",
    desc: "Focusing on spiritual, intellectual, and character growth.",
  },
];

export default function IncludedSection() {
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
    <section className={styles.section} aria-labelledby="included-heading">
      <div ref={ref} className={styles.container}>
        <div className={styles.heading}>
          <h2
            id="included-heading"
            className={`${styles.title} ${show ? styles.show : ""}`}
          >
            What&apos;s Included in Every Plan
          </h2>
          <p
            className={`${styles.subtitle} ${show ? styles.show : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            We believe quality Islamic education should be accessible. All our
            students get access to these core features designed to enhance your
            learning journey.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((item, index) => (
            <div
              key={item.title}
              className={`${styles.card} ${show ? styles.show : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <Image
                  src="/svg/icon-book.svg"
                  alt=""
                  width={32}
                  height={32}
                  className={styles.icon}
                  loading="lazy"
                />
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDescription}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
