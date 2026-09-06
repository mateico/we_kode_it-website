import React from 'react';

const LINKS = ['Web', 'Web Apps', 'CRMs', 'Mobile', 'About Us', 'Case Studies', 'Contact', 'Careers'];

export function Footer() {
  return (
    <footer style={{ background: 'var(--surface-card)' }}>
      <div className="footer-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-48) var(--space-32)', display: 'flex', justifyContent: 'space-between', gap: 'var(--space-32)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text-body)' }}>WeKodeit</span>
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--space-8)', textAlign: 'right' }}>
          {LINKS.map((l) => (
            <a key={l} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none' }}>{l}</a>
          ))}
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 'var(--space-8)' }}>Esp | Eng</span>
        </nav>
      </div>
    </footer>
  );
}
