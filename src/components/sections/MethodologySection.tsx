import Image from "next/image";

/* ========================= */
/* Data */
/* ========================= */

const STEPS = [
  {
    icon: "/svg/icon-learn.svg",
    title: "Learn",
    description:
      "Initial placement tests to create a personalized islamic education.",
  },
  {
    icon: "/svg/icon-reflect.svg",
    title: "Reflect",
    description: "Live sessions using premium technology for focused learning.",
  },
  {
    icon: "/svg/icon-connect.svg",
    title: "Connect",
    description: "Instant performance feedback sent to parents",
  },
  {
    icon: "/svg/icon-apply.svg",
    title: "Apply",
    description: "Monthly reviews and exams to ensure long term quran.",
  },
];

/* ========================= */
/* Section */
/* ========================= */

export default function MethodologySection() {
  return (
    <section className="w-full bg-cream pt-24">
      <div className="max-w-[1192px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[48px] font-bold leading-[120%] text-neutral-500">
            Our Methodology
          </h2>

          <p className="text-[22px] leading-[150%] text-neutral-400">
            A structured learning journey designed to ensure consistent progress
            and deep understanding.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center gap-8">
          {STEPS.map((step) => (
            <MethodCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* Card */
/* ========================= */

type Step = {
  icon: string;
  title: string;
  description: string;
};

function MethodCard({ icon, title, description }: Step) {
  return (
    <div className="relative w-[274px] h-[320px] flex items-center justify-center bg-primary border border-gold rounded-t-[8px] rounded-b-[56px] shadow-[0px_20px_56px_rgba(26,74,58,0.18)] overflow-hidden">
      {/* Pattern */}
      <Image
        src="/svg/hero-pattern.svg"
        alt=""
        fill
        className="object-cover "
      />

      {/* Inner Border */}
      <div className="absolute inset-[8px] border border-gold rounded-t-[6px] rounded-b-[51px]" />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center w-full h-full px-6 pt-10 pb-8">
        {/* ICON */}
        <div className="h-[128px] flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={128}
            height={128}
            className="object-contain"
          />
        </div>

        {/* GAP */}
        <div className="h-6" />

        {/* TITLE */}
        <div className="h-[58px] flex items-center justify-center">
          <h3 className="text-[24px] font-bold leading-[120%] text-neutral-50">
            {title}
          </h3>
        </div>

        {/* GAP */}
        <div className="h-4" />

        {/* DESCRIPTION */}
        <div className="flex-1 flex items-start justify-center">
          <p className="text-[14px] font-normal leading-[120%] text-neutral-100 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
