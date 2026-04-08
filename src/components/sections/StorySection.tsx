import Image from "next/image";

export default function StorySection() {
  return (
    <section className="w-full bg-cream py-24 px-6 md:px-12 lg:px-[120px]">
      {/* Outer Container */}
      <div className="max-w-[1192px] mx-auto relative min-h-[300px] flex items-center justify-center border-1 border-gold rounded-b-[32px] rounded-t-[8px] overflow-hidden">
        <div className="absolute inset-[24px] border border-gold rounded-b-[32px] rounded-t-[8px]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 py-16 px-[100px] lg:px-[60px] sm:px-6">
          {/* Heading */}
          <h2 className="text-[48px] lg:text-[38px] sm:text-[29px] font-bold leading-[120%] text-neutral-500">
            Our Story
          </h2>

          {/* Subtitle */}
          <h3 className="text-[32px] sm:text-[24px] font-bold leading-[150%] text-neutral-400">
            Founded by Parents, Designed for Growth
          </h3>

          {/* Paragraph */}
          <p className="text-[16px] leading-[175%] text-neutral-300 text-center">
            Fitrah began as a simple conversation between parents struggling to
            find high-quality Islamic education that resonated with their
            children&apos;s Western upbringing. We saw a gap between traditional
            weekend schools and the engaging digital world our kids inhabit. We
            realized that to preserve the fitrah (innate nature) of our
            children, we needed to speak their language. We needed to combine
            authentic scholarship with world-class pedagogy and technology.
          </p>
        </div>
      </div>
    </section>
  );
}
