"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import categoryData from "@/data";

const site = categoryData.common.site;
const quickLinks = categoryData.footer.quickLinks;

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
};

const contacts: { icon: ReactNode; text: ReactNode; href?: string }[] = [
  {
    icon: (
      <svg {...iconProps}>
        <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    text: site.phone,
    href: site.phoneHref,
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.500 7 8.500 6.500L20.500 7" />
      </svg>
    ),
    text: site.email,
    href: site.emailHref,
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s7-6.200 7-12a7 7 0 1 0-14 0c0 5.800 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.600" />
      </svg>
    ),
    text: (
      <>
        {site.addressLine1}
        <br />
        {site.addressLine2}
      </>
    ),
  },
];

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none">
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CyberFooter() {

  return (
    <footer className="relative bg-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-8 px-6 pb-12 pt-14 sm:gap-10 sm:px-10 md:grid-cols-[1.25fr_1fr_1.2fr] md:gap-0 lg:px-[5.8vw] lg:pt-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 md:pr-10">
          <Link
            href={categoryData.common.navigation[0].href}
            aria-label={site.name}
          >
            <Image
              src={site.logo}
              alt={site.name}
              width={300}
              height={90}
              className="h-[78px] w-auto sm:h-[92px]"
            />
          </Link>

          <p className="mt-5 max-w-[400px] text-[18px] leading-[1.65] text-[#4a4d52] sm:text-[22px]">
            {site.tagline}
          </p>
        </div>

        {/* Quick links */}
        <div className="md:border-l md:border-[#dedede] md:px-[3.4vw]">
          <h3 className="text-[18px] font-bold text-[#14161a] sm:text-[22px] md:text-[24px]">
            {categoryData.footer.quickLinksTitle}
          </h3>
          <span className="mt-3 block h-[5px] w-[56px] rounded-full bg-[#ee9410]" />

          <ul className="mt-5 space-y-[7px]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-[14px] text-[#14161a] transition-colors hover:text-[#ee9410] sm:gap-5 sm:text-[17px] lg:text-[19px]"
                >
                  <ChevronRight />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch */}
        <div className="md:border-l md:border-[#dedede] md:pl-[3.4vw]">
          <h3 className="text-[18px] font-bold text-[#14161a] sm:text-[22px] md:text-[24px]">
            {categoryData.footer.contactTitle}
          </h3>
          <span className="mt-3 block h-[5px] w-[56px] rounded-full bg-[#ee9410]" />

          <ul className="mt-5 space-y-3">
            {contacts.map((item, index) => {
              const content = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-[#f3f1f1] text-[#ee9410] sm:h-[52px] sm:w-[54px]">
                    {item.icon}
                  </span>
                  <span className="min-w-0 break-words text-[13px] leading-[1.4] text-[#14161a] sm:text-[16px] lg:text-[19px]">
                    {item.text}
                  </span>
                </>
              );

              return (
                <li key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 transition-opacity hover:opacity-80 sm:gap-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 sm:gap-5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative">
        {/* Orange accent strip (top-left of the bar) */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 z-10 h-[9px] w-[32%] max-w-[420px] bg-[#e08a0c] [clip-path:polygon(0_0,100%_0,calc(100%-9px)_100%,0_100%)]"
        />

        <div className="relative overflow-hidden bg-[#25272d]">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10 lg:px-[5.8vw]">
            <p className="text-[15px] text-white sm:text-[18px]">
              {categoryData.footer.copyright}
            </p>
          </div>

          {/* Slanted orange stripes (bottom-right) */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-[2.8vw] hidden h-[62px] w-[78px] sm:block"
          >
            <span className="absolute bottom-0 right-[26px] h-full w-[10px] -skew-x-[28deg] bg-[#ee9410]" />
            <span className="absolute bottom-0 right-[8px] h-full w-[14px] -skew-x-[28deg] bg-[#ee9410]" />
            <span className="absolute bottom-0 right-[44px] h-[70%] w-[6px] -skew-x-[28deg] bg-[#ee9410]" />
          </span>
        </div>
      </div>
    </footer>
  );
}