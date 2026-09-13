'use client';

import { useRef, useState } from 'react';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { spotlightTestimonials, founderStory } from '@/lib/data/testimonials';
import { siteConfig } from '@/lib/config/site';

/**
 * Slider testimoni "spotlight": satu kartu besar tampil penuh, digeser
 * (swipe) untuk pindah ke testimoni berikutnya - nama, tanggal, dan pesan
 * ikut berganti bersama fotonya. Dibangun dengan CSS scroll-snap native
 * (bukan library carousel) supaya ringan dan swipe di HP langsung jalan
 * tanpa JS tambahan; JS di sini hanya untuk menyinkronkan titik indikator.
 */
export function TestimonialSpotlight() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const rafRef = useRef<number | null>(null);

  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setActive(Math.min(spotlightTestimonials.length - 1, Math.max(0, index)));
    });
  }

  function goTo(index: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
  }

  return (
    <section className="spotlight" aria-label="Testimoni pelanggan">
      <div className="container spotlight-head">
        <h2 className="spotlight-heading">Kata mereka yang merasa terbantu dengan jasa yang kita sediakan.</h2>
      </div>

      <div className="container">
        {/* .spotlight-frame adalah "kotak" tetap (border, rounded corner,
            posisi) yang tidak ikut bergeser - hanya isi di dalamnya
            (.spotlight-track) yang di-scroll horizontal saat swipe, supaya
            terasa seperti satu kotak yang kontennya berganti, bukan
            beberapa kotak terpisah yang bergeser. */}
        <div className="spotlight-frame">
          <div
            className="spotlight-track"
            ref={trackRef}
            onScroll={handleScroll}
            role="group"
            aria-roledescription="carousel"
          >
            {spotlightTestimonials.map((t, i) => (
              <article
                className="spotlight-slide"
                key={t.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimoni ${i + 1} dari ${spotlightTestimonials.length}`}
              >
                <span className="spotlight-tag">{t.customerName}</span>
                <div className="spotlight-photo-wrap">
                  <ImageWithFallback
                    src={t.image}
                    alt={`Testimoni dari ${t.customerName}`}
                    fill
                    sizes="(min-width: 761px) 480px, 90vw"
                    fallbackLabel="Foto testimoni belum diunggah"
                    fallbackClassName="spotlight-photo-fallback"
                    className="spotlight-photo"
                  />
                </div>
                <div className="spotlight-caption">
                  <div className="spotlight-date">{t.dateYear}</div>
                  <p className="spotlight-message">{t.message}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {spotlightTestimonials.length > 1 ? (
          <div className="spotlight-dots" role="tablist" aria-label="Pilih testimoni">
            {spotlightTestimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Lihat testimoni ${t.customerName}`}
                className={`spotlight-dot${active === i ? ' active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="container spotlight-story">
        {founderStory.map((paragraph, pIndex) => (
          <p key={pIndex}>
            {paragraph.map((seg, sIndex) =>
              seg.bold ? <b key={sIndex}>{seg.text}</b> : <span key={sIndex}>{seg.text}</span>,
            )}
          </p>
        ))}
      </div>

      <div className="spotlight-watermark text-impact" aria-hidden="true">
        {siteConfig.name.replace(/\s+/g, '')}
      </div>
    </section>
  );
}
