import Script from 'next/script';
import Link from '../site-link';
import { TextLink } from '../site-chrome';

export default function InstagramFeed() {
  return (
    <section
      className="maria-journey"
      id="lupercias-reise"
      aria-labelledby="maria-journey-title"
    >
      <header className="maria-journey-heading">
        <div>
          <span className="eyebrow">Unsere Geschichte geht weiter</span>
          <h2 id="maria-journey-title">
            Kleine Einblicke.
            <br />
            <em>Eine Reise voller Tee.</em>
          </h2>
        </div>
        <div className="maria-journey-copy">
          <p>
            Neue Tees, Begegnungen im Salon und die kleinen Freuden dazwischen.
            Begleiten Sie Maria und Lupercia auf Instagram und bleiben Sie Teil
            unserer Geschichte.
          </p>
          <TextLink href="https://www.instagram.com/lupercia.de/" external>
            @lupercia.de folgen
          </TextLink>
        </div>
      </header>
      <div className="maria-journey-feed">
        <div
          className="elfsight-app-eea1093c-dd61-4d51-a3f2-c1a335162a59"
          data-elfsight-app-lazy=""
        />
      </div>
      <p className="maria-journey-note">
        Einblicke aus unserem Alltag ·{' '}
        <Link href="/datenschutz#instagram-feed">Datenschutz zum Feed</Link>
      </p>
      <Script
        id="elfsight-platform"
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
