'use client';

import { useState } from 'react';
import { Reveal } from '@/app/components/ui/Reveal';
import { GradientButton } from '@/app/components/ui/GradientButton';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { useLightbox } from '@/app/components/lightbox/LightboxProvider';
import { testimonialPhotos, testimonialVideos, hiddenTestimonialCount } from '@/lib/data/testimonials';
import { genericWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

function TestimonialPhotoCard({ src, alt }: { src: string; alt: string }) {
  const { open } = useLightbox();

  return (
    <button type="button" className="testi-photo-card" onClick={() => open(src, alt)} aria-label={`Lihat ${alt}`}>
      <ImageWithFallback
        src={src}
        alt={alt}
        fill
        sizes="180px"
        loading="lazy"
        fallbackLabel="Foto Testi"
        fallbackClassName="testi-photo-fallback"
      />
    </button>
  );
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visiblePhotos = showAll ? testimonialPhotos : testimonialPhotos.filter((p) => !p.extra);

  return (
    <section className="section boxed">
      <Reveal className="boxed-panel">
        <div className="eyebrow">Bukti Nyata</div>
        <h2>
          Testimoni Asli
          <br />
          dari Pelanggan
        </h2>
        <p className="lede">Bukan kata-kata kami. Ini foto dan video langsung dari pelanggan Jeki Store.</p>

        <div className="testi-photo-grid">
          {visiblePhotos.map((photo) => (
            <TestimonialPhotoCard key={photo.id} src={photo.src} alt={photo.alt} />
          ))}
        </div>

        {!showAll ? (
          <div className="testi-show-more-row">
            <GradientButton
              href="#"
              variant="ghost"
              onClick={() => {
                trackEvent('testimonial_expand');
                setShowAll(true);
              }}
            >
              Lihat {hiddenTestimonialCount} Testimoni Lainnya
            </GradientButton>
          </div>
        ) : null}

        <div className="testi-video-grid">
          {testimonialVideos.map((video) => (
            <div className="testi-video-card" key={video.src}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video src={video.src} controls playsInline preload="metadata" />
              <div className="testi-video-caption">
                <div className="testi-video-stars">★★★★★</div>
                <p className="testi-video-quote">&ldquo;{video.quote}&rdquo;</p>
                <div className="testi-video-name">{video.name}</div>
                <div className="testi-video-role">{video.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-cta-row">
          <GradientButton
            href={`${genericWhatsAppUrl}?text=${encodeURIComponent('Halo kak, saya mau kirim testimoni untuk Jeki Store 😊')}`}
            variant="ghost"
            external
          >
            Kirim Testimoni Kamu
          </GradientButton>
        </div>
      </Reveal>
    </section>
  );
}
