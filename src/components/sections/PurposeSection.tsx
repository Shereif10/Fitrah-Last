import Image from "next/image";

/* ========================= */
/* Data */
/* ========================= */

const CARDS = [
  {
    icon: "/svg/icon-mission.svg",
    title: "Our Mission",
    description:
      "Delivering interactive online classes with advanced technology to ensure tangible results for every learner",
  },
  {
    icon: "/svg/icon-vision.svg",
    title: "Our Vision",
    description:
      "To be the world's most trusted digital reference for Islamic education and Arabic mastery",
  },
];

/* ========================= */
/* Component */
/* ========================= */

export default function PurposeSection() {
  return (
    <section className="w-full bg-cream pt-24 px-6 md:px-12 lg:px-[120px]">
      {/* Container */}
      <div className="max-w-[1192px] mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[48px] font-bold leading-[120%] text-neutral-500">
            Our Purpose
          </h2>

          <p className="text-[18px] leading-[150%] text-neutral-400">
            We are committed to building a meaningful learning experience that
            connects students with the Quran and Islamic values in a modern,
            engaging way.
          </p>
        </div>

        {/* Cards Row */}
        <div className="w-full flex justify-between gap-8 flex-wrap lg:flex-nowrap">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="relative"
              style={{
                width: "572px",
                height: "368px",
              }}
            >
              {/* Outer Card */}
              <div className="relative w-full h-full bg-primary border-[3px] border-primary rounded-t-[8px] rounded-b-[32px] overflow-hidden">
                {/* Inner Border */}
                <div className="absolute inset-[24px] border border-gold rounded-t-[6px] rounded-b-[24px]" />
                <div className="absolute inset-0 z-[1]">
                          <Image
                            src="/svg/hero-pattern.svg"
                            alt=""
                            fill
                            priority
                            className="object-cover"
                          />
                        </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center gap-3 px-6">
                  {/* Icon */}
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={132}
                    height={128}
                  />

                  {/* Title */}
                  <h3 className="text-[32px] font-bold leading-[150%] text-neutral-50">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] leading-[150%] text-neutral-100 max-w-[400px]">
                    {card.description}
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
