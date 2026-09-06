import React from "react";

const LINKS = [
	"Web",
	"Web Apps",
	"CRMs",
	"Mobile",
	"About Us",
	"Case Studies",
	"Contact",
	"Careers",
];

export function Footer() {
	return (
		<footer className="bg-surface">
			<div className="mx-auto flex max-w-site justify-between gap-8 px-8 py-12 max-sm:flex-col max-sm:items-start max-sm:gap-6">
				<span className="font-display text-[22px] font-bold text-body">
					WeKodeit
				</span>
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
					<span className="mt-2 font-sans text-[13px] text-muted">
						Esp | Eng
					</span>
				</nav>
			</div>
		</footer>
	);
}
