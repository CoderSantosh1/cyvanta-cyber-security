"use client";

import Image from "next/image";
import { Fragment } from "react";
import { site } from "@/data";

export default function CyberHero() {
  const hero = site.banner;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#121316] lg:min-h-[calc(100svh-92px)]"
    >
      {/* Background image (shield + circuit board) */}
      <Image
        src={hero.bgImage}
        alt={hero.bgImageAlt}
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
            {hero.titlePrefix}
            <span className="block font-bold text-[#e8590c]">
              {hero.titleHighlight}
            </span>
            {hero.titleSuffixLines.map((line, index) =>
              index === 0 ? (
                <Fragment key={line}>{line}</Fragment>
              ) : (
                <span key={line} className="block">
                  {line}
                </span>
              ),
            )}
          </h1>

          {/* Bottom accent line */}
          <span className="mt-8 block h-[4px] w-14 bg-[#e8590c] sm:mt-9 sm:w-[58px]" />

          {/* Description */}
          <p className="mt-7 max-w-[540px] text-[15px] font-medium leading-[1.75] tracking-[0.2px] text-[#d9d9d9] sm:text-[17px]">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}