import type { TestimonialPhoto, TestimonialVideo, SpotlightTestimonial, TextSegment } from '@/types';

/**
 * Data testimoni. Foto & video mengacu ke file di /public/testigaleri,
 * yang perlu kamu pindahkan dari situs lama (lihat README bagian Aset).
 *
 * Daftar foto testimoni utama (grid 56 foto) di-generate dari pola nama
 * file yang konsisten, bukan ditulis manual satu-satu seperti di HTML lama
 * - kalau jumlah fotonya bertambah/berkurang, tinggal ubah `TOTAL_PHOTOS`
 * dan `VISIBLE_PHOTOS` di bawah.
 */

const TOTAL_PHOTOS = 56;
const VISIBLE_PHOTOS = 18; // sisanya disembunyikan di balik tombol "Lihat X Testimoni Lainnya"

const altVariants = ['Testimoni pelanggan Jeki Store', 'Review pelanggan Jeki Store', 'Ulasan pelanggan Jeki Store'];

export const testimonialPhotos: TestimonialPhoto[] = Array.from({ length: TOTAL_PHOTOS }, (_, i) => {
  const index = i + 1;
  return {
    id: `testi-${index}`,
    src: `/testigaleri/testimonijekistore-com-${index}.webp`,
    alt: altVariants[i % altVariants.length] as string,
    extra: index > VISIBLE_PHOTOS,
  };
});

export const hiddenTestimonialCount = TOTAL_PHOTOS - VISIBLE_PHOTOS;

export const testimonialVideos: TestimonialVideo[] = [
  {
    src: '/testigaleri/pelangganjekistore3.webm',
    quote: 'Lapor ndan sudah bisa, terimakasih min',
    name: 'Hanzel',
    role: 'XAUUSD Trader',
  },
  {
    src: '/testigaleri/testimonijekistore-com-1.webm',
    quote: 'Kayak gini min, terimakasih ya',
    name: 'Anas Syahrul',
    role: 'Pelanggan Jeki Store',
  },
  {
    src: '/testigaleri/testimonijekistore-com-2.webm',
    quote: 'Mantap min, bisa edit indikator',
    name: 'Agun Pradika',
    role: 'Pelanggan Jeki Store',
  },
];

/**
 * Slider testimoni "spotlight" tepat di bawah hero (satu kartu besar per
 * geser, bukan grid). Ganti `image` dengan foto asli, dan sesuaikan
 * `customerName` / `dateYear` / `message` masing-masing - ketiganya
 * memang didesain berubah bareng setiap kartu berganti.
 *
 * Tambah testimoni baru = tambah satu object di array ini (maksimal
 * disarankan ~7 biar tetap ringan untuk di-swipe). Urutan array = urutan
 * slide.
 */
export const spotlightTestimonials: SpotlightTestimonial[] = [
  {
    id: 'spotlight-1',
    image: '/testigaleri/spotlight-1.jpg',
    customerName: 'Budi Santoso',
    dateYear: 'Agustus 2025',
    message: 'Proses cepat banget, admin ramah dan chart langsung aktif dalam 15 menit!',
  },
  {
    id: 'spotlight-2',
    image: '/testigaleri/spotlight-2.jpg',
    customerName: 'Rahmat Hidayat',
    dateYear: 'Agustus 2025',
    message: 'Replay Mode-nya kebuka penuh, backtest jadi jauh lebih akurat dari sebelumnya.',
  },
  {
    id: 'spotlight-3',
    image: '/testigaleri/spotlight-3.jpg',
    customerName: 'Anas Syahrul',
    dateYear: 'Juli 2025',
    message: 'Sempat ada kendala login, tapi langsung dibantu sampai beres. Recommended.',
  },
  {
    id: 'spotlight-4',
    image: '/testigaleri/spotlight-4.jpg',
    customerName: 'Dian Permata',
    dateYear: 'Juli 2025',
    message: 'Harganya jujur, jauh lebih murah dari yang lain tapi kualitasnya sama.',
  },
  {
    id: 'spotlight-5',
    image: '/testigaleri/spotlight-5.jpg',
    customerName: 'Agun Pradika',
    dateYear: 'Juni 2025',
    message: 'Sudah langganan 3 bulan, garansinya beneran dipakai pas ada gangguan.',
  },
  {
    id: 'spotlight-6',
    image: '/testigaleri/spotlight-6.jpg',
    customerName: 'Hanzel',
    dateYear: 'Juni 2025',
    message: 'Setting chart-nya kesimpen, jadi tiap perpanjangan tinggal lanjut analisa.',
  },
  {
    id: 'spotlight-7',
    image: '/testigaleri/spotlight-7.jpg',
    customerName: 'Putri Wulandari',
    dateYear: 'Mei 2025',
    message: 'Alert realtime-nya membantu banget buat yang kerja sambil mantau chart.',
  },
];

/**
 * Cerita singkat "kenapa Jeki Store ada" yang tampil di bawah slider
 * spotlight. Ditulis sebagai daftar paragraf, tiap paragraf berisi
 * potongan teks dengan `bold: true` untuk kata/frasa yang ditebalkan -
 * supaya format penekanan tetap bisa diedit dari data, bukan dari JSX.
 */
export const founderStory: TextSegment[][] = [
  [
    { text: 'Mimin pernah mendapatkan pengalaman yang ' },
    { text: 'kurang menyenangkan', bold: true },
    { text: ', ketika beli product digital di ' },
    { text: 'toko oren', bold: true },
    { text: '.' },
  ],
  [
    { text: 'Mereka claim bahwasanya ' },
    { text: 'garansi', bold: true },
    { text: ' dan apabila ada kendala mereka bantu, tapi nyatanya ' },
    { text: 'respon', bold: true },
    { text: ' mereka ' },
    { text: 'begitu lambat', bold: true },
    { text: ', mimin seperti di ' },
    { text: 'tidak dipedulikan', bold: true },
    { text: ', padahal kita percaya ke mereka.' },
  ],
  [
    { text: 'Mulai saat itu, saya berfikir kalau saya suatu saat nanti ' },
    { text: 'berjualan', bold: true },
    { text: ', jasa atau apapun mimin ' },
    { text: 'tidak ingin seperti mereka', bold: true },
    { text: '.' },
  ],
];
