import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { business } from "@/data/business";
import { cityAreas, roadAreas } from "@/data/areas";

export const metadata: Metadata = {
  title: { absolute: "Explore Our Vehicle Recovery Service Areas Today" },
  description: "Get quick and efficient vehicle recovery services nearby. Reach out to us and get back on the road!",
  alternates: { canonical: "/areas" },
};

const faqs = [
  {
    q: "Do you cover motorways?",
    a: "Yes. We assist drivers broken down on motorways and major routes across the region. Safety is our priority when responding to motorway breakdowns.",
  },
  {
    q: "Can you travel further afield?",
    a: "For long-distance vehicle transport, yes. We can discuss planned moves or transfers further afield. Call us with the details and we will confirm availability and cost.",
  },
  {
    q: "What if I am not sure whether you cover my area?",
    a: "Call or WhatsApp us with your location and vehicle details. We will confirm whether assistance is available for your location and circumstances.",
  },
  {
    q: "Do you charge more for areas further away?",
    a: "Distance is factored into pricing. Once we know your pickup location and destination we will give you a clear quote before proceeding.",
  },
];

const GBP_MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.266181975819!2d-1.5612949233137332!3d54.528801885596664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeed77f7b9c8a489%3A0x3af9f4efbabca787!2sFSR%20Recovery%20Group!5e0!3m2!1sen!2s!4v1784967444093!5m2!1sen!2s";

export default function AreasPage() {
  return (
    <>
      <Header activePath="/areas" />

      <main>
        {/* Page Banner */}
        <section className="hero-bg text-white">
          <div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-map-location-dot flex-shrink-0"></i> Areas Covered
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">
              Recovery Areas from Our Darlington Base
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Explore our car recovery, breakdown recovery, vehicle recovery and roadside assistance coverage across nearby cities, towns and main roads.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a href={business.tel} className="btn-glow rounded-full bg-red px-5 py-3.5 text-center text-sm font-bold text-white transition sm:px-7 sm:py-4 sm:text-base">
                <i className="fa-solid fa-phone mr-2"></i>Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-green-600 sm:px-7 sm:py-4 sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Cities & Towns / Main Roads */}
        <section className="bg-white py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red">Dedicated Local Pages</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Find Recovery Near You</h2>
              <p className="text-navy/70">
                Explore dedicated recovery pages for the cities, towns and main roads we cover most often.
              </p>
            </div>

            <div className="mb-14">
              <h3 className="fade-up mb-6 flex items-center gap-3 text-xl font-bold text-navy">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red/10 text-red"><i className="fa-solid fa-city" /></span>
                Cities &amp; Towns
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cityAreas.map((area) => (
                  <Link
                    key={area.key}
                    href={area.href}
                    className="fade-up flex items-center justify-between rounded-2xl border border-navy/10 bg-slate-50 px-6 py-4 font-bold text-navy transition hover:-translate-y-0.5 hover:border-red/40 hover:bg-white hover:shadow-md"
                  >
                    <span><i className="fa-solid fa-location-dot mr-3 text-red" />{area.label}</span>
                    <i className="fa-solid fa-arrow-right text-red" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="fade-up mb-6 flex items-center gap-3 text-xl font-bold text-navy">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red/10 text-red"><i className="fa-solid fa-road" /></span>
                Main Roads
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {roadAreas.map((area) => (
                  <Link
                    key={area.key}
                    href={area.href}
                    className="fade-up flex items-center justify-between rounded-2xl border border-navy/10 bg-slate-50 px-6 py-4 font-bold text-navy transition hover:-translate-y-0.5 hover:border-red/40 hover:bg-white hover:shadow-md"
                  >
                    <span><i className="fa-solid fa-road mr-3 text-red" />{area.label}</span>
                    <i className="fa-solid fa-arrow-right text-red" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Knowledge CTA */}
        <section className="bg-navy py-20 text-white">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div className="fade-up">
              <p className="mb-3 font-bold text-red">Local Knowledge</p>
              <h2 className="mb-5 text-3xl font-extrabold lg:text-4xl">
                We Know the Roads
              </h2>
              <p className="mb-6 leading-8 text-white/70">
                Our fleet knows the quickest routes, the busiest junctions and the best approach for every
                type of job — whether you are stuck on a motorway or on a back road out of town.
              </p>
              <ul className="space-y-4">
                {[
                  "Fast response across city centres and suburbs",
                  "Motorway breakdown support around the clock",
                  "Rural and off-road recovery available",
                  "Long-distance transport by arrangement",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/85">
                    <i className="fa-solid fa-circle-check mt-1 flex-shrink-0 text-red"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={business.tel} className="btn-glow rounded-full bg-red px-7 py-4 text-center font-bold text-white transition">
                  <i className="fa-solid fa-phone mr-2"></i>Call Now
                </a>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-whatsapp px-7 py-4 text-center font-bold text-white transition hover:bg-green-600"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
                </a>
              </div>
            </div>
            <div className="fade-up">
              <Image
                src="/images/gallery-3.jpg"
                alt="FSR Recovery vehicle attending an incident"
                width={2000}
                height={1333}
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-slate-50 py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-8 max-w-2xl text-center">
              <p className="mb-3 font-bold text-red">Find Us</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">{business.name} Location</h2>
            </div>
            <div className="fade-up w-full overflow-hidden rounded-3xl border border-navy/10 shadow-2xl" style={{ height: "420px" }}>
              <GoogleMapEmbed src={GBP_MAP_SRC} title={`${business.name} Location`} />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-12 text-center">
              <p className="mb-3 font-bold text-red">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">Coverage Questions</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="fade-up rounded-2xl border border-navy/10 p-6">
                  <h3 className="mb-2 flex items-start gap-2 font-bold text-navy">
                    <i className="fa-solid fa-circle-question mt-1 flex-shrink-0 text-red"></i>
                    {faq.q}
                  </h3>
                  <p className="pl-7 text-navy/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red py-20 text-center text-white">
          <div className="container-site fade-up">
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Not Sure If We Cover You?</h2>
            <p className="mb-8 text-lg text-white/90">
              Call or send a WhatsApp with your location and vehicle details so we can confirm whether assistance is available.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={business.tel} className="rounded-full bg-navy px-8 py-4 font-bold text-white transition hover:bg-navy-light">
                <i className="fa-solid fa-phone mr-2"></i>Call Now
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
