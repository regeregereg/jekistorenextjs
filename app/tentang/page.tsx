import { Check } from 'lucide-react';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { FloatingWhatsApp } from '@/app/components/layout/FloatingWhatsApp';
import { Reveal } from '@/app/components/ui/Reveal';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { siteConfig, whatsappBaseUrl } from '@/lib/config/site';
import { membershipFeatures } from '@/lib/data/membership';
import { testimonialPhotos } from '@/lib/data/testimonials';

const foundedLabel = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(
  new Date(siteConfig.foundedISODate),
);

const aboutStats = [
  { value: `${siteConfig.rating.value}★`, label: `dari ${siteConfig.rating.count}+ ulasan pelanggan` },
  { value: foundedLabel, label: 'berdiri, terus melayani sampai sekarang' },
  { value: '< 1 jam', label: 'rata-rata proses aktivasi akun' },
  { value: `${testimonialPhotos.length}+`, label: 'testimoni asli dari pelanggan' },
];

export const metadata = {
  title: 'Tentang Kami',
  description:
    'Jeki Store adalah reseller TradingView Premium terpercaya di Indonesia sejak Maret 2025. Kenali kenapa kami ada, masalah apa yang kami selesaikan, dan siapa saja yang sudah terbantu.',
  alternates: { canonical: '/tentang' },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <Reveal as="div" className="eyebrow">
            Tentang Kami
          </Reveal>
          <Reveal as="h1">Jeki Store</Reveal>
          <Reveal as="p" className="hero-sub" style={{ textAlign: 'left', margin: '18px 0 0', maxWidth: 640 }}>
            Reseller TradingView Premium yang bikin alat analisa trading lengkap kepake beneran oleh trader
            Indonesia — bukan cuma buat yang modalnya besar.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="eyebrow">
            Kenapa Kami Ada
          </Reveal>
          <Reveal as="h2">
            Chart lengkap harusnya bukan
            <br />
            cuma buat yang mampu bayar dolar.
          </Reveal>
          <Reveal as="p" className="about-copy">
            TradingView Premium resmi ditagih dalam dolar dan biasanya mengikat langganan tahunan. Buat banyak
            trader retail di Indonesia — apalagi yang masih belajar — itu jadi tembok besar sebelum sempat coba
            dulu apakah Replay Mode atau indikator tanpa batas beneran membantu cara analisa mereka.
          </Reveal>
          <Reveal as="p" className="about-copy" delay={0.05}>
            Sejak {foundedLabel}, Jeki Store berdiri untuk motong tembok itu: akses akun private per pelanggan
            (bukan shared), harga {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumFractionDigits: 0,
            }).format(siteConfig.price.amount)}
            /bulan, tanpa komitmen tahunan.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="eyebrow">
            Yang Kami Selesaikan
          </Reveal>
          <Reveal as="h2">
            Keluhan yang paling sering
            <br />
            kami dengar dari pelanggan.
          </Reveal>
          <div className="about-solve-grid">
            {membershipFeatures.map((feature, i) => (
              <Reveal as="div" className="about-solve-item" key={feature.id} delay={i * 0.05}>
                <span className="ck-badge">
                  <Check size={11} />
                </span>
                <div>
                  <div className="about-solve-title">{feature.title}</div>
                  <p className="about-solve-desc">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="eyebrow">
            Bukti, Bukan Cuma Janji
          </Reveal>
          <Reveal as="h2">
            Kami tahu banyak yang pernah
            <br />
            kecewa beli produk digital.
          </Reveal>
          <Reveal as="p" className="about-copy">
            Karena itu kami pilih transparan: akun private sendiri (bukan shared), garansi aktif selama masa
            langganan, dan admin yang bisa dichat langsung — bukan bot — di jam {siteConfig.operatingHours.openTime}
            –{siteConfig.operatingHours.closeTime} {siteConfig.operatingHours.timezone}.
          </Reveal>
          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <div className="about-stat-value text-impact">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="container">
          <Reveal as="h2">Siap coba sendiri?</Reveal>
          <Reveal as="p">Order sekarang, aktif dalam hitungan menit.</Reveal>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <a href="/#order" className="method-cta" style={{ minWidth: 180 }}>
              Lihat Harga & Order
            </a>
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="method-cta"
              style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
            >
              <WhatsAppIcon size={16} />
              Tanya Admin Dulu
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
