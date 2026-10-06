import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	// Blog disabled in this version of the site. Remove to re-enable.
	async redirects() {
		return [
			{ source: "/blog", destination: "/", permanent: false },
			{ source: "/blog/:path*", destination: "/", permanent: false },
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.pravatar.cc",
			},
		],
	},
};

// Plugins are given by name (not imported) so they also work with Turbopack.
const withMDX = createMDX({
	options: {
		remarkPlugins: ["remark-gfm"],
		rehypePlugins: [["rehype-pretty-code", { theme: "github-dark" }]],
	},
});

export default withMDX(nextConfig);

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
