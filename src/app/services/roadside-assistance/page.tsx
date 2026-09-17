import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardGrid, ContactButtons, Eyebrow, FaqAccordion, RelatedCard, SectionHeading, type ServiceCard, type ServiceFaq } from "@/components/ServicePage";
import { getServiceNavigation } from "@/data/services";
import { business } from "@/data/business";

const title = "Reliable Roadside Assistance When You Need It";
const description = "Don’t let car troubles ruin your day. Reach out for immediate roadside assistance and get back on track!";
const path = "/services/roadside-assistance";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const situations: ServiceCard[] = [
  { icon: "fa-solid fa-gears", title: "Vehicle Won't Start", text: "If your car or van suddenly refuses to start, contact us and explain what happens when you try to start the engine." },
  { icon: "fa-solid fa-key", title: "Weak or Flat Battery", text: "A discharged or weak battery can prevent your vehicle from starting. Jumpstart assistance may be suitable depending on the situation." },
  { icon: "fa-solid fa-bolt", title: "Tyre Problem", text: "A flat or damaged tyre can stop your journey. Where appropriate, help with changing to an available spare tyre may be possible." },
  { icon: "fa-solid fa-temperature-high", title: "Out of Fuel", text: "Running out of fuel can leave you stranded away from a filling station. Our Refueling service may provide the roadside help you need." },
  { icon: "fa-solid fa-gauge-high", title: "Vehicle Stuck", text: "If your vehicle has become stuck and cannot regain traction, our Winch Out service may be suitable depending on the location and conditions." },
  { icon: "fa-solid fa-triangle-exclamation", title: "Unexpected Roadside Problem", text: "If you are unsure what has gone wrong, contact us and describe what happened. We can discuss the most appropriate assistance." },
];
const included: ServiceCard[] = [
  { icon: "fa-solid fa-truck-ramp-box", title: "Initial Situation Assessment", text: "Tell us what has happened and what symptoms you are experiencing so the appropriate service can be discussed." },
  { icon: "fa-solid fa-car", title: "Battery Assistance", text: "If a weak or discharged battery is preventing the vehicle from starting, jumpstart assistance may be appropriate." },
  { icon: "fa-solid fa-van-shuttle", title: "Spare Tyre Assistance", text: "Where you have a suitable spare tyre available, assistance with changing it may be possible depending on the circumstances." },
  { icon: "fa-solid fa-screwdriver-wrench", title: "Refueling Assistance", text: "If you have unexpectedly run out of fuel, roadside refueling support may help you continue your journey." },
  { icon: "fa-solid fa-house", title: "Winch-Out Support", text: "A stuck vehicle may require controlled winching depending on the location, ground conditions and access." },
  { icon: "fa-solid fa-shield-halved", title: "Recovery if Required", text: "If the vehicle cannot safely continue after roadside assistance, professional vehicle breakdown recovery can be arranged." },
];
const benefits: ServiceCard[] = [
  { icon: "fa-solid fa-clock", title: "Available 24/7", text: "Roadside problems can happen at any hour, so our assistance service is available around the clock." },
  { icon: "fa-solid fa-shield-halved", title: "Multiple Roadside Services", text: "Different solutions are available depending on whether you have a battery problem, tyre issue, fuel problem or another suitable roadside situation." },
  { icon: "fa-solid fa-car-side", title: "Cars & Light Vans", text: "Roadside support is available for common passenger cars and suitable light vans." },
  { icon: "fa-solid fa-location-arrow", title: "Recovery Available", text: "If roadside assistance cannot get your vehicle moving safely, professional breakdown recovery can be discussed." },
  { icon: "fa-solid fa-comments", title: "Clear Communication", text: "Tell us what has happened and where you are, and we can explain the most appropriate next step." },
  { icon: "fa-solid fa-map-location-dot", title: "Local Support", text: "Based in Darlington, FSR Recovery Group provides roadside assistance across Darlington and surrounding areas." },
];
const faqs: ServiceFaq[] = [
  ["What is roadside assistance?", "Roadside assistance provides professional help when a vehicle develops a problem at its current location. Depending on the issue, suitable assistance may help you continue your journey without needing full vehicle recovery."],
  ["Is your roadside assistance available 24/7?", "Yes. FSR Recovery Group provides roadside assistance 24 hours a day, including daytime, overnight and weekend support."],
  ["What roadside problems can you help with?", "Depending on the situation, services can include jumpstart assistance, spare tyre help, refueling, winch-out support and vehicle recovery when necessary."],
  ["Can you help if my car won't start?", "Yes. Contact us and explain what happens when you try to start the vehicle. We can discuss whether jumpstart assistance, another roadside service or recovery may be appropriate."],
  ["Can you help with a flat battery?", "Yes. FSR Recovery Group provides Jumpstart Services for suitable vehicles with weak or discharged batteries."],
  ["Can you help with a flat tyre?", "If you have a suitable spare tyre available, assistance with changing it may be possible depending on the vehicle, location and circumstances."],
  ["What happens if roadside assistance cannot fix the problem?", "If your vehicle remains undriveable or cannot safely continue, FSR Recovery Group can arrange professional vehicle breakdown recovery to an agreed destination."],
  ["Do you provide roadside assistance for vans?", "Roadside support may be available for suitable light vans. Tell us the vehicle type and size when contacting us so the appropriate assistance can be discussed."],
  ["Do you provide roadside assistance in Darlington?", "Yes. FSR Recovery Group is based in Darlington and provides roadside assistance across Darlington and surrounding areas. Contact us with your location to confirm availability."],
  ["How much does roadside assistance cost?", "The cost depends on factors such as the type of assistance required, your vehicle, location and circumstances. Call or WhatsApp us with the details so an appropriate quote can be discussed."],
].map(([question, answer]) => ({ question, answer }));

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Roadside Assistance", description, serviceType: "Roadside assistance", provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phone, address: { "@type": "PostalAddress", streetAddress: business.address.street, addressLocality: business.address.locality, postalCode: business.address.postalCode, addressCountry: business.address.countryCode } }, areaServed: { "@type": "City", name: "Darlington" }, availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" } } },
  { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
] };

export default function RoadsideAssistancePage() {
  return <><Header activePath="/services" /><main>
    <section className="service-hero relative isolate min-h-[680px] overflow-hidden bg-navy text-white">
      <Image src="/images/service-roadside.jpg" alt="Professional roadside assistance for a stranded vehicle" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
      <div className="container-site flex min-h-[680px] items-center py-20"><div className="fade-up max-w-3xl">
        <Eyebrow>24/7 Roadside Support</Eyebrow><h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">Roadside Assistance When You Need It</h1>
        <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">Unexpected vehicle trouble can leave you stranded even when your vehicle does not immediately need full recovery. FSR Recovery Group provides professional 24/7 roadside assistance for drivers who need help with common vehicle problems at their current location.</p>
        <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for Roadside Help" />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">{["Available 24/7", "Cars & Vans", "Professional Roadside Help"].map(x=><span key={x}><i className="fa-solid fa-circle-check mr-2 text-red" />{x}</span>)}</div>
      </div></div>
    </section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="fade-up relative min-h-[430px] overflow-hidden rounded-3xl"><Image src="/images/service-jumpstart.jpg" alt="Roadside help for a car" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
      <div className="fade-up"><Eyebrow>Help at Your Location</Eyebrow><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Professional Roadside Assistance When Your Journey Stops</h2>
        <div className="space-y-4 leading-7 text-navy/70"><p>A vehicle problem does not always mean your car or van needs to be transported immediately. A weak battery, tyre problem, fuel issue or another minor fault may leave you unable to continue but could still be suitable for roadside assistance.</p><p>FSR Recovery Group provides roadside help for drivers who need professional assistance where their vehicle has stopped. We assess the information you provide and determine the most suitable next step.</p><p>Where the problem can be dealt with safely at your location, roadside assistance may help you continue your journey without full vehicle recovery.</p><p>If the vehicle remains undriveable, FSR Recovery Group can also arrange professional breakdown recovery to an agreed destination.</p></div>
        <a href={business.tel} className="mt-7 block rounded-2xl border-l-4 border-red bg-navy p-5 font-bold text-white">Stranded now? <span className="text-red">Call {business.phoneDisplay}</span> for 24/7 roadside assistance.</a>
      </div>
    </div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="When You May Need Us" title="Roadside Problems We Can Help With" intro="Different vehicle problems require different solutions. Contact FSR Recovery Group and tell us what has happened so we can help determine the appropriate roadside response." /><CardGrid cards={situations} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/service-tyre.jpg" alt="24 hour roadside assistance" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site"><div className="fade-up max-w-2xl"><Eyebrow>Day or Night</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">24-Hour Roadside Assistance</h2><div className="my-6 space-y-4 leading-7 text-white/75"><p>Vehicle problems can happen at any hour. Your car may refuse to start early in the morning, develop a tyre problem during the day or leave you stranded late at night.</p><p>FSR Recovery Group provides 24/7 roadside assistance so drivers can request professional help whenever an unexpected vehicle problem interrupts their journey.</p><p>When contacting us, provide your location, vehicle details and a short description of what has happened. This helps us understand what type of roadside support may be suitable.</p></div><ContactButtons dark callLabel="Call for Roadside Assistance" whatsappLabel="WhatsApp Us" /></div></div></section>

    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Roadside Support" title="Practical Help for Common Vehicle Problems" intro="Our roadside assistance service is designed to help with suitable problems at your current location and identify the next step when the vehicle cannot continue." /><CardGrid cards={included} /></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white [&_p:last-child]:!text-white/70"><SectionHeading eyebrow="Simple Process" title="How Roadside Assistance Works" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
      ["01","Contact Us","Call or WhatsApp FSR Recovery Group and tell us that you need roadside assistance."], ["02","Share the Details","Provide your location, vehicle make/model and a short description of the problem."], ["03","We Arrange the Right Help","The appropriate roadside response is discussed based on the information you provide."], ["04","Continue or Arrange Recovery","Where the problem can be dealt with safely, you may be able to continue your journey. If not, vehicle recovery can be arranged."]
    ].map(([n,t,x])=><article key={n} className="fade-up rounded-3xl border border-white/10 bg-white/[.06] p-6"><span className="text-4xl font-extrabold text-red">{n}</span><h3 className="mb-2 mt-5 text-xl font-bold">{t}</h3><p className="leading-7 text-white/70">{x}</p></article>)}</div><div className="mt-9 flex justify-center"><ContactButtons dark whatsappLabel="WhatsApp for Help" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Why Choose Us" title="Straightforward Roadside Help When You Need It" /><CardGrid cards={benefits} /></div></section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="fade-up"><Eyebrow>Local Roadside Support</Eyebrow><h2 className="text-3xl font-extrabold sm:text-4xl">Roadside Assistance in Darlington and Surrounding Areas</h2><div className="my-6 space-y-4 leading-7 text-navy/70"><p>FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB and provides roadside assistance for drivers in <Link href="/areas/darlington" className="font-semibold text-red">Darlington</Link> and surrounding areas.</p><p>Whether your vehicle develops a problem near home, outside work, in a car park or on the <Link href="/areas/a66" className="font-semibold text-red">A66</Link> while travelling through the area, contact us with your location and vehicle details.</p><p>If you are outside Darlington, call or WhatsApp us with your location so we can confirm whether assistance is available.</p></div><address className="mb-7 rounded-2xl bg-slate-100 p-5 not-italic leading-7"><strong>{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel} className="font-bold text-red">{business.phoneDisplay}</a></address><div className="flex flex-col gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-6 py-3.5 text-center font-bold text-white">Call for Roadside Help</a><Link href="/areas" className="rounded-full border border-navy/20 px-6 py-3.5 text-center font-bold">View Areas Covered</Link></div></div><div className="fade-up relative min-h-[480px] overflow-hidden rounded-3xl"><Image src="/images/service-roadside.jpg" alt="Vehicle receiving roadside support near Darlington" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="The Right Help for the Situation" title="Roadside Assistance or Vehicle Recovery?" /><div className="grid gap-6 lg:grid-cols-2">{[["Roadside Assistance","Roadside assistance may be suitable when the problem can potentially be dealt with at your current location, such as a flat battery, fuel issue or suitable tyre problem.","The aim is to provide the appropriate help without transporting the vehicle unnecessarily.","/images/service-jumpstart.jpg","Technician providing roadside help for a car"],["Vehicle Breakdown Recovery","If the vehicle remains undriveable or cannot safely continue, professional recovery may be the better option.","FSR Recovery Group can transport the vehicle to an agreed garage, home address or another suitable destination.","/images/service-breakdown.jpg","Vehicle prepared for professional breakdown recovery"]].map(([t,a,b,img,alt])=><article key={t} className="fade-up overflow-hidden rounded-3xl bg-navy text-white"><div className="relative h-64"><Image src={img} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="p-7"><h3 className="mb-3 text-2xl font-bold">{t}</h3><p className="mb-3 leading-7 text-white/70">{a}</p><p className="leading-7 text-white/70">{b}</p></div></article>)}</div><div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-7 py-4 font-bold text-white">Request Roadside Assistance</a><Link href="/services/vehicle-breakdown-recovery" className="rounded-full border border-navy/20 px-7 py-4 font-bold text-navy">View 24/7 Vehicle Breakdown Recovery</Link></div></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="More Ways We Can Help" title="Related Roadside & Recovery Services" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><RelatedCard title="Jumpstart Services" text="Professional battery assistance when a weak or flat battery prevents your vehicle from starting." href={getServiceNavigation("jumpstart-services").href} icon="fa-solid fa-car-battery"/><RelatedCard title="Changing Spare Tyre" text="Help changing to an available spare tyre when a tyre problem leaves you unable to continue." href={getServiceNavigation("changing-spare-tyre").href} icon="fa-solid fa-circle-dot"/><RelatedCard title="Refueling" text="Roadside assistance when your vehicle unexpectedly runs out of fuel." href={getServiceNavigation("refueling").href} icon="fa-solid fa-gas-pump"/><RelatedCard title="Winch Out" text="Professional vehicle extraction when your car or van becomes stuck and cannot regain traction." href={getServiceNavigation("winch-out").href} icon="fa-solid fa-truck-monster"/></div><div className="mt-9 flex justify-center gap-6"><Link href="/services" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">View All Services</Link><Link href="/contact" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">Contact FSR Recovery Group</Link></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Common Questions" title="Roadside Assistance FAQs" /><FaqAccordion faqs={faqs} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/service-roadside.jpg" alt="Professional roadside assistance for a stranded vehicle" fill sizes="100vw" className="-z-20 object-cover"/><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site fade-up text-center"><Eyebrow>Need Roadside Help?</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">Get 24/7 Roadside Assistance</h2><p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">If a vehicle problem has left you stranded, contact FSR Recovery Group. Tell us where you are, what vehicle you have and what has happened so we can discuss the roadside assistance you need.</p><div className="flex justify-center"><ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for Roadside Help" /></div><address className="mt-8 not-italic leading-7 text-white/75"><strong className="text-white">{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel}>{business.phoneDisplay}</a></address></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </main><Footer /></>;
}
