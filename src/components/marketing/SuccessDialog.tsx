"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function SuccessDialog({ onClose }: { onClose: () => void }) {
  return (
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
            I&apos;ll be in touch soon.
          </p>
        </div>
        <Button onClick={onClose}>OK</Button>
      </Card>
    </div>
  );
}
