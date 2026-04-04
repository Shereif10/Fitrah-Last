import Image from "next/image";

const LEFT_FEATURES = [
  {
    icon: "/icons/iqra-icon.svg",
    title: "Experts Azhari tutors",
    description: "mastering English and Arabic for everyone.",
  },
  {
    icon: "/icons/iqra-icon.svg",
    title: "Proactive Monitoring",
    description: "Daily reports for Muslim kids online education.",
  },
];

const RIGHT_FEATURES = [
  {
    icon: "/icons/iqra-icon.svg",
    title: "Uninterrupted Learning",
    description:
      "Premium Zoom classes ensuring a professional learning experience.",
  },
  {
    icon: "/icons/iqra-icon.svg",
    title: "Rapid Development",
    description: "Visible progress within 30 days.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-cream py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center max-w-[800px]">
          <h2 className="text-[48px] font-bold leading-[120%] text-neutral-500">
            Why Families Choose Fitrah
          </h2>

          <p className="text-[18px] font-bold leading-[150%] text-[rgba(70,81,80,1)]">
            Discover why thousands of families trust Fitrah Academy for their
            children&apos;s Quran and Islamic education.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex w-full items-center justify-between gap-5 lg:gap-3">
          {/* LEFT */}
          <div className="flex flex-col gap-8 py-5">
            {LEFT_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center gap-3 max-w-[220px]"
              >
                {/* Icon */}
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={79}
                />

                {/* Title */}
                <h3 className="text-[22px] font-bold leading-[120%] text-primary whitespace-nowrap overflow-hidden text-ellipsis">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] font-bold leading-[120%] text-neutral-400 text-center line-clamp-2 h-[34px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="w-[371px] h-[566px] shrink-0 relative">
            <Image
              src="/images/iqra.svg"
              alt="إقرأ"
              fill
              className="object-contain"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 py-5">
            {RIGHT_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center gap-3 max-w-[220px]"
              >
                {/* Icon */}
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={79}
                />

                {/* Title */}
                <h3 className="text-[22px] font-bold leading-[120%] text-primary whitespace-nowrap overflow-hidden text-ellipsis">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] font-bold leading-[120%] text-neutral-400 text-center line-clamp-2 h-[34px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-2 gap-8 sm:hidden">
          {[...LEFT_FEATURES, ...RIGHT_FEATURES].map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-3"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={80}
                height={79}
              />

              <h3 className="text-[22px] font-bold leading-[120%] text-primary whitespace-nowrap overflow-hidden text-ellipsis">
                {feature.title}
              </h3>

              <p className="text-[14px] font-bold leading-[120%] text-neutral-400 text-center line-clamp-2 h-[34px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
