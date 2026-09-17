import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardGrid, ContactButtons, Eyebrow, FaqAccordion, RelatedCard, SectionHeading, type ServiceCard, type ServiceFaq } from "@/components/ServicePage";
import { getServiceNavigation } from "@/data/services";
import { business } from "@/data/business";

const title = "Reliable Transport Services for Your Vehicle Needs";
const description = "Wondering how to ship your vehicle? Our transportation solutions make the process seamless and easy.";
const path = "/services/vehicle-transporting";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name, images: [{ url: "/images/service-transport.jpg", alt: "Professional vehicle transport service" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/service-transport.jpg"] },
};

const situations: ServiceCard[] = [
  { icon: "fa-solid fa-key", title: "Vehicle Purchase Collection", text: "Bought a vehicle away from home? Professional transport can move it from the collection point to your chosen destination." },
  { icon: "fa-solid fa-car-burst", title: "Non-Running Vehicle", text: "A vehicle that cannot be driven may need transporting to a garage, workshop, home address or another agreed location." },
  { icon: "fa-solid fa-screwdriver-wrench", title: "Garage or Workshop Transport", text: "We can move suitable vehicles to or from garages, repair centres or other automotive facilities." },
  { icon: "fa-solid fa-house", title: "Vehicle Relocation", text: "If a vehicle needs moving between homes, storage locations, businesses or other agreed addresses, professional transport can simplify the process." },
  { icon: "fa-solid fa-road", title: "Avoiding Extra Mileage", text: "Transporting a vehicle instead of driving it can help avoid adding unnecessary road miles during a planned move." },
  { icon: "fa-solid fa-van-shuttle", title: "Suitable Van Transport", text: "Suitable light vans can also be transported depending on their size, weight and requirements." },
];
const included: ServiceCard[] = [
  { icon: "fa-solid fa-clipboard-list", title: "Collection Planning", text: "We confirm the vehicle location, destination and relevant details before transport is arranged." },
  { icon: "fa-solid fa-truck-ramp-box", title: "Vehicle Loading", text: "The vehicle is loaded using suitable recovery or transport equipment based on its condition and requirements." },
  { icon: "fa-solid fa-shield-halved", title: "Secure Transportation", text: "The vehicle is appropriately secured for transport between collection and delivery locations." },
  { icon: "fa-solid fa-car-side", title: "Cars & Light Vans", text: "Transport may be available for common passenger cars and suitable light commercial vehicles." },
  { icon: "fa-solid fa-location-arrow", title: "Flexible Destinations", text: "Vehicles can be moved to garages, home addresses, businesses, storage locations or other agreed destinations." },
  { icon: "fa-solid fa-circle-check", title: "Safe Drop-Off", text: "The vehicle is delivered to the agreed location and unloaded according to the transport situation." },
];
const benefits: ServiceCard[] = [
  { icon: "fa-solid fa-shield-halved", title: "Professional Vehicle Handling", text: "We focus on careful loading, securing and transportation throughout the journey." },
  { icon: "fa-solid fa-truck-ramp-box", title: "Collection & Delivery", text: "The service covers movement from an agreed pickup point to an agreed destination." },
  { icon: "fa-solid fa-van-shuttle", title: "Cars & Suitable Vans", text: "Transport is available for common passenger cars and suitable light commercial vehicles." },
  { icon: "fa-solid fa-location-arrow", title: "Flexible Destinations", text: "Vehicles can be transported to garages, homes, businesses, storage locations and other agreed addresses." },
  { icon: "fa-solid fa-comments", title: "Clear Communication", text: "Provide the collection and delivery details and we can discuss the transport requirements clearly." },
  { icon: "fa-solid fa-map-location-dot", title: "Local Support", text: "Based in Darlington, FSR Recovery Group provides vehicle transportation across Darlington and surrounding areas, with wider journeys discussed where appropriate." },
];
const faqs: ServiceFaq[] = [
  ["What is a vehicle transport service?", "A vehicle transport service moves a car or suitable van from one agreed location to another using appropriate transport or recovery equipment rather than requiring the vehicle to be driven."],
  ["Can you transport a car that still runs?", "Yes. Vehicle transport may be suitable for a driveable car when you prefer not to drive it, such as after a purchase, during relocation or when avoiding additional mileage."],
  ["Can you transport a non-running vehicle?", "Yes, depending on the vehicle and access. Tell us whether the vehicle starts, rolls and steers when requesting transport so the requirements can be discussed."],
  ["Where can you collect a vehicle from?", "Collection may be possible from suitable accessible homes, garages, businesses, storage locations and other agreed addresses. Contact us with the exact location to confirm."],
  ["Where can you deliver my vehicle?", "Vehicles can be transported to an agreed garage, home address, business, storage location or another suitable destination."],
  ["Can you transport vans?", "Transport may be available for suitable light vans depending on their size, weight and requirements. Provide the vehicle details when contacting us."],
  ["Can you collect a vehicle I have just purchased?", "Yes. Vehicle transport can be suitable for collecting a recently purchased car from an agreed location and delivering it to your chosen destination."],
  ["Do you provide long-distance vehicle transport?", "Longer-distance transport may be available depending on the vehicle, collection point and destination. Contact FSR Recovery Group with both locations so availability and pricing can be discussed."],
  ["Do I need to be present when the vehicle is collected?", "Collection arrangements depend on access, keys, permissions and the specific location. Discuss the handover details with FSR Recovery Group when arranging the transport."],
  ["Do you provide vehicle transport in Darlington?", "Yes. FSR Recovery Group is based in Darlington and provides vehicle transportation in Darlington and surrounding areas. Wider journeys can be discussed based on the required collection and delivery locations."],
  ["How much does vehicle transport cost?", "The cost depends on factors such as the vehicle, collection location, destination, distance and transport requirements. Call or WhatsApp us with the details so an appropriate quote can be discussed."],
].map(([question, answer]) => ({ question, answer }));

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Vehicle Transport Service", description, serviceType: "Vehicle transport service", provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phone, address: { "@type": "PostalAddress", streetAddress: business.address.street, addressLocality: business.address.locality, postalCode: business.address.postalCode, addressCountry: business.address.countryCode } }, areaServed: { "@type": "City", name: "Darlington" }, availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" } } },
  { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
] };

export default function VehicleTransportingPage() {
  return <><Header activePath="/services" /><main>
    <section className="service-hero relative isolate min-h-[680px] overflow-hidden bg-navy text-white">
      <Image src="/images/service-transport.jpg" alt="Professional vehicle transport service" fill preload sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
      <div className="container-site flex min-h-[680px] items-center py-20"><div className="fade-up max-w-3xl">
        <Eyebrow>Professional Vehicle Transport</Eyebrow><h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">Professional Vehicle Transport You Can Rely On</h1>
        <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">Need a car or suitable van moved without driving it yourself? FSR Recovery Group provides professional vehicle transport for planned collections, deliveries and relocations, moving vehicles safely between agreed locations.</p>
        <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for a Transport Quote" />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">{["Professional Vehicle Transport", "Cars & Suitable Vans", "Collection & Delivery"].map(x=><span key={x}><i className="fa-solid fa-circle-check mr-2 text-red" />{x}</span>)}</div>
      </div></div>
    </section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="fade-up relative min-h-[430px] overflow-hidden rounded-3xl"><Image src="/images/about-tow.jpg" alt="Car being transported safely" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
      <div className="fade-up"><Eyebrow>Safe Vehicle Movement</Eyebrow><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Reliable Transport When You Need a Vehicle Moved</h2>
        <div className="space-y-4 leading-7 text-navy/70"><p>Not every vehicle movement starts with a breakdown. You may need a newly purchased car collected, a non-running vehicle moved to a garage, a vehicle relocated between addresses or a car transported without adding unnecessary mileage.</p><p>FSR Recovery Group provides professional vehicle transportation for suitable cars and light vans. We collect the vehicle from an agreed location, secure it appropriately and transport it to the destination you specify.</p><p>The service is suitable for both planned vehicle moves and situations where driving the vehicle is not practical or appropriate.</p><p>Tell us what vehicle needs moving, where it is located and where it needs to go so the transport requirements can be discussed.</p></div>
        <a href={business.tel} className="mt-7 block rounded-2xl border-l-4 border-red bg-navy p-5 font-bold text-white">Need a vehicle moved? <span className="text-red">Call {business.phoneDisplay}</span> for a transport quote.</a>
      </div>
    </div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="When You May Need Us" title="Vehicle Transport Situations We Can Help With" intro="There are many reasons a car or van may need professional transportation even when there is no roadside emergency." /><CardGrid cards={situations} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/service-transport.jpg" alt="Vehicle collection and delivery" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site"><div className="fade-up max-w-2xl"><Eyebrow>Flexible Vehicle Movement</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">Vehicle Transport When You Need It</h2><div className="my-6 space-y-4 leading-7 text-white/75"><p>Vehicle transport may be needed for a planned collection, an urgent garage move or an unexpected situation where driving the vehicle is not suitable.</p><p>FSR Recovery Group provides vehicle recovery and transportation support around the clock, allowing customers to discuss transport requirements when they arise.</p><p>When contacting us, provide the vehicle make/model, collection address, destination and any important information about whether the vehicle runs, rolls or has known access issues.</p></div><ContactButtons dark callLabel="Request Vehicle Transport" whatsappLabel="WhatsApp Your Details" /></div></div></section>

    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Collection to Delivery" title="What Our Vehicle Transport Service Includes" intro="Our vehicle transportation service is designed to move suitable cars and light vans safely from an agreed collection point to an agreed destination." /><CardGrid cards={included} /></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="Simple Process" title="How Vehicle Transporting Works" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["01","Contact Us","Call or WhatsApp FSR Recovery Group and tell us what vehicle you need moved."],["02","Share Collection & Delivery Details","Provide the vehicle make/model, collection location, destination and whether the vehicle can move under its own power."],["03","Transport Is Arranged","The appropriate transport method is discussed based on the vehicle, locations and access requirements."],["04","Collection & Delivery","The vehicle is loaded, secured, transported and delivered to the agreed destination."]].map(([n,t,x])=><article key={n} className="fade-up rounded-3xl border border-white/10 bg-white/[.06] p-6"><span className="text-4xl font-extrabold text-red">{n}</span><h3 className="mb-2 mt-5 text-xl font-bold">{t}</h3><p className="leading-7 text-white/70">{x}</p></article>)}</div><div className="mt-9 flex justify-center"><ContactButtons dark callLabel="Request a Transport Quote" whatsappLabel="WhatsApp Your Details" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Why Choose Us" title="Straightforward Vehicle Transport From A to B" /><CardGrid cards={benefits} /></div></section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="fade-up"><Eyebrow>Local Vehicle Transport</Eyebrow><h2 className="text-3xl font-extrabold sm:text-4xl">Vehicle Transport in Darlington and Surrounding Areas</h2><div className="my-6 space-y-4 leading-7 text-navy/70"><p>FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB and provides professional vehicle transport for customers in <Link href="/areas/darlington" className="font-semibold text-red">Darlington</Link> and surrounding areas.</p><p>Whether you need a vehicle collected from a garage, moved between addresses, transported after purchase or delivered to another suitable location, contact us with the collection and destination details.</p><p>For transport outside the immediate Darlington area, call or WhatsApp us with both locations so availability and requirements can be discussed.</p></div><address className="mb-7 rounded-2xl bg-slate-100 p-5 not-italic leading-7"><strong>{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel} className="font-bold text-red">{business.phoneDisplay}</a></address><div className="flex flex-col gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-6 py-3.5 text-center font-bold text-white">Request Vehicle Transport</a><Link href="/areas" className="rounded-full border border-navy/20 px-6 py-3.5 text-center font-bold">View Areas Covered</Link></div></div><div className="fade-up relative min-h-[480px] overflow-hidden rounded-3xl"><Image src="/images/about-tow.jpg" alt="Car loaded onto a vehicle transporter" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Planned or Necessary Transport" title="Running and Non-Running Vehicle Transport" /><div className="grid gap-6 lg:grid-cols-2">{[["Running Vehicle Transport","You may choose professional transport even when the vehicle is driveable, for example after a purchase, during relocation or when you want to avoid driving the vehicle over a longer journey.","Professional transport provides a practical way to move the vehicle between agreed locations without requiring it to be driven there.","/images/service-transport.jpg","Car loaded onto a vehicle transporter"],["Non-Running Vehicle Transport","Vehicles that do not start, are awaiting repair or should not be driven can also require transportation.","Tell us about the condition of the vehicle when requesting a quote so the correct transport requirements can be discussed.","/images/about-tow.jpg","Vehicle collection and delivery"]].map(([t,a,b,img,alt])=><article key={t} className="fade-up overflow-hidden rounded-3xl bg-navy text-white"><div className="relative h-64"><Image src={img} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="p-7"><h3 className="mb-3 text-2xl font-bold">{t}</h3><p className="mb-3 leading-7 text-white/70">{a}</p><p className="leading-7 text-white/70">{b}</p></div></article>)}</div><div className="mt-9 flex justify-center"><a href={business.tel} className="rounded-full bg-red px-7 py-4 font-bold text-white">Get a Vehicle Transport Quote</a></div></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="More Ways We Can Help" title="Related Roadside & Recovery Services" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><RelatedCard title="24/7 Vehicle Breakdown Recovery" text="Professional recovery when a broken-down vehicle cannot safely continue its journey." href={getServiceNavigation("vehicle-breakdown-recovery").href} icon="fa-solid fa-truck-pickup"/><RelatedCard title="Accident Emergency Assistance" text="Vehicle recovery and transportation following a collision or road traffic incident." href={getServiceNavigation("accident-emergency-assistance").href} icon="fa-solid fa-car-burst"/><RelatedCard title="Roadside Assistance" text="Professional help for suitable vehicle problems at the roadside or another accessible location." href={getServiceNavigation("roadside-assistance").href} icon="fa-solid fa-screwdriver-wrench"/><RelatedCard title="Winch Out" text="Vehicle extraction assistance when a car or van becomes stuck and needs controlled recovery." href={getServiceNavigation("winch-out").href} icon="fa-solid fa-truck-monster"/></div><div className="mt-9 flex justify-center gap-6"><Link href="/services" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">View All Services</Link><Link href="/contact" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">Contact Us</Link></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Common Questions" title="Vehicle Transporting FAQs" /><FaqAccordion faqs={faqs} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/service-transport.jpg" alt="Professional vehicle transport service" fill sizes="100vw" className="-z-20 object-cover"/><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site fade-up text-center"><Eyebrow>Need a Vehicle Moved?</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">Arrange Professional Vehicle Transport</h2><p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">If you need a car or suitable van collected and delivered safely, contact FSR Recovery Group. Tell us what vehicle you have, where it is now and where it needs to go so we can discuss your transport requirements.</p><div className="flex justify-center"><ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for a Transport Quote" /></div><address className="mt-8 not-italic leading-7 text-white/75"><strong className="text-white">{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel}>{business.phoneDisplay}</a></address></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </main><Footer /></>;
}
