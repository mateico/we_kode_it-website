import React from 'react';
import { Card } from '@/components/ui/Card';

const ARROW_COLORS = ['#2F6FED', '#E8590C', '#7C3AED', '#0F9D58'];
const STEPS = [
  { title: 'Step 1 — Tell Us About Your Needs', desc: "We start with a conversation, not a contract. We dig into what you're trying to solve, your constraints, and what success looks like for you." },
  { title: 'Step 2 — Free Working Prototype', desc: 'Before quoting a price, we build a small working prototype to explore the right technology for your specific problem. This prototype is throwaway by design — its only job is to prove the solution works and give us (and you) a real basis for estimating cost and timeline.' },
  { title: 'Step 3 — UI/UX Design in Figma', desc: "Once we've validated the approach, we design the actual product: wireframes, a design system, and the full look and feel of your solution. You see and approve the interface before a single line of production code is written." },
  { title: 'Step 4 — Incremental Development', desc: 'We build the real project in stages, so you can adopt it gradually within your organization instead of one risky big-bang launch. You see progress continuously, not just at the end.' },
  { title: 'Step 5 — Launch & Ongoing Maintenance', desc: 'Once launched, we stay on to support, fix, and evolve the product as your needs change.' },
];

export function HowWeWork() {
  return (
    <section style={{ background: 'var(--surface-card)', padding: '32px 0 96px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-32)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gutter)' }}>
        <h2 className="hww-heading" style={{ gridColumn: '1 / span 12', textAlign: 'center', fontSize: 28, fontWeight: 700, color: 'var(--text-body)', marginBottom: 'var(--space-24)' }}>How we work</h2>
        <div className="hww-steps" style={{ gridColumn: '4 / span 6', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          {STEPS.map((s, i) => (
            <React.Fragment key={s.title}>
              <Card style={{ width: '100%' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-body)', marginBottom: 'var(--space-8)' }}>{s.title}</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-size)', lineHeight: 'var(--text-body-line)', color: 'var(--text-muted)' }}>{s.desc}</p>
              </Card>
              {i < STEPS.length - 1 && <span style={{ padding: 'var(--space-8) 0', fontSize: 22, color: ARROW_COLORS[i % ARROW_COLORS.length], fontWeight: 700 }}>↓</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
