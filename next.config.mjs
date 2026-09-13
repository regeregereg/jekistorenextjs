/**
 * Konfigurasi Next.js.
 *
 * Header keamanan dipasang di sini (bukan lewat <meta http-equiv>) supaya
 * benar-benar dikirim sebagai HTTP response header oleh server/CDN -
 * <meta http-equiv> untuk X-Frame-Options / X-Content-Type-Options tidak
 * benar-benar ditegakkan oleh browser, hanya CSP via meta yang bekerja
 * parsial. Sesuaikan `connect-src` / `img-src` bila menambah integrasi baru
 * (mis. payment gateway, analytics, chat widget).
 */
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: blob:",
      "media-src 'self'",
      "connect-src 'self' https://wa.me",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
      "frame-ancestors 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
