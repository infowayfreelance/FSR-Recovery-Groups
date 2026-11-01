import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardGrid, ContactButtons, Eyebrow, FaqAccordion, type ServiceCard, type ServiceFaq } from "@/components/ServicePage";
import { business } from "@/data/business";
import { businessEntityRef, breadcrumbList, SITE_URL } from "@/data/schema";

const title = "Bishop Auckland Breakdown & Recovery | FSR Recovery Group";
const description =
  "FSR Recovery Group provides 24/7 breakdown recovery and roadside assistance in Bishop Auckland and surrounding areas, including the A688, A689, A68 and A167. Call or WhatsApp for help.";
const path = "/areas/bishop-auckland";

const heroImage = "/images/bishop-auckland-car-recovery-hero.webp";
const heroImageAlt = "Burgundy SUV secured on a flatbed recovery truck overlooking a northern English town";

const ogTitle = "Breakdown Recovery Bishop Auckland | FSR Recovery Group";
const ogDescription =
  "Need breakdown recovery in Bishop Auckland? FSR Recovery Group offers 24/7 vehicle recovery and roadside assistance for cars and light vans. Call for help.";
const ogImage = "/images/bishop-auckland-breakdown-recovery-og.jpg";
const ogImageAlt = "Burgundy SUV secured on a flatbed recovery truck overlooking a northern English town.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: path,
    type: "website",
    siteName: business.name,
    locale: "en_GB",
    images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [{ url: ogImage, alt: ogImageAlt }],
  },
};

const problems: ServiceCard[] = [
  {
    icon: "fa-solid fa-car-battery",
    title: "Flat or Weak Battery",
    text: (
      <>
        A flat battery can leave your vehicle unable to start. Our{" "}
        <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">
          jump start service
        </Link>{" "}
        may be suitable where the vehicle and situation allow a safe roadside start.
      </>
    ),
  },
  {
    icon: "fa-solid fa-circle-notch",
    title: "Puncture or Tyre Damage",
    text: (
      <>
        A puncture can bring your journey to an unexpected stop. Where appropriate,{" "}
        <Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">
          flat tyre assistance or spare tyre change
        </Link>{" "}
        support may be available.
      </>
    ),
  },
  {
    icon: "fa-solid fa-gears",
    title: "Mechanical or Electrical Breakdown",
    text: (
      <>
        Engine, electrical, clutch and other mechanical faults can prevent a vehicle from continuing safely. In
        these situations,{" "}
        <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
          car recovery or vehicle breakdown recovery
        </Link>{" "}
        may be required.
      </>
    ),
  },
  {
    icon: "fa-solid fa-temperature-high",
    title: "Vehicle Overheating",
    text: "If your vehicle starts overheating, continuing to drive can cause further damage. Stop somewhere safe and contact us for suitable assistance.",
  },
  {
    icon: "fa-solid fa-gas-pump",
    title: "Running Out of Fuel",
    text: (
      <>
        Running out of fuel can leave you stranded away from home.{" "}
        <Link href="/services/refueling" className="font-semibold text-red hover:underline">
          Emergency fuel delivery
        </Link>{" "}
        may be available for suitable situations.
      </>
    ),
  },
  {
    icon: "fa-solid fa-car-burst",
    title: "Accident Damage",
    text: (
      <>
        A collision can leave a vehicle unsafe or unsuitable to drive. Our{" "}
        <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">
          accident recovery service
        </Link>{" "}
        can assist with suitable vehicles once the immediate accident situation is safe.
      </>
    ),
  },
  {
    icon: "fa-solid fa-truck-monster",
    title: "Vehicle Stuck Off the Road",
    text: (
      <>
        If a suitable vehicle becomes stuck on difficult ground, a{" "}
        <Link href="/services/winch-out" className="font-semibold text-red hover:underline">
          vehicle winch out
        </Link>{" "}
        may be appropriate depending on access, position and conditions.
      </>
    ),
  },
];

const steps: { n: string; title: string; text: string }[] = [
  { n: "1", title: "Contact Us", text: "Call or WhatsApp FSR Recovery Group and tell us where you are." },
  { n: "2", title: "Share Your Location", text: "Give us your exact location, direction of travel and, where possible, a nearby road, landmark or location marker." },
  { n: "3", title: "Explain the Problem", text: "Tell us what happened and provide your vehicle make, model and type." },
  { n: "4", title: "Discuss the Right Assistance", text: "We can discuss whether suitable roadside assistance, recovery or another service is appropriate for your situation." },
  { n: "5", title: "Arrange Recovery if Required", text: "If your vehicle cannot safely continue, suitable vehicle recovery can be arranged to an agreed destination." },
];

const recoveryServices: { title: string; text: string; icon: string; key: string }[] = [
  { key: "vehicle-breakdown-recovery", title: "Vehicle Breakdown Recovery", text: "Recovery for suitable cars and light vans that cannot safely continue after a breakdown.", icon: "fa-solid fa-truck-ramp-box" },
  { key: "roadside-assistance", title: "Roadside Assistance", text: "Practical assistance for suitable vehicle problems that may be dealt with safely at the roadside.", icon: "fa-solid fa-screwdriver-wrench" },
  { key: "jumpstart-services", title: "Jump Start Service", text: "Battery-starting assistance when a flat or weak battery prevents a suitable vehicle from starting.", icon: "fa-solid fa-car-battery" },
  { key: "accident-emergency-assistance", title: "Accident Recovery", text: "Recovery for suitable vehicles following a road traffic accident when the vehicle cannot safely continue.", icon: "fa-solid fa-car-burst" },
  { key: "winch-out", title: "Vehicle Winch Out", text: "Winching assistance for suitable vehicles that have become stuck on difficult ground.", icon: "fa-solid fa-truck-monster" },
  { key: "changing-spare-tyre", title: "Spare Tyre Change", text: "Assistance when a suitable spare tyre is available following a puncture or tyre problem.", icon: "fa-solid fa-circle-notch" },
  { key: "refueling", title: "Emergency Fuel Delivery", text: "Fuel delivery for suitable situations when a driver has run out of fuel.", icon: "fa-solid fa-gas-pump" },
  { key: "vehicle-transporting", title: "Vehicle Transport", text: "Planned transportation of suitable cars and light vans between agreed locations.", icon: "fa-solid fa-truck" },
];

const whyChoose: ServiceCard[] = [
  { icon: "fa-solid fa-clock", title: "24/7 Recovery Support", text: "Vehicle problems can happen at any time. FSR Recovery Group provides recovery assistance 24 hours a day for suitable situations." },
  { icon: "fa-solid fa-map-location-dot", title: "Local Area Coverage", text: "We provide local vehicle recovery across Bishop Auckland and surrounding areas, including relevant sections of the local road network." },
  { icon: "fa-solid fa-van-shuttle", title: "Cars and Light Vans", text: "Our recovery services are available for suitable cars and light commercial vans." },
  {
    icon: "fa-solid fa-list-check",
    title: "Multiple Recovery Options",
    text: "From breakdown assistance and roadside recovery to accident recovery, jump starts, tyre assistance, fuel delivery, winch-out recovery and vehicle transport.",
  },
  { icon: "fa-solid fa-comments", title: "Clear Communication", text: "Tell us your exact location, vehicle details and what has happened. This helps us understand your requirements and discuss the appropriate recovery option." },
];

const faqs: ServiceFaq[] = [
  { question: "Do you provide breakdown recovery in Bishop Auckland?", answer: "Yes. FSR Recovery Group provides breakdown recovery in Bishop Auckland for suitable cars and light vans." },
  { question: "Can you provide car recovery in Bishop Auckland?", answer: "Yes. Our car recovery service is available for suitable vehicles that cannot safely continue their journey." },
  { question: "Do you provide roadside assistance?", answer: "Yes. Roadside assistance may be available for suitable vehicle problems that can be safely dealt with at the roadside." },
  { question: "Are you available 24/7?", answer: "Yes. FSR Recovery Group provides 24 hour recovery and roadside assistance for suitable situations." },
  { question: "Can you recover a vehicle from the A688?", answer: "We provide recovery assistance across relevant sections of the A688 within our service coverage. Give us your exact location and direction of travel so we can confirm availability." },
  { question: "Can you help if I break down on the A689?", answer: "Yes. Contact us with your exact location, vehicle details and the problem you are experiencing so we can discuss the appropriate assistance." },
  { question: "Can you recover a vehicle after an accident?", answer: "Yes. Our accident recovery service can assist with suitable vehicles following a collision once the immediate accident situation is safe." },
  { question: "Can you help with a flat battery?", answer: "Yes. A jump start may be suitable when a flat or weak battery is preventing your vehicle from starting." },
  { question: "Can you recover a vehicle from a rural road?", answer: "Suitable vehicles may be recoverable from rural locations depending on their position, condition and access. Provide your exact location when contacting us." },
  { question: "Can you recover a van?", answer: "Yes. We provide van recovery for suitable light commercial vehicles." },
  { question: "Can you take my vehicle to a garage?", answer: "Yes. Where suitable, a recovered vehicle can be transported to an agreed garage, home, body shop or other suitable destination." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }, { name: "Bishop Auckland", path }]),
    {
      "@type": "Service",
      name: "Bishop Auckland Breakdown & Recovery",
      serviceType: "Vehicle Breakdown Recovery and Roadside Assistance",
      url: `${SITE_URL}${path}`,
      description: "24/7 breakdown recovery and roadside assistance for suitable cars and light vans in Bishop Auckland and surrounding areas.",
      areaServed: { "@type": "City", name: "Bishop Auckland" },
      provider: businessEntityRef,
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ],
};

export default function BishopAucklandAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        {/* Hero */}
        <section className="service-hero relative isolate min-h-[560px] overflow-hidden bg-navy text-white">
          <Image src={heroImage} alt={heroImageAlt} fill preload fetchPriority="high" quality={65} sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
          <div className="container-site flex min-h-[560px] items-center py-16">
            <div className="fade-up max-w-3xl">
              <Eyebrow>Bishop Auckland</Eyebrow>
              <h1 className="text-3xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">Bishop Auckland Breakdown &amp; Recovery</h1>
              <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">
                FSR Recovery Group provides 24/7 breakdown recovery and vehicle recovery for drivers in Bishop
                Auckland and surrounding areas. We help with common vehicle problems, accidents and roadside
                emergencies for suitable cars and light vans.
              </p>
              <p className="mb-6 max-w-2xl text-base leading-7 text-white/70">
                If your vehicle has stopped unexpectedly, call or WhatsApp us with your exact location, vehicle
                details and what has happened.
              </p>
              <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp Us" />
            </div>
          </div>
        </section>

        {/* Local Breakdown Recovery in Bishop Auckland */}
        <section className="py-16 sm:py-24">
          <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up relative order-2 min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[360px] lg:order-1">
              <Image
                src="/images/bishop-auckland-jumpstart-residential-street.webp"
                alt="Technician jump-starting a car battery on a residential street near Bishop Auckland"
                fill
                quality={65}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="fade-up order-1 lg:order-2">
              <Eyebrow>Local Coverage</Eyebrow>
              <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">Local Breakdown Recovery in Bishop Auckland</h2>
              <div className="space-y-4 leading-7 text-navy/70">
                <p>
                  A vehicle breakdown can happen on a town road, residential street or while travelling between
                  Bishop Auckland and nearby areas. When your vehicle cannot safely continue, getting suitable
                  assistance is important.
                </p>
                <p>
                  Our{" "}
                  <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                    breakdown recovery service in Bishop Auckland
                  </Link>{" "}
                  is available for suitable cars and light vans that have suffered a mechanical, electrical or other
                  vehicle problem.
                </p>
                <p>
                  We provide car breakdown recovery, vehicle breakdown assistance, emergency breakdown recovery and{" "}
                  <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
                    roadside assistance
                  </Link>{" "}
                  depending on the situation.
                </p>
                <p>
                  If a roadside solution is suitable, we can discuss the available assistance. If the vehicle cannot
                  safely continue, vehicle recovery can be arranged to an agreed destination.
                </p>
                <p>
                  We also provide recovery support to nearby towns including{" "}
                  <Link href="/areas/durham" className="font-semibold text-red hover:underline">
                    Durham
                  </Link>{" "}
                  and{" "}
                  <Link href="/areas/barnard-castle" className="font-semibold text-red hover:underline">
                    Barnard Castle
                  </Link>
                  .
                </p>
                <p>
                  For drivers searching for 24 hour breakdown recovery, 24/7 vehicle recovery or a local breakdown
                  recovery service,{" "}
                  <Link href="/contact" className="font-semibold text-red hover:underline">
                    contact FSR Recovery Group
                  </Link>{" "}
                  with your location and vehicle details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Across Bishop Auckland's Main Roads */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up">
              <Eyebrow>Key Routes</Eyebrow>
              <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">Recovery Across Bishop Auckland&rsquo;s Main Roads</h2>
              <div className="space-y-4 leading-7 text-navy/70">
                <p>
                  Bishop Auckland is connected to surrounding areas by several important local and regional routes,
                  including the A688, A689,{" "}
                  <Link href="/areas/a68" className="font-semibold text-red hover:underline">
                    A68
                  </Link>{" "}
                  and{" "}
                  <Link href="/areas/a167" className="font-semibold text-red hover:underline">
                    A167
                  </Link>
                  .
                </p>
                <p>
                  These routes can take drivers between Bishop Auckland, surrounding County Durham locations such as{" "}
                  <Link href="/areas/durham" className="font-semibold text-red hover:underline">
                    Durham
                  </Link>{" "}
                  and{" "}
                  <Link href="/areas/barnard-castle" className="font-semibold text-red hover:underline">
                    Barnard Castle
                  </Link>
                  , and the wider regional road network. A vehicle problem can therefore occur on a busy route, a
                  local connection or a quieter section of road.
                </p>
                <p>FSR Recovery Group provides recovery assistance across relevant roads within our service coverage.</p>
                <p>
                  If you break down on the A688, A689, A68 or A167, provide your exact location and direction of
                  travel when you contact us. This helps us understand where your vehicle is and what type of
                  assistance may be suitable.
                </p>
                <p>
                  For more specific route information, see our{" "}
                  <Link href="/areas" className="font-semibold text-red hover:underline">
                    dedicated road recovery pages
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="fade-up relative min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[360px]">
              <Image
                src="/images/bishop-auckland-roadside-tyre-change.webp"
                alt="Technician changing a wheel at the roadside on a rural road near Bishop Auckland"
                fill
                quality={65}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Common Breakdown Problems in the Area */}
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>When You May Need Us</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Common Breakdown Problems in the Area</h2>
              <p className="mt-4 leading-7 text-navy/70">
                Vehicle problems can happen without warning. Some may be suitable for roadside assistance, while
                others require full vehicle recovery.
              </p>
            </div>
            <CardGrid cards={problems} />
          </div>
        </section>

        {/* How FSR Helps After a Breakdown */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site">
            <div className="fade-up mx-auto mb-14 max-w-3xl text-center">
              <Eyebrow>Simple Process</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">How FSR Helps After a Breakdown</h2>
              <p className="mt-4 leading-7 text-navy/70">
                When you need roadside assistance in Bishop Auckland, the first step is to give us enough
                information to understand your situation.
              </p>
            </div>
            <div className="mx-auto max-w-2xl">
              {steps.map((step, i) => (
                <div key={step.n} className="fade-up relative flex gap-6 pb-10 last:pb-0">
                  {i < steps.length - 1 && (
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
          </div>
        </section>

        {/* Recovery Services Available */}
        <section className="bg-navy py-16 text-white sm:py-24">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>Full Range of Support</Eyebrow>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Recovery Services Available</h2>
              <p className="mt-4 leading-7 text-white/70">
                FSR Recovery Group provides a range of roadside and recovery services for drivers in the area.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {recoveryServices.map((s) => (
                <Link
                  key={s.key}
                  href={`/services/${s.key}`}
                  className="fade-up block rounded-3xl border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-1 hover:border-red/50"
                >
                  <i className={`${s.icon} mb-5 text-2xl text-red`} />
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p className="leading-7 text-white/70">{s.text}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-red">
                    Learn more <i className="fa-solid fa-arrow-right ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose FSR Recovery Group */}
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>Why Choose Us</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Why Choose FSR Recovery Group?</h2>
            </div>
            <CardGrid cards={whyChoose} />
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>Common Questions</Eyebrow>
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Bishop Auckland Breakdown Recovery FAQs</h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28">
          <Image src="/images/trackrecord-bg.jpg" alt="Recovery truck ready to respond" fill sizes="100vw" quality={65} className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-navy/90" />
          <div className="container-site fade-up text-center">
            <Eyebrow>Bishop Auckland</Eyebrow>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Need Breakdown Recovery in Bishop Auckland?</h2>
            <p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">
              If your vehicle has broken down, been involved in an accident or cannot safely continue its journey,
              contact FSR Recovery Group. Tell us your exact location, direction of travel, vehicle details and what
              has happened. We&rsquo;ll discuss the appropriate breakdown recovery, vehicle recovery or roadside
              assistance option for your situation.
            </p>
            <div className="flex justify-center">
              <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp Us" />
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
