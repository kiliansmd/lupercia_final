import catalog from '../locales/catalog.json' with { type: 'json' };

export const languages = ['de', 'en', 'es'] as const;
export type Language = (typeof languages)[number];
export const languageNames = { de: 'Deutsch', en: 'English', es: 'Español' };
export const languageTags = { de: 'de-DE', en: 'en-GB', es: 'es-ES' };
export const pagePaths = [
  '/',
  '/salon',
  '/tee-genuss',
  '/mate',
  '/maria',
  '/veranstaltungen',
  '/geschenkbox',
  '/impressum',
  '/datenschutz',
  '/404',
];
const messages = catalog as Record<string, { en: string; es: string }>;

export function languageFromPath(path: string): Language {
  const first = path.split('/')[1];
  return first === 'en' || first === 'es' ? first : 'de';
}

export function basePath(path: string) {
  return path.replace(/^\/(en|es)(?=\/|$)/, '').replace(/\/$/, '') || '/';
}

export function pagePath(path: string) {
  const base = basePath(path);
  return pagePaths.includes(base) ? base : '/404';
}

export function localizedHref(href: string, language: Language): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const [, pathname, suffix] = href.match(/^([^?#]*)(.*)$/)!;
  const base = basePath(pathname);
  return (
    (language === 'de' ? base : `/${language}${base === '/' ? '' : base}`) +
    suffix
  );
}

export function translate(source: string, language: Language): string {
  if (language === 'de') return source;
  const key = source.trim().replace(/\s+/g, ' ');
  const value = messages[key]?.[language];
  // Already translated props and proper names pass through unchanged. The
  // source/build checks reject missing catalogue entries before deployment.
  return value === undefined ? source : source.replace(source.trim(), value);
}
