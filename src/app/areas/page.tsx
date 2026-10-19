import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { Eyebrow } from "@/components/ServicePage";
import { business } from "@/data/business";
import { businessEntityRef, breadcrumbList } from "@/data/schema";

const title = "Vehicle Recovery Areas We Cover | FSR Recovery Group";
const description =
  "FSR Recovery Group provides 24/7 vehicle recovery and roadside assistance across Darlington, County Durham, North Yorkshire and surrounding cities, towns and major roads.";
const path = "/areas";
const heroImage = "/images/areas-van-flatbed-countryside.webp";
const heroImageAlt = "Recovery flatbed truck loading a van in the countryside with rolling green hills in the background";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name, images: [{ url: heroImage, alt: heroImageAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [heroImage] },
};

type AreaDetail = { key: string; label: string; href: string; desc: string };

const cityAreaDetails: AreaDetail[] = [
  {
    key: "newcastle",
    label: "Newcastle",
    href: "/areas/newcastle",
    desc: "Vehicle recovery and roadside assistance for drivers across Newcastle and surrounding areas. Find local information about the recovery services available in the area.",
  },
  {
    key: "durham",
    label: "Durham",
    href: "/areas/durham",
    desc: "Breakdown recovery and vehicle assistance across Durham and surrounding locations, helping drivers who need support following a breakdown or vehicle problem.",
  },
  {
    key: "darlington",
    label: "Darlington",
    href: "/",
    desc: "FSR Recovery Group provides vehicle recovery and roadside assistance across Darlington and the surrounding area, with support for a range of common breakdown situations.",
  },
  {
    key: "sunderland",
    label: "Sunderland",
    href: "/areas/sunderland",
    desc: "Recovery and roadside assistance for drivers across Sunderland and nearby areas, including support for suitable cars and light vans.",
  },
  {
    key: "peterlee",
    label: "Peterlee",
    href: "/areas/peterlee",
    desc: "Vehicle recovery and roadside assistance across Peterlee and surrounding parts of East Durham.",
  },
  {
    key: "middlesbrough",
    label: "Middlesbrough",
    href: "/areas/middlesbrough",
    desc: "Breakdown and vehicle recovery services for drivers across Middlesbrough and the surrounding Teesside area.",
  },
  {
    key: "thirsk",
    label: "Thirsk",
    href: "/areas/thirsk",
    desc: "Recovery assistance for drivers around Thirsk and surrounding areas, including support for breakdowns and vehicle recovery requirements.",
  },
  {
    key: "northallerton",
    label: "Northallerton",
    href: "/areas/northallerton",
    desc: "Vehicle recovery and roadside assistance for drivers in Northallerton and nearby locations.",
  },
  {
    key: "ripon",
    label: "Ripon",
    href: "/areas/ripon",
    desc: "Recovery services for suitable vehicles across Ripon and surrounding areas.",
  },
  {
    key: "catterick",
    label: "Catterick",
    href: "/areas/catterick",
    desc: "Vehicle recovery and roadside assistance around Catterick and nearby locations.",
  },
  {
    key: "barnard-castle",
    label: "Barnard Castle",
    href: "/areas/barnard-castle",
    desc: "Breakdown recovery and vehicle assistance across Barnard Castle and surrounding areas.",
  },
  {
    key: "bishop-auckland",
    label: "Bishop Auckland",
    href: "/areas/bishop-auckland",
    desc: "Vehicle recovery and roadside assistance across Bishop Auckland and surrounding parts of County Durham.",
  },
];

const roadAreaDetails: AreaDetail[] = [
  {
    key: "a1m",
    label: "A1(M)",
    href: "/areas/a1m",
    desc: "Vehicle breakdown and recovery assistance for suitable vehicles travelling along relevant sections of the A1(M) within our coverage.",
  },
  {
    key: "a66",
    label: "A66",
    href: "/areas/a66",
    desc: "Recovery and roadside assistance for drivers experiencing vehicle problems on relevant sections of the A66 within our service area.",
  },
  {
    key: "a19",
    label: "A19",
    href: "/areas/a19",
    desc: "Vehicle recovery and roadside assistance for drivers travelling along relevant sections of the A19.",
  },
  {
    key: "a67",
    label: "A67",
    href: "/areas/a67",
    desc: "Breakdown recovery and roadside assistance for drivers travelling along relevant sections of the A67.",
  },
  {
    key: "a68",
    label: "A68",
    href: "/areas/a68",
    desc: "Vehicle recovery and roadside assistance for drivers travelling along relevant sections of the A68.",
  },
  {
    key: "a167",
    label: "A167",
    href: "/areas/a167",
    desc: "Breakdown and vehicle recovery support for drivers travelling along relevant sections of the A167.",
  },
];

const localServices = [
  {
    icon: "fa-solid fa-truck-pickup",
    title: "Breakdown Recovery",
    href: "/services/vehicle-breakdown-recovery",
    desc: "Vehicle recovery when your car or suitable light van cannot safely continue its journey.",
  },
  {
    icon: "fa-solid fa-triangle-exclamation",
    title: "Roadside Assistance",
    href: "/services/roadside-assistance",
    desc: "Practical assistance for suitable vehicle problems that may be dealt with at the roadside.",
  },
  {
    icon: "fa-solid fa-car-battery",
    title: "Jump Start Service",
    href: "/services/jumpstart-services",
    desc: "Assistance when a flat or weak battery prevents your vehicle from starting.",
  },
  {
    icon: "fa-solid fa-truck-monster",
    title: "Vehicle Winch Out",
    href: "/services/winch-out",
    desc: "Recovery assistance for suitable vehicles that have become stuck on difficult ground.",
  },
  {
    icon: "fa-solid fa-car-burst",
    title: "Accident Recovery",
    href: "/services/accident-emergency-assistance",
    desc: "Vehicle recovery following a road traffic accident when the vehicle cannot safely continue.",
  },
  {
    icon: "fa-solid fa-circle-dot",
    title: "Spare Tyre Change",
    href: "/services/changing-spare-tyre",
    desc: "Assistance when you have a suitable spare tyre available following a puncture or tyre problem.",
  },
  {
    icon: "fa-solid fa-gas-pump",
    title: "Emergency Fuel Delivery",
    href: "/services/refueling",
    desc: "Fuel delivery when you have run out of fuel during your journey.",
  },
  {
    icon: "fa-solid fa-truck-ramp-box",
    title: "Vehicle Transport",
    href: "/services/vehicle-transporting",
    desc: "Planned transportation of suitable vehicles between agreed locations.",
  },
];

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

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Home", path: "/" }, { name: "Areas We Cover", path: "/areas" }]),
    {
      "@type": "CollectionPage",
      name: "Vehicle Recovery Areas We Cover",
      url: `https://fsrrecoverygroups.co.uk${path}`,
      about: businessEntityRef,
      hasPart: {
        "@type": "ItemList",
        itemListElement: [...cityAreaDetails, ...roadAreaDetails].map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://fsrrecoverygroups.co.uk${a.href}`,
          name: a.label,
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function AreasPage() {
  return (
    <>
      <Header activePath="/areas" />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden text-white">
          <Image
            src={heroImage}
            alt={heroImageAlt}
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
          <div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-map-location-dot flex-shrink-0"></i> Areas Covered
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">
              Vehicle Recovery Areas We Cover
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-base text-white/80 sm:text-lg">
              FSR Recovery Group provides 24/7 vehicle recovery and roadside assistance across Darlington, County
              Durham, North Yorkshire and surrounding areas. From local streets to major A-roads, our coverage is
              designed to support drivers who need reliable help after a breakdown, accident or vehicle problem.
            </p>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Explore the areas we cover below to find local information about our{" "}
              <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red-100 underline decoration-red-100/50 underline-offset-2 hover:text-white">
                breakdown recovery
              </Link>
              ,{" "}
              <Link href="/services/roadside-assistance" className="font-semibold text-red-100 underline decoration-red-100/50 underline-offset-2 hover:text-white">
                roadside assistance
              </Link>{" "}
              and vehicle recovery services.
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

        {/* Breakdown Recovery Across Our Service Area */}
        <section id="cities-towns" className="bg-white py-16 sm:py-24">
          <div className="container-site mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up relative min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[360px] lg:order-2">
              <Image
                src="/images/areas-flatbed-hillside-overlook.webp"
                alt="Flatbed recovery truck loading a car on a hillside overlooking a town and motorway"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="fade-up lg:order-1">
              <Eyebrow>Dedicated Local Pages</Eyebrow>
              <h2 className="mb-4 text-3xl font-extrabold text-navy sm:text-4xl">
                Breakdown Recovery Across Our Service Area
              </h2>
              <p className="leading-7 text-navy/70">
                Our recovery team covers a wide range of locations across the North East and North Yorkshire.
                Whether you have broken down near home, are travelling through the area or need your{" "}
                <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">
                  vehicle recovered following an accident
                </Link>
                , you can check your local area page below for more information.
              </p>
            </div>
          </div>

          <div className="container-site">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cityAreaDetails.map((area) => (
                <article
                  key={area.key}
                  className="fade-up flex flex-col rounded-3xl border border-navy/10 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red/40 hover:bg-white hover:shadow-xl"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-navy">
                    <i className="fa-solid fa-location-dot text-red" />
                    {area.label}
                  </h3>
                  <p className="mb-5 flex-1 leading-7 text-navy/70">{area.desc}</p>
                  <Link href={area.href} className="inline-flex items-center gap-2 font-bold text-red hover:text-red-dark">
                    View {area.label} Recovery Services <i className="fa-solid fa-arrow-right text-sm" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Major Roads We Cover */}
        <section id="major-roads" className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up relative min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[360px]">
              <Image
                src="/images/areas-roadside-tyre-change.webp"
                alt="Recovery technician changing a wheel at the roadside beside a jacked-up car"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="fade-up">
              <Eyebrow>Major Routes</Eyebrow>
              <h2 className="mb-4 text-3xl font-extrabold text-navy sm:text-4xl">Major Roads We Cover</h2>
              <p className="leading-7 text-navy/70">
                FSR Recovery Group also provides{" "}
                <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                  recovery assistance
                </Link>{" "}
                across selected major roads within our wider service area.
              </p>
            </div>
          </div>

          <div className="container-site">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {roadAreaDetails.map((road) => (
                <article
                  key={road.key}
                  className="fade-up flex flex-col rounded-3xl border border-navy/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-xl"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-navy">
                    <i className="fa-solid fa-road text-red" />
                    {road.label}
                  </h3>
                  <p className="mb-5 flex-1 leading-7 text-navy/70">{road.desc}</p>
                  <Link href={road.href} className="inline-flex items-center gap-2 font-bold text-red hover:text-red-dark">
                    {road.label} Breakdown &amp; Recovery <i className="fa-solid fa-arrow-right text-sm" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Local Recovery Services */}
        <section className="bg-white py-16 sm:py-24">
          <div className="container-site mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up">
              <Eyebrow>What We Offer</Eyebrow>
              <h2 className="mb-4 text-3xl font-extrabold text-navy sm:text-4xl">Local Recovery Services</h2>
              <p className="leading-7 text-navy/70">
                Wherever you are within our service area, the type of assistance you need will depend on your
                vehicle and the problem you are experiencing. FSR Recovery Group provides a range of{" "}
                <Link href="/services" className="font-semibold text-red hover:underline">
                  recovery and roadside services
                </Link>
                , including:
              </p>
            </div>
            <div className="fade-up relative min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[360px]">
              <Image
                src="/images/areas-jumpstart-residential-street.webp"
                alt="Technician jump-starting a car battery on a residential street"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="container-site">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {localServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="fade-up flex flex-col rounded-3xl border border-navy/10 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red/40 hover:bg-white hover:shadow-xl"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red/15 text-lg text-red">
                    <i className={service.icon} />
                  </span>
                  <h3 className="mb-2 font-bold text-navy">{service.title}</h3>
                  <p className="text-sm leading-6 text-navy/70">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Find Your Local Recovery Area */}
        <section className="bg-navy py-16 text-center text-white sm:py-20">
          <div className="container-site fade-up mx-auto max-w-2xl">
            <Eyebrow>Need Help Choosing?</Eyebrow>
            <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Find Your Local Recovery Area</h2>
            <p className="mb-4 leading-7 text-white/80">
              Not sure which area page applies to your location? Use your current location, nearest town, road or
              landmark to identify the most relevant coverage area above. If you are travelling on one of the{" "}
              <Link href="#major-roads" className="font-semibold text-red-100 underline decoration-red-100/50 underline-offset-2 hover:text-white">
                major roads listed above
              </Link>
              , you can also visit the dedicated road recovery page for more specific information.
            </p>
            <p className="leading-7 text-white/80">
              If you cannot find your location,{" "}
              <Link href="/contact" className="font-semibold text-red-100 underline decoration-red-100/50 underline-offset-2 hover:text-white">
                contact FSR Recovery Group
              </Link>{" "}
              with your exact location and vehicle details. We can confirm whether assistance is available.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-12 text-center">
              <p className="mb-3 font-bold text-red-dark">Common Questions</p>
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

        {/* Map */}
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

        {/* CTA */}
        <section className="bg-red py-20 text-center text-white">
          <div className="container-site fade-up mx-auto max-w-2xl">
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need Vehicle Recovery?</h2>
            <p className="mb-8 text-lg text-white/90">
              If you have broken down, been involved in an accident or need your vehicle transported, contact FSR
              Recovery Group for recovery assistance across our service area. Tell us where you are, what has
              happened and what vehicle you are driving. We&rsquo;ll discuss the appropriate recovery or roadside
              assistance option for your situation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={business.tel} className="rounded-full bg-navy px-8 py-4 font-bold text-white transition hover:bg-navy-light">
                <i className="fa-solid fa-phone mr-2"></i>Call FSR Recovery Group {business.phoneDisplay}
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </main>

      <Footer />
    </>
  );
}
