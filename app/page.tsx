import { DetailPhoto } from './detail-photo';
import { pageMetadata, PageSeo } from './seo';
import Image from 'next/image';
import Link from './site-link';
import { ArrowUpRight } from 'lucide-react';
import { TextLink, Visit } from './site-chrome';

export const metadata = pageMetadata('/');

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
  return (
    <main id="main-content">
      <PageSeo path="/" />
      <section
        className="home-invitation page-width"
        aria-label="Eine Einladung zum Tee"
      >
        <h1 className="eyebrow home-location">
          Teesalon & Teeladen in Bonn-Südstadt
        </h1>
        <h2>
          Eine Tasse Tee ist eine Einladung.
          <br />
          <em>Nehmen Sie sie an.</em>
        </h2>
      </section>
      <section
        className="home-mosaic page-width"
        aria-label="Willkommen in Marias Teewelt"
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
                sizes="(max-width: 760px) 46vw, (max-width: 1440px) 30vw, 420px"
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
                alt={tile.alt}
                width={tile.width}
                height={tile.height}
                loading={index < 3 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : undefined}
                decoding="async"
                sizes={
                  tile.id === 'mate'
                    ? '(max-width: 760px) 92vw, (max-width: 1100px) calc(100vw - 64px), 88vw'
                    : undefined
                }
              />
            )}
            <div className="photo-label">
              <span className="eyebrow">{tile.eyebrow}</span>
              <h2>
                <em>{tile.title}</em>
              </h2>
              <span className="photo-cta">
                <span className="photo-cta-label">{tile.cta}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
        <div className="mosaic-note">
          <span className="eyebrow">Ankommen. Aufgießen. Wohlfühlen.</span>
          <p>
            Eine gute Tasse Tee.
            <br />
            Und das schöne Gefühl,
            <br />
            <em>willkommen zu sein.</em>
          </p>
          <TextLink href="/maria">Maria & ihre Geschichte</TextLink>
        </div>
      </section>
      <div className="home-visit page-width">
        <Visit withPhoto={false} />
      </div>
      <section className="closing-note page-width">
        <TextLink href="https://www.instagram.com/lupercia.de/" external>
          Einblicke auf Instagram · @lupercia.de
        </TextLink>
      </section>
    </main>
  );
}
