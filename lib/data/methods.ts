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
      'Login via browser, tanpa perlu utak-atik cookies karena cuma untuk 1 device',
      'Setting chart bisa disamakan seperti bulan sebelumnya saat perpanjangan',
      'Tidak ada gangguan back basic',
      'Paling direkomendasikan dari method lain',
    ],
    cons: ['PC/Laptop/Mac saja, tidak bisa HP'],
  },
  {
    id: 2,
    code: 'METHOD 02',
    name: 'PC + HP',
    fitDescription: 'kamu tetap butuh akses dari HP selain PC/laptop.',
    pros: [
      'Akses dari PC + 1 HP/tablet',
      'Setting chart bisa disamakan seperti bulan sebelumnya saat perpanjangan',
    ],
    cons: [
      'Login tetap via browser (bukan app), jadi butuh setting cookies mengikuti step yang diberikan admin saat akun sudah jadi',
      'Caranya sebenarnya simpel, hanya perlu dibaca pelan-pelan di awal',
      'Cookies terhapus, perlu login ulang mengikuti step yang sama',
    ],
    adviceNote:
      'kalau kamu sudah punya laptop/PC dan nggak wajib akses HP, Method 1 lebih mudah karena login-nya tidak melalui cookies seperti Method 2. Tapi balik lagi sesuai kebutuhan dan preferensi kamu.',
  },
];

export const defaultMethodId = methodOptions[0]?.id ?? 1;
