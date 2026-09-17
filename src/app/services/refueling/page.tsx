import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardGrid, ContactButtons, Eyebrow, FaqAccordion, RelatedCard, SectionHeading, type ServiceCard, type ServiceFaq } from "@/components/ServicePage";
import { getServiceNavigation } from "@/data/services";
import { business } from "@/data/business";

const title = "Need Fuel? Emergency Delivery to Your Location!";
const description = "Stay fueled and safe—request emergency fuel delivery for immediate assistance. We’re here to help!";
const path = "/services/refueling";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name, images: [{ url: "/images/service-refuel.jpg", alt: "Emergency roadside refueling assistance" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/service-refuel.jpg"] },
};

const situations: ServiceCard[] = [
  { icon: "fa-solid fa-gas-pump", title: "Fuel Tank Empty", text: "If your vehicle has stopped because the tank is empty, roadside refueling assistance may help you get moving again." },
  { icon: "fa-solid fa-triangle-exclamation", title: "Warning Light Ignored", text: "A low-fuel warning can quickly become a complete stop if there is no filling station nearby." },
  { icon: "fa-solid fa-route", title: "Unexpected Long Journey", text: "Longer-than-planned journeys, diversions or heavy traffic can sometimes use more fuel than expected." },
  { icon: "fa-solid fa-store-slash", title: "Fuel Stop Missed", text: "If a filling station is closed, unavailable or further away than expected, you may find yourself stranded without enough fuel to continue." },
  { icon: "fa-solid fa-location-dot", title: "Vehicle Stops Away From Home", text: "Running out of fuel while travelling can leave you unable to continue even though the vehicle has no mechanical fault." },
  { icon: "fa-solid fa-van-shuttle", title: "Van Runs Out of Fuel", text: "Suitable light vans can also require roadside fuel assistance when an unexpected empty tank interrupts work or travel." },
];
const included: ServiceCard[] = [
  { icon: "fa-solid fa-clipboard-list", title: "Situation Review", text: "Tell us where you are, what vehicle you have and what happened before the vehicle stopped." },
  { icon: "fa-solid fa-circle-question", title: "Fuel Type Confirmation", text: "Where possible, confirm the correct fuel type for your vehicle before assistance is arranged." },
  { icon: "fa-solid fa-gas-pump", title: "Roadside Fuel Assistance", text: "Fuel assistance can be provided at suitable accessible locations where it is safe to work." },
  { icon: "fa-solid fa-car-side", title: "Cars & Light Vans", text: "Refueling assistance may be available for common passenger cars and suitable light vans." },
  { icon: "fa-solid fa-key", title: "Restart Support", text: "Once the correct fuel has been added, the vehicle may be able to restart and continue where appropriate." },
  { icon: "fa-solid fa-truck-pickup", title: "Recovery if Required", text: "If the vehicle still will not start or another fault is suspected, further roadside assistance or recovery can be discussed." },
];
const benefits: ServiceCard[] = [
  { icon: "fa-solid fa-clock", title: "Available 24/7", text: "Out-of-fuel situations can happen at inconvenient times, so our roadside assistance service operates around the clock." },
  { icon: "fa-solid fa-gas-pump", title: "Practical Roadside Support", text: "The service is focused on getting the correct help to drivers whose vehicles have stopped because they have run out of fuel." },
  { icon: "fa-solid fa-van-shuttle", title: "Cars & Suitable Vans", text: "Assistance may be available for common passenger cars and suitable light commercial vehicles." },
  { icon: "fa-solid fa-comments", title: "Clear Communication", text: "Tell us your location, vehicle and fuel requirements so the right assistance can be discussed." },
  { icon: "fa-solid fa-truck-pickup", title: "Recovery Available", text: "If refueling does not get the vehicle moving, another fault may be involved and vehicle recovery can be discussed." },
  { icon: "fa-solid fa-map-location-dot", title: "Local Support", text: "Based in Darlington, FSR Recovery Group provides roadside and vehicle recovery services across Darlington and surrounding areas." },
];
const faqs: ServiceFaq[] = [
  ["What should I do if I run out of fuel?", "Move to a safe location if possible and contact FSR Recovery Group with your location, vehicle details and required fuel type. If you are in a dangerous road position, prioritise your safety and follow the appropriate emergency guidance."],
  ["Is your refueling service available 24/7?", "Yes. FSR Recovery Group provides 24/7 roadside assistance, including emergency refueling support for suitable out-of-fuel situations."],
  ["Can you bring fuel to my location?", "Where the location is safely accessible and covered by our service, roadside fuel assistance may be arranged. Contact us with your exact location to confirm availability."],
  ["What information do you need when I call?", "Provide your current location, vehicle make/model and the correct fuel type if known. Also explain whether the vehicle has completely stopped or is simply too low on fuel to continue."],
  ["Can you help if my van runs out of fuel?", "Refueling assistance may be available for suitable light vans. Tell us the vehicle details and fuel type when contacting us."],
  ["How much fuel will you provide?", "The amount of fuel provided depends on your vehicle and situation. Call or WhatsApp us with the details so the appropriate roadside assistance can be discussed."],
  ["What if my vehicle still will not start after refueling?", "If the vehicle does not restart after the correct fuel has been added, another fault may be involved. FSR Recovery Group can discuss further roadside assistance or vehicle recovery."],
  ["Can you help if I put the wrong fuel in my car?", "Our refueling service is for genuine out-of-fuel situations. Contact us to discuss your situation and we can confirm whether assistance is available."],
  ["Do you provide emergency refueling in Darlington?", "Yes. FSR Recovery Group is based in Darlington and provides roadside assistance across Darlington and surrounding areas. Contact us with your location to confirm availability."],
  ["Can you refuel my vehicle at night?", "Yes. Our roadside assistance service operates 24 hours a day, including overnight."],
  ["How much does emergency refueling cost?", "The cost depends on factors such as your location, vehicle, fuel requirements and circumstances. Call or WhatsApp us with the details so an appropriate quote can be discussed."],
].map(([question, answer]) => ({ question, answer }));

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Emergency Refueling Service", description, serviceType: "Emergency refueling service", provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phone, address: { "@type": "PostalAddress", streetAddress: business.address.street, addressLocality: business.address.locality, postalCode: business.address.postalCode, addressCountry: business.address.countryCode } }, areaServed: { "@type": "City", name: "Darlington" }, availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" } } },
  { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
] };

export default function RefuelingPage() {
  return <><Header activePath="/services" /><main>
    <section className="service-hero relative isolate min-h-[680px] overflow-hidden bg-navy text-white">
      <Image src="/images/service-refuel.jpg" alt="Emergency roadside refueling assistance" fill preload sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
      <div className="container-site flex min-h-[680px] items-center py-20"><div className="fade-up max-w-3xl">
        <Eyebrow>24/7 Fuel Assistance</Eyebrow><h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">Emergency Refueling When You Run Out of Fuel</h1>
        <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">Running out of fuel can leave you stranded even when your vehicle is otherwise working normally. FSR Recovery Group provides professional 24/7 emergency refueling assistance, helping drivers get enough fuel to continue their journey where appropriate.</p>
        <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for Fuel Help" />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">{["Available 24/7", "Roadside Fuel Assistance", "Cars & Suitable Vans"].map(x=><span key={x}><i className="fa-solid fa-circle-check mr-2 text-red" />{x}</span>)}</div>
      </div></div>
    </section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="fade-up relative min-h-[430px] overflow-hidden rounded-3xl"><Image src="/images/gallery-1.jpg" alt="Car receiving fuel assistance after running out" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
      <div className="fade-up"><Eyebrow>Fuel Help at Your Location</Eyebrow><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Out of Fuel? We Can Help You Get Moving Again</h2>
        <div className="space-y-4 leading-7 text-navy/70"><p>It is easier than many drivers think to run out of fuel. A warning light may be ignored for too long, a planned fuel stop may be closed, or a longer journey may use more fuel than expected.</p><p>When the tank runs dry, the vehicle may stop suddenly or refuse to restart. FSR Recovery Group provides roadside refueling assistance for suitable cars and light vans that have unexpectedly run out of fuel.</p><p>Where appropriate, enough fuel can be provided to help you restart the vehicle and continue to a nearby filling station or suitable destination.</p><p>If the vehicle still does not start after refueling, another fault may be involved and further roadside assistance or recovery can be discussed.</p></div>
        <a href={business.tel} className="mt-7 block rounded-2xl border-l-4 border-red bg-navy p-5 font-bold text-white">Run out of fuel? <span className="text-red">Call {business.phoneDisplay}</span> for roadside assistance.</a>
      </div>
    </div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="When You May Need Us" title="Fuel-Related Situations We Can Help With" intro="Running out of fuel can happen in different situations. Contact FSR Recovery Group with your vehicle details and location so the appropriate assistance can be discussed." /><CardGrid cards={situations} /><p className="mt-7 text-center text-sm text-navy/60">This service is for genuine out-of-fuel situations.</p></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/gallery-2.jpg" alt="24 hour roadside fuel help" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site"><div className="fade-up max-w-2xl"><Eyebrow>Day or Night</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">24-Hour Emergency Fuel Assistance</h2><div className="my-6 space-y-4 leading-7 text-white/75"><p>Running out of fuel can happen at any time, from an early morning journey to a late-night drive when nearby filling stations are limited or closed.</p><p>FSR Recovery Group provides 24/7 roadside assistance, including emergency refueling support for suitable out-of-fuel situations.</p><p>When contacting us, provide your location, vehicle make/model and the fuel type your vehicle requires if known. This helps us understand what assistance is needed.</p></div><ContactButtons dark callLabel="Call for Fuel Assistance" whatsappLabel="WhatsApp Us" /></div></div></section>

    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Roadside Fuel Support" title="What Our Refueling Service Includes" intro="Our emergency refueling service is designed to help drivers who have genuinely run out of fuel and need practical roadside assistance to get moving again." /><CardGrid cards={included} /></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="Simple Process" title="How Emergency Refueling Works" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["01","Contact Us","Call or WhatsApp FSR Recovery Group and tell us that your vehicle has run out of fuel."],["02","Share the Details","Provide your location, vehicle make/model and the fuel type required if you know it."],["03","Fuel Assistance Is Arranged","The appropriate roadside response is discussed based on your vehicle, location and circumstances."],["04","Get Moving Again","Where appropriate, enough fuel is provided to help restart the vehicle and allow you to continue to a suitable filling station or destination."]].map(([n,t,x])=><article key={n} className="fade-up rounded-3xl border border-white/10 bg-white/[.06] p-6"><span className="text-4xl font-extrabold text-red">{n}</span><h3 className="mb-2 mt-5 text-xl font-bold">{t}</h3><p className="leading-7 text-white/70">{x}</p></article>)}</div><div className="mt-9 flex justify-center"><ContactButtons dark callLabel="Call Now" whatsappLabel="WhatsApp for Fuel Help" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Why Choose Us" title="Straightforward Help When the Tank Runs Dry" /><CardGrid cards={benefits} /></div></section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="fade-up"><Eyebrow>Local Fuel Assistance</Eyebrow><h2 className="text-3xl font-extrabold sm:text-4xl">Emergency Refueling in Darlington and Surrounding Areas</h2><div className="my-6 space-y-4 leading-7 text-navy/70"><p>FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB and provides roadside fuel assistance for drivers across <Link href="/areas/darlington" className="font-semibold text-red">Darlington</Link> and surrounding areas.</p><p>If your car or van has run out of fuel at home, near work, in a car park or while travelling through the area, contact us with your location and vehicle details.</p><p>If you are outside Darlington, call or WhatsApp us with your location so we can confirm whether assistance is available.</p></div><address className="mb-7 rounded-2xl bg-slate-100 p-5 not-italic leading-7"><strong>{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel} className="font-bold text-red">{business.phoneDisplay}</a></address><div className="flex flex-col gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-6 py-3.5 text-center font-bold text-white">Call for Fuel Help</a><Link href="/areas" className="rounded-full border border-navy/20 px-6 py-3.5 text-center font-bold">View Areas Covered</Link></div></div><div className="fade-up relative min-h-[480px] overflow-hidden rounded-3xl"><Image src="/images/service-refuel.jpg" alt="Professional refueling assistance for a stranded vehicle" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Know the Next Step" title="Out of Fuel or Another Vehicle Problem?" /><div className="grid gap-6 lg:grid-cols-2">{[["Genuine Out-of-Fuel Situation","If the vehicle has stopped because the tank is empty, emergency refueling may be enough to help you restart and continue your journey.","Where appropriate, the goal is to provide enough fuel for you to reach a suitable filling station or destination.","/images/service-refuel.jpg","Emergency roadside refueling assistance"],["Vehicle Still Won't Start","If the vehicle does not restart after the correct fuel has been added, another battery, electrical, mechanical or fuel-system problem may be involved.","In that situation, FSR Recovery Group can discuss further roadside assistance or professional vehicle recovery.","/images/service-breakdown.jpg","Vehicle prepared for breakdown recovery"]].map(([t,a,b,img,alt])=><article key={t} className="fade-up overflow-hidden rounded-3xl bg-navy text-white"><div className="relative h-64"><Image src={img} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="p-7"><h3 className="mb-3 text-2xl font-bold">{t}</h3><p className="mb-3 leading-7 text-white/70">{a}</p><p className="leading-7 text-white/70">{b}</p></div></article>)}</div><div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-7 py-4 font-bold text-white">Request Refueling Assistance</a><Link href="/services/vehicle-breakdown-recovery" className="rounded-full border border-navy/20 px-7 py-4 font-bold text-navy">View 24/7 Vehicle Breakdown Recovery</Link></div></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="More Ways We Can Help" title="Related Roadside & Recovery Services" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><RelatedCard title="Roadside Assistance" text="Professional roadside help for suitable vehicle problems at your current location." href={getServiceNavigation("roadside-assistance").href} icon="fa-solid fa-screwdriver-wrench"/><RelatedCard title="Jumpstart Services" text="Battery assistance when a weak or flat battery prevents your vehicle from starting." href={getServiceNavigation("jumpstart-services").href} icon="fa-solid fa-car-battery"/><RelatedCard title="24/7 Vehicle Breakdown Recovery" text="Professional recovery when your vehicle cannot safely continue after roadside assistance." href={getServiceNavigation("vehicle-breakdown-recovery").href} icon="fa-solid fa-truck-pickup"/><RelatedCard title="Changing Spare Tyre" text="Help fitting an available suitable spare wheel when a flat or damaged tyre stops your journey." href={getServiceNavigation("changing-spare-tyre").href} icon="fa-solid fa-circle-dot"/></div><div className="mt-9 flex justify-center gap-6"><Link href="/services" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">View All Services</Link><Link href="/contact" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">Contact Us</Link></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Common Questions" title="Emergency Refueling FAQs" /><FaqAccordion faqs={faqs} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/service-refuel.jpg" alt="24 hour roadside fuel help" fill sizes="100vw" className="-z-20 object-cover"/><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site fade-up text-center"><Eyebrow>Run Out of Fuel?</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">Get 24/7 Emergency Refueling Assistance</h2><p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">If your car or van has stopped because it has run out of fuel, contact FSR Recovery Group. Tell us where you are, what vehicle you have and the fuel type required so we can discuss the roadside assistance you need.</p><div className="flex justify-center"><ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for Fuel Help" /></div><address className="mt-8 not-italic leading-7 text-white/75"><strong className="text-white">{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel}>{business.phoneDisplay}</a></address></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </main><Footer /></>;
}
