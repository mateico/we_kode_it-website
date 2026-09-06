import "@/styles/marketing.css";
import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { TechStack } from "@/components/marketing/TechStack";
import { WhatWeBuild } from "@/components/marketing/WhatWeBuild";
import { HowWeWork } from "@/components/marketing/HowWeWork";
import { WhyUs } from "@/components/marketing/WhyUs";
import { CTASection } from "@/components/marketing/CTASection";
import { CaseStudies } from "@/components/marketing/CaseStudies";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
	return (
		<div className="marketing-site">
			<div className="side-guide" style={{ left: "max(12px, calc(50% - 720px))" }} />
			<div className="side-guide" style={{ right: "max(12px, calc(50% - 720px))" }} />
			<Header />
			<Hero />
			<div className="section-divider" />
			<TechStack />
			<div className="section-divider" />
			<WhatWeBuild />
			<div className="section-divider" />
			<HowWeWork />
			<div className="section-divider" />
			<WhyUs />
			<div className="section-divider" />
			<CTASection compact />
			<div className="section-divider" />
			<CaseStudies />
			<div className="section-divider" />
			<CTASection heading="Ready to build something real?" footNote />
			<div className="section-divider" />
			<Footer />
		</div>
	);
}
