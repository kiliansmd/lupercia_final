import Link from '../site-link';
import { legalMetadata } from '../seo';
import { phone } from '../site-chrome';
export const metadata = legalMetadata('/impressum', 'Impressum');
export default function Imprint() {
  return (
    <main id="main-content" className="legal-page">
      <span className="eyebrow">Rechtliches</span>
      <h1>Impressum.</h1>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Lupercia
        <br />
        Inhaberin: Maria Moreno
        <br />
        Argelanderstraße 75
        <br />
        53115 Bonn
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: <Link href={phone}>01516 7970350</Link>
      </p>
      <p>
        Eine elektronische Kontaktaufnahme ist über das verlinkte
        Instagram-Profil möglich:{' '}
        <Link
          href="https://www.instagram.com/lupercia.de/"
          target="_blank"
          rel="noreferrer"
        >
          @lupercia.de
        </Link>
        .
      </p>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <Link className="text-link" href="/">
        Zurück zu Lupercia <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
