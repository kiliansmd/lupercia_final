'use client';
import { useEffect, useRef, useState } from 'react';
import { ExternalMedia } from '../consent';

export function InstagramFeedPlayer() {
  return (
    <ExternalMedia service="elfsight">
      <FeedFrame />
    </ExternalMedia>
  );
}

function FeedFrame() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(640);
  useEffect(() => {
    function receive(event: MessageEvent) {
      if (
        event.origin !== window.location.origin ||
        event.source !== frame.current?.contentWindow ||
        event.data?.type !== 'lupercia-feed-height'
      )
        return;
      if (
        Number.isFinite(event.data.height) &&
        event.data.height >= 200 &&
        event.data.height <= 12000
      )
        setHeight(Math.ceil(event.data.height));
    }
    window.addEventListener('message', receive);
    return () => window.removeEventListener('message', receive);
  }, []);
  return (
    <iframe
      ref={frame}
      className="instagram-feed-frame"
      src="/embeds/instagram-feed.html"
      title="Instagram-Galerie von Lupercia, bereitgestellt durch Elfsight"
      style={{ height }}
      onLoad={() =>
        frame.current?.contentWindow?.postMessage(
          { type: 'lupercia-feed-enable' },
          window.location.origin,
        )
      }
    />
  );
}
