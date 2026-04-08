"use client";

import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";

const CONTACT_ITEMS = [
  {
    icon: "/icons/icon-email.svg",
    label: "Email Us",
    value: "hello@fitrah.com",
    subtitle: "We usually reply within 24 hours.",
  },
  {
    icon: "/icons/icon-phone.svg",
    label: "Student Success Team",
    value: "+44 20 1234 5678",
    subtitle: "Mon–Fri, 9am – 6pm GMT",
  },
  {
    icon: "/icons/icon-location.svg",
    label: "Global HQ",
    value: "London, United Kingdom",
    subtitle: "Serving students in US, UK, CA, AU",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    childNumber: "",
    country: "",
    childAge: "",
    interest: "",
    extra: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative w-full bg-primary flex flex-col overflow-hidden rounded-b-[32px] mb-24 min-h-screen">
      {/* Layer 0 — Gradient BG */}

      {/* Layer 1 — Pattern */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Layer 2 — Content */}
      <div className="relative z-10 flex flex-col w-full">
        {/* Navbar */}
        <Navbar variant="static" />

        {/* Body */}
        <div className="flex-1 flex items-center py-16 px-6 md:px-12 lg:px-[120px] min-h-[calc(100vh-100px)]">
          <div className="max-w-[1192px] mx-auto w-full flex flex-row items-center justify-between gap-16 lg:gap-10">
            {/* ===== LEFT ===== */}
            <div className="flex-1 flex flex-col gap-10">
              <h1 className="text-[40px] lg:text-[38px] sm:text-[32px] font-bold leading-[100%] text-gold">
                Start your child&apos;s{" "}
                <span className="text-white">Islamic journey</span> today.
              </h1>

              <p className="text-[18px] leading-[150%] text-neutral-100 max-w-[400px]">
                Our team is here to guide you through finding the perfect
                program for your child. Whether you&apos;re interested in Quran
                reading, Hifz, or Arabic, we&apos;re just a message away.
              </p>

              {/* Contact Items */}
              <div className="flex flex-col gap-6">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-[48px] h-[48px] rounded-full bg-[#EEECE64D] flex items-center justify-center shrink-0">
                      <Image src={item.icon} alt="" width={20} height={20} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <b className="text-[16px] text-white">
                        {item.label}
                      </b>
                      <span className="text-[14px] text-white font-semibold">
                        {item.value}
                      </span>
                      <span className="text-[12px] text-neutral-100">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== RIGHT (FORM) ===== */}
            <div className="w-[800px] lg:w-[670px] sm:w-full bg-white rounded-[24px] p-8 sm:p-6 flex flex-col gap-6 shadow-[0px_8px_32px_rgba(0,0,0,0.15)] shrink-0 bg-white">
              <div>
                <h2 className="text-[24px] font-bold text-neutral-500">
                  Request Information
                </h2>
                <p className="text-[13px] text-neutral-400 mt-1">
                  Fill out the form below and we&apos;ll send you a tailored
                  curriculum overview.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="flex gap-4 sm:flex-col">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-[12px] text-neutral-400">
                      Parent&apos;s Name
                    </label>
                    <input
                      value={form.parentName}
                      onChange={(e) =>
                        handleChange("parentName", e.target.value)
                      }
                      placeholder="First and last name"
                      className="w-full h-[44px] px-4 border border-neutral-200 rounded-[8px] text-[14px] text-neutral-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-[12px] text-neutral-400">
                      Email Address
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="email@address.com"
                      className="w-full h-[44px] px-4 border border-neutral-200 rounded-[8px] text-[14px] text-neutral-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Child Number */}
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] text-neutral-400">
                    Child&apos;s Number
                  </label>
                  <select
                    value={form.childNumber}
                    onChange={(e) =>
                      handleChange("childNumber", e.target.value)
                    }
                    className="w-full h-[44px] px-4 border border-neutral-200 rounded-[8px] text-[14px] text-neutral-400 focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select Number...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>

                {/* Row 3 */}
                <div className="flex gap-4 sm:flex-col">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-[12px] text-neutral-400">
                      Country
                    </label>
                    <select
                      value={form.country}
                      onChange={(e) => handleChange("country", e.target.value)}
                      className="w-full h-[44px] px-4 border border-neutral-200 rounded-[8px] text-[14px] text-neutral-400 focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select country...</option>
                      <option value="uk">United Kingdom</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                    </select>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-[12px] text-neutral-400">
                      Child&apos;s Age
                    </label>
                    <select
                      value={form.childAge}
                      onChange={(e) => handleChange("childAge", e.target.value)}
                      className="w-full h-[44px] px-4 border border-neutral-200 rounded-[8px] text-[14px] text-neutral-400 focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select age...</option>
                      {Array.from({ length: 12 }, (_, i) => i + 5).map(
                        (age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </div>

                {/* Interest */}
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] text-neutral-400">
                    Primary Interest
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => handleChange("interest", e.target.value)}
                    className="w-full h-[44px] px-4 border border-neutral-200 rounded-[8px] text-[14px] text-neutral-400 focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">
                      What program are you interested in?
                    </option>
                    <option value="quran">Quran Recitation</option>
                    <option value="hifz">Quran Memorization</option>
                    <option value="arabic">Arabic Language</option>
                    <option value="islamic">Islamic Studies</option>
                  </select>
                </div>

                {/* Textarea */}
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] text-neutral-400">
                    Anything else we should know?
                  </label>
                  <textarea
                    rows={4}
                    value={form.extra}
                    onChange={(e) => handleChange("extra", e.target.value)}
                    placeholder="E.g. My child knows the alphabet..."
                    className="w-full px-4 py-3 border border-neutral-200 rounded-[8px] text-[14px] text-neutral-400 resize-none focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              {/* Submit */}
              <button className="w-full h-[52px] bg-[#f5f5f5] rounded-[12px] text-[16px] font-bold text-primary flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                Get Your Free Info Pack →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
