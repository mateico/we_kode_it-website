import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, formatDate } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — WeKodeit`, description: post.summary };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="mx-auto max-w-3xl pb-20 pt-12">
      <Link
        href="/blog"
        className="font-sans text-sm font-semibold text-muted no-underline hover:underline"
      >
        ← All posts
      </Link>
      <header className="mb-8 mt-6">
        <time dateTime={post.date} className="font-sans text-sm text-muted">
          {formatDate(post.date)}
        </time>
        <h1 className="mt-2 text-[2rem] font-bold leading-tight text-body">
          {post.title}
        </h1>
      </header>
      <div className="post">
        <Content />
      </div>
    </article>
  );
}
