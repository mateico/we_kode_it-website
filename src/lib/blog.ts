export type Post = {
  /** Must match the file name in src/content/blog/<slug>.mdx */
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  summary: string;
};

// Add new posts at the top; the list page sorts by date anyway.
export const POSTS: Post[] = [
  {
    slug: "implementing-the-openai-api",
    title: "Implementing the OpenAI API",
    date: "2026-10-04",
    summary: "One-line summary",
  },
  {
    slug: "hello-world",
    title: "Hello World: a sample post",
    date: "2026-10-04",
    summary:
      "A placeholder article to preview how text, code snippets and screenshots look on the blog.",
  },
].sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
