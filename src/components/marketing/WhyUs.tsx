import React from 'react';
import { Card } from '@/components/ui/Card';

const REASONS = [
  { text: 'Direct communication', icon: 'forum', accent: '#2F6FED' },
  { text: 'Free prototyping', icon: 'science', accent: '#E8590C' },
  { text: 'Custom-built, not templated', icon: 'tune', accent: '#7C3AED' },
  { text: 'One team, start to finish', icon: 'groups', accent: '#0F9D58' },
];

export function WhyUs() {
  return (
    <section style={{ background: 'var(--surface-card)', padding: '0 0 96px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-32)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gutter)' }}>
        <h2 style={{ gridColumn: '1 / span 12', textAlign: 'center', fontSize: 28, fontWeight: 700, color: 'var(--text-body)', marginBottom: 'var(--space-24)' }}>Why us</h2>
        <div className="whyus-col" style={{ gridColumn: '4 / span 6', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {REASONS.map((r) => (
            <Card key={r.text} padding="16px 20px" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)', borderRadius: '16px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: r.accent }}>{r.icon}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: 'var(--text-body)' }}>{r.text}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
