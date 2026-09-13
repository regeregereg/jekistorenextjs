'use client';

import type { ReactNode } from 'react';
import { LightboxProvider } from '@/app/components/lightbox/LightboxProvider';
import { Lightbox } from '@/app/components/lightbox/Lightbox';
import { OrderFormProvider } from '@/app/components/sections/OrderFormProvider';

/** Menggabungkan seluruh context provider client-side di satu tempat. */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LightboxProvider>
      <OrderFormProvider>
        {children}
        <Lightbox />
      </OrderFormProvider>
    </LightboxProvider>
  );
}
