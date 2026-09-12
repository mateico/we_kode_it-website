"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Image from "next/image";

export function Hero() {
  const [need, setNeed] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <section className="bg-hero py-4 mx-6.5">
      <div className="mx-auto grid max-w-site grid-cols-12 gap-6">
        <Card className="col-span-12  p-[80px_64px] max-lg:p-[56px_40px] max-sm:p-[18px_24px] w-full mx-auto max-w-[var(--max-width-card)] border border-[var(--color-border-soft)]">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
            <div className="flex flex-col gap-8 text-center max-md:gap-5 md:flex-[6]">
              <h1 className="m-0 font-display text-[2rem] font-bold leading-9 text-body lg:text-[2.5rem] lg:leading-[3rem]  text-left">
                Custom software,
                <br />
                build <span className="underline">around you</span>.
              </h1>
              <p className="m-0 max-w-[500px] text-left font-sans text-xl leading-8 text-gray-500 max-lg:text-base max-lg:leading-6">
                Direct communication, and a free prototype before you commit to
                anything.
              </p>
              <form
                className="flex w-full flex-col gap-4 md:max-w-[420px]"
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
                <Button className="self-start">See What&apos;s Possible</Button>
              </form>
            </div>
            <div className="w-full max-w-[420px] md:max-w-none md:flex-[4]">
              <div className="relative mx-auto w-full max-w-[200px] lg:max-w-none lg:flex-1">
                <Image
                  src="/hero_logo.webp"
                  alt="Custom software built around you"
                  width={640}
                  height={640}
                  className="h-auto w-full"
                  priority
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 shadow-[inset_0_0_10px_20px_#fff]"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
