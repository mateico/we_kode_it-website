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
		"font-sans text-[13px] font-semibold text-muted no-underline transition-[color,transform] duration-150 hover:text-primary hover:scale-[1.08]";

	return (
		<div className="sticky top-0 z-50 px-8 pt-2.5 max-sm:px-3 max-sm:pt-2">
			<header
				className={`relative mx-auto grid max-w-site grid-cols-[1fr_auto_1fr] items-center rounded-full border px-4 py-1.5 transition-colors duration-200 max-sm:px-2 ${
					scrolled
						? "border-line bg-page shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
						: "border-transparent bg-transparent shadow-none"
				}`}
			>
				{/* logo */}
				<div className="flex items-center gap-1.5 justify-self-start">
					<img src="/logo-mark.svg" alt="" className="block h-[17px]" />
					<span className="font-display text-2xl font-bold leading-none text-body">
						WeKodeit
					</span>
				</div>

				{/* desktop nav */}
				<nav className="hidden justify-self-center gap-7 sm:flex">
					{LINKS.map((label) => (
						<a key={label} href="#" className={navLink}>
							{label}
						</a>
					))}
				</nav>

				{/* actions */}
				<div className="flex items-center gap-2.5 justify-self-end">
					<Button size="sm" className="whitespace-nowrap">
						Book a call
					</Button>
					<button
						type="button"
						aria-label="Menu"
						onClick={() => setMenuOpen((v) => !v)}
						className="relative h-5 w-7 sm:hidden"
					>
						<span
							className={`absolute left-0 h-0.5 w-5 bg-body transition-all duration-200 ${
								menuOpen ? "top-[9px] rotate-45" : "top-0.5"
							}`}
						/>
						<span
							className={`absolute left-0 h-0.5 w-5 bg-body transition-all duration-200 ${
								menuOpen ? "top-[9px] -rotate-45" : "top-4"
							}`}
						/>
					</button>
				</div>

				{/* mobile nav dropdown */}
				<nav
					className={`absolute inset-x-0 top-full mt-2 flex flex-col overflow-hidden rounded-2xl bg-page transition-all duration-200 ${
						menuOpen
							? "max-h-64 border border-line p-2 opacity-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
							: "max-h-0 border border-transparent p-0 opacity-0"
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
