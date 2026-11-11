import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Eyebrow, FaqAccordion, SectionHeading } from "@/components/ServicePage";
import { business } from "@/data/business";
import { getServiceNavigation } from "@/data/services";

const title = "Need a Tow? 24/7 Breakdown Recovery | FSR";
const description = "Speak to FSR about a breakdown, a flat battery or a vehicle that needs moving. Ask for a quote by phone or WhatsApp, day or night.";
const path = "/24-7-car-recovery";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: false, follow: true },
  openGraph: {
    title,
    description,
    url: path,
    type: "website",
    siteName: business.name,
    images: [
      {
        url: "/images/fsr-open-graph.png",
        width: 902,
        height: 472,
        alt: "FSR Recovery Group breakdown and towing team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/fsr-open-graph.png"],
  },
};

const howItWorks = [
  { lead: "Get hold of the team", text: "Call or start a WhatsApp chat so we can hear what you need." },
  { lead: "Describe the job", text: "Send the pickup point, vehicle details and preferred drop-off if you have one." },
  { lead: "Agree on the next step", text: "We explain what we can do and discuss the cost before you decide." },
  { lead: "Hand over the vehicle", text: "If a tow is needed, we secure the vehicle for the trip and unload it at the agreed stop." },
];

const marqueeItems = [
  { icon: "fa-solid fa-truck-pickup", text: "Day and Night Towing" },
  { icon: "fa-solid fa-triangle-exclamation", text: "Help Where You Stop" },
  { icon: "fa-solid fa-car-battery", text: "Flat Battery Help" },
  { icon: "fa-solid fa-truck-monster", text: "Stuck Vehicle Recovery" },
  { icon: "fa-solid fa-car-burst", text: "Towing After a Crash" },
  { icon: "fa-solid fa-gas-pump", text: "Emergency Fuel Delivery" },
  { icon: "fa-solid fa-truck-ramp-box", text: "Booked Vehicle Moves" },
  { icon: "fa-solid fa-bolt", text: "Speak to the Team" },
];

const featureIcons = [
  { icon: "fa-solid fa-truck-pickup", label: "Breakdown Towing" },
  { icon: "fa-solid fa-car-battery", label: "Battery Boosts" },
  { icon: "fa-solid fa-truck-monster", label: "Winch Assistance" },
  { icon: "fa-solid fa-car-burst", label: "Post-Collision Towing" },
  { icon: "fa-solid fa-truck-ramp-box", label: "Scheduled Transport" },
  { icon: "fa-solid fa-clock", label: "Day or Night Help" },
];

const services = [
  {
    key: "vehicle-breakdown-recovery",
    img: "/images/service-breakdown.jpg",
    alt: "Flatbed collecting a stranded vehicle at twilight",
    title: "Breakdown Towing, Day or Night",
    desc: "If your car or light van has stopped working, we can collect it and tow it to a garage or another agreed stop.",
  },
  {
    key: "roadside-assistance",
    img: "/images/service-roadside.jpg",
    alt: "Roadside technician looking under the bonnet",
    title: "On-the-Spot Roadside Help",
    desc: "Tell us what stopped your journey. We can check whether the problem can be dealt with where you stopped.",
  },
  {
    key: "jumpstart-services",
    img: "/images/service-jumpstart.jpg",
    alt: "Jump leads connected to a vehicle battery",
    title: "Battery Jump Starts",
    desc: "If the battery is flat, we can try a jump start on a suitable vehicle and discuss recovery if it still will not start.",
  },
  {
    key: "accident-emergency-assistance",
    img: "/images/service-accident.jpg",
    alt: "Recovery worker checking a car with collision damage",
    title: "Recovery After a Collision",
    desc: "Once the scene is safe, we can collect your damaged vehicle and take it to a repairer or another suitable drop-off.",
  },
  {
    key: "winch-out",
    img: "/images/service-winch.jpg",
    alt: "Winch line pulling a 4x4 clear of a ditch",
    title: "Winching for Stuck Vehicles",
    desc: "Stuck off the road? We check access and the ground before deciding whether we can winch the vehicle free.",
  },
  {
    key: "vehicle-transporting",
    img: "/images/service-transport.jpg",
    alt: "Vehicle strapped down for a flatbed journey",
    title: "Scheduled Vehicle Transport",
    desc: "Moving a car on a planned date? Give us both addresses and we can discuss a flatbed collection and delivery.",
  },
];

const additionalServices = [
  {
    key: "changing-spare-tyre",
    img: "/images/service-tyre.jpg",
    alt: "Spare wheel being fitted by a roadside technician",
    title: "Roadside Spare Wheel Fitting",
    desc: "If a puncture stops you and you have a usable spare wheel, we can fit it when there is a safe place to work.",
  },
  {
    key: "refueling",
    img: "/images/service-refuel.jpg",
    alt: "Roadside refuelling from a portable fuel can",
    title: "Emergency Fuel Delivery",
    desc: "If the tank is empty, tell us which fuel your vehicle takes so we can discuss bringing some to you.",
  },
];

const landingServices = [...services, ...additionalServices];

const whyChoose = [
  { icon: "fa-solid fa-award", text: "Over 15 years spent helping drivers after breakdowns and moving vehicles." },
  { icon: "fa-solid fa-shield-halved", text: "Insurance covers the recovery while your vehicle is loaded, moved and unloaded." },
  { icon: "fa-solid fa-car-side", text: "We can discuss recovery for your car, light van, SUV or 4x4." },
  { icon: "fa-solid fa-clock", text: "You can reach us at night, on weekends and during the working week." },
  { icon: "fa-solid fa-comments", text: "The recovery team answers calls and WhatsApp messages directly." },
  { icon: "fa-solid fa-handshake-angle", text: "Ask us if you need us to speak with your insurer or its recovery contact." },
];

const landingFaqs = [
  {
    question: "Can I call in the middle of the night?",
    answer: "Yes. The team takes calls and WhatsApp enquiries at any hour.",
  },
  {
    question: "What helps you quote over the phone?",
    answer: "Have your pickup point, make and model, and a short description of the fault ready. Give us a drop-off if you have chosen one.",
  },
  {
    question: "Can I choose where the tow ends?",
    answer: "Yes. We can discuss a suitable place to unload, such as your mechanic, a bodyshop or your driveway.",
  },
  {
    question: "Can you collect a car that cannot be driven?",
    answer: "Call us if your car will not start or has damage that makes driving unsafe. If a collision has left anyone hurt or at risk, contact emergency services before arranging a tow.",
  },
  {
    question: "Can I book recovery for a van or a 4x4?",
    answer: "We handle suitable light vans and 4x4s as well as cars and SUVs. Share the model so we can check what equipment the job needs.",
  },
  {
    question: "What affects the price of a tow?",
    answer: "The quote depends on the vehicle, the journey and the equipment needed. We can talk through the price once we have the job details.",
  },
];

export default function CarRecoveryLandingPage() {
  return (
    <>
      <Header
        activePath={path}
        showAreas={false}
        announcement="Day or night, speak to FSR about a breakdown or a tow."
      />

      <main>
        {/* ── Hero ── */}
        <section className="relative isolate overflow-hidden text-white">
          <Image
            src="/images/home-hero.jpg"
            alt="Recovery flatbed ready to collect a stranded car at dusk"
            fill
            preload
            fetchPriority="high"
            quality={65}
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(90deg, rgba(11, 34, 65, 0.95), rgba(11, 34, 65, 0.8))" }}
          />
          <div className="container-site grid items-start gap-8 py-10 sm:py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:py-28">
            <div className="fade-up">
              <p className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/30 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:px-4 sm:py-2 sm:text-sm">
                <i className="fa-solid fa-bolt flex-shrink-0"></i>
                <span>Speak to a recovery operator now</span>
              </p>
              <h1 className="mb-4 text-3xl leading-tight font-extrabold sm:mb-6 sm:text-4xl lg:text-6xl">
                Broken down? <span className="text-red">Get 24/7 car recovery</span>
              </h1>
              <p className="mb-6 text-base text-white/80 sm:mb-8 sm:text-lg">
                If your car has stopped or is unsafe to drive, speak to the team at {business.name}.
                Share the pickup point and tell us what went wrong. We&rsquo;ll check what help is
                available and explain the cost before you book.
              </p>
              <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:gap-4">
                <a
                  href={business.tel}
                  className="btn-glow flex min-h-[52px] w-full items-center justify-center rounded-full bg-red px-6 py-4 text-center text-sm font-bold text-white transition sm:w-auto sm:px-7 sm:text-base"
                >
                  <i className="fa-solid fa-phone mr-2"></i>Phone {business.phoneDisplay}
                </a>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-whatsapp px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-green-600 sm:w-auto sm:px-7 sm:text-base"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>Chat on WhatsApp
                </a>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-4 sm:gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">24/7</strong>
                  <span className="text-xs text-slate-300">Phone support</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">Direct</strong>
                  <span className="text-xs text-slate-300">Team contact</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">15+</strong>
                  <span className="text-xs text-slate-300">Years in recovery</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">Insured</strong>
                  <span className="text-xs text-slate-300">Vehicle handling</span>
                </div>
              </div>
            </div>

            <QuoteForm variant="hero" landingPage />
          </div>
        </section>

        {/* ── Marquee ── */}
        <section className="marquee-container py-5">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 text-sm font-semibold text-slate-200">
                <i className={`${item.icon} text-red`}></i>
                {item.text}
                <span className="mx-2 text-red">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ── Feature Icons Row ── */}
        <section className="bg-navy py-14">
          <div className="container-site">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {featureIcons.map((item) => (
                <div key={item.label} className="feature-icon-card fade-up">
                  <i className={`${item.icon} mb-3 text-3xl text-red`}></i>
                  <p className="text-sm font-semibold text-slate-200">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="bg-white py-20">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div className="fade-up order-2 lg:order-1">
              <Image
                src="/images/home-transport-2.jpg"
                alt="A vehicle on the FSR flatbed with its wheels secured"
                width={1200}
                height={900}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="min-h-[360px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
            <div className="fade-up order-1 lg:order-2">
              <p className="mb-3 font-bold text-red-dark">Over 15 years in vehicle recovery</p>
              <h2 className="mb-5 text-3xl font-extrabold text-navy lg:text-4xl">
                When your vehicle can&rsquo;t go any further
              </h2>
              <p className="mb-6 leading-8 text-navy/70">
                If the vehicle needs a tow, let us know where it can be picked up and where you want it
                taken. We load and secure suitable cars and light vans on a recovery truck for the trip
                to a garage, repair centre or other agreed stop.
              </p>
              <p className="mb-6 leading-8 text-navy/70">
                Engine trouble, an electrical fault or a failed clutch can leave you stuck. Ask about{" "}
                <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                  towing after a breakdown
                </Link>{" "}
                or help after a collision. For a car stuck in mud or a ditch, we can check whether{" "}
                <Link href="/services/winch-out" className="font-semibold text-red hover:underline">
                  winching
                </Link>{" "}
                is possible.
              </p>
              <p className="mb-8 leading-8 text-navy/70">
                For a move you can book ahead, our{" "}
                <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">
                  scheduled transport service
                </Link>{" "}
                can take a car from one agreed address to another.
              </p>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy/10 p-5">
                  <i className="fa-solid fa-shield-halved mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Insured Vehicle Handling</h3>
                  <p className="mt-1 text-sm text-navy/70">Our recovery insurance covers handling from pickup through to unloading.</p>
                </div>
                <div className="rounded-2xl border border-navy/10 p-5">
                  <i className="fa-solid fa-clipboard-list mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Price Before You Book</h3>
                  <p className="mt-1 text-sm text-navy/70">Ask for a quote so you know what the job involves and what it will cost.</p>
                </div>
                <div className="rounded-2xl border border-navy/10 p-5">
                  <i className="fa-solid fa-clock mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Round-the-Clock Help</h3>
                  <p className="mt-1 text-sm text-navy/70">Reach us outside garage hours when your vehicle needs urgent attention.</p>
                </div>
                <div className="rounded-2xl border border-navy/10 p-5">
                  <i className="fa-solid fa-comments mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Updates From the Team</h3>
                  <p className="mt-1 text-sm text-navy/70">We tell you what to expect as your recovery moves ahead.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={business.tel} className="rounded-full bg-navy px-7 py-4 text-center font-bold text-white transition hover:bg-navy-light">
                  <i className="fa-solid fa-phone mr-2"></i>Speak to FSR
                </a>
                <a href="/about" className="rounded-full border-2 border-navy px-7 py-4 text-center font-bold text-navy transition hover:bg-navy hover:text-white">
                  Meet the Recovery Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services (Dark Cards) ── */}
        <section id="services" className="bg-navy py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">Find the help you need</p>
              <h2 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl">Roadside Help, Towing and Transport</h2>
              <p className="text-slate-400">
                Need a battery boost, a tow or a vehicle moved on a set date? Choose the service that fits
                your situation and contact us for a quote.
              </p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {landingServices.map((service) => {
                const href = getServiceNavigation(service.key).href;
                return (
                  <article key={service.title} className="dark-service-card fade-up flex flex-col">
                    <Link href={href}>
                      <Image
                        src={service.img}
                        alt={service.alt}
                        width={900}
                        height={600}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="h-52 w-full rounded-t-3xl object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-white">
                        <Link href={href} className="transition hover:text-red">{service.title}</Link>
                      </h3>
                      <p className="mb-4 flex-1 text-slate-400">{service.desc}</p>
                      <Link href={href} className="mb-5 inline-block text-sm font-bold text-red transition hover:text-red-dark">
                        Service Details <i className="fa-solid fa-arrow-right ml-1" />
                      </Link>
                      <div className="mt-auto flex gap-3">
                        <a
                          href={business.tel}
                          className="flex-1 rounded-full bg-red px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-red-dark"
                        >
                          <i className="fa-solid fa-phone mr-1.5"></i>Call FSR
                        </a>
                        <a
                          href={business.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-full bg-whatsapp px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-green-600"
                        >
                          <i className="fa-brands fa-whatsapp mr-1.5"></i>Message Us
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="fade-up mt-10 text-center">
              <a href="/services" className="inline-block rounded-full border-2 border-red px-8 py-4 font-bold text-red transition hover:bg-red hover:text-white">
                Browse Every Service <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ── How Car Recovery Works ── */}
        <section className="bg-white py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>From call to drop-off</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">What Happens After You Get in Touch?</h2>
            </div>
            <ol className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, i) => (
                <li key={step.lead} className="fade-up relative rounded-3xl border border-navy/10 bg-slate-50 p-7">
                  <span className="absolute top-5 right-6 text-3xl font-extrabold text-navy/10">{i + 1}</span>
                  <h3 className="mb-2 text-xl font-bold text-navy">{step.lead}</h3>
                  <p className="leading-7 text-navy/70">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="fade-up mx-auto mt-10 max-w-2xl text-center leading-7 text-navy/70">
              You can call even if you&rsquo;re unsure what the car needs. Describe what you noticed and
              we&rsquo;ll explain the options we can offer.
            </p>
          </div>
        </section>

        {/* ── Why Choose ── */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">About our team</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">What You Can Expect From FSR</h2>
            </div>
            <div className="grid gap-7 md:grid-cols-3">
              {whyChoose.map((item) => (
                <div key={item.text} className="fade-up rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5">
                    <i className={`${item.icon} text-3xl text-red`}></i>
                  </div>
                  <p className="text-navy/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Safety: What to Do While You Wait ── */}
        <section className="bg-white py-20">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-10 text-center">
              <Eyebrow>Before we arrive</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">While You Wait for the Recovery Truck</h2>
            </div>
            <div className="fade-up space-y-4 leading-7 text-navy/70">
              <p>Call emergency services before arranging recovery if anyone is hurt or still at risk.</p>
              <p>Once you&rsquo;re safe, share where the vehicle is stopped and mention anything that could make it hard to reach.</p>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Before you book" title="Questions About Arranging a Tow" />
            <FaqAccordion faqs={landingFaqs} />
          </div>
        </section>

        {/* ── CTA Parallax ── */}
        <section className="cta-parallax-bg py-24 text-center text-white">
          <div className="container-site fade-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-red/40 bg-red/20 px-5 py-2 text-sm font-bold text-red">
              <i className="fa-solid fa-triangle-exclamation"></i> Talk to the team directly
            </p>
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Let&rsquo;s Get Your Recovery Arranged</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Send your vehicle details and pickup point, or speak to the team if you need urgent help.
              We&rsquo;ll confirm what we can do and explain how to book.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={business.tel} className="btn-glow rounded-full bg-red px-8 py-4 font-bold text-white transition">
                <i className="fa-solid fa-phone mr-2"></i>Phone {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer showLocation={false} />
    </>
  );
}
