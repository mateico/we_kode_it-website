"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export function Hero() {
	const [need, setNeed] = React.useState("");
	const [email, setEmail] = React.useState("");

	return (
		<section className="bg-hero py-15">
			<div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-8 max-sm:px-4">
				<Card className="col-span-12 p-[80px_64px] max-lg:p-[56px_40px] max-sm:p-[40px_24px] lg:col-start-2 lg:col-span-10">
					<div className="flex flex-col items-center gap-16 text-center max-lg:gap-10">
						<h1 className="m-0 font-display text-[1.75rem] font-bold leading-9 text-body lg:text-[2.5rem] lg:leading-[3rem]">
							Custom software,
							<br />
							build <span className="underline">around you</span>.
						</h1>
						<p className="m-0 max-w-[560px] font-sans text-2xl leading-8 text-muted max-lg:text-base max-lg:leading-6">
							Direct communication, and a free prototype before you commit to
							anything.
						</p>
						<form
							className="flex w-full max-w-[420px] flex-col gap-4"
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
							<Button className="w-full">See What&apos;s Possible</Button>
						</form>
					</div>
				</Card>
			</div>
		</section>
	);
}
