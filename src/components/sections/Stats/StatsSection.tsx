"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

const STATS = [
  {
    icon: "/icons/icon-courses.svg",
    number: "15+",
    label: "Complete Courses",
  },
  {
    icon: "/icons/icon-students.svg",
    number: "2,000+",
    label: "Students",
  },
  {
    icon: "/icons/icon-teachers.svg",
    number: "12+",
    label: "Certified Teachers",
  },
  {
    icon: "/svg/check-icon.svg",
    number: "19+",
    label: "Parent\nRating",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3, rootMargin: "50px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const targets = [15, 2000, 12, 19];
    const duration = 1500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newCounts = targets.map((target) => Math.floor(target * easeOut));
      setCounts(newCounts);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [visible]);

  return (
    <section className="bg-cream pt-24 w-full" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Our Achievements
      </h2>
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto px-6 lg:px-[120px]"
      >
        <div className={styles.statsGrid}>
          {STATS.map((stat, index) => {
            const numberValue = counts[index];
            const hasPlus = stat.number.includes("+");

            return (
              <div
                key={stat.number}
                className={`${styles.card} ${styles.fadeUp} ${
                  visible ? styles.show : ""
                } ${styles.cardBase}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className={styles.pattern}>
                  <Image
                    src="/svg/hero-pattern.svg"
                    alt=""
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={styles.innerBorder} />
                <div className={styles.content}>
                  <div className={styles.iconWrapper}>
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      width={56}
                      height={56}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.numberWrapper}>
                    <span className={styles.number}>
                      {numberValue.toLocaleString()}
                      {hasPlus && "+"}
                    </span>
                  </div>
                  <p className={styles.label}>{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
