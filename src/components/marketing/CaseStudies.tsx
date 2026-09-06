import React from 'react';
import { Card } from '@/components/ui/Card';

type Study = {
  title: string;
  imageFirst: boolean;
  accent: string;
  paragraphs: string[];
};

const STUDIES: Study[] = [
  {
    title: 'First CRM',
    imageFirst: true,
    accent: '#2F6FED',
    paragraphs: [
      'A field-service company was running quotes, jobs, and invoicing across three disconnected spreadsheets. We spent the first two weeks shadowing their dispatchers before writing any code.',
      'The prototype became the product: a lightweight CRM tracking every job from lead to invoice, built around how their team already worked instead of forcing a new process on them.',
    ],
  },
  {
    title: 'First CRM',
    imageFirst: false,
    accent: '#E8590C',
    paragraphs: [
      'A multi-location retailer needed one system to see inventory and staff scheduling across every store, replacing a mix of paper logs and a shared spreadsheet.',
      'We shipped store-by-store, starting with the busiest location, so the team was never without a working system while we rolled the rest out.',
    ],
  },
];

function CaseStudyCard({ study }: { study: Study }) {
  const image = <div style={{ flex: '0 0 40%', minHeight: 220, background: study.accent, opacity: 0.85, borderRadius: 'var(--radius-md)' }} />;
  const text = (
    <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-body)' }}>{study.title}</h3>
      {study.paragraphs.map((p, i) => (
        <p key={i} style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-size)', lineHeight: 'var(--text-body-line)', color: 'var(--text-muted)' }}>{p}</p>
      ))}
    </div>
  );
  return (
    <Card className="case-card" padding="var(--space-32)" style={{ display: 'flex', gap: 'var(--space-32)' }}>
      {study.imageFirst ? <>{image}{text}</> : <>{text}{image}</>}
    </Card>
  );
}

export function CaseStudies() {
  return (
    <section style={{ background: 'var(--surface-card)', padding: '0 0 96px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-32)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gutter)' }}>
        <h2 style={{ gridColumn: '1 / span 12', textAlign: 'center', fontSize: 28, fontWeight: 700, color: 'var(--text-body)', marginBottom: 'var(--space-24)' }}>Case Studies</h2>
        <div style={{ gridColumn: '1 / span 12', display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
          {STUDIES.map((s, i) => <CaseStudyCard key={i} study={s} />)}
        </div>
      </div>
    </section>
  );
}
