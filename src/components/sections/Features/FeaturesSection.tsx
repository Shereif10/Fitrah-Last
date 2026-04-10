"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./FeaturesSection.module.css";

const FEATURES = [
  {
    icon: "/svg/icon-certified.svg",
    title: "Certified Tutors",
    desc: "Expert teachers vetted for both Islamic knowledge and their ability to connect with western youth.",
  },
  {
    icon: "/svg/icon-group.svg",
    title: "Small Group Sessions",
    desc: "Intimate classes ensuring personalized attention, mentorship, and stronger peer connections.",
  },
  {
    icon: "/svg/icon-curriculum.svg",
    title: "Structured Curriculum",
    desc: "A progressive path from basics to advanced levels with clear milestones and regular progress reports.",
  },
];

export default function FeaturesSection() {
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
    <section className={styles.section} aria-labelledby="features-heading">
      <div ref={ref} className={styles.container}>
        {/* Double Border */}
        <div className={styles.outerBorder}>
          <div className={styles.innerBorder}>
            <div className={styles.grid}>
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`${styles.card} ${show ? styles.show : ""}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className={styles.icon}
                    loading="lazy"
                  />
                  <h3 className={styles.title}>{feature.title}</h3>
                  <p className={styles.description}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
