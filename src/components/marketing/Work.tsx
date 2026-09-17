import React from "react";
import { WORKS, type WorkItem } from "@/lib/work";
import { WorkImageCarousel } from "@/components/marketing/WorkImageCarousel";

function WorkCard({ work, priority }: { work: WorkItem; priority?: boolean }) {
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
      <p className="m-0 font-sans text-base leading-6 text-muted">
        {work.summary}
      </p>
    </div>
  );
  return (
    <a
      href={`/work#${work.slug}`}
      className="group flex gap-8 rounded-card bg-card p-8 shadow-card no-underline transition-transform duration-150 hover:scale-[1.01] max-sm:flex-col max-sm:gap-4 max-sm:p-4"
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
    </a>
  );
}

export function Work() {
  return (
    <section className="bg-surface pb-24 pt-8">
      <div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-4">
        <h2 className="col-span-12 mb-6 text-center text-[1.75rem] font-bold text-body">
          Work
        </h2>
        <div className="col-span-12 flex flex-col gap-6">
          {WORKS.map((w, i) => (
            <WorkCard key={w.slug} work={w} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
