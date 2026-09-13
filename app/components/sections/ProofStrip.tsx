'use client';

import Image from 'next/image';
import { proofStripPhotos } from '@/lib/data/testimonials';
import { useLightbox } from '@/app/components/lightbox/LightboxProvider';

/**
 * Marquee foto bukti testimoni di bawah hero. Track digandakan dua kali
 * (bukan datanya, hanya render-nya) supaya animasi scroll infinite mulus -
 * setara dengan trik CSS `translateX(-50%)` di versi HTML asli.
 */
export function ProofStrip() {
  const { open } = useLightbox();
  const track = [...proofStripPhotos, ...proofStripPhotos];

  return (
    <section className="proof-strip" aria-label="Bukti testimoni pelanggan">
      <div className="container">
        <p className="proof-strip-label">
          Dipercaya <b>50+ pelanggan</b>, termasuk yang berlangganan ulang
        </p>
        <div className="proof-track-wrap">
          <div className="proof-track">
            {track.map((photo, i) => (
              <button
                key={`${photo.id}-${i}`}
                type="button"
                className="proof-thumb"
                onClick={() => open(photo.src, photo.alt)}
                aria-label={`Lihat ${photo.alt}`}
              >
                <Image src={photo.src} alt={photo.alt} width={76} height={76} loading="lazy" unoptimized />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
