import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { genericWhatsAppUrl } from '@/lib/whatsapp';

const DEFAULT_TEXT = 'Halo kak, saya mau tanya soal TradingView Premium';

export function FloatingWhatsApp() {
  const href = `${genericWhatsAppUrl}?text=${encodeURIComponent(DEFAULT_TEXT)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="float-wa"
      aria-label="Chat WhatsApp Jeki Store"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
