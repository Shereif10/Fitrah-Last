"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./PricingSection.module.css";

const DURATIONS = ["30 Minutes", "45 Minutes", "1 Hour"] as const;
type Duration = (typeof DURATIONS)[number];

type Plan = {
  name: string;
  frequency: string;
  badge: string;
  features: string[];
  prices: Record<Duration, string>;
};

const PLANS: Plan[] = [
  {
    name: "Basic Plan",
    frequency: "1 Day / Week",
    badge: "Popular",
    features: [
      "Live one-on-one classes with certified teachers",
      "Quran, Arabic, and Islamic studies lessons",
      "Flexible scheduling designed for busy families",
    ],
    prices: { "30 Minutes": "$20", "45 Minutes": "$30", "1 Hour": "$40" },
  },
  {
    name: "Dual Plan",
    frequency: "2 Days / Week",
    badge: "Popular",
    features: [
      "Live one-on-one classes with certified teachers",
      "Quran, Arabic, and Islamic studies lessons",
      "Flexible scheduling designed for busy families",
    ],
    prices: { "30 Minutes": "$40", "45 Minutes": "$60", "1 Hour": "$80" },
  },
  {
    name: "Silver Plan",
    frequency: "3 Days / Week",
    badge: "Popular",
    features: [
      "Live one-on-one classes with certified teachers",
      "Quran, Arabic, and Islamic studies lessons",
      "Flexible scheduling designed for busy families",
    ],
    prices: { "30 Minutes": "$60", "45 Minutes": "$90", "1 Hour": "$120" },
  },
  {
    name: "Gold Plan",
    frequency: "4 Days / Week",
    badge: "Popular",
    features: [
      "Live one-on-one classes with certified teachers",
      "Quran, Arabic, and Islamic studies lessons",
      "Flexible scheduling designed for busy families",
    ],
    prices: { "30 Minutes": "$80", "45 Minutes": "$120", "1 Hour": "$160" },
  },
  {
    name: "Premium Plan",
    frequency: "5 Days / Week",
    badge: "Popular",
    features: [
      "Live one-on-one classes with certified teachers",
      "Quran, Arabic, and Islamic studies lessons",
      "Flexible scheduling designed for busy families",
    ],
    prices: { "30 Minutes": "$100", "45 Minutes": "$150", "1 Hour": "$200" },
  },
  {
    name: "Complete Plan",
    frequency: "6 Days / Week",
    badge: "Popular",
    features: [
      "Live one-on-one classes with certified teachers",
      "Quran, Arabic, and Islamic studies lessons",
      "Flexible scheduling designed for busy families",
    ],
    prices: { "30 Minutes": "$120", "45 Minutes": "$180", "1 Hour": "$240" },
  },
  {
    name: "Monthly Plan",
    frequency: "Full Month Support",
    badge: "Popular",
    features: [
      "Live one-on-one classes with certified teachers",
      "Quran, Arabic, and Islamic studies lessons",
      "Flexible scheduling designed for busy families",
    ],
    prices: { "30 Minutes": "$150", "45 Minutes": "$210", "1 Hour": "$270" },
  },
];

const EXIT_MS = 280;
const ENTER_MS = 340;
const AUTO_MS = 3200;

export default function PricingSection() {
  const [activeDuration, setActiveDuration] = useState<Duration>("1 Hour");
  const [displayIndex, setDisplayIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [direction, setDirection] = useState<"left" | "right">("left");

  const phaseRef = useRef(phase);
  const displayIdxRef = useRef(displayIndex);
  const isPausedRef = useRef(false);

  useEffect(() => {
    phaseRef.current = phase;
    displayIdxRef.current = displayIndex;
  }, [phase, displayIndex]);

  const navigate = useCallback((newIndex: number, dir: "left" | "right") => {
    if (phaseRef.current !== "idle") return;
    setDirection(dir);
    setPhase("exit");
    setTimeout(() => {
      setDisplayIndex(newIndex);
      setPhase("enter");
      setTimeout(() => setPhase("idle"), ENTER_MS);
    }, EXIT_MS);
  }, []);

  const goNext = useCallback(() => {
    navigate((displayIdxRef.current + 1) % PLANS.length, "left");
  }, [navigate]);

  const goPrev = useCallback(() => {
    navigate(
      (displayIdxRef.current - 1 + PLANS.length) % PLANS.length,
      "right",
    );
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPausedRef.current && phaseRef.current === "idle") {
        navigate((displayIdxRef.current + 1) % PLANS.length, "left");
      }
    }, AUTO_MS);
    return () => clearInterval(interval);
  }, [navigate]);

  const prev = (displayIndex - 1 + PLANS.length) % PLANS.length;
  const next = (displayIndex + 1) % PLANS.length;
  const visible = [
    { plan: PLANS[prev], isFeatured: false, key: `prev-${prev}` },
    { plan: PLANS[displayIndex], isFeatured: true, key: `cur-${displayIndex}` },
    { plan: PLANS[next], isFeatured: false, key: `next-${next}` },
  ];

  const containerAnimClass =
    phase === "exit"
      ? direction === "left"
        ? styles.slideOutLeft
        : styles.slideOutRight
      : phase === "enter"
        ? direction === "left"
          ? styles.slideInRight
          : styles.slideInLeft
        : "";

  return (
    <section
      id="pricing"
      className={styles.section}
      aria-labelledby="pricing-heading"
    >
      <div className={styles.pattern}>
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 id="pricing-heading" className={styles.title}>
            Pricing Plans
          </h2>
          <p className={styles.subtitle}>
            Choose a plan that fits your family&apos;s schedule
          </p>
        </div>

        <div className={styles.tabs}>
          {DURATIONS.map((d, i) => (
            <button
              key={d}
              onClick={() => setActiveDuration(d)}
              className={`${styles.tab} ${
                activeDuration === d ? styles.tabActive : ""
              } ${i === 0 ? styles.tabFirst : i === 2 ? styles.tabLast : ""}`}
              aria-pressed={activeDuration === d}
            >
              {d}
            </button>
          ))}
        </div>

        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
          <div className={`${styles.carouselTrack} ${containerAnimClass}`}>
            {visible.map(({ plan, isFeatured, key }) => (
              <PricingCard
                key={key}
                plan={plan}
                featured={isFeatured}
                activeDuration={activeDuration}
              />
            ))}
          </div>
        </div>

        <div className={styles.navigation}>
          <button
            onClick={goPrev}
            className={styles.navButton}
            aria-label="Previous plan"
          >
            <Image
              src="/svg/Vector1.svg"
              alt=""
              width={28}
              height={54}
              className={styles.navIconPrev}
              loading="lazy"
            />
          </button>

          <div className={styles.dots}>
            {PLANS.map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  navigate(index, index > displayIndex ? "left" : "right")
                }
                className={`${styles.dot} ${
                  index === displayIndex ? styles.dotActive : ""
                }`}
                aria-label={`Go to plan ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className={styles.navButton}
            aria-label="Next plan"
          >
            <Image
              src="/svg/Vector1.svg"
              alt=""
              width={28}
              height={54}
              className={styles.navIconNext}
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  featured,
  activeDuration,
}: {
  plan: Plan;
  featured: boolean;
  activeDuration: Duration;
}) {
  return (
    <div
      className={`${styles.card} ${featured ? styles.cardFeatured : styles.cardNormal}`}
      style={
        {
          "--card-width": featured ? "340px" : "280px",
          "--card-height": featured ? "500px" : "420px",
          "--card-padding-top": featured ? "120px" : "96px",
          "--card-padding-bottom": featured ? "120px" : "96px",
          "--card-padding-left": featured ? "35px" : "29px",
          "--card-padding-right": featured ? "35px" : "29px",
        } as React.CSSProperties
      }
    >
      <span className={styles.badge}>{plan.badge}</span>
      <h3 className={styles.cardTitle}>{plan.name}</h3>
      <p className={styles.frequency}>{plan.frequency}</p>

      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f} className={styles.featureItem}>
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="6" cy="6" r="5.5" stroke="#A29C7B" strokeWidth="1" />
              <path
                d="M3.5 6L5.2 7.8L8.5 4.5"
                stroke="#A29C7B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className={styles.priceWrapper}>
        <span className={styles.price}>{plan.prices[activeDuration]}</span>
        <span className={styles.pricePeriod}>/ month</span>
      </div>
    </div>
  );
}
