"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PLATFORMS = ["Zoom", "Microsoft Teams", "WhatsApp"];

const TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Montevideo",
  "America/Sao_Paulo",
  "UTC",
  "Europe/London",
  "Europe/Paris",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Australia/Sydney",
];

function todayDateString() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function nowTimeString() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

const emptyForm = {
  name: "",
  email: "",
  platform: PLATFORMS[0],
  phone: "",
  country: "",
  timezone: "", // Add this - will be filled by browser detection
  day: "",
  timeFrom: "",
  timeTo: "",
};

type FormState = typeof emptyForm;

export function BookCallForm() {
  const [form, setForm] = React.useState<FormState>(emptyForm);
  const [errors, setErrors] = React.useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  React.useEffect(() => {
    const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setForm((f) => ({ ...f, timezone: browserTimezone }));
  }, []);

  const set =
    <K extends keyof FormState>(key: K) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    const selectedDateTime =
      form.day && form.timeFrom
        ? new Date(`${form.day}T${form.timeFrom}`)
        : null;
    const isPast = selectedDateTime
      ? selectedDateTime.getTime() < Date.now()
      : false;

    const nextErrors: Partial<Record<keyof FormState, string>> = {
      name: form.name.trim() ? "" : "Please enter your name.",
      email: !form.email.trim()
        ? "Please enter your email."
        : EMAIL_PATTERN.test(form.email.trim())
          ? ""
          : "Please enter a valid email.",
      timezone: form.timezone ? "" : "Please select your timezone.",
      day: form.day ? "" : "Please pick a day.",
      timeFrom: !form.timeFrom
        ? "Please pick a start time."
        : isPast
          ? "Please pick a time in the future."
          : "",
      timeTo: form.timeTo ? "" : "Please pick an end time.",
    };

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-page py-4">
      <div className="mx-auto max-w-site px-8 max-sm:px-0">
        <Card className="mx-auto w-full max-w-[560px] p-[56px_48px] max-sm:p-[24px_20px] border border-[var(--color-border-soft)]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="m-0 font-display text-[2rem] font-bold text-body">
                Book a call
              </h1>
              <p className="m-0 font-sans text-base text-muted">
                Tell us how and when to reach you — we&apos;ll confirm by email.
              </p>
            </div>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field label="Name" error={errors.name}>
                <Input
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email" error={errors.email}>
                <Input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Preferred platform">
                <Select value={form.platform} onChange={set("platform")}>
                  {PLATFORMS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Phone (optional)">
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+1 555 000 0000"
                />
              </Field>

              <Field label="Country">
                <Input
                  value={form.country}
                  onChange={set("country")}
                  placeholder="Where are you contacting us from?"
                />
              </Field>

              <Field label="Your timezone">
                <Select value={form.timezone} onChange={set("timezone")}>
                  {TIMEZONES.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </Select>
              </Field>

              <div className="flex gap-4 max-sm:flex-col">
                <Field label="Day" error={errors.day} className="flex-1">
                  <Input
                    type="date"
                    value={form.day}
                    onChange={set("day")}
                    min={todayDateString()}
                  />
                </Field>
                <Field label="From" error={errors.timeFrom} className="flex-1">
                  <Input
                    type="time"
                    value={form.timeFrom}
                    onChange={set("timeFrom")}
                    min={
                      form.day === todayDateString()
                        ? nowTimeString()
                        : undefined
                    }
                  />
                </Field>

                <Field label="To" error={errors.timeTo} className="flex-1">
                  <Input
                    type="time"
                    value={form.timeTo}
                    onChange={set("timeTo")}
                  />
                </Field>
              </div>

              <Button
                className="mt-2 self-center"
                onClick={handleSubmit}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Request this call"}
              </Button>

              {status === "error" && (
                <p className="m-0 text-center text-[0.7rem] text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
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
                Request sent!
              </p>
              <p className="m-0 text-sm text-gray-500">
                We&apos;ll confirm the call by email shortly.
              </p>
            </div>
            <Button onClick={() => setStatus("idle")}>OK</Button>
          </Card>
        </div>
      )}
    </section>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="font-sans text-sm font-semibold text-body">
        {label}
      </label>
      {children}
      {error && (
        <p className="m-0 text-left text-[0.7rem] text-red-400">{error}</p>
      )}
    </div>
  );
}
