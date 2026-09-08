'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Link from './site-link';
import {
  CONSENT_KEY,
  createConsent,
  denied,
  parseConsent,
  type Consent,
  type Services,
} from './consent-state';

const serviceDetails = {
  instagram: {
    name: 'Instagram-Video',
    description:
      'Der Beitrag der Deutschen Welle wird von Meta Platforms Ireland geladen. Meta erhält IP-Adresse, Geräte- und Nutzungsdaten und kann Cookies für Analyse und Werbung einsetzen sowie den Besuch einem angemeldeten Instagram-Konto zuordnen. Verarbeitung auch in den USA möglich.',
    anchor: 'instagram',
  },
  elfsight: {
    name: 'Instagram-Feed über Elfsight',
    description:
      'Elfsight SL (Andorra) stellt die Galerie bereit und erhält IP-Adresse und Browserdaten. Dabei können Cookies zur Wiedererkennung von Aufrufen und Verbindungen zu Instagram/Meta entstehen. Verarbeitung außerhalb der EU, auch in den USA, möglich.',
    anchor: 'instagram-feed',
  },
} as const;
const ConsentContext = createContext<{
  services: Services;
  openSettings: () => void;
} | null>(null);

function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error('ConsentProvider is required');
  return context;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [banner, setBanner] = useState(false);
  const [draft, setDraft] = useState<Services>(denied);
  const [storageNotice, setStorageNotice] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const consentRef = useRef<Consent | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let stored: Consent | null = null;
    try {
      stored = parseConsent(localStorage.getItem(CONSENT_KEY));
    } catch {
      /* Session-only choice remains available. */
    }
    consentRef.current = stored;
    // Read browser storage after hydration; the server must always render with consent denied.
    /* oxlint-disable react/react-compiler */
    setConsent(stored);
    setBanner(!stored);
    setReady(true);
    /* oxlint-enable react/react-compiler */
    function sync(event: StorageEvent) {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      const next = parseConsent(event.newValue);
      consentRef.current = next;
      setConsent(next);
      setDraft(next?.services ?? denied);
      setBanner(!next);
    }
    function expire() {
      if (consentRef.current && consentRef.current.expiresAt <= Date.now()) {
        consentRef.current = null;
        setConsent(null);
        setDraft(denied);
        setBanner(true);
        try {
          localStorage.removeItem(CONSENT_KEY);
        } catch {
          /* Already denied in memory. */
        }
      }
    }
    window.addEventListener('storage', sync);
    document.addEventListener('visibilitychange', expire);
    const interval = window.setInterval(expire, 60000);
    return () => {
      window.removeEventListener('storage', sync);
      document.removeEventListener('visibilitychange', expire);
      window.clearInterval(interval);
    };
  }, []);

  function openSettings() {
    setDraft(consent?.services ?? denied);
    returnFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    dialog.current?.showModal();
  }

  function save(services: Services) {
    const next = createConsent(services);
    let persisted = true;
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    } catch {
      persisted = false;
      // A failed replacement must not leave an earlier opt-in active on the next visit.
      try { localStorage.removeItem(CONSENT_KEY); } catch { /* Browser storage is unavailable. */ }
    }
    consentRef.current = next;
    setConsent(next);
    setBanner(false);
    setStorageNotice(!persisted);
    dialog.current?.close();
    // Third-party code lives inside iframes: revocation unmounts the whole browsing context.
  }

  return (
    <ConsentContext.Provider
      value={{ services: consent?.services ?? denied, openSettings }}
    >
      {children}
      {ready && banner && (
        <section className="consent-banner" aria-labelledby="consent-title">
          <div className="consent-copy">
            <span className="eyebrow">Ihre Privatsphäre</span>
            <h2 id="consent-title">Sie entscheiden, was mitlädt.</h2>
            <p>
              Die Website funktioniert ohne optionale Cookies. Mit Ihrer
              Einwilligung laden wir das Instagram-Video (Meta) und den
              Instagram-Feed (Elfsight). Dabei können Cookies und
              Datenübermittlungen außerhalb der EU entstehen. Freiwillig und
              jederzeit widerrufbar.
            </p>
            <div className="consent-links">
              <Link href="/datenschutz">Datenschutz & Dienstdetails</Link>
              <Link href="/impressum">Impressum</Link>
            </div>
          </div>
          <div className="consent-actions">
            <button type="button" onClick={() => save(denied)}>
              Alle ablehnen
            </button>
            <button type="button" onClick={openSettings}>
              Auswahl anpassen
            </button>
            <button
              type="button"
              onClick={() => save({ instagram: true, elfsight: true })}
            >
              Alle akzeptieren
            </button>
          </div>
        </section>
      )}
      <dialog
        ref={dialog}
        className="consent-dialog"
        aria-labelledby="privacy-settings-title"
        onClose={() =>
          returnFocus.current?.isConnected && returnFocus.current.focus()
        }
      >
        <div className="consent-dialog-heading">
          <div>
            <span className="eyebrow">Datenschutzeinstellungen</span>
            <h2 id="privacy-settings-title">Ihre Auswahl.</h2>
          </div>
          <button
            type="button"
            className="consent-close"
            onClick={() => dialog.current?.close()}
            aria-label="Einstellungen schließen"
          >
            ×
          </button>
        </div>
        <p>
          Optionale Inhalte bleiben ohne Einwilligung gesperrt. Sie können beide
          Dienste getrennt erlauben oder eine frühere Einwilligung mit „Alle
          ablehnen“ widerrufen. Schließen verändert Ihre Auswahl nicht.
        </p>
        <div className="consent-necessary">
          <strong>Notwendige Funktionen</strong>
          <span>Immer aktiv</span>
          <p>
            Seitenauslieferung und Speicherung Ihrer Datenschutz-Auswahl für 180
            Tage in diesem Browser. Keine Besucheranalyse durch Lupercia.
          </p>
        </div>
        {(Object.keys(serviceDetails) as (keyof Services)[]).map((key) => (
          <div className="consent-service" key={key}>
            <label>
              <strong>{serviceDetails[key].name}</strong>
              <input
                type="checkbox"
                checked={draft[key]}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    [key]: event.target.checked,
                  }))
                }
                aria-describedby={`consent-${key}-description`}
              />
            </label>
            <p id={`consent-${key}-description`}>
              {serviceDetails[key].description}
            </p>
            <Link href={`/datenschutz#${serviceDetails[key].anchor}`}>
              Anbieter, Zwecke und Datenschutz
            </Link>
          </div>
        ))}
        <p className="consent-footnote">
          Grundlage: Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Ihre
          Auswahl gilt für 180 Tage. Ändern oder widerrufen können Sie sie
          jederzeit über „Datenschutzeinstellungen“ am Seitenende.
        </p>
        <div className="consent-actions">
          <button type="button" onClick={() => save(denied)}>
            Alle ablehnen
          </button>
          <button type="button" onClick={() => save(draft)}>
            Auswahl speichern
          </button>
          <button
            type="button"
            onClick={() => save({ instagram: true, elfsight: true })}
          >
            Alle akzeptieren
          </button>
        </div>
        <div className="consent-links">
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
        </div>
      </dialog>
      {storageNotice && (
        <output className="consent-storage-notice">
          Ihre Auswahl gilt für diesen Seitenaufruf. Ihr Browser erlaubt keine
          dauerhafte Speicherung.
          <button type="button" onClick={() => setStorageNotice(false)}>
            Schließen
          </button>
        </output>
      )}
    </ConsentContext.Provider>
  );
}

export function CookieSettingsButton() {
  const { openSettings } = useConsent();
  return (
    <button
      type="button"
      className="privacy-settings-link"
      onClick={openSettings}
    >
      Datenschutzeinstellungen
    </button>
  );
}

export function ExternalMedia({
  service,
  children,
}: {
  service: keyof Services;
  children: ReactNode;
}) {
  const { services, openSettings } = useConsent();
  if (services[service]) return children;
  return (
    <div className="external-media-consent">
      <span className="eyebrow">Ein Einblick, wenn Sie möchten</span>
      <h3>
        {service === 'instagram'
          ? 'Maria im Film.'
          : 'Lupercias Reise in Bildern.'}
      </h3>
      <p>{serviceDetails[service].description}</p>
      <button type="button" onClick={openSettings}>
        Datenschutz-Auswahl öffnen
      </button>
      <Link
        href={
          service === 'instagram'
            ? 'https://www.instagram.com/reel/DLHhmNIhJKO/'
            : 'https://www.instagram.com/lupercia.de/'
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        Direkt auf Instagram ansehen ↗
      </Link>
      <noscript>
        Zum Laden hier auf der Seite werden JavaScript und Ihre Einwilligung
        benötigt.
      </noscript>
    </div>
  );
}
