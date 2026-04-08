import Image from "next/image";

/* ========================= */
/* Data */
/* ========================= */

const FEATURES = [
  {
    icon: "/svg/icon-certified.svg",
    title: "Certified Tutors",
    desc: "Expert teachers vetted for both Islamic knowledge and their ability to connect with western youth.",
  },
  {
    icon: "/svg/icon-group.svg",
    title: "Small Group Sessions",
    desc: "Intimate classes ensuring personalized attention, mentorship, and stronger peer connections.",
  },
  {
    icon: "/svg/icon-curriculum.svg",
    title: "Structured Curriculum",
    desc: "A progressive path from basics to advanced levels with clear milestones and regular progress reports.",
  },
];

/* ========================= */
/* Component */
/* ========================= */

export default function FeaturesSection() {
  return (
    <section className="w-full bg-cream py-24 px-6 md:px-12 lg:px-[120px]">
      {/* Outer Container */}
      <div className="max-w-[1192px] mx-auto">
        {/* Double Border Wrapper */}
        <div className="border border-gold rounded-[24px] p-4">
          {/* Inner Border */}
          <div className="border border-gold rounded-[20px] p-6">
            {/* Cards */}
            <div className="flex justify-between gap-6 flex-wrap lg:flex-nowrap ">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex-1 bg-[#A29C7B1A] rounded-[16px] p-6 flex flex-col items-center text-center gap-4"
                >
                  {/* Icon */}
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />

                  {/* Title */}
                  <h3 className="text-[20px] font-bold text-neutral-500">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-neutral-400 leading-[150%] max-w-[260px]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
