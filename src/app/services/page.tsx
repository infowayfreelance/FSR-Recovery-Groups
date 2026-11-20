import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getServiceNavigation } from "@/data/services";
import { business } from "@/data/business";

const title = "Recovery & Towing Services Darlington | FSR Recovery";
const description = "Breakdown and accident recovery, jump starts, winch outs and vehicle transport from FSR Recovery Group in Darlington. Call or WhatsApp +44 7888 502989.";
const heading = "Recovery & Towing Services in Darlington & the North East";
const heroIntro = "From our base on Gladstone Street in Darlington, FSR Recovery Group provides breakdown recovery, accident recovery, roadside help and vehicle transport across County Durham, Teesside, Tyne and Wear and North Yorkshire.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", type: "website", siteName: business.name },
};

const services = [
  {
    icon: "fa-solid fa-truck-pickup",
    img: "/images/service-breakdown.jpg",
    alt: "Car being loaded onto a flatbed recovery truck at dusk",
    title: "24/7 Vehicle Breakdown Recovery",
    ...getServiceNavigation("vehicle-breakdown-recovery"),
    desc: "Round-the-clock recovery for any breakdown, wherever you are on the road, day or night.",
    features: [
      "Available 24 hours a day, every day of the year",
      "Flatbed recovery for cars, light vans, 4x4s and SUVs",
      "Transport to a garage, home address or storage location",
    ],
  },
  {
    icon: "fa-solid fa-triangle-exclamation",
    img: "/images/service-roadside.jpg",
    alt: "Technician checking a car engine roadside in the rain",
    title: "Roadside Assistance",
    ...getServiceNavigation("roadside-assistance"),
    desc: "On-the-spot help with minor faults so you can get back on your way without a full tow.",
    features: [
      "On-site assessment of the issue where possible",
      "Safe assistance on motorways, A-roads and residential streets",
      "Onward recovery arranged if the issue can't be fixed roadside",
    ],
  },
  {
    icon: "fa-solid fa-car-battery",
    img: "/images/service-jumpstart.jpg",
    alt: "Jump-starting a car battery on a frosty driveway",
    title: "Jumpstart Services",
    ...getServiceNavigation("jumpstart-services"),
    desc: "Flat battery? We'll try to get your engine running where you're parked.",
    features: [
      "Help for flat or failing batteries",
      "Basic diagnostic check of charging issues",
      "Recovery arranged if the vehicle cannot be restarted",
    ],
  },
  {
    icon: "fa-solid fa-truck-monster",
    img: "/images/service-winch.jpg",
    alt: "Land Rover being winched out of a ditch",
    title: "Winch Out",
    ...getServiceNavigation("winch-out"),
    desc: "Vehicle stuck in mud, soft ground or a ditch? We assess the situation and provide controlled winch-out assistance where safe access and conditions allow.",
    features: [
      "Equipped for off-road and difficult-access recovery",
      "Careful winching to avoid further vehicle damage",
      "Transport back to a hard surface or your chosen location",
    ],
  },
  {
    icon: "fa-solid fa-car-burst",
    img: "/images/service-accident.jpg",
    alt: "Technician inspecting a damaged car with a tow truck behind",
    title: "Accident Emergency Assistance",
    ...getServiceNavigation("accident-emergency-assistance"),
    desc: "Fast, careful recovery from the scene of a collision, handled with care.",
    features: [
      "Sensitive, professional handling at the scene",
      "Coordination with insurers, police or third parties on request",
      "Transport to a body shop, garage or storage compound",
    ],
  },
  {
    icon: "fa-solid fa-circle-dot",
    img: "/images/service-tyre.jpg",
    alt: "Technician fitting a spare wheel to a car",
    title: "Changing Spare Tyre",
    ...getServiceNavigation("changing-spare-tyre"),
    desc: "Quick, safe roadside tyre changes so a puncture doesn't leave you waiting around.",
    features: [
      "Fast roadside tyre swaps for cars and light vans",
      "Safe working practices on busy roads",
      "Advice on next steps if a replacement tyre is needed",
    ],
  },
  {
    icon: "fa-solid fa-gas-pump",
    img: "/images/service-refuel.jpg",
    alt: "Technician pouring fuel from a can into a car",
    title: "Refueling",
    ...getServiceNavigation("refueling"),
    desc: "Run out of fuel? We'll bring enough to get you safely to the nearest station.",
    features: [
      "Enough fuel to reach the nearest station",
      "Fuel brought to where you've stopped",
      "Available for petrol and diesel vehicles",
    ],
  },
  {
    icon: "fa-solid fa-truck-ramp-box",
    img: "/images/service-transport.jpg",
    alt: "Clean car strapped to a flatbed in a car park",
    title: "Vehicle Transporting",
    ...getServiceNavigation("vehicle-transporting"),
    desc: "Safe, secure transport for vehicles that can't be driven, over any distance.",
    features: [
      "Suitable for dealership transfers and personal moves",
      "Flexible scheduling to suit your timeline",
      "Secure strapping and careful loading throughout",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Get in Touch",
    desc: "Call or message us on WhatsApp with your location and a quick description of the problem.",
    icon: "fa-solid fa-phone",
  },
  {
    step: "02",
    title: "Share Your Details",
    desc: "Tell us your vehicle type, pickup location and destination so we can plan the right response.",
    icon: "fa-solid fa-location-dot",
  },
  {
    step: "03",
    title: "We Reach You",
    desc: "Our team heads to your location and handles your vehicle with care from the moment we arrive.",
    icon: "fa-solid fa-truck-pickup",
  },
  {
    step: "04",
    title: "Safe Drop-Off",
    desc: "We deliver your vehicle to your chosen garage, home or storage location and keep you updated throughout.",
    icon: "fa-solid fa-circle-check",
  },
];

const faqs = [
  {
    q: "How quickly can you reach me?",
    a: "Response times depend on your location and current job volume, but we prioritise urgent roadside enquiries and aim to reach you as quickly as possible.",
  },
  {
    q: "Do you cover areas outside the city?",
    a: "Yes. We regularly cover the wider region including motorways, rural roads and out-of-town areas. Get in touch if you are unsure whether your location is covered.",
  },
  {
    q: "Can you give me a price over the phone?",
    a: "We can give you a clear idea of cost once we know your vehicle type, location and destination. Call or WhatsApp us with the details for an accurate quote.",
  },
  {
    q: "Is my vehicle insured during recovery?",
    a: "Yes, we are fully insured and take care to load, transport and unload every vehicle safely from start to finish.",
  },
  {
    q: "Which areas do you cover?",
    a: "We're based on Gladstone Street in Darlington and cover County Durham, Teesside, Tyne and Wear and North Yorkshire, including Durham, Newcastle, Sunderland, Middlesbrough, Peterlee, Bishop Auckland, Barnard Castle, Northallerton, Thirsk, Ripon and Catterick, plus the A1(M), A66, A19, A167, A67 and A68. Call with your location if you're not sure.",
  },
  {
    q: "Where can you take my vehicle?",
    a: "Wherever you need it to go: your usual garage, a body repair centre, your home, a storage location or another address you agree with us when you call.",
  },
  {
    q: "What vehicles do you recover?",
    a: "Cars, light vans, 4x4s and SUVs. Tell us the make and model, and whether it's automatic, electric or hybrid, so we can plan how to load it safely.",
  },
  {
    q: "Can you deal with my insurer?",
    a: "On request, we can liaise with your insurer or their recovery coordinator about where the vehicle should go.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://fsrrecoverygroups.co.uk/services#webpage",
      name: heading,
      url: "https://fsrrecoverygroups.co.uk/services",
      isPartOf: { "@id": "https://fsrrecoverygroups.co.uk/#website" },
      about: { "@id": "https://fsrrecoverygroups.co.uk/#business" },
      breadcrumb: { "@id": "https://fsrrecoverygroups.co.uk/services#breadcrumb" },
      hasPart: {
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://fsrrecoverygroups.co.uk${s.href}`,
          name: s.title,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://fsrrecoverygroups.co.uk/services#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://fsrrecoverygroups.co.uk" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://fsrrecoverygroups.co.uk/services" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://fsrrecoverygroups.co.uk/services#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Header activePath="/services" announcement="24/7 Emergency Towing & Recovery – Call Now" />

      <main>
        {/* Page Banner */}
        <section className="relative isolate overflow-hidden text-white">
          <Image
            src="/images/service-roadside.webp"
            alt="Technician checking a car engine roadside in the rain"
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
              <i className="fa-solid fa-screwdriver-wrench flex-shrink-0"></i> Our Services
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              {heroIntro}
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

        {/* Services Grid */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">What We Offer</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Complete Roadside &amp; Recovery Support</h2>
              <p className="text-navy/70">From a flat battery to a full accident recovery, our team handles every job with the same care and attention.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article id={service.key} key={service.title} className="service-card fade-up flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white">
                  <Image src={service.img} alt={service.alt} width={900} height={600} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="h-48 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red/10">
                      <i className={`${service.icon} text-xl text-red`}></i>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-navy">
                      {service.available ? <Link href={service.href} className="transition hover:text-red">{service.title}</Link> : service.title}
                    </h3>
                    <p className="mb-4 text-navy/70">{service.desc}</p>
                    <ul className="mb-6 flex-1 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-navy/70">
                          <i className="fa-solid fa-check mt-1 text-red"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex gap-3">
                      <a
                        href={business.tel}
                        className="flex-1 rounded-full bg-navy px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-navy-light"
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
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-site space-y-12">
            <div className="fade-up">
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Which Service Do You Need?</h2>
              <p className="mb-5 text-navy/70">Not sure what to ask for? Tell us what’s happened and we’ll send the right help:</p>
              <ul className="list-disc space-y-3 pl-5 leading-7 text-navy/70">
                <li><strong>Car won’t start</strong> → <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">jump start</Link>. If it still won’t start, we arrange <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">breakdown recovery</Link>.</li>
                <li><strong>Flat tyre and you have a usable spare</strong> → <Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">spare tyre change</Link>.</li>
                <li><strong>Run out of fuel</strong> → <Link href="/services/refueling" className="font-semibold text-red hover:underline">emergency refuelling</Link>.</li>
                <li><strong>Car can’t be driven safely</strong> → <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">breakdown recovery</Link> to a garage, your home or another agreed address.</li>
                <li><strong>After a collision</strong> → <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">accident recovery</Link> once the scene is safe.</li>
                <li><strong>Stuck in mud, snow or a ditch</strong> → <Link href="/services/winch-out" className="font-semibold text-red hover:underline">winch out</Link>.</li>
                <li><strong>Planned move, non-runner or dealership transfer</strong> → <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">vehicle transporting</Link>.</li>
              </ul>
            </div>
            <div className="fade-up">
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Recovery Across Darlington and the North East</h2>
              <p className="leading-7 text-navy/70">
                We’re based at 135 Gladstone Street, Darlington, and recover vehicles from homes, car parks, industrial estates and the roadside across the region. Towns we cover include{" "}
                <Link href="/" className="font-semibold text-red hover:underline">Darlington</Link>,{" "}
                <Link href="/areas/durham" className="font-semibold text-red hover:underline">Durham</Link>,{" "}
                <Link href="/areas/newcastle" className="font-semibold text-red hover:underline">Newcastle</Link>,{" "}
                <Link href="/areas/sunderland" className="font-semibold text-red hover:underline">Sunderland</Link>,{" "}
                <Link href="/areas/middlesbrough" className="font-semibold text-red hover:underline">Middlesbrough</Link>,{" "}
                <Link href="/areas/peterlee" className="font-semibold text-red hover:underline">Peterlee</Link>,{" "}
                <Link href="/areas/bishop-auckland" className="font-semibold text-red hover:underline">Bishop Auckland</Link>,{" "}
                <Link href="/areas/barnard-castle" className="font-semibold text-red hover:underline">Barnard Castle</Link>,{" "}
                <Link href="/areas/northallerton" className="font-semibold text-red hover:underline">Northallerton</Link>,{" "}
                <Link href="/areas/thirsk" className="font-semibold text-red hover:underline">Thirsk</Link>,{" "}
                <Link href="/areas/ripon" className="font-semibold text-red hover:underline">Ripon</Link>,{" "}
                <Link href="/areas/catterick" className="font-semibold text-red hover:underline">Catterick</Link>. On the main roads we cover the{" "}
                <Link href="/areas/a1m" className="font-semibold text-red hover:underline">A1(M)</Link>,{" "}
                <Link href="/areas/a66" className="font-semibold text-red hover:underline">A66</Link>,{" "}
                <Link href="/areas/a19" className="font-semibold text-red hover:underline">A19</Link>,{" "}
                <Link href="/areas/a167" className="font-semibold text-red hover:underline">A167</Link>,{" "}
                <Link href="/areas/a67" className="font-semibold text-red hover:underline">A67</Link>,{" "}
                <Link href="/areas/a68" className="font-semibold text-red hover:underline">A68</Link>.
              </p>
              <p className="mt-4 leading-7 text-navy/70">
                If you’re not sure whether we cover your location, call or WhatsApp +44 7888 502989 with the postcode or a shared location.{" "}
                <Link href="/areas" className="font-semibold text-red hover:underline">See all areas we cover</Link>.
              </p>
            </div>
            <div className="fade-up">
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Vehicles We Recover</h2>
              <p className="leading-7 text-navy/70">We recover cars, light vans, 4x4s and SUVs. When you call, tell us the make and model, whether it’s manual, automatic, electric or hybrid, and whether the wheels turn and the steering is free. That helps us plan how to load it safely and send the right recovery vehicle.</p>
            </div>
            <div className="fade-up">
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Staying Safe While You Wait</h2>
              <p className="leading-7 text-navy/70">
                If you break down on a busy road, switch on your hazard lights and, if it’s safe, get everyone out on the side away from traffic and wait well back from the road, behind a barrier where there is one. On a motorway, don’t put out a warning triangle. If you can’t get out safely, stay in the vehicle with your seat belt on and call 999. Follow the{" "}
                <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">Highway Code breakdown advice</a>. For other warning signs, read{" "}
                <Link href="/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">car won’t start but the battery is fine</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-navy py-20 text-white">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red-dark">How It Works</p>
              <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">Simple From First Call to Drop-Off</h2>
              <p className="text-white/70">No confusing steps. Here is exactly what happens when you contact us.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="dark-feature-card fade-up relative p-7">
                  <span className="absolute top-5 right-6 text-3xl font-extrabold text-white/15">{item.step}</span>
                  <i className={`${item.icon} mb-5 text-3xl text-red`}></i>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-12 text-center">
              <p className="mb-3 font-bold text-red-dark">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="fade-up rounded-2xl border border-navy/10 p-6">
                  <h3 className="mb-2 flex items-start gap-2 font-bold text-navy">
                    <i className="fa-solid fa-circle-question mt-1 text-red"></i>
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
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need a Service Not Listed?</h2>
            <p className="mb-8 text-lg text-white/90">Get in touch and we will let you know how we can help with your specific situation.</p>
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </main>

      <Footer />
    </>
  );
}
