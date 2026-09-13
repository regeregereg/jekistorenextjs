import type { MethodOption } from '@/types';

/**
 * Opsi method akses yang ditawarkan di section #method dan dipakai lagi
 * di form order (#order). Menambah Method 3 nanti tinggal push object baru
 * di sini - dropdown & kartu akan otomatis render.
 */
export const methodOptions: MethodOption[] = [
  {
    id: 1,
    code: 'METHOD 01',
    name: 'PC Premium',
    featured: true,
    recommendedLabel: '★ Paling Direkomendasikan',
    fitDescription: 'kamu analisa & trading utamanya di PC/laptop.',
    pros: [
      'Login via browser, tanpa aplikasi tambahan',
      'Setingan chart dibantu disamakan tiap perpanjangan bulan berikutnya',
      'Jarang sekali kena back basic',
      'Paling direkomendasikan dari method lain',
    ],
    cons: [
      'Hanya bisa diakses dari PC/Laptop/Mac, tidak bisa dari HP',
      'Butuh Gmail baru yang belum pernah terdaftar di TradingView',
    ],
  },
  {
    id: 2,
    code: 'METHOD 02',
    name: 'PC + HP',
    fitDescription: 'kamu tetap butuh akses dari HP selain PC/laptop.',
    pros: [
      'Akses dari PC + HP/tablet',
      'Setingan chart dibantu disamakan tiap perpanjangan bulan berikutnya',
      'Jarang sekali kena back basic',
      'Bisa dipakai di 2 device sekaligus',
    ],
    cons: [
      'Login tetap lewat browser, bukan aplikasi',
      'Agak ribet di login pertama kali karena pakai sistem cookies',
      'Beberapa awalnya merasa ribet, tapi setelah itu awet 30 hari tanpa perlu ganti-ganti akun',
      'Butuh Gmail baru yang belum pernah terdaftar di TradingView',
    ],
    adviceNote:
      'kalau kamu sudah punya laptop/PC dan nggak wajib akses HP, Method 1 lebih mudah karena login-nya tidak melalui cookies seperti Method 2. Tapi balik lagi sesuai kebutuhan dan preferensi kamu.',
  },
];

export const defaultMethodId = methodOptions[0]?.id ?? 1;
