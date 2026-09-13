'use client';

import { useEffect, useRef } from 'react';

/**
 * Garis tipis putih di paling atas layar yang menandakan sudah sejauh mana
 * halaman ini di-scroll (0% di awal, 100% pas sampai bawah). Diupdate lewat
 * scroll listener + requestAnimationFrame (bukan re-render React per
 * scroll event) supaya tetap mulus dan ringan - lebar batang diatur
 * langsung ke DOM lewat ref, sama seperti pendekatan MembershipTimeline.
 */
export function ScrollProgressBar() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    function update() {
      rafId = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      if (fillRef.current) {
        fillRef.current.style.width = `${Math.min(100, Math.max(0, pct))}%`;
      }
    }

    function onScrollOrResize() {
      if (rafId === null) rafId = requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-fill" ref={fillRef} />
    </div>
  );
}
