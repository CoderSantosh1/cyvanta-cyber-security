"use client";

import { useEffect, useState } from "react";
import { site } from "@/data";

const testimonialsContent = site.testimonial;
const testimonials = testimonialsContent.testimonials;

function usePerPage() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w < 700 ? 1 : w < 1100 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
}

function Stars({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 gap-[3px]" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-[17px] w-[17px] text-[#f26a1b]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.900 6.300 6.900.8-5.100 4.700 1.400 6.800L12 17.100 5.900 20.600l1.400-6.800L2.200 9.100l6.900-.8L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

const avatarPalettes = [
  { background: "#fce9df", skin: "#bd7958", hair: "#25272d", shirt: "#f26a1b" },
  { background: "#e5f0f3", skin: "#e0a77e", hair: "#3d302a", shirt: "#32768a" },
  { background: "#f4e9d8", skin: "#8d5d46", hair: "#201d1c", shirt: "#d39434" },
  { background: "#e9e9f5", skin: "#f0c3a0", hair: "#5b3e31", shirt: "#6664a2" },
  { background: "#f5e5ea", skin: "#a66b52", hair: "#302321", shirt: "#b45672" },
  { background: "#e3efe8", skin: "#d79b72", hair: "#392b23", shirt: "#4b8c67" },
  { background: "#e5edf8", skin: "#f0c6a5", hair: "#49332a", shirt: "#4778b5" },
  { background: "#f4eddc", skin: "#99664e", hair: "#24201f", shirt: "#b98535" },
  { background: "#f1e7f2", skin: "#d9a07c", hair: "#4a342c", shirt: "#92609b" },
] as const;

const avatarHairStyles = [
  "M19 29c-2-13 3-20 13-20s15 8 13 20c-4-3-7-7-8-12-5 5-11 7-18 7Z",
  "M18 30c-3-11 2-21 14-21s17 10 14 21l-5-3-2-9c-5 5-12 8-20 8Z",
  "M19 29c-2-12 4-20 13-20s15 7 13 20l-5-2-3-10c-4 5-10 8-18 9Z",
  "M18 30c-2-12 4-21 14-21s16 9 14 21c-3-3-5-7-6-12-6 6-13 8-22 8Z",
] as const;

function ProfileAvatar({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  const palette = avatarPalettes[index % avatarPalettes.length];
  const hairStyle = avatarHairStyles[index % avatarHairStyles.length];

  return (
    <svg
      role="img"
      aria-label={`${name} profile image`}
      viewBox="0 0 64 64"
      className="h-[68px] w-[68px] shrink-0 rounded-full"
    >
      <circle cx="32" cy="32" r="32" fill={palette.background} />
      <path
        d="M7 64c1-13 10-21 25-21s24 8 25 21"
        fill={palette.shirt}
      />
      <path d="M27 37h10v12H27z" fill={palette.skin} />
      <circle cx="19" cy="29" r="3" fill={palette.skin} />
      <circle cx="45" cy="29" r="3" fill={palette.skin} />
      <ellipse cx="32" cy="28" rx="12" ry="15" fill={palette.skin} />
      <path d={hairStyle} fill={palette.hair} />
      <path
        d="M27 31h.2M37 31h.2"
        stroke="#302820"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M29 37c2 1.5 4 1.5 6 0"
        fill="none"
        stroke="#8f4f40"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TestimonialCard({
  item,
  avatarIndex,
}: {
  item: (typeof testimonials)[number];
  avatarIndex: number;
}) {
  return (
    <article className="relative flex h-full flex-col rounded-[16px] border border-[#ece7e7] bg-white px-6 pb-8 pt-5 shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
      {/* Quote tile */}
      <span className="grid h-[50px] w-[50px] place-items-center rounded-[10px] bg-[#fdebe3]">
        <span
          aria-hidden="true"
          className="font-serif text-[48px] font-black leading-none text-[#f26a1b]"
          style={{ transform: "translateY(8px)" }}
        >
          &ldquo;
        </span>
      </span>

      <p className="mt-4 text-[17px] leading-[1.6] text-[#1c1e22] sm:text-[19px]">
        {item.text}
      </p>

      <div className="mt-auto flex items-center gap-4 pt-6">
        <ProfileAvatar name={item.name} index={avatarIndex} />

        <span className="h-12 w-[2px] shrink-0 bg-[#f26a1b]" />

        <div className="min-w-0 flex-1">
          <p className="text-[18px] font-bold leading-tight text-[#14161a]">
            {item.name}
          </p>
          <p className="mt-1 text-[14px] leading-snug text-[#4a4d52]">
            {item.role}
          </p>
        </div>

        <Stars label={testimonialsContent.ratingLabel} />
      </div>

      {/* Orange bottom accent */}
      <span className="pointer-events-none absolute inset-x-4 bottom-0 h-[4px] rounded-full bg-[#f26a1b]" />
    </article>
  );
}

export default function CyberTestimonials() {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(testimonials.length / perPage);
  const current = Math.min(page, pageCount - 1);

  const prev = () => setPage((current - 1 + pageCount) % pageCount);
  const next = () => setPage((current + 1) % pageCount);

  const visible = testimonials.slice(
    current * perPage,
    current * perPage + perPage,
  );

  const gridCols =
    perPage === 1
      ? "grid-cols-1"
      : perPage === 2
        ? "grid-cols-2"
        : "grid-cols-3";

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#faf8f8] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-[3.4vw]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="h-[4px] w-12 bg-[#f26a1b] sm:w-[50px]" />
            <span className="text-[22px] font-semibold text-[#14161a] sm:text-[27px]">
              {testimonialsContent.badge}
            </span>
            <span className="h-[4px] w-12 bg-[#f26a1b] sm:w-[50px]" />
          </div>

          <h2 className="mt-3 text-[clamp(32px,3.8vw,58px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#14161a]">
            {testimonialsContent.titlePrefix}{" "}
            <span className="text-[#f26a1b]">{testimonialsContent.titleHighlight}</span>{" "}
            {testimonialsContent.titleSuffix}
          </h2>

          <p className="mt-5 max-w-[800px] text-[15px] leading-[1.6] text-[#23262b] sm:text-[18px]">
            {testimonialsContent.description}
          </p>
        </div>

        {/* Cards */}
        <div className={`mt-10 grid gap-5 sm:gap-6 ${gridCols}`}>
          {visible.map((item, index) => (
            <TestimonialCard
              key={item.id}
              item={item}
              avatarIndex={current * perPage + index}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label={testimonialsContent.ariaLabels.previous}
            className="grid h-[42px] w-[42px] place-items-center rounded-[10px] border border-[#d9d9d9] bg-white text-[#14161a] shadow-sm transition hover:border-[#f26a1b] hover:text-[#f26a1b]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M15 5l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="2.800"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={testimonialsContent.ariaLabels.page.replace(
                  "{page}",
                  String(i + 1),
                )}
                aria-current={i === current}
                className={`rounded-full transition-all ${
                  i === current
                    ? "h-4 w-4 bg-[#f26a1b]"
                    : "h-3 w-3 bg-[#dcdcdc] hover:bg-[#c4c4c4]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label={testimonialsContent.ariaLabels.next}
            className="grid h-[42px] w-[42px] place-items-center rounded-[10px] border border-[#d9d9d9] bg-white text-[#14161a] shadow-sm transition hover:border-[#f26a1b] hover:text-[#f26a1b]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.800"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}