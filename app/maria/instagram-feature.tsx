'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import Link from '../site-link';
import { ExternalMedia } from '../consent';

const postUrl = 'https://www.instagram.com/reel/DLHhmNIhJKO/';

export default function InstagramFeature() {
  return (
    <ExternalMedia service="instagram">
      <InstagramPlayer />
    </ExternalMedia>
  );
}

function InstagramPlayer() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'slow' | 'error'>(
    'loading',
  );
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    // Instagram's embed reports its own height as controls and media mount.
    function receive(event: MessageEvent) {
      if (
        event.origin !== 'https://www.instagram.com' ||
        event.source !== frame.current?.contentWindow
      )
        return;
      try {
        const message =
          typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (
          !message ||
          (message.type !== 'MOUNTED' && message.type !== 'MEASURE')
        )
          return;
        setStatus('loaded');
        const measured = message.details?.height;
        if (
          typeof measured === 'number' &&
          Number.isFinite(measured) &&
          measured >= 200 &&
          measured <= 1800
        ) {
          setHeight(Math.ceil(measured));
        }
      } catch {
        // Ignore messages that do not belong to Instagram's embed protocol.
      }
    }
    window.addEventListener('message', receive);
    const timeout = window.setTimeout(() => {
      setStatus((current) => (current === 'loading' ? 'slow' : current));
    }, 15000);
    return () => {
      window.removeEventListener('message', receive);
      window.clearTimeout(timeout);
    };
  }, [attempt]);

  function reload() {
    setStatus('loading');
    setHeight(undefined);
    setAttempt((current) => current + 1);
  }

  return (
    <div className="instagram-feature">
      <div
        className="instagram-stage"
        id="dw-instagram-player"
        style={height ? { height, paddingTop: 0 } : undefined}
      >
        <iframe
          key={attempt}
          ref={frame}
          className="instagram-frame"
          src={`${postUrl}embed/?cr=1&v=14`}
          title="DW Volos: Maria und die Mate-Kultur bei Lupercia"
          loading="eager"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      </div>
      {(status === 'slow' || status === 'error') && (
        <output className="instagram-notice">
          Der Instagram-Player lädt gerade nicht. Versuchen Sie es erneut oder
          öffnen Sie den Beitrag direkt auf Instagram.
        </output>
      )}
      <div className="instagram-actions">
        <button
          type="button"
          onClick={reload}
          aria-controls="dw-instagram-player"
        >
          <RotateCcw size={15} aria-hidden="true" /> Video neu laden
        </button>
        <Link href={postUrl} target="_blank" rel="noopener noreferrer">
          Auf Instagram ansehen <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <Link href="/datenschutz#instagram">Instagram · Datenschutz</Link>
      </div>
    </div>
  );
}
