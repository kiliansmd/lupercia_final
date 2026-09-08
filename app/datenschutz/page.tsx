import Link from '../site-link';
import { legalMetadata } from '../seo';
import { phone } from '../site-chrome';
import { CookieSettingsButton } from '../consent';
export const metadata = legalMetadata('/datenschutz', 'Datenschutz');
export default function Privacy() {
  return (
    <main id="main-content" className="legal-page">
      <span className="eyebrow">Lupercia · Ihre Privatsphäre</span>
      <h1>Datenschutz.</h1>
      <p className="legal-intro">
        Was beim Besuch unserer Website passiert – und was Sie selbst
        entscheiden.
      </p>
      <p className="small-note">Stand: 8. September 2026</p>
      <nav
        className="legal-navigation"
        aria-label="Inhalt der Datenschutzerklärung"
      >
        <Link href="#verantwortliche">Kontakt</Link>
        <Link href="#hosting">Website & Hosting</Link>
        <Link href="#auswahl">Cookies & Auswahl</Link>
        <Link href="#instagram">Instagram-Video</Link>
        <Link href="#instagram-feed">Instagram-Feed</Link>
        <Link href="#anfragen">Anfragen</Link>
        <Link href="#rechte">Ihre Rechte</Link>
      </nav>
      <div className="legal-callout">
        <p>
          <strong>
            Sie können diese Website ohne optionale Dienste nutzen.
          </strong>{' '}
          Das Instagram-Video und der Elfsight-Feed werden erst nach Ihrer
          jeweiligen Einwilligung geladen. Die eigene Website enthält keine
          Analyse- oder Werbetracker. Schriften und eigene Bilder werden lokal
          über unser Hosting ausgeliefert.
        </p>
        <CookieSettingsButton />
      </div>
      <section id="verantwortliche">
        <h2>1. Wer für die Verarbeitung verantwortlich ist</h2>
        <address>
          <p>
            Maria Moreno · Lupercia
            <br />
            Argelanderstraße 75, 53115 Bonn, Deutschland
            <br />
            E-Mail:{' '}
            <Link href="mailto:maria@lupercia.de">maria@lupercia.de</Link>
            <br />
            Telefon: <Link href={phone}>01516 7970350</Link>
          </p>
        </address>
        <p>
          Diese Informationen betreffen den Besuch dieser Website und die
          darüber angebahnten Kontaktaufnahmen. Personenbezogene Daten sind
          Informationen, die sich auf eine bestimmte oder bestimmbare Person
          beziehen, etwa eine E-Mail-Adresse oder IP-Adresse.
        </p>
      </section>
      <section id="hosting">
        <h2>2. Bereitstellung und Sicherheit der Website</h2>
        <p>
          Unsere Website wird über Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, USA, bereitgestellt. Bei jedem Aufruf verarbeitet
          der Hosting-Anbieter technisch erforderliche Verbindungsdaten:
          IP-Adresse, Datum und Uhrzeit, angeforderte Adresse bzw. Datei,
          übertragene Datenmenge, HTTP-Status, gegebenenfalls die zuvor besuchte
          Seite sowie Browser- und Betriebssysteminformationen.
        </p>
        <p>
          Die Verarbeitung dient der Auslieferung der Inhalte, der Stabilität,
          der Fehleranalyse und der Abwehr von Angriffen. Grundlage ist Art. 6
          Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist der sichere
          Betrieb unseres Internetangebots. Ohne die Übermittlung der
          notwendigen Verbindungsdaten kann die Website nicht angezeigt werden.
        </p>
        <p>
          Vercel betreibt ein internationales Auslieferungsnetz. Eine
          Verarbeitung in den USA und durch eingesetzte Infrastruktur-Anbieter
          ist möglich. Vercel erklärt die Teilnahme am EU-US Data Privacy
          Framework. Für davon erfasste Übermittlungen dient der
          Angemessenheitsbeschluss nach Art. 45 DSGVO als Grundlage; ergänzend
          beschreibt Vercel Standardvertragsklauseln in seinem
          Datenschutz-Vertragswerk. Informationen zu diesen Garantien und den
          Empfängern finden Sie in den{' '}
          <Link
            href="https://vercel.com/legal/dpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutz-Vertragsbedingungen von Vercel
          </Link>{' '}
          und den{' '}
          <Link
            href="https://vercel.com/legal/privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzhinweisen von Vercel
          </Link>
          .
        </p>
        <p>
          Verbindungs- und Sicherheitsdaten werden so lange vorgehalten, wie
          dies für die Bereitstellung, die Aufklärung von Störungen oder
          Angriffen und die Erfüllung rechtlicher Pflichten erforderlich ist.
          Die konkrete Speicherdauer richtet sich nach Datenart und den
          eingesetzten Hosting-Funktionen. Wir erstellen daraus keine eigenen
          Besucherprofile.
        </p>
      </section>
      <section id="auswahl">
        <h2>3. Cookies und Ihre Datenschutz-Auswahl</h2>
        <p>
          Cookies sind kleine Dateien im Browser. Vergleichbare
          Speichertechniken, insbesondere Local Storage, können ebenfalls
          Informationen auf Ihrem Gerät ablegen. Für unsere
          Einwilligungsverwaltung setzen wir einen eigenen, lokal ausgelieferten
          Mechanismus ein; dazu wird kein externer Consent-Anbieter kontaktiert.
        </p>
        <p>
          Unter dem Schlüssel <strong>lupercia:privacy:v1</strong> speichert der
          Browser Ihre Zustimmung oder Ablehnung je Dienst, den
          Entscheidungszeitpunkt, das Ablaufdatum und die Version der
          Einwilligungsinformationen. Diese Auswahl enthält keine von uns
          erzeugte Nutzerkennung und wird nicht an einen eigenen
          Einwilligungsserver übertragen. Sie gilt für 180 Tage, sofern Sie sie
          nicht früher ändern oder die Browserdaten löschen. Danach fragen wir
          erneut; eine neue wesentliche Änderung der Dienste erfordert ebenfalls
          eine neue Auswahl.
        </p>
        <p>
          Das Speichern und Lesen dieser notwendigen Auswahl erfolgt nach § 25
          Abs. 2 Nr. 2 TDDDG, damit wir Ihre angeforderten
          Datenschutzeinstellungen berücksichtigen können. Die zugehörige
          Verarbeitung stützen wir auf Art. 6 Abs. 1 lit. f DSGVO: unser
          Interesse, Ihre Entscheidung zuverlässig umzusetzen. Wenn Ihr Browser
          die Speicherung verhindert, gilt die Auswahl nur für den aktuellen
          Seitenaufruf.
        </p>
        <p>
          Für optionale Einbettungen sind Art. 6 Abs. 1 lit. a DSGVO und, soweit
          Informationen auf Ihrem Endgerät gespeichert oder ausgelesen werden, §
          25 Abs. 1 TDDDG die Grundlage. Kein Dienst ist vorausgewählt. „Alle
          ablehnen“ ist ohne zusätzliche Schritte möglich. Scrollen oder bloßes
          Weiterbesuchen gilt nicht als Zustimmung.
        </p>
        <h3>Einwilligung ändern oder widerrufen</h3>
        <p>
          Über die folgende Schaltfläche und jederzeit am Seitenende können Sie
          Ihre Auswahl ändern. Mit „Alle ablehnen“ widerrufen Sie beide
          optionalen Dienste; mit den einzelnen Schaltern und „Auswahl
          speichern“ können Sie getrennt entscheiden. Die Einbettungen werden
          dann entfernt und bei künftigen Aufrufen nicht mehr geladen. Die
          Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt
          (Art. 7 Abs. 3 DSGVO).
        </p>
        <CookieSettingsButton />
        <p>
          Bereits vom jeweiligen Anbieter gespeicherte Daten werden durch das
          Entfernen der Einbettung nicht automatisch gelöscht.
          Drittanbieter-Cookies können wir technisch nicht selbst entfernen. Sie
          können diese über Ihre Browser-Einstellungen löschen und
          Löschungsrechte beim jeweiligen Anbieter ausüben.
        </p>
      </section>
      <section id="instagram">
        <h2>4. Instagram-Video der Deutschen Welle</h2>
        <p>
          Auf der Seite „Maria“ bieten wir einen Beitrag von DW Volos über
          Instagram an. Anbieter für Nutzer im Europäischen Wirtschaftsraum ist
          Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5,
          Irland. Die Einbindung soll einen filmischen Einblick in Maria und die
          Mate-Kultur bei Lupercia geben.
        </p>
        <p>
          Erst wenn Sie „Instagram-Video“ erlauben, wird eine Verbindung zu
          Instagram hergestellt. Dabei kann Meta Ihre IP-Adresse, Browser- und
          Gerätedaten, die besuchte Seite sowie Interaktionen mit dem Player
          verarbeiten. Meta kann Cookies und ähnliche Technologien einsetzen,
          Informationen für eigene Analyse- und Werbezwecke verwenden und sie
          bei bestehender Anmeldung Ihrem Instagram-Konto zuordnen. Das Laden
          des Players erfordert eine Einwilligung unabhängig davon, ob Sie
          anschließend die Wiedergabe starten.
        </p>
        <p>
          Die Einbindung erfolgt auf Grundlage Ihrer Einwilligung gemäß
          Abschnitt 3. Eine Übermittlung an Meta-Unternehmen und Dienstleister
          außerhalb des EWR, insbesondere in die USA, ist möglich. Meta
          erläutert die dafür eingesetzten Angemessenheitsbeschlüsse und
          Standardvertragsklauseln in seinen Datenschutzhinweisen. Für die
          weitere eigene Verarbeitung, Verknüpfung mit einem Konto und Löschung
          ist Meta verantwortlich.
        </p>
        <p>
          Meta bestimmt die Speicherdauer nach Datenart, Nutzungszweck,
          Kontoeinstellungen und rechtlichen Erfordernissen. Cookie-Laufzeiten
          und Einstellungen beschreibt die{' '}
          <Link
            href="https://www.instagram.com/legal/cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie-Richtlinie von Instagram
          </Link>
          . Angaben zu Empfängern, Übermittlungen, Speicherdauer und Ihren
          Rechten finden Sie in der{' '}
          <Link
            href="https://privacycenter.instagram.com/policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von Meta für Instagram
          </Link>
          .
        </p>
      </section>
      <section id="instagram-feed">
        <h2>5. Instagram-Feed über Elfsight</h2>
        <p>
          Für die Galerie auf der Seite „Maria“ verwenden wir Elfsight SL, C. de
          la Constitució 17, AD700 Escaldes-Engordany, Andorra. Der Feed zeigt
          Einblicke in den Salon und wird erst geladen, wenn Sie „Instagram-Feed
          über Elfsight“ erlauben.
        </p>
        <p>
          Elfsight erhält dabei technische Daten, insbesondere IP-Adresse,
          Betriebssystem und Browsertyp. Laut Anbieter werden diese
          Verbindungsdaten sieben Tage zur Fehlererkennung und Sicherheit
          gespeichert. Das Cookie <strong>elfsight_viewed_recently</strong> auf
          core.service.elfsight.com verhindert laut Anbieter Mehrfachzählungen
          innerhalb von 15 Sekunden und hat eine entsprechende kurze Laufzeit.
          Inhalte können über weitere Auslieferungsserver bezogen werden; beim
          Öffnen von Instagram-Inhalten gelten zusätzlich die dortigen
          Datenschutzhinweise.
        </p>
        <p>
          Rechtsgrundlage für die Einbindung und einen optionalen
          Endgerätezugriff ist Ihre Einwilligung gemäß Abschnitt 3. Elfsight hat
          seinen Sitz außerhalb der EU in Andorra, für das ein
          EU-Angemessenheitsbeschluss besteht. Bei zusätzlich beteiligten
          Anbietern können weitere internationale Übermittlungen stattfinden.
          Die Anbieterinformationen erläutern die Verarbeitung und beteiligten
          Dienste.
        </p>
        <p>
          Weitere Angaben:{' '}
          <Link
            href="https://elfsight.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von Elfsight
          </Link>{' '}
          und{' '}
          <Link
            href="https://help.elfsight.com/article/418-elfsight-and-gdpr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elfsight-Hinweise zu Cookies und Datenschutz
          </Link>
          .
        </p>
      </section>
      <section id="anfragen">
        <h2>6. Kontakt per E-Mail oder Telefon</h2>
        <p>
          Wenn Sie uns kontaktieren, verarbeiten wir die mitgeteilten Kontakt-
          und Inhaltsdaten, etwa Name, E-Mail-Adresse, Telefonnummer und Ihr
          Anliegen. Das dient der Beantwortung und gegebenenfalls der
          Vorbereitung oder Durchführung einer Reservierung oder Bestellung.
          Vertragsbezogene Anfragen bearbeiten wir auf Grundlage von Art. 6 Abs.
          1 lit. b DSGVO; sonstige Anfragen auf Grundlage unseres berechtigten
          Interesses an ihrer Beantwortung nach Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Empfänger können die für die jeweilige Kommunikation eingesetzten
          E-Mail- und Telekommunikationsdienstleister sein. Wir speichern
          Anfragen bis zur abschließenden Bearbeitung und darüber hinaus nur,
          soweit gesetzliche Aufbewahrungspflichten oder die Geltendmachung bzw.
          Abwehr rechtlicher Ansprüche dies erfordern. Pflichtaufbewahrungen
          beruhen auf Art. 6 Abs. 1 lit. c DSGVO. Ohne die zur Bearbeitung
          erforderlichen Angaben können wir Ihre Anfrage gegebenenfalls nicht
          beantworten.
        </p>
      </section>
      <section id="externe-links">
        <h2>7. Links zu anderen Websites</h2>
        <p>
          Google Maps, Instagram und die unter „Salon“ genannten Presseberichte
          werden als gewöhnliche Links angeboten. Ihre Daten werden nicht
          bereits durch die Darstellung dieser Links an die verlinkten Anbieter
          übermittelt. Erst beim Öffnen verlassen Sie unser Angebot; dann gelten
          deren Datenschutzinformationen. Für ausdrücklich erlaubte Einbettungen
          gelten die Abschnitte 4 und 5.
        </p>
      </section>
      <section id="rechte">
        <h2>8. Ihre Rechte</h2>
        <p>
          Unter den gesetzlichen Voraussetzungen stehen Ihnen folgende Rechte
          zu:
        </p>
        <ul>
          <li>Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO);</li>
          <li>
            Berichtigung unrichtiger und Ergänzung unvollständiger Daten (Art.
            16 DSGVO);
          </li>
          <li>
            Löschung und Einschränkung der Verarbeitung (Art. 17 und 18 DSGVO);
          </li>
          <li>
            Datenübertragbarkeit bei automatisierter Verarbeitung auf Grundlage
            einer Einwilligung oder eines Vertrags (Art. 20 DSGVO);
          </li>
          <li>
            Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art.
            7 Abs. 3 DSGVO).
          </li>
        </ul>
        <div className="legal-callout">
          <h3>Ihr Widerspruchsrecht</h3>
          <p>
            Wenn wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, widersprechen (Art. 21 Abs. 1 DSGVO). Gegen eine
            Verarbeitung für Direktwerbung können Sie jederzeit ohne Begründung
            widersprechen (Art. 21 Abs. 2 DSGVO).
          </p>
        </div>
        <p>
          Für die Ausübung Ihrer Rechte genügt eine Nachricht an{' '}
          <Link href="mailto:maria@lupercia.de">maria@lupercia.de</Link> oder
          die oben genannte Postadresse. Eine automatisierte
          Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22
          DSGVO findet durch uns auf dieser Website nicht statt.
        </p>
        <h3>Beschwerde bei einer Aufsichtsbehörde</h3>
        <p>
          Sie haben nach Art. 77 DSGVO das Recht, sich bei einer
          Datenschutzaufsichtsbehörde zu beschweren, insbesondere an Ihrem
          gewöhnlichen Aufenthaltsort, Ihrem Arbeitsplatz oder dem Ort des
          vermuteten Verstoßes. Für Nordrhein-Westfalen erreichen Sie die
          Landesbeauftragte für Datenschutz und Informationsfreiheit
          Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, unter{' '}
          <Link href="mailto:poststelle@ldi.nrw.de">poststelle@ldi.nrw.de</Link>
          . Weitere Kontaktmöglichkeiten:{' '}
          <Link
            href="https://www.ldi.nrw.de/kontakt"
            target="_blank"
            rel="noopener noreferrer"
          >
            LDI NRW
          </Link>
          .
        </p>
      </section>
      <Link className="text-link" href="/impressum">
        Zum Impressum <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
