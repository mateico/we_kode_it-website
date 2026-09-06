'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export function Hero() {
  const [need, setNeed] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <section className="hero" style={{ background: 'var(--color-surface-green-soft)', padding: '60px 0 60px' }}>
      <div className="hero-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-32)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gutter)' }}>
        <Card className="hero-card" padding="80px 64px" style={{ gridColumn: '2 / span 10' }}>
          <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 64 }}>
            <h1 className="hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-lg-size)', lineHeight: 'var(--text-heading-lg-line)', fontWeight: 700, color: 'var(--text-body)', margin: 0 }}>
              Custom software,<br />build <span style={{ textDecoration: 'underline' }}>around you</span>.
            </h1>
            <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-heading-md-size)', lineHeight: 'var(--text-heading-md-line)', color: 'var(--text-muted)', maxWidth: 560, margin: 0 }}>
              Direct communication, and a free prototype before you commit to anything.
            </p>
            <form className="hero-form" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', width: '100%', maxWidth: 420 }} onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Tell us what you need..." multiline value={need} onChange={(e) => setNeed(e.target.value)} />
              <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Button variant="primary" style={{ width: '100%' }}>See What&apos;s Possible</Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
