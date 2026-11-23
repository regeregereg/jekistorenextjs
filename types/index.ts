/**
 * Kumpulan tipe data untuk seluruh konten situs.
 * Menjaga bentuk data konsisten antara lib/data/*, komponen, dan JSON-LD.
 */

export interface PriceInfo {
  amount: number;
  compareAtAmount?: number;
  currency: 'IDR';
  period: string; // contoh: "bulan"
}

export interface OperatingHours {
  openTime: string; // "08:00"
  closeTime: string; // "22:00"
  timezone: string; // "WIB"
}

export interface SocialLinks {
  whatsapp: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  threads: string;
}

export interface HeroContent {
  tags: string[];
  imageSrc: string;
}

export interface SiteConfig {
  name: string;
  brandMark: string;
  legalName: string;
  description: string;
  tagline: string;
  url: string;
  whatsappNumber: string;
  price: PriceInfo;
  operatingHours: OperatingHours;
  foundedISODate: string;
  rating: { value: number; count: number };
  social: SocialLinks;
  mapUrl: string;
  keywords: string[];
  ogImagePath: string;
  hero: HeroContent;
}

export type MembershipVisualId = 'replay' | 'admin' | 'alert' | 'export' | 'guarantee';

export interface MembershipFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  visual: MembershipVisualId;
}

export interface ProcessStep {
  label: string;
  note: string;
}

export interface MethodOption {
  id: number;
  code: string;
  /** Nama perangkat yang ditampilkan di kartu, form order, dan pesan WhatsApp. */
  name: string;
  featured?: boolean;
  recommendedLabel?: string;
  fitDescription: string;
  pros: string[];
  cons: string[];
  adviceNote?: string;
  /** Alur proses yang divisualkan di kartu method. */
  processSteps: ProcessStep[];
  /** Poin "Sebelum order, pastikan ya" di form order. */
  orderChecklist: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialPhoto {
  id: string;
  src: string;
  alt: string;
  featuredInStrip?: boolean;
  extra?: boolean;
}

export interface TestimonialVideo {
  src: string;
  quote: string;
  name: string;
  role: string;
}

/** Satu kartu di slider testimoni spotlight (section langsung setelah hero). */
export interface SpotlightTestimonial {
  id: string;
  image: string;
  customerName: string;
  dateYear: string;
  message: string;
}

/** Satu segmen teks; `bold` untuk kata/frasa yang ditebalkan di tengah kalimat. */
export interface TextSegment {
  text: string;
  bold?: boolean;
}

/** Satu blok di cerita pendiri: paragraf biasa atau daftar poin. */
export type StoryBlock =
  | { type: 'p'; segments: TextSegment[] }
  | { type: 'list'; items: TextSegment[][] };

export interface OrderRequest {
  name: string;
  methodId: number;
}
