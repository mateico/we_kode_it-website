import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { TechStack } from "@/components/marketing/TechStack";
import { WhatWeBuild } from "@/components/marketing/WhatWeBuild";
import { HowWeWork } from "@/components/marketing/HowWeWork";
import { WhyUs } from "@/components/marketing/WhyUs";
import { CTASection } from "@/components/marketing/CTASection";
import { CaseStudies } from "@/components/marketing/CaseStudies";
import { Footer } from "@/components/marketing/Footer";

// Thin horizontal rule between sections.
function Divider() {
	return (
		<div className="mx-auto h-px w-[calc(100%-4rem)] max-w-site bg-line" />
	);
}

export default function Home() {
	return (
		<div>
			{/* faint vertical guides at the edges of the content column (wide screens only) */}
			<div className="pointer-events-none fixed top-0 z-[1] hidden h-full w-px bg-line left-[max(12px,calc(50%-720px))] xl:block" />
			<div className="pointer-events-none fixed top-0 z-[1] hidden h-full w-px bg-line right-[max(12px,calc(50%-720px))] xl:block" />

			<Header />
			<Hero />
			<Divider />
			<TechStack />
			<Divider />
			<WhatWeBuild />
			<Divider />
			<HowWeWork />
			<Divider />
			<WhyUs />
			<Divider />
			<CTASection compact />
			<Divider />
			<CaseStudies />
			<Divider />
			<CTASection heading="Ready to build something real?" footNote />
			<Divider />
			<Footer />
		</div>
	);
}
