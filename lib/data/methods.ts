import type { MethodOption } from '@/types';

/**
 * Opsi method akses yang ditawarkan di section #method dan dipakai lagi
 * di form order (#order). Saat ini hanya Method 1 yang tersedia. Kalau nanti
 * ada method baru, tinggal push object baru di sini - kartu & form order
 * otomatis menyesuaikan (form menampilkan pilihan radio lagi kalau > 1 method).
 */
export const methodOptions: MethodOption[] = [
  {
    id: 1,
    code: 'METHOD 01',
    name: 'PC Premium',
    featured: true,
    fitDescription: 'kamu analisa & trading utamanya di PC/laptop/Mac.',
    pros: [
      'Login via browser (bisa di Mac)',
      'Akun private. Satu pembeli, satu akun',
      'Tidak perlu siapkan Gmail baru, admin yang bantu buatkan',
    ],
    cons: [
      'Hanya bisa dari laptop/PC/Mac, tidak bisa di HP maupun tablet',
      'Pembuatan akun sekitar 6–8 jam, bisa lebih cepat kalau tidak ada antrian',
      'Tanya admin dulu, siapa tahu ada stok ready dan bisa langsung dipakai',
    ],
  },
];

export const defaultMethodId = methodOptions[0]?.id ?? 1;

/**
 * Poin yang ditampilkan di form order supaya pembeli paham syaratnya
 * sebelum chat admin. Satu sumber, dipakai di PricingOrder.
 */
export const orderChecklist: string[] = [
  'Hanya untuk PC/laptop/Mac, tidak bisa di HP atau tablet.',
  'Pembuatan akun sekitar 6–8 jam, bisa lebih cepat kalau tidak ada antrian.',
  'Tidak perlu Gmail baru, admin yang buatkan akunnya.',
  'Tanya admin dulu, siapa tahu ada stok ready.',
];

/** Langkah proses yang divisualkan di kartu method. */
export const processSteps = [
  { label: 'Bayar & kirim bukti', note: 'via QRIS' },
  { label: 'Admin buatkan akun', note: '6–8 jam, bisa lebih cepat' },
  { label: 'Akun aktif', note: 'login via browser PC' },
];
