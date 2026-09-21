import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import ts from 'typescript';
import {
  languages,
  languageFromPath,
  localizedHref,
  translate,
} from '../app/i18n-core.ts';

const root = new URL('../', import.meta.url);
const catalog = JSON.parse(
  await readFile(new URL('locales/catalog.json', root), 'utf8'),
);
const sources = new Set();
const normalize = (text) => text.trim().replace(/\s+/g, ' ');
const add = (text) => {
  if (/\p{L}/u.test(text) && !text.startsWith('/'))
    sources.add(normalize(text));
};
const copyAttributes = [
  'alt',
  'aria-label',
  'title',
  'description',
  'eyebrow',
  'label',
  'placeholder',
];
const copyFields = [
  'alt',
  'name',
  'text',
  'tag',
  'eyebrow',
  'cta',
  'title',
  'description',
];
const dynamicLists = [
  'heroLinks',
  'teas',
  'ritual',
  'formats',
  'serviceDetails',
  'links',
];

async function scan(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = new URL(entry.name + (entry.isDirectory() ? '/' : ''), dir);
    if (entry.isDirectory()) {
      await scan(file);
      continue;
    }
    if (!/\.tsx?$/.test(entry.name)) continue;
    const source = await readFile(file, 'utf8');
    const ast = ts.createSourceFile(
      file.pathname,
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
    function literals(node) {
      if (ts.isStringLiteral(node)) add(node.text);
      ts.forEachChild(node, literals);
    }
    function visit(node) {
      if (ts.isJsxText(node) && /\p{L}/u.test(node.text)) {
        assert.fail(
          `${file.pathname}: untranslated JSX copy: ${node.text.trim()}`,
        );
      }
      if (
        ts.isJsxAttribute(node) &&
        copyAttributes.includes(node.name.text) &&
        node.initializer &&
        ts.isStringLiteral(node.initializer) &&
        node.initializer.text
      ) {
        assert.fail(
          `${file.pathname}: untranslated ${node.name.text}: ${node.initializer.text}`,
        );
      }
      if (
        ts.isCallExpression(node) &&
        ['t', 'translate'].includes(node.expression.getText(ast)) &&
        node.arguments[0]
      )
        literals(node.arguments[0]);
      if (
        ts.isPropertyAssignment(node) &&
        copyFields.includes(node.name.getText(ast)) &&
        ts.isStringLiteral(node.initializer)
      )
        add(node.initializer.text);
      if (
        ts.isBindingElement(node) &&
        ['eyebrow', 'label'].includes(node.name.getText(ast)) &&
        node.initializer &&
        ts.isStringLiteral(node.initializer)
      )
        add(node.initializer.text);
      if (
        ts.isVariableDeclaration(node) &&
        dynamicLists.includes(node.name.getText(ast)) &&
        node.initializer
      ) {
        function arrayStrings(child) {
          if (
            ts.isStringLiteral(child) &&
            ts.isArrayLiteralExpression(child.parent)
          )
            add(child.text);
          ts.forEachChild(child, arrayStrings);
        }
        arrayStrings(node.initializer);
      }
      ts.forEachChild(node, visit);
    }
    visit(ast);
  }
}
await scan(new URL('app/', root));
for (const photo of Object.values(
  JSON.parse(await readFile(new URL('app/detail-photos.json', root), 'utf8')),
))
  add(photo.alt);
const seo = JSON.parse(
  await readFile(new URL('seo.config.json', root), 'utf8'),
);
for (const page of Object.values(seo.pages))
  for (const key of ['name', 'title', 'description', 'imageAlt'])
    add(page[key]);
const social = JSON.parse(
  await readFile(new URL('scripts/social-preview.config.json', root), 'utf8'),
);
for (const card of Object.values(social)) card.lines.forEach(add);
for (const text of sources) {
  assert.ok(catalog[text], `Missing translation entry: ${text}`);
}
for (const [source, values] of Object.entries(catalog)) {
  assert.equal(source, normalize(source), `Non-normalized key: ${source}`);
  for (const language of ['en', 'es']) {
    assert.ok(
      values[language]?.trim(),
      `${language}: missing translation for ${source}`,
    );
    assert.ok(
      !/[<>]/.test(values[language]),
      `${language}: use React markup, not HTML strings`,
    );
    assert.equal(translate(source, language), values[language]);
  }
}
for (const language of languages) {
  for (const path of [
    '/',
    '/mate',
    '/salon#besuch',
    '/maria?from=tea#geschichte',
    '/datenschutz',
    '/404',
  ]) {
    const localized = localizedHref(path, language);
    assert.equal(languageFromPath(localized.split(/[?#]/)[0]), language);
    assert.equal(localizedHref(localized, 'de'), path);
    assert.equal(localizedHref(localized, language), localized);
  }
}
assert.equal(
  localizedHref('https://example.org/es/mate', 'en'),
  'https://example.org/es/mate',
);
assert.equal(localizedHref('//example.org/mate', 'en'), '//example.org/mate');
assert.equal(localizedHref('#besuch', 'es'), '#besuch');
assert.equal(localizedHref('tel:+4915167970350', 'es'), 'tel:+4915167970350');
assert.equal(translate(' Zum Inhalt ', 'en'), ' Skip to content ');
console.log(
  `Translations: ${Object.keys(catalog).length} complete entries; ${sources.size} source strings, JSX/attributes and locale links checked.`,
);
