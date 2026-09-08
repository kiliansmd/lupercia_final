import { pageMetadata, PageSeo } from '../seo';
import Image from 'next/image';
import Link from '../site-link';
import { Invitation } from '../editorial';
import { TextLink } from '../site-chrome';

export const metadata = pageMetadata('/tee-genuss');

const teas = [
  ['Schwarzer Tee', 'Kräftig, malzig oder fein und duftig.'],
  ['Grüner Tee', 'Frisch, klar und vielschichtig.'],
  ['Weißer Tee', 'Sanft, floral und zurückhaltend.'],
  ['Kräuter & Früchte', 'Duftende Mischungen für jede Tageszeit.'],
];

const photos = {
  'gruener-tee': {
    width: 960,
    height: 1331,
    alt: 'Grüne Teeblätter entfalten sich in einer gläsernen Kanne auf einem Bambustablett am Fenster von Lupercia',
  },
  'tee-im-glas': {
    width: 960,
    height: 1280,
    alt: 'Goldfarben leuchtender Tee in einer Glaskanne auf einem gläsernen Stövchen',
  },
  'kuchen-und-mate': {
    width: 1100,
    height: 1031,
    alt: 'Goldbrauner Kuchen auf einer Glasplatte neben einem traditionellen Mategefäß mit verziertem Metallrand und Bombilla',
  },
  'porzellan-und-tee': {
    width: 1000,
    height: 1357,
    alt: 'Blaue Dunoon-Porzellantasse mit Schneeeule und einem kleinen Teesieb neben einer Holzschale mit losem Kräutertee',
  },
  'tea-time-etagere': {
    width: 1200,
    height: 1600,
    alt: 'Dreistöckige Tea-Time-Etagere mit feinem Gebäck, Kuchen, Sandwiches und herzhaft belegten Broten',
  },
  'scones-tea-time': {
    width: 1000,
    height: 1063,
    alt: 'Ein gedecktes Tablett mit Scones, Clotted Cream, Konfitüre und feinem floralen Porzellan',
  },
  kuchen: {
    width: 900,
    height: 995,
    alt: 'Eine goldgelbe Tarte mit weißer Tupfendekoration vor dem Teeregal von Lupercia',
  },
};

function TeaPhoto({
  name,
  eager = false,
}: {
  name: keyof typeof photos;
  eager?: boolean;
}) {
  return (
    <Image
      src={`/assets/images/tee-genuss/${name}.webp`}
      {...photos[name]}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  );
}

export default function Tea() {
  return (
    <main id="main-content" className="page-width detail-page tea-page">
      <PageSeo path='/tee-genuss' />
      <header className="tea-still-life">
        <div className="tea-still-life-copy">
          <span className="eyebrow">Tee kaufen in Bonn · Marias Auswahl</span>
          <h1>
            Rund um
            <br />
            <em>die Tasse.</em>
          </h1>
          <p>
            Rund 100 Teesorten, Mate aus Argentinien und ausgewähltes Porzellan:
            Entdecken Sie Ihren Lieblingstee in unserem Teeladen in der Bonner
            Südstadt. Maria berät Sie persönlich zu Geschmack und Zubereitung.
          </p>
          <Link className="tea-explore" href="#tee">
            Die Teewelt entdecken <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <figure className="tea-still-life-green">
          <TeaPhoto name="gruener-tee" eager />
          <figcaption>Vom Blatt zum ersten Aufguss.</figcaption>
        </figure>
        <figure className="tea-still-life-amber">
          <TeaPhoto name="tee-im-glas" />
          <figcaption>Ein warmer Moment im Glas.</figcaption>
        </figure>
      </header>

      <nav className="tea-index" aria-label="Das Sortiment">
        <Link href="#tee">
          <span>01</span> Tee
        </Link>
        <Link href="#mate">
          <span>02</span> Mate
        </Link>
        <Link href="#geschirr">
          <span>03</span> Geschirr
        </Link>
        <Link href="#feinkost">
          <span>04</span> Feinkost & Tea Time
        </Link>
      </nav>

      <section
        className="tea-selection"
        id="tee"
        aria-labelledby="tea-selection-title"
      >
        <div className="tea-selection-heading">
          <div>
            <span className="eyebrow">01 — Tee</span>
            <h2 id="tea-selection-title">
              Eine Tasse.
              <br />
              <em>So viele Welten.</em>
            </h2>
          </div>
          <div className="tea-selection-copy">
            <p>
              Rund 100 Sorten laden dazu ein, Vertrautes wiederzufinden und
              Neues zu entdecken. Maria wählt mit Blick auf Herkunft, Charakter
              und den Moment aus, zu dem ein Tee passen soll.
            </p>
            <p className="tea-quality-note">
              Herkunft und nachvollziehbare Qualität zählen. Bio-Qualität ist
              bei den jeweiligen Tees ausgewiesen.
            </p>
          </div>
        </div>
        <ul className="tea-flavours">
          {teas.map(([title, description]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="tea-mate" id="mate" aria-labelledby="tea-mate-title">
        <div className="tea-mate-copy">
          <span className="eyebrow">02 — Mate aus Argentinien</span>
          <h2 id="tea-mate-title">
            Ein Stück Argentinien.
            <br />
            <em>Mitten in Bonn.</em>
          </h2>
          <p>
            Unsere Welt beginnt beim Tee. Und manchmal führt sie bis nach
            Argentinien. Mate ist Marias persönliche Verbindung zu ihrer Heimat
            und eine charakteristische Besonderheit bei Lupercia.
          </p>
          <p>
            Ausgewählte Yerbas, Kalebassen und Bombillas gehören zu dieser Welt.
            Maria erklärt Ihnen persönlich, was sie ausmacht – und wie aus dem
            Aufgießen ein gemeinsamer Moment wird.
          </p>
          <TextLink href="/maria#geschichte">Die Geschichte dahinter</TextLink>
        </div>
        <figure>
          <TeaPhoto name="kuchen-und-mate" />
          <figcaption>Mate und etwas Süßes. Ein Moment zum Teilen.</figcaption>
        </figure>
      </section>

      <section
        className="tea-porcelain"
        id="geschirr"
        aria-labelledby="tea-porcelain-title"
      >
        <div className="tea-porcelain-heading">
          <span className="eyebrow">03 — Geschirr</span>
          <h2 id="tea-porcelain-title">
            Für die
            <br />
            Tea Time
            <br />
            <em>zu Hause.</em>
          </h2>
        </div>
        <figure>
          <TeaPhoto name="porzellan-und-tee" />
          <figcaption>Ein Lieblingsstück. Und Ihr Lieblingstee.</figcaption>
        </figure>
        <div className="tea-porcelain-copy">
          <p>
            Maria wählt Geschirr europäischer Hersteller und besondere Stücke
            aus, die aus dem Aufgießen ein persönliches Ritual machen.
          </p>
          <p>
            Florale Dekore, Tassen, Kannen und Lieblingsstücke mit
            Persönlichkeit: Entdecken Sie im Salon, was zu Ihnen und Ihrem Tee
            passt.
          </p>
          <TextLink href="/salon#porzellan">Im Salon entdecken</TextLink>
        </div>
      </section>

      <section
        className="tea-feast"
        id="feinkost"
        aria-labelledby="tea-feast-title"
      >
        <header className="tea-feast-heading">
          <span className="eyebrow">04 — Feinkost & Tea Time</span>
          <h2 id="tea-feast-title">
            Die kleinen,
            <br />
            <em>feinen Begleiter.</em>
          </h2>
        </header>
        <div className="tea-feast-layout">
          <div className="tea-feast-copy">
            <p className="tea-feast-lead">
              Tee, feines Gebäck und herzhafte Kleinigkeiten werden zu einem
              Nachmittag, der nicht eilig sein muss.
            </p>
            <ul className="tea-feast-menu">
              <li>Scones mit Clotted Cream</li>
              <li>Argentinisches Gebäck</li>
              <li>Sandwiches & hausgemachter Kuchen</li>
              <li>Marmelade & weitere Begleiter</li>
            </ul>
            <TextLink href="/salon#tea-time">Tea Time in Bonn anfragen</TextLink>
          </div>
          <figure className="tea-feast-main">
            <TeaPhoto name="tea-time-etagere" />
            <figcaption>
              Süß und herzhaft. Die Tea Time bei Lupercia.
            </figcaption>
          </figure>
          <div className="tea-feast-details">
            <figure>
              <TeaPhoto name="scones-tea-time" />
              <figcaption>Scones, Clotted Cream und Konfitüre.</figcaption>
            </figure>
            <figure>
              <TeaPhoto name="kuchen" />
              <figcaption>Ein Stück Kuchen zum Tee.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Invitation
        eyebrow="Persönliche Beratung"
        title={
          <>
            Welcher Tee
            <br />
            <em>passt zu Ihnen?</em>
          </>
        }
        description="Erzählen Sie Maria, was Sie gerne trinken. Gemeinsam finden Sie Vertrautes, neue Lieblingssorten oder ein Geschenk für einen besonderen Menschen."
      />
    </main>
  );
}
