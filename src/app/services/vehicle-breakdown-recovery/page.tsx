import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardGrid, ContactButtons, Eyebrow, FaqAccordion, RelatedCard, SectionHeading, type ServiceCard, type ServiceFaq } from "@/components/ServicePage";
import { getServiceNavigation } from "@/data/services";
import { business } from "@/data/business";

const title = "Facing a Breakdown? We Provide Quick Recovery Solutions";
const description = "Get back on the road faster with our reliable vehicle breakdown recovery. Reach out for support today!";
const path = "/services/vehicle-breakdown-recovery";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const situations: ServiceCard[] = [
  { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "Engine or mechanical trouble can leave your vehicle unable to continue. We can recover it to an agreed garage or another suitable destination." },
  { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "If your vehicle refuses to start and roadside assistance cannot resolve the problem, we can arrange safe recovery." },
  { icon: "fa-solid fa-bolt", title: "Electrical Problems", text: "A serious electrical fault can prevent a vehicle from starting or operating normally. Recovery allows it to be transported for professional inspection." },
  { icon: "fa-solid fa-temperature-high", title: "Overheating", text: "Continuing to drive an overheating vehicle can risk further damage. We can recover it instead of requiring you to continue the journey." },
  { icon: "fa-solid fa-gauge-high", title: "Clutch or Gearbox Problems", text: "Clutch, gearbox or transmission trouble can make a vehicle difficult or unsafe to drive. Professional recovery provides a safer way to move it." },
  { icon: "fa-solid fa-triangle-exclamation", title: "Unexpected Breakdown", text: "If your vehicle suddenly becomes undriveable and you are unsure what has gone wrong, contact us to discuss the appropriate recovery option." },
];
const included: ServiceCard[] = [
  { icon: "fa-solid fa-truck-ramp-box", title: "Safe Vehicle Loading", text: "Your vehicle is carefully positioned and secured using appropriate recovery equipment before transportation." },
  { icon: "fa-solid fa-car", title: "Car Recovery", text: "Professional recovery is available for common passenger cars that cannot safely continue their journey." },
  { icon: "fa-solid fa-van-shuttle", title: "Light Van Recovery", text: "Suitable light vans can also be recovered depending on their size and recovery requirements." },
  { icon: "fa-solid fa-screwdriver-wrench", title: "Garage Drop-Off", text: "We can transport your vehicle to your preferred garage for inspection or repair." },
  { icon: "fa-solid fa-house", title: "Home Address Recovery", text: "If required, your vehicle can be recovered to your home or another suitable agreed address." },
  { icon: "fa-solid fa-shield-halved", title: "Careful Transportation", text: "Your vehicle remains appropriately secured while being transported to the agreed destination." },
];
const benefits: ServiceCard[] = [
  { icon: "fa-solid fa-clock", title: "Available 24/7", text: "Our breakdown recovery service operates around the clock for unexpected vehicle problems." },
  { icon: "fa-solid fa-shield-halved", title: "Professional Vehicle Handling", text: "We focus on careful loading, securing and transportation throughout the recovery process." },
  { icon: "fa-solid fa-car-side", title: "Cars & Light Vans", text: "Recovery support is available for common passenger cars and suitable light commercial vehicles." },
  { icon: "fa-solid fa-location-arrow", title: "Flexible Destinations", text: "Your vehicle can be transported to an agreed garage, home address or another suitable location." },
  { icon: "fa-solid fa-comments", title: "Straightforward Communication", text: "Tell us what has happened and where you need the vehicle taken, and we can discuss the appropriate recovery." },
  { icon: "fa-solid fa-map-location-dot", title: "Local Recovery Support", text: "Based in Darlington, FSR Recovery Group provides breakdown recovery across Darlington and surrounding areas." },
];
const faqs: ServiceFaq[] = [
  ["Is your vehicle breakdown recovery available 24/7?", "Yes. FSR Recovery Group provides 24/7 vehicle breakdown recovery, including daytime, overnight and weekend assistance."],
  ["What vehicles can you recover?", "We provide recovery for common passenger cars and suitable light vans. Tell us your vehicle make, model and type when contacting us so the recovery requirements can be discussed."],
  ["Can you recover a car that won't start?", "Yes. If your vehicle cannot be started or safely driven, breakdown recovery can be arranged to an agreed destination."],
  ["Where can you take my broken-down vehicle?", "Your vehicle can be transported to an agreed garage, home address or another suitable destination depending on your requirements."],
  ["What information should I provide when calling?", "Tell us your current location, vehicle make and model, what has happened and your preferred destination if you already know where the vehicle needs to go."],
  ["What if the problem can be dealt with at the roadside?", "FSR Recovery Group also provides roadside breakdown assistance for problems that may not require full vehicle transport. If roadside help may be more suitable than recovery, the available options can be discussed when you contact us."],
  ["Do you recover vans?", "Recovery may be available for suitable light vans. Provide the vehicle details when calling so the requirements can be confirmed."],
  ["Do you provide breakdown recovery in Darlington?", "Yes. FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB, and provides breakdown recovery across Darlington and the surrounding areas, including the A1(M) and A66. Contact us with your location to confirm availability."],
  ["Can you recover my vehicle at night?", "Yes. Our breakdown recovery service operates 24 hours a day, including overnight."],
  ["How much does vehicle breakdown recovery cost?", "The cost depends on factors such as your vehicle, collection location, destination and recovery requirements. Call or WhatsApp us with the details so an appropriate quote can be discussed."],
].map(([question, answer]) => ({ question, answer }));

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "24/7 Vehicle Breakdown Recovery", description, serviceType: "Vehicle breakdown recovery", provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phone, address: { "@type": "PostalAddress", streetAddress: business.address.street, addressLocality: business.address.locality, postalCode: business.address.postalCode, addressCountry: business.address.countryCode } }, areaServed: { "@type": "City", name: "Darlington" }, availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" } } },
  { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
] };

export default function VehicleBreakdownRecoveryPage() {
  return <><Header activePath="/services" /><main>
    <section className="service-hero relative isolate min-h-[680px] overflow-hidden bg-navy text-white">
      <Image src="/images/service-breakdown.jpg" alt="Broken-down car beside a professional recovery vehicle" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
      <div className="container-site flex min-h-[680px] items-center py-20"><div className="fade-up max-w-3xl">
        <Eyebrow>24/7 Breakdown Recovery</Eyebrow><h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">24/7 Vehicle Breakdown Recovery</h1>
        <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">When your car or van breaks down and cannot safely continue, FSR Recovery Group is ready to help. We provide professional 24/7 vehicle breakdown recovery, collecting stranded vehicles and transporting them safely to an agreed garage, home address or another suitable destination.</p>
        <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">{["Available 24/7", "Cars & Vans", "Professional Recovery"].map(x=><span key={x}><i className="fa-solid fa-circle-check mr-2 text-red" />{x}</span>)}</div>
      </div></div>
    </section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="fade-up relative min-h-[430px] overflow-hidden rounded-3xl"><Image src="/images/service-transport.jpg" alt="Vehicle being professionally loaded onto a recovery truck" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
      <div className="fade-up"><Eyebrow>Professional Vehicle Recovery</Eyebrow><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Safe Recovery for Your Broken-Down Vehicle</h2>
        <div className="space-y-4 leading-7 text-navy/70"><p>A vehicle breakdown can happen without warning. Mechanical trouble, an electrical fault, overheating or another serious problem may leave your car or van unable to move or unsafe to drive.</p><p>FSR Recovery Group provides professional vehicle breakdown recovery when continuing your journey is no longer possible. We can collect suitable cars and light vans from accessible locations and transport them safely to an agreed destination.</p><p>Whether you break down near home, outside work, in a car park or while travelling, our 24-hour broken-down vehicle recovery service gives you a reliable way to get your vehicle where it needs to go.</p><p>Tell us where you are, what vehicle you have, what has happened and where you would like the vehicle taken.</p></div>
        <a href={business.tel} className="mt-7 block rounded-2xl border-l-4 border-red bg-navy p-5 font-bold text-white">Broken down now? <span className="text-red">Call {business.phoneDisplay}</span> for recovery assistance.</a>
      </div>
    </div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="When You May Need Us" title="Breakdown Situations We Can Help With" intro="Some vehicle faults make continuing the journey unsafe or impossible. When roadside assistance is not enough, professional recovery can get your vehicle to a suitable destination." /><CardGrid cards={situations} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/gallery-2.jpg" alt="Night-time vehicle breakdown recovery" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site"><div className="fade-up max-w-2xl"><Eyebrow>Day or Night</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">24-Hour Emergency Breakdown Recovery</h2><div className="my-6 space-y-4 leading-7 text-white/75"><p>Breakdowns do not follow normal working hours. Your vehicle can fail during an early commute, in the middle of the day, late at night or while travelling at the weekend.</p><p>FSR Recovery Group provides 24/7 emergency breakdown recovery so you can request professional help whenever an unexpected vehicle problem leaves you unable to continue safely.</p><p>When you contact us, provide your location, vehicle details, a brief description of the problem and your preferred destination where known.</p></div><ContactButtons dark callLabel="Call for Emergency Recovery" whatsappLabel="WhatsApp Us" /></div></div></section>

    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Complete Recovery Support" title="From Collection to Safe Drop-Off" intro="Our vehicle recovery service covers the process from collecting your broken-down vehicle through to transporting it safely to the agreed destination." /><CardGrid cards={included} /></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white [&_p:last-child]:!text-white/70"><SectionHeading eyebrow="Simple Recovery Process" title="How Vehicle Breakdown Recovery Works" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
      ["01","Contact Us","Call or WhatsApp FSR Recovery Group and tell us that your vehicle has broken down."], ["02","Share Your Details","Give us your location, vehicle make/model, what has happened and where you would like the vehicle taken."], ["03","Recovery Is Arranged","The appropriate recovery response is arranged based on your vehicle, location and circumstances."], ["04","Safe Drop-Off","Your vehicle is loaded, secured and transported to your agreed garage, home address or another suitable destination."]
    ].map(([n,t,x])=><article key={n} className="fade-up rounded-3xl border border-white/10 bg-white/[.06] p-6"><span className="text-4xl font-extrabold text-red">{n}</span><h3 className="mb-2 mt-5 text-xl font-bold">{t}</h3><p className="leading-7 text-white/70">{x}</p></article>)}</div><div className="mt-9 flex justify-center"><ContactButtons dark /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Why Choose Us" title="Professional Recovery Without the Complication" /><CardGrid cards={benefits} /></div></section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="fade-up"><Eyebrow>Local Recovery Support</Eyebrow><h2 className="text-3xl font-extrabold sm:text-4xl">Breakdown Recovery in Darlington and Surrounding Areas</h2><div className="my-6 space-y-4 leading-7 text-navy/70"><p>FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB, providing professional <Link href="/areas/darlington" className="font-semibold text-red">breakdown recovery in Darlington</Link> and the surrounding areas for cars and light vans that can no longer continue their journey.</p><p>Whether your vehicle breaks down near home, outside your workplace, in a car park or while travelling through the wider area, contact us with your location and vehicle details for prompt roadside breakdown assistance or full recovery.</p><p>We also recover vehicles that break down on the <Link href="/areas/a1m" className="font-semibold text-red">A1(M)</Link> and <Link href="/areas/a66" className="font-semibold text-red">A66</Link> near Darlington, in addition to town centre and residential callouts.</p><p>If you are outside Darlington, call or WhatsApp us with your location so we can confirm whether recovery is available.</p></div><address className="mb-7 rounded-2xl bg-slate-100 p-5 not-italic leading-7"><strong>{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel} className="font-bold text-red">{business.phoneDisplay}</a></address><div className="flex flex-col gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-6 py-3.5 text-center font-bold text-white">Call for Recovery</a><Link href="/areas" className="rounded-full border border-navy/20 px-6 py-3.5 text-center font-bold">View Areas Covered</Link></div></div><div className="fade-up relative min-h-[480px] overflow-hidden rounded-3xl"><Image src="/images/gallery-1.jpg" alt="Local vehicle recovery service near Darlington" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Cars & Vans" title="Breakdown Recovery for Different Vehicles" /><div className="grid gap-6 lg:grid-cols-2">{[["Car Breakdown Recovery","From family cars and daily commuters to vehicles affected by unexpected mechanical or electrical problems, we provide professional car breakdown recovery when the vehicle cannot safely continue.","Your car can be transported to an agreed garage, home address or another suitable destination.","/images/service-breakdown.jpg","Car being collected by a recovery vehicle"],["Van Breakdown Recovery","A broken-down van can interrupt work, appointments and deliveries. We provide recovery for suitable light vans that cannot safely continue their journey.","Tell us the type and approximate size of your van when contacting us so the recovery requirements can be discussed.","/images/service-roadside.jpg","Suitable light van receiving breakdown recovery assistance"]].map(([t,a,b,img,alt])=><article key={t} className="fade-up overflow-hidden rounded-3xl bg-navy text-white"><div className="relative h-64"><Image src={img} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="p-7"><h3 className="mb-3 text-2xl font-bold">{t}</h3><p className="mb-3 leading-7 text-white/70">{a}</p><p className="leading-7 text-white/70">{b}</p></div></article>)}</div><div className="mt-9 flex justify-center"><a href={business.tel} className="rounded-full bg-red px-7 py-4 font-bold text-white">Request Vehicle Recovery</a></div></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="More Ways We Can Help" title="Other Roadside & Recovery Services" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><RelatedCard title="Roadside Assistance" text="Professional roadside help for suitable vehicle problems that may be dealt with at your current location." href={getServiceNavigation("roadside-assistance").href} icon="fa-solid fa-screwdriver-wrench"/><RelatedCard title="Jumpstart Services" text="Battery assistance when a weak or flat battery prevents your vehicle from starting." href={getServiceNavigation("jumpstart-services").href} icon="fa-solid fa-car-battery"/><RelatedCard title="Accident Emergency Assistance" text="Professional vehicle recovery support following an accident or road traffic incident." href={getServiceNavigation("accident-emergency-assistance").href} icon="fa-solid fa-car-burst"/><RelatedCard title="Vehicle Transporting" text="Safe vehicle transportation when a car or van needs moving between agreed locations." href={getServiceNavigation("vehicle-transporting").href} icon="fa-solid fa-truck-ramp-box"/></div><div className="mt-9 flex justify-center gap-6"><Link href="/services" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">View All Services</Link><Link href="/contact" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">Contact Us</Link></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Common Questions" title="Vehicle Breakdown Recovery FAQs" /><FaqAccordion faqs={faqs} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/trackrecord-bg.jpg" alt="Professional vehicle recovery truck ready to assist" fill sizes="100vw" className="-z-20 object-cover"/><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site fade-up text-center"><Eyebrow>Need Recovery Now?</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">Get 24/7 Vehicle Breakdown Recovery</h2><p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">If your car or van has broken down and cannot safely continue, contact FSR Recovery Group. Tell us where you are, what vehicle you have and where it needs to go so we can discuss the recovery you need.</p><div className="flex justify-center"><ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} /></div><address className="mt-8 not-italic leading-7 text-white/75"><strong className="text-white">{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel}>{business.phoneDisplay}</a></address></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </main><Footer /></>;
}
