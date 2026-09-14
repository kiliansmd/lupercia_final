import Image from 'next/image';
import { Invitation } from '../editorial';
import { pageMetadata, PageSeo } from '../seo';
import { TextLink } from '../site-chrome';

export const metadata = pageMetadata('/mate');

const ritual = [
  [
    '01',
    'Yerba einfüllen',
    'Die Kalebasse wird etwa zu zwei Dritteln mit Mateblättern gefüllt.',
  ],
  [
    '02',
    'Blätter neigen',
    'Durch sanftes Schütteln entsteht an einer Seite Platz für die Bombilla.',
  ],
  [
    '03',
    'Wasser aufgießen',
    'Heißes, nicht kochendes Wasser wird behutsam an derselben Stelle aufgegossen.',
  ],
  [
    '04',
    'Teilen & nachgießen',
    'Der Mate wird immer wieder aufgegossen und in Gesellschaft weitergereicht.',
  ],
];

export default function Mate() {
  return (
    <main id="main-content" className="page-width detail-page mate-page">
      <PageSeo path="/mate" />

      <header className="mate-hero">
        <div className="mate-hero-copy">
          <span className="eyebrow">Mate aus Argentinien · Marias Auswahl</span>
          <h1>
            Mehr als ein Getränk.
            <br />
            <em>Ein Ritual, das verbindet.</em>
          </h1>
          <p>
            Mate gehört zu Marias argentinischer Heimat. Bei Lupercia finden Sie
            ausgewählte Yerbas, Kalebassen und Bombillas – und eine persönliche
            Einführung in die traditionelle Zubereitung.
          </p>
          <a className="tea-explore" href="#mate-entdecken">
            Mate entdecken <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure>
          <Image
            src="/assets/images/mate-trinkgefaesse-hero.webp"
            width={1600}
            height={837}
            alt="Vier farbig eingefasste Mategefäße aus Holz mit verzierten Bombillas"
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 760px) 100vw, 88vw"
          />
          <figcaption>
            Kalebasse und Bombilla. Bereit für den ersten Aufguss.
          </figcaption>
        </figure>
      </header>

      <section
        className="mate-intro"
        id="mate-entdecken"
        aria-labelledby="mate-intro-title"
      >
        <div>
          <span className="eyebrow">Marias Stück Argentinien</span>
          <h2 id="mate-intro-title">
            Ein Geschmack.
            <br />
            <em>Viele Begegnungen.</em>
          </h2>
        </div>
        <div className="mate-intro-copy">
          <p>
            In Argentinien ist Mate Teil des Alltags: Man bereitet ihn
            füreinander zu, reicht ihn weiter und nimmt sich Zeit. Nicht die
            Eile, sondern das Miteinander bestimmt den Rhythmus.
          </p>
          <p>
            Maria ist mit dieser Kultur aufgewachsen. Im Salon zeigt sie, wie
            unterschiedlich Yerba schmecken kann und wie Gefäß, Bombilla und
            Aufguss zusammenspielen.
          </p>
          <TextLink href="/maria#geschichte">
            Marias Geschichte kennenlernen
          </TextLink>
        </div>
        <figure className="mate-intro-gallery">
          <Image
            src="/assets/images/mate/yerba-mate-sorten-im-regal.svg"
            width={1600}
            height={1200}
            alt="Verschiedene farbenfrohe Yerba-Mate-Sorten in Marias Regal"
            loading="lazy"
            sizes="(max-width: 760px) 88vw, 86vw"
            unoptimized
          />
          <figcaption>
            Verschiedene Yerba-Mate-Sorten – von sanft bis kräftig und herb.
          </figcaption>
        </figure>
      </section>

      <section className="mate-world" aria-labelledby="mate-world-title">
        <figure>
          <Image
            src="/assets/images/einblicke/teeregal-1080.webp"
            width={1080}
            height={1440}
            alt="Das hohe Lupercia-Regal mit sorgfältig beschrifteten schwarzen Vorratsdosen"
            loading="lazy"
            sizes="(max-width: 760px) 88vw, 42vw"
          />
          <figcaption>
            Persönlich ausgewählt und im Salon für Sie bereit.
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow">Die Mate-Welt bei Lupercia</span>
          <h2 id="mate-world-title">
            Alles für Ihren
            <br />
            <em>eigenen Mate-Moment.</em>
          </h2>
          <dl className="mate-essentials">
            <div>
              <dt>Yerba Mate</dt>
              <dd>
                Ausgewählte Sorten mit eigenem Charakter – von sanft bis kräftig
                und herb.
              </dd>
            </div>
            <div>
              <dt>Kalebassen</dt>
              <dd>
                Gefäße in traditionellen und modernen Formen, die gut in der
                Hand liegen.
              </dd>
            </div>
            <div>
              <dt>Bombillas</dt>
              <dd>
                Das typische Trinkrohr mit Sieb, passend zu Gefäß und
                persönlichem Ritual.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mate-moment" aria-labelledby="mate-moment-title">
        <figure>
          <Image
            src="/assets/images/mate/mate-miteinander.svg"
            width={1354}
            height={1162}
            alt="Zwei Menschen reichen einander ein Mategefäß mit Bombilla"
            loading="lazy"
            sizes="(max-width: 760px) 88vw, 44vw"
            unoptimized
          />
          <figcaption>
            Weitergereicht von Hand zu Hand – so wird Mate zum gemeinsamen Ritual.
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow">Ein Ritual des Miteinanders</span>
          <h2 id="mate-moment-title">
            Eine Kalebasse.
            <br />
            <em>Viele Begegnungen.</em>
          </h2>
          <p>
            Traditionell wird Mate in der Runde geteilt: Eine Person bereitet
            ihn zu, gießt nach und reicht die Kalebasse weiter. Dieses einfache
            Ritual schafft Nähe, lädt zum Gespräch ein und gibt dem gemeinsamen
            Augenblick seinen eigenen Rhythmus.
          </p>
        </div>
      </section>

      <section className="mate-ritual" aria-labelledby="mate-ritual-title">
        <header>
          <span className="eyebrow">Schritt für Schritt</span>
          <h2 id="mate-ritual-title">
            So beginnt
            <br />
            <em>das Ritual.</em>
          </h2>
          <p>
            Die Zubereitung wird mit ein wenig Übung zur vertrauten Geste. Maria
            zeigt Ihnen im Salon jeden Schritt und beantwortet Ihre Fragen.
          </p>
        </header>
        <ol>
          {ritual.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <Invitation
        eyebrow="Persönliche Mate-Beratung"
        title={
          <>
            Neugierig auf
            <br />
            <em>Ihren ersten Mate?</em>
          </>
        }
        description="Besuchen Sie Maria im Salon. Gemeinsam finden Sie eine Yerba, ein passendes Gefäß und die Bombilla für Ihren Mate-Moment zu Hause."
      />
    </main>
  );
}
