'use client';

import { useRef, useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';
import { Reveal } from '@/app/components/ui/Reveal';
import { WhatsAppIcon } from '@/app/components/ui/Icons';
import { siteConfig } from '@/lib/config/site';
import { formatRupiah } from '@/lib/format';
import { methodOptions } from '@/lib/data/methods';
import { buildOrderMessage, buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { useOrderForm } from './OrderFormProvider';

const priceInclusions = [
  'Akun private, bukan shared',
  'Garansi penggantian gratis',
  `Admin responsif ${siteConfig.operatingHours.openTime}–${siteConfig.operatingHours.closeTime} ${siteConfig.operatingHours.timezone}`,
  'Pembayaran via QRIS',
];

export function PricingOrder() {
  const { selectedMethodId, selectMethod } = useOrderForm();
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const selectedMethod = methodOptions.find((method) => method.id === selectedMethodId);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();

    if (!trimmedName) {
      setError('Mohon isi nama kamu terlebih dahulu 😊');
      nameInputRef.current?.focus();
      return;
    }
    if (!selectedMethodId) {
      setError('Mohon pilih method terlebih dahulu 😊');
      return;
    }

    setError(null);
    trackEvent('order_whatsapp_submit', { methodId: selectedMethodId });
    const message = buildOrderMessage({ name: trimmedName, methodId: selectedMethodId });
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="section" id="order">
      <div className="glow glow-soft" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }} aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <div className="container" style={{ textAlign: 'center' }}>
        <Reveal as="div" className="eyebrow">
          Harga
        </Reveal>
        <Reveal as="h2">
          Aktifkan Akses
          <br />
          Kamu Sekarang
        </Reveal>

        <Reveal className="price-card" style={{ textAlign: 'left' }}>
          <div className="price-brand">
            <span className="mark">{siteConfig.brandMark}</span>
            <span className="word">{siteConfig.name.toUpperCase()}</span>
          </div>
          <div className="plan-name">Langganan Bulanan · Akses Penuh</div>
          <div className="plan-price">{formatRupiah(siteConfig.price.amount)}</div>
          <div className="plan-period">/ {siteConfig.price.period}</div>

          <div className="price-divider">
            <div className="line" />
            <span className="spark">✦</span>
            <div className="line" />
          </div>

          <ul className="price-list">
            {priceInclusions.map((item) => (
              <li key={item}>
                {item}
                <span className="ck">
                  <Check size={12} />
                </span>
              </li>
            ))}
          </ul>

          <form className="order-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="nama">Nama Kamu</label>
              <input
                type="text"
                id="nama"
                ref={nameInputRef}
                placeholder="Contoh: Budi Santoso"
                maxLength={60}
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError(null);
                }}
              />
            </div>
            <div className="form-field">
              <label>Pilih Method</label>
              <div className="method-select">
                {methodOptions.map((method) => (
                  <div className="method-opt" key={method.id}>
                    <input
                      type="radio"
                      name="method"
                      id={`m${method.id}`}
                      value={method.id}
                      checked={selectedMethodId === method.id}
                      onChange={() => selectMethod(method.id, { scroll: false })}
                    />
                    <label htmlFor={`m${method.id}`} className="method-opt-label">
                      <div className="radio-dot" />
                      <span>
                        Method {method.id} — {method.name === 'PC Premium' ? 'PC/Laptop' : method.name}
                      </span>
                      <div className="method-opt-check">
                        <Check size={11} />
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              <p className="gmail-note">Setiap method membutuhkan Gmail baru yang belum terdaftar di TradingView.</p>

              {/* Ringkasan beda tiap method langsung di sini, diambil dari
                  data yang sama dengan section #method - jadi user tidak
                  perlu scroll balik ke atas untuk tahu bedanya. */}
              {selectedMethod ? (
                <div className="method-hint" aria-live="polite">
                  <p className="method-hint-fit">
                    <strong>{selectedMethod.name}</strong> cocok buat kamu yang {selectedMethod.fitDescription}
                  </p>
                  {selectedMethod.pros[0] ? <p className="method-hint-pro">✓ {selectedMethod.pros[0]}</p> : null}
                  {selectedMethod.cons[0] ? <p className="method-hint-con">⚠ {selectedMethod.cons[0]}</p> : null}
                </div>
              ) : null}
            </div>

            {error ? (
              <p role="alert" style={{ color: '#F5A3A3', fontSize: '0.82rem', marginBottom: 14 }}>
                {error}
              </p>
            ) : null}

            <button id="wa-btn" type="submit">
              <WhatsAppIcon />
              Order via WhatsApp
            </button>
            <p className="widget-note">
              Proses &lt; 1 jam · Layanan {siteConfig.operatingHours.openTime}–{siteConfig.operatingHours.closeTime}{' '}
              {siteConfig.operatingHours.timezone}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
