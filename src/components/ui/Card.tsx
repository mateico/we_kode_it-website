import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  style?: React.CSSProperties;
};

export function Card({ children, className, padding = 'var(--space-24)', style }: CardProps) {
  return (
    <div className={className} style={{ background: 'var(--surface-card-elevated)', border: 'none', borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow)', padding, ...style }}>
      {children}
    </div>
  );
}
