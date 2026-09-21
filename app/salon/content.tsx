'use client';
import { useTranslation } from '../i18n';
import { DetailPhoto } from '../detail-photo';
import { PageSeo } from '../seo-content';
import Image from '../responsive-image';
import { ArrowUpRight } from 'lucide-react';
import Link from '../site-link';
import { TextLink, Visit, phone } from '../site-chrome';

const photos = {
  'kuchen-und-mate': {
    width: 1200,
    height: 1124,
    alt: 'Ein goldbrauner Kuchen mit Teiggitter auf einer Glasplatte neben einem traditionellen Mategefäß mit Bombilla',
  },
  bluetenporzellan: {
    width: 900,
    height: 998,
    alt: 'Weiße Teekanne und zwei Tassen mit feinem Blütendekor, daneben ein Teesieb und Fruchtkonfitüre',
  },
  'teekanne-rosa': {
    width: 900,
    height: 1061,
    alt: 'Rosa-rot gestreifte Teekanne mit passender Tasse und einer Holzschale mit losem Tee',
  },
  'dunoon-tassen': {
    width: 900,
    height: 979,
    alt: 'Drei Dunoon-Porzellantassen mit Faultier-, Esel- und Koalamotiven auf dem Holztresen',
  },
  mategefaesse: {
    width: 1100,
    height: 1343,
    alt: 'Eine Auswahl hölzerner Mategefäße mit verzierten Metallrändern und silberfarbenen Bombillas vor Marias Teeregal',
  },
  salon: {
    width: 1200,
    height: 1420,
    alt: 'Der lichtdurchflutete Lupercia Salon mit dunklem Teeregal, Blumen und großem Fenster zur Bonner Südstadt',
  },
  'maria-teeberatung': {
    width: 960,
    height: 1280,
    alt: 'Maria Moreno zeigt hinter ihrem Ladentresen eine Schaufel mit losem Tee, umgeben von ihren Teedosen',
  },
  schaufenster: {
    width: 1023,
    height: 1537,
    alt: 'Florale Teetassen und eine Rosengirlande im Lupercia Schaufenster vor den historischen Häusern der Bonner Südstadt',
  },
};

function SalonPhoto({
  name,
  eager = false,
}: {
  name: keyof typeof photos;
  eager?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <Image
      src={`/assets/images/salon/${name}.webp`}
      {...photos[name]}
      alt={t(photos[name].alt)}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  );
}

export default function Salon() {
  const { t } = useTranslation();
  return (
    <main id="main-content" className="page-width detail-page salon-page">
      <PageSeo path="/salon" />
      <header className="salon-intro">
        <span className="eyebrow">
          {t('Teesalon & Tea Time · Bonn-Südstadt')}
        </span>
        <h1>
          {t('Kommen Sie')}
          <br />
          <em>{t('auf einen Tee.')}</em>
        </h1>
        <p>
          {t(
            'Ihr Teesalon in Bonn-Südstadt: Tee probieren, Tea Time genießen und Lieblingsstücke entdecken – mit persönlicher Beratung durch Tee-Sommelière Maria Moreno.',
          )}
        </p>
        <nav className="salon-chapters" aria-label={t('Den Salon entdecken')}>
          <Link href="#im-salon">{t('Im Salon')}</Link>
          <Link href="#tea-time">{t('Tea Time')}</Link>
          <Link href="#porzellan">{t('Tassen & Kannen')}</Link>
          <Link href="#mate">{t('Mate')}</Link>
          <Link href="#presse">{t('Presse & Berichte')}</Link>
          <Link href="#besuch">{t('Ihr Besuch')}</Link>
        </nav>
      </header>

      <section
        className="salon-opening"
        id="im-salon"
        aria-label={t('Ein Rundgang durch Lupercia')}
      >
        <figure className="salon-opening-room">
          <SalonPhoto name="salon" eager />
          <figcaption>
            {t('Mitten in der Südstadt. Eine Welt rund um Tee.')}
          </figcaption>
        </figure>
        <figure className="salon-opening-window">
          <DetailPhoto
            name="gemeinsam-tee-trinken"
            sizes="(max-width: 760px) 44vw, 28vw"
          />
          <figcaption>
            {t('Ein Fensterplatz. Und Zeit füreinander.')}
          </figcaption>
        </figure>
        <figure className="salon-opening-maria">
          <SalonPhoto name="maria-teeberatung" />
          <figcaption>
            {t('Maria. Ihre Gastgeberin und Tee-Sommelière.')}
          </figcaption>
        </figure>
      </section>

      <section className="salon-welcome salon-welcome-illustrated">
        <figure className="salon-shelf-detail">
          <DetailPhoto name="teeregal" sizes="(max-width: 760px) 65vw, 24vw" />
          <figcaption>{t('Eine ganze Welt in unseren Teedosen.')}</figcaption>
        </figure>
        <div>
          <span className="eyebrow">{t('Willkommen bei Lupercia')}</span>
          <h2>
            {t('Ein Platz für Tee')}
            <br />
            <em>{t('und Begegnung.')}</em>
          </h2>
        </div>
        <div className="salon-welcome-text">
          <p>
            {t(
              'Bei Lupercia können Sie spontan eine Tasse trinken, durch das Sortiment schauen oder sich in Ruhe beraten lassen.',
            )}
          </p>
          <p>
            {t(
              'Teeladen, Tea Time und persönliche Begegnung gehören hier zusammen. Sie bestimmen selbst, ob Sie nur kurz bleiben oder aus einer Tasse einen ganzen Nachmittag machen.',
            )}
          </p>
        </div>
      </section>

      <section
        className="salon-teatime"
        id="tea-time"
        aria-labelledby="salon-teatime-title"
      >
        <div className="salon-teatime-copy">
          <span className="eyebrow">{t('Tea Time in Bonn')}</span>
          <h2 id="salon-teatime-title">
            {t('Ein gedeckter Tisch.')}
            <br />
            <em>{t('Und Zeit.')}</em>
          </h2>
          <p>
            {t(
              'Ausgewählter Tee, feines Gebäck und herzhafte Kleinigkeiten gehören zur Tea Time bei Lupercia. Scones mit Clotted Cream, argentinisches Gebäck und kleine Entdeckungen begleiten Ihre Kanne Tee.',
            )}
          </p>
          <p>
            {t(
              'Für die aktuelle Verfügbarkeit rufen Sie Maria gerne direkt an.',
            )}
          </p>
          <TextLink href={phone}>{t('Eine Tea Time anfragen')}</TextLink>
        </div>
        <figure>
          <SalonPhoto name="kuchen-und-mate" />
          <figcaption>{t('Etwas Süßes zum Tee. Oder zum Mate.')}</figcaption>
        </figure>
        <div className="salon-drinks">
          <p>
            {t(
              'Warm aufgegossen, gekühlt oder als alkoholfreier Tea Cocktail: Tee steht im Mittelpunkt. Kaffee ergänzt die Auswahl.',
            )}
          </p>
          <ul>
            <li>
              <h3>{t('Warmer Tee')}</h3>
              <p>{t('Eine Kanne, ganz nach Ihrem Geschmack.')}</p>
            </li>
            <li>
              <h3>{t('Eistee')}</h3>
              <p>{t('Tee von seiner erfrischenden Seite.')}</p>
            </li>
            <li>
              <h3>{t('Tea Cocktails')}</h3>
              <p>{t('Alkoholfreie Entdeckungen im Glas.')}</p>
            </li>
            <li>
              <h3>{t('Tea Time & Kaffee')}</h3>
              <p>{t('Für eine genussvolle Pause.')}</p>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="salon-porcelain"
        id="porzellan"
        aria-labelledby="salon-porcelain-title"
      >
        <div className="salon-collection-heading">
          <div>
            <span className="eyebrow">{t('Mit Liebe ausgewählt')}</span>
            <h2 id="salon-porcelain-title">
              {t('Jede Tasse')}
              <br />
              <em>{t('hat ihren Charakter.')}</em>
            </h2>
          </div>
          <div>
            <p>
              {t(
                'Florale Dekore, feine Details und kleine Geschichten auf Porzellan. Im Salon finden Sie Tassen und Kannen, die Ihre Teestunde auch zu Hause begleiten.',
              )}
            </p>
            <TextLink href="/tee-genuss#geschirr">
              {t('Marias Auswahl entdecken')}
            </TextLink>
          </div>
        </div>
        <div className="salon-porcelain-gallery">
          <figure>
            <SalonPhoto name="bluetenporzellan" />
            <figcaption>{t('Blüten auf feinem Porzellan.')}</figcaption>
          </figure>
          <figure>
            <SalonPhoto name="teekanne-rosa" />
            <figcaption>{t('Farbe für das tägliche Teeritual.')}</figcaption>
          </figure>
          <figure>
            <SalonPhoto name="dunoon-tassen" />
            <figcaption>
              {t('Kleine Geschichten. Porzellan von Dunoon.')}
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="salon-mate"
        id="mate"
        aria-labelledby="salon-mate-title"
      >
        <figure>
          <SalonPhoto name="mategefaesse" />
          <figcaption>
            {t('Kalebassen und Bombillas aus Marias Auswahl.')}
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow">{t('Ein Stück Argentinien')}</span>
          <h2 id="salon-mate-title">
            {t('Ein Gefäß.')}
            <br />
            <em>{t('Ein Ritual.')}</em>
          </h2>
          <p>
            {t(
              'Mate verbindet Maria mit ihrer argentinischen Heimat. Zum Aufgießen und Teilen gehören die passenden Gefäße – mit warmen Hölzern, traditionellen Formen und fein gearbeiteten Metallrändern.',
            )}
          </p>
          <p>
            {t(
              'Entdecken Sie Kalebassen und Bombillas im Salon. Maria erklärt Ihnen die Unterschiede und zeigt, wie daraus Ihr eigener Mate-Moment wird.',
            )}
          </p>
          <TextLink href="/mate">{t('Marias Mate-Welt entdecken')}</TextLink>
        </div>
      </section>

      <section className="salon-seasons" aria-labelledby="salon-seasons-title">
        <header>
          <span className="eyebrow">{t('Mitten in der Südstadt')}</span>
          <h2 id="salon-seasons-title">
            {t('Draußen die Jahreszeiten.')}
            <br />
            <em>{t('Drinnen ein Platz für Sie.')}</em>
          </h2>
        </header>
        <div className="salon-seasons-photos">
          <figure>
            <DetailPhoto
              name="schaufenster-sommer"
              sizes="(max-width: 760px) 43vw, 32vw"
            />
            <figcaption>{t('Sommerlicht im Schaufenster.')}</figcaption>
          </figure>
          <figure>
            <DetailPhoto
              name="fensterplatz-winter"
              sizes="(max-width: 760px) 43vw, 42vw"
            />
            <figcaption>
              {t('Ein warmer Fensterplatz an Wintertagen.')}
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="salon-press"
        id="presse"
        aria-labelledby="salon-press-title"
      >
        <div className="salon-press-intro">
          <span className="eyebrow">{t('Berichte über Lupercia in Bonn')}</span>
          <h2 id="salon-press-title">
            {t('Lupercia.')}
            <br />
            <em>{t('Zum Weiterlesen.')}</em>
          </h2>
          <p>
            {t(
              'Unser Salon, Marias Geschichte und die Freude am Tee – entdecken Sie Lupercia aus einem anderen Blickwinkel.',
            )}
          </p>
        </div>
        <div className="salon-press-list">
          <article>
            <Link
              className="salon-press-link"
              href="https://www.rundschau-online.de/region/bonn/gastro-szene-bonn-teestuben-mit-charme-1238613"
              target="_blank"
              rel="noopener"
              aria-labelledby="press-rundschau-publisher press-rundschau-title press-rundschau-action"
            >
              <Image
                className="salon-press-logo"
                src="/assets/press/koelnische-rundschau.png"
                alt={t('Logo der Kölnischen Rundschau')}
                width={512}
                height={512}
                loading="lazy"
                decoding="async"
              />
              <div className="salon-press-copy">
                <span className="eyebrow" id="press-rundschau-publisher">
                  {t('Kölnische Rundschau')}
                </span>
                <h3 id="press-rundschau-title">
                  {t('Gastro-Szene Bonn: Teestuben mit Charme')}
                </h3>
                <p>
                  {t(
                    'Michael Sachse besucht Lupercia in der Südstadt und erzählt von Maria Moreno, ihrer Verbindung zum Tee und dem Salon.',
                  )}
                </p>
                <span
                  className="salon-press-action"
                  id="press-rundschau-action"
                >
                  {t('Artikel lesen ')}
                  <ArrowUpRight size={17} aria-hidden="true" />
                  <span className="sr-only">
                    {' '}
                    {t(' (öffnet in einem neuen Tab)')}
                  </span>
                </span>
              </div>
            </Link>
          </article>
          <article>
            <Link
              className="salon-press-link"
              href="https://kulinarische-schnitzeljagd.de/lupercia-finest-teas-tea-ceremonies-in-bonn"
              target="_blank"
              rel="noopener"
              aria-labelledby="press-schnitzeljagd-publisher press-schnitzeljagd-title press-schnitzeljagd-action"
            >
              <Image
                className="salon-press-logo"
                src="/assets/press/kulinarische-schnitzeljagd.png"
                alt={t('Logo der Kulinarischen Schnitzeljagd')}
                width={252}
                height={252}
                loading="lazy"
                decoding="async"
              />
              <div className="salon-press-copy">
                <span className="eyebrow" id="press-schnitzeljagd-publisher">
                  {t('Kulinarische Schnitzeljagd')}
                </span>
                <h3 id="press-schnitzeljagd-title">
                  {t('Lupercia – Teekultur in Bonn entdecken')}
                </h3>
                <p>
                  {t(
                    'Das Genussmagazin stellt Marias Teeladen vor: mit Tees aus aller Welt, argentinischem Mate und gelebten Teetraditionen.',
                  )}
                </p>
                <span
                  className="salon-press-action"
                  id="press-schnitzeljagd-action"
                >
                  {t('Porträt lesen ')}
                  <ArrowUpRight size={17} aria-hidden="true" />
                  <span className="sr-only">
                    {' '}
                    {t(' (öffnet in einem neuen Tab)')}
                  </span>
                </span>
              </div>
            </Link>
          </article>
        </div>
      </section>

      <div className="salon-visit">
        <Visit photo={<SalonPhoto name="schaufenster" />} />
      </div>
    </main>
  );
}
