"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./MeetTeachersSection.module.css";

const TEACHERS = [
  {
    image: "/images/teacher-yassmin.jpg",
    name: "Ustadha Yassmin",
    role: "Quran teacher",
    desc: "Helping students master Quran recitation with confidence.",
  },
  {
    image: "/images/teacher-sumaya.jpg",
    name: "Sumaya Muhammad",
    role: "Quran teacher",
    desc: "Making Arabic simple, engaging, and easy to understand.",
  },
  {
    image: "/images/teacher-hisham.jpg",
    name: "Hisham Sayed",
    role: "Quran teacher",
    desc: "Guiding students with essential Islamic knowledge and values.",
  },
  {
    image: "/images/teacher-shrouq.jpg",
    name: "Shrouq Elsayed",
    role: "Human resources",
    desc: "Ensuring a smooth and supportive learning journey.",
  },
];

export default function MeetTeachersSection() {
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
    <section className={styles.section} aria-labelledby="teachers-heading">
      <div ref={ref} className={styles.container}>
        <div className={styles.heading}>
          <h2
            id="teachers-heading"
            className={`${styles.title} ${show ? styles.show : ""}`}
          >
            Meet the Teachers
          </h2>
          <p
            className={`${styles.subtitle} ${show ? styles.show : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Our faculty comprises certified educators passionate about nurturing
            young minds.
          </p>
        </div>

        <div className={styles.grid}>
          {TEACHERS.map((teacher, index) => (
            <div
              key={teacher.name}
              className={`${styles.card} ${show ? styles.show : ""}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className={styles.image}
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 270px"
                />
              </div>
              <div className={styles.info}>
                <div className={styles.pattern} aria-hidden="true">
                  <Image
                    src="/svg/hero-pattern.svg"
                    alt=""
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.name}>{teacher.name}</h3>
                  <span className={styles.role}>{teacher.role}</span>
                  <p className={styles.description}>{teacher.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
