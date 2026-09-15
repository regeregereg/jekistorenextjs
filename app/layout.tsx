import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { AppProviders } from '@/app/providers/AppProviders';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { SkipLink } from '@/app/components/layout/SkipLink';
import { ScrollProgressBar } from '@/app/components/layout/ScrollProgressBar';
import { siteConfig } from '@/lib/config/site';

// Font di-self-host, tidak ada satu pun yang memanggil Google Fonts saat
// runtime/build - build tidak bisa gagal gara-gara jaringan (lihat catatan
// migrasi sebelumnya soal ini).
//
// Semua font (General Sans, Anton, JetBrains Mono) dimuat lewat
// next/font/local dari file yang sudah ada di app/fonts/ - Next.js otomatis
// preload + men-generate fallback font dengan metrik yang disamakan
// (adjustFontFallback), jadi teks besar (headline hero, watermark, harga)
// tidak lagi "kedip"/kosong sesaat di kunjungan pertama seperti waktu masih
// dimuat lewat CSS import biasa (@fontsource).
import './globals.css';

const generalSans = localFont({
  src: [
    { path: './fonts/GeneralSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/GeneralSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-general-sans',
  display: 'swap',
});

const anton = localFont({
  src: './fonts/Anton-Regular.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-anton',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: [
    { path: './fonts/JetBrainsMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/JetBrainsMono-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/JetBrainsMono-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B0C0E',
};

const title = `TradingView Premium ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(siteConfig.price.amount)}/${siteConfig.price.period} — ${siteConfig.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: { 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: { id: siteConfig.url, 'x-default': siteConfig.url },
  },
  icons: {
    icon: [
      { url: '/asset/favicon.ico' },
      { url: '/asset/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/asset/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title,
    description:
      'Akses penuh TradingView Premium: Replay Mode semua timeframe, indikator tak terbatas, alert realtime. Harga terjangkau, proses <1 jam, garansi aktif.',
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630 }],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'Akses penuh TradingView Premium harga terjangkau. Proses <1 jam, garansi aktif. Order via WhatsApp.',
    images: [siteConfig.ogImagePath],
  },
  other: {
    'geo.region': 'ID',
    'geo.country': 'ID',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${generalSans.variable} ${anton.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>
        <ScrollProgressBar />
        <SkipLink />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
