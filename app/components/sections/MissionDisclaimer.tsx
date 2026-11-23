import { Reveal } from '@/app/components/ui/Reveal';
import { disclaimerPoints } from '@/lib/data/mission';

/**
 * Misi Jeki Store + disclaimer. Sengaja jujur di depan: Jeki Store untuk
 * pemula yang sedang belajar dengan budget terbatas, bukan pengganti
 * langganan pribadi TradingView bagi yang sudah mahir / punya budget lebih.
 */
export function MissionDisclaimer() {
  return (
    <section className="section" id="misi">
      <div className="container">
        <Reveal as="div" className="eyebrow">
          Misi Kami
        </Reveal>
        <Reveal as="h2">
          Membantu pemula
          <br />
          yang sedang belajar.
        </Reveal>
        <Reveal as="p" className="mission-copy">
          Misi Jeki Store adalah membantu <b>pemula yang sedang belajar</b> lewat tools, jasa, atau service yang
          membantu proses belajar di awal, supaya bisa memakai <b>Replay Mode untuk backtest di semua timeframe</b>{' '}
          dan fitur lainnya.
        </Reveal>

        <Reveal className="disclaimer-card">
          <div className="disclaimer-label">Disclaimer</div>
          <ul className="disclaimer-list" aria-label="Disclaimer Jeki Store">
            {disclaimerPoints.map((point) => (
              <li key={point.title}>
                <b>{point.title}</b>
                <span>{point.body}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
