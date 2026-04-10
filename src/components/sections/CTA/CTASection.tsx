"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./CTASection.module.css";

export default function CTASection({
  variant = "default",
}: {
  variant?: "default" | "framed";
}) {
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
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <div
          ref={sectionRef}
          className={`${styles.frameWrapper} ${
            visible ? styles.show : ""
          } ${variant === "framed" ? styles.framed : ""}`}
        >
          <div className={styles.content}>
            <div className={styles.textGroup}>
              <h2 id="cta-heading" className={styles.title}>
                Ready to Start Their Journey?
              </h2>
              <p className={styles.description}>
                Give your child the gift of knowledge. Join thousands of happy
                families on Fitrah today and get your first class completely
                free.
              </p>
            </div>

            <div className={styles.buttons}>
              <Link href="/contact" className={styles.link}>
                <button className={styles.ctaPrimary}>Contact US</button>
              </Link>

              <Link href="/pricing" className={styles.link}>
                <button className={styles.ctaSecondary}>our plans</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
