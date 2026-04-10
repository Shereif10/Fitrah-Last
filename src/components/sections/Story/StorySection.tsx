"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StorySection.module.css";

export default function StorySection() {
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
    <section className={styles.section} aria-labelledby="story-heading">
      <div className={styles.container}>
        <div
          ref={ref}
          className={`${styles.card} ${show ? styles.cardShow : ""}`}
        >
          <div
            className={`${styles.innerBorder} ${show ? styles.borderShow : ""}`}
          />
          <div className={styles.content}>
            <h2
              id="story-heading"
              className={`${styles.title} ${show ? styles.textShow : ""}`}
            >
              Our Story
            </h2>
            <h3 className={`${styles.subtitle} ${show ? styles.textShow : ""}`}>
              Founded by Parents, Designed for Growth
            </h3>
            <p
              className={`${styles.description} ${show ? styles.textShow : ""}`}
            >
              Fitrah began as a simple conversation between parents struggling
              to find high-quality Islamic education that resonated with their
              children&apos;s Western upbringing. We saw a gap between
              traditional weekend schools and the engaging digital world our
              kids inhabit. We realized that to preserve the fitrah (innate
              nature) of our children, we needed to speak their language. We
              needed to combine authentic scholarship with world-class pedagogy
              and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
