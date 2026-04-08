import Image from "next/image";

/* ========================= */
/* Data */
/* ========================= */

const TESTIMONIALS = [
  {
    name: "Aisha Rahman",
    role: "Mother of 2",
    avatar: "/images/avatar-aisha.png",
    comment:
      "My child’s Quran reading improved so much in just a few weeks. The teachers are patient and very supportive.",
  },
  {
    name: "Omar Hassan",
    role: "Father of 3",
    avatar: "/images/avatar-omar.png",
    comment:
      "Fitrah made it easy for our family to stay consistent with learning. The flexibility fits perfectly into our schedule.",
  },
  {
    name: "Fatima Khan",
    role: "Mother of 1",
    avatar: "/images/avatar-fatima.png",
    comment:
      "I love how the lessons combine Quran, Arabic, and values. My kids are more engaged than ever before.",
  },
];

/* ========================= */
/* Section */
/* ========================= */

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-cream pt-24">
      <div className="max-w-[1192px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12">
        {/* 🔥 Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[48px] font-bold leading-[120%] text-neutral-500">
            Loved by Muslim families{" "}
          </h2>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-8">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* Card */
/* ========================= */

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  comment: string;
};

function TestimonialCard({ name, role, avatar, comment }: Testimonial) {
  return (
    <div className="relative w-[376px] h-[218px] flex-none shrink-0 p-3 rounded-t-[8px] rounded-b-[32px] border border-gold bg-[rgba(245,245,245,0.15)] overflow-hidden">
      {/* Pattern */}
      <Image
        src="/svg/hero-pattern.svg"
        alt=""
        fill
        className="object-cover opacity-20"
      />

      {/* Inner Border */}
      <div className="absolute inset-[10px] border border-gold rounded-t-[4px] rounded-b-[24px]" />

      {/* Content */}
      <div className="relative flex flex-col h-full px-3 py-2 gap-4">
        {/* TOP */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-[48px] h-[48px] rounded-full overflow-hidden shrink-0">
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>

          {/* Name + Role */}
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-neutral-500">
              {name}
            </span>

            <span className="text-[12px] font-bold leading-[120%] text-neutral-400">
              {role}
            </span>
          </div>
        </div>

        {/* Comment */}
        <p className="text-[16px] font-normal leading-[135%] text-neutral-300">
          “{comment}”
        </p>
      </div>
    </div>
  );
}
