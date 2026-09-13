'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { GradientButton } from '@/app/components/ui/GradientButton';
import { siteConfig, whatsappBaseUrl } from '@/lib/config/site';

const navLinks = [
  { href: '#kenapa', label: 'Kenapa' },
  { href: '#membership', label: 'Langganan' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <span className="nav-mark">{siteConfig.brandMark}</span>
        <span className="nav-hamburger" aria-hidden="true">
          <Menu size={18} />
        </span>
        <div className="nav-links" style={mobileOpen ? { display: 'flex', position: 'absolute', top: '100%', left: 8, right: 8, background: 'var(--panel)', flexDirection: 'column', padding: 10, gap: 6, borderRadius: 16, border: '1px solid var(--line)', marginTop: 8 } : undefined}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
        <Link href={whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="nav-pill">
          Kontak
        </Link>
        <GradientButton href="#order" size="sm">
          Order
        </GradientButton>
        <button
          className="nav-toggle"
          aria-label="Buka menu"
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <Menu size={19} />
        </button>
      </nav>
    </div>
  );
}
