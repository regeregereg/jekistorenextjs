import { methodOptions } from '@/lib/data/methods';
import { formatRupiah } from '@/lib/format';
import { siteConfig, whatsappBaseUrl } from '@/lib/config/site';
import type { OrderRequest } from '@/types';

/**
 * Semua logika terkait order via WhatsApp dikumpulkan di sini, terpisah dari
 * komponen UI. Kalau suatu saat channel order bertambah (mis. checkout via
 * payment gateway, atau bot Telegram), cukup tambah fungsi builder baru di
 * file ini tanpa mengubah komponen PricingOrder.
 */

/** Mendeteksi sumber traffic dari referrer, dipakai untuk melacak kanal marketing mana yang paling efektif. */
export function getTrafficSource(): string {
  if (typeof document === 'undefined') return 'Direct';
  const ref = document.referrer || '';
  if (!ref) return 'Direct';
  if (ref.includes('tiktok.com')) return 'TikTok';
  if (ref.includes('instagram.com')) return 'Instagram';
  if (ref.includes('threads.com') || ref.includes('threads.net')) return 'Threads';
  if (ref.includes('youtube.com')) return 'YouTube';
  if (ref.includes('google.')) return 'Google Search';
  return ref;
}

function getMethodLabel(methodId: number): string {
  const method = methodOptions.find((m) => m.id === methodId);
  if (!method) return `Method ${methodId}`;
  const suffix = method.name.includes('HP') ? 'PC + HP via browser' : 'PC / Laptop only';
  return `${method.code.replace('METHOD 0', 'Method ')} (${suffix})`;
}

/** Menyusun pesan order yang siap dikirim ke WhatsApp admin. */
export function buildOrderMessage({ name, methodId }: OrderRequest): string {
  const priceLabel = `${formatRupiah(siteConfig.price.amount)} / ${siteConfig.price.period}`;
  const gmailNote = '\n📧 *Akan menyiapkan Gmail baru* yang belum terdaftar di TradingView.';
  const sourceNote = `\n📍 *Sumber:* ${getTrafficSource()}`;

  return [
    'Halo kak, saya mau order TradingView Premium 🙏',
    '',
    `*Nama:* ${name}`,
    `*Method:* ${getMethodLabel(methodId)}`,
    `*Harga:* ${priceLabel}`,
  ].join('\n') + gmailNote + sourceNote + '\n\nMohon bantuannya ya kak! 😊';
}

/** Membuat URL wa.me lengkap dengan teks yang sudah di-encode. */
export function buildWhatsAppUrl(message: string, phoneNumber: string = siteConfig.whatsappNumber): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

/** Link WA generik (tanpa pesan order) untuk tombol kontak/nav. */
export const genericWhatsAppUrl = whatsappBaseUrl;
