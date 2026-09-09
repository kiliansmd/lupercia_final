import { DetailPhoto } from '../detail-photo';
import Image from 'next/image';
import Link from '../site-link';
import { pageMetadata, PageSeo } from '../seo';
import { TextLink } from '../site-chrome';
import InstagramFeature from './instagram-feature';
import InstagramFeed from './instagram-feed';

export const metadata = pageMetadata('/maria');

export default function Maria() {
  return (
    <main id="main-content" className="page-width detail-page maria-page">
      <PageSeo path='/maria' />
      <header className="maria-heading">
        <div>
          <span className="eyebrow">
            Tee-Sommelière · Gastgeberin in Bonn
          </span>
          <h1>
            Maria <em>Moreno.</em>
          </h1>
          <p className="maria-heading-motto">Meine Welt beginnt mit Tee.</p>
        </div>
        <div className="maria-heading-note">
          <p>
            Mein Name ist Maria Moreno und ich bin die Gründerin von Lupercia.
            Als Tee-Sommelière begrüße ich Sie in der Bonner Südstadt.
            Mein Teeladen trägt den Namen meiner Großmutter.
          </p>
          <Link className="text-link" href="#geschichte">
            Meine Geschichte <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </header>

      <div className="maria-biography">
        <figure className="maria-portrait">
          <DetailPhoto name="maria-teetafel" sizes="(max-width: 760px) 85vw, (max-width: 1440px) 42vw, 560px" eager />
          <figcaption>Maria Moreno. Ihre Gastgeberin bei Lupercia.</figcaption>
        </figure>
        <section
          className="maria-story"
          id="geschichte"
          aria-labelledby="maria-story-title"
        >
          <span className="eyebrow">Wo meine Geschichte beginnt</span>
          <h2 id="maria-story-title">
            Wie ich zum Tee
            <br />
            <em>gefunden habe.</em>
          </h2>
          <p>
            Mein Weg zum Tee begann schon in meiner Kindheit. Meine Großmutter
            hieß Lupercia. Nachmittags deckte sie den Teetisch für uns
            Enkelkinder und bereitete den Tee vor, den wir gemeinsam tranken.
          </p>
          <p>
            Bei diesen Zusammenkünften erzählte sie uns Anekdoten aus ihrer
            Kindheit, und wir haben sehr viel gelacht. Diese unvergesslichen
            Momente haben mich immer begleitet. Jedes Mal, wenn ich heute Tee
            vorbereite, erinnere ich mich daran.
          </p>
          <p>
            Wenn ich den Teetisch für meine Gäste decke, ist es ein bisschen so,
            als würde ich die Tradition meiner Großmutter fortsetzen.
            So lasse ich diese Erinnerungen wieder aufleben.
          </p>
          <div className="maria-name-note">
            <span className="eyebrow">Der Name Lupercia</span>
            <p>Eine Erinnerung, die in jeder Tasse weiterlebt.</p>
          </div>
        </section>
      </div>

      <figure className="maria-quote">
        <blockquote>
          „Es bedeutet, diese Erinnerungen
          <br />
          <em>wieder aufleben zu lassen.“</em>
        </blockquote>
        <figcaption>Maria Moreno</figcaption>
      </figure>

      <section
        className="maria-film"
        id="deutsche-welle"
        aria-labelledby="dw-feature-title"
      >
        <header className="maria-film-heading">
          <span className="eyebrow">Deutsche Welle zu Gast</span>
          <h2 id="dw-feature-title">
            Mate, Maria <em>und Lupercia.</em>
          </h2>
          <p>
            Das Team von DW Volos besucht Maria in ihrem Salon. Im Mittelpunkt:
            Mate, argentinische Kultur und die Freude, beides miteinander zu
            teilen.
          </p>
        </header>
        <InstagramFeature />
        <div className="maria-film-caption">
          <p>
            Wie trinkt man Mate? Was passt dazu? Ein kleiner Einblick in eine
            Leidenschaft, die in Argentinien begann und in Bonn weiterlebt.
          </p>
          <div>
            <span>Ein Beitrag von DW Volos</span>
            <time dateTime="2025-06-20">20. Juni 2025</time>
          </div>
        </div>
      </section>

      <section className="maria-craft" aria-labelledby="maria-craft-title">
        <figure className="maria-craft-portrait">
          <Image
            src="/assets/images/maria/maria-teeberatung.webp"
            alt="Maria zeigt hinter ihrem Ladentresen eine Schaufel losen Tee und berät zu ihrer Auswahl"
            width={1100}
            height={1467}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Im Salon. Mit Zeit für Ihre Fragen.</figcaption>
        </figure>
        <div className="maria-craft-copy">
          <span className="eyebrow">Wissen, das Nähe schafft</span>
          <h2 id="maria-craft-title">
            Mit Sorgfalt gewählt.
            <br />
            <em>Mit Freude geteilt.</em>
          </h2>
          <p>
            Vor mehr als zehn Jahren habe ich einen Tee-Sommelier-Kurs gemacht.
            Heute verbinde ich als Tee-Sommelière fachliche Auswahl mit
            verständlicher, persönlicher Beratung. Ich mache Herkunft, Charakter
            und Zubereitung zugänglich.
          </p>
          <p>
            Bei Lupercia finden Sie viele verschiedene Teesorten, Teegeschirr,
            Accessoires und Delikatessen. Meine Verbindung zu Argentinien zeigt
            sich auch in ausgewählten Yerbas, Kalebassen und Bombillas.
          </p>
          <TextLink href="/tee-genuss">Meine Auswahl entdecken</TextLink>
        </div>
        <figure className="maria-tea-detail">
          <Image
            src="/assets/images/maria/teeperlen.webp"
            alt="Fein gerollte Teeperlen in einer silbernen Schale vor Marias Teeregal"
            width={800}
            height={1067}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Genau hinsehen. Das Besondere entdecken.</figcaption>
        </figure>
      </section>

      <section className="maria-ritual maria-ritual-illustrated">
        <figure>
          <DetailPhoto name="porzellan-rosen" sizes="(max-width: 760px) 70vw, 28vw" />
          <figcaption>Kleine Lieblingsstücke am Salonfenster.</figcaption>
        </figure>
        <div>
          <span className="eyebrow">Porzellan mit Persönlichkeit</span>
          <h2>
            Auch das Gefäß
            <br />
            <em>gehört zum Ritual.</em>
          </h2>
          <p>
            Handverlesenes Porzellan, florale Dekore und Stücke mit eigenem
            Charakter: Für mich gehört das Gefäß zum Tee. Es macht aus einer
            Tasse ein persönliches Ritual.
          </p>
        </div>
      </section>
      <section className="invitation">
        <span className="eyebrow">Ein Platz am Tisch</span>
        <h2>
          Ich lade Sie ein,
          <br />
          <em>Platz zu nehmen.</em>
        </h2>
        <p>
          Bei Tea Time, Workshops und Teezeremonien teile ich mein Wissen
          und bringe Menschen miteinander ins Gespräch. Ich lade Sie ein,
          mich und Lupercia in dieser magischen Welt des Tees zu begleiten.
        </p>
        <div className="link-pair">
          <TextLink href="/salon#besuch">Lupercia besuchen</TextLink>
          <TextLink href="/veranstaltungen">Begegnungen entdecken</TextLink>
        </div>
      </section>
      <InstagramFeed />
    </main>
  );
}
