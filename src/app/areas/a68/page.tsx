import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow, SectionHeading, ContactButtons, FaqAccordion, type ServiceFaq } from "@/components/ServicePage";
import { business } from "@/data/business";

const title = "A68 Breakdown & Recovery Service | FSR";
const description = "24/7 breakdown recovery, roadside assistance and towing for drivers on the A68. Call or WhatsApp FSR Recovery Group with your location and vehicle details.";
const path = "/areas/a68";
const ogImage = "/images/about-tow.jpg";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: path,
    type: "website",
    siteName: business.name,
    images: [{ url: ogImage, alt: "Recovery vehicle on a rural moorland road" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage] },
};

const problems = [
  {
    title: "Mechanical Breakdown",
    icon: "fa-solid fa-gears",
    text: (
      <>
        A mechanical or electrical fault can leave your vehicle unable to continue safely. Where{" "}
        <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
          roadside assistance
        </Link>{" "}
        cannot resolve the problem,{" "}
        <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
          vehicle recovery
        </Link>{" "}
        may be required.
      </>
    ),
  },
  {
    title: "Flat Battery",
    icon: "fa-solid fa-car-battery",
    text: (
      <>
        A flat battery can leave you stranded without warning. Our{" "}
        <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">
          jump start service
        </Link>{" "}
        may be suitable where the vehicle and situation allow a safe roadside start.
      </>
    ),
  },
  {
    title: "Tyre Damage",
    icon: "fa-solid fa-circle-notch",
    text: (
      <>
        A puncture or damaged tyre can bring your journey to a sudden stop. If you have a suitable spare
        tyre, roadside assistance may be available.{" "}
        <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
          Vehicle recovery
        </Link>{" "}
        can also be arranged where required.
      </>
    ),
  },
  {
    title: "Vehicle Overheating",
    icon: "fa-solid fa-temperature-high",
    text: "If your vehicle starts overheating, continuing to drive may cause further damage. Stop somewhere safe and arrange suitable assistance rather than taking unnecessary risks.",
  },
  {
    title: "Running Out of Fuel",
    icon: "fa-solid fa-gas-pump",
    text: (
      <>
        Running out of fuel can leave you stranded, particularly when you are travelling through a less
        built-up section of the A68. Our{" "}
        <Link href="/services/refueling" className="font-semibold text-red hover:underline">
          emergency fuel delivery service
        </Link>{" "}
        can help in suitable situations.
      </>
    ),
  },
  {
    title: "Accident Recovery",
    icon: "fa-solid fa-car-burst",
    text: (
      <>
        If your vehicle has been involved in a collision and cannot safely continue,{" "}
        <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">
          accident recovery
        </Link>{" "}
        can be arranged once the scene is safe.
      </>
    ),
  },
  {
    title: "Vehicle Stuck or Off the Road",
    icon: "fa-solid fa-truck-monster",
    text: (
      <>
        A vehicle can leave the road because of difficult ground, weather or an unexpected incident. Our{" "}
        <Link href="/services/winch-out" className="font-semibold text-red hover:underline">
          winch-out service
        </Link>{" "}
        can assist with suitable vehicles that have become stuck in mud, a ditch, snow or other difficult
        ground.
      </>
    ),
  },
];

const a68Services = [
  {
    title: "Breakdown Recovery",
    href: "/services/vehicle-breakdown-recovery",
    icon: "fa-solid fa-truck-ramp-box",
    text: "Recovery for suitable cars and light vans that cannot safely continue their journey following a breakdown.",
  },
  {
    title: "Roadside Assistance",
    href: "/services/roadside-assistance",
    icon: "fa-solid fa-screwdriver-wrench",
    text: "On-the-spot assistance for suitable vehicle problems that may be resolved safely at your location.",
  },
  {
    title: "Jump Start Service",
    href: "/services/jumpstart-services",
    icon: "fa-solid fa-car-battery",
    text: "Battery jump-start assistance when a flat or weak battery prevents your vehicle from starting.",
  },
  {
    title: "Winch Out",
    href: "/services/winch-out",
    icon: "fa-solid fa-truck-monster",
    text: "Winching assistance for suitable vehicles that have become stuck in mud, a ditch, snow or difficult ground.",
  },
  {
    title: "Accident Recovery",
    href: "/services/accident-emergency-assistance",
    icon: "fa-solid fa-car-burst",
    text: "Vehicle recovery following a road traffic accident when the vehicle cannot safely continue.",
  },
  {
    title: "Spare Tyre Assistance",
    href: "/services/changing-spare-tyre",
    icon: "fa-solid fa-circle-notch",
    text: "Help with fitting a suitable spare tyre following a puncture or tyre problem.",
  },
  {
    title: "Emergency Fuel Delivery",
    href: "/services/refueling",
    icon: "fa-solid fa-gas-pump",
    text: "Fuel delivery when you have run out of fuel and need assistance to continue your journey.",
  },
  {
    title: "Vehicle Transport",
    href: "/services/vehicle-transporting",
    icon: "fa-solid fa-truck",
    text: "Planned transportation of suitable vehicles between agreed locations.",
  },
];

const whyChoose = [
  {
    title: "24/7 Recovery Support",
    icon: "fa-solid fa-clock",
    text: "Vehicle problems can happen at any time. FSR Recovery Group provides recovery assistance 24 hours a day, including nights and weekends.",
  },
  {
    title: "Coverage Across the A68",
    icon: "fa-solid fa-map-location-dot",
    text: (
      <>
        Our wider{" "}
        <Link href="/areas" className="font-semibold text-red hover:underline">
          service area
        </Link>{" "}
        includes relevant sections around Bishop Auckland and surrounding parts of County Durham and the
        Pennine fringe.
      </>
    ),
  },
  {
    title: "A Range of Recovery Services",
    icon: "fa-solid fa-list-check",
    text: "From breakdown recovery and roadside assistance to jump starts, tyre assistance, accident recovery, fuel delivery and vehicle transport.",
  },
  {
    title: "Support for Cars and Light Vans",
    icon: "fa-solid fa-car-side",
    text: "We provide recovery services for suitable cars and light vans. Tell us your vehicle details when you contact us so we can understand your requirements.",
  },
  {
    title: "Clear Communication",
    icon: "fa-solid fa-comments",
    text: "Provide your exact location, direction of travel and vehicle details when you call or message us. This helps us understand the situation and discuss the appropriate assistance.",
  },
];

const faqs: ServiceFaq[] = [
  {
    question: "Do you provide breakdown recovery on the A68?",
    answer: "Yes. FSR Recovery Group provides breakdown and vehicle recovery assistance across relevant sections of the A68 within our service coverage.",
  },
  {
    question: "Do you provide roadside assistance on the A68?",
    answer: "Yes. Depending on the vehicle problem and circumstances, roadside assistance may be available for suitable breakdown situations.",
  },
  {
    question: "Can you recover a car that has broken down on the A68?",
    answer: "Yes. We provide recovery for suitable cars and light vans that cannot safely continue their journey.",
  },
  {
    question: "Can you help with a flat battery on the A68?",
    answer: "Yes. Jump-start assistance may be available when the vehicle and situation are suitable.",
  },
  {
    question: "Can you help if I have a damaged tyre?",
    answer: "Yes. Spare tyre assistance may be available if you have a suitable spare tyre. Vehicle recovery can also be arranged where required.",
  },
  {
    question: "What should I do if my vehicle breaks down on the A68?",
    answer: "Move to a safe position if possible, switch on your hazard warning lights and identify your exact location and direction of travel. Then contact FSR Recovery Group with your vehicle details.",
  },
  {
    question: "Can you recover a vehicle after an accident on the A68?",
    answer: "Yes. We provide accident recovery assistance for suitable vehicles following a collision, once the scene is safe.",
  },
  {
    question: "Can you recover a vehicle that has left the road?",
    answer: "Yes. Winch-out recovery may be available for suitable vehicles that have become stuck in mud, a ditch, snow or difficult ground.",
  },
  {
    question: "Can you deliver fuel on the A68?",
    answer: "Yes. Emergency fuel delivery is available for suitable situations when you have run out of fuel.",
  },
  {
    question: "Are A68 recovery services available at night?",
    answer: "Yes. FSR Recovery Group provides 24/7 recovery assistance, including overnight and weekend callouts.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "A68 Breakdown & Recovery Service",
      description,
      serviceType: "Vehicle recovery and roadside assistance",
      provider: {
        "@type": "LocalBusiness",
        name: business.name,
        telephone: business.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.locality,
          postalCode: business.address.postalCode,
          addressCountry: business.address.countryCode,
        },
      },
      areaServed: { "@type": "Place", name: "A68" },
      url: `https://fsrrecoverygroups.co.uk${path}`,
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function A68AreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        {/* Hero */}
        <section className="service-hero relative isolate min-h-[560px] overflow-hidden bg-navy text-white">
          <Image src={ogImage} alt="Recovery vehicle on a rural moorland road" fill preload fetchPriority="high" sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
          <div className="container-site flex min-h-[560px] items-center py-16">
            <div className="fade-up max-w-3xl">
              <Eyebrow>A68</Eyebrow>
              <h1 className="text-3xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">A68 Breakdown &amp; Recovery Service</h1>
              <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">
                Need breakdown recovery on the A68? FSR Recovery Group provides 24/7 vehicle recovery,
                roadside assistance and towing support for drivers across the A68 sections covered by our
                team. Call or WhatsApp us with your exact location and vehicle details.
              </p>
              <ContactButtons dark callLabel="Call for Recovery" whatsappLabel="WhatsApp Us" />
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
                <span><i className="fa-solid fa-circle-check mr-2 text-red" />Available 24/7</span>
                <span><i className="fa-solid fa-circle-check mr-2 text-red" />Cars &amp; Light Vans</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reliable Breakdown Recovery on the A68 */}
        <section className="py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up space-y-4">
              <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">Reliable Breakdown Recovery on the A68</h2>
              <p className="leading-7 text-navy/70">
                Breaking down on the A68 can be stressful, especially when you are travelling through
                quieter rural sections or unfamiliar areas. A vehicle that cannot safely continue needs the
                right assistance, not an attempt to keep driving and make the problem worse.
              </p>
              <p className="leading-7 text-navy/70">
                FSR Recovery Group provides{" "}
                <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                  breakdown recovery
                </Link>{" "}
                and{" "}
                <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
                  roadside assistance
                </Link>{" "}
                for suitable cars and light vans travelling through our A68 coverage area. We can help with
                vehicle breakdowns, flat batteries, tyre problems, accidents, fuel issues and other
                situations where recovery or roadside assistance is required.
              </p>
              <p className="leading-7 text-navy/70">
                When you contact us, tell us your exact location, direction of travel, vehicle make and
                model, and what has happened. If you can see a nearby junction, landmark or location
                marker, include that information as well.
              </p>
            </div>
          </div>
        </section>

        {/* A68 Recovery Coverage */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up space-y-4">
              <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">A68 Recovery Coverage</h2>
              <p className="leading-7 text-navy/70">
                The A68 passes through a mixture of built-up areas and more rural sections as it travels
                north through County Durham and towards the Scottish Borders.
              </p>
              <p className="leading-7 text-navy/70">
                Our coverage includes relevant sections around{" "}
                <Link href="/areas/bishop-auckland" className="font-semibold text-red hover:underline">
                  Bishop Auckland
                </Link>{" "}
                and the surrounding areas, as well as rural stretches towards the Durham Dales and the
                Pennine fringe.
              </p>
              <p className="leading-7 text-navy/70">
                If you are unsure whether your exact position on the A68 is covered,{" "}
                <Link href="/contact" className="font-semibold text-red hover:underline">
                  contact FSR Recovery Group
                </Link>{" "}
                with your location and we can confirm availability.
              </p>
            </div>
          </div>
        </section>

        {/* Common A68 Breakdown Problems */}
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Know the Risks" title="Common A68 Breakdown Problems" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {problems.map((p) => (
                <article key={p.title} className="fade-up rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-xl">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red/15 text-xl text-red"><i className={p.icon} /></span>
                  <h3 className="mb-2 text-xl font-bold text-navy">{p.title}</h3>
                  <p className="leading-7 text-navy/70">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* A68 Recovery and Roadside Assistance Services */}
        <section className="bg-navy py-16 text-white sm:py-24">
          <div className="container-site">
            <div className="[&_h2]:!text-white [&_p:last-child]:!text-white/70">
              <SectionHeading
                eyebrow="Full Range of Support"
                title="A68 Recovery and Roadside Assistance Services"
                intro="FSR Recovery Group provides several recovery and roadside services for drivers travelling on the A68."
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {a68Services.map((s) => (
                <Link key={s.title} href={s.href} className="fade-up block rounded-3xl border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-1 hover:border-red/50">
                  <i className={`${s.icon} mb-5 text-2xl text-red`} />
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p className="leading-7 text-white/70">{s.text}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-red">Learn more <i className="fa-solid fa-arrow-right ml-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why Choose FSR Recovery Group for A68 Recovery?"
              intro="When you are stranded on the A68, you need clear communication and a recovery service that understands the situation."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item) => (
                <article key={item.title} className="fade-up rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-xl">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red/15 text-xl text-red"><i className={item.icon} /></span>
                  <h3 className="mb-2 text-xl font-bold text-navy">{item.title}</h3>
                  <p className="leading-7 text-navy/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What to Do If You Break Down */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up">
              <h2 className="mb-3 text-3xl font-extrabold text-navy sm:text-4xl">What to Do If You Break Down on the A68</h2>
              <p className="mb-6 leading-7 text-navy/70">Your safety should come first if your vehicle develops a problem on the A68.</p>
              <ol className="space-y-4">
                {[
                  "Move to a safe position away from moving traffic if you can do so safely.",
                  "Switch on your hazard warning lights.",
                  "Identify your exact location and direction of travel.",
                  "Note the nearest junction, landmark or location marker if available.",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red/10 text-sm font-extrabold text-red">{i + 1}</span>
                    <span className="pt-1 leading-7 text-navy/75">{step}</span>
                  </li>
                ))}
                <li className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red/10 text-sm font-extrabold text-red">5</span>
                  <span className="pt-1 leading-7 text-navy/75">
                    <Link href="/contact" className="font-semibold text-red hover:underline">
                      Contact FSR Recovery Group
                    </Link>{" "}
                    and explain the problem.
                  </span>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red/10 text-sm font-extrabold text-red">6</span>
                  <span className="pt-1 leading-7 text-navy/75">Avoid attempting repairs if you are in an unsafe position.</span>
                </li>
              </ol>
              <p className="mt-6 leading-7 text-navy/70">
                If you are in immediate danger or anyone is injured, contact the emergency services first.
              </p>
            </div>
          </div>
        </section>

        {/* A68 Recovery for Different Situations */}
        <section className="py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up space-y-4">
              <h2 className="mb-3 text-3xl font-extrabold text-navy sm:text-4xl">A68 Recovery for Different Situations</h2>
              <p className="leading-7 text-navy/70">The right type of assistance depends on what has happened to your vehicle.</p>
              <p className="leading-7 text-navy/70">
                A flat battery may only require a{" "}
                <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">
                  jump start
                </Link>
                . A damaged tyre may be suitable for{" "}
                <Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">
                  spare tyre assistance
                </Link>{" "}
                if you have a usable spare available.
              </p>
              <p className="leading-7 text-navy/70">
                A mechanical fault, accident damage or serious vehicle problem may require full{" "}
                <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                  vehicle recovery
                </Link>
                . If your vehicle is stuck on difficult ground,{" "}
                <Link href="/services/winch-out" className="font-semibold text-red hover:underline">
                  winching
                </Link>{" "}
                may be needed before it can be moved.
              </p>
              <p className="leading-7 text-navy/70">
                If you have run out of fuel,{" "}
                <Link href="/services/refueling" className="font-semibold text-red hover:underline">
                  emergency fuel delivery
                </Link>{" "}
                may be appropriate.
              </p>
              <p className="leading-7 text-navy/70">
                Tell us what has happened and where your vehicle is located, and we can discuss the
                available recovery or roadside assistance option.
              </p>
            </div>
          </div>
        </section>

        {/* Recovery Near the A68 */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up">
              <h2 className="mb-3 text-3xl font-extrabold text-navy sm:text-4xl">Recovery Near the A68</h2>
              <p className="mb-6 leading-7 text-navy/70">
                FSR Recovery Group also provides recovery services across nearby areas within our wider
                service coverage.
              </p>
              <p className="mb-4 leading-7 text-navy/70">Our A68-related coverage includes areas around:</p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-3 text-navy/75">
                  <i className="fa-solid fa-location-dot mt-1 flex-shrink-0 text-red" />
                  <Link href="/areas/bishop-auckland" className="font-semibold text-red hover:underline">Bishop Auckland</Link>
                </li>
                <li className="flex items-start gap-3 text-navy/75">
                  <i className="fa-solid fa-location-dot mt-1 flex-shrink-0 text-red" />
                  <Link href="/areas/durham" className="font-semibold text-red hover:underline">Durham</Link>
                </li>
                <li className="flex items-start gap-3 text-navy/75">
                  <i className="fa-solid fa-location-dot mt-1 flex-shrink-0 text-red" />
                  <span>The Durham Dales</span>
                </li>
                <li className="flex items-start gap-3 text-navy/75">
                  <i className="fa-solid fa-location-dot mt-1 flex-shrink-0 text-red" />
                  <span>Pennine fringe areas</span>
                </li>
              </ul>
              <p className="leading-7 text-navy/70">
                You can also explore our{" "}
                <Link href="/areas" className="font-semibold text-red hover:underline">
                  other area pages
                </Link>{" "}
                and{" "}
                <Link href="/services" className="font-semibold text-red hover:underline">
                  recovery services
                </Link>{" "}
                for more information about the locations and services we cover.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Common Questions" title="A68 Breakdown Recovery FAQs" />
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28">
          <Image src="/images/trackrecord-bg.jpg" alt="Recovery truck ready to respond" fill sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-navy/90" />
          <div className="container-site fade-up mx-auto max-w-3xl text-center">
            <Eyebrow>A68</Eyebrow>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Need Recovery on the A68?</h2>
            <p className="mx-auto my-6 max-w-2xl text-lg leading-8 text-white/75">
              If your vehicle has broken down on the A68, contact FSR Recovery Group with your exact
              location, direction of travel and vehicle details.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/70">
              Whether you need{" "}
              <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
                breakdown recovery
              </Link>
              ,{" "}
              <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
                roadside assistance
              </Link>
              , a jump start, tyre assistance, accident recovery, fuel delivery or another suitable
              recovery service, we&rsquo;ll discuss the available option for your situation.
            </p>
            <div className="flex justify-center">
              <ContactButtons dark callLabel="Call FSR Recovery Group" whatsappLabel="WhatsApp FSR Recovery Group" />
            </div>
            <p className="mt-8 text-lg font-bold text-white/90">{business.phoneDisplay}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold">
              <Link href="/areas" className="text-white/80 transition hover:text-red">← Back to All Areas Covered</Link>
              <Link href="/contact" className="text-white/80 transition hover:text-red">Contact Us →</Link>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </main>
      <Footer />
    </>
  );
}
