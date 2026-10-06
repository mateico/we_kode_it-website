import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/marketing/CTASection";
import { Card } from "@/components/ui/Card";
import { POSTS, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — WeKodeit",
  description: "Short technical articles on AI tools and how we build with them.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pb-16 pt-12">
        <h1 className="mb-10 text-center text-[2rem] font-bold text-body">
          Blog
        </h1>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block no-underline"
            >
              <Card className="flex flex-col gap-2 p-8 transition-transform hover:-translate-y-0.5 max-sm:p-5">
                <time
                  dateTime={post.date}
                  className="font-sans text-sm text-muted"
                >
                  {formatDate(post.date)}
                </time>
                <h2 className="text-xl font-bold text-body">{post.title}</h2>
                <p className="m-0 font-sans text-base leading-6 text-muted">
                  {post.summary}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <CTASection heading="Ready to build something real?" footNote />
    </>
  );
}
