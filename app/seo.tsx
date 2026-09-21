import type { Metadata } from 'next';
import config from '../seo.config.json';
import previews from '../social-previews.json';
import {
  languages,
  localizedHref,
  translate,
  type Language,
} from './i18n-core';

export const siteOrigin = config.origin;
export type PagePath = keyof typeof config.pages;
const absolute = (path: string) => new URL(path, siteOrigin).href;

function alternates(path: string, language: Language) {
  return {
    canonical: absolute(localizedHref(path, language)),
    languages: Object.fromEntries([
      ...languages.map((locale) => [
        locale,
        absolute(localizedHref(path, locale)),
      ]),
      ['x-default', absolute(path)],
    ]),
  };
}

function socialMetadata(
  path: keyof typeof previews,
  title: string,
  description: string,
  language: Language,
): Metadata {
  const url = absolute(localizedHref(path, language));
  const preview =
    (previews as Record<string, (typeof previews)['/']>)[
      localizedHref(path, language)
    ] ?? previews[path];
  const image = {
    url: absolute(preview.image),
    width: preview.width,
    height: preview.height,
    type: preview.type,
    alt: translate(preview.alt, language),
  };
  return {
    openGraph: {
      type: 'website',
      locale: { de: 'de_DE', en: 'en_GB', es: 'es_ES' }[language],
      siteName: config.name,
      title,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export function pageMetadata(
  path: PagePath,
  language: Language = 'de',
): Metadata {
  const page = config.pages[path];
  const title = translate(page.title, language);
  const description = translate(page.description, language);
  return {
    title: { absolute: title },
    description,
    alternates: alternates(path, language),
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    ...socialMetadata(path, title, description, language),
  };
}

export function legalMetadata(
  path: '/impressum' | '/datenschutz',
  title: string,
  language: Language = 'de',
): Metadata {
  const fullTitle = `${translate(title, language)} — Lupercia`;
  const description = translate(
    path === '/impressum'
      ? 'Impressum und Kontaktangaben von Lupercia, dem Teesalon und Teeladen von Maria Moreno in der Bonner Südstadt.'
      : 'Informationen zum Datenschutz bei Lupercia: Ihre Rechte, die Verarbeitung personenbezogener Daten und Ihre Auswahl zu externen Medien.',
    language,
  );
  return {
    title: { absolute: fullTitle },
    description,
    alternates: alternates(path, language),
    robots: { index: false, follow: true },
    ...socialMetadata(path, fullTitle, description, language),
  };
}

export function notFoundMetadata(language: Language = 'de'): Metadata {
  return {
    title: {
      absolute: `${translate('Seite nicht gefunden', language)} — Lupercia`,
    },
    description: translate(
      'Diese Seite ist nicht verfügbar. Zurück zu Lupercia, Ihrem Teesalon in der Bonner Südstadt.',
      language,
    ),
    robots: { index: false, follow: false },
  };
}

export function metadataForPath(path: string, language: Language): Metadata {
  if (path in config.pages) return pageMetadata(path as PagePath, language);
  if (path === '/impressum' || path === '/datenschutz')
    return legalMetadata(
      path,
      path === '/impressum' ? 'Impressum' : 'Datenschutz',
      language,
    );
  return notFoundMetadata(language);
}
