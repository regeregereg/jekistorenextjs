import { GradientButton } from '@/app/components/ui/GradientButton';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { Reveal } from '@/app/components/ui/Reveal';
import { membershipFeatures } from '@/lib/data/membership';
import { MembershipTimeline } from './MembershipTimeline';

export function Membership() {
  return (
    <section className="section" id="membership">
      <div className="container">
        <Reveal as="div" className="eyebrow">
          Langganan
        </Reveal>
        <Reveal as="h2">
          Apa yang akan
          <br />
          kamu dapatkan?
        </Reveal>
        <div style={{ marginTop: 20 }}>
          <GradientButton href="#order">
            <WhatsAppIcon />
            Order Sekarang
          </GradientButton>
        </div>

        <MembershipTimeline features={membershipFeatures} />
      </div>
    </section>
  );
}
