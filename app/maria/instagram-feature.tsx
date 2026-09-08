import { ArrowUpRight } from 'lucide-react';
import Link from '../site-link';

const postUrl = 'https://www.instagram.com/reel/DLHhmNIhJKO/';

export default function InstagramFeature() {
  return (
    <div className="instagram-feature">
      <div className="instagram-stage" id="dw-instagram-player">
        <iframe
          className="instagram-frame"
          src={`${postUrl}embed/`}
          title="DW Volos: Maria und die Mate-Kultur bei Lupercia"
          loading="eager"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="instagram-actions">
        <Link href={postUrl} target="_blank" rel="noopener noreferrer">
          Auf Instagram ansehen <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <Link href="/datenschutz/#instagram">Instagram · Datenschutz</Link>
      </div>
    </div>
  );
}
