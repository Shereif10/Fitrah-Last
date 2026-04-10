"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./MethodologySection.module.css";

const STEPS = [
  {
    icon: "/svg/icon-learn.svg",
    title: "Learn",
    description:
      "Initial placement tests to create a personalized islamic education.",
  },
  {
    icon: "/svg/icon-reflect.svg",
    title: "Reflect",
    description: "Live sessions using premium technology for focused learning.",
  },
  {
    icon: "/svg/icon-connect.svg",
    title: "Connect",
    description: "Instant performance feedback sent to parents",
  },
  {
    icon: "/svg/icon-apply.svg",
    title: "Apply",
    description: "Monthly reviews and exams to ensure long term quran.",
  },
];

export default function MethodologySection() {
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
      aria-labelledby="methodology-heading"
    >
      <div
        ref={sectionRef}
        className="max-w-[1192px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="methodology-heading"
            className={`${styles.fadeUp} ${
              visible ? styles.show : ""
            } text-[48px] font-bold leading-[120%] text-neutral-500`}
          >
            Our Methodology
          </h2>
          <p
            className={`${styles.fadeUp} ${
              visible ? styles.show : ""
            } text-[22px] leading-[150%] text-neutral-400`}
            style={{ transitionDelay: "0.1s" }}
          >
            A structured learning journey designed to ensure consistent progress
            and deep understanding.
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((step, index) => (
            <MethodCard
              key={step.title}
              {...step}
              visible={visible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodCard({
  icon,
  title,
  description,
  visible,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
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
        <div className={styles.iconWrapper}>
          <Image
            src={icon}
            alt={title}
            width={128}
            height={128}
            className={styles.icon}
            loading="lazy"
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
