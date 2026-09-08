import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import {
  CONSENT_DURATION,
  CONSENT_VERSION,
  createConsent,
  denied,
  parseConsent,
} from '../app/consent-state.ts';
const now = 1800000000000;

test('fresh, corrupt, expired and future choices never enable a service', () => {
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
test('denial, independent provider choice, expiry and withdrawal round-trip', () => {
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
test('isolated feed rejects unrelated senders and never loads on direct access', () => {
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
      createElement: (tag) => (tag === 'script' ? {} : widget),
      getElementById: () => feed,
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
  handler(valid);
  handler(valid);
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, 'https://elfsightcdn.com/platform.js');
});

test('all exported pages ship without external scripts, media frames or connection hints', () => {
  for (const page of [
    'index',
    'salon',
    'maria',
    'tee-genuss',
    'geschenkbox',
    'veranstaltungen',
    'impressum',
    'datenschutz',
    '404',
  ]) {
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
      /Datenschutzeinstellungen/,
      `${page}: withdrawal entry missing`,
    );
  }
});
