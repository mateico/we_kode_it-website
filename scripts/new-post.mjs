// Usage: pnpm new-post "My post title" ["One-line summary"]
// Creates src/content/blog/<slug>.mdx, public/blog/<slug>/ and registers the post in src/lib/blog.ts.
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";

const [title, summary = "TODO: one-line summary"] = process.argv.slice(2);
if (!title) {
  console.error('Usage: pnpm new-post "Post title" ["Summary"]');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFD")
  .replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");
const date = new Date().toISOString().slice(0, 10);

const mdx = `src/content/blog/${slug}.mdx`;
if (existsSync(mdx)) {
  console.error(`${mdx} already exists`);
  process.exit(1);
}

mkdirSync(`public/blog/${slug}`, { recursive: true });
writeFileSync(`public/blog/${slug}/.gitkeep`, "");
writeFileSync(
  mdx,
  `Intro paragraph.\n\n## Step 1\n\n\`\`\`ts\n// code here\n\`\`\`\n\n`,
);

const file = "src/lib/blog.ts";
const entry = `  {\n    slug: ${JSON.stringify(slug)},\n    title: ${JSON.stringify(title)},\n    date: ${JSON.stringify(date)},\n    summary: ${JSON.stringify(summary)},\n  },\n`;
const marker = "export const POSTS: Post[] = [\n";
const src = readFileSync(file, "utf8");
writeFileSync(file, src.replace(marker, marker + entry));

console.log(`Created ${mdx}\nImages go in public/blog/${slug}/ (paste them into the .mdx in VS Code)`);
