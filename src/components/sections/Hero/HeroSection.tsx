"use client";

import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

type HeroProps = {
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  highlight?: string;
  showRight?: boolean;
  variant?: "home" | "simple";
  exploreText?: string;
};

export default function HeroSection({
  title,
  subtitle,
  description,
  highlight,
  showRight = true,
  variant = "home",
  exploreText = "Explore",
}: HeroProps) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (variant !== "home" || !showRight) return;
    let start = 0;
    const end = 12450;
    const duration = 1500;
    const increment = end / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [variant, showRight]);

  return (
    <section
      className="relative rounded-b-[32px] w-full flex flex-col min-h-[100dvh]"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 [background:linear-gradient(149.79deg,#034845,#0f302e_50%,#1c4e4c)] rounded-b-[32px] overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full border border-[rgba(162,156,123,0.25)]" />
        <div className="absolute -bottom-[100px] -left-[100px] w-[300px] h-[300px] rounded-full border border-[rgba(162,156,123,0.25)]" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full flex-grow">
        <Navbar variant="static" />

        <div className="flex-grow flex items-start min-[1200px]:items-center">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 min-[1200px]:px-[120px] pt-8 pb-12 min-[1200px]:pt-10 min-[1200px]:pb-0">
            {variant === "home" ? (
              <div className="flex flex-col min-[1200px]:flex-row items-center w-full gap-8 md:gap-10 min-[1200px]:gap-12">
                {/* ── Ayah — موبايل وتابليت فقط (تحت 1200px) ── */}
                {showRight && (
                  <div
                    className={`${styles.fadeUp} ${show ? styles.show : ""} min-[1200px]:hidden w-full rounded-[24px] bg-[rgba(162,156,123,0.1)] flex items-center justify-center px-4 py-4`}
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <p className="text-[22px] sm:text-[26px] font-serif text-gold text-center leading-relaxed">
                      فِطْرَةَ اللهِ الَّتِي فَطَر النَّاسَ عَلَيْها
                    </p>
                  </div>
                )}

                {/* ── RIGHT column — 1200px+ فقط ── */}
                {showRight && (
                  <div className="hidden min-[1200px]:flex flex-col items-center gap-6 w-[367px] shrink-0 pt-4 order-2">
                    {/* Ayah */}
                    <div
                      className={`${styles.fadeUp} ${show ? styles.show : ""} h-[97px] w-full rounded-[24px] bg-[rgba(162,156,123,0.1)] flex items-center justify-center px-4`}
                      style={{ transitionDelay: "0.2s" }}
                    >
                      <p className="text-[32px] font-serif text-gold text-center leading-relaxed">
                        فِطْرَةَ اللهِ الَّتِي فَطَر النَّاسَ عَلَيْها
                      </p>
                    </div>

                    {/* Image */}
                    <div className={`w-full pl-6 ${styles.float}`}>
                      <Image
                        src="/images/hero-student.png"
                        alt="Student reading the Quran"
                        width={319}
                        height={417}
                        priority
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    {/* Badge */}
                    <div className="relative w-full mt-[-49px] flex justify-center">
                      <div className="relative w-[367px] h-[106px]">
                        <Image
                          src="/svg/badge-vector.svg"
                          alt=""
                          fill
                          className="object-contain"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <b className="text-[18px] text-primary">
                            Active Students
                          </b>
                          <span
                            className={`text-[32px] font-bold text-neutral-50 ${styles.badgeNumber}`}
                          >
                            {count.toLocaleString()}+
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── LEFT (Title + Desc + Buttons) ── */}
                <div className="order-1 min-[1200px]:order-1 flex-1 w-full flex flex-col items-start gap-8 min-[1200px]:gap-16">
                  <div
                    className={`${styles.fadeUp} ${show ? styles.show : ""} flex flex-col gap-6 min-[1200px]:gap-8 w-full`}
                    style={{ transitionDelay: "0.1s" }}
                  >
                    <h1 className="text-[32px] sm:text-[38px] md:text-[44px] min-[1200px]:text-[45px] leading-[120%] font-bold tracking-[-0.03em] text-neutral-50">
                      {title}
                      {subtitle && (
                        <>
                          <br />
                          <span>{subtitle}</span>
                        </>
                      )}
                    </h1>

                    <div className="flex flex-col gap-4">
                      <p className="text-[15px] sm:text-[16px] min-[1200px]:text-[18px] text-neutral-100 leading-[150%]">
                        {description}
                      </p>

                      {highlight && (
                        <div className="flex items-center gap-4">
                          <Image
                            src="/svg/check-icon.svg"
                            alt="Checkmark"
                            width={28}
                            height={32}
                            loading="lazy"
                          />
                          <b className="text-[14px] sm:text-[15px] min-[1200px]:text-[16px] text-neutral-50">
                            {highlight}
                          </b>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div
                    className={`${styles.fadeUp} ${show ? styles.show : ""} flex flex-col min-[1200px]:flex-row gap-4 min-[1200px]:gap-8 w-full`}
                    style={{ transitionDelay: "0.3s" }}
                  >
                    <Link
                      href="/contact"
                      className="w-full min-[1200px]:w-auto"
                    >
                      <button
                        type="button"
                        className={`${styles.cta} bg-gold w-full min-[1200px]:w-[395px] h-[56px] min-[1200px]:h-[70px] rounded-[12px] cursor-pointer text-[16px] min-[1200px]:text-[18px] font-bold text-neutral-50 flex items-center justify-center`}
                      >
                        Contact US
                      </button>
                    </Link>

                    <Link
                      href="/pricing"
                      className="w-full min-[1200px]:w-auto"
                    >
                      <button
                        type="button"
                        className={`${styles.cta} bg-[rgba(162,156,123,0.1)] cursor-pointer border border-gold w-full min-[1200px]:w-[175px] h-[56px] min-[1200px]:h-[70px] rounded-[12px] text-[16px] min-[1200px]:text-[18px] font-bold text-gold flex items-center justify-center`}
                      >
                        Our Plans
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* Simple variant */
              <div className="flex flex-col items-center text-center gap-6 py-8 min-[1200px]:py-0">
                <h1 className="text-[32px] sm:text-[38px] md:text-[44px] min-[1200px]:text-[56px] font-bold text-neutral-50 leading-[120%]">
                  {title}
                </h1>
                <p className="text-[15px] sm:text-[16px] min-[1200px]:text-[18px] text-neutral-100 max-w-[680px] leading-[150%]">
                  {description}
                </p>
                <div
                  className="flex flex-col items-center gap-2 mt-4 cursor-pointer"
                  onClick={() =>
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: "smooth",
                    })
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                      });
                  }}
                  aria-label="Scroll down"
                >
                  <span className="text-[16px] text-neutral-50">
                    {exploreText}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className={styles.bounce}
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
