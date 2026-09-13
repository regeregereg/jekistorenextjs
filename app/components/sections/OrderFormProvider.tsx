'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { defaultMethodId } from '@/lib/data/methods';

interface OrderFormContextValue {
  selectedMethodId: number;
  selectMethod: (id: number, options?: { scroll?: boolean }) => void;
}

const OrderFormContext = createContext<OrderFormContextValue | null>(null);

/**
 * State method yang dipilih dibagi antar section (Methods -> PricingOrder)
 * lewat context ini, menggantikan pola lama `document.getElementById('m'+n).checked = true`.
 * Kalau nanti butuh field order lain yang dibagi lintas section (mis. paket
 * durasi langganan), tambahkan di sini.
 */
export function OrderFormProvider({ children }: { children: ReactNode }) {
  const [selectedMethodId, setSelectedMethodId] = useState<number>(defaultMethodId);

  const value = useMemo<OrderFormContextValue>(
    () => ({
      selectedMethodId,
      selectMethod: (id, options) => {
        setSelectedMethodId(id);
        if (options?.scroll !== false) {
          document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
        }
      },
    }),
    [selectedMethodId],
  );

  return <OrderFormContext.Provider value={value}>{children}</OrderFormContext.Provider>;
}

export function useOrderForm(): OrderFormContextValue {
  const ctx = useContext(OrderFormContext);
  if (!ctx) throw new Error('useOrderForm harus dipakai di dalam <OrderFormProvider>');
  return ctx;
}
