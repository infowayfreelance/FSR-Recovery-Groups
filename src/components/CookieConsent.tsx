"use client";

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { GoogleTagManager } from "@next/third-parties/google";
import {
  type ConsentCategories,
  readStoredConsent,
  writeStoredConsent,
} from "@/lib/cookie-consent";

type ConsentContextValue = {
  /** null until the visitor has made a choice (banner should show). */
  consent: ConsentCategories | null;
  isPreferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (categories: Omit<ConsentCategories, "necessary">) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useCookieConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentCategories | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    // Reading localStorage must wait until after the client mount to avoid a
    // server/client hydration mismatch (the server can never know the visitor's
    // stored choice), so this one-time sync intentionally runs in an effect.
    const stored = readStoredConsent();
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration-safe read, see comment above
      setConsent({ necessary: true, analytics: stored.analytics, maps: stored.maps });
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((categories: Omit<ConsentCategories, "necessary">) => {
    writeStoredConsent(categories);
    setConsent({ necessary: true, ...categories });
    setIsPreferencesOpen(false);
  }, []);

  const acceptAll = useCallback(() => persist({ analytics: true, maps: true }), [persist]);
  const rejectNonEssential = useCallback(() => persist({ analytics: false, maps: false }), [persist]);
  const savePreferences = useCallback(
    (categories: Omit<ConsentCategories, "necessary">) => persist(categories),
    [persist]
  );
  const openPreferences = useCallback(() => setIsPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), []);

  return (
    <ConsentContext.Provider
      value={{ consent, isPreferencesOpen, openPreferences, closePreferences, acceptAll, rejectNonEssential, savePreferences }}
    >
      {consent?.analytics && <GoogleTagManager gtmId="GTM-MQ4STV94" />}
      {children}
      {hydrated && consent === null && !isPreferencesOpen && <CookieBanner />}
      {isPreferencesOpen && <CookiePreferencesModal />}
    </ConsentContext.Provider>
  );
}

function CookieBanner() {
  const { acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();
  const headingId = useId();

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={headingId}
      className="fixed inset-x-0 bottom-14 z-[60] border-t border-white/10 bg-navy px-4 py-5 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.35)] sm:bottom-0 sm:px-6 sm:py-6"
    >
      <div className="container-site flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-3xl">
          <h2 id={headingId} className="mb-1.5 text-lg font-bold">
            Your Privacy Choices
          </h2>
          <p className="text-sm leading-6 text-white/75">
            We use necessary technologies to keep our website working. With your permission, we may
            also use optional technologies for analytics or embedded maps. You can accept, reject or
            manage your choices. See our{" "}
            <Link href="/cookie-policy" className="font-semibold text-red underline decoration-red/50 underline-offset-2 hover:text-white">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="font-semibold text-red underline decoration-red/50 underline-offset-2 hover:text-white">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:shrink-0">
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-[44px] rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 sm:min-w-[9.5rem]"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="min-h-[44px] rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 sm:min-w-[9.5rem]"
          >
            Manage Preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-[44px] rounded-full bg-red px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-dark sm:min-w-[9.5rem]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

function CookiePreferencesModal() {
  const { consent, closePreferences, acceptAll, rejectNonEssential, savePreferences } = useCookieConsent();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent?.analytics ?? false);
  const [mapsEnabled, setMapsEnabled] = useState(consent?.maps ?? false);
  const headingId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const hasExistingConsent = consent !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePreferences();
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [closePreferences]);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-navy/60 p-0 sm:items-center sm:p-4">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className="max-h-[90dvh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 id={headingId} className="text-xl font-bold text-navy sm:text-2xl">
            Manage Cookie Preferences
          </h2>
          <button
            type="button"
            onClick={closePreferences}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:border-red hover:text-red"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        <p className="mb-6 text-sm leading-6 text-navy/70">
          Choose which technologies we can use on this site. Strictly necessary technologies keep the
          site working and cannot be switched off. Read our{" "}
          <Link href="/cookie-policy" className="font-semibold text-red hover:text-red-dark">
            Cookie Policy
          </Link>{" "}
          for full details on what each category does.
        </p>

        <div className="mb-6 space-y-4">
          <div className="rounded-2xl border border-navy/10 bg-slate-50 p-5">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 className="font-bold text-navy">Strictly Necessary</h3>
              <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-bold text-navy/60">Always On</span>
            </div>
            <p className="text-sm leading-6 text-navy/70">
              Required so the site can remember your cookie choice. No other strictly necessary
              cookies are currently set by this site. These cannot be disabled.
            </p>
          </div>

          <div className="rounded-2xl border border-navy/10 p-5">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 className="font-bold text-navy">Analytics (Google Tag Manager)</h3>
              <label className="relative inline-flex cursor-pointer items-center">
                <span className="sr-only">Toggle analytics</span>
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                  className="peer sr-only"
                />
                <span className="h-6 w-11 rounded-full bg-navy/15 transition peer-checked:bg-red peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-red" />
                <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
              </label>
            </div>
            <p className="text-sm leading-6 text-navy/70">
              Loads Google Tag Manager, which may set cookies to help us understand how visitors use
              this website. Tag Manager is not loaded, and no related cookies are set, until you accept
              this category.
            </p>
          </div>

          <div className="rounded-2xl border border-navy/10 p-5">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 className="font-bold text-navy">Embedded Maps (Google)</h3>
              <label className="relative inline-flex cursor-pointer items-center">
                <span className="sr-only">Toggle embedded Google Maps</span>
                <input
                  type="checkbox"
                  checked={mapsEnabled}
                  onChange={(event) => setMapsEnabled(event.target.checked)}
                  className="peer sr-only"
                />
                <span className="h-6 w-11 rounded-full bg-navy/15 transition peer-checked:bg-red peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-red" />
                <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
              </label>
            </div>
            <p className="text-sm leading-6 text-navy/70">
              Loads the interactive Google Map showing our location on the homepage, Areas and Contact
              pages. Google may set cookies through this embed. If switched off, a link to view our
              location on Google Maps is shown instead.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-[44px] flex-1 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-bold text-navy transition hover:border-red hover:text-red sm:flex-none"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences({ analytics: analyticsEnabled, maps: mapsEnabled })}
            className="min-h-[44px] flex-1 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-light sm:flex-none"
          >
            Save Preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-[44px] flex-1 rounded-full bg-red px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-dark sm:flex-none"
          >
            Accept All
          </button>
        </div>
        {!hasExistingConsent && (
          <p className="mt-4 text-center text-xs text-navy/50">
            You can change these choices anytime via &ldquo;Cookie Settings&rdquo; in the footer.
          </p>
        )}
      </div>
    </div>
  );
}

/** Footer "Cookie Settings" link — reopens the preferences modal on demand. */
export function CookieSettingsLink({ className }: { className?: string }) {
  const { openPreferences } = useCookieConsent();
  return (
    <button type="button" onClick={openPreferences} className={className}>
      Cookie Settings
    </button>
  );
}
