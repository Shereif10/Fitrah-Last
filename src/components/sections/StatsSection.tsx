import Image from "next/image";

const STATS = [
  {
    icon: "/icons/icon-courses.svg",
    number: "15+",
    label: "Complete Courses",
  },
  {
    icon: "/icons/icon-students.svg",
    number: "2,000+",
    label: "Students",
  },
  {
    icon: "/icons/icon-teachers.svg",
    number: "12+",
    label: "Certified Teachers",
  },
  {
    icon: "/svg/check-icon.svg",
    number: "19+",
    label: "Parent\nRating",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-cream py-16 w-full">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px]">
        <div className="flex items-stretch justify-center gap-8 flex-nowrap">
          {STATS.map((stat) => (
            <div
              key={stat.number}
              className="relative flex items-center justify-center bg-primary border border-gold w-[274px] h-[320px] rounded-t-[56px] rounded-b-[8px] shadow-[0px_20px_56px_rgba(26,74,58,0.18)]"
            >
              {/* Pattern Background */}
              <Image
                src="/svg/hero-pattern.svg"
                alt=""
                fill
                className="object-cover "
              />
              {/* Inner Border */}
              <div className="absolute inset-[8px] border border-gold rounded-t-[51px] rounded-b-[6px]" />

              {/* Content */}
              <div className="relative flex flex-col items-center justify-center text-center w-full h-full px-6 pt-10 pb-8">
                {/* Icon */}
                <div className="h-[56px] flex items-center justify-center">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={56}
                    height={56}
                  />
                </div>

                {/* Gap 32px */}
                <div className="h-[32px]" />

                {/* Number */}
                <div className="h-[58px] flex items-center justify-center">
                  <span className="text-[48px] font-bold leading-[120%] text-neutral-50">
                    {stat.number}
                  </span>
                </div>

                {/* Gap 8px */}
                <div className="h-[8px]" />

                {/* Label */}
                <div className="h-[52px] flex items-center justify-center">
                  <p className="text-[22px] font-bold leading-[120%] text-[rgba(162,156,123,1)] whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
