"use client";

import { useCookieConsent } from "@/components/CookieConsent";

/**
 * Google's embedded Maps iframe can set cookies from google.com, so it only
 * loads once the visitor has consented to the "Embedded Maps" category (see
 * /cookie-policy). Until then, a placeholder with a plain outbound link is
 * shown instead — that link is not an embed and sets no cookies itself.
 */
export function GoogleMapEmbed({ src, title }: { src: string; title: string }) {
  const { consent, openPreferences } = useCookieConsent();

  if (consent?.maps) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-slate-100 p-6 text-center">
      <i className="fa-solid fa-map-location-dot text-3xl text-red" aria-hidden="true"></i>
      <p className="max-w-sm text-sm leading-6 text-navy/70">
        The interactive map is an embedded Google Maps service and only loads once you accept the
        &ldquo;Embedded Maps&rdquo; cookie category.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={openPreferences}
          className="rounded-full bg-red px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-dark"
        >
          Enable Map
        </button>
        <a
          href="https://www.google.com/maps/search/?api=1&query=FSR+Recovery+Group+135+Gladstone+St+Darlington+DL3+6LB"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-navy/20 px-5 py-2.5 text-sm font-bold text-navy transition hover:border-red hover:text-red"
        >
          View on Google Maps <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
