import { readFile, writeFile } from 'node:fs/promises';
import { languages, localizedHref } from '../app/i18n-core.ts';
const config = JSON.parse(
  await readFile(new URL('../seo.config.json', import.meta.url), 'utf8'),
);
const absolute = (path) => new URL(path, config.origin).href;
const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
const entries = languages.flatMap((language) =>
  Object.entries(config.pages).map(([path, page]) => {
    const alternatives = [...languages, 'x-default']
      .map(
        (locale) =>
          `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(absolute(localizedHref(path, locale === 'x-default' ? 'de' : locale)))}" />`,
      )
      .join('\n');
    return `  <url>\n    <loc>${escapeXml(absolute(localizedHref(path, language)))}</loc>\n${alternatives}\n    <image:image><image:loc>${escapeXml(absolute(page.image))}</image:loc></image:image>\n  </url>`;
  }),
);
await writeFile(
  new URL('../public/sitemap.xml', import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries.join('\n')}\n</urlset>\n`,
);
// Legal pages remain crawlable so search engines can read their noindex tags.
await writeFile(
  new URL('../public/robots.txt', import.meta.url),
  `User-agent: *\nAllow: /\n\nSitemap: ${config.origin}/sitemap.xml\n`,
);
console.log(
  `SEO: ${entries.length} public pages with reciprocal language alternatives and existing page images.`,
);
