import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: { absolute: "Need Assistance? Contact FSR Recovery Group Now" },
  description: "Looking for recovery assistance? FSR Recovery Group is ready to help. Contact us today for guidance.",
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    icon: "fa-solid fa-phone",
    title: "Call Us",
    detail: business.phoneDisplay,
    desc: "Speak directly to our team. Best for urgent roadside situations.",
    href: business.tel,
    cta: "Call Now",
    external: false,
  },
  {
    icon: "fa-brands fa-whatsapp",
    title: "WhatsApp",
    detail: business.phoneDisplay,
    desc: "Send your location, vehicle details and a brief description and we will respond as quickly as possible.",
    href: business.whatsapp,
    cta: "Message Us",
    external: true,
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    detail: business.email,
    desc: "For non-urgent enquiries, quotes or general questions about our services.",
    href: `mailto:${business.email}`,
    cta: "Send Email",
    external: false,
  },
];

const faqs = [
  {
    q: "What is the fastest way to contact you?",
    a: "Calling us is the fastest option for urgent roadside situations. WhatsApp is great for sending your location and details so we can plan the right response.",
  },
  {
    q: "Do you respond to WhatsApp messages quickly?",
    a: "Yes. We monitor WhatsApp throughout the day and aim to respond to all messages as quickly as possible. If we are on a job we will reply as soon as we are free.",
  },
  {
    q: "Can I get a quote before booking?",
    a: "Yes. Share your pickup location, destination and vehicle type and we will give you a clear cost estimate before you commit to anything.",
  },
  {
    q: "Do you have a physical office I can visit?",
    a: "We are a mobile recovery service operating across the region. All enquiries are handled by phone, WhatsApp or email — there is no walk-in office.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header activePath="/contact" />

      <main>
        {/* Page Banner */}
        <section className="hero-bg text-white">
          <div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-envelope flex-shrink-0"></i> Contact Us
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Need roadside help or want to ask a question? Call or WhatsApp us and a member of our team will be in touch.
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

        {/* Contact Methods */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red">How to Reach Us</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Contact Options</h2>
              <p className="text-navy/70">Choose the method that suits your situation best.</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-3">
              {contactMethods.map((method) => (
                <div key={method.title} className="fade-up flex flex-col rounded-3xl border border-navy/10 bg-white p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red/10">
                    <i className={`${method.icon} text-2xl text-red`}></i>
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-navy">{method.title}</h3>
                  <p className="mb-3 font-semibold break-all text-red">{method.detail}</p>
                  <p className="flex-1 text-sm leading-7 text-navy/70">{method.desc}</p>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="mt-6 rounded-full bg-navy px-6 py-3 text-center font-bold text-white transition hover:bg-navy-light"
                  >
                    {method.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Message Form */}
        <section className="bg-white py-20">
          <div className="container-site grid items-start gap-12 lg:grid-cols-2">
            <div className="fade-up">
              <p className="mb-3 font-bold text-red">Request a Quote</p>
              <h2 className="mb-5 text-3xl font-extrabold text-navy lg:text-4xl">
                Get a Free Quote on WhatsApp
              </h2>
              <p className="mb-6 leading-8 text-navy/70">
                Fill in your details and we will send you a clear price via WhatsApp as quickly as possible.
              </p>
              <QuoteForm variant="light" />
            </div>

            {/* Contact Info Panel */}
            <div className="fade-up space-y-6">
              <div className="rounded-3xl bg-navy p-8 text-white">
                <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-solid fa-phone text-red"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">Phone</p>
                      <a href={business.tel} className="font-semibold transition hover:text-red">{business.phoneDisplay}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-brands fa-whatsapp text-red"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">WhatsApp</p>
                      <a
                        href={business.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold transition hover:text-red"
                      >
                        {business.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-solid fa-envelope text-red"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">Email</p>
                      <a href={`mailto:${business.email}`} className="font-semibold break-all transition hover:text-red">
                        {business.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-solid fa-location-dot text-red"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">Address</p>
                      <p className="font-semibold">{business.addressFull}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-solid fa-clock text-red"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">Availability</p>
                      <p className="font-semibold">Available for urgent enquiries, 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-navy/10 bg-slate-50 p-7">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-navy">
                  <i className="fa-solid fa-map-location-dot text-red"></i> Areas We Cover
                </h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {["Motorways", "City Centre", "Residential", "Rural & Off-Road", "Industrial", "Long Distance"].map((area) => (
                    <span key={area} className="rounded-full border border-navy/10 bg-white px-3 py-1 font-medium text-navy/80">{area}</span>
                  ))}
                </div>
                <a href="/areas" className="mt-4 inline-block text-sm font-bold text-red">
                  See full coverage area →
                </a>
                <br />
                <a href="/services" className="mt-2 inline-block text-sm font-bold text-red">
                  Browse our recovery services →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 py-20">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-12 text-center">
              <p className="mb-3 font-bold text-red">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">Contact &amp; Response</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="fade-up rounded-2xl border border-navy/10 bg-white p-6">
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

        {/* CTA */}
        <section className="bg-red py-20 text-center text-white">
          <div className="container-site fade-up">
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Ready to Get Help?</h2>
            <p className="mb-8 text-lg text-white/90">
              Call or WhatsApp us now and our team will respond as quickly as possible.
            </p>
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
