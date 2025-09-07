'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getDictionary, type Locale } from '@/i18n/dictionaries';

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem('locale')) as Locale | null;
    if (stored) setLocale(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('locale', locale);
    document.documentElement.setAttribute('lang', locale === 'zh' ? 'zh-CN' : 'en');
  }, [locale]);

  const dict = useMemo(() => getDictionary(locale), [locale]);
  const t = (key: string) => dict[key] ?? key;

  const value = useMemo(() => ({ locale, t, setLocale }), [locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
