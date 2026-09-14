import React from "react";

const LINKS = ["Web", "CRM", "Mobile", "About Us", "Case Studies"];

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto flex max-w-site justify-between gap-8 px-8 py-12 max-sm:flex-col max-sm:items-start max-sm:gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.svg" alt="" className="block h-[17px]" />
            <span className="font-display text-[22px] font-bold text-body">
              WeKodeit
            </span>
          </div>
          <p className="m-0 max-w-[220px] font-sans text-sm text-muted">
            We build web, CRM, and mobile products.
          </p>
        </div>

        <nav className="flex flex-col items-end gap-2 text-right max-sm:items-start max-sm:text-left">
          {LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="font-sans text-sm text-muted no-underline"
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:hello@wekodeit.com"
            className="mt-2 font-sans text-sm text-muted no-underline"
          >
            hello@wekodeit.com
          </a>
          <span className="mt-2 font-sans text-[13px] text-muted">
            Esp | Eng
          </span>
          <span className="mt-4 font-sans text-[13px] text-muted">
            © 2026 WeKodeit
          </span>
        </nav>
      </div>
    </footer>
  );
}
