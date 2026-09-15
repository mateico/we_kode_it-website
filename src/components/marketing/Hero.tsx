"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Image from "next/image";
import heroLogo from "@/assets/hero_logo.webp";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Hero() {
  const [need, setNeed] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState({ need: "", email: "" });
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    const nextErrors = {
      need: need.trim() ? "" : "Please tell us what you need.",
      email: !email.trim()
        ? "Please enter your email."
        : EMAIL_PATTERN.test(email.trim())
          ? ""
          : "Please enter a valid email.",
    };
    setErrors(nextErrors);
    if (nextErrors.need || nextErrors.email) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ need, email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setNeed("");
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

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
                  {status === "submitting"
                    ? "Sending..."
                    : "See What's Possible"}
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
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
        >
          <Card className="animate-dialog-in flex w-full max-w-sm flex-col items-center gap-4 border border-[var(--color-border-soft)] p-8 text-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-14 w-14 shrink-0 text-green-500"
              aria-hidden
            >
              <path
                d="M5 13l4.5 4.5L19 8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col gap-1">
              <p
                id="success-dialog-title"
                className="m-0 font-display text-lg font-bold text-body"
              >
                Message received!
              </p>
              <p className="m-0 text-sm text-gray-500">
                We&apos;ll be in touch soon.
              </p>
            </div>
            <Button onClick={() => setStatus("idle")}>OK</Button>
          </Card>
        </div>
      )}
    </section>
  );
}
