'use client';
import { useTranslation } from '../i18n';
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
  const { t, language } = useTranslation();
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(640);
  const copy = {
    title: t('Lupercia Instagram-Feed'),
    pending: t('Der Feed wird nach Ihrer Einwilligung geladen.'),
    failed: t('Der Feed ist gerade nicht erreichbar.'),
    link: t('Instagram direkt öffnen'),
  };
  const message = JSON.stringify({ language, copy });
  useEffect(() => {
    frame.current?.contentWindow?.postMessage(
      { type: 'lupercia-feed-language', ...JSON.parse(message) },
      window.location.origin,
    );
  }, [message]);
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
      title={t('Instagram-Galerie von Lupercia, bereitgestellt durch Elfsight')}
      style={{ height }}
      onLoad={() =>
        frame.current?.contentWindow?.postMessage(
          { type: 'lupercia-feed-enable', language, copy },
          window.location.origin,
        )
      }
    />
  );
}
