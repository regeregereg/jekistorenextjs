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
      'Aman, kak. Setiap pembeli mendapat akun private sendiri, bukan shared. Garansi aktif selama masa langganan. Ada kendala, langsung chat admin.',
  },
  {
    question: 'Berapa lama proses setelah bayar?',
    answer:
      'Normalnya kurang dari 1 jam. Order setelah pukul 22.00 WIB diproses keesokan hari pukul 08.00 WIB.',
  },
  {
    question: 'Metode pembayaran apa yang tersedia?',
    answer: 'Saat ini via QRIS. Bukti pembayaran dikirim ke admin lewat WhatsApp.',
  },
  {
    question: 'Method mana yang cocok untuk saya?',
    answer: 'Punya PC atau laptop, pilih Method 1. Butuh akses HP juga, pilih Method 2.',
  },
  {
    question: 'Apakah setting chart bisa disimpan?',
    answer: 'Untuk Method 1 dan 2, setting dan layout bisa disamakan saat perpanjangan langganan.',
  },
  {
    question: 'Apakah ada paket tahunan?',
    answer:
      'Belum tersedia saat ini. Kalau ada event diskon dari TradingView, admin akan menginformasikan ke pelanggan.',
  },
];
