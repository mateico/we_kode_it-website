"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/Button";

const LINKS = ["Web", "CRM", "Mobile", "About Us"];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  const navLink =
    "font-sans text-primary font-regular text-muted no-underline transition-[color,scale] duration-150 hover: hover:scale-[1.08]";

  return (
    <div className="sticky top-0 z-50 px-8 pt-2.5 max-md:px-0 max-md:pt-0">
      <header
        className={`relative mx-auto grid max-w-site grid-cols-[1fr_auto_1fr] items-center px-8 py-2 transition-colors duration-200 max-md:px-4 max-md:py-3 max-md:bg-white max-md:border-transparent ${
          scrolled
            ? "md:border-line md:bg-white md:shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:rounded-2xl md:border"
            : "md:border-transparent md:bg-transparent md:shadow-none"
        }`}
      >
        {/* logo */}
        <div className="col-start-1 flex items-center gap-4 justify-self-start">
          <img src="/logo-mark.svg" alt="" className="block h-[17px]" />
          <span className="font-display text-2xl font-semibold leading-none text-body">
            WeKodeit
          </span>
        </div>

        {/* desktop nav */}
        <nav className="hidden justify-self-center gap-7 md:flex">
          {LINKS.map((label) => (
            <a key={label} href="#" className={navLink}>
              {label}
            </a>
          ))}
        </nav>

        {/* actions */}
        <div className="col-start-3 flex items-center gap-4.5 justify-self-end">
          <Button size="sm" className="whitespace-nowrap">
            Book a call
          </Button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative h-5 w-7 md:hidden"
          >
            <span
              className={`absolute left-0 h-0.5 w-5 bg-body transition-all duration-200 ${
                menuOpen ? "top-[9px] rotate-45" : "top-[3px]"
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] h-0.5 w-5 bg-body transition-all duration-200 ${
                menuOpen ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-body transition-all duration-200 ${
                menuOpen ? "top-[9px] -rotate-45" : "top-[15px]"
              }`}
            />
          </button>
        </div>

        {/* mobile nav dropdown */}
        <nav
          className={`absolute inset-x-0 top-full flex flex-col overflow-hidden bg-white transition-all duration-200 ${
            menuOpen
              ? "max-h-64  p-2 opacity-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              : "max-h-0  p-0 opacity-0"
          }`}
        >
          {LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="px-3 py-3 font-sans text-[15px] font-semibold text-body no-underline"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}
