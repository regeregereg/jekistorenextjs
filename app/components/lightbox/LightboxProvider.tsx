'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface LightboxState {
  src: string;
  alt: string;
}

interface LightboxContextValue {
  state: LightboxState | null;
  open: (src: string, alt: string) => void;
  close: () => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

/**
 * Menggantikan window-level openLightbox()/closeLightbox() di HTML lama
 * dengan React context, supaya komponen mana pun (proof strip, grid
 * testimoni foto, dst) bisa memicu lightbox tanpa saling kenal satu sama
 * lain atau menyentuh DOM langsung.
 */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  const open = useCallback((src: string, alt: string) => setState({ src, alt }), []);
  const close = useCallback(() => setState(null), []);

  const value = useMemo(() => ({ state, open, close }), [state, open, close]);

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox harus dipakai di dalam <LightboxProvider>');
  return ctx;
}
