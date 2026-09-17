import React from "react";

type CardProps = {
  children: React.ReactNode;
  /**
   * Utility classes from the call site. Always pass your own padding
   * (e.g. "p-6", "p-8") — Card doesn't set one so call sites stay in control.
   */
  className?: string;
  id?: string;
};

export function Card({ children, className = "", id }: CardProps) {
  return (
    <div id={id} className={`bg-card rounded-card shadow-card ${className}`}>
      {children}
    </div>
  );
}
