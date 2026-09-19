import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getServiceNavigation } from "@/data/services";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: { absolute: "Expert Vehicle Recovery Services You Can Trust" },
  description: "Need fast help? Our professional vehicle recovery services are just a call away. Get assistance today!",
  alternates: { canonical: "/services" },
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
      "Modern fleet of flatbed and recovery vehicles",
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
    desc: "Flat battery? We'll get your engine running again in minutes, anywhere you're parked.",
    features: [
      "Fast response for flat or failing batteries",
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
    desc: "Stuck in mud, sand, or a ditch? Our winches pull your vehicle free without further damage.",
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
    desc: "Fast, careful recovery from the scene of a collision, handled with care and full insurance.",
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
      "Fast response to minimise time stuck roadside",
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
];

export default function ServicesPage() {
  return (
    <>
      <Header activePath="/services" />

      <main>
        {/* Page Banner */}
        <section className="hero-bg text-white">
          <div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-screwdriver-wrench flex-shrink-0"></i> Our Services
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">
              Roadside Recovery &amp; Towing Services
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Practical, professional support for breakdowns, accidents and roadside emergencies across the region.
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
              <p className="mb-3 font-bold text-red">What We Offer</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Complete Roadside &amp; Recovery Support</h2>
              <p className="text-navy/70">From a flat battery to a full accident recovery, our team handles every job with the same care and attention.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article id={service.key} key={service.title} className="service-card fade-up flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white">
                  <Image src={service.img} alt={service.alt} width={900} height={600} className="h-48 w-full object-cover" />
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

        {/* How It Works */}
        <section className="bg-navy py-20 text-white">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red">How It Works</p>
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
              <p className="mb-3 font-bold text-red">Common Questions</p>
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
      </main>

      <Footer />
    </>
  );
}
