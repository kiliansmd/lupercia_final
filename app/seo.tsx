import type { Metadata } from 'next';
import config from '../seo.config.json';
import Link from './site-link';
import { maps, phone } from './site-config';

export const siteOrigin = config.origin;
type PagePath = keyof typeof config.pages;
const absolute = (path: string) => new URL(path, siteOrigin).href;
const businessId = absolute('/#lupercia');
const websiteId = absolute('/#website');

export function pageMetadata(path: PagePath): Metadata {
  const page = config.pages[path];
  const url = absolute(path);
  const image = {
    url: absolute(page.image),
    width: page.width,
    height: page.height,
    alt: page.imageAlt,
  };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      siteName: config.name,
      title: page.title,
      description: page.description,
      url,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [image.url],
    },
  };
}

export function legalMetadata(
  path: '/impressum' | '/datenschutz',
  title: string,
): Metadata {
  return {
    title,
    alternates: { canonical: absolute(path) },
    robots: { index: false, follow: true },
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export function SiteSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['CafeOrCoffeeShop', 'Store'],
            '@id': businessId,
            name: config.name,
            url: absolute('/'),
            description:
              'Teesalon und Teeladen in der Bonner Südstadt mit persönlicher Teeberatung, Tea Time, Mate, Porzellan und Geschenkboxen.',
            telephone: phone.replace('tel:', ''),
            image: absolute(config.pages['/'].image),
            logo: absolute('/assets/lupercia-mark.webp'),
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Argelanderstraße 75',
              postalCode: '53115',
              addressLocality: 'Bonn',
              addressRegion: 'Nordrhein-Westfalen',
              addressCountry: 'DE',
            },
            hasMap: maps,
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '11:00',
                closes: '19:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '12:00',
                closes: '17:00',
              },
            ],
            sameAs: ['https://www.instagram.com/lupercia.de/'],
          },
          {
            '@type': 'WebSite',
            '@id': websiteId,
            name: config.name,
            url: absolute('/'),
            inLanguage: 'de-DE',
            publisher: { '@id': businessId },
          },
        ],
      }}
    />
  );
}

export function PageSeo({ path }: { path: PagePath }) {
  const page = config.pages[path];
  const url = absolute(path);
  const breadcrumbId = `${url}#breadcrumb`;
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': path === '/maria' ? 'AboutPage' : 'WebPage',
              '@id': `${url}#webpage`,
              url,
              name: page.title,
              description: page.description,
              inLanguage: 'de-DE',
              isPartOf: { '@id': websiteId },
              about: { '@id': businessId },
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: absolute(page.image),
                width: page.width,
                height: page.height,
              },
              ...(path === '/' ? {} : { breadcrumb: { '@id': breadcrumbId } }),
            },
            ...(path === '/'
              ? []
              : [
                  {
                    '@type': 'BreadcrumbList',
                    '@id': breadcrumbId,
                    itemListElement: [
                      {
                        '@type': 'ListItem',
                        position: 1,
                        name: config.name,
                        item: absolute('/'),
                      },
                      {
                        '@type': 'ListItem',
                        position: 2,
                        name: page.name,
                        item: url,
                      },
                    ],
                  },
                ]),
          ],
        }}
      />
      {path !== '/' && (
        <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
          <ol>
            <li>
              <Link href="/">Lupercia</Link>
            </li>
            <li aria-current="page">{page.name}</li>
          </ol>
        </nav>
      )}
    </>
  );
}
