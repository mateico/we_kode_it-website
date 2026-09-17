"use client";

import React from "react";
import Image from "next/image";

export function WorkImageCarousel({
  images,
  accent,
  title,
  priority = false,
}: {
  images: [string, string];
  accent: string;
  title: string;
  priority?: boolean;
}) {
  const [index, setIndex] = React.useState(0);
  const [revealed, setRevealed] = React.useState(false);
  const count = images.length;
  const touchStartX = React.useRef<number | null>(null);

  const go = (
    e: React.MouseEvent<HTMLButtonElement>,
    next: (i: number) => number,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(next);
    setRevealed(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || count < 2) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (delta > threshold) {
      setIndex((i) => (i === 0 ? count - 1 : i - 1));
      setRevealed(true);
    } else if (delta < -threshold) {
      setIndex((i) => (i + 1) % count);
      setRevealed(true);
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative min-h-[220px] shrink-0 grow-0 basis-2/5 overflow-hidden rounded-2xl max-sm:basis-auto"
      onClick={(e) => e.preventDefault()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          width: `${count * 100}%`,
          transform: `translateX(-${index * (100 / count)}%)`,
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative h-full min-h-[220px] shrink-0"
            style={{ width: `${100 / count}%` }}
          >
            <Image
              src={src}
              alt={`${title} — screenshot ${i + 1}`}
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              priority={priority && i === 0}
              className={`object-cover object-top grayscale transition-[filter] duration-500 group-hover:grayscale-0 ${revealed ? "grayscale-0" : ""}`}
            />
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-0 ${revealed ? "opacity-0" : ""}`}
              style={{ background: accent }}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => go(e, (i) => (i === 0 ? count - 1 : i - 1))}
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-body opacity-0 transition-opacity duration-200 group-hover:opacity-100 max-sm:h-9 max-sm:w-9 max-sm:text-lg max-sm:opacity-100"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => go(e, (i) => (i + 1) % count)}
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-body opacity-0 transition-opacity duration-200 group-hover:opacity-100 max-sm:h-9 max-sm:w-9 max-sm:text-lg max-sm:opacity-100"
          >
            ›
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
