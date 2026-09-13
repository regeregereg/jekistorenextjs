import { GradientButton } from '@/app/components/ui/GradientButton';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { Reveal } from '@/app/components/ui/Reveal';

export function ClosingCTA() {
  return (
    <div className="closing">
      <div className="glow glow-soft" style={{ bottom: '-40%', left: '50%', transform: 'translateX(-50%)' }} aria-hidden="true" />
      <div className="container">
        <Reveal as="div" className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
          Mulai hari ini
        </Reveal>
        <Reveal as="h2">
          Trading dengan data lengkap,
          <br />
          bukan setengah-setengah.
        </Reveal>
        <Reveal as="p">Proses cepat, garansi aktif, admin responsif.</Reveal>
        <div style={{ marginTop: 20, display: 'inline-block' }}>
          <GradientButton href="#order">
            <WhatsAppIcon />
            Order Sekarang
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
