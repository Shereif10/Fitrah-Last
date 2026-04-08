import Image from "next/image";

const FEATURES = [
  {
    title: "Certified Al-Azhar Instructors",
    desc: "Engaging lessons that encourage participation and critical thinking.",
  },
  {
    title: "Flexible Schedule (24/7 Access)",
    desc: "Teachers who are both scholars and compassionate guides.",
  },
  {
    title: "Interactive Quranic Tools",
    desc: "Interactive tools that make Quran learning engaging and effective.",
  },
  {
    title: "Holistic Islamic Development",
    desc: "Focusing on spiritual, intellectual, and character growth.",
  },
];

export default function IncludedSection() {
  return (
    <section className="w-full bg-cream pb-24 px-6 md:px-12 lg:px-[120px]">
      <div className="max-w-[1192px] mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-[48px] font-bold text-neutral-500">
            What&apos;s Included in Every Plan
          </h2>

          <p className="text-[18px] text-neutral-400">
            We believe quality Islamic education should be accessible. All our
            students get access to these core features designed to enhance your
            learning journey.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-2 gap-6">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col w-full h-[113px] p-6 bg-[#A29C7B1A] rounded-t-[8px] rounded-b-[32px]"
            >
              {/* Top Row */}
              <div className="flex items-center gap-4">
                <Image src="/svg/icon-book.svg" alt="" width={32} height={32} />

                <h3 className="text-[22px] font-bold leading-[120%] text-primary">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[14px] font-light leading-[150%] text-neutral-400 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
