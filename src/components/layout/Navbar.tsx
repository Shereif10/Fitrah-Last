"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

type NavbarProps = {
  variant?: "sticky" | "static";
};

export default function Navbar({ variant = "sticky" }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const headerBase = "w-full rounded-b-[32px] shadow-navbar z-50";
  const headerClass =
    variant === "sticky"
      ? `sticky top-0 ${headerBase}`
      : `relative ${headerBase}`;

  return (
    <header className={headerClass}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-14 lg:px-[140px] py-6">
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
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
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

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex lg:hidden text-neutral-50"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="block w-6 h-[2px] bg-neutral-50" />
              <span className="block w-6 h-[2px] bg-neutral-50" />
              <span className="block w-6 h-[2px] bg-neutral-50" />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-6 py-8 border-t border-gold/20 mt-4">
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
        )}
      </div>
    </header>
  );
}
