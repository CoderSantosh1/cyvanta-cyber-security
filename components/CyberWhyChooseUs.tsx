"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Reason = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-10 w-10",
};

const ShieldCheckIcon = (
  <svg {...iconProps}>
    <path d="M20 4 7 9v10c0 9 5.500 14.500 13 17 7.500-2.500 13-8 13-17V9L20 4Z" />
    <path d="m14 20 4.500 4.500L27 15.500" />
  </svg>
);

const LayersIcon = (
  <svg {...iconProps}>
    <path d="m20 5 15 8-15 8L5 13l15-8Z" />
    <path d="m5 20 15 8 15-8" />
    <path d="m5 27 15 8 15-8" />
  </svg>
);

const LaptopGearIcon = (
  <svg {...iconProps}>
    <rect x="7" y="8" width="26" height="19" rx="3" />
    <path d="M3 33h34" />
    <circle cx="20" cy="17.500" r="3.500" />
    <path d="M20 11.500v2M20 21.500v2M14 17.500h2M24 17.500h2" />
  </svg>
);

const HandshakeIcon = (
  <svg {...iconProps}>
    <path d="M3 17 10 11l8 3 6-3 9 4" />
    <path d="m3 17 6 10 5 3M37 17l-6 10-6 4" />
    <path d="m14 30 4 3a2.500 2.500 0 0 0 3.500-3.500M18 27l3 3M21 24l3.500 3.500" />
    <path d="m13 17 7 5a3 3 0 0 0 4-1l3-4" />
  </svg>
);

const reasons: Reason[] = [
  {
    number: "01",
    title: "Expertise & Experience",
    description:
      "A skilled team with deep cybersecurity knowledge across industries.",
    icon: ShieldCheckIcon,
  },
  {
    number: "02",
    title: "Proactive Threat Protection",
    description:
      "Identify, prevent, and respond to threats before they impact your business.",
    icon: LayersIcon,
  },
  {
    number: "03",
    title: "Tailored Security Solutions",
    description:
      "Flexible and scalable services designed for your specific needs.",
    icon: LaptopGearIcon,
  },
  {
    number: "04",
    title: "Compliance & Trust",
    description:
      "Help you meet industry standards and build a stronger, more secure digital environment.",
    icon: HandshakeIcon,
  },
];

export default function CyberWhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden bg-[#faf8f8]"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-12 sm:px-10 lg:grid-cols-[1fr_1fr] lg:gap-[2.5vw] lg:px-[3.5vw] lg:py-10">
        {/* Left: heading + image */}
        <div className="flex w-full flex-col items-start">
          <div className="flex items-center gap-4">
            <span className="h-[4px] w-14 bg-[#f26a1b]" />
            <span className="text-[20px] font-semibold text-[#14161a] sm:text-[24px]">
              Why Choose Us
            </span>
          </div>

          <h2 className="mt-4 text-[clamp(32px,3.9vw,60px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#14161a]">
            A Trusted Partner for
            <span className="block">
              Your <span className="text-[#f26a1b]">Cybersecurity</span> Needs
            </span>
          </h2>

          <p className="mt-5 max-w-[620px] text-[15px] leading-[1.65] text-[#23262b] sm:text-[18px]">
            We combine expert knowledge, proven processes, and proactive
            technologies to keep your business secure, compliant, and
            future-ready.
          </p>

          {/* Image with orange brackets */}
          <div className="relative mt-10 h-[260px] w-full sm:h-[320px] lg:h-[min(300px,calc(100svh-420px))] lg:min-h-[240px]">
            {/* top-left bracket */}
            <div className="absolute -left-[3%] -top-[18px] h-[85%] w-[28%] rounded-tl-[8px] border-l-[4px] border-t-[4px] border-[#f26a1b]" />

            {/* bottom-right bracket */}
            <div className="absolute -bottom-[16px] -right-[2%] h-[48%] w-[28%] rounded-br-[8px] border-b-[4px] border-r-[4px] border-[#f26a1b]" />

            <div className="absolute inset-0 overflow-hidden rounded-[16px] shadow-[0_14px_34px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/cyber-about-main.webp"
                alt="Security analyst monitoring a global threat map"
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right: numbered timeline */}
        <div className="relative flex w-full flex-col gap-5 lg:gap-6">
          {/* Vertical connector line */}
          <span
            aria-hidden="true"
            className="absolute bottom-[56px] left-[26px] top-[56px] hidden w-px bg-[#c9c9c9] sm:block lg:left-[27px]"
          />

          {reasons.map((reason) => (
            <div key={reason.number} className="relative flex items-center">
              {/* Number pill */}
              <span className="relative z-10 grid h-[58px] w-[52px] shrink-0 place-items-center rounded-full bg-white text-[19px] font-bold text-[#14161a] shadow-[0_6px_16px_rgba(0,0,0,0.1)] sm:h-[72px] sm:w-[54px] sm:text-[22px]">
                {reason.number}
              </span>

              {/* Orange connector dash */}
              <span className="hidden h-[3px] w-[18px] shrink-0 bg-[#f26a1b] sm:block" />

              {/* Card */}
              <article className="ml-3 flex flex-1 items-center gap-4 rounded-[18px] border border-[#eee8e8] bg-white px-4 py-4 shadow-[0_8px_22px_rgba(0,0,0,0.07)] sm:ml-0 sm:gap-5 sm:px-5 sm:py-5">
                <span className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-[14px] bg-[#fdebe3] text-[#f26a1b] sm:h-[74px] sm:w-[74px]">
                  {reason.icon}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold leading-tight text-[#14161a] sm:text-[21px]">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.5] text-[#2d3036] sm:text-[16px]">
                    {reason.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}