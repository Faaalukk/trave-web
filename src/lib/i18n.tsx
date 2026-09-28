import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { COPY, type Copy } from '../data/copy';
import { IMG_PLACEHOLDER, LABELS } from '../data/labels';
import type { Lang, LabelKind, Place } from '../data/types';

const STORAGE_KEY = 'vokrub.lang';

interface I18n {
  lang: Lang;
  isEn: boolean;
  setLang: (lang: Lang) => void;
  /** UI copy for the active language. */
  t: Copy;
  /** Label for a taxonomy key, e.g. L('type', 'sea') → 'ทะเล' / 'Sea'. */
  L: (kind: LabelKind, key: string) => string;
  /** Caption shown on an unfilled image placeholder. */
  imgLabel: (kind: string, key: string) => string;
  placeName: (place: Place) => string;
  placeDesc: (place: Place) => string;
  placePrice: (place: Place) => string;
}

const I18nContext = createContext<I18n | null>(null);

function initialLang(): Lang {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  return stored === 'en' || stored === 'th' ? stored : 'th';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const value = useMemo<I18n>(() => {
    const isEn = lang === 'en';
    const L = (kind: LabelKind, key: string) => LABELS[kind]?.[key]?.[lang] ?? key;
    return {
      lang,
      isEn,
      setLang,
      t: COPY[lang],
      L,
      imgLabel: (kind, key) => IMG_PLACEHOLDER[kind]?.[key]?.[lang] ?? L(kind as LabelKind, key),
      placeName: (p) => (isEn ? p.nameEn : p.name),
      placeDesc: (p) => (isEn ? p.descEn : p.desc),
      placePrice: (p) => (isEn ? p.priceEn : p.price),
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
