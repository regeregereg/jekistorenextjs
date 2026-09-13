# Jeki Store — Next.js Edition

Migrasi total landing page Jeki Store (reseller TradingView Premium) dari HTML statis ke **Next.js 14 (App Router) + TypeScript**. Tampilan dijaga identik dengan versi lama; yang berubah total adalah arsitektur kodenya.

## Yang berubah dari versi HTML lama

- **Satu sumber data untuk semua konten** (`lib/data/*.ts`, `lib/config/site.ts`) — harga, nomor WhatsApp, FAQ, daftar method, fitur membership, dan testimoni tidak lagi ditulis berulang di dalam markup. Ganti angka/teks di satu tempat, semua bagian situs (termasuk data SEO/JSON-LD) ikut update otomatis dan konsisten.
- **Komponen React modular** — tiap section (`Hero`, `Membership`, `Methods`, `PricingOrder`, `Testimonials`, `FAQ`, dst) adalah file terpisah di `app/components/sections/`, bukan satu file HTML 1000+ baris.
- **Logika order WhatsApp terpusat** di `lib/whatsapp.ts` — kalau nanti mau menambah channel order baru (payment gateway, bot Telegram, dsb), tinggal tambah fungsi builder baru di sana tanpa menyentuh komponen UI.
- **Lapisan analytics siap pakai tapi tidak memaksa** (`lib/analytics.ts`) — titik pelacakan (klik CTA, submit order, pilih method, expand testimoni) sudah terpasang di kode, tinggal disambungkan ke GA4/Meta Pixel/dst kapan pun dibutuhkan.
- **SEO lewat Next.js Metadata API**, bukan tag `<meta>` manual: `app/layout.tsx` (Open Graph, Twitter Card, canonical), `app/robots.ts`, `app/sitemap.ts`. JSON-LD (`Product`, `LocalBusiness`, `WebSite`, `FAQPage`) dibaca dari data yang sama dengan yang tampil di UI, jadi tidak bisa lagi "beda" seperti risiko di HTML manual.
- **Header keamanan HTTP asli** (`next.config.mjs`) — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy dikirim sebagai HTTP header sungguhan, bukan `<meta http-equiv>` yang sebagian tidak ditegakkan browser.
- **Font di-self-host** lewat Fontsource (npm), bukan memanggil Google Fonts CDN saat runtime — lebih cepat, tidak ada request pihak ketiga, dan build tidak bisa gagal gara-gara jaringan.
- **Ikon** pakai `lucide-react` (tree-shaken, ter-bundle) untuk ikon generik, plus SVG custom untuk ikon brand (WhatsApp/TikTok/Threads) — tidak lagi memuat seluruh font-icon dari CDN eksternal hanya untuk beberapa ikon.
- **State interaktif pakai React**, bukan manipulasi DOM manual: pilih Method di section Method otomatis menyorot & mengisi form Order (via React Context), lightbox foto pakai Context, FAQ accordion pakai state, dsb.
- **Validasi form tanpa `alert()`** — pesan error tampil inline di bawah field, lebih ramah dan lebih mudah dikustomisasi.

## Struktur folder

```
app/
  layout.tsx            Root layout: font, metadata SEO, JSON-LD, provider
  page.tsx               Menyusun semua section jadi satu halaman
  globals.css             Semua styling (desain dijaga identik dgn versi lama)
  robots.ts / sitemap.ts  Route bawaan Next.js untuk robots.txt & sitemap.xml
  components/
    layout/               Navbar, Footer, FloatingWhatsApp, SkipLink
    ui/                    GradientButton, Icons, Reveal (animasi scroll)
    lightbox/              Context + komponen modal preview foto
    sections/              Satu file per section halaman
    seo/                   JsonLd.tsx (schema.org terpusat)
  hooks/useReveal.ts       Hook IntersectionObserver untuk animasi scroll
  providers/AppProviders.tsx
lib/
  config/site.ts           Konfigurasi pusat (harga, WA, jam operasional, sosmed)
  data/                    membership.ts, methods.ts, faq.ts, testimonials.ts
  whatsapp.ts              Builder pesan & link order WhatsApp
  analytics.ts             Stub trackEvent, siap disambung ke GA4/Pixel
  format.ts                Formatter Rupiah
types/index.ts              Semua tipe data situs
public/                     Aset statis (lihat bagian "Aset" di bawah)
```

## Menjalankan secara lokal

Butuh Node.js 18.18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Build produksi (sudah divalidasi lolos build + lint + type-check tanpa error):

```bash
npm run build
npm run start
```

## Aset gambar & video (penting — belum ikut ter-upload)

Saat migrasi ini dikerjakan, hanya file `index.html` yang tersedia — folder aset asli (`asset/`, `testigaleri/*.webp`, `*.webm`, favicon, dst.) tidak ikut terupload. Kode di proyek ini sudah mengacu ke **path yang persis sama** seperti situs lama:

- `/public/asset/favicon.ico`, `/public/asset/favicon-32x32.png`, `/public/asset/apple-touch-icon.png`, `/public/asset/og-image.jpg`
- `/public/testigaleri/1.webp` … `6.webp`, `katapelanggan2.webp`
- `/public/testigaleri/testimonijekistore-com-1.webp` … `56.webp`
- `/public/testigaleri/testimonijekistore-com-1.webm`, `-2.webm`, `pelangganjekistore3.webm`

**Yang perlu kamu lakukan:** salin folder `asset/` dan `testigaleri/` dari situs lama ke folder `public/` di proyek ini (menimpa folder kosong yang sudah dibuat). Setelah itu semua gambar & video otomatis tersambung tanpa ubah kode apa pun.

Jumlah total foto testimoni (56) dan yang tersembunyi di balik tombol "lihat lainnya" (38) diatur lewat dua konstanta di `lib/data/testimonials.ts` (`TOTAL_PHOTOS`, `VISIBLE_PHOTOS`) — tinggal ubah angkanya kalau jumlah fotonya berubah.

## Mengubah konten bisnis

Semua hal berikut ini cukup diubah di **satu file**, `lib/config/site.ts`:

- Nomor WhatsApp admin
- Harga & harga coret
- Jam operasional
- Link Instagram/TikTok/YouTube/Threads
- Rating & jumlah ulasan
- Link Google Maps

Konten lain:

| Ingin ubah | Edit file |
|---|---|
| Fitur membership (section "Apa yang kamu dapatkan") | `lib/data/membership.ts` |
| Opsi Method 1/2 (atau tambah Method 3) | `lib/data/methods.ts` |
| Pertanyaan FAQ | `lib/data/faq.ts` |
| Foto/video testimoni | `lib/data/testimonials.ts` |

## Environment variables

Salin `.env.example` menjadi `.env.local` lalu isi sesuai kebutuhan:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=6283119686482
NEXT_PUBLIC_SITE_URL=https://jekistore.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

Kalau environment variable tidak diisi, kode tetap jalan dengan nilai default yang sama seperti situs lama.

## Menambah integrasi baru (contoh)

Struktur proyek ini sengaja dipisah per lapisan supaya integrasi baru tidak memaksa mengubah komponen UI:

- **Tambah payment gateway** (mis. Midtrans/Xendit) → buat `lib/payment.ts` berisi fungsi `createPaymentLink()`, panggil dari `PricingOrder.tsx` sebagai opsi selain tombol WhatsApp.
- **Tambah Google Analytics / Meta Pixel** → isi `NEXT_PUBLIC_GA_ID` di `.env.local`, lengkapi pemetaan event di `lib/analytics.ts`. Semua titik pelacakan di komponen (klik CTA, pilih method, submit order) sudah terpasang dan otomatis ikut terkirim.
- **Tambah channel order baru** (Telegram bot, Live Chat, dst.) → tambah builder pesan baru di `lib/whatsapp.ts` (atau file `lib/telegram.ts` baru dengan pola yang sama), lalu render tombolnya di `PricingOrder.tsx`.
- **Ganti sumber testimoni jadi dinamis** (mis. dari Google Reviews API/CMS) → ganti isi `lib/data/testimonials.ts` dari array statis menjadi hasil `fetch()` di server component; komponen `Testimonials.tsx` tidak perlu diubah karena bentuk datanya (`TestimonialPhoto[]`, `TestimonialVideo[]`) tetap sama.
- **Tambah halaman blog** → link "Blog" di footer sudah mengarah ke `/blog`; tinggal buat `app/blog/page.tsx`.

## Deploy

Proyek ini siap di-deploy ke platform mana pun yang mendukung Next.js (Vercel, Netlify, VPS dengan Node.js, dsb). Untuk Vercel: hubungkan repo, isi environment variables di dashboard, deploy — tidak perlu konfigurasi tambahan.

## Status validasi

Sudah dijalankan dan lolos di lingkungan pengembangan sebelum diserahkan:

- ✅ `npm run build` — build produksi sukses, 0 error
- ✅ `npm run lint` — 0 warning, 0 error
- ✅ `tsc --noEmit` — type-check penuh, 0 error
- ✅ `npm run start` — server produksi diuji jalan, semua section (`#main`, `#membership`, `#method`, `#order`, `#faq`) dan JSON-LD terverifikasi ter-render di HTML

Yang **belum** bisa diverifikasi di lingkungan ini karena aset belum tersedia: tampilan visual final dengan foto/video asli, dan resolusi gambar Open Graph. Setelah folder `asset/` dan `testigaleri/` dipindahkan, jalankan `npm run build` sekali lagi untuk memastikan semuanya utuh.
