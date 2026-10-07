import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { serviceNavigation } from "@/data/services";
import {
  CardGrid,
  ContactButtons,
  Eyebrow,
  FaqAccordion,
  SectionHeading,
  type ServiceCard,
  type ServiceFaq,
} from "@/components/ServicePage";

export type NearbyLink = { label: string; href: string };
export type RoadLink = { label: string; href: string; text: string };

export type AreaPageContent = {
  category: "city" | "road";
  eyebrow: string;
  h1: string;
  heroIntro: string;
  heroImage: string;
  heroImageAlt: string;
  badges: [string, string, string];
  introHeading: string;
  introParagraphs: string[];
  localHighlightsTitle: string;
  localHighlights: string[];
  situationsTitle: string;
  situationsIntro: string;
  situations: ServiceCard[];
  /** Optional "Why Choose Us" section. Omit to skip the section. */
  whyChooseTitle?: string;
  whyChooseIntro?: string;
  whyChoose?: ServiceCard[];
  /** Optional "Major Roads Around X" section with links to dedicated road pages. Omit to skip the section. */
  roadsTitle?: string;
  roadsIntro?: string;
  majorRoads?: RoadLink[];
  /** Optional "What We Need When You Call" checklist section. Omit to skip the section. */
  whatWeNeedTitle?: string;
  whatWeNeedIntro?: string;
  whatWeNeed?: string[];
  /** Overrides for the shared services grid heading/intro; falls back to generic copy if omitted. */
  servicesHeading?: string;
  servicesIntro?: string;
  /** Optional photo gallery section. Omit to skip the section. */
  galleryTitle?: string;
  galleryIntro?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  faqs: ServiceFaq[];
  ctaHeading: string;
  ctaText: string;
  nearbyAreas: NearbyLink[];
};

const serviceLinkCards: { title: string; text: string; icon: string; key: string }[] = [
  { key: "vehicle-breakdown-recovery", title: "Vehicle Breakdown Recovery", text: "24/7 recovery for cars and light vans that cannot safely continue their journey.", icon: "fa-solid fa-truck-ramp-box" },
  { key: "roadside-assistance", title: "Roadside Assistance", text: "On-the-spot roadside help for suitable vehicle problems that can be resolved at your location.", icon: "fa-solid fa-screwdriver-wrench" },
  { key: "jumpstart-services", title: "Jumpstart Services", text: "Fast battery jumpstart assistance when a flat battery leaves you stranded.", icon: "fa-solid fa-car-battery" },
  { key: "winch-out", title: "Winch Out", text: "Winching support for vehicles stuck in mud, ditches, snow or off-road ground.", icon: "fa-solid fa-truck-monster" },
  { key: "accident-emergency-assistance", title: "Accident Emergency Assistance", text: "Prompt, careful vehicle recovery following a road traffic accident.", icon: "fa-solid fa-car-burst" },
  { key: "changing-spare-tyre", title: "Changing Spare Tyre", text: "Roadside spare tyre fitting to get you moving again quickly and safely.", icon: "fa-solid fa-circle-notch" },
  { key: "refueling", title: "Refueling", text: "Emergency fuel delivery when you run out of fuel on the road.", icon: "fa-solid fa-gas-pump" },
  { key: "vehicle-transporting", title: "Vehicle Transporting", text: "Planned vehicle transport between agreed locations, on a flatbed or tow.", icon: "fa-solid fa-truck" },
];

function AreaSchema({ content, path }: { content: AreaPageContent; path: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${content.h1}`,
        description: content.heroIntro,
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
        areaServed: { "@type": content.category === "road" ? "Place" : "City", name: content.eyebrow },
        url: `https://fsrrecoverygroups.co.uk${path}`,
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}

export function AreaPageLayout({ content, path }: { content: AreaPageContent; path: string }) {
  return (
    <>
      {/* Hero */}
      <section className="service-hero relative isolate min-h-[600px] overflow-hidden bg-navy text-white">
        <Image src={content.heroImage} alt={content.heroImageAlt} fill preload fetchPriority="high" sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
        <div className="container-site flex min-h-[600px] items-center py-16">
          <div className="fade-up max-w-3xl">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className="text-3xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">{content.h1}</h1>
            <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">{content.heroIntro}</p>
            <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} />
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
              {content.badges.map((b) => (
                <span key={b}><i className="fa-solid fa-circle-check mr-2 text-red" />{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="py-16 sm:py-24">
        <div className="container-site grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="fade-up">
            <Eyebrow>Local Coverage</Eyebrow>
            <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">{content.introHeading}</h2>
            <div className="space-y-4 leading-7 text-navy/70">
              {content.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a href={business.tel} className="mt-7 block rounded-2xl border-l-4 border-red bg-navy p-5 font-bold text-white">
              Need help now? <span className="text-red">Call {business.phoneDisplay}</span> for recovery assistance.
            </a>
          </div>
          <div className="fade-up rounded-3xl border border-navy/10 bg-slate-50 p-8">
            <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-navy">
              <i className="fa-solid fa-map-location-dot text-red" /> {content.localHighlightsTitle}
            </h3>
            <ul className="space-y-4">
              {content.localHighlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-navy/75">
                  <i className="fa-solid fa-location-dot mt-1 flex-shrink-0 text-red" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <address className="mt-7 rounded-2xl bg-white p-5 not-italic leading-7 shadow-sm">
              <strong className="text-navy">{business.name}</strong>
              <br />
              {business.addressFull}
              <br />
              <a href={business.tel} className="font-bold text-red">{business.phoneDisplay}</a>
            </address>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="When You May Need Us" title={content.situationsTitle} intro={content.situationsIntro} />
          <CardGrid cards={content.situations} />
        </div>
      </section>

      {/* Why choose us */}
      {content.whyChoose && content.whyChoose.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading
              eyebrow="Why Choose Us"
              title={content.whyChooseTitle ?? `Why Choose ${business.name}?`}
              intro={content.whyChooseIntro}
            />
            <CardGrid cards={content.whyChoose} />
          </div>
        </section>
      )}

      {/* Gallery */}
      {content.gallery && content.gallery.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading
              eyebrow="On the Job"
              title={content.galleryTitle ?? `${content.eyebrow} Recovery in Action`}
              intro={content.galleryIntro}
            />
            <div className="grid gap-6 md:grid-cols-3">
              {content.gallery.map((photo) => (
                <figure key={photo.src} className="fade-up overflow-hidden rounded-3xl border border-navy/10 bg-slate-50 shadow-sm">
                  <div className="relative h-64">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-semibold text-navy/70">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Major roads */}
      {content.majorRoads && content.majorRoads.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading
              eyebrow="Key Routes"
              title={content.roadsTitle ?? `Major Roads Around ${content.eyebrow}`}
              intro={content.roadsIntro}
            />
            <div className="grid gap-5 md:grid-cols-2">
              {content.majorRoads.map((road) => (
                <Link key={road.href} href={road.href} className="fade-up flex flex-col rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1 hover:border-red/40 hover:shadow-lg">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red/10 text-xl text-red"><i className="fa-solid fa-road" /></span>
                  <h3 className="mb-2 text-xl font-bold text-navy">{road.label}</h3>
                  <p className="leading-7 text-navy/70">{road.text}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-red">{road.label} recovery <i className="fa-solid fa-arrow-right ml-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What we need when you call */}
      {content.whatWeNeed && content.whatWeNeed.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading
              eyebrow="Before You Call"
              title={content.whatWeNeedTitle ?? "What We Need When You Call"}
              intro={content.whatWeNeedIntro}
            />
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {content.whatWeNeed.map((item, i) => (
                <div key={item} className="fade-up flex items-start gap-4 rounded-2xl border border-navy/10 bg-slate-50 p-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red/10 text-sm font-extrabold text-red">{i + 1}</span>
                  <span className="pt-1 leading-7 text-navy/75">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services grid */}
      <section className="bg-navy py-16 text-white sm:py-24">
        <div className="container-site">
          <div className="[&_h2]:!text-white [&_p:last-child]:!text-white/70">
            <SectionHeading
              eyebrow="Full Range of Support"
              title={content.servicesHeading ?? "Recovery Services Available in This Area"}
              intro={content.servicesIntro ?? "Every service below is available to drivers in this area. Select a service to find out more."}
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceLinkCards.map((s) => (
              <Link key={s.key} href={serviceNavigation.find((n) => n.key === s.key)?.href ?? "/services"} className="fade-up block rounded-3xl border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-1 hover:border-red/50">
                <i className={`${s.icon} mb-5 text-2xl text-red`} />
                <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                <p className="leading-7 text-white/70">{s.text}</p>
                <span className="mt-5 inline-block text-sm font-bold text-red">Learn more <i className="fa-solid fa-arrow-right ml-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {content.nearbyAreas.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Nearby Coverage" title="Recovery Near You" intro="We also provide recovery in these nearby areas and along these routes." />
            <div className="flex flex-wrap justify-center gap-3">
              {content.nearbyAreas.map((n) => (
                <Link key={n.href} href={n.href} className="fade-up rounded-full border border-navy/15 bg-white px-5 py-2.5 font-semibold text-navy transition hover:border-red/50 hover:text-red">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Common Questions" title={`${content.eyebrow} Recovery FAQs`} />
          <FaqAccordion faqs={content.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28">
        <Image src="/images/trackrecord-bg.jpg" alt="Recovery truck ready to respond" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-navy/90" />
        <div className="container-site fade-up text-center">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-extrabold sm:text-5xl">{content.ctaHeading}</h2>
          <p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">{content.ctaText}</p>
          <div className="flex justify-center">
            <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} />
          </div>
          <address className="mt-8 not-italic leading-7 text-white/75">
            <strong className="text-white">{business.name}</strong>
            <br />
            {business.addressFull}
            <br />
            <a href={business.tel}>{business.phoneDisplay}</a>
          </address>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold">
            <Link href="/areas" className="text-white/80 transition hover:text-red">← Back to All Areas Covered</Link>
            <Link href="/contact" className="text-white/80 transition hover:text-red">Contact Us →</Link>
          </div>
        </div>
      </section>

      <AreaSchema content={content} path={path} />
    </>
  );
}
