"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  // { label: "Blog", href: "/blog" },
];

type NavbarProps = {
  variant?: "sticky" | "static";
};

export default function Navbar({ variant = "sticky" }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => pathname === href;

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const headerBase = "w-full rounded-b-[32px] shadow-navbar z-50";
  const headerClass =
    variant === "sticky"
      ? `sticky top-0 ${headerBase}`
      : `relative ${headerBase}`;

  return (
    <header ref={headerRef} className={headerClass}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-14 lg:px-[140px] py-4 sm:py-5 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/svg/logo.svg"
              alt="Fitrah Logo"
              width={30}
              height={40}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "rounded-t-[24px] rounded-b-[4px] bg-[rgba(13,35,24,0.1)] border-b-2 border-gold px-6 py-3 text-neutral-50 font-bold text-[18px]"
                      : "text-neutral-100 hover:text-white transition-colors duration-200 text-[18px]"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center justify-center w-32 px-4 py-2 border-b-2 border-gold rounded-[3px] text-neutral-50 font-bold text-base hover:bg-gold/10 transition-colors duration-200"
          >
            Contact
          </Link>

          {/* Hamburger / X */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex lg:hidden text-neutral-50 w-6 h-6 relative items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute block w-6 h-[2px] bg-neutral-50 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute block w-6 h-[2px] bg-neutral-50 transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute block w-6 h-[2px] bg-neutral-50 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[7px]"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu — Smooth Expand */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-5 sm:gap-6 py-6 sm:py-8 border-t border-gold/20 mt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "rounded-t-[24px] rounded-b-[4px] bg-[rgba(13,35,24,0.1)] border-b-2 border-gold px-6 py-3 text-neutral-50 font-bold text-[18px]"
                    : "text-neutral-100 hover:text-white transition-colors duration-200 text-[18px]"
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-32 px-4 py-2 border-b-2 border-gold rounded-[3px] text-neutral-50 font-bold text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
