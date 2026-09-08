import Image from 'next/image';
import Link from './site-link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { phone, maps, links } from './site-config';
export { phone, maps } from './site-config';
export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-identity">
        <Link
          href="/"
          className="footer-brand"
          aria-label="Lupercia Startseite"
        >
          <Image
            className="footer-brand-mark"
            src="/assets/lupercia-mark.png"
            alt="Lupercia – Finest Teas & Tea Ceremonies"
            width={930}
            height={927}
            loading="lazy"
          />
        </Link>
        <p className="footer-signature">Eine Welt rund um Tee.</p>
      </div>

      <div className="footer-details">
        <section aria-labelledby="footer-visit-title">
          <h2 id="footer-visit-title">Hier sind wir</h2>
          <address>
            <Link
              className="footer-address"
              href={maps}
              target="_blank"
              rel="noreferrer"
            >
              Argelanderstraße 75
              <br />
              53115 Bonn <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </address>
          <p className="footer-small">Im Herzen der Südstadt</p>
        </section>
        <section aria-labelledby="footer-hours-title">
          <h2 id="footer-hours-title">Zeit für Tee</h2>
          <dl className="footer-hours">
            <div>
              <dt>Dienstag–Freitag</dt>
              <dd>11–19 Uhr</dd>
            </div>
            <div>
              <dt>Samstag</dt>
              <dd>12–17 Uhr</dd>
            </div>
          </dl>
          <p className="footer-small">Sonntag & Montag geschlossen</p>
        </section>
        <section aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">In Verbindung</h2>
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
              Instagram <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>

      <nav className="footer-navigation" aria-label="Lupercia entdecken">
        {links.map(([href, text]) => (
          <Link href={href} key={href}>
            {text}
          </Link>
        ))}
      </nav>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Lupercia · Maria Moreno</span>
        <nav aria-label="Rechtliche Informationen">
          <Link href="/impressum/">Impressum</Link>
          <Link href="/datenschutz/">Datenschutz</Link>
        </nav>
      </div>
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
  return (
    <Image
      width={1200}
      height={1500}
      className={className}
      src={`/assets/images/${file}.webp`}
      alt={alt}
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
  return (
    <section
      className={`visit-section ${compact ? 'compact' : ''} ${withPhoto ? '' : 'visit-without-photo'}`}
      id="besuch"
    >
      <div className="visit-copy">
        <span className="eyebrow">Bonn Südstadt</span>
        <h2>
          Wir sehen uns
          <br />
          <em>beim Tee.</em>
        </h2>
        <p>
          Ein heller Platz am Fenster, eine Kanne guter Tee und Zeit zum
          Bleiben. Kommen Sie einfach vorbei.
        </p>
        <div className="visit-details">
          <div>
            <h3>Hier finden Sie uns</h3>
            <Link href={maps} target="_blank" rel="noreferrer">
              Argelanderstraße 75
              <br />
              53115 Bonn <ArrowUpRight size={15} />
            </Link>
          </div>
          <div>
            <h3>Öffnungszeiten</h3>
            <dl>
              <div>
                <dt>Dienstag–Freitag</dt>
                <dd>11–19 Uhr</dd>
              </div>
              <div>
                <dt>Samstag</dt>
                <dd>12–17 Uhr</dd>
              </div>
              <div>
                <dt>Sonntag & Montag</dt>
                <dd>geschlossen</dd>
              </div>
            </dl>
          </div>
        </div>
        <TextLink href={phone}>Einen Tisch anfragen</TextLink>
        <p className="small-note">
          Für mehrere Personen rufen Sie am besten kurz an.
          <br />
          <Link href={phone}>01516 7970350</Link>
        </p>
      </div>
      {withPhoto &&
        (photo ?? (
          <Photo
            file="lupercia-fensterblick"
            alt="Das blumengeschmückte Schaufenster von Lupercia mit Blick auf die Bonner Südstadt"
          />
        ))}
    </section>
  );
}
