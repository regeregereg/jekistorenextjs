import type { MethodOption } from '@/types';

/**
 * Opsi method akses yang ditawarkan di section #method dan dipakai lagi
 * di form order (#order). Tiap method membawa alur proses & checklist
 * syaratnya sendiri, jadi kartu, form order, dan pesan WhatsApp otomatis
 * menyesuaikan. Method baru cukup ditambahkan sebagai object baru di sini.
 */
export const methodOptions: MethodOption[] = [
  {
    id: 1,
    code: 'METHOD 01',
    name: 'PC / Laptop / Mac',
    featured: true,
    fitDescription: 'kamu analisa & trading utamanya di PC/laptop/Mac.',
    pros: [
      'Login via browser (bisa di Mac)',
      'Akun private. Satu pembeli, satu akun',
      'Tidak perlu siapkan Gmail baru, admin yang bantu buatkan',
      'Bukan yang setiap hari harus minta session!',
    ],
    cons: [
      'Hanya bisa dari laptop/PC/Mac, tidak bisa di HP maupun tablet',
      'Pembuatan akun sekitar 6–8 jam, bisa lebih cepat kalau tidak ada antrian (biasanya malam jadi)',
      'Tanya admin dulu, siapa tahu ada stok ready dan bisa langsung dipakai',
    ],
    processSteps: [
      { label: 'Bayar & kirim bukti', note: 'via QRIS' },
      { label: 'Admin buatkan akun', note: '6–8 jam, bisa lebih cepat' },
      { label: 'Akun aktif', note: 'login via browser PC/Laptop/Mac' },
    ],
    orderChecklist: [
      'Hanya untuk PC/laptop/Mac, tidak bisa di HP atau tablet.',
      'Login via browser. Akun private, bukan yang setiap hari harus minta session.',
      'Pembuatan akun sekitar 6–8 jam, bisa lebih cepat kalau tidak ada antrian.',
      'Tidak perlu Gmail baru, admin yang buatkan akunnya.',
      'Tanya admin dulu, siapa tahu ada stok ready.',
    ],
  },
  {
    id: 2,
    code: 'METHOD 02',
    name: 'HP / Tablet',
    featured: true,
    fitDescription: 'kamu analisa & trading utamanya di HP atau tablet (Android maupun iPhone/iPad).',
    pros: [
      'Login via browser',
      'Akun private. Satu pembeli, satu akun',
      'Tidak perlu siapkan Gmail baru, admin yang bantu buatkan',
      'Bukan yang setiap hari harus minta session!',
    ],
    cons: [
      'Hanya bisa dari browser, bukan lewat aplikasi',
      'Pembuatan akun sekitar 6–8 jam, bisa lebih cepat kalau tidak ada antrian (biasanya malam jadi)',
      'Tanya admin dulu, siapa tahu ada stok ready dan bisa langsung dipakai',
    ],
    processSteps: [
      { label: 'Bayar & kirim bukti', note: 'via QRIS' },
      { label: 'Admin buatkan akun', note: '6–8 jam, bisa lebih cepat' },
      { label: 'Akun aktif', note: 'login via browser HP/tablet' },
    ],
    orderChecklist: [
      'Untuk HP/tablet, Android maupun iPhone, dan hanya bisa dari browser.',
      'Akun private, bukan yang setiap hari harus minta session.',
      'Pembuatan akun sekitar 6–8 jam, bisa lebih cepat kalau tidak ada antrian.',
      'Tidak perlu Gmail baru, admin yang buatkan akunnya.',
      'Tanya admin dulu, siapa tahu ada stok ready.',
    ],
  },
];

export const defaultMethodId = methodOptions[0]?.id ?? 1;
