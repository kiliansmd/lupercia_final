'use client';
import { useTranslation } from '../i18n';
import { DetailPhoto } from '../detail-photo';
import Link from '../site-link';
import { PageSeo } from '../seo-content';
import { Plus } from 'lucide-react';
import { PageIntro, Invitation } from '../editorial';
import { TextLink, phone } from '../site-chrome';
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
  const { t } = useTranslation();
  return (
    <main id="main-content" className="page-width detail-page">
      <PageSeo path="/veranstaltungen" />
      <PageIntro
        eyebrow={t('Teeverkostungen & Veranstaltungen in Bonn')}
        title={
          <>
            {t('Tee bringt')}
            <br />
            <em>{t('Menschen zusammen.')}</em>
          </>
        }
        description={t(
          'Teeverkostungen, Workshops und private Teerunden in der Bonner Südstadt – bei Lupercia in der Argelanderstraße 75. Termine und freie Plätze erfahren Sie direkt bei Maria.',
        )}
      />
      <figure className="events-hero-photo">
        <DetailPhoto
          name="gemeinsam-tee-trinken"
          sizes="(max-width: 760px) 90vw, (max-width: 1032px) 89vw, 920px"
          eager
        />
        <figcaption>
          {t('Tee teilen. Ins Gespräch kommen. Bei Lupercia in Bonn.')}
        </figcaption>
      </figure>
      <section className="events-section">
        <div>
          <span className="eyebrow">{t('Viele Wege, Tee zu teilen')}</span>
          <h2>
            {t('Zusammen')}
            <br />
            <em>{t('ist es schöner.')}</em>
          </h2>
          <p>
            {t(
              'Aktuelle Termine und freie Plätze erfahren Sie persönlich bei Maria.',
            )}
          </p>
          <TextLink href={phone}>{t('Termine anfragen')}</TextLink>
        </div>
        <div className="event-list">
          {formats.map((f, i) => (
            <details key={f.name} className="event-item" open={i === 0}>
              <summary>
                <span className="event-number">0{i + 1}</span>
                <span>
                  <span className="eyebrow">{t(f.tag)}</span>
                  <span className="event-name">{t(f.name)}</span>
                </span>
                <Plus size={21} aria-hidden="true" />
              </summary>
              <div className="event-body">
                <p>{t(f.text)}</p>
                <Link href={phone}>
                  {t('Bei Maria anfragen ')}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="private-round">
        <span className="eyebrow">{t('Private Runden')}</span>
        <h2>
          {t('Ihre Runde.')}
          <br />
          <em>{t('Marias Teeauswahl.')}</em>
        </h2>
        <p>
          {t(
            'Private Verkostungen und besondere Teestunden für kleine Gruppen werden individuell mit Maria abgestimmt. Möglichkeiten, Kapazität und Konditionen besprechen Sie direkt miteinander.',
          )}
        </p>
        <TextLink href={phone}>{t('Eine private Runde anfragen')}</TextLink>
        <div className="private-round-photos">
          <figure>
            <DetailPhoto
              name="gedeckte-teetafel"
              sizes="(max-width: 760px) 50vw, 42vw"
            />
            <figcaption>
              {t('Liebevoll gedeckt, gemeinsam genossen.')}
            </figcaption>
          </figure>
          <figure>
            <DetailPhoto
              name="scones-tablett"
              sizes="(max-width: 760px) 32vw, 28vw"
            />
            <figcaption>{t('Feine Begleiter zur Teestunde.')}</figcaption>
          </figure>
        </div>
      </section>
      <Invitation
        title={
          <>
            {t('Die nächste Begegnung')}
            <br />
            <em>{t('beginnt mit einem Anruf.')}</em>
          </>
        }
        description={t(
          'Maria informiert Sie über kommende Teerunden, Verkostungen und kulturelle Begegnungen. Sie freut sich, von Ihnen zu hören.',
        )}
        label={t('Maria kontaktieren')}
      />
    </main>
  );
}
