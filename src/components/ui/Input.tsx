"use client";
import React from "react";

type InputProps = {
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className?: string;
};

// hover + focus states are plain Tailwind now — no JS needed
const cls =
  "w-full rounded-lg border-[1.5px] border-line bg-white px-4 py-3 text-base leading-6 text-body outline-none transition-colors hover:bg-surface focus:bg-surface focus:border-primary";

export function Input({
  placeholder,
  type = "text",
  multiline,
  value,
  onChange,
  className = "",
}: InputProps) {
  if (multiline) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={1}
        className={`${cls} resize-y ${className}`}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${cls} ${className}`}
    />
  );
}
