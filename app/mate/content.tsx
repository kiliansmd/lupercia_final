'use client';
import { useTranslation } from '../i18n';
import Image from 'next/image';
import { Invitation } from '../editorial';
import { PageSeo } from '../seo-content';
import { TextLink } from '../site-chrome';

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
  const { t } = useTranslation();
  return (
    <main id="main-content" className="page-width detail-page mate-page">
      <PageSeo path="/mate" />

      <header className="mate-hero">
        <div className="mate-hero-copy">
          <span className="eyebrow">
            {t('Mate aus Argentinien · Marias Auswahl')}
          </span>
          <h1>
            {t('Mehr als ein Getränk.')}
            <br />
            <em>{t('Ein Ritual, das verbindet.')}</em>
          </h1>
          <p>
            {t(
              'Mate gehört zu Marias argentinischer Heimat. Bei Lupercia finden Sie ausgewählte Yerbas, Kalebassen und Bombillas – und eine persönliche Einführung in die traditionelle Zubereitung.',
            )}
          </p>
          <a className="tea-explore" href="#mate-entdecken">
            {t('Mate entdecken ')}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure>
          <Image
            src="/assets/images/mate-trinkgefaesse-hero.webp"
            width={1600}
            height={837}
            alt={t(
              'Vier farbig eingefasste Mategefäße aus Holz mit verzierten Bombillas',
            )}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 760px) 100vw, 88vw"
          />
          <figcaption>
            {t('Kalebasse und Bombilla. Bereit für den ersten Aufguss.')}
          </figcaption>
        </figure>
      </header>

      <section
        className="mate-intro"
        id="mate-entdecken"
        aria-labelledby="mate-intro-title"
      >
        <div>
          <span className="eyebrow">{t('Marias Stück Argentinien')}</span>
          <h2 id="mate-intro-title">
            {t('Ein Geschmack.')}
            <br />
            <em>{t('Viele Begegnungen.')}</em>
          </h2>
        </div>
        <div className="mate-intro-copy">
          <p>
            {t(
              'In Argentinien ist Mate Teil des Alltags: Man bereitet ihn füreinander zu, reicht ihn weiter und nimmt sich Zeit. Nicht die Eile, sondern das Miteinander bestimmt den Rhythmus.',
            )}
          </p>
          <p>
            {t(
              'Maria ist mit dieser Kultur aufgewachsen. Im Salon zeigt sie, wie unterschiedlich Yerba schmecken kann und wie Gefäß, Bombilla und Aufguss zusammenspielen.',
            )}
          </p>
          <TextLink href="/maria#geschichte">
            {t('Marias Geschichte kennenlernen')}
          </TextLink>
        </div>
        <figure className="mate-intro-gallery">
          <Image
            src="/assets/images/mate/yerba-mate-sorten-im-regal.svg"
            width={1600}
            height={1200}
            alt={t(
              'Verschiedene farbenfrohe Yerba-Mate-Sorten in Marias Regal',
            )}
            loading="lazy"
            sizes="(max-width: 760px) 88vw, 86vw"
            unoptimized
          />
          <figcaption>
            {t(
              'Verschiedene Yerba-Mate-Sorten – von sanft bis kräftig und herb.',
            )}
          </figcaption>
        </figure>
      </section>

      <section className="mate-world" aria-labelledby="mate-world-title">
        <figure>
          <Image
            src="/assets/images/einblicke/teeregal-1080.webp"
            width={1080}
            height={1440}
            alt={t(
              'Das hohe Lupercia-Regal mit sorgfältig beschrifteten schwarzen Vorratsdosen',
            )}
            loading="lazy"
            sizes="(max-width: 760px) 88vw, 42vw"
          />
          <figcaption>
            {t('Persönlich ausgewählt und im Salon für Sie bereit.')}
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow">{t('Die Mate-Welt bei Lupercia')}</span>
          <h2 id="mate-world-title">
            {t('Alles für Ihren')}
            <br />
            <em>{t('eigenen Mate-Moment.')}</em>
          </h2>
          <dl className="mate-essentials">
            <div>
              <dt>{t('Yerba Mate')}</dt>
              <dd>
                {t(
                  'Ausgewählte Sorten mit eigenem Charakter – von sanft bis kräftig und herb.',
                )}
              </dd>
            </div>
            <div>
              <dt>{t('Kalebassen')}</dt>
              <dd>
                {t(
                  'Gefäße in traditionellen und modernen Formen, die gut in der Hand liegen.',
                )}
              </dd>
            </div>
            <div>
              <dt>{t('Bombillas')}</dt>
              <dd>
                {t(
                  'Das typische Trinkrohr mit Sieb, passend zu Gefäß und persönlichem Ritual.',
                )}
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
            alt={t('Zwei Menschen reichen einander ein Mategefäß mit Bombilla')}
            loading="lazy"
            sizes="(max-width: 760px) 88vw, 44vw"
            unoptimized
          />
          <figcaption>
            {t(
              'Weitergereicht von Hand zu Hand – so wird Mate zum gemeinsamen Ritual.',
            )}
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow">{t('Ein Ritual des Miteinanders')}</span>
          <h2 id="mate-moment-title">
            {t('Eine Kalebasse.')}
            <br />
            <em>{t('Viele Begegnungen.')}</em>
          </h2>
          <p>
            {t(
              'Traditionell wird Mate in der Runde geteilt: Eine Person bereitet ihn zu, gießt nach und reicht die Kalebasse weiter. Dieses einfache Ritual schafft Nähe, lädt zum Gespräch ein und gibt dem gemeinsamen Augenblick seinen eigenen Rhythmus.',
            )}
          </p>
        </div>
      </section>

      <section className="mate-ritual" aria-labelledby="mate-ritual-title">
        <header>
          <span className="eyebrow">{t('Schritt für Schritt')}</span>
          <h2 id="mate-ritual-title">
            {t('So beginnt')}
            <br />
            <em>{t('das Ritual.')}</em>
          </h2>
          <p>
            {t(
              'Die Zubereitung wird mit ein wenig Übung zur vertrauten Geste. Maria zeigt Ihnen im Salon jeden Schritt und beantwortet Ihre Fragen.',
            )}
          </p>
        </header>
        <ol>
          {ritual.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
            </li>
          ))}
        </ol>
      </section>

      <Invitation
        eyebrow={t('Persönliche Mate-Beratung')}
        title={
          <>
            {t('Neugierig auf')}
            <br />
            <em>{t('Ihren ersten Mate?')}</em>
          </>
        }
        description={t(
          'Besuchen Sie Maria im Salon. Gemeinsam finden Sie eine Yerba, ein passendes Gefäß und die Bombilla für Ihren Mate-Moment zu Hause.',
        )}
      />
    </main>
  );
}
