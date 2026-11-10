import type { FaqItem } from '@/types';

/**
 * Satu sumber data FAQ - dipakai untuk render accordion di UI DAN untuk
 * schema FAQPage (JSON-LD) di layout. Ubah di sini otomatis konsisten
 * di kedua tempat, tidak ada duplikasi teks seperti di HTML lama.
 */
export const faqItems: FaqItem[] = [
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
      'Saat ini hanya Method 1, khusus PC/laptop/Mac lewat browser. Belum bisa dipakai di HP maupun tablet.',
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
