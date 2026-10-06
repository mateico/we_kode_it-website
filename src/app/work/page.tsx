import type { Metadata } from "next";
import { CTASection } from "@/components/marketing/CTASection";
import { Card } from "@/components/ui/Card";
import { WORKS, type WorkItem } from "@/lib/work";
import { WorkImageCarousel } from "@/components/marketing/WorkImageCarousel";

export const metadata: Metadata = {
  title: "Work — Mateo Rial",
  description: "Web, CRM, and mobile products I've built for real clients.",
};

function WorkDetailCard({
  work,
  priority,
}: {
  work: WorkItem;
  priority?: boolean;
}) {
  const image = (
    <WorkImageCarousel
      images={work.images}
      accent={work.accent}
      title={work.title}
      priority={priority}
    />
  );
  const text = (
    <div className="flex grow basis-auto flex-col gap-4">
      <h3 className="text-xl font-bold text-body">{work.title}</h3>
      {work.paragraphs.map((p, i) => (
        <p key={i} className="m-0 font-sans text-base leading-6 text-muted">
          {p}
        </p>
      ))}
      {work.link && (
        <a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-sans text-sm font-semibold text-body no-underline hover:underline"
        >
          Visit project ↗
        </a>
      )}
    </div>
  );
  return (
    <Card
      id={work.slug}
      className="group flex scroll-mt-28 gap-8 p-8 max-sm:flex-col max-sm:gap-4 max-sm:p-4"
    >
      {work.imageFirst ? (
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

export default function WorkPage() {
  return (
    <>
      <section className="pb-16 pt-12">
        <h1 className="mb-10 text-center text-[2rem] font-bold text-body">
          Work
        </h1>
        <div className="flex flex-col gap-6">
          {WORKS.map((w, i) => (
            <WorkDetailCard key={w.slug} work={w} priority={i === 0} />
          ))}
        </div>
      </section>

      <CTASection heading="Have a project in mind?" footNote />
    </>
  );
}
