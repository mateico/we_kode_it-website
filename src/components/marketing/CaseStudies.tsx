import React from "react";
import { Card } from "@/components/ui/Card";

type Study = {
	title: string;
	imageFirst: boolean;
	accent: string;
	paragraphs: string[];
};

const STUDIES: Study[] = [
	{
		title: "First CRM",
		imageFirst: true,
		accent: "#2F6FED",
		paragraphs: [
			"A field-service company was running quotes, jobs, and invoicing across three disconnected spreadsheets. We spent the first two weeks shadowing their dispatchers before writing any code.",
			"The prototype became the product: a lightweight CRM tracking every job from lead to invoice, built around how their team already worked instead of forcing a new process on them.",
		],
	},
	{
		title: "First CRM",
		imageFirst: false,
		accent: "#E8590C",
		paragraphs: [
			"A multi-location retailer needed one system to see inventory and staff scheduling across every store, replacing a mix of paper logs and a shared spreadsheet.",
			"We shipped store-by-store, starting with the busiest location, so the team was never without a working system while we rolled the rest out.",
		],
	},
];

function CaseStudyCard({ study }: { study: Study }) {
	const image = (
		<div
			className="min-h-[220px] shrink-0 grow-0 basis-2/5 rounded-2xl opacity-85 max-sm:basis-auto"
			style={{ background: study.accent }}
		/>
	);
	const text = (
		<div className="flex grow basis-auto flex-col gap-4">
			<h3 className="text-xl font-bold text-body">{study.title}</h3>
			{study.paragraphs.map((p, i) => (
				<p key={i} className="m-0 font-sans text-base leading-6 text-muted">
					{p}
				</p>
			))}
		</div>
	);
	return (
		<Card className="flex gap-8 p-8 max-sm:flex-col max-sm:gap-4 max-sm:p-4">
			{study.imageFirst ? (
				<>
					{image}
					{text}
				</>
			) : (
				<>
					{text}
					{image}
				</>
			)}
		</Card>
	);
}

export function CaseStudies() {
	return (
		<section className="bg-surface pb-24">
			<div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-4">
				<h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
					Case Studies
				</h2>
				<div className="col-span-12 flex flex-col gap-6">
					{STUDIES.map((s, i) => (
						<CaseStudyCard key={i} study={s} />
					))}
				</div>
			</div>
		</section>
	);
}
