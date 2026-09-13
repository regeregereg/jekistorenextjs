import type { Metadata, Viewport } from 'next';
import { AppProviders } from '@/app/providers/AppProviders';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { SkipLink } from '@/app/components/layout/SkipLink';
import { siteConfig } from '@/lib/config/site';

// Font di-self-host lewat Fontsource (bukan next/font/google) supaya build
// tidak pernah bergantung pada koneksi ke Google Fonts saat itu juga -
// penting untuk CI/CD atau lingkungan tanpa akses internet penuh. File
// font ikut ter-bundle di dalam proyek, nama family didaftarkan otomatis
// lewat @font-face di CSS masing-masing paket, dan dipetakan ke variabel
// --font-display / --font-body / --font-mono di globals.css.
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/600.css';
import './globals.css';

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
    <html lang="id">
      <head>
        <JsonLd />
      </head>
      <body>
        <SkipLink />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
