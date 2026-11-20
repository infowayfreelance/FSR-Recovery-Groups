import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CookieSettingsLink } from "@/components/CookieConsent";
import { Logo } from "@/components/Logo";
import { QuoteForm } from "@/components/QuoteForm";
import { Eyebrow, FaqAccordion, SectionHeading } from "@/components/ServicePage";
import { business } from "@/data/business";
import { getServiceNavigation } from "@/data/services";

const title = "24/7 Breakdown Recovery, Car & Van Towing | FSR";
const description = "Call FSR for 24/7 breakdown recovery, emergency towing and roadside assistance. Get help with a car or light van, a flat battery, a puncture or an empty tank.";
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
  { lead: "Call for Recovery", text: "Call FSR or send a WhatsApp message for roadside assistance or a recovery quote." },
  { lead: "Send Your Pickup Details", text: "Give us your pickup point, the make and model, and where you want the vehicle taken if you need a tow." },
  { lead: "Confirm the Quote", text: "We check whether a roadside callout or a recovery truck is the right option and quote before you book." },
  { lead: "Get Roadside Help or a Tow", text: "We help at the roadside where possible. If you need a tow, we secure the vehicle and take it to your agreed drop-off." },
];

const marqueeItems = [
  { icon: "fa-solid fa-truck-pickup", text: "24/7 Emergency Towing" },
  { icon: "fa-solid fa-triangle-exclamation", text: "24/7 Roadside Assistance" },
  { icon: "fa-solid fa-car-battery", text: "Jumpstart Service" },
  { icon: "fa-solid fa-truck-monster", text: "Vehicle Winch-Out" },
  { icon: "fa-solid fa-car-burst", text: "Accident Recovery" },
  { icon: "fa-solid fa-gas-pump", text: "Emergency Fuel Delivery" },
  { icon: "fa-solid fa-truck-ramp-box", text: "Flatbed Vehicle Transport" },
  { icon: "fa-solid fa-bolt", text: "Light Van Recovery" },
];

const featureIcons = [
  { icon: "fa-solid fa-truck-pickup", label: "Car Recovery" },
  { icon: "fa-solid fa-car-battery", label: "Flat Jumpstart Service for Flat Batteries" },
  { icon: "fa-solid fa-truck-monster", label: "Winch-Out Recovery" },
  { icon: "fa-solid fa-car-burst", label: "Accident Towing" },
  { icon: "fa-solid fa-truck-ramp-box", label: "Vehicle Transport" },
  { icon: "fa-solid fa-clock", label: "24/7 Breakdown Help" },
];

const services = [
  {
    key: "vehicle-breakdown-recovery",
    img: "/images/service-breakdown.jpg",
    alt: "Flatbed collecting a stranded vehicle at twilight",
    title: "Breakdown Recovery for Cars and Light Vans",
    desc: "Book a recovery truck if your car or light van has broken down and cannot be driven. We can tow it to a garage, your home or another agreed drop-off.",
  },
  {
    key: "roadside-assistance",
    img: "/images/service-roadside.jpg",
    alt: "Roadside technician looking under the bonnet",
    title: "24/7 Roadside Assistance",
    desc: "Call for help with a flat battery, a puncture or an empty tank. We check what can be done on the spot and whether you need a tow.",
  },
  {
    key: "jumpstart-services",
    img: "/images/service-jumpstart.jpg",
    alt: "Jump leads connected to a vehicle battery",
    title: "Jumpstart Service for Flat Batteries",
    desc: "If your engine won’t turn over, ask for a jump start for your car or light van. If it still won’t start, we can discuss towing it to a garage.",
  },
  {
    key: "accident-emergency-assistance",
    img: "/images/service-accident.jpg",
    alt: "Recovery worker checking a car with collision damage",
    title: "Accident Recovery and Towing",
    desc: "Need a tow after a crash? Once the scene is safe, we can recover a damaged car or light van and take it to a bodyshop or another suitable drop-off.",
  },
  {
    key: "winch-out",
    img: "/images/service-winch.jpg",
    alt: "Winch line pulling a 4x4 clear of a ditch",
    title: "Winch-Out Recovery for Stuck Vehicles",
    desc: "If your car, van or 4x4 is stuck in mud, snow or a ditch, ask about winch-out recovery. We check access and ground conditions before taking on the job.",
  },
  {
    key: "vehicle-transporting",
    img: "/images/service-transport.jpg",
    alt: "Vehicle strapped down for a flatbed journey",
    title: "Flatbed Vehicle Transport and Delivery",
    desc: "Arrange flatbed transport for a car that needs moving between addresses. Send the collection point, drop-off and preferred date for a quote.",
  },
];

const additionalServices = [
  {
    key: "changing-spare-tyre",
    img: "/images/service-tyre.jpg",
    alt: "Spare wheel being fitted by a roadside technician",
    title: "Flat Tyre Help and Spare Wheel Fitting",
    desc: "If a puncture leaves you stranded, we can fit your suitable spare wheel where it’s safe to work. Call us if you need recovery instead.",
  },
  {
    key: "refueling",
    img: "/images/service-refuel.jpg",
    alt: "Roadside refuelling from a portable fuel can",
    title: "Emergency Fuel Delivery",
    desc: "Run out of petrol or diesel? Call for emergency fuel delivery and tell us which fuel your vehicle takes.",
  },
];

const landingServices = [...services, ...additionalServices];

const whyChoose = [
  { icon: "fa-solid fa-award", text: "Over 15 years spent helping drivers after breakdowns and moving vehicles." },
  { icon: "fa-solid fa-shield-halved", text: "Insurance covers the recovery while your vehicle is loaded, moved and unloaded." },
  { icon: "fa-solid fa-car-side", text: "We offer car recovery and light van recovery. Call to check if we can tow your SUV or 4x4." },
  { icon: "fa-solid fa-clock", text: "You can reach us at night, on weekends and during the working week." },
  { icon: "fa-solid fa-comments", text: "The recovery team answers calls and WhatsApp messages directly." },
  { icon: "fa-solid fa-handshake-angle", text: "Ask us if you need us to speak with your insurer or its recovery contact." },
];

const landingFaqs = [
  {
    question: "Do you offer 24/7 roadside assistance?",
    answer: "Yes. You can call day or night for a jump start, spare wheel fitting, emergency fuel delivery or breakdown towing.",
  },
  {
    question: "Can I book a towing service near me?",
    answer: "Call or WhatsApp your pickup point and vehicle details. We’ll confirm whether we can attend and quote for the tow before you book.",
  },
  {
    question: "Can your recovery truck tow my car to a garage?",
    answer: "Yes. We can discuss a suitable place to unload, such as your mechanic, a bodyshop or your driveway.",
  },
  {
    question: "Can I book accident recovery for a car I can’t drive?",
    answer: "Call us if your car will not start or has damage that makes driving unsafe. If a collision has left anyone hurt or at risk, contact emergency services before arranging a tow.",
  },
  {
    question: "Do you offer light van recovery?",
    answer: "Yes. Tell us your van’s make, model and whether it’s carrying a load. We’ll check what recovery equipment is suitable.",
  },
  {
    question: "How much does emergency towing cost?",
    answer: "The price depends on your vehicle, the towing distance and any equipment needed for recovery. Send the pickup and drop-off details for a quote.",
  },
];

export default function CarRecoveryLandingPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy shadow-md">
        <div className="container-site flex min-h-16 items-center justify-between gap-4 py-2 sm:min-h-20">
          <Logo />
          <a
            href={business.tel}
            aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-red text-sm font-bold text-white transition hover:bg-red-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-5"
          >
            <i className="fa-solid fa-phone" aria-hidden="true" />
            <span className="hidden sm:inline">{business.phoneDisplay}</span>
          </a>
        </div>
      </header>

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
                <span>24/7 Emergency Breakdown Recovery</span>
              </p>
              <h1 className="mb-4 text-3xl leading-tight font-extrabold sm:mb-6 sm:text-4xl lg:text-6xl">
                Broken Down? <span className="text-red">Get 24/7 Car Recovery</span>
              </h1>
              <p className="mb-6 text-base text-white/80 sm:mb-8 sm:text-lg">
                Call FSR for <strong className="text-white">24/7 roadside assistance</strong>, emergency
                towing or light van recovery. If a flat battery, puncture or empty tank has stopped
                your journey, ask about a jumpstart service, spare wheel fitting or emergency fuel delivery.
              </p>
              <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:gap-4">
                <a
                  href={business.tel}
                  className="btn-glow flex min-h-[52px] w-full items-center justify-center rounded-full bg-red px-6 py-4 text-center text-sm font-bold text-white transition sm:w-auto sm:px-7 sm:text-base"
                >
                  <i className="fa-solid fa-phone mr-2"></i>Call {business.phoneDisplay}
                </a>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-whatsapp px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-green-600 sm:w-auto sm:px-7 sm:text-base"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>Get a WhatsApp Quote
                </a>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-4 sm:gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">24/7</strong>
                  <span className="text-xs text-slate-300">Breakdown assistance</span>
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

            <div className="grid gap-4">
              <aside
                aria-labelledby="recovery-line-heading"
                className="rounded-2xl border border-white/20 bg-navy p-5 shadow-xl sm:p-6"
              >
                <h2 id="recovery-line-heading" className="text-lg font-bold">24/7 Recovery Line</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tell us where you&rsquo;re stopped and what you&rsquo;re driving. We&rsquo;ll confirm
                  availability and give you a price before you book.
                </p>
                <a
                  href={business.tel}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-red/50 px-4 font-bold text-white transition hover:bg-red-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <i className="fa-solid fa-phone text-red-400" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </aside>
              <QuoteForm variant="hero" landingPage />
            </div>
          </div>
        </section>

        <section className="border-y border-navy/10 bg-slate-50 py-7" aria-labelledby="urgent-recovery-heading">
          <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="urgent-recovery-heading" className="text-xl font-extrabold text-navy">
                Need a Recovery Truck Now?
              </h2>
              <p className="mt-1 text-sm leading-6 text-navy/75">
                Have your pickup point and vehicle details ready so we can check the right help for you.
              </p>
            </div>
            <a
              href={business.tel}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-red px-6 py-3 font-bold text-white transition hover:bg-red-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
            >
              <i className="fa-solid fa-phone" aria-hidden="true" />
              Call for Emergency Recovery
            </a>
          </div>
        </section>

        {/* ── Services (Dark Cards) ── */}
        <section id="services" className="bg-navy py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">Find the help you need</p>
              <h2 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl">Breakdown Recovery, Roadside Help and Transport</h2>
              <p className="text-slate-400">
                Call for car or van recovery when your vehicle can&rsquo;t be driven. For a flat battery,
                puncture or empty tank, ask what we can do at the roadside. We also take bookings for
                planned flatbed transport.
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

        {/* ── Why Choose ── */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">About our team</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Why Book Your Vehicle Recovery With FSR?</h2>
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

        {/* ── How Car Recovery Works ── */}
        <section className="bg-white py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>From call to drop-off</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">How to Arrange a Recovery Callout</h2>
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
                Emergency Towing for Cars and Light Vans
              </h2>
              <p className="mb-6 leading-8 text-navy/70">
                A mechanical fault, overheating or a failed clutch can leave your vehicle unsafe to
                drive. Our car recovery and light van recovery service can get it to your chosen
                garage, repair centre or other agreed drop-off.
              </p>
              <p className="mb-6 leading-8 text-navy/70">
                Engine trouble, an electrical fault or a failed clutch can leave you stuck. Ask about{" "}
                <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                  breakdown towing
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
                  flatbed vehicle transport
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

        {/* ── Safety: What to Do While You Wait ── */}
        <section className="bg-white py-20">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-10 text-center">
              <Eyebrow>Before we arrive</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">Waiting for Roadside Assistance or a Tow</h2>
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
            <SectionHeading eyebrow="Before you book" title="Car Recovery and Towing FAQs" />
            <FaqAccordion faqs={landingFaqs} />
          </div>
        </section>

        {/* ── CTA Parallax ── */}
        <section className="cta-parallax-bg py-24 text-center text-white">
          <div className="container-site fade-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-red/40 bg-red/20 px-5 py-2 text-sm font-bold text-red">
              <i className="fa-solid fa-triangle-exclamation"></i> Urgent recovery enquiries
            </p>
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need an Emergency Tow or Van Recovery?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Call or WhatsApp with your vehicle details and pickup point. We&rsquo;ll confirm
              availability and quote for roadside assistance, breakdown recovery or a tow.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={business.tel} className="btn-glow rounded-full bg-red px-8 py-4 font-bold text-white transition">
                <i className="fa-solid fa-phone mr-2"></i>Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Get a WhatsApp Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-navy py-8 text-sm text-slate-300 sm:py-10">
        <div className="container-site flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-3">
            <Logo size="sm" priority={false} />
            <p>24/7 car and van recovery, roadside assistance and towing.</p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <p>© {new Date().getFullYear()} {business.name}</p>
            <CookieSettingsLink className="text-slate-300 underline underline-offset-4 transition hover:text-white" />
          </div>
        </div>
      </footer>
    </>
  );
}
