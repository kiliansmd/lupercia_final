/* oxlint-disable next/no-img-element -- Build-time WebP variants provide actual srcset optimization for the static export. */
import type { ComponentProps } from 'react';
import manifest from './responsive-images.json';

type Photo = {
  width: number;
  height: number;
  variants: { src: string; width: number }[];
};
type Props = Omit<ComponentProps<'img'>, 'src' | 'alt'> & {
  src: string;
  alt: string;
  unoptimized?: boolean;
};

/** Static, crawlable images without an image server; the original remains the fallback. */
export default function ResponsiveImage({
  src,
  alt,
  sizes,
  width,
  height,
  unoptimized: _unoptimized,
  ...props
}: Props) {
  const photo = (manifest as Record<string, Photo>)[src];
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      width={photo?.width ?? width}
      height={photo?.height ?? height}
      srcSet={photo?.variants
        .map((variant) => `${variant.src} ${variant.width}w`)
        .join(', ')}
      sizes={
        photo
          ? (sizes ??
            '(max-width: 760px) calc(100vw - 36px), (max-width: 1100px) 50vw, 660px')
          : sizes
      }
    />
  );
}
