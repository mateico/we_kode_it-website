import { Hero } from "@/components/marketing/Hero";
import { TechStack } from "@/components/marketing/TechStack";
import { WhatWeBuild } from "@/components/marketing/WhatWeBuild";
import { HowWeWork } from "@/components/marketing/HowWeWork";
import { WhyUs } from "@/components/marketing/WhyUs";
import { CTASection } from "@/components/marketing/CTASection";
import { Work } from "@/components/marketing/Work";

// Thin horizontal rule between sections.
function Divider() {
  return <div className="mx-auto h-px max-w-site bg-line" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <TechStack />
      <Divider />
      <WhatWeBuild />
      <Divider />
      <Work />
      <Divider />
      <CTASection compact />
      <Divider />
      <WhyUs />
      <Divider />
      <HowWeWork />
      <Divider />
      <CTASection heading="Ready to build something real?" footNote />
      <Divider />
    </>
  );
}
