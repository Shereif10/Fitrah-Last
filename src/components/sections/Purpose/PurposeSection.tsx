"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./PurposeSection.module.css";

const CARDS = [
  {
    icon: "/svg/icon-mission.svg",
    title: "Our Mission",
    description:
      "Delivering interactive online classes with advanced technology to ensure tangible results for every learner",
  },
  {
    icon: "/svg/icon-vision.svg",
    title: "Our Vision",
    description:
      "To be the world's most trusted digital reference for Islamic education and Arabic mastery",
  },
];

export default function PurposeSection() {
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
    <section className={styles.section} aria-labelledby="purpose-heading">
      <div ref={sectionRef} className={styles.container}>
        <div className={styles.heading}>
          <h2 id="purpose-heading" className={styles.title}>
            Our Purpose
          </h2>
          <p className={styles.subtitle}>
            We are committed to building a meaningful learning experience that
            connects students with the Quran and Islamic values in a modern,
            engaging way.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card, index) => (
            <div
              key={card.title}
              className={`${styles.card} ${visible ? styles.show : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardInner}>
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
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={132}
                    height={128}
                    className={styles.icon}
                    loading="lazy"
                  />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.description}>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
