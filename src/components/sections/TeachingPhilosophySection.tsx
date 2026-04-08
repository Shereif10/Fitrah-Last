import Image from "next/image";

/* ========================= */
/* Data */
/* ========================= */

const CARDS = [
  {
    icon: "/icons/icon-active-learning.svg",
    title: "Active Learning",
    description:
      "Engaging lessons that encourage participation and critical thinking.",
    tag: "Learning by engaging, practicing, and interacting.",
  },
  {
    icon: "/icons/icon-active-learning.svg",
    title: "Value-Based Guidance",
    description: <>Teachers who are both scholars <br /> and compassionate guides.</>,
    tag: "Education rooted in strong Islamic values.",
  },
];

/* ========================= */
/* Component */
/* ========================= */

export default function TeachingPhilosophySection() {
  return (
    <section className="relative w-full bg-primary rounded-[48px] py-16 px-6 md:px-12 lg:px-[120px] overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1192px] mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[48px] font-bold text-neutral-50">
            Teaching Philosophy
          </h2>

          <p className="text-[18px] text-neutral-100">
            Our approach combines structured methodology with meaningful
            engagement, ensuring that every lesson is both impactful and
            inspiring.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex justify-between gap-8 flex-nowrap">
          {CARDS.map((card) => (
            <div key={card.title} style={{ width: "580px", height: "268px" }}>
              {/* Card */}
              <div className="w-full h-full bg-[rgba(13,35,24,0.1)] border-[3px] border-gold rounded-t-[16px] rounded-b-[48px] p-6 flex flex-col">
                {/* HEADER */}
                <div className="flex items-center justify-around gap-3">
                  {/* Icon */}
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                  />

                  {/* Title */}
                  <h3 className="text-[32px] font-bold text-neutral-50">
                    {card.title}
                  </h3>
                </div>

                {/* DESCRIPTION (center) */}
                <div className="flex-1 flex items-center justify-center text-center">
                  <p className="text-[14px] text-neutral-50 leading-[150%]">
                    {card.description}
                  </p>
                </div>

                {/* TAG BOX */}
                <div className="flex justify-center">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "484px",
                      height: "26px",
                      borderRadius: "8px",
                      padding: "4px 8px",
                      background: "rgba(162,156,123,0.1)",
                    }}
                  >
                    <span className="text-[12px] text-neutral-100 text-center leading-[150%]">
                      {card.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
