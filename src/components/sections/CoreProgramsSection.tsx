import Image from "next/image";

/* ========================= */
/* Types */
/* ========================= */

type Program = {
  image: string;
  badge: string;
  title: string;
  tags: string[];
  features: string[];
  price: string;
};

/* ========================= */
/* Data */
/* ========================= */

const PROGRAMS: Program[] = [
  {
    image: "/images/quran-recitation.jpg",
    badge: "Beginner",
    title: "Quran Recitation",
    tags: ["Ages 5–15", "30 min sessions"],
    features: [
      "Master Tajweed rules from basics",
      "Correct Arabic pronunciation",
      "Fluency building with certified tutors",
    ],
    price: "$45/mo",
  },
  {
    image: "/images/quran-memorization.jpg",
    badge: "Beginner",
    title: "Quran Memorization",
    tags: ["Ages 6–15", "Flexible Schedule"],
    features: [
      "Personalized memorization plans",
      "Regular revision & milestone tracking",
      "Sanad certified instructors",
    ],
    price: "$60/mo",
  },
  {
    image: "/images/arabic-language.jpg",
    badge: "Beginner",
    title: "Arabic Language",
    tags: ["Ages 6–16", "45 min sessions"],
    features: [
      "Modern Standard Arabic (Fusha)",
      "Reading, writing, and conversation",
      "Interactive vocabulary games",
    ],
    price: "$50/mo",
  },
  {
    image: "/images/islamic-studies.jpg",
    badge: "Beginner",
    title: "Islamic Studies",
    tags: ["Ages 8–16", "Weekend Classes"],
    features: [
      "Seerah, Adab (Etiquette), and Aqeedah",
      "Tailored for Western contexts",
      "Character building & morals",
    ],
    price: "$40/mo",
  },
];

/* ========================= */
/* Section */
/* ========================= */

export default function CoreProgramsSection() {
  return (
    <section className="relative w-full bg-primary rounded-[48px] py-24 overflow-hidden">
      {/* Pattern (VISIBLE FIXED) */}
      <div className="absolute inset-0 z-0 bg-[url('/svg/hero-pattern.svg')] bg-cover bg-center" />

      {/* Content */}
      <div className="relative z-10 max-w-[1192px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[48px] font-bold leading-[40px] text-neutral-50">
            Core Programs
          </h2>

          <p className="text-[22px] leading-[150%] text-neutral-100">
            Explore our structured Quran and Islamic learning programs designed
            for all levels.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col gap-8">
          {/* Row 1 */}
          <div className="flex gap-8">
            {PROGRAMS.slice(0, 2).map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-8">
            {PROGRAMS.slice(2, 4).map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* Program Card */
/* ========================= */

function ProgramCard({ image, badge, title, tags, features, price }: Program) {
  return (
    <div className="flex-1 min-w-[516px] max-w-[516px] h-[500px] flex flex-col overflow-hidden rounded-t-[16px] rounded-b-[48px] border-[3px] border-gold ">
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-b-[96px]">
        <Image src={image} alt={title} fill className="object-cover" />

        <span className="absolute top-3 right-3 bg-gold text-primary text-[12px] font-bold px-3 py-1 rounded-full">
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Title */}
        <h3 className="text-[32px] font-bold leading-[150%] text-neutral-50 text-center">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex items-center gap-2 w-full">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex-1 h-[26px] px-2 py-[4px] rounded-[8px] bg-[rgba(162,156,123,0.1)] text-gold text-[12px] flex items-center justify-center text-center"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-2 mt-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-[14px] font-normal leading-[150%] text-neutral-100"
            >
              <span className="text-gold text-[16px] leading-none">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price */}
        <div className="flex justify-end">
          <span className="text-[24px] font-bold leading-[120%] text-neutral-50">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}
