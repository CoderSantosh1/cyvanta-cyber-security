"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Our Services", href: "#services", id: "services" },
  { label: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "FAQs", href: "#faqs", id: "faqs" },
];

const sectionIds = [...navLinks.map(({ id }) => id), "contact"];

function Logo() {
  return (
    <Link href="#home" className="flex items-center" aria-label="Cyvanta Cyber Security">
      <Image
        src="/images/logo.png"
        alt="Cyvanta Cyber Security"
        width={300}
        height={80}
        priority
        className="h-[52px] w-auto sm:h-[85px]"
      />
    </Link>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M4 12h16M14 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the active link aligned with the section crossing the sticky header.
  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const headerRow = document.querySelector("header > div");
        const activationOffset = headerRow?.getBoundingClientRect().height ?? 0;
        let currentSection = sectionIds[0];

        for (const id of sectionIds) {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= activationOffset) {
            currentSection = id;
          }
        }

        setActive(currentSection);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  // Close the mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-[0_4px_18px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[92px] lg:px-[3vw]">
        {/* Logo + divider */}
        <div className="flex items-center">
          <Logo />
          <span className="ml-7 hidden h-12 w-px bg-[#e3e3e3] lg:block" />
        </div>

        {/* Desktop nav */}
        <nav
          aria-label="Main"
          className="hidden flex-1 items-center justify-start gap-9 pl-9 lg:flex xl:gap-11"
        >
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[17px] transition-colors xl:text-[18px] ${
                  isActive
                    ? "font-bold text-[#1f2023]"
                    : "font-medium text-[#1f2023] hover:text-[#5b5e63]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-[10px] left-0 h-[3px] w-full rounded-full bg-[#25272b]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Contact button (skewed) */}
        <Link
          href="#contact"
          aria-current={active === "contact" ? "page" : undefined}
          className="group relative hidden shrink-0 lg:block"
        >
          <span
            className={`block -skew-x-[18deg] rounded-[10px] bg-[#25272b] px-9 py-3.5 shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-colors group-hover:bg-black ${
              active === "contact" ? "ring-2 ring-[#f26a1b]" : ""
            }`}
          >
            <span className="flex skew-x-[18deg] items-center gap-2 text-[17px] font-bold text-white">
              Contact Us
              <ArrowRight />
            </span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-md border border-[#e3e3e3] text-[#1f2023] lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`grid overflow-hidden border-t border-[#eee] bg-white transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b border-[#f0f0f0] py-3 text-[17px] ${
                    isActive ? "font-bold text-[#1f2023]" : "font-medium text-[#3b3d41]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              aria-current={active === "contact" ? "page" : undefined}
              className={`mt-4 inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#25272b] px-6 py-3 text-[17px] font-bold text-white ${
                active === "contact" ? "ring-2 ring-[#f26a1b]" : ""
              }`}
            >
              Contact Us
              <ArrowRight />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}