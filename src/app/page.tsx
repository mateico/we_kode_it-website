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
  return <div className="mx-auto h-px max-w-site bg-line" />;
}

export default function Home() {
  return (
    <div>
      <Header className="md:hidden" />

      <div className="relative px-8 max-w-[1197px] mx-auto">
        <div aria-hidden className="absolute inset-y-0 left-4 w-px bg-line" />
        <div aria-hidden className="absolute inset-y-0 right-4 w-px bg-line" />
        <Header className="hidden md:block" />

        <Hero />
        <Divider />
        <TechStack />
        <Divider />
        <WhatWeBuild />
        <Divider />
        <HowWeWork />
        <Divider />
      </div>

      <Footer />
      {/* 
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
			<Footer /> */}
    </div>
  );
}
