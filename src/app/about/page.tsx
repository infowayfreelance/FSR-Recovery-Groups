import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: { absolute: "FSR Recovery Group: Expert Guidance for Your Needs" },
  description: "Experience effective recovery strategies with FSR Recovery Group. Join us and change your future now!",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Fully Insured",
    desc: "Every vehicle we handle is covered throughout the entire recovery process — from loading to final drop-off.",
  },
  {
    icon: "fa-solid fa-clock",
    title: "Prompt Response",
    desc: "We treat every call as urgent. Our team moves quickly to reach you and get the situation under control.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Honest Communication",
    desc: "No hidden costs, no confusing jargon. We tell you what we can do, what it costs, and what to expect.",
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Regional Knowledge",
    desc: "Our fleet knows the roads across the region and can plan the quickest, safest route to you.",
  },
  {
    icon: "fa-solid fa-car-side",
    title: "Careful Handling",
    desc: "We take the same care with your vehicle as we would with our own — proper strapping, secure loading and smooth transport.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Always Reachable",
    desc: "Call or WhatsApp us any time. If we are already on a job we will respond as soon as we are free.",
  },
];

const areas = [
  "Motorway Recovery",
  "City Centre",
  "Residential Areas",
  "Rural & Off-Road",
  "Industrial Estates",
  "Retail Parks",
  "Long Distance",
  "Out-of-Hours",
];

const faqs = [
  {
    q: "How long have you been operating?",
    a: "FSR Recovery Group has been providing roadside and recovery services for over 15 years. Our reputation is built on consistent, careful service.",
  },
  {
    q: "What vehicles can you recover?",
    a: "We recover cars, light vans, 4x4s and SUVs. If you are unsure whether we can handle your specific vehicle, give us a call and we will let you know.",
  },
  {
    q: "Do you work with insurance companies?",
    a: "Yes. We can liaise with your insurer or their recovery coordinator on request. Many customers contact us directly for a faster response, then inform their insurer afterwards.",
  },
  {
    q: "Can you give me a price over the phone?",
    a: "We can give you a clear idea of cost once we know your vehicle type, location and destination. Call or WhatsApp us with the details for an accurate quote.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header activePath="/about" />

      <main>
        {/* Page Banner */}
        <section className="relative isolate overflow-hidden text-white">
          <Image
            src="/images/service-roadside.webp"
            alt="Technician checking a car engine roadside in the rain"
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(90deg, rgba(11, 34, 65, 0.95), rgba(11, 34, 65, 0.8))" }}
          />
          <div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-users flex-shrink-0"></i> About Us
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">
              Built On the Roadside, Not in a Boardroom
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              A straightforward, professional recovery service run by people who care about getting you back on the road safely.
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

        {/* Who We Are */}
        <section className="bg-white py-20">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div className="fade-up">
              <p className="mb-3 font-bold text-red-dark">Our Story</p>
              <h2 className="mb-5 text-3xl font-extrabold text-navy lg:text-4xl">
                A Recovery Team You Can Rely On
              </h2>
              <p className="mb-4 leading-8 text-navy/70">
                FSR Recovery Group started with a single truck and a simple promise: turn up fast, treat
                every vehicle like our own, and never leave a customer stranded. Fifteen years later, that
                promise hasn&rsquo;t changed, even as we&rsquo;ve grown into a full regional recovery operation.
              </p>
              <p className="mb-4 leading-8 text-navy/70">
                Today our team handles everything from routine roadside callouts to complex accident
                recoveries, working with private drivers, fleet operators, and insurance partners across
                the region. We&rsquo;ve invested in a modern fleet and ongoing training so that whatever
                the job, it&rsquo;s handled properly the first time. See our full{" "}
                <Link href="/services" className="font-semibold text-red">range of recovery services</Link>{" "}
                to find the right option for your situation.
              </p>
              <p className="leading-8 text-navy/70">
                We are fully insured, always reachable, and available to take calls when you need us. No
                call centres, no automated responses — just a team that answers and gets on with it.
              </p>
            </div>
            <div className="fade-up">
              <Image
                src="/images/service-transport.jpg"
                alt="FSR Recovery Group vehicle transporter on the highway"
                width={1735}
                height={1080}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">What Drives Us</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Our Values</h2>
              <p className="text-navy/70">The principles we apply to every job, regardless of size or complexity.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="fade-up rounded-3xl border border-navy/10 bg-white p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red/10">
                    <i className={`${v.icon} text-xl text-red`}></i>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">{v.title}</h3>
                  <p className="text-sm leading-7 text-navy/70">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-navy py-20 text-white">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div className="fade-up">
              <p className="mb-3 font-bold text-red-dark">Why Drivers Choose Us</p>
              <h2 className="mb-5 text-3xl font-extrabold lg:text-4xl">
                Trusted, Straightforward and Fast
              </h2>
              <p className="mb-6 leading-8 text-white/70">
                We know that a breakdown or accident is already stressful. Our job is to take as much
                pressure off you as possible — by responding quickly, communicating clearly and handling
                your vehicle with care.
              </p>
              <ul className="space-y-4">
                {[
                  "Direct contact with our local team — no call centres",
                  "Clear pricing with no hidden extras",
                  "Fully insured loading, transport and drop-off",
                  "Coverage across the whole region",
                  "4x4 and long-distance transport available",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/85">
                    <i className="fa-solid fa-circle-check mt-1 flex-shrink-0 text-red"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up">
              <Image
                src="/images/gallery-2.jpg"
                alt="FSR Recovery technician winching a vehicle free"
                width={2000}
                height={1333}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="bg-white py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">Where We Operate</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Areas We Cover</h2>
              <p className="text-navy/70">
                We regularly assist drivers across the following situations and locations. Not sure if we
                cover your location? Just call us.
              </p>
            </div>
            <div className="fade-up flex flex-wrap justify-center gap-4">
              {areas.map((area) => (
                <div key={area} className="rounded-2xl border border-navy/10 bg-slate-50 px-6 py-4 text-center">
                  <i className="fa-solid fa-location-dot mb-2 block text-red"></i>
                  <span className="font-semibold text-navy">{area}</span>
                </div>
              ))}
            </div>
            <div className="fade-up mt-8 text-center">
              <Link href="/areas" className="inline-block font-bold text-red">
                See our full coverage area <i className="fa-solid fa-arrow-right ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 py-20">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-12 text-center">
              <p className="mb-3 font-bold text-red-dark">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">About {business.name}</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="fade-up rounded-2xl border border-navy/10 bg-white p-6">
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
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need Recovery Assistance?</h2>
            <p className="mb-8 text-lg text-white/90">
              Call or WhatsApp us and our team will be with you as quickly as possible.
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
