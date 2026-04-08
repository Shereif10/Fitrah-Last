"use client";

import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

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

    const scrollToPricing = () => {
      const el = document.getElementById("pricing");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <>
      {/* Animation */}
      <style>{`
        @keyframes bounceArrow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>

      <section
        className={`relative overflow-hidden rounded-b-[32px] w-full flex flex-col ${
          variant === "home" ? "h-screen" : "h-[779px]"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 [background:linear-gradient(149.79deg,#034845,#0f302e_50%,#1c4e4c)] rounded-b-[32px]">
          <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full border border-[rgba(162,156,123,0.25)]" />
          <div className="absolute -bottom-[100px] -left-[100px] w-[300px] h-[300px] rounded-full border border-[rgba(162,156,123,0.25)]" />
        </div>

        {/* Pattern */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/svg/hero-pattern.svg"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col w-full h-full">
          {/* Navbar */}
          <Navbar variant="static" />

          {/* Body */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-[120px] pt-10">
              {variant === "home" ? (
                <div className="flex items-center w-full gap-[96px] lg:gap-12">
                  <div className="flex-1 flex flex-col items-start gap-16">
                    <div className="flex flex-col gap-8">
                      <h1 className="text-[56px] lg:text-[45px] sm:text-[34px] leading-[120%] font-bold tracking-[-0.03em] text-neutral-50">
                        {title}
                        {subtitle && (
                          <>
                            <br />
                            <span>{subtitle}</span>
                          </>
                        )}
                      </h1>

                      <div className="flex flex-col gap-4">
                        <p className="text-[18px] text-neutral-100 leading-[150%]">
                          {description}
                        </p>

                        {highlight && (
                          <div className="flex items-center gap-4">
                            <Image
                              src="/svg/check-icon.svg"
                              alt=""
                              width={28}
                              height={32}
                            />
                            <b className="text-[16px] text-neutral-50">
                              {highlight}
                            </b>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-8 w-full">
                      <div onClick={scrollToPricing}>
                        <button className="bg-gold w-[395px] h-[70px] rounded-[12px] px-4 py-[19px] text-[18px] font-bold text-neutral-50 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                          Contact US
                        </button>
                      </div>

                      <Link href="#pricing">
                        <button className="bg-[rgba(162,156,123,0.1)] border border-gold w-[175px] h-[70px] rounded-[12px] px-[40px] py-[19px] text-[18px] font-bold text-gold flex items-center justify-center cursor-pointer hover:bg-[rgba(162,156,123,0.2)] transition-colors whitespace-nowrap">
                          Our Plans
                        </button>
                      </Link>
                    </div>
                  </div>

                  {showRight && (
                    <div className="flex flex-col items-center gap-6 w-[367px] shrink-0 pt-4">
                      <div className="h-[97px] w-full rounded-[24px] bg-[rgba(162,156,123,0.1)] flex items-center justify-center px-4">
                        <p className="text-[32px] font-serif text-gold text-center">
                          فِطْرَةَ اللهِ الَّتِي فَطَر النَّاسَ عَلَيْها{" "}
                        </p>
                      </div>

                      <div className="w-full pl-6">
                        <Image
                          src="/images/hero-student.png"
                          alt=""
                          width={319}
                          height={417}
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      <div className="relative w-full mt-[-49px] flex justify-center">
                        <div className="relative w-[367px] h-[106px]">
                          <Image
                            src="/svg/badge-vector.svg"
                            alt=""
                            fill
                            className="object-contain"
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <b className="text-[18px] text-primary">
                              Active Students
                            </b>
                            <span className="text-[32px] font-bold text-neutral-50">
                              12,450+
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full flex flex-col items-center text-center gap-6">
                  <h1 className="text-[56px] lg:text-[45px] sm:text-[34px] font-bold leading-[120%] text-neutral-50 max-w-[900px]">
                    {title}
                  </h1>

                  <p className="text-[18px] text-neutral-100 leading-[150%]">
                    {description}
                  </p>

                  {/* Explore */}
                  <div
                    className="flex flex-col items-center gap-2 mt-4 cursor-pointer"
                    onClick={() => {
                      window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <span className="text-[16px] text-neutral-50">
                      {exploreText}
                    </span>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="text-neutral-50"
                      style={{
                        animation: "bounceArrow 1.5s ease-in-out infinite",
                      }}
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
    </>
  );
}
