"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./WhyChooseSection.module.css";

const LEFT_FEATURES = [
  {
    icon: "/icons/iqra-icon.svg",
    title: "Experts Azhari tutors",
    description: "mastering English and Arabic for everyone.",
  },
  {
    icon: "/icons/iqra-icon.svg",
    title: "Proactive Monitoring",
    description: "Daily reports for Muslim kids online education.",
  },
];

const RIGHT_FEATURES = [
  {
    icon: "/icons/iqra-icon.svg",
    title: "Uninterrupted Learning",
    description:
      "Premium Zoom classes ensuring a professional learning experience.",
  },
  {
    icon: "/icons/iqra-icon.svg",
    title: "Rapid Development",
    description: "Visible progress within 30 days.",
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25, rootMargin: "50px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full bg-cream py-24"
      aria-labelledby="why-choose-heading"
    >
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="why-choose-heading"
            className="text-[48px] font-bold leading-[120%] text-neutral-500"
          >
            Why Families Choose Fitrah
          </h2>
          <p className="text-[18px] font-bold leading-[150%] text-[rgba(70,81,80,1)] max-w-[800px]">
            Fitrah Academy offers a high-standard Islamic education system,
            blending linguistic mastery with advanced technology to ensure a
            professional and seamless learning journey for all ages.
          </p>
        </div>

        {/* Desktop layout using CSS Grid with image spanning two rows */}
        <div className={styles.desktopGrid}>
          {/* Left side - first feature */}
          <div
            className={`${styles.featureItem} ${styles.fadeLeft} ${visible ? styles.show : ""}`}
            style={{ transitionDelay: "0s" }}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={LEFT_FEATURES[0].icon}
                alt=""
                width={80}
                height={79}
                loading="lazy"
              />
            </div>
            <h3 className={styles.featureTitle}>{LEFT_FEATURES[0].title}</h3>
            <p className={styles.featureDesc}>{LEFT_FEATURES[0].description}</p>
          </div>

          {/* Center Image - spans two rows */}
          <div
            className={`${styles.centerImageGrid} ${styles.scaleIn} ${visible ? styles.show : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <Image
              src="/images/iqra.svg"
              alt="Iqra"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>

          {/* Right side - first feature */}
          <div
            className={`${styles.featureItem} ${styles.fadeRight} ${visible ? styles.show : ""}`}
            style={{ transitionDelay: "0s" }}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={RIGHT_FEATURES[0].icon}
                alt=""
                width={80}
                height={79}
                loading="lazy"
              />
            </div>
            <h3 className={styles.featureTitle}>{RIGHT_FEATURES[0].title}</h3>
            <p className={styles.featureDesc}>
              {RIGHT_FEATURES[0].description}
            </p>
          </div>

          {/* Left side - second feature */}
          <div
            className={`${styles.featureItem} ${styles.fadeLeft} ${visible ? styles.show : ""}`}
            style={{ transitionDelay: "0.08s" }}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={LEFT_FEATURES[1].icon}
                alt=""
                width={80}
                height={79}
                loading="lazy"
              />
            </div>
            <h3 className={styles.featureTitle}>{LEFT_FEATURES[1].title}</h3>
            <p className={styles.featureDesc}>{LEFT_FEATURES[1].description}</p>
          </div>

          {/* Empty cell below image? No, image spans rows, so this cell doesn't exist */}
          {/* Actually with grid, if image spans 2 rows, we need 2x3 grid, so cells: (1,1) left1, (1,2) image, (1,3) right1; (2,1) left2, (2,3) right2. There's no (2,2) because image occupies it. */}
          {/* That's correct. So we just need to place left2 and right2 in row 2. */}

          {/* Right side - second feature */}
          <div
            className={`${styles.featureItem} ${styles.fadeRight} ${visible ? styles.show : ""}`}
            style={{ transitionDelay: "0.08s" }}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={RIGHT_FEATURES[1].icon}
                alt=""
                width={80}
                height={79}
                loading="lazy"
              />
            </div>
            <h3 className={styles.featureTitle}>{RIGHT_FEATURES[1].title}</h3>
            <p className={styles.featureDesc}>
              {RIGHT_FEATURES[1].description}
            </p>
          </div>
        </div>

        {/* Mobile/Tablet layout (same as before, works well) */}
        <div className={styles.mobileLayout}>
          <div className={styles.mobileLeft}>
            {LEFT_FEATURES.map((feature, idx) => (
              <div
                key={feature.title}
                className={`${styles.featureItem} ${styles.fadeUp} ${visible ? styles.show : ""}`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className={styles.iconWrapper}>
                  <Image
                    src={feature.icon}
                    alt=""
                    width={80}
                    height={79}
                    loading="lazy"
                  />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.mobileCenterImage}>
            <Image
              src="/images/iqra.svg"
              alt="Iqra"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
          <div className={styles.mobileRight}>
            {RIGHT_FEATURES.map((feature, idx) => (
              <div
                key={feature.title}
                className={`${styles.featureItem} ${styles.fadeUp} ${visible ? styles.show : ""}`}
                style={{ transitionDelay: `${idx * 0.08 + 0.16}s` }}
              >
                <div className={styles.iconWrapper}>
                  <Image
                    src={feature.icon}
                    alt=""
                    width={80}
                    height={79}
                    loading="lazy"
                  />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
