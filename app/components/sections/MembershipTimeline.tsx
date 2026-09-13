'use client';

import { useEffect, useRef, useState } from 'react';
import type { MembershipFeature } from '@/types';
import { MembershipTimelineItem } from './MembershipTimelineItem';

/**
 * Garis rel vertikal di belakang nomor-nomor milestone ini "terisi" naik
 * mengikuti posisi scroll (bukan statis) - efeknya garis putih terang naik
 * pelan-pelan seiring user scroll ke bawah, meniru gaya timeline milestone
 * (referensi: halaman "Perjalanan" ala Timothy Ronald). Dihitung manual
 * lewat scroll listener + requestAnimationFrame, tanpa library animasi,
 * biar tetap ringan dan konsisten dengan pendekatan .reveal yang sudah ada.
 */
export function MembershipTimeline({ features }: { features: MembershipFeature[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    let rafId: number | null = null;

    function update() {
      rafId = null;
      const node = railRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Garis mulai terisi saat bagian atas rel masuk ~80% tinggi layar,
      // dan penuh saat bagian bawah rel mencapai ~35% tinggi layar.
      const startLine = viewportH * 0.8;
      const endLine = viewportH * 0.35;
      const total = rect.height + (startLine - endLine);
      const traveled = startLine - rect.top;
      const pct = total > 0 ? traveled / total : 0;
      setProgress(Math.min(1, Math.max(0, pct)));
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
    <div className="member-timeline" ref={railRef}>
      <div className="member-rail-track" aria-hidden="true">
        <div className="member-rail-fill" style={{ height: `${progress * 100}%` }} />
      </div>
      {features.map((feature, i) => (
        <MembershipTimelineItem key={feature.id} feature={feature} index={i} />
      ))}
    </div>
  );
}
