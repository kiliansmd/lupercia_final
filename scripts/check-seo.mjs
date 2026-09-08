import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import sharp from 'sharp';

const config = JSON.parse(
  await readFile(new URL('../seo.config.json', import.meta.url), 'utf8'),
);
const output = new URL('../dist/client/', import.meta.url);
const previews = JSON.parse(
  await readFile(new URL('../social-previews.json', import.meta.url), 'utf8'),
);
const paths = [
  ...Object.keys(config.pages),
  '/impressum',
  '/datenschutz',
  '/404',
];
const html = Object.fromEntries(
  await Promise.all(
    paths.map(async (path) => [
      path,
      await readFile(
        new URL(path === '/' ? 'index.html' : `${path.slice(1)}.html`, output),
        'utf8',
      ),
    ]),
  ),
);
const decode = (text) =>
  text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
const attrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [
      key,
      decode(value),
    ]),
  );
const tags = (source, tag) =>
  [...source.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map(([match]) =>
    attrs(match),
  );
const meta = (source, key) =>
  tags(source, 'meta')
    .filter((tag) => tag.name === key || tag.property === key)
    .map((tag) => tag.content);
const titles = new Set();
const descriptions = new Set();
let linksChecked = 0;
for (const path of paths) {
  const source = html[path];
  const head = source.match(/<head\b[^>]*>(.*?)<\/head>/s)?.[1] || '';
  const indexable = Object.hasOwn(config.pages, path);
  assert.match(source, /<html[^>]+lang="de"/, `${path}: language missing`);
  assert.equal(
    (source.match(/<h1\b/g) || []).length,
    1,
    `${path}: exactly one H1 required`,
  );
  const robots = meta(source, 'robots').join(',');
  assert.ok(
    indexable ? !robots.includes('noindex') : robots.includes('noindex'),
    `${path}: indexability incorrect`,
  );
  assert.ok(
    indexable ? robots.includes('index') : true,
    `${path}: robots missing`,
  );
  if (path !== '/404') {
    const title = decode(head.match(/<title>(.*?)<\/title>/s)?.[1] || '');
    const description = meta(head, 'description');
    assert.ok(title.length > 0, `${path}: server-rendered title missing`);
    assert.equal(description.length, 1, `${path}: description count`);
    assert.ok(description[0].length > 50, `${path}: description missing`);
    const preview = previews[path];
    const imageUrl = new URL(preview.image, config.origin).href;
    for (const [key, expected] of Object.entries({
      'og:title': title,
      'og:description': description[0],
      'og:site_name': config.name,
      'og:locale': 'de_DE',
      'og:type': 'website',
      'og:url': new URL(path, config.origin).href,
      'og:image': imageUrl,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/jpeg',
      'og:image:alt': preview.alt,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description[0],
      'twitter:image': imageUrl,
      'twitter:image:alt': preview.alt,
    })) {
      const values = meta(head, key);
      assert.deepEqual(
        key === 'og:url' ? values.map((value) => new URL(value).href) : values,
        [expected],
        `${path}: ${key}`,
      );
    }
    const data = await readFile(new URL(`.${preview.image}`, output));
    const actual = await sharp(data).metadata();
    assert.equal(actual.width, 1200, `${path}: preview width`);
    assert.equal(actual.height, 630, `${path}: preview height`);
    assert.equal(actual.format, 'jpeg', `${path}: preview format`);
    assert.ok(data.length < 300 * 1024, `${path}: preview exceeds 300 KB`);
    const canonical = tags(source, 'link').filter(
      (tag) => tag.rel === 'canonical',
    );
    assert.equal(canonical.length, 1, `${path}: canonical count`);
    assert.equal(
      new URL(canonical[0].href).href,
      new URL(path, config.origin).href,
      `${path}: canonical URL`,
    );
  }
  if (indexable) {
    const page = config.pages[path];
    const title = decode(source.match(/<title>(.*?)<\/title>/s)[1]);
    assert.equal(title, page.title, `${path}: title`);
    assert.ok(!titles.has(title), `${path}: duplicate title`);
    titles.add(title);
    assert.deepEqual(
      meta(source, 'description'),
      [page.description],
      `${path}: description`,
    );
    assert.ok(
      !descriptions.has(page.description),
      `${path}: duplicate description`,
    );
    descriptions.add(page.description);
    assert.deepEqual(
      meta(source, 'og:url').map((url) => new URL(url).href),
      [new URL(path, config.origin).href],
    );
    assert.deepEqual(meta(source, 'twitter:card'), ['summary_large_image']);
    const graph = [
      ...source.matchAll(
        /<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
      ),
    ].flatMap((match) => JSON.parse(match[1])['@graph']);
    const business = graph.find(
      (node) => node['@id'] === `${config.origin}/#lupercia`,
    );
    assert.ok(business, `${path}: business schema missing`);
    assert.equal(business.address.streetAddress, 'Argelanderstraße 75');
    assert.equal(business.address.addressLocality, 'Bonn');
    assert.equal(business.telephone, '+4915167970350');
    assert.equal(business.openingHoursSpecification.length, 2);
    assert.ok(
      graph.some((node) => node['@type'] === 'WebSite'),
      `${path}: website schema missing`,
    );
    if (path !== '/') {
      const breadcrumb = graph.find(
        (node) => node['@type'] === 'BreadcrumbList',
      );
      assert.equal(
        breadcrumb.itemListElement[1].item,
        new URL(path, config.origin).href,
      );
      assert.match(source, /aria-label="Brotkrümelnavigation"/);
    }
  }
  for (const link of tags(source, 'a').filter(
    (link) => link.href?.startsWith('/') || link.href?.startsWith('#'),
  )) {
    const target = new URL(link.href, new URL(path, config.origin));
    assert.ok(
      Object.hasOwn(html, target.pathname),
      `${path}: invalid internal page ${link.href}`,
    );
    if (target.pathname !== '/')
      assert.ok(
        !target.pathname.endsWith('/'),
        `${path}: redirecting internal link ${link.href}`,
      );
    if (target.hash) {
      const ids = tags(html[target.pathname], '[a-z][a-z0-9]*').map(
        (tag) => tag.id,
      );
      assert.ok(
        ids.includes(decodeURIComponent(target.hash.slice(1))),
        `${path}: missing fragment ${link.href}`,
      );
    }
    linksChecked++;
  }
  for (const image of tags(source, 'img')) {
    assert.ok(Object.hasOwn(image, 'alt'), `${path}: image alt missing`);
    assert.ok(
      Number(image.width) > 0 && Number(image.height) > 0,
      `${path}: image dimensions missing`,
    );
    if (image.src?.startsWith('/'))
      await access(new URL(`.${image.src}`, output));
  }
  for (const tag of [...tags(source, 'script'), ...tags(source, 'link')]) {
    const asset = tag.src || tag.href;
    if (asset?.startsWith('/') && !asset.startsWith('//')) {
      await access(
        new URL(`.${new URL(asset, config.origin).pathname}`, output),
      );
    }
  }
  for (const tag of [...tags(source, 'source'), ...tags(source, 'img')]) {
    for (const candidate of (tag.srcSet || tag.srcset || '').split(',')) {
      const src = candidate.trim().split(/\s/)[0];
      if (src.startsWith('/')) await access(new URL(`.${src}`, output));
    }
  }
}
const sitemap = await readFile(new URL('sitemap.xml', output), 'utf8');
assert.deepEqual(
  [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1])),
  Object.keys(config.pages).map((path) => new URL(path, config.origin).href),
);
const robots = await readFile(new URL('robots.txt', output), 'utf8');
assert.ok(robots.includes(`Sitemap: ${config.origin}/sitemap.xml`));
assert.ok(
  !/^Disallow:\s*\S/m.test(robots),
  'Pages must remain crawlable, including noindex pages',
);
console.log(
  `SEO checks passed: ${paths.length} pages, ${linksChecked} internal links, metadata, indexability, structured data, images and sitemap.`,
);
