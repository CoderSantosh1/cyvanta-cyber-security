"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import categoryData from "@/data";

const contactContent = categoryData.contact;
const contactInfo = contactContent.information;
const contactForm = contactContent.form;
const site = categoryData.common.site;
const services = categoryData.services.items;

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PinIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="M12 22s7-6.200 7-12a7 7 0 1 0-14 0c0 5.800 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.600" />
  </svg>
);

const PhoneIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const MailIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.500 7 8.500 6.500L20.500 7" />
  </svg>
);

const ClockIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.500 2" />
  </svg>
);

const UserIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.400 3.600-7 8-7s8 2.600 8 7" />
  </svg>
);

const LayersIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 17.500 9 5 9-5" />
  </svg>
);

const ChatIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="M12 3a9 9 0 0 0-7.800 13.500L3 21l4.700-1.200A9 9 0 1 0 12 3Z" />
    <circle cx="8.500" cy="12" r="0.8" fill="currentColor" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    <circle cx="15.500" cy="12" r="0.8" fill="currentColor" />
  </svg>
);

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-[62px] w-[62px] shrink-0 place-items-center rounded-[12px] bg-[#fdebe3] text-[#f26a1b]">
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="text-[19px] font-bold leading-tight text-[#14161a] sm:text-[21px]">
          {title}
        </h3>
        <div className="mt-1.5 text-[14px] leading-[1.5] text-[#23262b] sm:text-[15px]">
          {children}
        </div>
      </div>
    </div>
  );
}

const inputWrap =
  "flex items-center gap-3 rounded-[10px] border border-[#d9dde3] bg-white px-4 transition focus-within:border-[#f26a1b] focus-within:ring-2 focus-within:ring-[#f26a1b]/15";

const inputBase =
  "w-full bg-transparent py-3.5 text-[15px] text-[#14161a] outline-none placeholder:text-[#3d4046] sm:text-[16px]";

export default function CyberContact() {
  const [emailDraft, setEmailDraft] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const phone = String(data.get("phone"));
    const service = String(data.get("service"));
    const message = String(data.get("message"));
    const subject = `${contactForm.emailSubjectPrefix} ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    setEmailDraft(
      `mailto:${site.email}?${new URLSearchParams({ subject, body })}`,
    );
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#faf8f8] py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 sm:px-10 lg:grid-cols-[1.02fr_1fr] lg:gap-[3.5vw] lg:px-[3.6vw]">
        {/* Left: info */}
        <div className="flex w-full flex-col items-start">
          <div className="flex items-center gap-4">
            <span className="h-[4px] w-14 bg-[#f26a1b]" />
            <span className="text-[20px] font-semibold text-[#14161a] sm:text-[24px]">
              {contactContent.eyebrow}
            </span>
          </div>

          <h2 className="mt-5 text-[clamp(32px,3.9vw,60px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#14161a]">
            {contactContent.title}
            <span className="block text-[#f26a1b]">
              {contactContent.titleAccent}{" "}
              <span className="text-[#14161a]">
                {contactContent.titleSuffix}
              </span>
            </span>
          </h2>

          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.65] text-[#2d3036] sm:text-[19px]">
            {contactContent.description}
          </p>

          {/* Info grid */}
          <div className="mt-9 grid w-full max-w-[640px] sm:grid-cols-2">
            <div className="space-y-6 pb-0 sm:border-r sm:border-[#e3dede] sm:pr-8">
              <div className="border-b border-[#e3dede] pb-6">
                <InfoCard icon={<PinIcon />} title={contactInfo.locationTitle}>
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </InfoCard>
              </div>

              <InfoCard icon={<MailIcon />} title={contactInfo.emailTitle}>
                <a
                  href={site.emailHref}
                  className="font-semibold text-[#f26a1b] hover:underline"
                >
                  {site.email}
                </a>
                <p className="mt-1 text-[#4a4d52]">{contactInfo.responseTime}</p>
              </InfoCard>
            </div>

            <div className="mt-6 space-y-6 sm:mt-0 sm:pl-8">
              <div className="border-b border-[#e3dede] pb-6">
                <InfoCard icon={<PhoneIcon />} title={contactInfo.phoneTitle}>
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-[#f26a1b] hover:underline"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-1 text-[#4a4d52]">
                    {contactInfo.schedule}
                  </p>
                </InfoCard>
              </div>

              <InfoCard icon={<ClockIcon />} title={contactInfo.workingHoursTitle}>
                <p className="font-medium text-[#14161a]">{contactInfo.days}</p>
                <p className="text-[#23262b]">{contactInfo.hours}</p>
              </InfoCard>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-none">
          {/* Orange brackets */}
          <div
            aria-hidden="true"
            className="absolute -left-[18px] -top-[20px] hidden h-[120px] w-[48%] rounded-tl-[14px] border-l-[4px] border-t-[4px] border-[#f26a1b] sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-[26px] -right-[18px] hidden h-[110px] w-[34%] rounded-br-[14px] border-b-[4px] border-r-[4px] border-[#f26a1b] sm:block"
          />

          <div className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_18px_44px_rgba(0,0,0,0.14)]">
            {/* Header */}
            <div className="relative overflow-hidden bg-[#25272d] px-6 pb-9 pt-5 sm:px-8">
              <div className="relative z-10 flex items-center gap-4">
                <span className="text-[#f26a1b]">
                  <ChatIcon className="h-[42px] w-[42px]" />
                </span>
                <h3 className="text-[24px] font-bold text-white sm:text-[30px]">
                  {contactForm.title}
                </h3>
              </div>

              {/* Decorative orange stripes */}
              <span
                aria-hidden="true"
                className="absolute -right-4 top-0 hidden h-full w-[150px] sm:block"
              >
                <span className="absolute right-[40px] top-0 h-[170%] w-[48px] origin-top-right -skew-x-[32deg] bg-gradient-to-b from-[#f26a1b]/10 to-[#f26a1b]/60" />
                <span className="absolute right-[18px] top-0 h-[170%] w-[16px] -skew-x-[32deg] bg-[#f26a1b]" />
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="-mt-5 rounded-t-[22px] bg-white px-5 pb-6 pt-5 sm:px-6"
            >
              <div className="grid gap-4 sm:grid-cols-2 mt-5">
                <label className={inputWrap}>
                  <UserIcon className="h-6 w-6 shrink-0 text-[#2d3036]" />
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={contactForm.namePlaceholder}
                    aria-label={contactForm.namePlaceholder.replace("*", "")}
                    className={inputBase}
                  />
                </label>

                <label className={inputWrap}>
                  <MailIcon className="h-6 w-6 shrink-0 text-[#2d3036]" />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={contactForm.emailPlaceholder}
                    aria-label={contactForm.emailPlaceholder.replace("*", "")}
                    className={inputBase}
                  />
                </label>
              </div>

              <label className={`${inputWrap} mt-4`}>
                <PhoneIcon className="h-6 w-6 shrink-0 text-[#2d3036]" />
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  required
                  placeholder={contactForm.phonePlaceholder}
                  aria-label={contactForm.phonePlaceholder.replace("*", "")}
                  pattern={contactForm.phonePattern}
                  title={contactForm.phoneValidationMessage}
                  className={inputBase}
                />
              </label>

              <label className={`${inputWrap} mt-4`}>
                <LayersIcon className="h-6 w-6 shrink-0 text-[#2d3036]" />
                <select
                  name="service"
                  required
                  defaultValue=""
                  aria-label={contactForm.servicePlaceholder}
                  className={`${inputBase} cursor-pointer`}
                >
                  <option value="" disabled>
                    {contactForm.servicePlaceholder}
                  </option>
                  {services.map((service) => (
                    <option key={service.label} value={service.label}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className={`${inputWrap} mt-4 items-start pt-3.5`}>
                <ChatIcon className="mt-0.5 h-6 w-6 shrink-0 text-[#2d3036]" />
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={contactForm.messagePlaceholder}
                  aria-label={contactForm.messagePlaceholder.replace("*", "")}
                  className={`${inputBase} resize-y py-0`}
                />
              </label>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-4 rounded-[10px] bg-gradient-to-b from-[#fa7420] to-[#ee5f08] py-3.5 text-[18px] font-semibold text-white shadow-[0_8px_18px_rgba(238,95,8,0.35)] transition hover:brightness-105 sm:text-[20px]"
              >
                {contactForm.submitLabel}
                <svg viewBox="0 0 28 16" className="h-4 w-6" fill="none">
                  <path
                    d="M1 8h24M19 2l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {emailDraft && (
                <p
                  role="status"
                  className="mt-4 text-center text-[15px] font-medium text-[#2e7d32]"
                >
                  {contactForm.successMessage}{" "}
                  <a
                    href={emailDraft}
                    className="font-bold underline underline-offset-2"
                  >
                    {contactForm.emailActionLabel}
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}