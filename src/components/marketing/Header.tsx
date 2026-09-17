"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "About Us", href: "/about-us" },
];

export function Header({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        toggleRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setMenuOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("touchstart", onOutside);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("touchstart", onOutside);
    };
  }, [menuOpen]);

  React.useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  const navLink = (active: boolean) =>
    `border-b-2 pb-1 font-sans font-regular no-underline transition-[color,scale] duration-150 hover:scale-[1.08] ${
      active
        ? "border-body font-semibold text-body"
        : "border-transparent text-muted hover:text-body"
    }`;

  return (
    <div
      className={`sticky top-0 z-50 px-4 pt-2.5 max-md:px-0 max-md:pt-0 ${className}`}
    >
      <header
        className={`relative mx-auto grid  grid-cols-[1fr_auto_1fr] items-center px-16 py-2 transition-all duration-400 max-md:px-4 max-md:py-3 max-md:bg-white max-md:border-transparent max-w-[1146px] ${
          scrolled
            ? "md:mx-auto md:max-w-[1148px] md:border-line md:bg-white md:shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:rounded-2xl md:border pt-0px"
            : "md:border-transparent md:shadow-none"
        }`}
      >
        {/* logo */}
        <a
          href="/"
          className="col-start-1 flex items-center gap-4 justify-self-start no-underline"
        >
          <img
            src="/logo-mark.svg"
            alt=""
            width={45}
            height={25}
            className="block h-[25px] w-auto"
          />
          <span className="font-display text-2xl font-semibold leading-none text-body">
            WeKodeit
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden justify-self-center gap-7 md:flex md:ml-12">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={navLink(pathname === href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* actions */}
        <div className="col-start-3 flex items-center gap-4.5 justify-self-end">
          <a href="/book-a-call">
            <Button size="sm" className="whitespace-nowrap">
              Book a call
            </Button>
          </a>
          <button
            ref={toggleRef}
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
          ref={menuRef}
          className={`absolute inset-x-0 top-full flex flex-col overflow-hidden bg-white transition-all duration-200 ${
            menuOpen
              ? "max-h-64  p-2 opacity-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              : "max-h-0  p-0 opacity-0"
          }`}
        >
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`px-3 py-3 font-sans text-[15px] font-semibold no-underline ${
                pathname === href ? "text-body" : "text-muted"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}
