import satori from 'satori';
import sharp from 'sharp';
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const settings = JSON.parse(
  await readFile(
    new URL('social-preview.config.json', import.meta.url),
    'utf8',
  ),
);
const out = new URL('public/assets/social/', root);
await mkdir(out, { recursive: true });
const fonts = await Promise.all(
  ['Fraunces', 'SourceSans3'].map(async (name) => ({
    name,
    data: await readFile(new URL(`fonts/${name}.ttf`, import.meta.url)),
    weight: 400,
    style: 'normal',
  })),
);
const toData = async (path, portrait = false) =>
  `data:image/png;base64,${(
    await sharp(fileURLToPath(new URL(`public${path}`, root)))
      .resize(
        portrait
          ? { width: 270, height: 630, fit: 'cover', position: 'left' }
          : { width: 700, withoutEnlargement: true },
      )
      .png()
      .toBuffer()
  ).toString('base64')}`;
const logo = await toData('/assets/lupercia-mark-600.webp');
const manifest = {};
const kept = new Set();
for (const [path, card] of Object.entries(settings)) {
  const [left, right] = await Promise.all([
    toData(card.left, path === '/maria'),
    toData(card.right),
  ]);
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#fffefa',
          color: '#252721',
        },
        children: [
          {
            type: 'img',
            props: {
              src: left,
              width: 270,
              height: 630,
              style: {
                objectFit: 'cover',
                objectPosition: card.leftPosition || '50% 50%',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 660,
                height: 630,
                paddingTop: 58,
                paddingLeft: 25,
                paddingRight: 25,
              },
              children: [
                {
                  type: 'img',
                  props: {
                    src: logo,
                    width: 285,
                    height: 284,
                    style: { objectFit: 'contain' },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      width: 46,
                      height: 1,
                      backgroundColor: '#b89b5e',
                      marginTop: 27,
                      marginBottom: 24,
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      height: 116,
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Fraunces',
                      fontSize: 41,
                      lineHeight: 1.24,
                      textAlign: 'center',
                    },
                    children: card.lines.map((line) => ({
                      type: 'div',
                      props: { children: line },
                    })),
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      marginTop: 25,
                      fontFamily: 'SourceSans3',
                      fontSize: 18,
                      letterSpacing: 3,
                      color: '#793c34',
                    },
                    children: 'BONN · SÜDSTADT',
                  },
                },
              ],
            },
          },
          {
            type: 'img',
            props: {
              src: right,
              width: 270,
              height: 630,
              style: { objectFit: 'cover', objectPosition: '50% 50%' },
            },
          },
        ],
      },
    },
    { width: 1200, height: 630, fonts },
  );
  const jpeg = await sharp(Buffer.from(svg))
    .flatten({ background: '#fffefa' })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();
  const hash = createHash('sha256').update(jpeg).digest('hex').slice(0, 10);
  const name = `${card.slug}-${hash}.jpg`;
  kept.add(name);
  await writeFile(new URL(name, out), jpeg);
  manifest[path] = {
    image: `/assets/social/${name}`,
    width: 1200,
    height: 630,
    type: 'image/jpeg',
    alt: `Vollständiges Lupercia-Logo, ${card.lines.join(' ')} Bonn-Südstadt.`,
  };
  console.log(`${path}: ${name} (${Math.round(jpeg.length / 1024)} KB)`);
}
for (const name of await readdir(out))
  if (name.endsWith('.jpg') && !kept.has(name))
    await unlink(new URL(name, out));
await writeFile(
  new URL('social-previews.json', root),
  JSON.stringify(manifest, null, 2) + '\n',
);
// Favicon and home-screen icon use contain, with visible padding around the complete logo.
for (const size of [32, 180, 192]) {
  const inset = Math.round(size * 0.08);
  const mark = await sharp(
    fileURLToPath(new URL('public/assets/lupercia-mark-600.webp', root)),
  )
    .resize(size - inset * 2, size - inset * 2, { fit: 'contain' })
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: '#fffefa' },
  })
    .composite([{ input: mark, left: inset, top: inset }])
    .png()
    .toFile(fileURLToPath(new URL(`public/assets/icon-${size}.png`, root)));
}
