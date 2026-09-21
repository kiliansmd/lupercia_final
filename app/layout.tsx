import { LanguageDocument, SkipLink } from './i18n';
import type { Metadata } from 'next';
import { Footer } from './site-chrome';
import { Header } from './header';
import './globals.css';
import { ConsentProvider } from './consent';
import { siteOrigin } from './seo';
import { SiteSchema } from './seo-content';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: 'Lupercia – Teesalon & Teeladen in Bonn-Südstadt',
    template: '%s — Lupercia',
  },
  description:
    'Ein Platz am Fenster, eine Kanne guter Tee und Zeit zum Bleiben. Entdecken Sie Marias Teesalon, Tea Time und rund 100 Teesorten in der Bonner Südstadt.',
  icons: {
    icon: [
      { url: '/assets/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/assets/icon-180.png', sizes: '180x180', type: 'image/png' },
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LanguageDocument>
      <body>
        <link
          rel="preload"
          href="/assets/fonts/SourceSans3-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/Fraunces-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <SiteSchema />
        <SkipLink />
        <ConsentProvider>
          <Header />
          {children}
          <Footer />
        </ConsentProvider>
      </body>
    </LanguageDocument>
  );
}
