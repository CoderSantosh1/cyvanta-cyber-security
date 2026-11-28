"use client";

import { Fragment, type ReactNode } from "react";
import { site, type ServiceIconKey } from "@/data";

const servicesContent = site.services;
type Service = (typeof servicesContent.services)[number];

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

const LockIcon = (
  <svg {...iconProps}>
    <rect x="8" y="17" width="24" height="18" rx="4" />
    <path d="M13 17v-4a7 7 0 0 1 14 0v4" />
    <circle cx="20" cy="25" r="2" />
    <path d="M20 27v3" />
  </svg>
);

const CloudLockIcon = (
  <svg {...iconProps}>
    <path d="M12 30a7 7 0 0 1-1-13.900A9 9 0 0 1 28.500 14 7 7 0 0 1 29 28" />
    <rect x="15" y="24" width="12" height="9" rx="2" />
    <path d="M18 24v-2.500a3 3 0 0 1 6 0V24" />
  </svg>
);

const UsersIcon = (
  <svg {...iconProps}>
    <circle cx="20" cy="12" r="5" />
    <path d="M10 33c0-5.500 4.500-9 10-9s10 3.500 10 9" />
    <circle cx="8" cy="16" r="3.500" />
    <path d="M3 29c0-3.500 2.200-6 5.500-6.500" />
    <circle cx="32" cy="16" r="3.500" />
    <path d="M37 29c0-3.500-2.200-6-5.500-6.500" />
  </svg>
);

const MonitorIcon = (
  <svg {...iconProps}>
    <rect x="4" y="6" width="32" height="22" rx="3" />
    <path d="M15 35h10M20 28v7" />
    <path d="m9 21 5-5 4 3.500 5-7 4 4 4-3" />
  </svg>
);

const ShieldStarIcon = (
  <svg {...iconProps}>
    <path d="M20 4 7 9v10c0 9 5.500 14.500 13 17 7.500-2.500 13-8 13-17V9L20 4Z" />
    <path d="m20 14 2 4.200 4.500.6-3.300 3.100.8 4.500L20 24.200l-4 2.200.8-4.500-3.300-3.100 4.500-.6L20 14Z" />
  </svg>
);

const HeadsetIcon = (
  <svg {...iconProps}>
    <path d="M7 24v-4a13 13 0 0 1 26 0v4" />
    <rect x="4" y="22" width="7" height="11" rx="3" />
    <rect x="29" y="22" width="7" height="11" rx="3" />
    <path d="M33 33c0 3-3 4.500-8 4.500" />
    <circle cx="22" cy="37.500" r="1.500" />
  </svg>
);

const serviceIcons: Record<ServiceIconKey, ReactNode> = {
  shieldCheck: ShieldCheckIcon,
  layers: LayersIcon,
  lock: LockIcon,
  cloudLock: CloudLockIcon,
  users: UsersIcon,
  monitor: MonitorIcon,
  shieldStar: ShieldStarIcon,
  headset: HeadsetIcon,
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex flex-col rounded-[14px] border border-[#ece7e7] bg-white px-5 pb-6 pt-5 shadow-[0_6px_18px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(242,106,27,0.18)]">
      <div className="flex items-center gap-4">
        <span className="grid h-[66px] w-[66px] shrink-0 place-items-center rounded-[12px] bg-[#fdebe3] text-[#f26a1b]">
          {serviceIcons[service.icon]}
        </span>
        <h3 className="text-[19px] font-bold leading-[1.25] text-[#14161a] xl:text-[21px]">
          {service.titleLines.map((line, index) => (
            <Fragment key={line}>
              {line}
              {index < service.titleLines.length - 1 && <br />}
            </Fragment>
          ))}
        </h3>
      </div>

      <p className="mt-5 text-[15px] leading-[1.55] text-[#2d3036] xl:text-[16px]">
        {service.text}
      </p>

      {/* Orange bottom border */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] rounded-b-[14px] bg-[#f26a1b]" />
    </article>
  );
}

export default function CyberServices() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#faf8f8] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-[3.2vw]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-[#14161a] sm:w-[76px]" />
            <span className="text-[22px] font-semibold text-[#14161a] sm:text-[27px]">
              {servicesContent.badge}
            </span>
            <span className="h-px w-14 bg-[#14161a] sm:w-[76px]" />
          </div>

          <h2 className="mt-3 text-[clamp(28px,3.3vw,50px)] font-bold leading-[1.15] tracking-[-0.025em] text-[#14161a]">
            {servicesContent.titlePrefix}{" "}
            <span className="text-[#f26a1b]">{servicesContent.titleHighlight}</span>{" "}
            {servicesContent.titleSuffix}
          </h2>

          <p className="mt-5 max-w-[700px] text-[15px] leading-[1.7] text-[#23262b] sm:text-[17px]">
            {servicesContent.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {servicesContent.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}