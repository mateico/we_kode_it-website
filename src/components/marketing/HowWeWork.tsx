import React from "react";
import { Card } from "@/components/ui/Card";

const ARROW_COLORS = ["#2F6FED", "#E8590C", "#7C3AED", "#0F9D58"];
const STEPS = [
	{
		title: "Step 1 — Tell Us About Your Needs",
		desc: "We start with a conversation, not a contract. We dig into what you're trying to solve, your constraints, and what success looks like for you.",
	},
	{
		title: "Step 2 — Free Working Prototype",
		desc: "Before quoting a price, we build a small working prototype to explore the right technology for your specific problem. This prototype is throwaway by design — its only job is to prove the solution works and give us (and you) a real basis for estimating cost and timeline.",
	},
	{
		title: "Step 3 — UI/UX Design in Figma",
		desc: "Once we've validated the approach, we design the actual product: wireframes, a design system, and the full look and feel of your solution. You see and approve the interface before a single line of production code is written.",
	},
	{
		title: "Step 4 — Incremental Development",
		desc: "We build the real project in stages, so you can adopt it gradually within your organization instead of one risky big-bang launch. You see progress continuously, not just at the end.",
	},
	{
		title: "Step 5 — Launch & Ongoing Maintenance",
		desc: "Once launched, we stay on to support, fix, and evolve the product as your needs change.",
	},
];

export function HowWeWork() {
	return (
		<section className="bg-surface pt-8 pb-24">
			<div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-4">
				<h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
					How we work
				</h2>
				<div className="col-span-12 flex flex-col items-center lg:col-start-4 lg:col-span-6">
					{STEPS.map((s, i) => (
						<React.Fragment key={s.title}>
							<Card className="w-full p-6">
								<h3 className="mb-2 text-base font-bold text-body">{s.title}</h3>
								<p className="m-0 font-sans text-base leading-6 text-muted">
									{s.desc}
								</p>
							</Card>
							{i < STEPS.length - 1 && (
								<span
									className="py-2 text-[22px] font-bold"
									style={{ color: ARROW_COLORS[i % ARROW_COLORS.length] }}
								>
									↓
								</span>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
