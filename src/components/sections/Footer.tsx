import Image from "next/image";
import Link from "next/link";

/* ========================= */
/* Data */
/* ========================= */

const COMPANY_LINKS = ["Home", "About", "Courses", "Pricing", "Blog"];
const RESOURCES_LINKS = ["Community", "Help Center", "Parents Guide"];
const LEGAL_LINKS = ["Privacy", "Terms"];

const SOCIAL_ICONS = [
  { src: "icons/social-facebook.svg", alt: "Facebook" },
  { src: "icons/social-instagram.svg", alt: "Instagram" },
  { src: "icons/social-linkedin.svg", alt: "LinkedIn" },
  { src: "icons/social-google.svg", alt: "Google" },
  { src: "icons/social-telegram.svg", alt: "Telegram" },
  { src: "icons/social-snapchat.svg", alt: "Snapchat" },
];

/* ========================= */
/* Component */
/* ========================= */

export default function Footer() {
  return (
    <footer className="w-full bg-primary rounded-t-[128px] pt-20 pb-10 px-6 lg:px-[80px] relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1192px] mx-auto flex flex-col gap-12">
        {/* ========================= */}
        {/* Top Section */}
        {/* ========================= */}
        <div className="flex justify-between gap-12 flex-wrap">
          {/* LEFT */}
          <div className="flex-1 min-w-[280px] max-w-[400px] px-2">
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image
                  src="/svg/logo.svg"
                  alt="Fitrah"
                  width={24}
                  height={32}
                />
                <h3 className="text-[22px] font-bold text-neutral-50">
                  Fitrah
                </h3>
              </div>

              {/* Description */}
              <p className="text-[16px] leading-[150%] text-neutral-100">
                Empowering the next generation with interactive Islamic
                education that nurtures the mind and soul.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex gap-16 px-2 flex-wrap">
            {/* Company */}
            <div className="flex flex-col gap-6 w-[160px]">
              <b className="text-[18px] text-neutral-50">Company</b>

              <ul className="flex flex-col gap-4">
                {COMPANY_LINKS.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[14px] text-neutral-100 hover:text-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-6 w-[160px]">
              <b className="text-[18px] text-neutral-50">Resources</b>

              <ul className="flex flex-col gap-4">
                {RESOURCES_LINKS.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[14px] text-neutral-100 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-6 w-[160px]">
              <b className="text-[18px] text-neutral-50">Legal</b>

              <ul className="flex flex-col gap-4">
                {LEGAL_LINKS.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[14px] text-neutral-100 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* Divider */}
        {/* ========================= */}
        <div className="w-full h-[1px] bg-[#A29C7B] opacity-60" />

        {/* ========================= */}
        {/* Bottom Section */}
        {/* ========================= */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Copyright */}
          <p className="text-[12px] font-semibold text-neutral-50">
            © 2024 Fitrah Education. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {SOCIAL_ICONS.map((icon) => (
              <Link href="#" key={icon.alt}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
