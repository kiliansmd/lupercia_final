import { DetailPhoto } from '../detail-photo';
import Link from '../site-link';
import { pageMetadata, PageSeo } from '../seo';
import { Plus } from 'lucide-react';
import { PageIntro, Invitation } from '../editorial';
import { Photo, TextLink, phone } from '../site-chrome';
export const metadata = pageMetadata('/veranstaltungen');
const formats = [
  {
    name: 'Lupercias Teerunde',
    tag: 'Gemeinsam am Tisch',
    text: 'Ein Tisch. Eine Kanne Tee. Neue Begegnungen. Lupercias Teerunde lädt zum Kennenlernen und gemeinsamen Teetrinken ein. Den nächsten Termin erfahren Sie direkt bei Maria.',
  },
  {
    name: 'Verkostungen & Workshops',
    tag: 'Mit allen Sinnen entdecken',
    text: 'Tee bewusst probieren und mehr über Herkunft, Aufguss und Geschmack erfahren. Im direkten Vergleich werden die Unterschiede erlebbar. Termine und freie Plätze erfahren Sie persönlich bei Maria.',
  },
  {
    name: 'Tea & Books',
    tag: 'Geschichten teilen',
    text: 'Geschichten, Gespräche und gemeinsam geteilte Zeit – mit einer Kanne Tee in der Mitte. Maria informiert Sie über die kommenden Begegnungen rund um Bücher.',
  },
  {
    name: 'Tango & Tea',
    tag: 'Argentinien zu Gast',
    text: 'Argentinische Kultur trifft Tea Time. Entdecken Sie Marias Verbindung zu Argentinien und erfahren Sie im persönlichen Gespräch mehr über das nächste Treffen.',
  },
  {
    name: 'Tea Time unter Frauen',
    tag: 'Von einer Frau für Frauen',
    text: 'Ein entspannter Nachmittag für Gespräche und guten Tee. Die Termine werden noch bekannt gegeben; fragen Sie bei Maria nach.',
  },
];
export default function Events() {
  return (
    <main id="main-content" className="page-width detail-page">
      <PageSeo path='/veranstaltungen' />
      <PageIntro
        eyebrow="Teeverkostungen & Veranstaltungen in Bonn"
        title={
          <>
            Tee bringt
            <br />
            <em>Menschen zusammen.</em>
          </>
        }
        description="Teeverkostungen, Workshops und private Teerunden in der Bonner Südstadt – bei Lupercia in der Argelanderstraße 75. Termine und freie Plätze erfahren Sie direkt bei Maria."
      />
      <figure className="wide-photo">
        <Photo
          file="lupercia-fensterplatz-bonn"
          alt="Ein einladender Tisch am hellen Fenster im Lupercia Salon"
          eager
        />
        <figcaption>
          Ein Tisch für gute Gespräche. In der Bonner Südstadt.
        </figcaption>
      </figure>
      <section className="events-section">
        <div>
          <span className="eyebrow">Viele Wege, Tee zu teilen</span>
          <h2>
            Zusammen
            <br />
            <em>ist es schöner.</em>
          </h2>
          <p>
            Aktuelle Termine und freie Plätze erfahren Sie persönlich bei Maria.
          </p>
          <TextLink href={phone}>Termine anfragen</TextLink>
          <figure className="events-encounter">
            <DetailPhoto name="gemeinsam-tee-trinken" sizes="(max-width: 760px) 90vw, 30vw" />
            <figcaption>Tee teilen. Ins Gespräch kommen.</figcaption>
          </figure>
        </div>
        <div className="event-list">
          {formats.map((f, i) => (
            <details key={f.name} className="event-item" open={i === 0}>
              <summary>
                <span className="event-number">0{i + 1}</span>
                <span>
                  <span className="eyebrow">{f.tag}</span>
                  <span className="event-name">{f.name}</span>
                </span>
                <Plus size={21} aria-hidden="true" />
              </summary>
              <div className="event-body">
                <p>{f.text}</p>
                <Link href={phone}>
                  Bei Maria anfragen <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="private-round">
        <span className="eyebrow">Private Runden</span>
        <h2>
          Ihre Runde.
          <br />
          <em>Marias Teeauswahl.</em>
        </h2>
        <p>
          Private Verkostungen und besondere Teestunden für kleine Gruppen
          werden individuell mit Maria abgestimmt. Möglichkeiten, Kapazität und
          Konditionen besprechen Sie direkt miteinander.
        </p>
        <TextLink href={phone}>Eine private Runde anfragen</TextLink>
        <div className="private-round-photos">
          <figure>
            <DetailPhoto name="gedeckte-teetafel" sizes="(max-width: 760px) 50vw, 42vw" />
            <figcaption>Liebevoll gedeckt, gemeinsam genossen.</figcaption>
          </figure>
          <figure>
            <DetailPhoto name="scones-tablett" sizes="(max-width: 760px) 32vw, 28vw" />
            <figcaption>Feine Begleiter zur Teestunde.</figcaption>
          </figure>
        </div>
      </section>
      <Invitation
        title={
          <>
            Die nächste Begegnung
            <br />
            <em>beginnt mit einem Anruf.</em>
          </>
        }
        description="Maria informiert Sie über kommende Teerunden, Verkostungen und kulturelle Begegnungen. Sie freut sich, von Ihnen zu hören."
        label="Maria kontaktieren"
      />
    </main>
  );
}
