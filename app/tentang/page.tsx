import { Check } from 'lucide-react';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { FloatingWhatsApp } from '@/app/components/layout/FloatingWhatsApp';
import { Reveal } from '@/app/components/ui/Reveal';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { siteConfig, whatsappBaseUrl } from '@/lib/config/site';
import { disclaimerPoints, problemsSolved } from '@/lib/data/mission';
import { testimonialPhotos } from '@/lib/data/testimonials';

const foundedLabel = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(
  new Date(siteConfig.foundedISODate),
);

const aboutStats = [
  { value: `${siteConfig.rating.value}★`, label: `dari ${siteConfig.rating.count}+ ulasan pelanggan` },
  { value: foundedLabel, label: 'berdiri, terus melayani sampai sekarang' },
  { value: '6–8 jam', label: 'estimasi pembuatan akun, bisa lebih cepat tanpa antrian' },
  { value: `${testimonialPhotos.length}+`, label: 'testimoni asli dari pelanggan' },
];

export const metadata = {
  title: 'Tentang Kami',
  description:
    'Misi Jeki Store: membantu pemula yang sedang belajar trading dengan budget terbatas. Kenali kenapa kami ada, masalah apa yang kami selesaikan, dan siapa yang sebaiknya langganan langsung di TradingView.',
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
            Layanan untuk pemula yang sedang belajar trading, supaya bisa memakai tools seperti Replay Mode untuk
            backtest tanpa terhambat budget.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="eyebrow">
            Kenapa Kami Ada
          </Reveal>
          <Reveal as="h2">
            Membantu pemula yang
            <br />
            sedang belajar.
          </Reveal>
          <Reveal as="p" className="about-copy">
            Misi Jeki Store adalah membantu pemula yang sedang belajar dengan menyediakan tools, jasa, atau service
            yang membantu proses belajar di awal, supaya bisa memakai Replay Mode untuk backtest di semua timeframe
            dan fitur lainnya.
          </Reveal>
          <Reveal as="p" className="about-copy" delay={0.05}>
            Sejak {foundedLabel}, setiap pelanggan mendapat akun private sendiri dengan harga{' '}
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumFractionDigits: 0,
            }).format(siteConfig.price.amount)}{' '}
            per bulan. Kami fokus ke pemula dengan budget terbatas, karena kami paham kondisi itu.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="eyebrow">
            Yang Kami Selesaikan
          </Reveal>
          <Reveal as="h2">
            Masalah yang pernah kami alami
            <br />
            sebagai pembeli.
          </Reveal>
          <div className="about-solve-grid">
            {problemsSolved.map((item, i) => (
              <Reveal as="div" className="about-solve-item" key={item.problem} delay={i * 0.05}>
                <span className="ck-badge">
                  <Check size={11} />
                </span>
                <div>
                  <div className="about-solve-title">{item.problem}</div>
                  <p className="about-solve-desc">{item.solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="eyebrow">
            Disclaimer
          </Reveal>
          <Reveal as="h2">
            Jeki Store bukan untuk
            <br />
            semua orang.
          </Reveal>
          <div className="about-solve-grid">
            {disclaimerPoints.map((point, i) => (
              <Reveal as="div" className="about-solve-item" key={point.title} delay={i * 0.05}>
                <span className="ck-badge">
                  <Check size={11} />
                </span>
                <div>
                  <div className="about-solve-title">{point.title}</div>
                  <p className="about-solve-desc">{point.body}</p>
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
            Kami tahu banyak yang pernah kecewa beli produk digital, makanya kami pilih jalan yang lebih
            transparan. Akun yang kamu pakai benar-benar punya kamu sendiri, ada garansi selama masa langganan
            aktif, dan kalau ada kendala bisa langsung chat admin asli setiap hari jam{' '}
            {siteConfig.operatingHours.openTime}–{siteConfig.operatingHours.closeTime}{' '}
            {siteConfig.operatingHours.timezone}.
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
          <Reveal as="h2">Sedang belajar dan butuh tools-nya?</Reveal>
          <Reveal as="p">Akun dibuatkan admin sekitar 6–8 jam, bisa lebih cepat kalau tidak ada antrian.</Reveal>
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
