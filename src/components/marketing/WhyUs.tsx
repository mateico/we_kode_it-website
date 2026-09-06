import React from "react";
import { Card } from "@/components/ui/Card";

const REASONS = [
	{ text: "Direct communication", icon: "forum", accent: "#2F6FED" },
	{ text: "Free prototyping", icon: "science", accent: "#E8590C" },
	{ text: "Custom-built, not templated", icon: "tune", accent: "#7C3AED" },
	{ text: "One team, start to finish", icon: "groups", accent: "#0F9D58" },
];

export function WhyUs() {
	return (
		<section className="bg-surface pb-24">
			<div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-4">
				<h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
					Why us
				</h2>
				<div className="col-span-12 flex flex-col gap-4 lg:col-start-4 lg:col-span-6">
					{REASONS.map((r) => (
						<Card
							key={r.text}
							className="flex items-center gap-4 px-5 py-4"
						>
							<span
								className="material-symbols-outlined text-2xl"
								style={{ color: r.accent }}
							>
								{r.icon}
							</span>
							<span className="font-sans text-base font-semibold text-body">
								{r.text}
							</span>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
