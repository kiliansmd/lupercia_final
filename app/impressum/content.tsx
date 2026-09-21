'use client';
import { useTranslation } from '../i18n';
import Link from '../site-link';
import { phone } from '../site-chrome';
export default function Imprint() {
  const { t } = useTranslation();
  return (
    <main id="main-content" className="legal-page">
      <span className="eyebrow">
        {t('Lupercia · Rechtliche Informationen')}
      </span>
      <h1>{t('Impressum.')}</h1>
      <p className="legal-intro">
        {t('Die Menschen hinter dieser Website. Und der direkte Weg zu uns.')}
      </p>
      <nav className="legal-navigation" aria-label={t('Rechtliche Seiten')}>
        <Link href="/impressum" aria-current="page">
          {t('Impressum')}
        </Link>
        <Link href="/datenschutz">{t('Datenschutz')}</Link>
      </nav>
      <section aria-labelledby="anbieter">
        <h2 id="anbieter">{t('Angaben gemäß § 5 DDG')}</h2>
        <address>
          <p>
            {t('Maria Moreno')}
            <br />
            {t('Lupercia – Finest Teas & Tea Ceremonies')}
            <br />
            {t('Argelanderstraße 75')}
            <br />
            {t('53115 Bonn')}
            <br />
            {t('Deutschland')}
          </p>
        </address>
      </section>
      <section aria-labelledby="kontakt">
        <h2 id="kontakt">{t('Kontakt')}</h2>
        <p>
          {t('E-Mail: ')}
          <Link href="mailto:mdc.moreno@gmail.com">
            {t('mdc.moreno@gmail.com')}
          </Link>
          <br />
          {t('Telefon: ')}
          <Link href={phone}>01516 7970350</Link>
        </p>
      </section>
      <section aria-labelledby="streitbeilegung">
        <h2 id="streitbeilegung">{t('Verbraucherstreitbeilegung')}</h2>
        <p>
          {t(
            'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          )}
        </p>
      </section>
      <div className="legal-callout">
        <p>
          {t(
            'Informationen zum Umgang mit personenbezogenen Daten und zu Ihren Wahlmöglichkeiten finden Sie in unserer',
          )}{' '}
          <Link href="/datenschutz">{t('Datenschutzerklärung')}</Link>.
        </p>
      </div>
      <Link className="text-link" href="/">
        {t('Zurück zu Lupercia ')}
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
