import type { TestimonialPhoto, TestimonialVideo, SpotlightTestimonial, StoryBlock } from '@/types';

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
    customerName: 'Ralfi',
    dateYear: 'Maret 2026',
    message: 'Dulu rungkat ngikutin sinyal influeceer, dan sekarang bisa mandiri pakai system.',
  },
  {
    id: 'spotlight-2',
    image: '/testigaleri/spotlight-2.jpg',
    customerName: 'Akbar',
    dateYear: 'Agustus 2026',
    message: 'Sudah di test semua, hasilnya memuaskan. Gausah ragu kalau langganan di sini.',
  },
  {
    id: 'spotlight-3',
    image: '/testigaleri/spotlight-3.jpg',
    customerName: 'Mauro',
    dateYear: ' November 2025',
    message: 'Dari tahun lalu langganan lancar jaya sampai sekarang min. Terimakasih.',
  },
  {
    id: 'spotlight-4',
    image: '/testigaleri/spotlight-4.jpg',
    customerName: 'Aziz',
    dateYear: 'Juli 2026',
    message: 'Akhirnya setelah sekian lama, saya bisa pakai indikator impian saya min, Terimakasih.',
  },
  {
    id: 'spotlight-5',
    image: '/testigaleri/spotlight-5.jpg',
    customerName: 'Reza Abdi',
    dateYear: 'Juni 2026',
    message: 'Sudah bisa replay timeframe kecil min, Terimakasih  atas amanahnya yaa!.',
  },
  {
    id: 'spotlight-6',
    image: '/testigaleri/spotlight-6.jpg',
    customerName: 'Jerry G',
    dateYear: 'Agustus 2026',
    message: 'Pelayanannya mantap, kalau mau tanyapun di jawabnya gercep responnya.',
  },
  {
    id: 'spotlight-7',
    image: '/testigaleri/spotlight-7.jpg',
    customerName: 'Fatih',
    dateYear: 'Agustus 2026',
    message: 'Karena productnya bagus dan amanah, izin saya promosikan ke komunitas saya ya min.',
  },
];

/**
 * Cerita singkat "kenapa Jeki Store ada" yang tampil di bawah slider
 * spotlight. Ditulis sebagai daftar paragraf, tiap paragraf berisi
 * potongan teks dengan `bold: true` untuk kata/frasa yang ditebalkan -
 * supaya format penekanan tetap bisa diedit dari data, bukan dari JSX.
 */
export const founderStory: StoryBlock[] = [
  {
    type: 'p',
    segments: [
      { text: 'Banyak di antara kamu pasti punya pengalaman ' },
      { text: 'kurang menyenangkan', bold: true },
      { text: ' belanja suatu product atau jasa di ' },
      { text: 'toko oren', bold: true },
      { text: '. ' },
      { text: 'TERMASUK MIMIN!', bold: true },
    ],
  },
  {
    type: 'list',
    items: [
      [
        { text: 'Respon', bold: true },
        { text: ' mereka ' },
        { text: 'begitu lambat', bold: true },
        { text: ' ketika ada kendala. Buruknya malah ' },
        { text: 'tidak direspon sama sekali', bold: true },
        { text: '.' },
      ],
      [
        { text: 'Kadang apa yang mereka tawarkan ' },
        { text: 'tidak sesuai dengan faktanya', bold: true },
        { text: '.' },
      ],
      [
        { text: 'Kurangnya ' },
        { text: 'transparansi', bold: true },
        { text: ' di awal. Apa sih kekurangannya? Dan apa sih kelebihannya?' },
      ],
    ],
  },
  {
    type: 'p',
    segments: [
      { text: 'Dari masalah-masalah itu dan pengalaman mimin ' },
      { text: 'SEBAGAI PEMBELI', bold: true },
      { text: ', di sinilah ' },
      { text: 'Jeki Store hadir', bold: true },
      { text: ', untuk menyelesaikan ' },
      { text: 'MASALAH TERSEBUT', bold: true },
      { text: '.' },
    ],
  },
];
