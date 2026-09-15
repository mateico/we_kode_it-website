"use client";
import React from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useNeedEmailForm() {
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

  return {
    need,
    setNeed,
    email,
    setEmail,
    errors,
    status,
    setStatus,
    handleSubmit,
  };
}
