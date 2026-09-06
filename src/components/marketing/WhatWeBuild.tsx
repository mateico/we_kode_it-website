import React from "react";
import { Card } from "@/components/ui/Card";

const BUILDS = [
	{
		title: "Websites",
		desc: "Fast, modern sites that convert visitors into clients",
		accent: "#2F6FED",
		icon: "language",
	},
	{
		title: "Web Apps",
		desc: "Custom tools built around your workflow",
		accent: "#E8590C",
		icon: "apps",
	},
	{
		title: "CRMs",
		desc: "Manage clients, sales, and operations in one place",
		accent: "#7C3AED",
		icon: "hub",
	},
	{
		title: "Mobile",
		desc: "Native Android & cross-platform apps with React Native",
		accent: "#0F9D58",
		icon: "smartphone",
	},
];

export function WhatWeBuild() {
	return (
		<section className="bg-surface pt-8 pb-24">
			<div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-4">
				<h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
					What we build
				</h2>
				{BUILDS.map((b) => (
					<div
						key={b.title}
						className="col-span-12 sm:col-span-6 lg:col-span-3"
					>
						<Card className="flex h-full flex-col gap-4 p-6">
							<div className="flex items-center gap-4">
								<span
									className="material-symbols-outlined text-[26px]"
									style={{ color: b.accent }}
								>
									{b.icon}
								</span>
								<h3 className="m-0 text-lg font-bold text-body">{b.title}</h3>
							</div>
							<p className="m-0 font-sans text-base leading-6 text-muted">
								{b.desc}
							</p>
						</Card>
					</div>
				))}
			</div>
		</section>
	);
}
