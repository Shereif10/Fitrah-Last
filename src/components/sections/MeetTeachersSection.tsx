import Image from "next/image";

/* ========================= */
/* Data */
/* ========================= */

const TEACHERS = [
  {
    image: "/images/teacher-yassmin.jpg",
    name: "Ustadha Yassmin",
    role: "Quran teacher",
    desc: "Helping students master Quran recitation with confidence.",
  },
  {
    image: "/images/teacher-sumaya.jpg",
    name: "Sumaya Muhammad",
    role: "Quran teacher",
    desc: "Making Arabic simple, engaging, and easy to understand.",
  },
  {
    image: "/images/teacher-hisham.jpg",
    name: "Hisham Sayed",
    role: "Quran teacher",
    desc: "Guiding students with essential Islamic knowledge and values.",
  },
  {
    image: "/images/teacher-shrouq.jpg",
    name: "Shrouq Elsayed",
    role: "Human resources",
    desc: "Ensuring a smooth and supportive learning journey.",
  },
];

/* ========================= */
/* Component */
/* ========================= */

export default function MeetTeachersSection() {
  return (
    <section className="w-full bg-cream py-24 px-6 md:px-12 lg:px-[120px]">
      <div className="max-w-[1192px] mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[48px] font-bold text-neutral-500">
            Meet the Teachers
          </h2>

          <p className="text-[18px] text-neutral-400">
            Our faculty comprises certified educators passionate about nurturing
            young minds.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex justify-between gap-6 flex-wrap lg:flex-nowrap">
          {TEACHERS.map((teacher) => (
            <div
              key={teacher.name}
              className="w-[270px] rounded-[16px] overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-[260px] relative">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info Box */}
              <div className="relative bg-primary px-4 py-6 text-center rounded-b-[32px] flex flex-col items-center gap-2 overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 z-1">
                  <Image
                    src="/svg/hero-pattern.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  {/* Name */}
                  <h3 className="text-[18px] font-bold text-neutral-50">
                    {teacher.name}
                  </h3>

                  {/* Role */}
                  <span className="text-[14px] text-neutral-100">
                    {teacher.role}
                  </span>

                  {/* Description */}
                  <p className="text-[12px] text-neutral-100 leading-[150%] max-w-[220px]">
                    {teacher.desc}
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
