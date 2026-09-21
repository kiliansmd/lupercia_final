'use client';
import { useTranslation } from './i18n';
import { DetailPhoto } from './detail-photo';
import { PageSeo } from './seo-content';
import Image from './responsive-image';
import Link from './site-link';
import { ArrowUpRight } from 'lucide-react';
import { TextLink, Visit } from './site-chrome';

const heroLinks = [
  {
    id: 'tea',
    href: '/tee-genuss',
    image: 'tee-genuss',
    width: 720,
    height: 1280,
    alt: 'Eine Kanne Tee auf einem Stövchen, florales Porzellan und Scones neben Magnolien',
    eyebrow: 'Rund um die Tasse',
    title: 'Tee & Genuss.',
    cta: 'Marias Auswahl entdecken',
  },
  {
    id: 'maria',
    href: '/maria',
    image: 'maria-teetafel',
    width: 1086,
    height: 1448,
    alt: 'Maria Moreno neben einer gedeckten Teetafel mit Porzellan und Blumen',
    eyebrow: 'Die Gastgeberin',
    title: 'Maria.',
    cta: 'Ihre Geschichte kennenlernen',
  },
  {
    id: 'gift',
    href: '/geschenkbox',
    image: 'geschenkbox',
    width: 1086,
    height: 1448,
    alt: 'Eine Lupercia Geschenkbox mit Rosentee, Blütenporzellan, Gebäck und Rosenkonfitüre',
    eyebrow: 'Persönlich zusammengestellt',
    title: 'Geschenk\u00adboxen.',
    cta: 'Freude verschenken',
  },
  {
    id: 'salon',
    href: '/salon',
    image: 'salon',
    width: 1200,
    height: 1420,
    alt: 'Sonnenlicht im Lupercia Salon mit Teeregal, Blumen und Blick auf die Bonner Südstadt',
    eyebrow: 'Ein Platz zum Bleiben',
    title: 'Der Salon.',
    cta: 'Lupercia besuchen',
  },
  {
    id: 'events',
    href: '/veranstaltungen',
    image: 'gemeinsam-tee-trinken',
    width: 1066,
    height: 1600,
    alt: 'Maria und ein Gast genießen gemeinsam Tee am Fenster des Salons',
    eyebrow: 'Verkostungen & Veranstaltungen',
    title: 'Begegnungen.',
    cta: 'Gemeinsam Tee entdecken',
  },
  {
    id: 'mate',
    href: '/mate',
    image: 'mate-trinkgefaesse-hero',
    width: 1600,
    height: 837,
    alt: 'Vier farbig eingefasste Mategefäße aus Holz mit verzierten Bombillas',
    eyebrow: 'Ein Stück Argentinien',
    title: 'Mate.',
    cta: 'Marias Mate-Welt entdecken',
  },
];

export default function Home() {
  const { t } = useTranslation();
  return (
    <main id="main-content">
      <PageSeo path="/" />
      <section
        className="home-invitation page-width"
        aria-label={t('Eine Einladung zum Tee')}
      >
        <h1 className="eyebrow home-location">
          {t('Teesalon & Teeladen in Bonn-Südstadt')}
        </h1>
        <h2>
          {t('Eine Tasse Tee ist eine Einladung.')}
          <br />
          <em>{t('Nehmen Sie sie an.')}</em>
        </h2>
      </section>
      <section
        className="home-mosaic page-width"
        aria-label={t('Willkommen in Marias Teewelt')}
      >
        {heroLinks.map((tile, index) => (
          <Link
            key={tile.id}
            className={`photo-link mosaic-${tile.id}`}
            href={tile.href}
          >
            {tile.id === 'maria' ? (
              <DetailPhoto
                name="maria-teetafel"
                sizes="(max-width: 359px) calc(100vw - 36px), (max-width: 760px) calc((100vw - 48px) / 2), (max-width: 1440px) 30vw, 416px"
                eager
              />
            ) : tile.id === 'events' ? (
              <DetailPhoto
                name="gemeinsam-tee-trinken"
                sizes="(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 30vw"
              />
            ) : (
              <Image
                src={
                  tile.id === 'mate'
                    ? `/assets/images/${tile.image}.webp`
                    : `/assets/images/hero/${tile.image}.webp`
                }
                alt={t(tile.alt)}
                width={tile.width}
                height={tile.height}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : undefined}
                decoding="async"
                sizes={
                  tile.id === 'mate'
                    ? '(max-width: 760px) calc(100vw - 36px), (max-width: 1100px) calc(100vw - 64px), (max-width: 1440px) calc(100vw - 112px), 1328px'
                    : '(max-width: 359px) calc(100vw - 36px), (max-width: 760px) calc((100vw - 48px) / 2), (max-width: 1440px) 30vw, 450px'
                }
              />
            )}
            <div className="photo-label">
              <span className="eyebrow">{t(tile.eyebrow)}</span>
              <h2>
                <em>{t(tile.title)}</em>
              </h2>
              <span className="photo-cta">
                <span className="photo-cta-label">{t(tile.cta)}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
        <div className="mosaic-note">
          <span className="eyebrow">
            {t('Ankommen. Aufgießen. Wohlfühlen.')}
          </span>
          <p>
            {t('Eine gute Tasse Tee.')}
            <br />
            {t('Und das schöne Gefühl,')}
            <br />
            <em>{t('willkommen zu sein.')}</em>
          </p>
          <TextLink href="/maria">{t('Maria & ihre Geschichte')}</TextLink>
        </div>
      </section>
      <div className="home-visit page-width">
        <Visit withPhoto={false} />
      </div>
      <section className="closing-note page-width">
        <TextLink href="https://www.instagram.com/lupercia.de/" external>
          {t('Einblicke auf Instagram · @lupercia.de')}
        </TextLink>
      </section>
    </main>
  );
}
