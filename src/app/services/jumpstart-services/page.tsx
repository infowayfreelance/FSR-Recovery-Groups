import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardGrid, ContactButtons, Eyebrow, FaqAccordion, RelatedCard, SectionHeading, type ServiceCard, type ServiceFaq } from "@/components/ServicePage";
import { business } from "@/data/business";

const title = "Fast Car Jump Start Service Available Now";
const description = "Stuck with a dead battery? Our professional jump start service is just a call away. Reach out for assistance!";
const path = "/services/jumpstart-services";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name, images: [{ url: "/images/service-jumpstart.jpg", alt: "Professional jumpstart assistance for a car" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/service-jumpstart.jpg"] },
};

const situations: ServiceCard[] = [
  { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "If the battery has lost its charge and cannot provide enough power to start the engine, professional jumpstart assistance may help." },
  { icon: "fa-solid fa-car", title: "Vehicle Left Standing", text: "A vehicle that has not been driven for an extended period can gradually lose enough battery charge to prevent starting." },
  { icon: "fa-solid fa-lightbulb", title: "Lights Left On", text: "Headlights, interior lights or other electrical equipment left operating while the engine is off can drain the battery." },
  { icon: "fa-solid fa-gauge", title: "Slow Engine Crank", text: "If the engine turns over much more slowly than usual, the battery may not be supplying enough starting power." },
  { icon: "fa-solid fa-volume-high", title: "Clicking When Starting", text: "A clicking sound when you try to start the vehicle can sometimes be associated with insufficient battery power." },
  { icon: "fa-solid fa-snowflake", title: "Cold-Weather Starting Problems", text: "Lower temperatures can reduce battery performance, particularly when the battery is already weak or ageing." },
];
const included: ServiceCard[] = [
  { icon: "fa-solid fa-clipboard-list", title: "Vehicle Details Review", text: "Tell us the make, model and type of vehicle so the appropriate assistance can be discussed." },
  { icon: "fa-solid fa-car-battery", title: "Battery-Related Starting Help", text: "Where the symptoms suggest insufficient battery power, suitable jumpstart assistance can be provided." },
  { icon: "fa-solid fa-toolbox", title: "Professional Equipment", text: "Appropriate equipment is used rather than relying on improvised cables or unsafe starting methods." },
  { icon: "fa-solid fa-car-side", title: "Cars & Light Vans", text: "Jumpstart assistance is available for common passenger cars and suitable light vans depending on the vehicle." },
  { icon: "fa-solid fa-location-dot", title: "Roadside or Location Support", text: "Assistance may be available at suitable homes, workplaces, car parks and other accessible locations." },
  { icon: "fa-solid fa-truck-pickup", title: "Recovery if Required", text: "If the vehicle remains undriveable after appropriate assistance, professional vehicle breakdown recovery can be discussed." },
];
const benefits: ServiceCard[] = [
  { icon: "fa-solid fa-clock", title: "Available 24/7", text: "Battery problems can happen at inconvenient times, so our roadside assistance service operates around the clock." },
  { icon: "fa-solid fa-car-battery", title: "Service-Specific Support", text: "Jumpstart assistance focuses on suitable battery-related starting problems rather than treating every non-starting vehicle as a recovery job." },
  { icon: "fa-solid fa-toolbox", title: "Professional Equipment", text: "Suitable roadside equipment is used to provide controlled battery-starting assistance." },
  { icon: "fa-solid fa-van-shuttle", title: "Cars & Suitable Vans", text: "Support is available for common passenger cars and suitable light commercial vehicles." },
  { icon: "fa-solid fa-truck-pickup", title: "Recovery Available", text: "If the vehicle cannot be restarted or safely driven, vehicle breakdown recovery can be discussed." },
  { icon: "fa-solid fa-map-location-dot", title: "Local Support", text: "Based in Darlington, FSR Recovery Group provides roadside and vehicle recovery services across Darlington and surrounding areas." },
];
const faqs: ServiceFaq[] = [
  ["Do you provide jumpstart services 24/7?", "Yes. FSR Recovery Group provides 24/7 roadside assistance, including jumpstart support for suitable cars and light vans."],
  ["Can you help if my car battery is completely flat?", "If a discharged battery is preventing the vehicle from starting, our flat battery assistance may be suitable. Contact us with your location and vehicle details so the situation can be discussed."],
  ["Can you jumpstart a van?", "Jumpstart assistance may be available for suitable light vans. Tell us the make, model and vehicle type when contacting us."],
  ["What should I tell you when requesting a jumpstart?", "Provide your current location, vehicle make and model, and explain what happens when you turn the key or press the start button."],
  ["Why won't my car start after a jumpstart?", "A non-starting vehicle can have causes other than a flat battery, including starter, electrical, charging or mechanical problems. If the vehicle remains undriveable, recovery may be required."],
  ["Can you help me if the vehicle is at home?", "Where the location is accessible and covered by our service, jumpstart assistance may be available at a home address as well as other suitable locations."],
  ["What if my battery keeps going flat?", "Repeated battery problems can indicate that the battery or charging system needs professional inspection. A jumpstart may help start the vehicle but does not replace diagnosis or repair."],
  ["Do you replace car batteries?", "Our service provides jumpstart assistance for suitable vehicles. If the battery may need replacing, arrange an inspection and replacement with a qualified battery professional."],
  ["What happens if the jumpstart does not work?", "If the vehicle remains unable to start or cannot safely continue, FSR Recovery Group can discuss vehicle breakdown recovery to an agreed destination."],
  ["Do you offer a jump start service in Darlington?", "Yes. FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB, and provides a car jump start service across Darlington and the surrounding areas for vehicles with a flat battery. Contact us with your location to confirm availability."],
  ["How much does a jumpstart service cost?", "The cost depends on factors such as the vehicle, location and circumstances. Call or WhatsApp us with the details so an appropriate quote can be discussed."],
].map(([question, answer]) => ({ question, answer }));

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Jumpstart Services", description, serviceType: "Vehicle jumpstart service", provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phone, address: { "@type": "PostalAddress", streetAddress: business.address.street, addressLocality: business.address.locality, postalCode: business.address.postalCode, addressCountry: business.address.countryCode } }, areaServed: { "@type": "City", name: "Darlington" }, availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" } } },
  { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
] };

export default function JumpstartServicesPage() {
  return <><Header activePath="/services" /><main>
    <section className="service-hero relative isolate min-h-[680px] overflow-hidden bg-navy text-white">
      <Image src="/images/service-jumpstart.jpg" alt="Car receiving battery starting assistance" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
      <div className="container-site flex min-h-[680px] items-center py-20"><div className="fade-up max-w-3xl">
        <Eyebrow>24/7 Battery Assistance</Eyebrow><h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">Jumpstart Services for Flat or Weak Batteries</h1>
        <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">A flat or weak battery can leave your car or van unable to start when you need it most. FSR Recovery Group provides professional 24/7 jumpstart services for suitable vehicles, helping drivers get the right roadside assistance when battery power is the problem.</p>
        <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for a Jumpstart" />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">{["Available 24/7", "Flat Battery Assistance", "Cars & Suitable Vans"].map(x=><span key={x}><i className="fa-solid fa-circle-check mr-2 text-red" />{x}</span>)}</div>
      </div></div>
    </section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="fade-up relative min-h-[430px] overflow-hidden rounded-3xl"><Image src="/images/service-jumpstart.jpg" alt="Professional jumpstart assistance for a car" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
      <div className="fade-up"><Eyebrow>Battery Help at Your Location</Eyebrow><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">When Your Car Won&apos;t Start</h2>
        <div className="space-y-4 leading-7 text-navy/70"><p>You turn the key or press the start button, but the engine does not start. In many cases, a weak or discharged battery may be the reason your journey cannot begin.</p><p>FSR Recovery Group provides professional jumpstart assistance for suitable cars and light vans. We come to your location and provide the appropriate battery-starting support where the situation allows.</p><p>A battery can lose charge for different reasons. The vehicle may have been left standing, lights may have been left on, cold conditions may have reduced battery performance, or the battery may simply be too weak to start the engine.</p><p>If a suitable jumpstart does not get the vehicle running, we can discuss the next step, including vehicle recovery where required.</p></div>
        <a href={business.tel} className="mt-7 block rounded-2xl border-l-4 border-red bg-navy p-5 font-bold text-white">Car not starting? <span className="text-red">Call {business.phoneDisplay}</span> for jumpstart assistance.</a>
      </div>
    </div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="When You May Need Us" title="Common Situations That May Need a Jumpstart" intro="A vehicle that will not start can be caused by different faults, but several common situations may point towards a weak or discharged battery." /><CardGrid cards={situations} /><p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-navy/60">These symptoms can have other causes. A jumpstart is not a full diagnosis of the vehicle&apos;s battery, starter or charging system.</p></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/service-jumpstart.jpg" alt="24 hour jumpstart service" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site"><div className="fade-up max-w-2xl"><Eyebrow>Day or Night</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">24-Hour Emergency Jump Start Assistance</h2><div className="my-6 space-y-4 leading-7 text-white/75"><p>A flat battery can cause problems at any time. Your vehicle may refuse to start early in the morning, after work, late at night or during a weekend journey.</p><p>FSR Recovery Group provides 24/7 roadside assistance, including professional flat battery assistance for suitable vehicles with battery-related starting problems.</p><p>When contacting us, provide your location, vehicle make and model, and explain what happens when you try to start the engine. This helps us understand what type of assistance may be required.</p></div><ContactButtons dark callLabel="Call for Jumpstart Assistance" whatsappLabel="WhatsApp Us" /></div></div></section>

    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Professional Battery Support" title="What Our Jumpstart Service Includes" intro="Our jumpstart service is designed to provide practical roadside assistance when a suitable vehicle cannot start because of a weak or discharged battery." /><CardGrid cards={included} /></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white [&_p:last-child]:!text-white/70"><SectionHeading eyebrow="Simple Process" title="How Jumpstart Assistance Works" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
      ["01","Contact Us","Call or WhatsApp FSR Recovery Group and tell us that your vehicle will not start."], ["02","Share the Details","Provide your current location, vehicle make/model and describe what happens when you try to start it."], ["03","Assistance Is Arranged","The appropriate roadside response is discussed based on the vehicle and information you provide."], ["04","Start or Arrange Recovery","Where a suitable jumpstart gets the vehicle running, you can take the appropriate next steps. If it remains undriveable, recovery can be discussed."]
    ].map(([n,t,x])=><article key={n} className="fade-up rounded-3xl border border-white/10 bg-white/[.06] p-6"><span className="text-4xl font-extrabold text-red">{n}</span><h3 className="mb-2 mt-5 text-xl font-bold">{t}</h3><p className="leading-7 text-white/70">{x}</p></article>)}</div><div className="mt-9 flex justify-center"><ContactButtons dark whatsappLabel="WhatsApp for Battery Help" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Why Choose Us" title="Straightforward Help for a Vehicle That Won't Start" /><CardGrid cards={benefits} /></div></section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="fade-up"><Eyebrow>Local Battery Assistance</Eyebrow><h2 className="text-3xl font-extrabold sm:text-4xl">Car Jump Start Service in Darlington and Surrounding Areas</h2><div className="my-6 space-y-4 leading-7 text-navy/70"><p>FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB, providing a dependable <Link href="/areas/darlington" className="font-semibold text-red">car jump start service in Darlington</Link> and the surrounding areas for drivers with a flat battery.</p><p>Whether your car won&apos;t start at home, outside work, in a car park or at another accessible location nearby, contact us with your vehicle details so we can arrange a battery jump start or discuss wider roadside assistance.</p><p>If you are outside Darlington, call or WhatsApp us with your location so we can confirm whether assistance is available.</p></div><address className="mb-7 rounded-2xl bg-slate-100 p-5 not-italic leading-7"><strong>{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel} className="font-bold text-red">{business.phoneDisplay}</a></address><div className="flex flex-col gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-6 py-3.5 text-center font-bold text-white">Call for a Jumpstart</a><Link href="/areas" className="rounded-full border border-navy/20 px-6 py-3.5 text-center font-bold">View Areas Covered</Link></div></div><div className="fade-up relative min-h-[480px] overflow-hidden rounded-3xl"><Image src="/images/service-jumpstart.jpg" alt="Flat battery roadside assistance near Darlington" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Know the Next Step" title="Jumpstart Assistance or Vehicle Recovery?" /><div className="grid gap-6 lg:grid-cols-2">{[["Jumpstart Assistance","A jumpstart may be appropriate when a weak or discharged battery is preventing the engine from starting but the vehicle is otherwise suitable for roadside assistance.","The aim is to provide enough starting support for the vehicle to get running where appropriate.","/images/service-jumpstart.jpg","Technician providing roadside help for a car"],["Vehicle Breakdown Recovery","If the vehicle still will not start after suitable assistance, another electrical, starter, charging or mechanical issue may be involved.","If the vehicle remains undriveable, FSR Recovery Group can arrange professional recovery to an agreed garage or destination.","/images/service-breakdown.jpg","Vehicle prepared for professional breakdown recovery"]].map(([t,a,b,img,alt])=><article key={t} className="fade-up overflow-hidden rounded-3xl bg-navy text-white"><div className="relative h-64"><Image src={img} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="p-7"><h3 className="mb-3 text-2xl font-bold">{t}</h3><p className="mb-3 leading-7 text-white/70">{a}</p><p className="leading-7 text-white/70">{b}</p></div></article>)}</div><div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-7 py-4 font-bold text-white">Request a Jumpstart</a><Link href="/services/vehicle-breakdown-recovery" className="rounded-full border border-navy/20 px-7 py-4 font-bold text-navy">View 24/7 Vehicle Breakdown Recovery</Link></div></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="More Ways We Can Help" title="Related Roadside & Recovery Services" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><RelatedCard title="Roadside Assistance" text="Professional help for suitable vehicle problems at your current location." href="/services/roadside-assistance" icon="fa-solid fa-screwdriver-wrench"/><RelatedCard title="24/7 Vehicle Breakdown Recovery" text="Recovery when your vehicle cannot be restarted or safely continue its journey." href="/services/vehicle-breakdown-recovery" icon="fa-solid fa-truck-pickup"/><RelatedCard title="Changing Spare Tyre" text="Roadside help when a tyre problem leaves you unable to continue and a suitable spare is available." href="/services/changing-spare-tyre" icon="fa-solid fa-circle-dot"/><RelatedCard title="Refueling" text="Assistance when your vehicle has stopped because it has unexpectedly run out of fuel." href="/services/refueling" icon="fa-solid fa-gas-pump"/></div><div className="mt-9 flex justify-center gap-6"><Link href="/services" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">View All Services</Link><Link href="/contact" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">Contact FSR Recovery Group</Link></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Common Questions" title="Jumpstart Services FAQs" /><FaqAccordion faqs={faqs} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/service-jumpstart.jpg" alt="Car receiving battery starting assistance" fill sizes="100vw" className="-z-20 object-cover"/><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site fade-up text-center"><Eyebrow>Car Won&apos;t Start?</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">Get 24/7 Jumpstart Assistance</h2><p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">If a weak or flat battery has left your car or van unable to start, contact FSR Recovery Group. Tell us where you are and what vehicle you have so we can discuss the roadside assistance you need.</p><div className="flex justify-center"><ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for a Jumpstart" /></div><address className="mt-8 not-italic leading-7 text-white/75"><strong className="text-white">{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel}>{business.phoneDisplay}</a></address></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </main><Footer /></>;
}
