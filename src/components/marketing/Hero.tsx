"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Image from "next/image";
import heroLogo from "@/assets/hero_logo.webp";
import { useNeedEmailForm } from "@/components/marketing/useNeedEmailForm";
import { SuccessDialog } from "@/components/marketing/SuccessDialog";

export function Hero() {
  const {
    need,
    setNeed,
    email,
    setEmail,
    errors,
    status,
    setStatus,
    handleSubmit,
  } = useNeedEmailForm();

  return (
    <section className="bg-hero py-4">
      <div className="mx-auto grid max-w-site grid-cols-12 gap-6">
        <Card className="col-span-12  p-[80px_64px] max-lg:p-[56px_40px] max-sm:p-[18px_24px] w-full mx-auto max-w-[var(--max-width-card)] border border-[var(--color-border-soft)]">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
            <div className="flex flex-col gap-8 text-center max-md:gap-5 md:flex-[6]">
              <h1 className="m-0 font-display text-[2rem] font-bold leading-3rem text-body lg:text-[2.5rem] lg:leading-[rem]  text-left">
                Think it.
                <br />
                Say it.
                <br />
                We kode it.
              </h1>
              <p className="m-0 max-w-[500px] text-left font-sans text-xl leading-8 text-gray-500 max-lg:text-base max-lg:leading-6">
                Direct communication, and a free prototype before you commit to
                anything.
              </p>
              <form
                className="flex w-full flex-col gap-4 md:max-w-[420px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-1">
                  <Input
                    placeholder="Tell us what you need..."
                    multiline
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                  />
                  {errors.need && (
                    <p className="m-0 text-left text-[0.7rem] text-red-400">
                      {errors.need}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Input
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="m-0 text-left text-[0.7rem] text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <Button
                  className="self-start"
                  onClick={handleSubmit}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send My Idea"}
                </Button>
                {status === "error" && (
                  <p className="m-0 text-left text-[0.7rem] text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
            <div className="w-full max-w-[420px] md:max-w-none md:flex-[4]">
              <div className="relative mx-auto w-full max-w-[200px] lg:max-w-none lg:flex-1">
                <Image
                  src={heroLogo}
                  alt="Custom software built around you"
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
      {status === "success" && (
        <SuccessDialog onClose={() => setStatus("idle")} />
      )}
    </section>
  );
}
