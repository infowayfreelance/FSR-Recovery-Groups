import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { ReviewsSlider } from "@/components/ReviewsSlider";
import { business } from "@/data/business";
import { getServiceNavigation } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: "Emergency Breakdown Recovery Darlington Available Now" },
  description: "Get reliable 24/7 breakdown recovery in Darlington. We're here to help—call us for immediate assistance!",
  alternates: { canonical: "/" },
  openGraph: {
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
    images: ["/images/fsr-open-graph.png"],
  },
};

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
    desc: "Stuck in mud, sand, or a ditch? Our winches pull your vehicle free without further damage.",
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
  {
    icon: "fa-solid fa-gauge-high",
    title: "Fast Response",
    desc: "A regional fleet means we're rarely far away, so help reaches you quickly wherever you've broken down.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Fully Insured",
    desc: "Every technician is trained and insured, handling your vehicle carefully from loading to drop-off.",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    title: "Fair, Upfront Pricing",
    desc: "No hidden fees or surprise call-outs. You'll always know the cost before we start.",
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
        <section className="home-hero-bg text-white">
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
                Need help at the roadside? We provide fast, reliable vehicle recovery, towing,
                accident assistance and vehicle transport across the region.
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
                alt="FSR Recovery Groups vehicle transported safely on a flatbed"
                width={1200}
                height={900}
                className="min-h-[360px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
            <div className="fade-up order-1 lg:order-2">
              <p className="mb-3 font-bold text-red">15+ Years of Roadside Support</p>
              <h2 className="mb-5 text-3xl font-extrabold text-navy lg:text-4xl">
                {business.name} — Here When You Need Us
              </h2>
              <p className="mb-6 leading-8 text-navy/70">
                We help drivers who need quick roadside support, safe vehicle transport or recovery
                after a breakdown. From non-starting cars to accident pickups, our aim is to make the
                process simple and stress-free.
              </p>
              <p className="mb-8 leading-8 text-navy/70">
                Our team handles everything from routine roadside callouts to complex accident recoveries,
                working with private drivers, fleet operators and insurance partners across the region.
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

        {/* ── Services (Dark Cards) ── */}
        <section id="services" className="bg-navy py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red">Services We Offer</p>
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
              <p className="mb-3 font-bold text-red">Why Drivers Call Us</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Simple, Safe and Reliable</h2>
              <p className="text-navy/70">No confusing steps. Call or message us and we&rsquo;ll explain the next move clearly.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-3">
              {whyChoose.map((item) => (
                <div key={item.title} className="fade-up rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5">
                    <i className={`${item.icon} text-3xl text-red`}></i>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-navy">{item.title}</h3>
                  <p className="text-navy/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews Slider ── */}
        <section className="overflow-hidden bg-white py-20">
          <div className="container-site fade-up mb-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-bold text-red">Customer Feedback</p>
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
              <p className="mb-3 font-bold text-red">Coverage</p>
              <h2 className="mb-5 text-3xl font-extrabold lg:text-4xl">Supporting Drivers Across the Region</h2>
              <p className="mb-8 leading-8 text-slate-400">
                Our fleet covers motorways, city streets and rural roads alike. Share your location and
                we&rsquo;ll guide you on the best recovery or roadside support option.
              </p>
              <div className="mb-8 flex flex-wrap gap-3 text-sm font-semibold">
                {areas.map((area) => (
                  <span key={area} className="rounded-full border border-red/40 bg-white/5 px-4 py-2 text-slate-200">
                    <i className="fa-solid fa-location-dot mr-2 text-xs text-red"></i>{area}
                  </span>
                ))}
              </div>
              <a href="/areas" className="inline-block rounded-full bg-red px-7 py-4 font-bold text-white transition hover:bg-red-dark">
                See Full Coverage Area <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div className="fade-up">
              <Image
                src="/images/home-roadside-2.jpg"
                alt="FSR Recovery technician providing roadside assistance"
                width={1200}
                height={900}
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ── Map ── */}
        <section className="bg-slate-50 py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-8 max-w-2xl text-center">
              <p className="mb-3 font-bold text-red">Find Us</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">{business.name} Location</h2>
            </div>
            <div className="fade-up w-full overflow-hidden rounded-3xl border border-navy/10 shadow-2xl" style={{ height: "420px" }}>
              <iframe
                src={GBP_MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`${business.name} Location`}
              />
            </div>
          </div>
        </section>

        {/* ── CTA Parallax ── */}
        <section className="cta-parallax-bg py-24 text-center text-white">
          <div className="container-site fade-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-red/40 bg-red/20 px-5 py-2 text-sm font-bold text-red">
              <i className="fa-solid fa-triangle-exclamation"></i> Stuck? Need Recovery Now?
            </p>
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">We Are Ready to Help</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Call {business.name} or message us on WhatsApp for immediate roadside assistance across the region.
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

      <Footer />
    </>
  );
}
