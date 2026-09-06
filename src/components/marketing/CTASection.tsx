"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type CTASectionProps = {
	heading?: string;
	footNote?: boolean;
	compact?: boolean;
};

export function CTASection({ heading, footNote, compact }: CTASectionProps) {
	const [need, setNeed] = React.useState("");
	const [email, setEmail] = React.useState("");

	const sectionPad = compact ? "pb-14" : heading ? "pb-24" : "pb-20";

	return (
		<section className={`bg-page ${sectionPad}`}>
			<div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-4">
				<div
					className={`col-span-12 flex flex-col items-center text-center lg:col-start-4 lg:col-span-6 ${
						compact ? "gap-4" : "gap-6"
					}`}
				>
					{heading && (
						<h2 className="text-[1.75rem] font-bold text-body">{heading}</h2>
					)}
					<form
						className={`flex w-full flex-col ${
							compact ? "max-w-[340px] gap-2" : "max-w-[420px] gap-4"
						}`}
						onSubmit={(e) => e.preventDefault()}
					>
						<Input
							placeholder="Tell us what you need..."
							multiline
							value={need}
							onChange={(e) => setNeed(e.target.value)}
						/>
						<Input
							placeholder="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Button size={compact ? "sm" : "md"} className="w-full">
							See What&apos;s Possible
						</Button>
					</form>
					{footNote && (
						<p className="m-0 flex items-center gap-2 font-sans text-base text-muted">
							Prefer to talk first?
							<a
								href="#"
								className="font-semibold text-primary no-underline"
							>
								Book a call →
							</a>
						</p>
					)}
				</div>
			</div>
		</section>
	);
}
