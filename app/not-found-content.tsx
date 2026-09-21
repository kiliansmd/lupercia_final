'use client';
import { useTranslation } from './i18n';
import Link from './site-link';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <main id="main-content" className="not-found page-width">
      <span className="eyebrow">{t('404 · Hier ist gerade kein Tee')}</span>
      <h1>
        {t('Zurück an')}
        <br />
        <em>{t('unseren Tisch.')}</em>
      </h1>
      <p>
        {t(
          'Diese Seite gibt es leider nicht. Entdecken Sie stattdessen Marias Teewelt.',
        )}
      </p>
      <Link className="text-link" href="/">
        {t('Zur Startseite ')}
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
