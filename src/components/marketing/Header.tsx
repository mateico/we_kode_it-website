'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  const navLink: React.CSSProperties = { fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-block', transition: 'color .15s ease, transform .15s ease' };
  const links: [string, string][] = [['Web', '#'], ['CRM', '#'], ['Mobile', '#'], ['About Us', '#']];
  return (
    <div className="header-sticky" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '10px var(--space-32) 0' }}>
      <header className="site-header" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '6px 16px', borderRadius: 'var(--radius-pill)', border: scrolled ? '1px solid var(--border-default)' : '1px solid transparent', background: scrolled ? 'var(--bg-page)' : 'transparent', boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,.06)' : 'none', transition: 'background-color .25s ease, border-color .25s ease, box-shadow .25s ease', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: 6, justifySelf: 'start' }}>
          <img src="/logo-mark.svg" alt="" style={{ height: 17, display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, lineHeight: 1, color: 'var(--text-body)' }}>WeKodeit</span>
        </div>
        <nav className="header-nav" style={{ display: 'flex', gap: 28, justifySelf: 'center' }}>
          {links.map(([label]) => <a key={label} href="#" className="nav-link" style={navLink}>{label}</a>)}
        </nav>
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: 10, justifySelf: 'end', flexWrap: 'nowrap' }}>
          <Button variant="primary" style={{ padding: '6px 16px', fontSize: 13, lineHeight: '18px', whiteSpace: 'nowrap' }}>Book a call</Button>
          <button className="menu-toggle" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)} style={{ width: 28, height: 20, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: menuOpen ? 9 : 2, width: 20, height: 2, background: 'var(--text-body)', transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'top .2s ease, transform .2s ease' }} />
            <span style={{ position: 'absolute', left: 0, top: menuOpen ? 9 : 16, width: 20, height: 2, background: 'var(--text-body)', transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'top .2s ease, transform .2s ease' }} />
          </button>
        </div>
        <nav className="mobile-nav-panel" style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 8, background: 'var(--bg-page)', border: menuOpen ? '1px solid var(--border-default)' : '1px solid transparent', borderRadius: 'var(--radius-md)', boxShadow: menuOpen ? '0 8px 24px rgba(0,0,0,.08)' : 'none', display: 'flex', flexDirection: 'column', padding: menuOpen ? 8 : '0 8px', maxHeight: menuOpen ? 260 : 0, opacity: menuOpen ? 1 : 0, overflow: 'hidden', transition: 'max-height .25s ease, opacity .2s ease, padding .25s ease' }}>
          {links.map(([label]) => <a key={label} href="#" style={{ ...navLink, fontSize: 15, padding: '12px 12px', color: 'var(--text-body)' }}>{label}</a>)}
        </nav>
      </header>
    </div>
  );
}
