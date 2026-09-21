import { createHash } from 'node:crypto';
import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const publicDir = join(root, 'public');
const inputDir = join(publicDir, 'assets/images');
const outputDir = join(publicDir, 'assets/responsive');
await mkdir(outputDir, { recursive: true });
const manifest = {};
async function optimize(
  file,
  quality = 82,
  candidates = [240, 400, 640, 960, 1280, 1600],
) {
  const source = await readFile(file);
  const { width, height } = await sharp(source).metadata();
  const widths = [
    ...new Set(candidates.filter((w) => w < width).concat(width)),
  ];
  const hash = createHash('sha256')
    .update(source)
    .update(`webp-${quality}-effort5-v1`)
    .digest('hex')
    .slice(0, 12);
  const variants = [];
  for (const target of widths) {
    const name = `${basename(file, '.webp')}-${hash}-${target}.webp`;
    const output = join(outputDir, name);
    try {
      await access(output);
    } catch {
      // Resize only: preserve the complete photograph, aspect ratio and colour space.
      await sharp(source)
        .resize({ width: target, withoutEnlargement: true })
        .webp({ quality, effort: 5 })
        .toFile(output);
    }
    variants.push({ src: `/assets/responsive/${name}`, width: target });
  }
  manifest['/' + relative(publicDir, file).split('\\').join('/')] = {
    width,
    height,
    variants,
  };
}

async function scan(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, item.name);
    // These photographs already have a dedicated responsive image set.
    if (item.isDirectory()) {
      if (item.name !== 'einblicke') await scan(file);
      continue;
    }
    if (!item.name.endsWith('.webp')) continue;
    await optimize(file);
  }
}
await scan(inputDir);
await optimize(
  join(publicDir, 'assets/lupercia-mark.webp'),
  90,
  [160, 220, 280, 420, 600],
);
await writeFile(
  resolve(root, 'app/responsive-images.json'),
  JSON.stringify(manifest, null, 2) + '\n',
);
console.log(
  `Responsive images: ${Object.keys(manifest).length} original images, unchanged originals and content-addressed variants.`,
);
