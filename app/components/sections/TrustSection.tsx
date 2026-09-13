import { siteConfig } from '@/lib/config/site';
import { Reveal } from '@/app/components/ui/Reveal';

const painPoints = [
  'Indikator dibatasi 3 per chart.',
  'Cuma 1 alert aktif.',
  'Hanya bisa buka 1 chart sekaligus.',
  'Replay Mode dibatasi timeframe.',
  'Setting chart diulang tiap perpanjangan.',
];

export function TrustSection() {
  return (
    <section className="section boxed" id="kenapa">
      <Reveal className="boxed-panel">
        <div className="trust-block">
          <div>
            <div className="eyebrow">Dipercaya oleh</div>
            <h3>Trader Aktif di Seluruh Indonesia</h3>
            <p className="desc">
              Berdiri sejak Maret 2025, melayani trader forex, crypto, dan saham dengan pendekatan yang sama: proses
              cepat, harga jujur, dan admin yang benar-benar merespons, bukan sekadar auto-reply.
            </p>
          </div>
          <div className="stat-card">
            <div className="stat-big mono">
              {siteConfig.rating.value}
              <span style={{ fontSize: '1.1rem', color: 'var(--ink-dim)' }}>/5</span>
            </div>
            <div className="stat-label">Rating dari {siteConfig.rating.count}+ ulasan pelanggan</div>
            <div className="stat-sub">
              <div>
                <b>&lt;1 jam</b>
                <span>Proses akun</span>
              </div>
              <div>
                <b>30 hari</b>
                <span>Aktif penuh</span>
              </div>
              <div>
                <b>3</b>
                <span>Method akses</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="boxed-panel" style={{ marginTop: 18 }}>
        <div className="eyebrow">Kenapa Premium?</div>
        <h2>
          Kamu bukan kurang insight.
          <br />
          Masalahnya versi gratis.
        </h2>
        <p className="lede">TradingView gratis diam-diam menahan analisamu. Ini yang paling sering bikin trader mentok:</p>
        <ul className="plain-list">
          {painPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
