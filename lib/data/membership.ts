import type { MembershipFeature } from '@/types';

/**
 * Fitur-fitur langganan yang ditampilkan di section #membership.
 * Tambah/kurangi/ubah urutan cukup edit array ini, UI menyesuaikan otomatis.
 */
export const membershipFeatures: MembershipFeature[] = [
  {
    id: 'replay-mode',
    number: '01',
    title: 'Replay Mode Tanpa Batas',
    description:
      'Backtest strategi kamu di semua timeframe, hingga 25 ribu bar ke belakang, bukan cuma preview terbatas seperti versi gratis.',
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
    title: 'Alert Realtime Tanpa Limit',
    description:
      'Set alert di banyak harga sekaligus. Notifikasi langsung masuk saat momen entry tiba, jadi tidak ada lagi harga terlewat.',
    visual: 'alert',
  },
  {
    id: 'export-data',
    number: '04',
    title: 'Export Chart & Data XAUUSD',
    description:
      'Butuh screenshot chart resolusi tinggi atau data candle mentah buat riset dan dokumentasi? Export langsung dari TradingView Premium, semua pair, tanpa batas.',
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
