'use client';

import { Check, Minus } from 'lucide-react';
import { Reveal } from '@/app/components/ui/Reveal';
import { methodOptions, processSteps } from '@/lib/data/methods';
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
          Method yang
          <br />
          tersedia saat ini.
        </Reveal>
        <Reveal className={`methods-grid${methodOptions.length === 1 ? ' single' : ''}`}>
          {methodOptions.map((method) => (
            <div key={method.id} className={`method-card${method.featured ? ' featured' : ''}`}>
              <div className="method-big-label text-impact">METHOD {method.id}</div>
              {method.recommendedLabel ? <div className="method-reco">{method.recommendedLabel}</div> : null}
              <div className="method-fit">
                <b>Cocok kalau:</b> {method.fitDescription}
              </div>
              <ol className="method-process" aria-label="Alur pembuatan akun">
                {processSteps.map((step, i) => (
                  <li key={step.label} style={{ animationDelay: `${i * 0.25}s` }}>
                    <span className="method-process-dot" aria-hidden="true" />
                    <span className="method-process-text">
                      <b>{step.label}</b>
                      <small>{step.note}</small>
                    </span>
                  </li>
                ))}
              </ol>
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
