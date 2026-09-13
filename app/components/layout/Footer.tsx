import { Instagram, Youtube } from 'lucide-react';
import { WhatsAppIcon, TikTokIcon, ThreadsIcon } from '@/app/components/ui/Icons';
import { siteConfig, whatsappBaseUrl } from '@/lib/config/site';

const subscriptionLinks = [
  { href: '#membership', label: 'Replay Mode' },
  { href: '#membership', label: 'Admin Support' },
  { href: '#membership', label: 'Export Data' },
];

const aboutLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '#faq', label: 'FAQ' },
];

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <span className="mark">{siteConfig.brandMark}</span>
              <span className="word">{siteConfig.name.toUpperCase()}</span>
            </div>
            <p className="footer-tagline">
              Perjalanan trading jangka panjang. Buka semua batasan TradingView, perlahan tapi pasti.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Langganan</h5>
              {subscriptionLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer-col">
              <h5>Tentang</h5>
              {aboutLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer-col">
              <h5>Kontak Kami</h5>
              <a href={whatsappBaseUrl} target="_blank" rel="noopener noreferrer">
                +62 831-1968-6482
              </a>
              <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer">
                Lokasi &amp; Ulasan Google
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. Akun bersifat pribadi, bukan berbagi akses. Hasil
            trading tergantung strategi masing-masing; kami tidak menjamin profit.
          </span>
          <div className="footer-social">
            <a href={whatsappBaseUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon size={18} />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon size={18} />
            </a>
            <a href={siteConfig.social.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <ThreadsIcon size={18} />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
