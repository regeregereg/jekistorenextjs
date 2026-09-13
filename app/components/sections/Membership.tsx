import { GradientButton } from '@/app/components/ui/GradientButton';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { Reveal } from '@/app/components/ui/Reveal';
import { membershipFeatures } from '@/lib/data/membership';
import { MembershipVisual } from './MembershipVisuals';

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

        <div className="member-grid">
          {membershipFeatures.map((feature, i) => (
            <Reveal as="article" className="member-card" key={feature.id} delay={i * 0.08}>
              <div className="member-num mono">{feature.number}</div>
              <div className="member-title">{feature.title}</div>
              <div className="member-desc">{feature.description}</div>
              <MembershipVisual id={feature.visual} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
