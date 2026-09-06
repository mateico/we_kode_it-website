'use client';
import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export function Button({ variant = 'primary', children, disabled, onClick, style }: ButtonProps) {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '24px',
    padding: '12px 28px',
    borderRadius: 'var(--radius-pill)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color .15s ease, border-color .15s ease',
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: 'var(--action-primary)', color: 'var(--color-background)' },
    secondary: { background: 'var(--action-secondary-bg)', color: 'var(--action-secondary-text)', borderColor: 'var(--action-secondary-border)' },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => { if (disabled) return; e.currentTarget.style.background = variant === 'primary' ? 'var(--action-primary-hover)' : 'var(--action-secondary-hover-bg)'; }}
      onMouseLeave={(e) => { if (disabled) return; e.currentTarget.style.background = variant === 'primary' ? 'var(--action-primary)' : 'var(--action-secondary-bg)'; }}
      onMouseDown={(e) => { if (disabled) return; e.currentTarget.style.background = variant === 'primary' ? 'var(--action-primary-pressed)' : 'var(--action-secondary-pressed-bg)'; }}
    >
      {children}
    </button>
  );
}
