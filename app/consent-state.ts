export const CONSENT_KEY = 'lupercia:privacy:v1';
export const CONSENT_VERSION = 1;
export const CONSENT_DURATION = 180 * 24 * 60 * 60 * 1000;
export type Services = { instagram: boolean; elfsight: boolean };
export type Consent = {
  version: number;
  savedAt: number;
  expiresAt: number;
  services: Services;
};
export const denied: Services = { instagram: false, elfsight: false };

export function createConsent(services: Services, now = Date.now()): Consent {
  return {
    version: CONSENT_VERSION,
    savedAt: now,
    expiresAt: now + CONSENT_DURATION,
    services: { ...services },
  };
}

export function parseConsent(
  raw: string | null,
  now = Date.now(),
): Consent | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (
      value?.version !== CONSENT_VERSION ||
      !Number.isFinite(value.savedAt) ||
      !Number.isFinite(value.expiresAt) ||
      value.savedAt > now ||
      value.savedAt < 0 ||
      value.expiresAt <= now ||
      value.expiresAt !== value.savedAt + CONSENT_DURATION ||
      typeof value.services?.instagram !== 'boolean' ||
      typeof value.services?.elfsight !== 'boolean'
    )
      return null;
    return {
      version: value.version,
      savedAt: value.savedAt,
      expiresAt: value.expiresAt,
      services: {
        instagram: value.services.instagram,
        elfsight: value.services.elfsight,
      },
    };
  } catch {
    return null;
  }
}
