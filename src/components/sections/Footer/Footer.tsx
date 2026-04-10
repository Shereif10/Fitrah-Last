"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";

const COMPANY_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Pricing", href: "/pricing" },
];

const RESOURCES_LINKS = [
  { name: "Community", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Parents Guide", href: "#" },
];

const LEGAL_LINKS = [
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
];

const SOCIAL_ICONS = [
  {
    src: "/icons/social-facebook.svg",
    alt: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61565365229579",
  },
  {
    src: "/icons/social-instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/fitrahacademy100",
  },
  {
    src: "/icons/social-tiktok.svg",
    alt: "TikTok",
    href: "https://www.tiktok.com/@fitrahacademy100",
  },
  {
    src: "/icons/social-whatsapp.svg",
    alt: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=201044142473",
  },
  {
    src: "/icons/social-google.svg",
    alt: "Gmail",
    href: "mailto:fitrahacademy100@gmail.com",
  },
];

export default function Footer() {
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "50px" },
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) =>
    `${styles.link} ${pathname === href ? styles.activeLink : ""}`;

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${visible ? styles.visible : ""}`}
      aria-labelledby="footer-heading"
    >
      <div className={styles.pattern} aria-hidden="true">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Left - Brand */}
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <Image
                src="/svg/logo.svg"
                alt="Fitrah Academy Logo"
                width={24}
                height={32}
                loading="lazy"
              />
              <h3 className={styles.logoText}>Fitrah</h3>
            </div>
            <p className={styles.description}>
              Empowering the next generation with interactive Islamic education
              that nurtures the mind and soul.
            </p>
          </div>

          {/* Right - Links */}
          <div className={styles.linksContainer}>
            {/* Company */}
            <div className={styles.linkGroup}>
              <b className={styles.groupTitle}>Company</b>
              <ul className={styles.linkList}>
                {COMPANY_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={linkClass(link.href)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className={styles.linkGroup}>
              <b className={styles.groupTitle}>Resources</b>
              <ul className={styles.linkList}>
                {RESOURCES_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className={styles.linkGroup}>
              <b className={styles.groupTitle}>Legal</b>
              <ul className={styles.linkList}>
                {LEGAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2024 Fitrah Education. All rights reserved.
          </p>
          <div className={styles.socialIcons}>
            {SOCIAL_ICONS.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className={styles.socialLink}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  loading="lazy"
                  className={styles.socialIcon}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
