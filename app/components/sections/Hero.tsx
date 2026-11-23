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
          {siteConfig.name} <b>membantu Pemula</b> yang sedang dalam proses belajar dan membutuhkan tools &amp; fitur
          yang memadai, seperti <b>indikator lebih dari 3,</b> <b>alert,</b> hingga <b>Replay Mode</b> di semua
          timeframe hingga <b>detik.</b> Dengan harga yang <b>memadai.</b>
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
