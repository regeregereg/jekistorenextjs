/**
 * Lapisan analytics tipis. Sengaja dibuat sebagai "no-op sampai dikonfigurasi"
 * supaya menambah Google Analytics / Meta Pixel / TikTok Pixel nanti tidak
 * perlu menyentuh komponen manapun - cukup isi env var terkait lalu lengkapi
 * fungsi `trackEvent` di bawah untuk memanggil SDK yang sesuai.
 *
 * Titik pemanggilan yang sudah disiapkan di kode:
 *  - "cta_order_click"   -> setiap tombol "Order Sekarang" ditekan
 *  - "method_selected"   -> saat memilih Method 1/2 di section Method
 *  - "order_whatsapp_submit" -> saat form order dikirim ke WhatsApp
 *  - "testimonial_expand"    -> saat "Lihat testimoni lainnya" ditekan
 */

type EventName =
  | 'cta_order_click'
  | 'method_selected'
  | 'order_whatsapp_submit'
  | 'testimonial_expand';

type EventPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: EventName, payload: EventPayload = {}): void {
  if (typeof window === 'undefined') return;

  // Placeholder: hubungkan ke GA4 kalau NEXT_PUBLIC_GA_ID sudah diisi.
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) {
    gtag('event', name, payload);
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', name, payload);
  }
}
