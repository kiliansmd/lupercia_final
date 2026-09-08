import { readFile, writeFile } from 'node:fs/promises';
const config = JSON.parse(
  await readFile(new URL('../seo.config.json', import.meta.url), 'utf8'),
);
const urls = Object.keys(config.pages).map(
  (path) => new URL(path, config.origin).href,
);
const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
await writeFile(
  new URL('../public/sitemap.xml', import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}\n</urlset>\n`,
);
// Legal pages must remain crawlable so that Google can read their noindex tags.
await writeFile(
  new URL('../public/robots.txt', import.meta.url),
  `User-agent: *\nAllow: /\n\nSitemap: ${config.origin}/sitemap.xml\n`,
);
console.log(
  `SEO: sitemap and robots.txt generated for ${urls.length} public pages.`,
);
