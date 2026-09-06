/* eslint-disable @next/next/no-img-element */
import React from "react";

const TECH_LOGOS = [
	{ name: "React", slug: "react" },
	{ name: "Next.js", slug: "nextdotjs" },
	{ name: "React Native", slug: "react" },
	{ name: "Cloudflare", slug: "cloudflare" },
	{ name: "Android", slug: "android" },
	{ name: "Tailwind CSS", slug: "tailwindcss" },
	{ name: "Claude", slug: "anthropic" },
	{ name: "Vercel", slug: "vercel" },
	{ name: "Docker", slug: "docker" },
];

export function TechStack() {
	// duplicate the list so the marquee can loop seamlessly (-50% == one full set)
	const track = [...TECH_LOGOS, ...TECH_LOGOS];

	return (
		<section className="bg-page py-7">
			<div className="mx-auto max-w-site overflow-hidden px-8 [mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]">
				<div className="flex w-max items-center gap-16 animate-tech-scroll">
					{track.map((logo, i) => (
						<div
							key={logo.slug + i}
							className="flex w-[100px] shrink-0 items-center justify-center"
						>
							<img
								src={`https://cdn.simpleicons.org/${logo.slug}`}
								alt={logo.name}
								title={logo.name}
								className="h-7 w-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
