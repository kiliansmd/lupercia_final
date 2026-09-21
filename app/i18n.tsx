'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';
import {
  basePath,
  pagePath,
  languageFromPath,
  localizedHref,
  translate,
  type Language,
} from './i18n-core';
import { metadataForPath, siteOrigin } from './seo';

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (source: string) => string;
} | null>(null);

/** The same pathname-derived language is rendered on the server and hydrated. */
export function LanguageDocument({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [language, updateLanguage] = useState<Language>(() =>
    languageFromPath(pathname || '/'),
  );
  const setLanguage = useCallback(
    (next: Language) => {
      if (next === language) return;
      const url =
        localizedHref(pagePath(window.location.pathname), next) +
        window.location.search +
        window.location.hash;
      window.history.pushState(window.history.state, '', url);
      updateLanguage(next);
    },
    [language],
  );
  useEffect(() => {
    const restore = () =>
      updateLanguage(languageFromPath(window.location.pathname));
    // The shared static 404 document is also served at unknown localized URLs.
    // Read the actual address after hydration, preserving the server snapshot.
    // oxlint-disable-next-line react/react-compiler
    restore();
    window.addEventListener('popstate', restore);
    window.addEventListener('pageshow', restore);
    return () => {
      window.removeEventListener('popstate', restore);
      window.removeEventListener('pageshow', restore);
    };
  }, []);
  useEffect(() => {
    const path = basePath(window.location.pathname);
    const metadata = metadataForPath(path, language);
    document.title = (metadata.title as { absolute: string }).absolute;
    const og = metadata.openGraph as Record<string, unknown> | undefined;
    const image = (
      og?.images as { url: string; alt: string }[] | undefined
    )?.[0];
    const updates: Record<string, string | undefined> = {
      description: metadata.description ?? undefined,
      'og:title': og?.title as string,
      'og:description': og?.description as string,
      'og:url': og?.url as string,
      'og:locale': og?.locale as string,
      'og:image': image?.url,
      'og:image:alt': image?.alt,
      'twitter:title': og?.title as string,
      'twitter:description': og?.description as string,
      'twitter:image': image?.url,
      'twitter:image:alt': image?.alt,
    };
    for (const [key, value] of Object.entries(updates)) {
      if (value)
        document
          .querySelector(`meta[name="${key}"], meta[property="${key}"]`)
          ?.setAttribute('content', value);
    }
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute(
        'href',
        new URL(localizedHref(path, language), siteOrigin).href,
      );
  }, [language]);
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (source: string) => translate(source, language),
    }),
    [language, setLanguage],
  );
  return (
    <LanguageContext.Provider value={value}>
      <html lang={language}>{children}</html>
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('LanguageDocument is required');
  return value;
}

export function SkipLink() {
  const { t } = useTranslation();
  return (
    <a className="skip-link" href="#main-content">
      {t('Zum Inhalt')}
    </a>
  );
}
