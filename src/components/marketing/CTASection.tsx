'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

type CTASectionProps = {
  heading?: string;
  footNote?: boolean;
  compact?: boolean;
};

export function CTASection({ heading, footNote, compact }: CTASectionProps) {
  const [need, setNeed] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <section style={{ background: 'var(--bg-page)', padding: compact ? '0 0 56px' : heading ? '0 0 96px' : '0 0 80px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-32)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gutter)' }}>
        <div className="cta-col" style={{ gridColumn: '4 / span 6', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: compact ? 'var(--space-16)' : 'var(--space-24)' }}>
          {heading && <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-body)' }}>{heading}</h2>}
          <form style={{ display: 'flex', flexDirection: 'column', gap: compact ? 'var(--space-8)' : 'var(--space-16)', width: '100%', maxWidth: compact ? 340 : 420 }} onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Tell us what you need..." multiline value={need} onChange={(e) => setNeed(e.target.value)} />
            <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button variant="primary" style={compact ? { width: '100%', padding: '8px 16px', fontSize: 13 } : { width: '100%' }}>See What&apos;s Possible</Button>
          </form>
          {footNote && (
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-size)', color: 'var(--text-muted)', display: 'flex', gap: 8, alignItems: 'center' }}>
              Prefer to talk first?
              <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Book a call →</a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
