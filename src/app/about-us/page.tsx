import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "About Us — WeKodeit",
  description:
    "Uruguayan software company with a strong sense of community — how we work, what we value, and who's on the team.",
};

const VALUES = [
  { title: "Learn Relentlessly", icon: "school", accent: "#2F6FED" },
  { title: "Adapt faster", icon: "bolt", accent: "#E8590C" },
  { title: "Build together", icon: "groups", accent: "#7C3AED" },
  { title: "Transparent communication", icon: "forum", accent: "#0F9D58" },
  { title: "Deliver results", icon: "task_alt", accent: "#D6336C" },
  { title: "Long-term planning", icon: "trending_up", accent: "#F4B400" },
];

const TEAM = [
  {
    name: "???? ?????",
    role: "Java Backend Lead",
    image: null,
  },
  {
    name: "Mateo Rial",
    role: "JavaScript Developer",
    image: "/team/mateo_rial.webp",
  },
  {
    name: "???? ?????",
    role: "Database Engineer",
    image: null,
  },
  {
    name: "???? ?????",
    role: "Mobile Development",
    image: null,
  },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-hero py-16 max-sm:py-10">
        <div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-6">
          <div className="col-span-12 mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
            <h1 className="m-0 font-display text-[2rem] font-bold text-body">
              About WeKodeit
            </h1>
            <p className="m-0 font-sans text-base leading-6 text-muted">
              Uruguayan software company with a strong sense of community. We
              grow organically, work collaboratively and treat our clients as
              partners. We embrace the latest technologies and innovations to
              build to last and stay under control.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 max-sm:py-10">
        <div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-6">
          <h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
            Our bedrock
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

      <section className="bg-hero py-16 max-sm:py-10">
        <div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-6">
          <h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
            Team
          </h2>
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="col-span-6 flex flex-col items-center gap-3 sm:col-span-3"
            >
              {m.image ? (
                <Image
                  src={m.image}
                  alt={m.name}
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-2xl object-cover"
                />
              ) : (
                <div
                  className="h-40 w-40 rounded-2xl bg-[#D9D9D9]"
                  aria-label={m.name}
                />
              )}
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-sans text-base font-bold text-body">
                  {m.name}
                </span>
                <span className="font-sans text-sm text-muted">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection heading="Want to talk in the meantime?" footNote />
    </>
  );
}
