'use client';

import Link from 'next/link';
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'default' | 'ghost';
  size?: 'default' | 'sm';
  external?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'aria-label'>;

/**
 * Tombol CTA gradient-border yang dipakai berulang kali di seluruh halaman
 * (hero, membership, fit-filter, closing, dst). Disatukan jadi satu
 * komponen supaya markup gradient/glass tidak perlu ditulis ulang setiap
 * kali seperti di HTML asli.
 */
export function GradientButton({
  href,
  children,
  variant = 'default',
  size = 'default',
  external = false,
  onClick,
  ...rest
}: GradientButtonProps) {
  const isHash = href.startsWith('#');
  const containerClass = `btn-container${variant === 'ghost' ? ' ghost' : ''}${size === 'sm' ? ' sm' : ''}`;
  const textClass = `glass-button-text${size === 'sm' ? ' sm' : ''}`;

  const content = (
    <span className="gradient-border-wrap">
      <span className="glass-button">
        <span className={textClass}>{children}</span>
      </span>
    </span>
  );

  if (isHash) {
    return (
      <a
        href={href}
        className={containerClass}
        onClick={(e) => {
          if (href === '#') e.preventDefault();
          onClick?.(e);
        }}
        {...rest}
      >
        {content}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={containerClass} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={containerClass} onClick={onClick} {...rest}>
      {content}
    </Link>
  );
}
