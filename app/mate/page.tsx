import Image from 'next/image';
import { Invitation } from '../editorial';
import { pageMetadata, PageSeo } from '../seo';
import { TextLink } from '../site-chrome';

export const metadata = pageMetadata('/mate');

export default function Mate() {
  return (
    <main id="main-content" className="page-width detail-page tea-page">
      <PageSeo path="/mate" />
      <header className="tea-still-life">
        <figure className="tea-still-life-green">
          <Image
            src="/assets/images/salon/mategefaesse.webp"
            width={1100}
            height={1343}
            alt="Hölzerne Mategefäße mit verzierten Metallrändern und Bombillas bei Lupercia"
            loading="eager"
            fetchPriority="high"
          />
          <figcaption>
            Kalebassen und Bombillas. Das Ritual beginnt beim Gefäß.
          </figcaption>
        </figure>
        <div className="tea-still-life-copy">
          <span className="eyebrow">Mate aus Argentinien · Marias Auswahl</span>
          <h1>
            Ein Stück Argentinien.
            <br />
            <em>Mitten in Bonn.</em>
          </h1>
          <p>
            Mate ist Marias persönliche Verbindung zu ihrer Heimat und eine
            charakteristische Besonderheit bei Lupercia.
          </p>
          <a className="tea-explore" href="#mate-welt">
            Die Mate-Welt entdecken <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="tea-still-life-amber">
          <Image
            src="/assets/images/tee-genuss/kuchen-und-mate.webp"
            width={1100}
            height={1031}
            alt="Goldbrauner Kuchen neben einem traditionellen Mategefäß mit Bombilla"
          />
          <figcaption>Mate und etwas Süßes. Ein Moment zum Teilen.</figcaption>
        </figure>
      </header>

      <section className="tea-mate" id="mate-welt" aria-labelledby="mate-title">
        <div className="tea-mate-copy">
          <span className="eyebrow">Yerba · Kalebasse · Bombilla</span>
          <h2 id="mate-title">
            Ein Gefäß.
            <br />
            <em>Ein gemeinsames Ritual.</em>
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
          <Image
            src="/assets/images/tee-genuss/kuchen-und-mate.webp"
            width={1100}
            height={1031}
            alt="Traditionelles Mategefäß mit Bombilla neben einem goldbraunen Kuchen"
            loading="lazy"
          />
          <figcaption>
            Mate entdecken, zubereiten und miteinander teilen.
          </figcaption>
        </figure>
      </section>

      <Invitation
        eyebrow="Persönliche Beratung"
        title={
          <>
            Welcher Mate
            <br />
            <em>passt zu Ihnen?</em>
          </>
        }
        description="Entdecken Sie Marias Auswahl im Salon. Sie berät Sie zu Yerba, Gefäß, Bombilla und der traditionellen Zubereitung."
      />
    </main>
  );
}
