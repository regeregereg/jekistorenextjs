'use client';

import { Check, Minus } from 'lucide-react';
import { Reveal } from '@/app/components/ui/Reveal';
import { methodOptions } from '@/lib/data/methods';
import { useOrderForm } from './OrderFormProvider';
import { trackEvent } from '@/lib/analytics';

export function Methods() {
  const { selectMethod } = useOrderForm();

  return (
    <section className="section" id="method">
      <div className="container">
        <Reveal as="div" className="eyebrow">
          Pilihan Method
        </Reveal>
        <Reveal as="h2">
          Sesuaikan dengan
          <br />
          device kamu.
        </Reveal>
        <Reveal className="methods-grid">
          {methodOptions.map((method) => (
            <div key={method.id} className={`method-card${method.featured ? ' featured' : ''}`}>
              <div className="method-big-label text-impact">METHOD {method.id}</div>
              {method.recommendedLabel ? <div className="method-reco">{method.recommendedLabel}</div> : null}
              <div className="method-fit">
                <b>Cocok kalau:</b> {method.fitDescription}
              </div>
              <div className="method-section-label">Kelebihan</div>
              {method.pros.map((pro) => (
                <div className="method-plus" key={pro}>
                  <span className="ck-badge">
                    <Check size={11} />
                  </span>
                  {pro}
                </div>
              ))}
              <div className="method-section-label">Perlu diperhatikan</div>
              {method.cons.map((con) => (
                <div className="method-minus" key={con}>
                  <Minus size={13} />
                  {con}
                </div>
              ))}
              {method.adviceNote ? (
                <div className="method-fit" style={{ marginTop: 10 }}>
                  <b>Saran mimin:</b> {method.adviceNote}
                </div>
              ) : null}
              <a
                href="#order"
                className="method-cta"
                onClick={() => {
                  trackEvent('method_selected', { methodId: method.id });
                  selectMethod(method.id);
                }}
              >
                Pilih Method {method.id}
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
