import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { siteConfig } from '@/lib/config/site';

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-visual">
          <ImageWithFallback
            src={siteConfig.hero.imageSrc}
            alt={`Ilustrasi ${siteConfig.name}`}
            fill
            priority
            sizes="(min-width: 761px) 480px, 100vw"
            fallbackLabel="Taruh ilustrasi/foto hero di sini"
          />
        </div>

        <div className="hero-eyebrow">{siteConfig.hero.tags.join(' . ')}</div>

        <h1 className="text-impact">
          Chart Yang Bukan
          <br />
          Sekadar Cukup,
          <br />
          Premium.
        </h1>

        {/* Teks & penebalan kata sengaja ditulis langsung di sini (bukan
            data-driven) karena formatnya spesifik per-kalimat dan jarang
            berubah - lihat lib/data/testimonials.ts untuk pola data-driven
            kalau butuh konten yang lebih sering diedit. */}
        <p className="hero-sub">
          {siteConfig.name} <b>membantu</b> kamu membuka semua batasan <b>TradingView gratis,</b> mulai dari{' '}
          <b>indikator,</b> alert, hingga <b>Replay Mode</b> tanpa kompromi, dengan harga yang <b>masuk akal.</b>
        </p>

        <a href="#order" className="hero-cta-pill">
          <span className="hero-cta-icon">
            <WhatsAppIcon size={16} />
          </span>
          Order Sekarang
        </a>
      </div>
    </section>
  );
}
