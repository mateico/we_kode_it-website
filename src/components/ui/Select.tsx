"use client";
import React from "react";

type SelectProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children: React.ReactNode;
};

const cls =
  "w-full rounded-lg border-[1.5px] border-line bg-white px-4 py-3 text-base leading-6 text-body outline-none transition-colors hover:bg-surface focus:bg-surface focus:border-primary";

export function Select({
  value,
  onChange,
  className = "",
  children,
}: SelectProps) {
  return (
    <select value={value} onChange={onChange} className={`${cls} ${className}`}>
      {children}
    </select>
  );
}
