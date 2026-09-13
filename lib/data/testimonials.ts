import type { TestimonialPhoto, TestimonialVideo } from '@/types';

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

/** Thumbnail kecil untuk marquee "proof strip" di bawah hero. */
export const proofStripPhotos: TestimonialPhoto[] = [
  { id: 'proof-1', src: '/testigaleri/1.webp', alt: 'Bukti testimoni pelanggan Jeki Store' },
  { id: 'proof-2', src: '/testigaleri/2.webp', alt: 'Bukti testimoni pelanggan Jeki Store' },
  { id: 'proof-3', src: '/testigaleri/3.webp', alt: 'Bukti testimoni pelanggan Jeki Store' },
  { id: 'proof-4', src: '/testigaleri/4.webp', alt: 'Bukti testimoni pelanggan Jeki Store' },
  { id: 'proof-5', src: '/testigaleri/5.webp', alt: 'Bukti testimoni pelanggan Jeki Store' },
  { id: 'proof-6', src: '/testigaleri/6.webp', alt: 'Bukti testimoni pelanggan Jeki Store' },
  { id: 'proof-7', src: '/testigaleri/katapelanggan2.webp', alt: 'Bukti testimoni pelanggan Jeki Store' },
  {
    id: 'proof-8',
    src: '/testigaleri/testimonijekistore-com-39.webp',
    alt: 'Bukti testimoni pelanggan Jeki Store',
  },
];

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
