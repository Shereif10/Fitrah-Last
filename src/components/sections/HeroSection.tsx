import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-b-[32px] w-full h-screen flex flex-col">
      {/* Layer 0 */}
      <div className="absolute inset-0 z-0 [background:linear-gradient(149.79deg,#034845,#0f302e_50%,#1c4e4c)] rounded-b-[32px]">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full border border-[rgba(162,156,123,0.25)]" />
        <div className="absolute -bottom-[100px] -left-[100px] w-[300px] h-[300px] rounded-full border border-[rgba(162,156,123,0.25)]" />
      </div>

      {/* Layer 1 */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          fill
          priority
          className="object-cover rounded-b-[64px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full h-full">
        {/* Navbar (ثابت ارتفاعه) */}
        <Navbar variant="static" />

        {/* Hero Body */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-[120px] pt-10">
            <div className="flex items-center w-full gap-[96px] lg:gap-12">
              {/* LEFT */}
              <div className="flex-1 flex flex-col items-start justify-center gap-16 min-w-0">
                <div className="flex flex-col gap-8">
                  <h1 className="text-[56px] lg:text-[45px] sm:text-[34px] leading-[120%] font-bold tracking-[-0.03em] text-neutral-50">
                    FITRAH ACADEMY
                    <br />
                    <span>
                      where your family <br /> learns the Quran online
                    </span>
                  </h1>

                  <div className="flex flex-col gap-4">
                    <p className="text-[18px] font-normal leading-[150%] text-neutral-100">
                      Structured online Quran classes, Arabic lessons, and
                      Islamic education for kids and adults.
                    </p>

                    <div className="flex items-center gap-4">
                      <Image
                        src="/svg/check-icon.svg"
                        alt=""
                        width={28}
                        height={32}
                      />
                      <b className="text-[16px] font-bold leading-[150%] text-neutral-50">
                        Trusted by 5,000+ parents
                      </b>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-8 w-full">
                  <button className="bg-gold w-[395px] h-[70px] rounded-[12px] px-4 py-[19px] text-[18px] font-bold text-neutral-50 flex items-center justify-center whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity">
                    Contact US
                  </button>

                  <button className="bg-[rgba(162,156,123,0.1)] border border-gold w-[175px] h-[70px] rounded-[12px] px-[40px] py-[19px] text-[18px] font-bold text-gold flex items-center justify-center whitespace-nowrap cursor-pointer hover:bg-[rgba(162,156,123,0.2)] transition-colors">
                    Our Plans
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-center gap-6 w-[367px] shrink-0 pt-4">
                <div className="h-[97px] w-full rounded-[24px] bg-[rgba(162,156,123,0.1)] flex items-center justify-center px-4">
                  <p className="text-[32px] font-normal leading-[100%] font-serif text-gold text-center">
                    ٱقۡرَأۡ بِٱسۡمِ رَبِّكَ ٱلَّذِي خَلَقَ
                  </p>
                </div>

                <div className="w-full pl-6">
                  <Image
                    src="/images/hero-student.png"
                    alt=""
                    width={319}
                    height={417}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="relative w-full mt-[-49px] flex justify-center">
                  <div className="relative w-[367px] h-[106px]">
                    <Image
                      src="/svg/badge-vector.svg"
                      alt=""
                      fill
                      className="object-contain"
                      priority
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <b className="text-[18px] font-bold leading-[120%] text-primary">
                        Active Students
                      </b>
                      <span className="text-[32px] font-bold leading-[150%] text-neutral-50">
                        12,450+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
