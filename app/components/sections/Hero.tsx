import { GradientButton } from '@/app/components/ui/GradientButton';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { siteConfig } from '@/lib/config/site';
import { formatRupiah } from '@/lib/format';

export function Hero() {
  return (
    <section className="hero">
      <div className="glow glow-hero" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <div className="container">
        <h1>
          Chart yang Bukan
          <br />
          Sekadar Cukup.
          <br />
          Premium.
        </h1>
        <p className="hero-sub">
          {siteConfig.name} membantu kamu membuka semua batasan TradingView gratis, mulai dari indikator, alert,
          hingga Replay Mode tanpa kompromi, dengan harga yang masuk akal.
        </p>
        <GradientButton href="#order">
          <WhatsAppIcon />
          Order Sekarang
        </GradientButton>
        <div className="hero-price-row" style={{ marginTop: 32 }}>
          <span className="hero-price mono">{formatRupiah(siteConfig.price.amount)}</span>
          {siteConfig.price.compareAtAmount ? (
            <span className="hero-price-old mono">{formatRupiah(siteConfig.price.compareAtAmount)}+</span>
          ) : null}
        </div>
        <p className="hero-price-note">
          per {siteConfig.price.period} · diproses {siteConfig.operatingHours.openTime}–
          {siteConfig.operatingHours.closeTime} {siteConfig.operatingHours.timezone}
        </p>
      </div>
    </section>
  );
}
