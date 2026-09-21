import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import sharp from 'sharp';
const root = new URL('../', import.meta.url);
const manifest = JSON.parse(
  await readFile(new URL('app/responsive-images.json', root), 'utf8'),
);
let count = 0;
for (const [src, photo] of Object.entries(manifest)) {
  const original = await sharp(
    await readFile(new URL('public' + src, root)),
  ).metadata();
  assert.equal(photo.width, original.width, `${src}: intrinsic width`);
  assert.equal(photo.height, original.height, `${src}: intrinsic height`);
  assert.ok(
    photo.variants.length >= 2,
    `${src}: responsive candidates missing`,
  );
  let previous = 0;
  for (const variant of photo.variants) {
    const file = new URL('dist/client' + variant.src, root);
    const actual = await sharp(await readFile(file)).metadata();
    assert.ok(
      variant.width > previous && variant.width <= original.width,
      `${src}: candidate order/size`,
    );
    assert.equal(
      actual.width,
      variant.width,
      `${variant.src}: incorrect srcset descriptor`,
    );
    assert.ok(
      Math.abs(
        actual.height - (original.height * actual.width) / original.width,
      ) <= 1,
      `${variant.src}: photograph cropped or stretched`,
    );
    assert.equal(actual.format, 'webp');
    assert.ok((await stat(file)).size > 0);
    previous = variant.width;
    count++;
  }
}
console.log(
  `Images: ${count} generated candidates checked for existence, dimensions, aspect ratio and format.`,
);
