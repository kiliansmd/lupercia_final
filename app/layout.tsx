import Link from './site-link';
import type { Metadata } from 'next';
import { Footer } from './site-chrome';
import { Header } from './header';
import './globals.css';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: {
    default: 'Lupercia — Tee. Genuss. Begegnung. In Bonn.',
    template: '%s — Lupercia',
  },
  description:
    'Ein Platz am Fenster, eine Kanne guter Tee und Zeit zum Bleiben. Entdecken Sie Marias Teesalon, Tea Time und rund 100 Teesorten in der Bonner Südstadt.',
  icons: { icon: '/assets/favicon.png' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <Link className="skip-link" href="#main-content">
          Zum Inhalt
        </Link>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
