'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GradientButton } from '@/app/components/ui/GradientButton';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { siteConfig, whatsappBaseUrl } from '@/lib/config/site';

const navLinks = [
  { href: '#membership', label: 'Langganan' },
  { href: '#method', label: 'Method' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Kunci scroll body & tutup panel otomatis kalau layar dibesarkan ke desktop.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <span className="nav-mark">{siteConfig.brandMark}</span>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Kontak + Order hanya tampil di desktop (nav-links teks sudah
            cukup di sana). Di mobile, keduanya digantikan oleh tombol teks
            "JEKI TV 195k" di bawah - lihat .nav-actions-desktop &
            .nav-jeki-toggle di globals.css. */}
        <div className="nav-actions-desktop">
          <Link href={whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="nav-pill">
            Kontak
          </Link>
          <GradientButton href="#order" size="sm">
            Order
          </GradientButton>
        </div>

        {/* Tombol ini menggantikan ikon hamburger + Kontak/Order di mobile:
            teksnya "JEKI TV 195k", tapi tetap berfungsi membuka panel menu
            (Langganan/Method/FAQ/WA) supaya navigasi mobile tidak hilang. */}
        <button
          className="nav-jeki-toggle"
          aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={mobileOpen}
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          JEKI TV 195k
        </button>
      </nav>

      {/* Panel menu mobile: overlay + slide-down, terpisah dari .nav supaya
          tidak ikut membesarkan pill nav saat dibuka. */}
      <div className={`nav-mobile-backdrop${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`nav-mobile-panel${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href={whatsappBaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-mobile-wa"
          onClick={() => setMobileOpen(false)}
        >
          <WhatsAppIcon size={16} />
          Chat Admin
        </a>
      </div>
    </div>
  );
}
