// Cookie/storage consent preferences.
//
// Categories reflect what this site actually uses (see /cookie-policy):
// - necessary: required for the site to remember your consent choice. Always on.
// - analytics: loads Google Tag Manager (GTM-MQ4STV94). Off until accepted.
// - maps: loads the embedded Google Map (homepage, /areas and /contact). Off until accepted.
//
// Add a new key here only when a new non-essential technology is actually
// added to the site — do not add placeholder categories.
export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  maps: boolean;
};

export type StoredConsent = ConsentCategories & {
  version: number;
  decidedAt: string;
};

const STORAGE_KEY = "fsr-cookie-consent";
const CONSENT_VERSION = 1;

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (typeof parsed !== "object" || parsed === null) return null;
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: parsed.analytics === true,
      maps: parsed.maps === true,
      decidedAt: typeof parsed.decidedAt === "string" ? parsed.decidedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function writeStoredConsent(categories: Omit<ConsentCategories, "necessary">): StoredConsent {
  const stored: StoredConsent = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: categories.analytics,
    maps: categories.maps,
    decidedAt: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // localStorage unavailable (private browsing, storage disabled) — consent
      // simply won't persist across visits; the banner will show again.
    }
  }
  return stored;
}
