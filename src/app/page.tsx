import { Hero } from "@/components/marketing/Hero";
import { TechStack } from "@/components/marketing/TechStack";
import { WhatWeBuild } from "@/components/marketing/WhatWeBuild";
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
      <CTASection heading="Have a project in mind?" footNote />
      <Divider />
    </>
  );
}
