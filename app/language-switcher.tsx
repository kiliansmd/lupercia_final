'use client';
import { usePathname } from 'next/navigation';
import { useState, useSyncExternalStore } from 'react';
import { useTranslation } from './i18n';
import { languages, languageNames, localizedHref, pagePath } from './i18n-core';

function subscribe(listener: () => void) {
  window.addEventListener('hashchange', listener);
  window.addEventListener('popstate', listener);
  return () => {
    window.removeEventListener('hashchange', listener);
    window.removeEventListener('popstate', listener);
  };
}
const getSuffix = () => window.location.search + window.location.hash;
const emptySuffix = () => '';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();
  const pathname = usePathname() || '/';
  const suffix = useSyncExternalStore(subscribe, getSuffix, emptySuffix);
  const [announced, setAnnounced] = useState(false);
  return (
    <fieldset className="language-switcher" aria-label={t('Sprache wählen')}>
      {languages.map((locale) => (
        <a
          key={locale}
          href={localizedHref(pagePath(pathname), locale) + suffix}
          lang={locale}
          hrefLang={locale}
          aria-label={languageNames[locale]}
          aria-current={language === locale ? 'true' : undefined}
          onClick={(event) => {
            if (
              event.button !== 0 ||
              event.ctrlKey ||
              event.metaKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            event.preventDefault();
            setLanguage(locale);
            setAnnounced(true);
          }}
        >
          {locale.toUpperCase()}
        </a>
      ))}
      <output className="sr-only" aria-live="polite">
        {announced ? t('Sprache geändert.') : ''}
      </output>
    </fieldset>
  );
}
