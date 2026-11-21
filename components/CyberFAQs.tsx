"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "What cybersecurity services do you provide?",
    answer:
      "We provide threat detection and response, vulnerability assessment, data security and encryption, cloud security, identity and access management, 24/7 security monitoring (SOC), compliance and risk management, and expert consulting and advisory.",
  },
  {
    question: "How do you protect businesses from cyber attacks?",
    answer:
      "We use a combination of proactive monitoring, threat detection, vulnerability management, and robust security controls to identify, prevent, and respond to cyber threats in real time.",
  },
  {
    question: "Do you offer 24/7 security monitoring?",
    answer:
      "Yes. Our Security Operations Center (SOC) monitors your environment around the clock, so threats are detected and handled quickly, day or night.",
  },
  {
    question: "Is my company data safe with your services?",
    answer:
      "Absolutely. We follow strict access controls, encryption standards and industry best practices, and we keep your data confidential at every stage of our engagement.",
  },
  {
    question: "Do you provide cybersecurity for small businesses?",
    answer:
      "Yes. We offer flexible and scalable solutions designed for organizations of every size, from startups and small businesses to large enterprises.",
  },
];

function BubbleIcon() {
  return (
    <svg
      viewBox="0 0 64 56"
      className="h-[56px] w-[64px] text-[#f26a1b]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.600"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 4C11 4 3 11 3 20c0 4.500 2 8.500 5.500 11.300L6 40l9-4c2.200.600 4.500 1 7 1 11 0 19-7 19-16S33 4 22 4Z" />
      <path d="M18 14.500c0-2.500 2-4 4.300-4s4.200 1.500 4.200 3.700c0 3.300-4.500 3.300-4.500 6.800" />
      <circle cx="22" cy="26" r="0.9" fill="currentColor" />
      <path d="M44 24c9 1 16 7 16 15 0 4-2 7.500-5 9.800L57 55l-8-3.500c-1.500.4-3 .6-4.500.6-8 0-14.500-5-14.500-11.500" />
      <circle cx="40" cy="40" r="1" fill="currentColor" />
      <circle cx="46" cy="40" r="1" fill="currentColor" />
      <circle cx="52" cy="40" r="1" fill="currentColor" />
    </svg>
  );
}

export default function CyberFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section
      id="faqs"
      className="relative isolate overflow-hidden bg-[#faf8f8] py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-[1600px] items-start gap-10 px-5 sm:px-10 lg:grid-cols-[0.95fr_1.1fr] lg:gap-[3.5vw] lg:px-[3.8vw]">
        {/* Left */}
        <div className="flex w-full flex-col items-start">
          <div className="flex items-center gap-4">
            <span className="h-[4px] w-14 bg-[#f26a1b]" />
            <span className="text-[20px] font-semibold text-[#14161a] sm:text-[24px]">
              FAQs
            </span>
          </div>

          <h2 className="mt-5 text-[clamp(32px,3.9vw,60px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#14161a]">
            Frequently Asked
            <span className="block">
              Questions <span className="text-[#f26a1b]">Answered</span>
            </span>
          </h2>

          {/* Still have a question */}
          <div className="relative mt-10 w-full max-w-[560px] overflow-hidden rounded-[18px] border border-[#e8e3e3] bg-gradient-to-br from-white to-[#faf3f0] px-7 py-8 shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
            {/* soft decorative curves */}
            <svg
              aria-hidden="true"
              viewBox="0 0 300 140"
              className="pointer-events-none absolute -bottom-2 right-0 h-[140px] w-[300px] text-[#f26a1b]"
              fill="none"
            >
              <path
                d="M0 140C80 120 170 90 300 30"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.18"
              />
              <path
                d="M40 140C120 125 210 100 300 62"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.14"
              />
              <path
                d="M90 140C160 132 230 118 300 96"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.12"
              />
            </svg>

            <div className="relative">
              <BubbleIcon />

              <h3 className="mt-4 text-[26px] font-bold text-[#14161a] sm:text-[30px]">
                Still Have a Question?
              </h3>

              <p className="mt-3 max-w-[420px] text-[15px] leading-[1.65] text-[#2d3036] sm:text-[17px]">
                Can&rsquo;t find the answer you&rsquo;re looking for? Our team
                is here to help you with any cybersecurity-related inquiries.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-3 rounded-[10px] bg-[#f26a1b] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_6px_14px_rgba(238,95,8,0.3)] transition hover:brightness-105"
              >
                Contact Us
                <svg viewBox="0 0 28 16" className="h-4 w-6" fill="none">
                  <path
                    d="M1 8h24M19 2l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="flex w-full flex-col gap-4 lg:gap-[18px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[16px] bg-white transition-all ${
                  isOpen
                    ? "border border-[#f26a1b] shadow-[0_8px_22px_rgba(242,106,27,0.12)]"
                    : "border border-transparent shadow-[0_6px_18px_rgba(0,0,0,0.07)]"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:py-[22px]"
                >
                  <span
                    className={`text-[17px] font-semibold leading-snug sm:text-[20px] ${
                      isOpen ? "text-[#f26a1b]" : "text-[#14161a]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full text-white transition-colors ${
                      isOpen ? "bg-[#f26a1b]" : "bg-[#25272d]"
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M5 12h14"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5v14"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className={`origin-center transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-[1.7] text-[#23262b] sm:text-[18px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}