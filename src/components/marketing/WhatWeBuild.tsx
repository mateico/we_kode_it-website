import React from 'react';
import { Card } from '@/components/ui/Card';

const BUILDS = [
  { title: 'Websites', desc: 'Fast, modern sites that convert visitors into clients', accent: '#2F6FED', icon: 'language' },
  { title: 'Web Apps', desc: 'Custom tools built around your workflow', accent: '#E8590C', icon: 'apps' },
  { title: 'CRMs', desc: 'Manage clients, sales, and operations in one place', accent: '#7C3AED', icon: 'hub' },
  { title: 'Mobile', desc: 'Native Android & cross-platform apps with React Native', accent: '#0F9D58', icon: 'smartphone' },
];

export function WhatWeBuild() {
  return (
    <section style={{ background: 'var(--surface-card)', padding: '32px 0 96px' }}>
      <div className="section-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-32)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gutter)' }}>
        <h2 style={{ gridColumn: '1 / span 12', textAlign: 'center', fontSize: 28, fontWeight: 700, color: 'var(--text-body)', marginBottom: 'var(--space-24)' }}>What we build</h2>
        {BUILDS.map((b) => (
          <div key={b.title} className="build-card" style={{ gridColumn: 'span 3' }}>
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 26, color: b.accent }}>{b.icon}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-body)', margin: 0 }}>{b.title}</h3>
              </div>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-size)', lineHeight: 'var(--text-body-line)', color: 'var(--text-muted)' }}>{b.desc}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
