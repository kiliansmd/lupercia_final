import Link from '../site-link';
import { legalMetadata } from '../seo';
import { phone } from '../site-chrome';
export const metadata = legalMetadata('/impressum', 'Impressum');
export default function Imprint() {
  return (
    <main id="main-content" className="legal-page">
      <span className="eyebrow">Lupercia · Rechtliche Informationen</span>
      <h1>Impressum.</h1>
      <p className="legal-intro">
        Die Menschen hinter dieser Website. Und der direkte Weg zu uns.
      </p>
      <nav className="legal-navigation" aria-label="Rechtliche Seiten">
        <Link href="/impressum" aria-current="page">
          Impressum
        </Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
      <section aria-labelledby="anbieter">
        <h2 id="anbieter">Angaben gemäß § 5 DDG</h2>
        <address>
          <p>
            Maria Moreno
            <br />
            Lupercia – Finest Teas & Tea Ceremonies
            <br />
            Argelanderstraße 75
            <br />
            53115 Bonn
            <br />
            Deutschland
          </p>
        </address>
      </section>
      <section aria-labelledby="kontakt">
        <h2 id="kontakt">Kontakt</h2>
        <p>
          E-Mail: <Link href="mailto:maria@lupercia.de">maria@lupercia.de</Link>
          <br />
          Telefon: <Link href={phone}>01516 7970350</Link>
        </p>
      </section>
      <section aria-labelledby="streitbeilegung">
        <h2 id="streitbeilegung">Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
      <div className="legal-callout">
        <p>
          Informationen zum Umgang mit personenbezogenen Daten und zu Ihren
          Wahlmöglichkeiten finden Sie in unserer{' '}
          <Link href="/datenschutz">Datenschutzerklärung</Link>.
        </p>
      </div>
      <Link className="text-link" href="/">
        Zurück zu Lupercia <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
