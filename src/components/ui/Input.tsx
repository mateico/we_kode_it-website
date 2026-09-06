'use client';
import React from 'react';

type InputProps = {
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
};

export function Input({ placeholder, type = 'text', multiline, value, onChange, style }: InputProps) {
  const [hover, setHover] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const active = hover || focused;
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: '24px',
    color: 'var(--text-body)',
    background: active ? 'var(--surface-card)' : 'var(--color-background)',
    border: '1.5px solid var(--border-default)',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    transition: 'background-color .15s ease, border-color .15s ease',
  };
  const composed: React.CSSProperties = { ...base, resize: multiline ? 'vertical' : undefined, ...style };

  if (multiline) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={3}
        style={composed}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={(e) => { setFocused(true); e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
        onBlur={(e) => { setFocused(false); e.currentTarget.style.borderColor = 'var(--border-default)'; }}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={composed}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={(e) => { setFocused(true); e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
      onBlur={(e) => { setFocused(false); e.currentTarget.style.borderColor = 'var(--border-default)'; }}
    />
  );
}
