import Link from './site-link';
export default function NotFound() {
  return (
    <main id="main-content" className="not-found page-width">
      <span className="eyebrow">404 · Hier ist gerade kein Tee</span>
      <h1>
        Zurück an
        <br />
        <em>unseren Tisch.</em>
      </h1>
      <p>
        Diese Seite gibt es leider nicht. Entdecken Sie stattdessen Marias
        Teewelt.
      </p>
      <Link className="text-link" href="/">
        Zur Startseite <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
