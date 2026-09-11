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
        <div className="mate-intro-gallery">
          <figure>
            <Image
              src="/assets/images/maria/teeperlen.webp"
              width={800}
              height={1067}
              alt="Lose gerollte Blätter in einer silbernen Schale vor dem Lupercia-Regal"
              loading="lazy"
              sizes="(max-width: 760px) 58vw, 38vw"
            />
            <figcaption>
              Die Auswahl beginnt bei Duft, Blatt und Charakter.
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/images/tee-genuss/gruener-tee.webp"
              width={960}
              height={1331}
              alt="Glaskanne und Glas auf einem Aufgusstablett im hellen Lupercia-Salon"
              loading="lazy"
              sizes="(max-width: 760px) 38vw, 29vw"
            />
            <figcaption>
              Zeit, Temperatur und Wasser machen den Aufguss.
            </figcaption>
          </figure>
        </div>
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
            src="/assets/images/mate-moment.svg"
            width={960}
            height={1280}
            alt="Mategefäß mit Bombilla, Rosen und einem Stück Kuchen im Lupercia-Salon"
            loading="lazy"
            sizes="(max-width: 760px) 88vw, 44vw"
            unoptimized
          />
          <figcaption>
            Ein Mate, etwas Süßes und Zeit für den Augenblick.
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow">Im Salon oder zu Hause</span>
          <h2 id="mate-moment-title">
            Ein kleiner Moment.
            <br />
            <em>Ganz in Ruhe.</em>
          </h2>
          <p>
            Mate darf ein gemeinsames Ritual sein – oder eine persönliche Pause.
            Maria zeigt Ihnen, wie Sie die Zubereitung so gestalten, dass sie zu
            Ihrem Alltag und Ihrem Geschmack passt.
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
