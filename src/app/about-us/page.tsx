import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "About me — Mateo Rial",
  description:
    "Uruguayan software engineer building web, CRM, and mobile products — how I work and what I value.",
};

const VALUES = [
  { title: "Learn Relentlessly", icon: "school", accent: "#2F6FED" },
  { title: "Adapt faster", icon: "bolt", accent: "#E8590C" },
  { title: "Build together", icon: "groups", accent: "#7C3AED" },
  { title: "Transparent communication", icon: "forum", accent: "#0F9D58" },
  { title: "Deliver results", icon: "task_alt", accent: "#D6336C" },
  { title: "Long-term planning", icon: "trending_up", accent: "#F4B400" },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-hero py-16 max-sm:py-10">
        <div className="mx-auto max-w-site px-4 max-sm:px-2">
          <h2 className="mb-6 text-center text-[1.75rem] font-bold text-body">
            About me
          </h2>
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-8">
            <Image
              src="/team/mateo_rial.webp"
              alt="Mateo Rial"
              width={200}
              height={200}
              className="h-48 w-48 shrink-0 rounded-2xl object-cover"
            />
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-lg font-bold text-body">
                  Mateo Rial
                </span>
                <span className="font-sans text-sm font-semibold text-muted">
                  Full-stack Developer
                </span>
              </div>
              <p className="m-0 font-sans text-base leading-6 text-muted">
                I&apos;m a full-stack engineer based in Montevideo, Uruguay,
                building web, CRM, and mobile products end to end — from
                architecture down to the details that make a product feel solid.
                I enjoy working closely with each client or team, staying
                accountable for the whole product rather than a slice of it.
                I&apos;m open to full-time roles and freelance projects.
              </p>
              <p className="m-0 font-sans text-base leading-6 text-muted">
                I care about clear communication, pragmatic technical choices,
                and shipping things that are still easy to maintain a year
                later.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 max-sm:py-10">
        <div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-2">
          <h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
            My bedrock
          </h2>
          {VALUES.map((v) => (
            <Card
              key={v.title}
              className="col-span-12 flex flex-col items-center gap-3 p-6 text-center sm:col-span-6 lg:col-span-4"
            >
              <span
                className="material-symbols-outlined text-[32px]"
                style={{ color: v.accent }}
              >
                {v.icon}
              </span>
              <h3 className="m-0 text-base font-bold text-body">{v.title}</h3>
            </Card>
          ))}
        </div>
      </section>

      <CTASection heading="Want to talk in the meantime?" footNote />
    </>
  );
}
