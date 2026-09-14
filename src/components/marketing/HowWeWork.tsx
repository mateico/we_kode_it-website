import React from "react";
import { Card } from "@/components/ui/Card";

const ARROW_COLORS = ["#2F6FED", "#E8590C", "#7C3AED", "#0F9D58"];
const STEPS = [
  {
    title: "Step 1 — Tell Us About Your Needs",
    desc: "We start with a conversation, not a contract. We dig into what you're trying to solve, your constraints, and what success looks like for you.",
    accent: "#2F6FED",
    icon: "chat",
  },
  {
    title: "Step 2 — Free Working Prototype",
    desc: "Before quoting a price, we build a throwaway prototype to test the right technology — giving us a real basis for estimating cost and timeline.",
    accent: "#E8590C",
    icon: "construction",
  },
  {
    title: "Step 3 — UI/UX Design",
    desc: "Once we've validated the approach, we design the actual product: wireframes. You see and approve the basic interface before a single line of production code is written.",
    accent: "#7C3AED",
    icon: "design_services",
  },
  {
    title: "Step 4 — Incremental Development",
    desc: "We build the real project in stages, so you can adopt it gradually within your organization instead of one risky big-bang launch. You see progress continuously, not just at the end.",
    accent: "#0F9D58",
    icon: "layers",
  },
  {
    title: "Step 5 — Launch & Ongoing Maintenance",
    desc: "Once launched, we stay on to support, fix, and evolve the product as your needs change.",
    accent: "#D6336C",
    icon: "rocket_launch",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-surface pt-8 pb-24">
      <div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-4">
        <h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
          How we work
        </h2>
        <div className="col-span-12 flex flex-col items-center lg:col-start-4 lg:col-span-6">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.title}>
              <Card className="w-full p-6">
                <div className="mb-2 flex items-center gap-4">
                  <span
                    className="material-symbols-outlined text-[26px]"
                    style={{ color: s.accent }}
                  >
                    {s.icon}
                  </span>
                  <h3 className="m-0 text-base font-bold text-body">
                    {s.title}
                  </h3>
                </div>
                <p className="m-0 font-sans text-base leading-6 text-muted">
                  {s.desc}
                </p>
              </Card>
              {i < STEPS.length - 1 && (
                <svg
                  className="py-2"
                  width="22"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={s.accent}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v16M6 14l6 6 6-6" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
