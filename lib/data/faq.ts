import type { FaqItem } from '@/types';

/**
 * Satu sumber data FAQ - dipakai untuk render accordion di UI DAN untuk
 * schema FAQPage (JSON-LD) di layout. Ubah di sini otomatis konsisten
 * di kedua tempat, tidak ada duplikasi teks seperti di HTML lama.
 */
export const faqItems: FaqItem[] = [
  {
    question: 'Jeki Store itu untuk siapa?',
    answer:
      'Untuk pemula yang sedang benar-benar belajar trading dengan budget terbatas, yang butuh tools seperti Replay Mode untuk backtest di semua timeframe, indikator lebih dari 3, dan alert. Jeki Store adalah layanan independen yang menyediakan akses ini lewat akun private.',
  },
  {
    question: 'Kalau sudah mahir atau punya budget lebih, sebaiknya bagaimana?',
    answer:
      'Mimin menyarankan langsung langganan pribadi di TradingView, paket Essential atau yang paling murah. Di sana akunmu bisa dipakai di semua device dan lewat aplikasi, tidak hanya via browser. Jeki Store hanya untuk pemula yang sedang belajar.',
  },
  {
    question: 'Apakah ini aman dan terpercaya?',
    answer:
      'Aman, kak. Setiap pembeli mendapat akun private sendiri, bukan shared. Satu pembeli satu akun. Garansi aktif selama masa langganan. Ada kendala, langsung chat admin.',
  },
  {
    question: 'Berapa lama proses pembuatan akun?',
    answer:
      'Sekitar 6–8 jam, dan bisa lebih cepat kalau tidak ada antrian. Tanya admin dulu, siapa tahu ada stok ready yang bisa langsung dipakai.',
  },
  {
    question: 'Metode pembayaran apa yang tersedia?',
    answer: 'Saat ini via QRIS. Bukti pembayaran dikirim ke admin lewat WhatsApp.',
  },
  {
    question: 'Method mana yang tersedia?',
    answer:
      'Ada 2 method, keduanya lewat browser. Method 1 untuk PC/laptop/Mac. Method 2 untuk HP/tablet, Android maupun iPhone. Akun private, dan bukan yang setiap hari harus minta session.',
  },
  {
    question: 'Apakah saya perlu menyiapkan Gmail baru?',
    answer: 'Tidak perlu. Akun dibuatkan oleh admin, kamu tinggal menunggu dan login setelah akun siap.',
  },
  {
    question: 'Apakah ada paket tahunan?',
    answer:
      'Belum tersedia saat ini. Kalau ada event diskon dari TradingView, admin akan menginformasikan ke pelanggan.',
  },
];
