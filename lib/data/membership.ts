import type { MembershipFeature } from '@/types';

/**
 * Fitur-fitur langganan yang ditampilkan di section #membership.
 * Tambah/kurangi/ubah urutan cukup edit array ini, UI menyesuaikan otomatis.
 */
export const membershipFeatures: MembershipFeature[] = [
  {
    id: 'replay-mode',
    number: '01',
    title: 'Replay Mode di Semua Timeframe',
    description:
      'Backtest strategi kamu di semua timeframe sampai ke detik, bukan cuma terbatas seperti di versi gratis. Cocok untuk latihan membaca chart di awal belajar.',
    visual: 'replay',
  },
  {
    id: 'admin-support',
    number: '02',
    title: 'Admin Support Langsung',
    description:
      'Ada kendala login, back basic, atau pertanyaan setup? Chat langsung ke admin, direspons di jam aktif, bukan bot.',
    visual: 'admin',
  },
  {
    id: 'realtime-alert',
    number: '03',
    title: 'Alert Realtime',
    description:
      'Set alert di banyak harga sekaligus. Notifikasi langsung masuk saat momen entry tiba, jadi tidak ada lagi harga terlewat.',
    visual: 'alert',
  },
  {
    id: 'export-data',
    number: '04',
    title: 'Export Chart & Data',
    description:
      'Butuh screenshot chart resolusi tinggi atau data candle mentah buat riset dan dokumentasi? Export langsung dari TradingView Premium.',
    visual: 'export',
  },
  {
    id: 'garansi',
    number: '05',
    title: 'Garansi Aktif Selama Berlangganan',
    description:
      'Ada gangguan atau back basic di luar wajar? Akun diganti tanpa biaya tambahan selama masa langganan masih berjalan.',
    visual: 'guarantee',
  },
];
