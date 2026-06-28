import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type BriefingModalValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const BriefingModalContext = createContext<BriefingModalValue | null>(null);

export function BriefingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <BriefingModalContext.Provider value={value}>
      {children}
    </BriefingModalContext.Provider>
  );
}

export function useBriefingModal(): BriefingModalValue {
  const ctx = useContext(BriefingModalContext);
  if (!ctx) {
    throw new Error('useBriefingModal must be used within a BriefingModalProvider');
  }
  return ctx;
}
