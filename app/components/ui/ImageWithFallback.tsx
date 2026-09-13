'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  /** Teks singkat yang tampil kalau file gambar belum ada / gagal dimuat. */
  fallbackLabel?: string;
  fallbackClassName?: string;
}

/**
 * Pembungkus next/image yang otomatis menampilkan placeholder ramah kalau
 * asetnya belum ada (mis. foto testimoni yang belum di-upload ke /public).
 * Dipakai di semua tempat yang menampilkan foto dari data eksternal
 * (Hero, TestimonialSpotlight, grid testimoni) supaya logic fallback-nya
 * satu tempat saja, bukan diulang di tiap komponen.
 */
export function ImageWithFallback({
  fallbackLabel = 'Gambar belum tersedia',
  fallbackClassName = 'image-fallback',
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={fallbackClassName}>
        <ImageIcon size={20} />
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      unoptimized
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
