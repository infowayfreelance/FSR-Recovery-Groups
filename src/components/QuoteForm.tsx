"use client";

import { useId, useRef, useState } from "react";
import { business } from "@/data/business";

type QuoteFormProps = {
  variant?: "hero" | "light";
};

export function QuoteForm({ variant = "light" }: QuoteFormProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const vehicleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState(false);

  const uid = useId();
  const serviceId = `${uid}-service`;
  const nameId = `${uid}-name`;
  const vehicleId = `${uid}-vehicle`;
  const locationId = `${uid}-location`;
  const destinationId = `${uid}-destination`;
  const messageId = `${uid}-message`;
  const locationErrorId = `${uid}-location-error`;

  const handleSendWhatsApp = () => {
    const name = nameRef.current?.value.trim() ?? "";
    const service = serviceRef.current?.value ?? "";
    const vehicle = vehicleRef.current?.value.trim() ?? "";
    const location = locationRef.current?.value.trim() ?? "";
    const destination = destinationRef.current?.value.trim() ?? "";
    const message = messageRef.current?.value.trim() ?? "";

    if (!location) {
      setError(true);
      locationRef.current?.focus();
      return;
    }
    setError(false);

    let text = `Hello ${business.name},\n\nI would like a quotation for the following:\n`;
    if (service) text += `Service: ${service}\n`;
    if (name) text += `Name: ${name}\n`;
    if (vehicle) text += `Vehicle: ${vehicle}\n`;
    text += `Location: ${location}\n`;
    if (destination) text += `Destination: ${destination}\n`;
    if (message) text += `\nAdditional details: ${message}`;
    text += "\n\nPlease send me a quote at your earliest convenience.";

    window.open(`${business.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const isHero = variant === "hero";
  const fieldClass = isHero
    ? "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-red"
    : "w-full rounded-xl border border-navy/15 bg-navy/[0.03] px-4 py-3 text-navy outline-none placeholder:text-navy/40 focus:border-red";
  const labelClass = isHero
    ? "mb-1.5 block text-xs font-semibold text-white/80"
    : "mb-1.5 block text-xs font-semibold text-navy/70";

  return (
    <div className={isHero ? "hero-form-card fade-up p-5 text-white shadow-2xl sm:p-6" : ""}>
      {isHero && (
        <>
          <h3 className="mb-1 text-2xl font-bold">Get a Free Quote</h3>
          <p className="mb-5 text-sm text-white/70">Tell us your situation and we&rsquo;ll respond fast.</p>
        </>
      )}
      <div className="grid gap-4">
        <div>
          <label htmlFor={serviceId} className={labelClass}>
            Service required
          </label>
          <select
            id={serviceId}
            ref={serviceRef}
            defaultValue=""
            className={fieldClass + " appearance-none"}
            style={isHero ? ({ colorScheme: "dark" } as React.CSSProperties) : undefined}
          >
            <option value="" disabled={isHero} style={isHero ? { color: "#0b2241", background: "#ffffff" } : undefined}>
              Service required
            </option>
            {[
              "Vehicle Breakdown Recovery",
              "Roadside Assistance",
              "Jumpstart Services",
              "Winch Out",
              "Accident Emergency Assistance",
              "Changing Spare Tyre",
              "Refueling",
              "Vehicle Transporting",
              "Other",
            ].map((s) => (
              <option key={s} style={isHero ? { color: "#0b2241", background: "#ffffff" } : undefined}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={nameId} className={labelClass}>
            Your name <span className="font-normal opacity-70">(optional)</span>
          </label>
          <input id={nameId} ref={nameRef} type="text" placeholder="Your name" className={fieldClass} />
        </div>

        <div>
          <label htmlFor={vehicleId} className={labelClass}>
            Vehicle make / model <span className="font-normal opacity-70">(optional)</span>
          </label>
          <input id={vehicleId} ref={vehicleRef} type="text" placeholder="e.g. Ford Focus" className={fieldClass} />
        </div>

        <div>
          <label htmlFor={locationId} className={labelClass}>
            Current location
          </label>
          <input
            id={locationId}
            ref={locationRef}
            type="text"
            placeholder="Your current location"
            required
            aria-required="true"
            aria-invalid={error}
            aria-describedby={error ? locationErrorId : undefined}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={destinationId} className={labelClass}>
            Destination <span className="font-normal opacity-70">(optional)</span>
          </label>
          <input id={destinationId} ref={destinationRef} type="text" placeholder="Where the vehicle needs to go" className={fieldClass} />
        </div>

        <div>
          <label htmlFor={messageId} className={labelClass}>
            Additional details <span className="font-normal opacity-70">(optional)</span>
          </label>
          <textarea
            id={messageId}
            ref={messageRef}
            rows={3}
            placeholder="Any additional details..."
            className={fieldClass + " resize-none"}
          />
        </div>

        <button
          type="button"
          onClick={handleSendWhatsApp}
          className="btn-glow rounded-xl bg-red px-5 py-4 font-bold text-white transition hover:bg-red-dark"
        >
          <i className="fa-brands fa-whatsapp mr-2" aria-hidden="true"></i>Get Quote on WhatsApp
        </button>
        <p className={isHero ? "text-center text-xs text-white/60" : "text-center text-xs text-navy/50"}>
          Opens WhatsApp with your details filled in — you&rsquo;ll need to send the message there to reach us.
        </p>
        {error && (
          <p id={locationErrorId} role="alert" className="text-center text-sm text-red">
            Please enter your location so we can provide an accurate quote.
          </p>
        )}
      </div>
      {isHero && (
        <p className="mt-4 text-center text-xs text-white/60">
          Or call us directly:{" "}
          <a href={business.tel} className="font-bold text-red transition hover:text-white">
            {business.phoneDisplay}
          </a>
        </p>
      )}
    </div>
  );
}
