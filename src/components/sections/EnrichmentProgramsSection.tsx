import Image from "next/image";

/* ========================= */
/* Data */
/* ========================= */

const PROGRAMS = [
  {
    icon: "/svg/icon-book.svg",
    title: "Stories of Prophets",
    age: "Ages 5–10",
    desc: "Engaging storytelling sessions that bring the lives of the Prophets to life, instilling values and lessons.",
  },
  {
    icon: "/svg/icon-dua.svg",
    title: "Daily Duas & Adhkar",
    age: "All Ages",
    desc: "Learn essential daily prayers for sleeping, eating, and travel to keep Allah in your heart.",
  },
  {
    icon: "/svg/icon-book.svg",
    title: "Islamic Art & Calligraphy",
    age: "Ages 8+",
    desc: "A creative workshop exploring the beauty of Islamic geometry and Arabic calligraphy.",
  },
];

/* ========================= */
/* Component */
/* ========================= */

export default function EnrichmentProgramsSection() {
  return (
    <section className="w-full bg-cream pt-24 px-6 md:px-12 lg:px-[120px]">
      <div className="max-w-[1192px] mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[48px] font-bold text-neutral-500">
            Enrichment Programs
          </h2>

          <p className="text-[18px] text-neutral-400">
            Supplementary courses to inspire love and understanding.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex justify-between gap-6 flex-wrap lg:flex-nowrap ">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="flex-1 rounded-t-[8px] rounded-b-[32px] p-6 flex flex-col gap-4 bg-[#A29C7B1A]"
            >
              {/* Header (icon + title) */}
              <div className="flex items-center gap-3">
                <Image
                  src={program.icon}
                  alt={program.title}
                  width={36}
                  height={32}
                />

                <div className="flex flex-col">
                  {/* Title */}
                  <h3 className="text-[20px] font-bold text-primary leading-[120%] whitespace-nowrap">
                    {program.title}
                  </h3>

                  {/* Age */}
                  <span className="text-[13px] text-neutral-400">
                    {program.age}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-neutral-400 leading-[150%]">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
