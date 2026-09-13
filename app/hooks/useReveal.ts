'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Menggantikan IntersectionObserver global di HTML lama (yang mengamati
 * semua `.reveal` sekaligus lewat querySelectorAll) dengan hook per-elemen.
 * Menghormati prefers-reduced-motion: elemen langsung tampil tanpa animasi
 * kalau user mengaktifkan pengaturan tersebut.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setIsVisible(entry.isIntersecting);
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
