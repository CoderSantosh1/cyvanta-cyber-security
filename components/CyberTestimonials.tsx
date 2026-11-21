"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "IT Director, NexaTech",
    quote:
      "CYVANTA has significantly strengthened our security posture. Their proactive approach and expert support give us complete peace of mind.",
  },
  {
    name: "Priya Sharma",
    role: "CTO, Finora Solutions",
    quote:
      "The team is knowledgeable, responsive, and truly understands our business needs. Their security solutions are robust, scalable, and easy to manage.",
  },
  {
    name: "Amit Verma",
    role: "CEO, DataBridge",
    quote:
      "A reliable cybersecurity partner! CYVANTA helped us identify risks early and implement strong, long-term protection for our digital assets.",
  },
  {
    name: "Sneha Kapoor",
    role: "CISO, CloudNest",
    quote:
      "Their 24/7 monitoring caught threats we never knew existed. Response times are fast and the reporting is clear and actionable.",
  },
  {
    name: "Vikram Singh",
    role: "Head of IT, Orbit Logistics",
    quote:
      "From the first assessment to ongoing support, the CYVANTA team has been professional and thorough. We feel far more secure today.",
  },
  {
    name: "Neha Gupta",
    role: "COO, FinEdge Capital",
    quote:
      "They made compliance simple. Audits that used to take weeks now run smoothly, and our whole team understands the security roadmap.",
  },
  {
    name: "Arjun Nair",
    role: "CTO, MediSync Health",
    quote:
      "Protecting patient data is critical for us. CYVANTA delivered a tailored solution that is secure, scalable and easy for our staff to use.",
  },
  {
    name: "Pooja Malhotra",
    role: "Director, RetailHub",
    quote:
      "Excellent service and clear communication. They explain risks in plain language and always propose practical, cost-effective fixes.",
  },
  {
    name: "Karan Joshi",
    role: "Founder, AppForge",
    quote:
      "As a growing startup we needed security that scales with us. CYVANTA gave us enterprise-level protection without slowing the team down.",
  },
];

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

function Stars() {
  return (
    <div className="flex shrink-0 gap-[3px]" aria-label="5 out of 5 stars">
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

function TestimonialCard({ item }: { item: Testimonial }) {
  const initials = item.name
    .split(" ")
    .map((part) => part[0])
    .join("");

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
        {item.quote}
      </p>

      <div className="mt-auto flex items-center gap-4 pt-6">
        <span
          aria-hidden="true"
          className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-[#fdebe3] text-[20px] font-bold text-[#f26a1b]"
        >
          {initials}
        </span>

        <span className="h-12 w-[2px] shrink-0 bg-[#f26a1b]" />

        <div className="min-w-0 flex-1">
          <p className="text-[18px] font-bold leading-tight text-[#14161a]">
            {item.name}
          </p>
          <p className="mt-1 text-[14px] leading-snug text-[#4a4d52]">
            {item.role}
          </p>
        </div>

        <Stars />
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
              Testimonials
            </span>
            <span className="h-[4px] w-12 bg-[#f26a1b] sm:w-[50px]" />
          </div>

          <h2 className="mt-3 text-[clamp(32px,3.8vw,58px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#14161a]">
            What Our <span className="text-[#f26a1b]">Clients</span> Say
          </h2>

          <p className="mt-5 max-w-[800px] text-[15px] leading-[1.6] text-[#23262b] sm:text-[18px]">
            Trusted by businesses across industries for reliable and effective
            cybersecurity solutions.
          </p>
        </div>

        {/* Cards */}
        <div className={`mt-10 grid gap-5 sm:gap-6 ${gridCols}`}>
          {visible.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
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
                aria-label={`Go to testimonials page ${i + 1}`}
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
            aria-label="Next testimonials"
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