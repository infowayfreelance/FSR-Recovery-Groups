import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Eyebrow, FaqAccordion, SectionHeading } from "@/components/ServicePage";
import { business } from "@/data/business";
import { getServiceNavigation } from "@/data/services";

const title = "24/7 Car Recovery, Breakdown & Towing | FSR";
const description = "Broken down, unable to start or need a tow? Call FSR Recovery Group for 24/7 roadside help and recovery for cars and light vans.";
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
        alt: "FSR Recovery Group | 24/7 Emergency Recovery Services",
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
  { lead: "Call or message us.", text: "Phone +44 7888 502989 or use WhatsApp. You speak directly to our recovery team." },
  { lead: "Share your details.", text: "Give us your location, the car's make and model, what has happened and where you'd like it taken." },
  { lead: "We arrange recovery.", text: "We confirm the right response for your car, location and situation." },
  { lead: "Safe drop-off.", text: "We load and secure your car, then take it to the agreed destination." },
];

const marqueeItems = [
  { icon: "fa-solid fa-truck-pickup", text: "24/7 Breakdown Recovery" },
  { icon: "fa-solid fa-triangle-exclamation", text: "Roadside Assistance" },
  { icon: "fa-solid fa-car-battery", text: "Jumpstart Services" },
  { icon: "fa-solid fa-truck-monster", text: "Winch Out" },
  { icon: "fa-solid fa-car-burst", text: "Accident Emergency Assistance" },
  { icon: "fa-solid fa-gas-pump", text: "Refueling" },
  { icon: "fa-solid fa-truck-ramp-box", text: "Vehicle Transporting" },
  { icon: "fa-solid fa-bolt", text: "Fast Response" },
];

const featureIcons = [
  { icon: "fa-solid fa-truck-pickup", label: "Breakdown Recovery" },
  { icon: "fa-solid fa-car-battery", label: "Jumpstart Services" },
  { icon: "fa-solid fa-truck-monster", label: "Winch Out" },
  { icon: "fa-solid fa-car-burst", label: "Accident Recovery" },
  { icon: "fa-solid fa-truck-ramp-box", label: "Vehicle Transport" },
  { icon: "fa-solid fa-clock", label: "24/7 Support" },
];

const services = [
  {
    key: "vehicle-breakdown-recovery",
    img: "/images/service-breakdown.jpg",
    alt: "Car being loaded onto a flatbed recovery truck at dusk",
    title: "24/7 Vehicle Breakdown Recovery",
    desc: "Professional recovery when a vehicle cannot safely continue after a breakdown.",
  },
  {
    key: "roadside-assistance",
    img: "/images/service-roadside.jpg",
    alt: "Technician checking a car engine roadside in the rain",
    title: "Roadside Assistance",
    desc: "Practical help for suitable vehicle problems at your current location.",
  },
  {
    key: "jumpstart-services",
    img: "/images/service-jumpstart.jpg",
    alt: "Jump-starting a car battery on a frosty driveway",
    title: "Jumpstart Services",
    desc: "Battery-starting assistance for suitable cars and light vans that will not start.",
  },
  {
    key: "accident-emergency-assistance",
    img: "/images/service-accident.jpg",
    alt: "Technician inspecting a damaged car with a tow truck behind",
    title: "Accident Emergency Assistance",
    desc: "Vehicle recovery support following a collision or road traffic incident.",
  },
  {
    key: "winch-out",
    img: "/images/service-winch.jpg",
    alt: "Land Rover being winched out of a ditch",
    title: "Winch Out",
    desc: "Vehicle stuck in mud, soft ground or a ditch? We assess the situation and provide controlled winch-out assistance where safe access and conditions allow.",
  },
  {
    key: "vehicle-transporting",
    img: "/images/service-transport.jpg",
    alt: "Clean car strapped to a flatbed in a car park",
    title: "Vehicle Transporting",
    desc: "Careful vehicle transportation between suitable agreed collection and delivery points.",
  },
];

const additionalServices = [
  {
    key: "changing-spare-tyre",
    img: "/images/service-tyre.jpg",
    alt: "Technician fitting a spare wheel to a car",
    title: "Changing Spare Tyre",
    desc: "Roadside help fitting an available suitable spare tyre when you cannot continue.",
  },
  {
    key: "refueling",
    img: "/images/service-refuel.jpg",
    alt: "Technician pouring fuel from a can into a car",
    title: "Refueling",
    desc: "Roadside assistance when your vehicle has unexpectedly run out of fuel.",
  },
];

const homepageServices = [...services, ...additionalServices];

const whyChoose = [
  { icon: "fa-solid fa-award", text: "More than 15 years of roadside and recovery work." },
  { icon: "fa-solid fa-shield-halved", text: "Fully insured, from loading to final drop-off." },
  { icon: "fa-solid fa-car-side", text: "Recovery for cars, light vans, 4x4s and SUVs." },
  { icon: "fa-solid fa-clock", text: "Available 24/7, including overnight and weekends." },
  { icon: "fa-solid fa-comments", text: "Speak directly to our team by phone or WhatsApp." },
  { icon: "fa-solid fa-handshake-angle", text: "Liaison with your insurer or their recovery coordinator, on request." },
];

const homepageFaqs = [
  {
    question: "Is your car recovery service available 24/7?",
    answer: "Yes. We provide recovery 24 hours a day, including overnight and weekends. Call or WhatsApp us whenever you need help.",
  },
  {
    question: "What information do I need to give when I call?",
    answer: "Tell us your exact location, your car's make and model, what has happened and where you'd like it taken, if you know.",
  },
  {
    question: "Where can you take my car?",
    answer: "We can take it to an agreed garage, a body repair centre, your home address or another suitable destination.",
  },
  {
    question: "Can you recover a car that won't start or has been in an accident?",
    answer: "Yes. If a car can't be started or isn't safe to drive, we can arrange recovery. After a collision, contact the emergency services first if anyone is hurt or in danger. Then call us once the scene is safe.",
  },
  {
    question: "Which vehicles can you recover?",
    answer: "We recover cars, light vans, 4x4s and SUVs. If you're unsure whether we can take yours, call us with the details and we'll confirm.",
  },
  {
    question: "How much does car recovery cost?",
    answer: "The cost depends on your car, where it is, where it's going and what the recovery involves. Call or WhatsApp us with those details and we'll discuss a quote before work begins.",
  },
];

export default function CarRecoveryLandingPage() {
  return (
    <>
      <Header activePath={path} showAreas={false} />

      <main>
        {/* ── Hero ── */}
        <section className="relative isolate overflow-hidden text-white">
          <Image
            src="/images/home-hero.jpg"
            alt="Recovery truck loading a broken-down car at dusk"
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
                <span>Available for urgent roadside enquiries</span>
              </p>
              <h1 className="mb-4 text-3xl leading-tight font-extrabold sm:mb-6 sm:text-4xl lg:text-6xl">
                24/7 Car Recovery <span className="text-red">&amp; Breakdown Towing</span>
              </h1>
              <p className="mb-6 text-base text-white/80 sm:mb-8 sm:text-lg">
                Broken down, stuck with a car that won&rsquo;t start or need a tow after a collision?
                Call or message FSR Recovery Group any time. Tell us what happened and where your
                vehicle is, and we&rsquo;ll confirm the help we can offer and discuss a quote.
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
                  <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
                </a>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-4 sm:gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">24/7</strong>
                  <span className="text-xs text-slate-300">Available</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">Fast</strong>
                  <span className="text-xs text-slate-300">Response</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">15+</strong>
                  <span className="text-xs text-slate-300">Years Trading</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-red sm:text-2xl">Insured</strong>
                  <span className="text-xs text-slate-300">Fully</span>
                </div>
              </div>
            </div>

            <QuoteForm variant="hero" />
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
                alt="Car secured on an FSR Recovery Group flatbed for transport"
                width={1200}
                height={900}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="min-h-[360px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
            <div className="fade-up order-1 lg:order-2">
              <p className="mb-3 font-bold text-red-dark">15+ Years of Roadside Support</p>
              <h2 className="mb-5 text-3xl font-extrabold text-navy lg:text-4xl">
                {business.name} — Here When You Need Us
              </h2>
              <p className="mb-6 leading-8 text-navy/70">
                When a car can&rsquo;t safely carry on, a roadside fix isn&rsquo;t always the answer. We
                collect suitable cars and light vans from accessible locations, load them securely and
                take them to the destination you choose. That might be your usual garage, a body repair
                centre, your home or another agreed address.
              </p>
              <p className="mb-6 leading-8 text-navy/70">
                Our{" "}
                <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                  vehicle breakdown recovery
                </Link>{" "}
                covers mechanical and electrical faults, overheating, and clutch or gearbox trouble.
                After a collision, we move the damaged car once the scene is safe. If your car is stuck
                in mud, snow or a ditch, a{" "}
                <Link href="/services/winch-out" className="font-semibold text-red hover:underline">
                  winch out
                </Link>{" "}
                can pull it free before recovery.
              </p>
              <p className="mb-8 leading-8 text-navy/70">
                Need a car moved on a planned job rather than after a breakdown?{" "}
                <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">
                  Vehicle transporting
                </Link>{" "}
                covers collections, garage runs and relocations between agreed addresses.
              </p>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy/10 p-5">
                  <i className="fa-solid fa-shield-halved mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Fully Insured</h3>
                  <p className="mt-1 text-sm text-navy/70">Careful loading and transport from start to finish.</p>
                </div>
                <div className="rounded-2xl border border-navy/10 p-5">
                  <i className="fa-solid fa-clipboard-list mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Clear Quotes</h3>
                  <p className="mt-1 text-sm text-navy/70">We discuss the cost with you before work begins.</p>
                </div>
                <div className="rounded-2xl border border-navy/10 p-5">
                  <i className="fa-solid fa-clock mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Available 24/7</h3>
                  <p className="mt-1 text-sm text-navy/70">Prioritising urgent roadside cases when you need us.</p>
                </div>
                <div className="rounded-2xl border border-navy/10 p-5">
                  <i className="fa-solid fa-comments mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Clear Communication</h3>
                  <p className="mt-1 text-sm text-navy/70">We keep you updated throughout the whole process.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={business.tel} className="rounded-full bg-navy px-7 py-4 text-center font-bold text-white transition hover:bg-navy-light">
                  <i className="fa-solid fa-phone mr-2"></i>Call Us Now
                </a>
                <a href="/about" className="rounded-full border-2 border-navy px-7 py-4 text-center font-bold text-navy transition hover:bg-navy hover:text-white">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services (Dark Cards) ── */}
        <section id="services" className="bg-navy py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">Services We Offer</p>
              <h2 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl">Our Key Service Offerings</h2>
              <p className="text-slate-400">
                From roadside breakdowns to full accident recovery, our range of services covers every
                situation you might face on the road.
              </p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {homepageServices.map((service) => {
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
                        Learn More <i className="fa-solid fa-arrow-right ml-1" />
                      </Link>
                      <div className="mt-auto flex gap-3">
                        <a
                          href={business.tel}
                          className="flex-1 rounded-full bg-red px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-red-dark"
                        >
                          <i className="fa-solid fa-phone mr-1.5"></i>Call Now
                        </a>
                        <a
                          href={business.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-full bg-whatsapp px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-green-600"
                        >
                          <i className="fa-brands fa-whatsapp mr-1.5"></i>WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="fade-up mt-10 text-center">
              <a href="/services" className="inline-block rounded-full border-2 border-red px-8 py-4 font-bold text-red transition hover:bg-red hover:text-white">
                View All Services <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ── How Car Recovery Works ── */}
        <section className="bg-white py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>The Process</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">How Car Recovery Works</h2>
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
              Not sure whether you need recovery or a roadside fix? Describe the problem and we&rsquo;ll
              talk through the options.
            </p>
          </div>
        </section>

        {/* ── Why Choose ── */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">Why Drivers Call Us</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Why Drivers Call FSR Recovery Group</h2>
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
              <Eyebrow>Stay Safe</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">What to Do While You Wait for Recovery</h2>
            </div>
            <div className="fade-up space-y-4 leading-7 text-navy/70">
              <p>If anyone is injured or in immediate danger, contact the emergency services first.</p>
              <p>When it&rsquo;s safe to do so, note your pickup point and any access issues so our team can find your vehicle.</p>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Common Questions" title="Car Recovery FAQs" />
            <FaqAccordion faqs={homepageFaqs} />
          </div>
        </section>

        {/* ── CTA Parallax ── */}
        <section className="cta-parallax-bg py-24 text-center text-white">
          <div className="container-site fade-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-red/40 bg-red/20 px-5 py-2 text-sm font-bold text-red">
              <i className="fa-solid fa-triangle-exclamation"></i> Stuck? Need Recovery Now?
            </p>
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need Car Recovery Now?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Call {business.name} or message us on WhatsApp. Tell us where you are and what has
              happened, and we&rsquo;ll talk you through the next step.
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
                <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer showLocation={false} />
    </>
  );
}
