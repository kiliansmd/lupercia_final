import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { languages, localizedHref, translate } from '../app/i18n-core.ts';
import {
  CONSENT_DURATION,
  CONSENT_VERSION,
  createConsent,
  denied,
  parseConsent,
} from '../app/consent-state.ts';
const now = 1800000000000;

await test('fresh, corrupt, expired and future choices never enable a service', () => {
  const valid = createConsent({ instagram: true, elfsight: true }, now);
  for (const raw of [
    null,
    '',
    'invalid',
    '{}',
    'null',
    JSON.stringify({ ...valid, version: CONSENT_VERSION + 1 }),
    JSON.stringify({
      ...valid,
      services: { instagram: 'true', elfsight: true },
    }),
    JSON.stringify({ ...valid, expiresAt: now + CONSENT_DURATION + 1 }),
    JSON.stringify(createConsent(valid.services, now + 1)),
    JSON.stringify(createConsent(valid.services, now - CONSENT_DURATION)),
  ]) {
    assert.equal(parseConsent(raw, now), null);
  }
});
await test('denial, independent provider choice, expiry and withdrawal round-trip', () => {
  for (const services of [
    denied,
    { instagram: true, elfsight: false },
    { instagram: false, elfsight: true },
    { instagram: true, elfsight: true },
  ]) {
    const record = createConsent(services, now);
    assert.deepEqual(
      parseConsent(JSON.stringify(record), now)?.services,
      services,
    );
    assert.equal(parseConsent(JSON.stringify(record), record.expiresAt), null);
  }
  assert.deepEqual(
    parseConsent(JSON.stringify(createConsent(denied, now)), now)?.services,
    denied,
  );
});
await test('isolated feed rejects unrelated senders and never loads on direct access', () => {
  const html = readFileSync(
    new URL('../public/embeds/instagram-feed.html', import.meta.url),
    'utf8',
  );
  const source = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  let handler;
  const scripts = [];
  const widget = { setAttribute() {} };
  const feed = {
    appendChild() {},
    getBoundingClientRect: () => ({ height: 640 }),
  };
  const parent = { postMessage() {} };
  const status = { textContent: '' };
  const link = { textContent: '' };
  const win = {
    parent,
    location: { origin: 'https://example.test' },
    addEventListener: (_, fn) => {
      handler = fn;
    },
  };
  const context = {
    window: win,
    document: {
      documentElement: { lang: 'de' },
      createElement: (tag) => (tag === 'script' ? {} : widget),
      getElementById: (id) =>
        id === 'status-copy' ? status : id === 'status-link' ? link : feed,
      body: { appendChild: (script) => scripts.push(script) },
    },
    MutationObserver: class {
      observe() {}
    },
    ResizeObserver: class {
      observe() {}
    },
  };
  vm.runInNewContext(source, context);
  assert.equal(scripts.length, 0);
  const valid = {
    source: parent,
    origin: win.location.origin,
    data: { type: 'lupercia-feed-enable' },
  };
  handler({ ...valid, origin: 'https://attacker.test' });
  handler({ ...valid, source: {} });
  handler({ ...valid, data: { type: 'other' } });
  assert.equal(scripts.length, 0);
  win.parent = win;
  handler({ ...valid, source: win });
  assert.equal(scripts.length, 0);
  win.parent = parent;
  const copy = {
    title: 'Lupercia feed',
    pending: 'Waiting for consent.',
    failed: 'Feed unavailable.',
    link: 'Open Instagram',
  };
  handler({
    ...valid,
    data: { type: 'lupercia-feed-language', language: 'en', copy },
  });
  assert.equal(context.document.documentElement.lang, 'en');
  assert.equal(status.textContent, copy.pending);
  assert.equal(link.textContent, copy.link + ' ↗');
  assert.equal(
    scripts.length,
    0,
    'language updates cannot enable the provider',
  );
  handler(valid);
  handler(valid);
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, 'https://elfsightcdn.com/platform.js');
  scripts[0].onerror();
  assert.equal(status.textContent, copy.failed);
  const spanish = { ...copy, failed: 'El feed no está disponible.' };
  handler({
    ...valid,
    data: { type: 'lupercia-feed-language', language: 'es', copy: spanish },
  });
  assert.equal(context.document.documentElement.lang, 'es');
  assert.equal(status.textContent, spanish.failed);
  assert.equal(
    scripts.length,
    1,
    'language changes preserve the existing frame/provider',
  );
});

await test('all exported pages ship without external scripts, media frames or connection hints', () => {
  for (const language of languages)
    for (const base of [
      'index',
      'salon',
      'mate',
      'maria',
      'tee-genuss',
      'geschenkbox',
      'veranstaltungen',
      'impressum',
      'datenschutz',
      '404',
    ]) {
      const path = localizedHref(base === 'index' ? '/' : `/${base}`, language);
      const page = path === '/' ? 'index' : path.slice(1);
      const html = readFileSync(
        new URL(`../dist/client/${page}.html`, import.meta.url),
        'utf8',
      );
      assert.doesNotMatch(
        html,
        /<iframe\b/i,
        `${page}: media must not be server-rendered before consent`,
      );
      assert.doesNotMatch(
        html,
        /<script\b[^>]*\bsrc=["']https?:\/\//i,
        `${page}: external script before consent`,
      );
      assert.doesNotMatch(
        html,
        /<link\b[^>]*\brel=["'](?:preconnect|dns-prefetch)["']/i,
        `${page}: external connection hint`,
      );
      assert.match(
        html,
        new RegExp(translate('Datenschutzeinstellungen', language)),
        `${page}: withdrawal entry missing`,
      );
    }
});
