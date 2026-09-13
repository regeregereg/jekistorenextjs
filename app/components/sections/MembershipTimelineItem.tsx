'use client';

import { useReveal } from '@/app/hooks/useReveal';
import type { MembershipFeature } from '@/types';
import { MembershipVisual } from './MembershipVisuals';

/**
 * Satu baris milestone di timeline "Apa yang akan kamu dapatkan?" (gaya
 * timeline perjalanan ala referensi: nomor bulat di rel kiri, angka besar,
 * judul, deskripsi, lalu mockup visual sebagai "foto"-nya). Nomor & seluruh
 * konten baru menyala/masuk saat elemen ini terlihat di viewport, dipakai
 * bareng garis rel yang terisi progresif di MembershipTimeline.tsx supaya
 * scroll terasa hidup, bukan cuma fade-in statis.
 */
export function MembershipTimelineItem({
  feature,
  index,
}: {
  feature: MembershipFeature;
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className={`member-item${isVisible ? ' in' : ''}`}>
      <span className={`member-node${isVisible ? ' active' : ''}`}>{feature.number}</span>
      <div className="member-content" style={{ transitionDelay: `${index * 0.05}s` }}>
        <div className="member-big-num text-impact" aria-hidden="true">
          {feature.number}
        </div>
        <div className="member-title">{feature.title}</div>
        <p className="member-desc">{feature.description}</p>
        <MembershipVisual id={feature.visual} />
      </div>
    </div>
  );
}
