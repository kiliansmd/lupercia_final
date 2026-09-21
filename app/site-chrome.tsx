'use client';
import { useTranslation } from './i18n';
import Image from './responsive-image';
import { CookieSettingsButton } from './consent';
import Link from './site-link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { phone, maps, links } from './site-config';
export { phone, maps } from './site-config';
export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-identity">
        <Link
          href="/"
          className="footer-brand"
          aria-label={t('Lupercia Startseite')}
        >
          <Image
            className="footer-brand-mark"
            src="/assets/lupercia-mark.webp"
            alt={t('Lupercia – Finest Teas & Tea Ceremonies')}
            sizes="(max-width: 760px) 176px, 220px"
            width={930}
            height={927}
            loading="lazy"
          />
        </Link>
        <p className="footer-signature">{t('Eine Welt rund um Tee.')}</p>
      </div>

      <div className="footer-details">
        <section aria-labelledby="footer-visit-title">
          <h2 id="footer-visit-title">{t('Hier sind wir')}</h2>
          <address>
            <Link
              className="footer-address"
              href={maps}
              target="_blank"
              rel="noreferrer"
            >
              {t('Argelanderstraße 75')}
              <br />
              {t('53115 Bonn ')}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </address>
          <p className="footer-small">{t('Im Herzen der Südstadt')}</p>
        </section>
        <section aria-labelledby="footer-hours-title">
          <h2 id="footer-hours-title">{t('Zeit für Tee')}</h2>
          <dl className="footer-hours">
            <div>
              <dt>{t('Dienstag–Freitag')}</dt>
              <dd>{t('11–19 Uhr')}</dd>
            </div>
            <div>
              <dt>{t('Samstag')}</dt>
              <dd>{t('12–17 Uhr')}</dd>
            </div>
          </dl>
          <p className="footer-small">{t('Sonntag & Montag geschlossen')}</p>
        </section>
        <section aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">{t('In Verbindung')}</h2>
          <div className="footer-contact">
            <Link className="footer-link" href={phone}>
              01516 7970350
            </Link>
            <Link
              className="footer-link"
              href="https://www.instagram.com/lupercia.de/"
              target="_blank"
              rel="noreferrer"
            >
              {t('Instagram ')}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>

      <nav className="footer-navigation" aria-label={t('Lupercia entdecken')}>
        {links.map(([href, text]) => (
          <Link href={href} key={href}>
            {t(text)}
          </Link>
        ))}
      </nav>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {t(' Lupercia · Maria Moreno')}
        </span>
        <nav aria-label={t('Rechtliche Informationen')}>
          <Link href="/impressum">{t('Impressum')}</Link>
          <Link href="/datenschutz">{t('Datenschutz')}</Link>
          <CookieSettingsButton />
        </nav>
      </div>
      <a
        className="footer-agency"
        href="https://www.meindigitalerbetrieb.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{t('Konzept, Design & Umsetzung von')}</span>
        <Image
          src="/assets/mdb-logo.svg"
          alt={t('mdb – Mein Digitaler Betrieb')}
          width={2103}
          height={748}
          loading="lazy"
          unoptimized
        />
      </a>
    </footer>
  );
}
export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      className="text-link"
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
      {external ? <ArrowUpRight size={18} /> : <ArrowRight size={18} />}
    </Link>
  );
}
export function Photo({
  file,
  alt,
  className = '',
  eager = false,
}: {
  file: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <Image
      width={1200}
      height={1500}
      className={className}
      src={`/assets/images/${file}.webp`}
      alt={t(alt)}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
    />
  );
}
export function Visit({
  compact = false,
  withPhoto = true,
  photo,
}: {
  compact?: boolean;
  withPhoto?: boolean;
  photo?: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <section
      className={`visit-section ${compact ? 'compact' : ''} ${withPhoto ? '' : 'visit-without-photo'}`}
      id="besuch"
    >
      <div className="visit-copy">
        <span className="eyebrow">{t('Bonn Südstadt')}</span>
        <h2>
          {t('Wir sehen uns')}
          <br />
          <em>{t('beim Tee.')}</em>
        </h2>
        <p>
          {t(
            'Lupercia ist Ihr Teesalon und Teeladen in Bonn-Südstadt. Genießen Sie eine Kanne Tee vor Ort oder lassen Sie sich bei der Auswahl für zu Hause beraten. Kommen Sie einfach vorbei.',
          )}
        </p>
        <div className="visit-details">
          <div>
            <h3>{t('Hier finden Sie uns')}</h3>
            <Link href={maps} target="_blank" rel="noreferrer">
              {t('Argelanderstraße 75')}
              <br />
              {t('53115 Bonn ')}
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <div>
            <h3>{t('Öffnungszeiten')}</h3>
            <dl>
              <div>
                <dt>{t('Dienstag–Freitag')}</dt>
                <dd>{t('11–19 Uhr')}</dd>
              </div>
              <div>
                <dt>{t('Samstag')}</dt>
                <dd>{t('12–17 Uhr')}</dd>
              </div>
              <div>
                <dt>{t('Sonntag & Montag')}</dt>
                <dd>{t('geschlossen')}</dd>
              </div>
            </dl>
          </div>
        </div>
        <TextLink href={phone}>{t('Einen Tisch anfragen')}</TextLink>
        <p className="small-note">
          {t('Für mehrere Personen rufen Sie am besten kurz an.')}
          <br />
          <Link href={phone}>01516 7970350</Link>
        </p>
      </div>
      {withPhoto &&
        (photo ?? (
          <Photo
            file="lupercia-fensterblick"
            alt={t(
              'Das blumengeschmückte Schaufenster von Lupercia mit Blick auf die Bonner Südstadt',
            )}
          />
        ))}
    </section>
  );
}
