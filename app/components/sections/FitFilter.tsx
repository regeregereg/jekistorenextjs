import { Check } from 'lucide-react';
import { GradientButton } from '@/app/components/ui/GradientButton';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { Reveal } from '@/app/components/ui/Reveal';

const notFor = ['Cuma coba-coba.', 'Ingin mendapatkan "indikator sakti".', 'Tidak mau chat di jam aktif.'];

const goodFit = [
  'Serius backtest dan analisa dengan data lengkap.',
  'Butuh Replay Mode untuk mengasah strategi.',
  'Mau harga masuk akal dengan garansi yang dipakai.',
];

export function FitFilter() {
  return (
    <section className="section boxed">
      <Reveal className="boxed-panel">
        <div className="eyebrow">Kejujuran di Depan</div>
        <h2>
          Jeki Store bukan
          <br />
          untuk semua orang.
        </h2>
        <div style={{ marginTop: 20 }}>
          <GradientButton href="#order">
            <WhatsAppIcon />
            Order Sekarang
          </GradientButton>
        </div>
        <div className="fit-grid" style={{ marginTop: 40 }}>
          <div className="fit-col no">
            <div className="fit-title">Jeki Store bukan untuk Anda jika</div>
            <ul>
              {notFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="fit-col yes">
            <div className="fit-title">Jeki Store cocok jika Anda</div>
            <ul>
              {goodFit.map((item) => (
                <li key={item}>
                  <span className="ck">
                    <Check size={10} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
