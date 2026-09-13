'use client';

import type { CSSProperties, ElementType, ReactNode, Ref } from 'react';
import { useReveal } from '@/app/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number; // detik, untuk efek stagger antar-elemen (mis. daftar kartu)
}

/** Bungkus elemen apa pun supaya fade-and-slide-up saat masuk viewport. */
export function Reveal({ children, as: Tag = 'div', className = '', style, delay }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`reveal${isVisible ? ' in' : ''}${className ? ` ${className}` : ''}`}
      style={delay !== undefined ? { ...style, transitionDelay: `${delay}s` } : style}
    >
      {children}
    </Tag>
  );
}
