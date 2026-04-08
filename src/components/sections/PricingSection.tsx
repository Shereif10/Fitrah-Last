"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

/* ========================= */
/* Keyframes */
/* ========================= */

const KEYFRAMES = `
  @keyframes slideOutLeft {
    from { opacity: 1; transform: translateX(0px) scale(1); }
    to   { opacity: 0; transform: translateX(-70px) scale(0.96); }
  }
  @keyframes slideOutRight {
    from { opacity: 1; transform: translateX(0px) scale(1); }
    to   { opacity: 0; transform: translateX(70px) scale(0.96); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(70px) scale(0.96); }
    to   { opacity: 1; transform: translateX(0px) scale(1); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-70px) scale(0.96); }
    to   { opacity: 1; transform: translateX(0px) scale(1); }
  }
`;

/* ========================= */
/* Data */
/* ========================= */

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

/* ========================= */
/* Section */
/* ========================= */

export default function PricingSection() {
  const [activeDuration, setActiveDuration] = useState<Duration>("1 Hour");

  // displayIndex = ما بيتعرض فعلاً (بيتأخر شوية أثناء الانيميشن)
  const [displayIndex, setDisplayIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [direction, setDirection] = useState<"left" | "right">("left");

  // refs عشان نتجنب stale closures
  const phaseRef = useRef(phase);
  const displayIdxRef = useRef(displayIndex);
  const isPausedRef = useRef(false);

useEffect(() => {
  phaseRef.current = phase;
  displayIdxRef.current = displayIndex;
}, [phase, displayIndex]);

  /* ---- navigate ---- */
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

  /* ---- auto-play ---- */
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPausedRef.current && phaseRef.current === "idle") {
        navigate((displayIdxRef.current + 1) % PLANS.length, "left");
      }
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [navigate]);

  /* ---- الـ 3 cards اللي بتتعرض ---- */
  const prev = (displayIndex - 1 + PLANS.length) % PLANS.length;
  const next = (displayIndex + 1) % PLANS.length;
  const visible = [
    { plan: PLANS[prev], isFeatured: false, key: `prev-${prev}` },
    { plan: PLANS[displayIndex], isFeatured: true, key: `cur-${displayIndex}` },
    { plan: PLANS[next], isFeatured: false, key: `next-${next}` },
  ];

  /* ---- animation style للـ container ---- */
  const containerAnim: React.CSSProperties =
    phase === "exit"
      ? {
          animation: `${direction === "left" ? "slideOutLeft" : "slideOutRight"} ${EXIT_MS}ms cubic-bezier(0.4,0,1,1) forwards`,
        }
      : phase === "enter"
        ? {
            animation: `${direction === "left" ? "slideInRight" : "slideInLeft"} ${ENTER_MS}ms cubic-bezier(0,0,0.2,1) forwards`,
          }
        : {};

  return (
    <>
      {/* Inject keyframes مرة واحدة */}
      <style>{KEYFRAMES}</style>

      <section id="pricing" className="w-full bg-primary rounded-[48px] py-24 overflow-hidden my-24 relative">
        {/* Pattern */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/svg/hero-pattern.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[48px] font-bold text-neutral-50">
              Pricing Plans
            </h2>
            <p className="text-[22px] text-neutral-100">
              Choose a plan that fits your family&apos;s schedule
            </p>
          </div>

          {/* Tabs */}
          <div className="w-full h-[97px] p-6 flex gap-4 bg-[rgba(13,35,24,0.1)] border-[3px] border-gold rounded-t-[16px] rounded-b-[48px]">
            {DURATIONS.map((d, i) => (
              <button
                key={d}
                onClick={() => setActiveDuration(d)}
                className={`flex-1 h-[49px] flex items-center justify-center font-bold cursor-pointer transition-colors duration-300 ${
                  activeDuration === d
                    ? "bg-gold text-primary"
                    : "bg-[rgba(162,156,123,0.1)] text-neutral-100"
                } ${
                  i === 0
                    ? "rounded-bl-[48px] rounded-t-[8px]"
                    : i === 2
                      ? "rounded-br-[48px] rounded-t-[8px]"
                      : "rounded-[8px]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Cards wrapper — overflow hidden عشان الـ slide ميبانش برا */}
          <div
            className="w-full overflow-hidden"
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
          >
            <div
              className="flex gap-6 items-center justify-center w-full"
              style={containerAnim}
            >
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

          {/* Navigation */}
          <div className="w-full flex items-center justify-between">
            <Image
              src="svg/Vector1.svg"
              alt="prev"
              width={28}
              height={54}
              className="rotate-180 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200"
              onClick={goPrev}
            />

            <div className="flex items-center gap-2">
              {PLANS.map((_, index) => (
                <span
                  key={index}
                  onClick={() =>
                    navigate(index, index > displayIndex ? "left" : "right")
                  }
                  className="cursor-pointer"
                  style={{
                    display: "block",
                    width: index === displayIndex ? 24 : 6,
                    height: 6,
                    borderRadius: 999,
                    background:
                      index === displayIndex
                        ? "var(--color-gold)"
                        : "rgba(162,156,123,0.35)",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              ))}
            </div>

            <Image
              src="svg/Vector1.svg"
              alt="next"
              width={28}
              height={54}
              className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200"
              onClick={goNext}
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ========================= */
/* Card */
/* ========================= */

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
      className="flex-shrink-0 flex flex-col items-center text-center"
      style={{
        width: featured ? 340 : 280,
        height: featured ? 500 : 420,
        backgroundImage: `url(/svg/pricing-frame-${featured ? "lg" : "sm"}.svg)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        paddingTop: featured ? "120px" : "96px",
        paddingBottom: featured ? "120px" : "96px",
        paddingLeft: featured ? "35px" : "29px",
        paddingRight: featured ? "35px" : "29px",
      }}
    >
      {/* Badge */}
      <span
        style={{
          width: 82,
          height: 26,
          borderRadius: 8,
          padding: "4px 16px",
          background: "#A29C7B1A",
          border: "1px solid rgba(162,156,123,0.4)",
          fontSize: 12,
          fontWeight: 400,
          lineHeight: "150%",
          color: "#A29C7B",
          whiteSpace: "nowrap",
        }}
      >
        {plan.badge}
      </span>

      {/* Name */}
      <h3
        style={{
          marginTop: featured ? 16 : 8,
          fontSize: featured ? 32 : 24,
          fontWeight: 700,
          lineHeight: featured ? "150%" : "120%",
          color: "var(--color-neutral-50)",
        }}
      >
        {plan.name}
      </h3>

      {/* Frequency */}
      <p
        style={{
          fontSize: featured ? 14 : 12,
          fontWeight: featured ? 350 : 400,
          lineHeight: "150%",
          color: "var(--color-neutral-100)",
        }}
      >
        {plan.frequency}
      </p>

      {/* Features */}
      <div
        className="flex flex-col items-start w-full"
        style={{ marginTop: 16, gap: featured ? 7 : 6 }}
      >
        {plan.features.map((f) => (
          <div key={f} className="flex items-center" style={{ gap: 6 }}>
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              style={{ flexShrink: 0 }}
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
            <span
              style={{
                fontSize: 8,
                fontWeight: 600,
                lineHeight: "120%",
                color: "var(--color-neutral-100)",
                textAlign: "left",
              }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Price */}
      <div
        className="border border-gold rounded-[12px] flex items-baseline"
        style={{ marginTop: 16, padding: "6px 20px", gap: 4 }}
      >
        <span
          style={{
            fontSize: featured ? 32 : 24,
            fontWeight: 700,
            lineHeight: featured ? "150%" : "120%",
            color: "#A29C7B",
          }}
        >
          {plan.prices[activeDuration]}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            lineHeight: "120%",
            color: "#A29C7B",
          }}
        >
          / month
        </span>
      </div>
    </div>
  );
}
