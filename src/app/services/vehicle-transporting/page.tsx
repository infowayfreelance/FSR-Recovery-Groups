import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactButtons, Eyebrow, FaqAccordion, type ServiceFaq } from "@/components/ServicePage";
import { getServiceNavigation } from "@/data/services";
import { business } from "@/data/business";
import { businessEntityRef, breadcrumbList } from "@/data/schema";

const title = "Vehicle Transport Darlington | FSR Recovery";
const description =
  "FSR Recovery Group provides vehicle transport for cars and suitable light vans between agreed locations in Darlington and surrounding areas. Call or WhatsApp to discuss collection and delivery.";
const path = "/services/vehicle-transporting";
const heroImage = "/images/vehicle-transport-car-loading.webp";
const heroImageAlt = "Car being winched onto a flatbed recovery truck for vehicle transport";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name, images: [{ url: heroImage, alt: heroImageAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [heroImage] },
};

const usefulFor = [
  "Vehicle collection and delivery",
  "Car collection from a seller or buyer",
  "Moving a vehicle to a garage",
  "Transporting a damaged or non-running car",
  "Vehicle relocation",
  "Moving a suitable light van",
  "Recovery-related vehicle transport",
];

const collectionFeatures: { eyebrow: string; heading: string; text: React.ReactNode; image: string; imageAlt: string }[] = [
  {
    eyebrow: "Buying or Selling",
    heading: "Car Collection",
    text: (
      <>
        If you have purchased or sold a vehicle, we can discuss a suitable car collection service and arrange
        transport from the agreed collection point &mdash; handing over keys and paperwork on the day, just like
        our{" "}
        <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
          roadside assistance
        </Link>{" "}
        team does when they reach a driver.
      </>
    ),
    image: "/images/vehicle-transport-key-handover.webp",
    imageAlt: "Driver handing over car keys to an FSR Recovery transport driver on a driveway",
  },
  {
    eyebrow: "Agreed Destination",
    heading: "Car Delivery",
    text: (
      <>
        Our car delivery service can move a suitable vehicle to an agreed destination. This may include car home
        delivery, garage delivery or delivery to another suitable address across{" "}
        <Link href="/areas" className="font-semibold text-red hover:underline">
          our coverage area
        </Link>
        .
      </>
    ),
    image: "/images/vehicle-transport-car-delivery.webp",
    imageAlt: "Car secured on a flatbed truck being transported to its destination",
  },
  {
    eyebrow: "Repairs & Servicing",
    heading: "Vehicle Transport to a Garage",
    text: (
      <>
        If a vehicle needs to be moved to a garage or repair facility, we can discuss suitable vehicle transport
        based on its condition and collection location. If it breaks down before it reaches the garage, our{" "}
        <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
          vehicle breakdown recovery
        </Link>{" "}
        team can step in instead.
      </>
    ),
    image: "/images/vehicle-transport-van-garage.webp",
    imageAlt: "Van loaded onto a recovery flatbed outside a vehicle repair garage",
  },
];

const vehicleTypes: { icon: string; title: string; text: React.ReactNode }[] = [
  {
    icon: "fa-solid fa-car-side",
    title: "Cars and Passenger Vehicles",
    text: "Our service can be used for private cars that need to be collected, delivered or moved between locations.",
  },
  {
    icon: "fa-solid fa-van-shuttle",
    title: "Light Vans",
    text: "We can discuss van transport service requirements for suitable light commercial vehicles, depending on their size, condition and transport needs.",
  },
  {
    icon: "fa-solid fa-car-burst",
    title: "Non-Running Vehicles",
    text: (
      <>
        A vehicle does not always need to be driveable to be transported. If your car won&rsquo;t start, read our
        guide on{" "}
        <Link href="/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">
          possible reasons a car won&rsquo;t start
        </Link>{" "}
        or ask about our{" "}
        <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">
          jump start service
        </Link>{" "}
        &mdash; if it still can&rsquo;t be driven, tell us its condition and location so we can discuss transport.
      </>
    ),
  },
  {
    icon: "fa-solid fa-truck-ramp-box",
    title: "Damaged Vehicles",
    text: (
      <>
        Following an accident or other damage, a vehicle may need transportation to a garage, body shop or another
        agreed destination. Our{" "}
        <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">
          accident &amp; emergency assistance
        </Link>{" "}
        team can also help at the scene where suitable.
      </>
    ),
  },
];

const whenNeeded = [
  "You have bought a vehicle from another location.",
  "You have sold a vehicle and need it delivered to the buyer.",
  "A vehicle needs to be moved to a garage or body shop.",
  "A non-running vehicle needs to be transported.",
  "A damaged vehicle needs to be moved after an accident.",
  "You are relocating a vehicle between homes or other addresses.",
  "A suitable van needs to be moved between locations.",
  "A recovery vehicle needs to transport a car to an agreed destination.",
];

const relatedServices = [
  { label: "Vehicle Breakdown Recovery", icon: "fa-solid fa-truck-pickup", key: "vehicle-breakdown-recovery" },
  { label: "Roadside Assistance", icon: "fa-solid fa-screwdriver-wrench", key: "roadside-assistance" },
  { label: "Accident & Emergency Assistance", icon: "fa-solid fa-car-burst", key: "accident-emergency-assistance" },
  { label: "Jump Start Services", icon: "fa-solid fa-car-battery", key: "jumpstart-services" },
  { label: "Winch-Out Recovery", icon: "fa-solid fa-truck-monster", key: "winch-out" },
];

const processSteps = [
  { n: "1", title: "Tell Us What Needs Moving", text: "Provide the vehicle make and model, its current condition and the collection location." },
  { n: "2", title: "Share the Delivery Details", text: "Tell us where the vehicle needs to go and provide any useful access or timing information." },
  { n: "3", title: "Confirm the Transport Requirements", text: "We can discuss the vehicle, collection point, destination and the most suitable transport arrangement." },
  { n: "4", title: "Collection and Delivery", text: "Once the arrangements are agreed, the vehicle can be collected and transported to the agreed destination." },
];

const roadLinks = [
  { label: "A1(M)", href: "/areas/a1m" },
  { label: "A66", href: "/areas/a66" },
  { label: "A67", href: "/areas/a67" },
  { label: "A68", href: "/areas/a68" },
  { label: "A167", href: "/areas/a167" },
  { label: "A19", href: "/areas/a19" },
];

const townLinks = [
  { label: "Barnard Castle", href: "/areas/barnard-castle" },
  { label: "Durham", href: "/areas/durham" },
  { label: "Newcastle", href: "/areas/newcastle" },
  { label: "Middlesbrough", href: "/areas/middlesbrough" },
];

const whyChoose: { icon: string; title: string; text: React.ReactNode }[] = [
  {
    icon: "fa-solid fa-handshake",
    title: "Recovery and Transport Experience",
    text: "FSR Recovery Group provides vehicle recovery alongside transport services, making us suitable for planned vehicle movement as well as some recovery-related transport requirements.",
  },
  {
    icon: "fa-solid fa-van-shuttle",
    title: "Cars and Suitable Light Vans",
    text: "We can discuss transport requirements for suitable cars and light commercial vans.",
  },
  {
    icon: "fa-solid fa-arrows-left-right",
    title: "Collection and Delivery",
    text: "We arrange transport around the agreed collection and delivery locations rather than providing a one-size-fits-all service.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Clear Communication",
    text: "We ask for the important details before arranging transport, including the vehicle condition, collection point and destination.",
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Local Base, Wider Coverage",
    text: (
      <>
        Based in Darlington,{" "}
        <Link href="/about" className="font-semibold text-red hover:underline">
          FSR Recovery Group
        </Link>{" "}
        serves the surrounding area and wider road network for suitable transport and recovery requirements.
      </>
    ),
  },
];

const faqs: ServiceFaq[] = [
  { question: "Can you transport a car from one location to another?", answer: "Yes. We provide vehicle transport for suitable cars between agreed collection and delivery locations." },
  { question: "Can you collect and deliver a car?", answer: "Yes. Our car collection and delivery service can be arranged between suitable locations." },
  { question: "Can you provide car home delivery?", answer: "Yes. Car home delivery may be available when the collection and destination are suitable." },
  {
    question: "Can you transport a non-running vehicle?",
    answer:
      "Potentially, yes. Tell us why the vehicle cannot be driven, where it is located and where it needs to go so we can discuss the appropriate option. Our recovery & roadside blog also has practical advice if you are not sure what is wrong.",
  },
  { question: "Can you transport a damaged vehicle?", answer: "Yes, where suitable. We can discuss damaged car transport following an accident or other vehicle damage." },
  { question: "Can you take a vehicle to a garage?", answer: "Yes. We can discuss vehicle transport to a garage or another agreed repair destination." },
  { question: "Do you transport vans?", answer: "Yes. We provide transport for suitable light vans. Vehicle size, condition and collection requirements will need to be confirmed." },
  {
    question: "Do you provide vehicle recovery and transport?",
    answer:
      "Yes. FSR Recovery Group provides both recovery and transport services from our Darlington base. The appropriate option depends on whether the vehicle needs planned transportation or recovery because it cannot safely continue its journey — see our full range of services for more.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Vehicle Transporting", path }]),
    {
      "@type": "Service",
      name: "Vehicle Transport Service",
      description,
      serviceType: "Vehicle transport service",
      provider: businessEntityRef,
      areaServed: { "@type": "City", name: "Darlington" },
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs
        .filter((f): f is { question: string; answer: string } => typeof f.answer === "string")
        .map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ],
};

export default function VehicleTransportingPage() {
  return (
    <>
      <Header activePath="/services" />
      <main>
        {/* Hero */}
        <section className="service-hero relative isolate min-h-[520px] overflow-hidden bg-navy text-white">
          <Image src={heroImage} alt={heroImageAlt} fill preload fetchPriority="high" quality={65} sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
          <div className="container-site flex min-h-[520px] items-center py-14">
            <div className="fade-up max-w-3xl">
              <Eyebrow>Vehicle Transport</Eyebrow>
              <h1 className="text-[1.35rem] font-extrabold leading-[1.25] min-[360px]:text-[1.55rem] sm:text-5xl sm:leading-[1.1]">
                Vehicle Transport Service
                <br />
                for Cars and Vans
              </h1>
              <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">
                FSR Recovery Group provides reliable vehicle transport for cars and suitable light vans. We can
                arrange vehicle collection and delivery between agreed locations, including homes, garages, body
                shops and other suitable destinations.
              </p>
              <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for a Transport Quote" />
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
                {["Collection & Delivery", "Cars & Suitable Vans", "Darlington Based"].map((x) => (
                  <span key={x}><i className="fa-solid fa-circle-check mr-2 text-red" />{x}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intro + sidebar list */}
        <section className="py-12 sm:py-16">
          <div className="container-site grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up">
              <Eyebrow>Move Your Vehicle Without the Hassle</Eyebrow>
              <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">
                A Practical Way to Move Suitable Cars and Vans
              </h2>
              <div className="space-y-4 leading-7 text-navy/70">
                <p>
                  Moving a vehicle between locations can be difficult when you do not have the right equipment or
                  the vehicle cannot be driven. The{" "}
                  <Link href="/" className="font-semibold text-red hover:underline">
                    FSR Recovery Group
                  </Link>{" "}
                  vehicle transport service provides a practical way to move suitable cars and vans safely between
                  agreed collection and delivery points.
                </p>
                <p>
                  Whether you need a car transport service, vehicle transportation or a suitable transportation
                  service, we can discuss the vehicle, collection point and destination before arranging the move
                  &mdash; see our full{" "}
                  <Link href="/services" className="font-semibold text-red hover:underline">
                    range of recovery and transport services
                  </Link>{" "}
                  or our{" "}
                  <Link href="/blog" className="font-semibold text-red hover:underline">
                    recovery &amp; roadside blog
                  </Link>{" "}
                  for more practical advice.
                </p>
                <p>
                  If you need a vehicle moved because you have bought or sold it, it needs repairs, or it cannot
                  safely be driven,{" "}
                  <Link href="/contact" className="font-semibold text-red hover:underline">
                    contact us
                  </Link>{" "}
                  to discuss the transport requirements, or{" "}
                  <Link href="/about" className="font-semibold text-red hover:underline">
                    learn more about FSR Recovery Group
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="fade-up rounded-3xl border border-navy/10 bg-slate-50 p-8">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-navy">
                <i className="fa-solid fa-route text-red" /> Our Service Can Be Useful For
              </h3>
              <ul className="space-y-4">
                {usefulFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/75">
                    <i className="fa-solid fa-circle-check mt-1 flex-shrink-0 text-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={business.tel} className="mt-7 block rounded-2xl border-l-4 border-red bg-navy p-5 font-bold text-white">
                Need a vehicle moved? <span className="text-red">Call {business.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Collection to delivery — alternating features */}
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>From Collection Point to Final Destination</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                Arranged Around the Locations You Provide
              </h2>
              <p className="mt-4 leading-7 text-navy/70">
                We can discuss collection from a home, private address, garage, dealership, workplace or another
                suitable location. The vehicle can then be transported to the agreed destination.
              </p>
            </div>
            <div className="space-y-10">
              {collectionFeatures.map((feature, i) => (
                <div key={feature.heading} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={`fade-up relative min-h-[260px] overflow-hidden rounded-3xl sm:min-h-[320px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image src={feature.image} alt={feature.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" quality={65} className="object-cover" />
                  </div>
                  <div className="fade-up">
                    <Eyebrow>{feature.eyebrow}</Eyebrow>
                    <h3 className="mb-4 text-2xl font-extrabold text-navy sm:text-3xl">{feature.heading}</h3>
                    <p className="leading-7 text-navy/70">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle types — flat divided list */}
        <section className="py-12 sm:py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>Transport for Cars, Vans and Difficult-to-Move Vehicles</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                Suitable Cars and Light Vans, Including Vehicles That Won&rsquo;t Move Easily
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {vehicleTypes.map((v) => (
                <div key={v.title} className="fade-up flex gap-5 border-b border-navy/10 pb-7">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red/10 text-xl text-red">
                    <i className={v.icon} />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-bold text-navy">{v.title}</h3>
                    <p className="leading-7 text-navy/70">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When needed — numbered checklist */}
        <section className="bg-navy py-12 text-white sm:py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>Not Just After a Breakdown</Eyebrow>
              <h2 className="text-3xl font-extrabold sm:text-4xl">When Your Vehicle Needs to Be Moved</h2>
              <p className="mt-4 leading-7 text-white/70">
                Vehicle transport can be useful in many situations. You may need a vehicle relocation service when:
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {whenNeeded.map((item, i) => (
                <div key={item} className="fade-up flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.06] p-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red/20 text-sm font-extrabold text-red">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-7 text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="fade-up mx-auto mt-8 max-w-3xl text-center leading-7 text-white/70">
              If you need to transport a broken down car, our{" "}
              <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                vehicle breakdown recovery
              </Link>{" "}
              team can also discuss whether recovery or planned vehicle transport is more appropriate.
            </p>
          </div>
        </section>

        {/* Transport vs recovery */}
        <section className="py-12 sm:py-16">
          <div className="container-site grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up">
              <Eyebrow>Transport or Recovery? We Can Help With Both</Eyebrow>
              <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">Two Related but Different Services</h2>
              <div className="space-y-4 leading-7 text-navy/70">
                <p>
                  Vehicle transport and vehicle recovery are related but they are not always the same service.
                  Vehicle transport is generally planned in advance to move a vehicle from one agreed location to
                  another.
                </p>
                <p>
                  Vehicle{" "}
                  <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                    recovery
                  </Link>{" "}
                  is normally required when a vehicle has broken down, been involved in an{" "}
                  <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">
                    accident
                  </Link>{" "}
                  or cannot safely continue its journey. FSR Recovery Group provides both options for suitable
                  situations.
                </p>
              </div>
            </div>
            <div className="fade-up rounded-3xl border border-navy/10 bg-slate-50 p-8">
              <h3 className="mb-5 text-lg font-bold text-navy">For More Information, See Our Dedicated Pages</h3>
              <div className="grid gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.key}
                    href={getServiceNavigation(s.key).href}
                    className="flex items-center justify-between rounded-2xl border border-navy/10 bg-white px-5 py-4 font-bold text-navy transition hover:-translate-y-0.5 hover:border-red/40 hover:shadow-md"
                  >
                    <span><i className={`${s.icon} mr-3 text-red`} />{s.label}</span>
                    <i className="fa-solid fa-arrow-right text-red" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process — vertical timeline */}
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>Simple Process</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">A Simple Four-Step Transport Process</h2>
            </div>
            <div className="mx-auto max-w-2xl">
              {processSteps.map((step, i) => (
                <div key={step.n} className="fade-up relative flex gap-6 pb-7 last:pb-0">
                  {i < processSteps.length - 1 && (
                    <span className="absolute left-6 top-14 h-[calc(100%-2.5rem)] w-px -translate-x-1/2 bg-navy/15" aria-hidden="true" />
                  )}
                  <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red text-lg font-extrabold text-white">
                    {step.n}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="mb-1.5 text-xl font-bold text-navy">{step.title}</h3>
                    <p className="leading-7 text-navy/70">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <ContactButtons callLabel="Request a Transport Quote" whatsappLabel="WhatsApp Your Details" />
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-12 sm:py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-8 max-w-3xl text-center">
              <Eyebrow>Serving Darlington and the Wider Road Network</Eyebrow>
              <h2 className="mb-4 text-3xl font-extrabold text-navy sm:text-4xl">
                A Local Base With Wider Road Coverage
              </h2>
              <div className="space-y-4 text-left leading-7 text-navy/70">
                <p>
                  FSR Recovery Group operates from Darlington and provides vehicle recovery and transport support
                  across the surrounding area and wider road network, including{" "}
                  <Link href="/areas/durham" className="font-semibold text-red hover:underline">
                    Durham
                  </Link>
                  ,{" "}
                  <Link href="/areas/newcastle" className="font-semibold text-red hover:underline">
                    Newcastle
                  </Link>
                  ,{" "}
                  <Link href="/areas/middlesbrough" className="font-semibold text-red hover:underline">
                    Middlesbrough
                  </Link>{" "}
                  and{" "}
                  <Link href="/areas/barnard-castle" className="font-semibold text-red hover:underline">
                    Barnard Castle
                  </Link>
                  .
                </p>
                <p>
                  Local requirements can include vehicle transport Darlington, car transport Darlington, vehicle
                  collection and delivery, and transport to suitable garages or other destinations. Our wider road
                  coverage also connects with routes including the A1(M), A66, A67, A68, A167 and A19. Dedicated{" "}
                  <Link href="/areas" className="font-semibold text-red hover:underline">
                    route and area pages
                  </Link>{" "}
                  provide more specific information where relevant.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="fade-up mb-3 text-sm font-extrabold uppercase tracking-wide text-navy/60">Main Roads</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {roadLinks.map((road) => (
                    <Link
                      key={road.href}
                      href={road.href}
                      className="fade-up flex items-center justify-between rounded-2xl border border-navy/10 bg-slate-50 px-5 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:border-red/40 hover:bg-white hover:shadow-md"
                    >
                      <span><i className="fa-solid fa-road mr-3 text-red" />{road.label}</span>
                      <i className="fa-solid fa-arrow-right text-red" />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="fade-up mb-3 text-sm font-extrabold uppercase tracking-wide text-navy/60">Towns We Cover</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {townLinks.map((town) => (
                    <Link
                      key={town.href}
                      href={town.href}
                      className="fade-up flex items-center justify-between rounded-2xl border border-navy/10 bg-slate-50 px-5 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:border-red/40 hover:bg-white hover:shadow-md"
                    >
                      <span><i className="fa-solid fa-location-dot mr-3 text-red" />{town.label}</span>
                      <i className="fa-solid fa-arrow-right text-red" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us — stacked list */}
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>Why Drivers Choose Us</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Why Drivers Choose FSR Recovery Group</h2>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {whyChoose.map((item) => (
                <div key={item.title} className="fade-up flex items-start gap-5 rounded-2xl border-l-4 border-red bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-red/10 text-lg text-red">
                    <i className={item.icon} />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-bold text-navy">{item.title}</h3>
                    <p className="leading-7 text-navy/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-16">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-10 text-center">
              <Eyebrow>Common Questions</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Vehicle Transport Questions, Answered</h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-24">
          <Image
            src="/images/vehicle-transport-car-delivery.webp"
            alt="Vehicle secured on a flatbed truck ready for transport"
            fill
            sizes="100vw"
            quality={65}
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-navy/90" />
          <div className="container-site fade-up text-center">
            <Eyebrow>Ready to Move Your Vehicle?</Eyebrow>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Arrange Professional Vehicle Transport</h2>
            <p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">
              If you need a vehicle transport service for a car or suitable van, contact FSR Recovery Group with
              your vehicle details, collection location and destination. We can discuss your requirements and the
              most suitable transport or recovery option.
            </p>
            <div className="flex justify-center">
              <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp FSR Recovery Group" />
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
