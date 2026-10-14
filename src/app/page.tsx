import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { ReviewsSlider } from "@/components/ReviewsSlider";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { Eyebrow, FaqAccordion, SectionHeading } from "@/components/ServicePage";
import { business } from "@/data/business";
import { getServiceNavigation } from "@/data/services";

const title = "Car Recovery Darlington | 24/7 Breakdown & Towing | FSR";
const description = "Car recovery in Darlington, 24 hours a day. FSR Recovery Group recovers cars and light vans after breakdowns and accidents. Call or WhatsApp for help.";
const path = "/";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
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

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutomotiveBusiness",
      "@id": "https://fsrrecoverygroups.co.uk/#business",
      name: business.name,
      url: "https://fsrrecoverygroups.co.uk/",
      logo: "https://fsrrecoverygroups.co.uk/images/fsr-recovery-group-logo.webp",
      image: "https://fsrrecoverygroups.co.uk/images/fsr-open-graph.png",
      description: "Car recovery, breakdown recovery and roadside assistance in Darlington, 24 hours a day.",
      telephone: business.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.locality,
        postalCode: business.address.postalCode,
        addressCountry: business.address.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 54.528802,
        longitude: -1.561295,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Darlington" },
        { "@type": "City", name: "Durham" },
        { "@type": "City", name: "Bishop Auckland" },
        { "@type": "City", name: "Northallerton" },
        { "@type": "City", name: "Middlesbrough" },
        { "@type": "City", name: "Barnard Castle" },
      ],
      knowsAbout: ["Car recovery", "Breakdown recovery", "Accident recovery", "Vehicle transport", "Roadside assistance"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Car recovery and roadside services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vehicle breakdown recovery",
              url: "https://fsrrecoverygroups.co.uk/services/vehicle-breakdown-recovery",
              serviceType: "Vehicle breakdown recovery",
              description: "Recovery of cars and light vans that cannot safely continue after a breakdown.",
              provider: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accident emergency assistance",
              url: "https://fsrrecoverygroups.co.uk/services/accident-emergency-assistance",
              serviceType: "Accident emergency assistance",
              description: "Recovery of damaged vehicles following a collision, once the scene is safe.",
              provider: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roadside assistance",
              url: "https://fsrrecoverygroups.co.uk/services/roadside-assistance",
              serviceType: "Roadside assistance",
              description: "Roadside help for suitable vehicle problems that can be resolved on the spot.",
              provider: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jumpstart services",
              url: "https://fsrrecoverygroups.co.uk/services/jumpstart-services",
              serviceType: "Jumpstart services",
              description: "Battery-starting assistance for suitable cars and light vans that will not start.",
              provider: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Winch out",
              url: "https://fsrrecoverygroups.co.uk/services/winch-out",
              serviceType: "Winch out",
              description: "Winching for vehicles stuck in mud, snow or a ditch.",
              provider: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vehicle transporting",
              url: "https://fsrrecoverygroups.co.uk/services/vehicle-transporting",
              serviceType: "Vehicle transporting",
              description: "Planned transport of cars and light vans between agreed locations.",
              provider: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Changing spare tyre",
              url: "https://fsrrecoverygroups.co.uk/services/changing-spare-tyre",
              serviceType: "Changing spare tyre",
              description: "Roadside help fitting a suitable spare tyre following a puncture.",
              provider: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Refueling",
              url: "https://fsrrecoverygroups.co.uk/services/refueling",
              serviceType: "Refueling",
              description: "Emergency fuel delivery when a vehicle has run out of fuel.",
              provider: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
            },
          },
        ],
      },
      sameAs: ["https://www.freeindex.co.uk/profile(fsr-recovery-groups)_858150.htm"],
    },
    {
      "@type": "WebPage",
      "@id": "https://fsrrecoverygroups.co.uk/#webpage",
      url: "https://fsrrecoverygroups.co.uk/",
      name: title,
      description,
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://fsrrecoverygroups.co.uk/#website",
        url: "https://fsrrecoverygroups.co.uk/",
        name: business.name,
      },
      about: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
      inLanguage: "en-GB",
    },
    {
      "@type": "FAQPage",
      "@id": "https://fsrrecoverygroups.co.uk/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is your car recovery in Darlington available 24/7?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide recovery 24 hours a day, including overnight and weekends. Call or WhatsApp us whenever you need help.",
          },
        },
        {
          "@type": "Question",
          name: "What information do I need to give when I call?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tell us your exact location, your car's make and model, what has happened and where you'd like it taken, if you know.",
          },
        },
        {
          "@type": "Question",
          name: "Where can you take my car?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can take it to an agreed garage, a body repair centre, your home address or another suitable destination.",
          },
        },
        {
          "@type": "Question",
          name: "Can you recover a car that won't start or has been in an accident?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If a car can't be started or isn't safe to drive, we can arrange recovery. After a collision, contact the emergency services first if anyone is hurt or in danger. Then call us once the scene is safe.",
          },
        },
        {
          "@type": "Question",
          name: "Which vehicles can you recover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recover cars, light vans, 4x4s and SUVs. If you're unsure whether we can take yours, call us with the details and we'll confirm.",
          },
        },
        {
          "@type": "Question",
          name: "How much does car recovery cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on your car, where it is, where it's going and what the recovery involves. Call or WhatsApp us with those details and we'll discuss a quote before work begins.",
          },
        },
      ],
    },
  ],
};

const roadsideTable: { situation: string; help: React.ReactNode }[] = [
  { situation: "Flat or weak battery", help: <>A <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">jump start</Link> at the roadside</> },
  { situation: "Flat tyre and you have a suitable spare", help: "We fit the spare, so you can get moving again" },
  { situation: "Ran out of fuel", help: "Fuel delivered to your location" },
  { situation: "Engine, clutch or gearbox failure", help: "Car recovery to a garage" },
  { situation: "Overheating", help: "Recovery, so you don't drive on and risk more damage" },
  { situation: "Damage after a collision", help: <><Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">Accident recovery</Link> once the scene is safe</> },
  { situation: "Stuck in mud, snow or a ditch", help: "Winching, then recovery if the car can't continue" },
];

const howItWorks = [
  { lead: "Call or message us.", text: "Phone +44 7888 502989 or use WhatsApp. Our local team takes the calls, with no call centre in between." },
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
  { icon: "fa-solid fa-location-dot", text: "Fast Response" },
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
  { icon: "fa-solid fa-comments", text: "A local team you can reach directly by phone or WhatsApp." },
  { icon: "fa-solid fa-handshake-angle", text: "Liaison with your insurer or their recovery coordinator, on request." },
];

const homepageFaqs = [
  {
    question: "Is your car recovery in Darlington available 24/7?",
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

const areas = [
  "Motorway Recovery", "City Centre", "Residential Areas", "Rural & Off-Road",
  "Industrial Estates", "Retail Parks", "Long Distance", "Out-of-Hours",
];

const GBP_MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.266181975819!2d-1.5612949233137332!3d54.528801885596664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeed77f7b9c8a489%3A0x3af9f4efbabca787!2sFSR%20Recovery%20Group!5e0!3m2!1sen!2s!4v1784967444093!5m2!1sen!2s";

export default function Home() {
  return (
    <>
      <Header activePath="/" />

      <main>
        {/* ── Hero ── */}
        <section className="relative isolate overflow-hidden text-white">
          <Image
            src="/images/home-hero.jpg"
            alt="Recovery truck loading a broken-down car at dusk"
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
          <div className="container-site grid items-center gap-8 py-10 sm:py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:py-28">
            <div className="fade-up">
              <p className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/30 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:px-4 sm:py-2 sm:text-sm">
                <i className="fa-solid fa-bolt flex-shrink-0"></i>
                <span>Available for urgent roadside enquiries</span>
              </p>
              <h1 className="mb-4 text-3xl leading-tight font-extrabold sm:mb-6 sm:text-4xl lg:text-6xl">
                Car Recovery Darlington – <span className="text-red">24/7 Breakdown &amp; Towing</span>
              </h1>
              <p className="mb-6 text-base text-white/80 sm:mb-8 sm:text-lg">
                FSR Recovery Group provides car recovery in Darlington 24 hours a day, from our base
                at 135 Gladstone Street. If your car has broken down, won&rsquo;t start or has been
                damaged in a collision, call or message us on WhatsApp. Tell us where you are, what
                happened and where the car needs to go, and we&rsquo;ll arrange recovery to a garage,
                your home or another agreed destination.
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
                  <i className="fa-solid fa-location-dot mb-3 text-2xl text-red"></i>
                  <h3 className="font-bold text-navy">Regional Coverage</h3>
                  <p className="mt-1 text-sm text-navy/70">We know the routes and surrounding areas well.</p>
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

        {/* ── Roadside Fix or Car Recovery? ── */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>Know Your Options</Eyebrow>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Roadside Fix or Car Recovery?</h2>
              <p className="leading-7 text-navy/70">
                <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
                  Roadside assistance
                </Link>{" "}
                can solve some problems where you stand. Others need a recovery truck. Roadside checks
                decide which, and if a fix doesn&rsquo;t work, we can recover the car instead. This table
                shows what usually helps.
              </p>
            </div>
            <div className="fade-up overflow-x-auto rounded-3xl border border-navy/10 bg-white shadow-sm">
              <table className="w-full min-w-[560px] text-left">
                <thead>
                  <tr className="bg-navy/5">
                    <th scope="col" className="px-5 py-4 text-sm font-extrabold uppercase tracking-wide text-navy">Your situation</th>
                    <th scope="col" className="px-5 py-4 text-sm font-extrabold uppercase tracking-wide text-navy">What usually helps</th>
                  </tr>
                </thead>
                <tbody>
                  {roadsideTable.map((row) => (
                    <tr key={row.situation} className="border-t border-navy/10">
                      <td className="px-5 py-4 font-semibold text-navy">{row.situation}</td>
                      <td className="px-5 py-4 text-navy/70">{row.help}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

        {/* ── Why Choose ── */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">Why Drivers Call Us</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Why Drivers in Darlington Call FSR Recovery Group</h2>
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

        {/* ── Reviews Slider ── */}
        <section className="overflow-hidden bg-white py-20">
          <div className="container-site fade-up mb-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">Customer Feedback</p>
              <h2 className="mb-3 text-3xl font-extrabold text-navy lg:text-4xl">What Our Customers Say</h2>
              <p className="text-sm text-navy/50">Hover or tap to pause</p>
            </div>
          </div>
          <ReviewsSlider />
        </section>

        {/* ── Areas ── */}
        <section id="areas" className="bg-navy py-20 text-white">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div className="fade-up">
              <p className="mb-3 font-bold text-red-dark">Coverage</p>
              <h2 className="mb-5 text-3xl font-extrabold lg:text-4xl">Supporting Drivers Across the Region</h2>
              <p className="mb-6 leading-8 text-slate-400">
                We&rsquo;re based at 135 Gladstone Street, Darlington DL3 6LB. We recover cars from town
                centre streets, residential roads, car parks, retail parks and industrial estates in
                and around the town. That includes Cockerton, Mowden, Harrowgate Hill, Faverdale and
                Morton Park.
              </p>
              <p className="mb-6 leading-8 text-slate-400">
                The A1(M) runs along the west side of Darlington, and the A66 leads east towards
                Stockton-on-Tees. We recover vehicles that break down on both, with{" "}
                <Link href="/areas/a1m" className="font-semibold text-red hover:underline">
                  A1(M) recovery
                </Link>{" "}
                also covering the stretch past Scotch Corner and Catterick. Broken down on the{" "}
                <Link href="/areas/a66" className="font-semibold text-red hover:underline">
                  A66
                </Link>
                ? Call us with your location and we&rsquo;ll confirm the quickest way to reach you.
              </p>
              <p className="mb-8 leading-8 text-slate-400">
                Beyond Darlington, we cover Durham, Bishop Auckland, Northallerton, Middlesbrough and
                Barnard Castle. See the{" "}
                <Link href="/areas" className="font-semibold text-red hover:underline">
                  full list of areas we cover
                </Link>
                . If your location isn&rsquo;t listed, call or WhatsApp us and we&rsquo;ll confirm
                whether recovery is available.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                {areas.map((area) => (
                  <span key={area} className="rounded-full border border-red/40 bg-white/5 px-4 py-2 text-slate-200">
                    <i className="fa-solid fa-location-dot mr-2 text-xs text-red"></i>{area}
                  </span>
                ))}
              </div>
            </div>
            <div className="fade-up">
              <Image
                src="/images/home-roadside-2.jpg"
                alt="FSR Recovery technician providing roadside assistance"
                width={1200}
                height={900}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ── Map ── */}
        <section className="bg-slate-50 py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-8 max-w-2xl text-center">
              <p className="mb-3 font-bold text-red-dark">Find Us</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">{business.name} Location</h2>
            </div>
            <div className="fade-up w-full overflow-hidden rounded-3xl border border-navy/10 shadow-2xl" style={{ height: "420px" }}>
              <GoogleMapEmbed src={GBP_MAP_SRC} title={`${business.name} Location`} />
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
              <p>
                Your safety comes first. If you break down on a motorway, the{" "}
                <a
                  href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
                  rel="noopener"
                  className="font-semibold text-red hover:underline"
                >
                  Highway Code
                </a>{" "}
                says to leave at the next exit or service area if you can. If you can&rsquo;t, move
                into the left lane and stop on the hard shoulder or in an emergency area.
              </p>
              <p>
                Switch on your hazard lights and, if it&rsquo;s safe, leave the car by the side
                furthest from traffic. Wait well away from the carriageway, behind a barrier if there
                is one, and don&rsquo;t try repairs on the motorway.{" "}
                <a
                  href="https://nationalhighways.co.uk/road-safety/breakdowns"
                  rel="noopener"
                  className="font-semibold text-red hover:underline"
                >
                  National Highways
                </a>{" "}
                gives the same advice.
              </p>
              <p>
                If you are stranded in moving traffic and cannot safely leave the vehicle, stay inside
                with your seat belt fastened and hazard lights on. Call 999 and ask for the police. Do
                not attempt to cross moving traffic.
              </p>
              <p>
                If anyone is hurt or in danger, call 999 first. Then call us with your exact location,
                including the junction number or the number on the nearest marker post.
              </p>
              <p className="text-sm text-navy/50">
                This is general safety guidance, not a substitute for the official Highway Code or
                National Highways advice above. FSR Recovery Group provides vehicle recovery once you
                and the vehicle are safe — it does not replace the emergency services.
              </p>
            </div>
          </div>
        </section>

        {/* ── Homepage FAQs ── */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Common Questions" title="Car Recovery Darlington FAQs" />
            <FaqAccordion faqs={homepageFaqs} />
          </div>
        </section>

        {/* ── CTA Parallax ── */}
        <section className="cta-parallax-bg py-24 text-center text-white">
          <div className="container-site fade-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-red/40 bg-red/20 px-5 py-2 text-sm font-bold text-red">
              <i className="fa-solid fa-triangle-exclamation"></i> Stuck? Need Recovery Now?
            </p>
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need Car Recovery in Darlington Now?</h2>
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
            <address className="mt-8 not-italic leading-7 text-white/75">
              <strong className="text-white">{business.name}</strong>
              <br />
              {business.addressFull}
              <br />
              <a href={business.tel}>{business.phoneDisplay}</a>
            </address>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </main>

      <Footer />
    </>
  );
}
