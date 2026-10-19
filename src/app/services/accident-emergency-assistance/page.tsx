import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactButtons, Eyebrow, FaqAccordion, SectionHeading, type ServiceFaq } from "@/components/ServicePage";
import { business } from "@/data/business";
import { businessEntityRef, breadcrumbList } from "@/data/schema";

const title = "Accident Recovery Services Darlington | FSR Recovery";
const description = "Car accident recovery and recovery from accident situations in Darlington and nearby areas. FSR Recovery Group recovers suitable cars and vans safely.";
const path = "/services/accident-emergency-assistance";
const heroImage = "/images/accident-recovery-handover-flatbed.webp";
const heroImageAlt = "Recovery technician talking with a driver beside a damaged car on a flatbed truck";
const ctaImage = "/images/accident-recovery-loading-flatbed.webp";
const ctaImageAlt = "Technician loading a damaged car onto a flatbed recovery truck";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name, images: [{ url: heroImage, alt: heroImageAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [heroImage] },
};

const needRecovery = [
  "The vehicle is unsafe or unsuitable to drive.",
  "The vehicle has suffered significant bodywork damage.",
  "A wheel, tyre or other important component has been damaged.",
  "The vehicle will not start following the accident.",
  "The vehicle has been involved in a collision and cannot continue safely.",
  "The vehicle has left the road and requires suitable recovery assistance.",
];

const includes: { icon: string; title: string; text: React.ReactNode }[] = [
  {
    icon: "fa-solid fa-car-burst",
    title: "Damaged Vehicle Recovery",
    text: (
      <>
        <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
          Recovery of suitable cars and light vans
        </Link>{" "}
        that cannot safely continue following an accident.
      </>
    ),
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Roadside Recovery Assistance",
    text: (
      <>
        Assistance for suitable situations where a vehicle needs to be moved from an accident location —
        see our{" "}
        <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
          roadside assistance
        </Link>{" "}
        service.
      </>
    ),
  },
  {
    icon: "fa-solid fa-truck-ramp-box",
    title: "Vehicle Transportation",
    text: (
      <>
        Transporting the recovered vehicle to an agreed destination, such as a suitable garage, body
        shop, home or another agreed location — see our{" "}
        <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">
          vehicle transporting
        </Link>{" "}
        service.
      </>
    ),
  },
  {
    icon: "fa-solid fa-road",
    title: "Recovery After a Collision",
    text: "Vehicle recovery following a road traffic accident where the vehicle is no longer suitable or safe to drive.",
  },
  {
    icon: "fa-solid fa-van-shuttle",
    title: "Light Van Recovery",
    text: "Recovery assistance for suitable light commercial vans following an accident.",
  },
];

const whatToDo = [
  "Check yourself and others involved for immediate danger or injuries.",
  "Contact the emergency services if there are injuries, serious danger or another emergency.",
  "Move to a safe location if you can do so safely.",
  "Switch on your hazard warning lights where appropriate.",
  "Do not attempt to drive a vehicle that appears unsafe or seriously damaged.",
];

const whyChoose: { icon: string; title: string; text: React.ReactNode }[] = [
  {
    icon: "fa-solid fa-clock",
    title: "24/7 Recovery Assistance",
    text: "Accidents can happen at any time. FSR Recovery Group provides accident recovery assistance 24 hours a day.",
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Local Recovery Service",
    text: (
      <>
        We provide recovery services in Darlington and across our{" "}
        <Link href="/areas" className="font-semibold text-red hover:underline">
          wider service area
        </Link>
        .
      </>
    ),
  },
  {
    icon: "fa-solid fa-car-side",
    title: "Suitable Vehicle Recovery",
    text: (
      <>
        We provide recovery for suitable cars and light vans following{" "}
        <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
          accidents and breakdown situations
        </Link>
        .
      </>
    ),
  },
  {
    icon: "fa-solid fa-location-arrow",
    title: "Flexible Recovery Destinations",
    text: (
      <>
        Depending on the circumstances, a recovered vehicle can be{" "}
        <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">
          transported to an agreed suitable destination
        </Link>
        .
      </>
    ),
  },
];

const faqs: ServiceFaq[] = [
  { question: "Can you recover my car after an accident?", answer: "Yes. FSR Recovery Group provides accident recovery for suitable cars that cannot safely continue after a collision." },
  { question: "Do you provide accident recovery 24/7?", answer: "Yes. Accident recovery assistance is available 24 hours a day." },
  { question: "Can you recover a vehicle that will not start after an accident?", answer: "Yes. If the vehicle cannot safely continue, vehicle recovery may be appropriate." },
  { question: "Can you recover a damaged vehicle from the roadside?", answer: "Yes. We can provide recovery for suitable vehicles that have been damaged and cannot safely be driven away." },
  { question: "Where can you take my damaged vehicle?", answer: "Depending on the circumstances, the vehicle can be transported to an agreed suitable destination, such as a garage, body shop, home or another agreed location." },
  { question: "Can you recover a van after an accident?", answer: "Yes. Recovery assistance is available for suitable light vans." },
  { question: "What information do I need to provide?", answer: "Provide your exact location, vehicle details and a description of what happened. If possible, also provide information about the condition of the vehicle." },
  { question: "Can you recover a vehicle that has left the road?", answer: "Suitable vehicles may be recoverable depending on their position, condition and the recovery requirements. Contact us with your exact location and details." },
  { question: "Should I drive my car after an accident?", answer: "You should not drive a vehicle if it appears unsafe or has suffered damage that could affect its roadworthiness. Arrange suitable assistance instead." },
  { question: "How much does accident recovery cost?", answer: "The cost can depend on the vehicle, location, recovery requirements and destination. Contact FSR Recovery Group with your details for information about the available recovery service." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Accident Recovery & Emergency Assistance", path }]),
    {
      "@type": "Service",
      name: "Accident Recovery & Emergency Assistance",
      description,
      serviceType: "Accident recovery service",
      provider: businessEntityRef,
      areaServed: { "@type": "City", name: "Darlington" },
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

export default function AccidentEmergencyAssistancePage() {
  return (
    <>
      <Header activePath="/services" />
      <main>
        {/* Hero */}
        <section className="service-hero relative isolate min-h-[560px] overflow-hidden bg-navy text-white">
          <Image src={heroImage} alt={heroImageAlt} fill preload fetchPriority="high" sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
          <div className="container-site flex min-h-[560px] items-center py-16">
            <div className="fade-up max-w-3xl">
              <Eyebrow>Accident Recovery</Eyebrow>
              <h1 className="text-3xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">Accident Recovery &amp; Emergency Assistance</h1>
              <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">
                24/7 accident recovery and emergency assistance for drivers in Darlington and the
                surrounding areas. FSR Recovery Group helps recover cars and suitable light vans
                following road accidents, collisions and other situations where a vehicle cannot safely
                continue its journey.
              </p>
              <ContactButtons dark callLabel="Call for Accident Recovery" whatsappLabel="WhatsApp Us" />
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
                {["Available 24/7", "Cars & Suitable Vans", "Emergency Assistance"].map((x) => (
                  <span key={x}><i className="fa-solid fa-circle-check mr-2 text-red" />{x}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Accident Recovery */}
        <section className="py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up space-y-4">
              <Eyebrow>Professional Service</Eyebrow>
              <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">Professional Accident Recovery</h2>
              <div className="relative mb-2 h-56 overflow-hidden rounded-3xl sm:h-72">
                <Image
                  src="/images/accident-damage-assessment-torch.webp"
                  alt="Technician assessing accident damage to a car's front bumper with a torch"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="leading-7 text-navy/70">
                A road accident can leave your vehicle damaged, unsafe to drive or unable to continue.
                Once the immediate situation has been dealt with, arranging safe and suitable vehicle
                recovery is often the next step.
              </p>
              <p className="leading-7 text-navy/70">
                FSR Recovery Group provides accident recovery services for suitable cars and light vans
                following collisions and other road incidents. Depending on the condition and
                circumstances of the vehicle, we can arrange recovery from the roadside and transport it
                to an agreed destination.
              </p>
              <p className="leading-7 text-navy/70">
                Our accident recovery service is designed to help when a vehicle cannot safely be driven
                away after an incident. When you{" "}
                <Link href="/contact" className="font-semibold text-red hover:underline">
                  contact us
                </Link>
                , provide your exact location, vehicle details and a brief description of what has
                happened so we can understand your recovery requirements.
              </p>
            </div>
          </div>
        </section>

        {/* When Accident Recovery Is Needed */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up">
              <Eyebrow>When You May Need Us</Eyebrow>
              <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">When Accident Recovery Is Needed</h2>
              <p className="mb-6 leading-7 text-navy/70">
                Not every accident results in the same type of vehicle damage. Recovery may be required
                when:
              </p>
              <div className="relative mb-6 h-56 overflow-hidden rounded-3xl sm:h-72">
                <Image
                  src="/images/accident-van-damage-flatbed.webp"
                  alt="Van with accident-damaged bodywork loaded on a flatbed recovery truck"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <ul className="mb-6 space-y-3">
                {needRecovery.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/75">
                    <i className="fa-solid fa-circle-check mt-1 flex-shrink-0 text-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-7 text-navy/70">
                If you are unsure whether you need roadside assistance or full vehicle recovery,{" "}
                <Link href="/contact" className="font-semibold text-red hover:underline">
                  contact FSR Recovery Group
                </Link>{" "}
                and explain the situation.
              </p>
            </div>
          </div>
        </section>

        {/* What Our Accident Recovery Includes */}
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Our Service" title="What Our Accident Recovery Includes" intro="Our accident and recovery service can include:" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {includes.map((item) => (
                <article key={item.title} className="fade-up rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-xl">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red/15 text-xl text-red"><i className={item.icon} /></span>
                  <h3 className="mb-2 text-xl font-bold text-navy">{item.title}</h3>
                  <p className="leading-7 text-navy/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What To Do After a Road Accident */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up">
              <Eyebrow>Stay Safe</Eyebrow>
              <h2 className="mb-3 text-3xl font-extrabold text-navy sm:text-4xl">What To Do After a Road Accident</h2>
              <p className="mb-6 leading-7 text-navy/70">Your safety should come first after an accident.</p>
              <ol className="space-y-4">
                {whatToDo.map((step, i) => (
                  <li key={step} className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red/10 text-sm font-extrabold text-red">{i + 1}</span>
                    <span className="pt-1 leading-7 text-navy/75">{step}</span>
                  </li>
                ))}
                <li className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red/10 text-sm font-extrabold text-red">6</span>
                  <span className="pt-1 leading-7 text-navy/75">
                    Once the immediate situation is safe, contact{" "}
                    <Link href="/contact" className="font-semibold text-red hover:underline">
                      FSR Recovery Group
                    </Link>{" "}
                    if you require vehicle recovery.
                  </span>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red/10 text-sm font-extrabold text-red">7</span>
                  <span className="pt-1 leading-7 text-navy/75">Provide your exact location, vehicle details and information about the damage.</span>
                </li>
              </ol>
              <p className="mt-6 leading-7 text-navy/70">
                Do not put yourself at further risk by attempting repairs or moving a badly damaged
                vehicle in an unsafe situation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose FSR Recovery Group */}
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Why Choose Us" title="Why Choose FSR Recovery Group?" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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

        {/* FAQs */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Common Questions" title="Accident Recovery FAQs" />
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28">
          <Image src={ctaImage} alt={ctaImageAlt} fill sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-navy/90" />
          <div className="container-site fade-up mx-auto max-w-3xl text-center">
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Need Accident Recovery?</h2>
            <p className="mx-auto my-6 max-w-2xl text-lg leading-8 text-white/75">
              If you need car accident recovery in Darlington or the surrounding{" "}
              <Link href="/areas" className="font-semibold text-red hover:underline">
                service area
              </Link>
              , contact FSR Recovery Group with your location and vehicle details.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/70">
              Whether your vehicle has been damaged in a collision,{" "}
              <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">
                will not start after an accident
              </Link>{" "}
              or simply cannot safely continue, we&rsquo;ll discuss the appropriate recovery option with
              you.
            </p>
            <div className="flex justify-center">
              <ContactButtons dark callLabel="Call FSR Recovery Group" whatsappLabel="WhatsApp FSR Recovery Group" />
            </div>
            <p className="mt-8 text-lg font-bold text-white/90">{business.phoneDisplay}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold">
              <Link href="/services" className="text-white/80 transition hover:text-red">← View All Services</Link>
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
