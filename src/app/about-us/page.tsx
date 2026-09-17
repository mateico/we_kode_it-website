import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "About Us — WeKodeit",
  description: "The story behind WeKodeit — coming soon.",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-hero py-4">
        <div className="mx-auto grid max-w-site grid-cols-12 gap-6">
          <Card className="col-span-12 mx-auto w-full max-w-[640px] border border-[var(--color-border-soft)] p-[64px_40px] text-center max-sm:p-[32px_24px]">
            <div className="flex flex-col items-center gap-5">
              <span className="rounded-full bg-[#2F6FED]/10 px-4 py-1.5 font-sans text-sm font-semibold text-[#2F6FED]">
                🚧 Work in progress
              </span>
              <h1 className="m-0 font-display text-[2rem] font-bold text-body">
                About Us
              </h1>
              <p className="m-0 max-w-[440px] font-sans text-base leading-6 text-muted">
                We&apos;re still writing this page. In the meantime, take a
                look at what we&apos;ve built or reach out directly —
                we&apos;d love to hear about your project.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <CTASection heading="Want to talk in the meantime?" footNote />
    </>
  );
}
