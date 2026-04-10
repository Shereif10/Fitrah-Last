"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./TeachingPhilosophySection.module.css";

const CARDS = [
  {
    icon: "/icons/icon-active-learning.svg",
    title: "Active Learning",
    description:
      "Engaging lessons that encourage participation and critical thinking.",
    tag: "Learning by engaging, practicing, and interacting.",
  },
  {
    icon: "/icons/icon-active-learning.svg",
    title: "Value-Based Guidance",
    description: (
      <>
        Teachers who are both scholars <br /> and compassionate guides.
      </>
    ),
    tag: "Education rooted in strong Islamic values.",
  },
];

export default function TeachingPhilosophySection() {
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
    <section className={styles.section} aria-labelledby="philosophy-heading">
      <div className={styles.pattern} aria-hidden="true">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div ref={ref} className={styles.container}>
        <div className={styles.heading}>
          <h2
            id="philosophy-heading"
            className={`${styles.title} ${show ? styles.textShow : ""}`}
          >
            Teaching Philosophy
          </h2>
          <p
            className={`${styles.subtitle} ${show ? styles.textShow : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Our approach combines structured methodology with meaningful
            engagement, ensuring that every lesson is both impactful and
            inspiring.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card, index) => (
            <div
              key={card.title}
              className={`${styles.card} ${
                show ? (index === 0 ? styles.showLeft : styles.showRight) : ""
              }`}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardHeader}>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <div className={styles.cardDescription}>
                  <p>{card.description}</p>
                </div>
                <div className={styles.cardTag}>
                  <span
                    className={`${styles.tag} ${show ? styles.tagShow : ""}`}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
