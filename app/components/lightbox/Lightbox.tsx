'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLightbox } from './LightboxProvider';

/** Modal pratinjau gambar, dipicu lewat useLightbox().open(src, alt). */
export function Lightbox() {
  const { state, close } = useLightbox();

  useEffect(() => {
    if (!state) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [state, close]);

  return (
    <div
      className={`lightbox${state ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Pratinjau foto testimoni"
      aria-hidden={!state}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button className="lightbox-close" onClick={close} aria-label="Tutup pratinjau" type="button">
        <X size={20} strokeWidth={2.25} />
      </button>
      {state ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="lightbox-img" src={state.src} alt={state.alt} />
      ) : null}
    </div>
  );
}
