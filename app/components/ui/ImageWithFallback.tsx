'use client';

import Image, { type ImageProps } from 'next/image';
import { useState, type CSSProperties } from 'react';
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
 *
 * Gambar mulai transparan lalu fade-in begitu selesai dimuat (bukan
 * langsung "pop" muncul) - supaya proses loading terasa halus/disengaja,
 * bukan seperti gambar yang belum sempat kebuka. Wrapper-nya (aspect-ratio
 * / fill container) sudah reserve ruang sejak awal, jadi fade ini murni
 * kosmetik dan tidak menggeser layout apa pun.
 */
export function ImageWithFallback({
  fallbackLabel = 'Gambar belum tersedia',
  fallbackClassName = 'image-fallback',
  alt,
  className,
  style,
  onLoad,
  ...props
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div className={fallbackClassName}>
        <ImageIcon size={20} />
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  const fadeStyle: CSSProperties = {
    ...style,
    opacity: loaded ? 1 : 0,
    transition: 'opacity 0.45s ease',
  };

  return (
    <Image
      alt={alt}
      className={className}
      style={fadeStyle}
      onError={() => setFailed(true)}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      {...props}
    />
  );
}
