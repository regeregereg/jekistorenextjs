'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from '@/app/components/ui/Reveal';
import { faqItems } from '@/lib/data/faq';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal as="div" className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
          FAQ
        </Reveal>
        <Reveal as="h2" style={{ textAlign: 'center' }}>
          Pertanyaan yang
          <br />
          sering ditanyakan
        </Reveal>
        <Reveal className="faq-card">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.question}>
                <div
                  className="faq-q"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenIndex(isOpen ? null : i);
                    }
                  }}
                >
                  {item.question}
                  <span className="faq-q-icon">
                    <Plus size={18} />
                  </span>
                </div>
                <div className="faq-a">{item.answer}</div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
