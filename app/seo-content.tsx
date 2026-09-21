'use client';
import { useTranslation } from './i18n';
import config from '../seo.config.json';
import Link from './site-link';
import { maps, phone } from './site-config';
import { siteOrigin } from './seo';
import { localizedHref, languageTags, languages } from './i18n-core';
type PagePath = keyof typeof config.pages;
const absolute = (path: string) => new URL(path, siteOrigin).href;
const businessId = absolute('/#lupercia');
const websiteId = absolute('/#website');

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
  const { t } = useTranslation();
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
            description: t(
              'Teesalon und Teeladen in der Bonner Südstadt mit persönlicher Teeberatung, Tea Time, Mate, Porzellan und Geschenkboxen.',
            ),
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
            inLanguage: languages.map((language) => languageTags[language]),
            publisher: { '@id': businessId },
          },
        ],
      }}
    />
  );
}

export function PageSeo({ path }: { path: PagePath }) {
  const { t, language } = useTranslation();
  const page = config.pages[path];
  const url = absolute(localizedHref(path, language));
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
              name: t(page.title),
              description: t(page.description),
              inLanguage: languageTags[language],
              isPartOf: { '@id': websiteId },
              about: { '@id': businessId },
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: absolute(page.image),
                width: page.width,
                height: page.height,
                caption: t(page.imageAlt),
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
                        item: absolute(localizedHref('/', language)),
                      },
                      {
                        '@type': 'ListItem',
                        position: 2,
                        name: t(page.name),
                        item: url,
                      },
                    ],
                  },
                ]),
          ],
        }}
      />
      {path !== '/' && (
        <nav className="breadcrumbs" aria-label={t('Brotkrümelnavigation')}>
          <ol>
            <li>
              <Link href="/">{t('Lupercia')}</Link>
            </li>
            <li aria-current="page">{t(page.name)}</li>
          </ol>
        </nav>
      )}
    </>
  );
}
