import Link from '../site-link';
import type { Metadata } from 'next';
import { phone } from '../site-chrome';
export const metadata: Metadata = { title: 'Datenschutz' };
export default function Privacy() {
  return (
    <main id="main-content" className="legal-page">
      <span className="eyebrow">Rechtliches</span>
      <h1>Datenschutz.</h1>
      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Maria Moreno, Lupercia
        <br />
        Argelanderstraße 75, 53115 Bonn
        <br />
        Telefon: <Link href={phone}>01516 7970350</Link>
      </p>
      <h2>2. Bereitstellung der Website</h2>
      <p>
        Beim Aufruf dieser Website werden technisch notwendige Verbindungsdaten
        verarbeitet, insbesondere die IP-Adresse, der Zeitpunkt des Aufrufs, die
        angeforderte Datei sowie Browser- und Betriebssysteminformationen. Dies
        dient der sicheren und fehlerfreien Bereitstellung der Website auf
        Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
      </p>
      <h2>3. Lokale Schriften und Medien</h2>
      <p>
        Die Schriften und eigenen Bilder werden direkt von dieser Website
        ausgeliefert. Eine Verbindung zu Google Fonts wird nicht hergestellt.
        Diese Website verwendet keine externen Analysewerkzeuge und setzt selbst
        keine Cookies. Für die eingebetteten Instagram-Inhalte gelten die
        Hinweise im folgenden Abschnitt.
      </p>
      <h2 id="instagram">4. Eingebetteter Instagram-Beitrag</h2>
      <p>
        Auf der Seite „Maria“ können Sie einen Instagram-Beitrag von DW Volos
        ansehen. Der Player wird beim Aufruf der Seite automatisch von
        Instagram/Meta geladen. Dabei werden Verbindungsdaten, insbesondere Ihre
        IP-Adresse und Browserinformationen, an den Anbieter übertragen.
        Instagram kann Cookies oder ähnliche Technologien verwenden und den
        Aufruf bei einer bestehenden Anmeldung Ihrem Konto zuordnen.
      </p>
      <p>
        Die Videowiedergabe starten Sie über die Bedienelemente des Players. Die
        Verbindung zu Instagram wird bereits beim Laden des Players hergestellt.
        Weitere Informationen finden Sie in der{' '}
        <Link
          href="https://www.instagram.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Instagram
        </Link>
        .
      </p>
      <h3 id="instagram-feed">Instagram-Feed über Elfsight</h3>
      <p>
        Am Ende der Seite „Maria“ zeigen wir außerdem einen Instagram-Feed über
        Elfsight. Das Elfsight-Skript wird automatisch geladen; die Inhalte des
        Feeds werden beim Annähern an diesen Seitenbereich nachgeladen. Dabei
        erhält Elfsight technische Verbindungsdaten, darunter IP-Adresse,
        Betriebssystem und Browsertyp. Elfsight kann ein Cookie verwenden, um
        wiederholte Aufrufe zu erkennen. Weitere Informationen finden Sie in der{' '}
        <Link
          href="https://elfsight.com/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Elfsight
        </Link>
        .
      </p>
      <h2>5. Externe Links</h2>
      <p>
        Externe Seiten wie Google Maps und Instagram werden beim Auswählen des
        jeweiligen Links geöffnet. Für den automatisch geladenen
        Instagram-Player und den Feed gilt zusätzlich Abschnitt 4. Nach dem Öffnen eines
        externen Links gelten die Datenschutzbestimmungen des jeweiligen
        Anbieters.
      </p>
      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf
        Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch. Außerdem können Sie sich bei einer
        Datenschutzaufsichtsbehörde beschweren.
      </p>
      <h2>7. Kontakt</h2>
      <p>
        Für Datenschutzanfragen erreichen Sie die verantwortliche Stelle unter
        der oben genannten Telefonnummer oder postalisch.
      </p>
      <p className="small-note">Stand: September 2026</p>
      <Link className="text-link" href="/">
        Zurück zu Lupercia <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
