"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Feature = {
  title: ReactNode;
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-8 w-8",
};

const ShieldCheckIcon = (
  <svg {...iconProps}>
    <path d="M16 3 5 7v8c0 7 4.500 11.500 11 14 6.500-2.500 11-7 11-14V7L16 3Z" />
    <path d="m11 16 3.500 3.500L21 12.500" />
  </svg>
);

const LayersIcon = (
  <svg {...iconProps}>
    <path d="m16 4 12 6.500-12 6.500L4 10.500 16 4Z" />
    <path d="m4 16 12 6.500L28 16" />
    <path d="m4 21.500 12 6.500 12-6.500" />
  </svg>
);

const TeamIcon = (
  <svg {...iconProps}>
    <circle cx="16" cy="10" r="4" />
    <path d="M8 26c0-4.500 3.500-8 8-8s8 3.500 8 8" />
    <circle cx="6.500" cy="13" r="2.800" />
    <path d="M2 24c0-3 2-5.500 5-5.800" />
    <circle cx="25.500" cy="13" r="2.800" />
    <path d="M30 24c0-3-2-5.500-5-5.800" />
  </svg>
);

const features: Feature[] = [
  {
    title: (
      <>
        Proactive
        <br />
        Threat Defense
      </>
    ),
    icon: ShieldCheckIcon,
  },
  {
    title: (
      <>
        End-to-End
        <br />
        Security Solutions
      </>
    ),
    icon: LayersIcon,
  },
  {
    title: (
      <>
        Expert
        <br />
        Security Team
      </>
    ),
    icon: TeamIcon,
  },
];

export default function CyberAbout() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#faf8f8]"
    >
      {/* Decorative curves (bottom right) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 200"
        className="pointer-events-none absolute -bottom-2 -right-2 -z-10 hidden h-[200px] w-[300px] text-[#f26a1b] lg:block"
        fill="none"
      >
        <path
          d="M300 20C240 40 190 100 175 200"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <path
          d="M300 70C250 80 215 130 205 200"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>

      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 py-14 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-[4vw] lg:px-[5vw] lg:py-12">
        {/* Left: image composition */}
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px] lg:mx-0 lg:h-[min(520px,calc(100svh-120px))] lg:max-w-none">
          {/* Orange bracket — top left */}
          <div className="absolute -top-[18px] left-[-3%] h-[52%] w-[44%] rounded-tl-[10px] border-l-[5px] border-t-[5px] border-[#f26a1b]" />

          {/* Orange bracket — bottom right */}
          <div className="absolute -bottom-[10px] right-[-3%] h-[22%] w-[48%] rounded-br-[10px] border-b-[5px] border-r-[5px] border-[#f26a1b]" />

          {/* Large image */}
          <div className="absolute left-[4%] right-[4%] top-0 bottom-[3%] overflow-hidden rounded-[14px] shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:right-[3%]">
            <Image
              src="/images/cyber-about-main.webp"
              alt="Security analyst monitoring cybersecurity dashboards"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover object-center"
            />
          </div>

          {/* Small image */}
          <div className="absolute bottom-[-4%] left-[-1%] z-10 h-[34%] w-[48%] overflow-hidden rounded-[14px] border-[4px] border-white shadow-[0_14px_30px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/cyber-about-small.webp"
              alt="Glowing padlock on a circuit board"
              fill
              sizes="(max-width: 1024px) 45vw, 280px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right: content */}
        <div className="relative z-10 flex w-full flex-col items-start">
          <span className="block h-[4px] w-14 bg-[#f26a1b]" />

          <p className="mt-5 text-[22px] font-medium text-[#14161a] sm:text-[27px]">
            About Us
          </p>

          <h2 className="mt-1 text-[clamp(32px,3.7vw,58px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#14161a]">
            Securing Businesses
            <span className="block">
              In A <span className="text-[#f26a1b]">Digital-First</span> World
            </span>
          </h2>

          <p className="mt-6 max-w-[560px] text-[15px] leading-[1.8] text-[#23262b] sm:text-[17px]">
            At CYVANTA, we deliver next-generation cybersecurity solutions that
            help organizations stay protected, resilient, and compliant in an
            ever-evolving threat landscape.
          </p>

          {/* Features */}
          <div className="mt-9 grid w-full max-w-[640px] gap-8 sm:grid-cols-3 sm:gap-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-start ${
                  index > 0 ? "sm:border-l sm:border-[#e0dcdc] sm:pl-7" : "sm:pr-7"
                }`}
              >
                <span className="grid h-[58px] w-[58px] place-items-center rounded-[12px] bg-[#fdebe3] text-[#f26a1b]">
                  {feature.icon}
                </span>
                <h3 className="mt-5 text-[17px] font-bold leading-[1.3] text-[#14161a] sm:text-[18px]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}