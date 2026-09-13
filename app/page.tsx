import type { Metadata } from 'next';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { FloatingWhatsApp } from '@/app/components/layout/FloatingWhatsApp';
import { Hero } from '@/app/components/sections/Hero';
import { TestimonialSpotlight } from '@/app/components/sections/TestimonialSpotlight';
import { TrustSection } from '@/app/components/sections/TrustSection';
import { Membership } from '@/app/components/sections/Membership';
import { Methods } from '@/app/components/sections/Methods';
import { FitFilter } from '@/app/components/sections/FitFilter';
import { PricingOrder } from '@/app/components/sections/PricingOrder';
import { Testimonials } from '@/app/components/sections/Testimonials';
import { FAQ } from '@/app/components/sections/FAQ';
import { ClosingCTA } from '@/app/components/sections/ClosingCTA';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TestimonialSpotlight />
        <TrustSection />
        <Membership />
        <Methods />
        <FitFilter />
        <PricingOrder />
        <Testimonials />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
