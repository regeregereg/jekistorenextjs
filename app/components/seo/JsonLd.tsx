import { siteConfig } from '@/lib/config/site';
import { faqItems } from '@/lib/data/faq';

/**
 * Structured data (schema.org) untuk Product, LocalBusiness, WebSite, dan
 * FAQPage. Disusun dari siteConfig & faqItems yang sama dipakai UI, supaya
 * data yang tampil ke user dan yang dibaca mesin pencari tidak pernah beda
 * (di HTML lama, teks FAQ ditulis dua kali secara manual dan rawan drift).
 */
export function JsonLd() {
  const priceValidUntil = `${new Date().getFullYear() + 1}-12-31`;

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${siteConfig.url}/#product`,
        name: `TradingView Premium — ${siteConfig.name}`,
        description:
          'Akses penuh fitur TradingView Premium: Replay Mode semua timeframe, indikator tak terbatas, alert realtime tanpa batas, multi-chart hingga 8 layout.',
        image: [`${siteConfig.url}${siteConfig.ogImagePath}`],
        brand: { '@type': 'Brand', name: siteConfig.name },
        offers: {
          '@type': 'Offer',
          url: siteConfig.url,
          priceCurrency: siteConfig.price.currency,
          price: String(siteConfig.price.amount),
          priceValidUntil,
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: String(siteConfig.rating.value),
          reviewCount: String(siteConfig.rating.count),
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#business`,
        name: siteConfig.name,
        description: siteConfig.tagline,
        telephone: `+${siteConfig.whatsappNumber}`,
        priceRange: `${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(siteConfig.price.amount)}/${siteConfig.price.period}`,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.ogImagePath}`,
        hasMap: siteConfig.mapUrl,
        sameAs: [
          siteConfig.social.whatsapp,
          siteConfig.social.instagram,
          siteConfig.social.tiktok,
          siteConfig.social.youtube,
          siteConfig.social.threads,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: 'id-ID',
        publisher: { '@id': `${siteConfig.url}/#business` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
