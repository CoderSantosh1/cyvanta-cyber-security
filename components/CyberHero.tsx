"use client";

import Image from "next/image";

export default function CyberHero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#121316] lg:min-h-[calc(100svh-92px)]"
    >
      {/* Background image (shield + circuit board) */}
      <Image
        src="/images/cyber-hero-bg.webp"
        alt="Glowing cybersecurity shield with a padlock on a circuit board"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] lg:object-center"
      />

      {/* Dark gradient so the text stays readable on the left */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#121316] via-[#121316]/85 to-transparent lg:via-[#121316]/55 lg:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="mx-auto w-full max-w-[1600px] px-6 py-16 sm:px-10 lg:px-[7.5vw] lg:py-20">
        <div className="max-w-[760px]">
          {/* Top accent line */}
          <span className="block h-[4px] w-14 bg-[#e8590c] sm:w-[58px]" />

          {/* Heading */}
          <h1 className="mt-8 text-[clamp(34px,4.1vw,66px)] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:mt-9">
            Next Generation
            <span className="block font-bold text-[#e8590c]">
              Cybersecurity
            </span>
            Solutions For A Safer
            <span className="block">Digital World</span>
          </h1>

          {/* Bottom accent line */}
          <span className="mt-8 block h-[4px] w-14 bg-[#e8590c] sm:mt-9 sm:w-[58px]" />

          {/* Description */}
          <p className="mt-7 max-w-[540px] text-[15px] font-medium leading-[1.75] tracking-[0.2px] text-[#d9d9d9] sm:text-[17px]">
            Protect Your Digital Infrastructure With Advanced Cybersecurity
            Solutions Designed To Detect Threats, Secure Data, And Keep Your
            Business One Step Ahead.
          </p>
        </div>
      </div>
    </section>
  );
}