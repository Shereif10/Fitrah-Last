// ContactSection.tsx (كامل)
"use client";

import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useRef, useState } from "react";
import styles from "./ContactSection.module.css";
import emailjs from "@emailjs/browser";

// ─── Constants ────────────────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  {
    icon: "/icons/icon-email.svg",
    label: "Email Us",
    value: "fitrahacademy100@gmail.com",
    subtitle: "We usually reply within 24 hours.",
  },
  {
    icon: "/icons/icon-phone.svg",
    label: "Student Success Team",
    value: "+201044142473",
    subtitle: "24 / 7 support for parents and students.",
  },
  {
    icon: "/icons/icon-location.svg",
    label: "Global HQ",
    value: "Cairo, Egypt",
    subtitle: "Serving students in US, UK, CA, AU",
  },
];

const AGE_OPTIONS = Array.from({ length: 12 }, (_, i) => i + 5);

const SELECT_CLASS =
  "w-full h-[44px] px-4 bg-[#f5f5f5] border rounded-[8px] text-[14px] text-neutral-500 outline-none transition-all shadow-[0px_4px_6px_-4px_rgba(6,78,59,0.1),0px_10px_15px_-3px_rgba(6,78,59,0.1)] focus:shadow-[0px_6px_10px_-4px_rgba(6,78,59,0.15),0px_15px_25px_-3px_rgba(6,78,59,0.15)] focus:-translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed";

const INPUT_CLASS =
  "w-full h-[44px] px-4 bg-[#f5f5f5] border rounded-[8px] text-[14px] text-neutral-500 outline-none transition-all shadow-[0px_4px_6px_-4px_rgba(6,78,59,0.1),0px_10px_15px_-3px_rgba(6,78,59,0.1)] focus:shadow-[0px_6px_10px_-4px_rgba(6,78,59,0.15),0px_15px_25px_-3px_rgba(6,78,59,0.15)] focus:-translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ChildData {
  name: string;
  age: string;
}

interface FormState {
  parentName: string;
  email: string;
  phone: string;
  childNumber: string;
  country: string;
  childrenData: ChildData[];
  interest: string;
  extra: string;
}

type FormErrors = Partial<
  Record<
    | keyof Omit<FormState, "childrenData">
    | `childAge_${number}`
    | `childName_${number}`,
    string
  >
>;
type TouchedFields = Partial<
  Record<
    | keyof Omit<FormState, "childrenData">
    | `childAge_${number}`
    | `childName_${number}`,
    boolean
  >
>;

type ChildAgeKey = `childAge_${number}`;
type ChildNameKey = `childName_${number}`;

// ─── Validation ───────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.parentName.trim())
    errors.parentName = "Please enter your full name.";
  else if (form.parentName.trim().split(" ").length < 2)
    errors.parentName = "Please enter both first and last name.";

  if (!form.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_REGEX.test(form.email))
    errors.email = "Please enter a valid email address.";

  if (!form.phone.trim()) errors.phone = "Please enter your phone number.";
  else if (!/^[+\d][\d\s\-().]{5,}$/.test(form.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!form.childNumber)
    errors.childNumber = "Please select the number of children.";

  if (!form.country) errors.country = "Please select your country.";

  const count = form.childNumber === "4+" ? 4 : parseInt(form.childNumber) || 0;
  for (let i = 0; i < count; i++) {
    if (!form.childrenData[i]?.name?.trim())
      errors[`childName_${i}`] =
        count === 1
          ? "Please enter your child's name."
          : `Please enter Child ${i + 1}'s name.`;
    if (!form.childrenData[i]?.age)
      errors[`childAge_${i}`] =
        count === 1
          ? "Please select your child's age."
          : `Please select Child ${i + 1}'s age.`;
  }

  if (!form.interest) errors.interest = "Please select a program.";
  if (!form.extra.trim())
    errors.extra = "Please add a short note about your child.";

  return errors;
}

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({
  label,
  error,
  id,
  children,
}: {
  label: string;
  error?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <label htmlFor={id} className="text-[12px] text-neutral-400">
        {label}
      </label>
      {children}
      {error && (
        <span className="text-[11px] text-red-500 mt-0.5" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function fieldBorder(
  key: keyof FormErrors,
  errors: FormErrors,
  touched: TouchedFields,
) {
  if (touched[key] && errors[key]) return "border-red-400";
  if (touched[key] && !errors[key]) return "border-green-400";
  return "border-neutral-100";
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

const EMPTY_FORM: FormState = {
  parentName: "",
  email: "",
  phone: "",
  childNumber: "",
  country: "",
  childrenData: [],
  interest: "",
  extra: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2, rootMargin: "80px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const touch = (key: keyof TouchedFields) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate({ ...form }));
  };

  const handleChange = (
    field: keyof Omit<FormState, "childrenData">,
    value: string,
  ) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field as keyof TouchedFields]) setErrors(validate(updated));
  };

  const handleChildNumberChange = (value: string) => {
    const count = value === "4+" ? 4 : parseInt(value) || 0;
    const updated: FormState = {
      ...form,
      childNumber: value,
      childrenData: Array(count)
        .fill({ name: "", age: "" })
        .map(() => ({ name: "", age: "" })),
    };
    setForm(updated);
    setTouched((prev) => {
      const next: TouchedFields = { ...prev, childNumber: true };
      for (let i = 0; i < 4; i++) {
        const ageKey = `childAge_${i}` as ChildAgeKey;
        const nameKey = `childName_${i}` as ChildNameKey;
        delete next[ageKey];
        delete next[nameKey];
      }
      return next;
    });
    setErrors(validate(updated));
  };

  const handleChildDataChange = (
    index: number,
    field: "name" | "age",
    value: string,
  ) => {
    const newChildrenData = form.childrenData.map((child, i) =>
      i === index ? { ...child, [field]: value } : child,
    );
    const updated = { ...form, childrenData: newChildrenData };
    setForm(updated);
    const key = field === "name" ? `childName_${index}` : `childAge_${index}`;
    if (touched[key as keyof TouchedFields]) setErrors(validate(updated));
  };

  const handleSubmit = async () => {
    const count =
      form.childNumber === "4+" ? 4 : parseInt(form.childNumber) || 0;
    const allTouched: TouchedFields = {
      parentName: true,
      email: true,
      phone: true,
      childNumber: true,
      country: true,
      interest: true,
      extra: true,
    };
    for (let i = 0; i < count; i++) {
      allTouched[`childAge_${i}`] = true;
      allTouched[`childName_${i}`] = true;
    }
    setTouched(allTouched);
    const currentErrors = validate(form);
    setErrors(currentErrors);
    if (Object.keys(currentErrors).length > 0) return;

    setStatus("loading");
    try {
      const childrenAges = form.childrenData.map((c) => c.age).join(", ");
      const childrenNames = form.childrenData.map((c) => c.name).join(", ");

      await emailjs.send(
        "service_8mjn84l",
        "template_o9t1ozq",
        {
          parent_name: form.parentName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          children_count: form.childNumber,
          children_ages: childrenAges,
          children_names: childrenNames,
          interest: form.interest,
          extra: form.extra,
        },
        "WlOjXCVIp_HMjq_HV",
      );

      // Telegram notification 
      fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: form.parentName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          childNumber: form.childNumber,
          childrenData: form.childrenData,
          interest: form.interest,
          extra: form.extra,
        }),
      }).catch(() => {});

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";
  const numChildren =
    form.childNumber === "4+" ? 4 : parseInt(form.childNumber) || 0;
  const childLabel = (i: number) =>
    numChildren === 1 ? "Child" : `Child ${i + 1}`;

  return (
    <section className={styles.section}>
      <div className={styles.pattern} aria-hidden="true">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className={styles.contentWrapper}>
        <Navbar variant="static" />

        <div className={styles.main}>
          <div ref={sectionRef} className={styles.container}>
            {/* Mobile Header (only visible on tablet/mobile) */}
            <div
              className={`${styles.mobileHeader} ${show ? styles.showMobileHeader : ""}`}
            >
              <h1 className={styles.headline}>
                Start your child&apos;s{" "}
                <span className="text-white">Islamic journey</span> today.
              </h1>
              <p className={styles.subheadline}>
                Our team is here to guide you through finding the perfect
                program for your child. Whether you&apos;re interested in Quran
                reading, Hifz, or Arabic, we&apos;re just a message away.
              </p>
            </div>

            {/* Left Column (title + contact items) - visible only on large screens */}
            <div
              className={`${styles.leftColumn} ${show ? styles.showLeft : ""}`}
            >
              <h1 className={styles.headline}>
                Start your child&apos;s{" "}
                <span className="text-white">Islamic journey</span> today.
              </h1>
              <p className={styles.subheadline}>
                Our team is here to guide you through finding the perfect
                program for your child. Whether you&apos;re interested in Quran
                reading, Hifz, or Arabic, we&apos;re just a message away.
              </p>
              <div className={styles.contactList}>
                {CONTACT_ITEMS.map((item, index) => (
                  <div
                    key={item.label}
                    className={`${styles.contactItem} ${show ? styles.itemShow : ""}`}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                  >
                    <div className={styles.iconCircle}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <b className="text-[16px] text-white">{item.label}</b>
                      <div className="text-[14px] text-white font-semibold">
                        {item.value}
                      </div>
                      <div className="text-[12px] text-neutral-100">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div
              className={`${styles.formCard} ${show ? styles.showRight : ""}`}
            >
              {status === "success" ? (
                <div className={styles.successContainer}>
                  <div className={styles.successIcon}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#16a34a"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-[22px] font-bold text-neutral-500">
                      Request Sent!
                    </h2>
                    <p className="text-[14px] text-neutral-400 mt-2 max-w-[320px] mx-auto leading-[160%]">
                      Thank you,{" "}
                      <strong>{form.parentName.split(" ")[0]}</strong>.
                      We&apos;ve received your information and will send your
                      personalised curriculum overview to{" "}
                      <strong>{form.email}</strong> within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setForm(EMPTY_FORM);
                      setErrors({});
                      setTouched({});
                      setStatus("idle");
                    }}
                    className="text-[13px] text-primary underline underline-offset-2 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h2 className="text-[24px] font-bold text-neutral-500">
                      Request Information
                    </h2>
                    <p className="text-[13px] text-neutral-400 mt-1">
                      Fill out the form below and we&apos;ll send you a tailored
                      curriculum overview.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className={styles.errorBanner} role="alert">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#ef4444"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 8v4M12 16h.01"
                          stroke="#ef4444"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className="text-[13px] text-red-600">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    <div className={styles.rowTwoCols}>
                      <Field
                        label="Parent's Name"
                        error={
                          touched.parentName ? errors.parentName : undefined
                        }
                        id="parentName"
                      >
                        <input
                          id="parentName"
                          disabled={isLoading}
                          value={form.parentName}
                          onChange={(e) =>
                            handleChange("parentName", e.target.value)
                          }
                          onBlur={() => touch("parentName")}
                          placeholder="First and last name"
                          className={`${INPUT_CLASS} ${fieldBorder("parentName", errors, touched)}`}
                        />
                      </Field>
                      <Field
                        label="Email Address"
                        error={touched.email ? errors.email : undefined}
                        id="email"
                      >
                        <input
                          id="email"
                          disabled={isLoading}
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          onBlur={() => touch("email")}
                          placeholder="email@address.com"
                          className={`${INPUT_CLASS} ${fieldBorder("email", errors, touched)}`}
                        />
                      </Field>
                    </div>

                    <Field
                      label="Phone Number"
                      error={touched.phone ? errors.phone : undefined}
                      id="phone"
                    >
                      <input
                        id="phone"
                        disabled={isLoading}
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={() => touch("phone")}
                        placeholder="+44 7700 900000"
                        className={`${INPUT_CLASS} ${fieldBorder("phone", errors, touched)}`}
                      />
                    </Field>

                    <Field
                      label="Child's Number"
                      error={
                        touched.childNumber ? errors.childNumber : undefined
                      }
                      id="childNumber"
                    >
                      <select
                        id="childNumber"
                        disabled={isLoading}
                        value={form.childNumber}
                        onChange={(e) =>
                          handleChildNumberChange(e.target.value)
                        }
                        onBlur={() => touch("childNumber")}
                        className={`${SELECT_CLASS} ${fieldBorder("childNumber", errors, touched)}`}
                      >
                        <option value="">Select Number...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                      </select>
                    </Field>

                    <Field
                      label="Country"
                      error={touched.country ? errors.country : undefined}
                      id="country"
                    >
                      <select
                        id="country"
                        disabled={isLoading}
                        value={form.country}
                        onChange={(e) =>
                          handleChange("country", e.target.value)
                        }
                        onBlur={() => touch("country")}
                        className={`${SELECT_CLASS} ${fieldBorder("country", errors, touched)}`}
                      >
                        <option value="">Select country...</option>
                        <option value="uk">United Kingdom</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="other">Other</option>
                      </select>
                    </Field>

                    {/* Children name + age rows */}
                    {numChildren >= 1 &&
                      Array.from({ length: numChildren }, (_, i) => (
                        <div key={i} className={styles.rowTwoCols}>
                          <Field
                            label={`${childLabel(i)}'s Name`}
                            error={
                              touched[`childName_${i}`]
                                ? errors[`childName_${i}`]
                                : undefined
                            }
                            id={`childName${i}`}
                          >
                            <input
                              id={`childName${i}`}
                              disabled={isLoading}
                              value={form.childrenData[i]?.name ?? ""}
                              onChange={(e) =>
                                handleChildDataChange(i, "name", e.target.value)
                              }
                              onBlur={() => touch(`childName_${i}`)}
                              placeholder="Child's first name"
                              className={`${INPUT_CLASS} ${fieldBorder(`childName_${i}`, errors, touched)}`}
                            />
                          </Field>
                          <Field
                            label={`${childLabel(i)}'s Age`}
                            error={
                              touched[`childAge_${i}`]
                                ? errors[`childAge_${i}`]
                                : undefined
                            }
                            id={`childAge${i}`}
                          >
                            <select
                              id={`childAge${i}`}
                              disabled={isLoading}
                              value={form.childrenData[i]?.age ?? ""}
                              onChange={(e) =>
                                handleChildDataChange(i, "age", e.target.value)
                              }
                              onBlur={() => touch(`childAge_${i}`)}
                              className={`${SELECT_CLASS} ${fieldBorder(`childAge_${i}`, errors, touched)}`}
                            >
                              <option value="">Select age...</option>
                              {AGE_OPTIONS.map((age) => (
                                <option key={age} value={age}>
                                  {age}
                                </option>
                              ))}
                            </select>
                          </Field>
                        </div>
                      ))}

                    <Field
                      label="Primary Interest"
                      error={touched.interest ? errors.interest : undefined}
                      id="interest"
                    >
                      <select
                        id="interest"
                        disabled={isLoading}
                        value={form.interest}
                        onChange={(e) =>
                          handleChange("interest", e.target.value)
                        }
                        onBlur={() => touch("interest")}
                        className={`${SELECT_CLASS} ${fieldBorder("interest", errors, touched)}`}
                      >
                        <option value="">
                          What program are you interested in?
                        </option>
                        <option value="quran">Quran Recitation</option>
                        <option value="hifz">Quran Memorization</option>
                        <option value="arabic">Arabic Language</option>
                        <option value="islamic">Islamic Studies</option>
                        <option value="mental">Mental Math</option>
                        <option value="educational">Educational Support</option>
                        <option value="all">All Programs</option>
                      </select>
                    </Field>

                    <Field
                      label="Anything else we should know?"
                      error={touched.extra ? errors.extra : undefined}
                      id="extra"
                    >
                      <textarea
                        id="extra"
                        disabled={isLoading}
                        value={form.extra}
                        onChange={(e) => handleChange("extra", e.target.value)}
                        onBlur={() => touch("extra")}
                        placeholder="E.g. My child knows the alphabet..."
                        className={`w-full h-[160px] resize-none px-4 py-3 bg-[#f5f5f5] border rounded-[8px] text-[14px] text-neutral-500 outline-none transition-all shadow-[0px_4px_6px_-4px_rgba(6,78,59,0.1),0px_10px_15px_-3px_rgba(6,78,59,0.1)] focus:shadow-[0px_6px_10px_-4px_rgba(6,78,59,0.15),0px_15px_25px_-3px_rgba(6,78,59,0.15)] focus:-translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed ${fieldBorder("extra", errors, touched)}`}
                      />
                    </Field>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full h-[52px] bg-[#f5f5f5] rounded-[12px] text-[16px] font-bold text-primary flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_rgba(6,78,59,0.1),0px_10px_15px_-3px_rgba(6,78,59,0.1)] hover:shadow-[0px_6px_10px_-4px_rgba(6,78,59,0.15),0px_15px_25px_-3px_rgba(6,78,59,0.15)] hover:-translate-y-[2px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
                    >
                      {isLoading ? (
                        <>
                          <Spinner />
                          <span>Sending...</span>
                        </>
                      ) : (
                        "Get Your Free Info Pack →"
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Contact Info (visible only on tablet/mobile) */}
            <div
              className={`${styles.mobileContact} ${show ? styles.showMobileContact : ""}`}
            >
              <div className={styles.contactListMobile}>
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className={styles.contactItemMobile}>
                    <div className={styles.iconCircle}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <b className="text-[16px] text-white">{item.label}</b>
                      <div className="text-[14px] text-white font-semibold">
                        {item.value}
                      </div>
                      <div className="text-[12px] text-neutral-100">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
