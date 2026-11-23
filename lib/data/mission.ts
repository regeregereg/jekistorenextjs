/**
 * Sumber tunggal untuk misi, disclaimer, dan masalah yang diselesaikan
 * Jeki Store. Dipakai di beranda (MissionDisclaimer), halaman Tentang, dan
 * dijadikan acuan teks SEO/llms.txt, supaya posisi Jeki Store (untuk pemula
 * yang sedang belajar) konsisten di mana pun teksnya muncul.
 */

export const missionSummary =
  'Membantu pemula yang sedang belajar trading lewat tools, jasa, atau service yang terjangkau, supaya bisa memakai Replay Mode untuk backtest di semua timeframe dan fitur lainnya.';

export const disclaimerPoints = [
  {
    title: 'Sudah mahir? Langganan pribadi saja.',
    body: 'Kalau kamu sudah berpengalaman dan punya cukup biaya, mimin sangat menyarankan langsung beli paket Essential memakai akun pribadi kamu di TradingView. Jeki Store hanya untuk pemula yang benar-benar sedang belajar.',
  },
  {
    title: 'Ada budget lebih? Langganan langsung.',
    body: 'Di TradingView langsung, akunmu bisa dipakai di semua device dan lewat aplikasi, tidak hanya via browser seperti di Jeki Store. Kalau ada dana lebih, ambil saja paket paling murahnya.',
  },
  {
    title: 'Fokus kami: pemula dengan budget terbatas.',
    body: 'Mimin paham betul kondisi itu. Di situlah Jeki Store membantu, supaya proses belajar di awal tidak terhambat batasan tools.',
  },
];

/** Masalah yang diselesaikan Jeki Store, berangkat dari pengalaman pendiri sebagai pembeli. */
export const problemsSolved = [
  {
    problem: 'Respon lambat, bahkan tidak direspon, saat ada kendala',
    solution: 'Admin asli (bukan bot) yang responsif sesuai jam aktif, dengan garansi penggantian gratis selama masa langganan.',
  },
  {
    problem: 'Yang ditawarkan tidak sesuai faktanya',
    solution: 'Yang tertulis di sini sama dengan yang kamu terima: akun private, satu pembeli satu akun, akses via browser, pembuatan akun sekitar 6–8 jam.',
  },
  {
    problem: 'Kurang transparan di awal soal kelebihan dan kekurangan',
    solution: 'Kelebihan dan kekurangan tiap method dijelaskan sebelum kamu order, termasuk batasan perangkat dan lama pembuatan akun.',
  },
  {
    problem: 'Tools belajar terbentur budget',
    solution: 'Pemula bisa memakai Replay Mode untuk backtest di semua timeframe, indikator lebih dari 3, dan alert dengan harga terjangkau.',
  },
];
