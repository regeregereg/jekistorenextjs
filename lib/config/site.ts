import type { SiteConfig } from '@/types';

/**
 * Konfigurasi pusat seluruh situs.
 *
 * Ini SATU-SATUNYA tempat untuk mengubah nomor WhatsApp, harga, jam
 * operasional, link sosial media, dsb. Semua komponen & JSON-LD membaca
 * dari sini, jadi kalau nanti ada perubahan bisnis (harga naik, ganti nomor,
 * tambah channel pembayaran) cukup ubah di satu file ini.
 *
 * Nilai yang sifatnya environment-specific (nomor WA, domain) diambil dari
 * environment variable dulu (lihat .env.example), dengan fallback ke nilai
 * asli situs supaya tetap jalan out-of-the-box.
 */
export const siteConfig: SiteConfig = {
  name: 'Jeki Store',
  brandMark: 'J',
  legalName: 'Jeki Store',
  description:
    'TradingView Premium Rp 195.000/bulan di Jeki Store. Replay Mode semua timeframe, indikator tak terbatas, alert realtime. Proses cepat, garansi aktif.',
  tagline: 'Reseller TradingView Premium terpercaya di Indonesia sejak Maret 2025.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jekistore.com',
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6283119686482').replace(/\D/g, ''),
  price: {
    amount: 195000,
    compareAtAmount: 600000,
    currency: 'IDR',
    period: 'bulan',
  },
  operatingHours: {
    openTime: '08:00',
    closeTime: '22:00',
    timezone: 'WIB',
  },
  foundedISODate: '2025-03-01',
  rating: { value: 4.9, count: 50 },
  social: {
    whatsapp: 'https://wa.me/6283119686482',
    instagram: 'https://www.instagram.com/clipjekistore',
    tiktok: 'https://www.tiktok.com/@jekistore.com',
    youtube: 'https://www.youtube.com/@jekistorecom',
    threads: 'https://www.threads.com/@jekistorecom',
  },
  mapUrl: 'https://maps.app.goo.gl/Cc3kD7rStS1efY7X6',
  keywords: [
    'tradingview premium murah indonesia',
    'beli tradingview premium',
    'tradingview premium reseller indonesia',
    'jeki store tradingview',
    'harga tradingview premium indonesia',
  ],
  ogImagePath: '/asset/og-image.jpg',
};

/** Link wa.me yang sudah diformat dari nomor di atas. */
export const whatsappBaseUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
