/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TECH_LOGOS = [
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'React Native', slug: 'react' },
  { name: 'Cloudflare', slug: 'cloudflare' },
  { name: 'Android', slug: 'android' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Claude', slug: 'anthropic' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Docker', slug: 'docker' },
];

export function TechStack() {
  const track = [...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <section style={{ background: 'var(--bg-page)', padding: '28px 0 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-32)', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)', maskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 64, width: 'max-content', animation: 'techScroll 30s linear infinite' }}>
          {track.map((logo, i) => (
            <div key={logo.slug + i} style={{ width: 100, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}`}
                alt={logo.name}
                title={logo.name}
                style={{ height: 28, width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
