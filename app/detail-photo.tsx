import Image from 'next/image';
import photos from './detail-photos.json';

/** Native responsive sources keep the static export independent of an image server. */
export function DetailPhoto({
  name,
  sizes = '(max-width: 760px) 90vw, 40vw',
}: {
  name: keyof typeof photos;
  sizes?: string;
}) {
  const { widths, ...photo } = photos[name];
  const path = `/assets/images/einblicke/${name}`;
  return (
    <picture className="detail-photo">
      <source
        type="image/webp"
        srcSet={widths.map((width) => `${path}-${width}.webp ${width}w`).join(', ')}
        sizes={sizes}
      />
      <Image src={`${path}-720.webp`} {...photo} loading="lazy" decoding="async" />
    </picture>
  );
}
