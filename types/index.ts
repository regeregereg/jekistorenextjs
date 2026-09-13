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
}

export type MembershipVisualId = 'replay' | 'admin' | 'alert' | 'export' | 'guarantee';

export interface MembershipFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  visual: MembershipVisualId;
}

export interface MethodOption {
  id: number;
  code: string;
  name: string;
  featured?: boolean;
  recommendedLabel?: string;
  fitDescription: string;
  pros: string[];
  cons: string[];
  adviceNote?: string;
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

export interface OrderRequest {
  name: string;
  methodId: number;
}
