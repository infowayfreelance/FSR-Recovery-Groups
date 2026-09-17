import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardGrid, ContactButtons, Eyebrow, FaqAccordion, RelatedCard, SectionHeading, type ServiceCard, type ServiceFaq } from "@/components/ServicePage";
import { getServiceNavigation } from "@/data/services";
import { business } from "@/data/business";

const title = "Fast Roadside Tyre Change Assistance Available";
const description = "Stuck with a flat tyre? Our roadside assistance offers quick tyre changes wherever you are. Call now!";
const path = "/services/changing-spare-tyre";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name, images: [{ url: "/images/service-tyre.jpg", alt: "Professional spare tyre change assistance" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/service-tyre.jpg"] },
};

const situations: ServiceCard[] = [
  { icon: "fa-solid fa-circle-dot", title: "Flat Tyre", text: "If one of your tyres has completely lost air and you have a suitable spare available, we can help fit the spare wheel." },
  { icon: "fa-solid fa-gauge-high", title: "Punctured Tyre", text: "A puncture can leave the tyre unable to hold enough air for safe driving. A spare wheel may provide a temporary way to continue." },
  { icon: "fa-solid fa-triangle-exclamation", title: "Damaged Sidewall", text: "A badly damaged sidewall can make a tyre unsafe to use. If you have a suitable spare wheel, roadside replacement may be appropriate." },
  { icon: "fa-solid fa-car-burst", title: "Tyre Blowout", text: "A sudden tyre failure can leave the vehicle stranded. Where the vehicle is safely positioned and a suitable spare is available, we can assist with changing the wheel." },
  { icon: "fa-solid fa-wrench", title: "Unable to Change the Wheel", text: "Wheel nuts, vehicle position, physical difficulty or lack of confidence can make changing a wheel difficult. Professional roadside assistance can help." },
  { icon: "fa-solid fa-location-dot", title: "Tyre Problem Away From Home", text: "If a tyre problem happens while you are travelling, contact us with your location and vehicle details so the appropriate roadside assistance can be discussed." },
];
const included: ServiceCard[] = [
  { icon: "fa-solid fa-clipboard-list", title: "Situation Review", text: "Tell us where you are, what happened and whether the vehicle is positioned somewhere safe and accessible." },
  { icon: "fa-solid fa-circle-question", title: "Spare Wheel Check", text: "Confirm that you have a spare wheel or tyre available before assistance is arranged." },
  { icon: "fa-solid fa-car-side", title: "Vehicle Preparation", text: "The vehicle is positioned and prepared appropriately for a roadside wheel change where conditions allow." },
  { icon: "fa-solid fa-arrow-rotate-left", title: "Wheel Removal", text: "The damaged wheel is removed using suitable tools and working practices." },
  { icon: "fa-solid fa-circle-dot", title: "Spare Wheel Fitting", text: "The available suitable spare wheel is fitted so the vehicle can continue where appropriate." },
  { icon: "fa-solid fa-truck-pickup", title: "Recovery if Required", text: "If the spare cannot be fitted or the vehicle cannot safely continue, further roadside or vehicle recovery options can be discussed." },
];
const benefits: ServiceCard[] = [
  { icon: "fa-solid fa-clock", title: "Available 24/7", text: "Tyre problems can happen at any time, so our roadside assistance service operates around the clock." },
  { icon: "fa-solid fa-screwdriver-wrench", title: "Roadside Support", text: "We provide practical help when a flat or damaged tyre leaves you unable to continue safely." },
  { icon: "fa-solid fa-van-shuttle", title: "Cars & Suitable Vans", text: "Spare tyre assistance may be available for common passenger cars and suitable light vans." },
  { icon: "fa-solid fa-toolbox", title: "Suitable Tools", text: "Appropriate tools and working practices are used for the wheel-change situation." },
  { icon: "fa-solid fa-truck-pickup", title: "Recovery Available", text: "If the spare cannot be fitted or the vehicle remains unsafe to drive, vehicle recovery can be discussed." },
  { icon: "fa-solid fa-map-location-dot", title: "Local Support", text: "Based in Darlington, FSR Recovery Group provides roadside and recovery assistance across Darlington and surrounding areas." },
];
const faqs: ServiceFaq[] = [
  ["Do you provide spare tyre change assistance 24/7?", "Yes. FSR Recovery Group provides 24/7 roadside assistance, including help with fitting a suitable spare wheel where the vehicle and location allow safe work."],
  ["Can you help if I have a flat tyre?", "Yes. If you have a suitable spare wheel available, roadside assistance may be provided to remove the damaged wheel and fit the spare."],
  ["Do I need to have a spare tyre with me?", "Yes. This service is intended for vehicles that already have a suitable spare wheel or tyre available."],
  ["Can you change a tyre at my home?", "Where the vehicle is safely accessible and the location is covered by our service, spare tyre assistance may be provided at a home address."],
  ["Can you change a tyre in a car park?", "Yes, where there is enough safe working space and the vehicle can be accessed properly. Contact us with your location so the situation can be discussed."],
  ["Can you help with a van tyre?", "Spare wheel assistance may be available for suitable light vans depending on the vehicle, wheel setup and available spare. Provide your vehicle details when contacting us."],
  ["What if I do not have a spare wheel?", "If there is no suitable spare available, another solution may be required. FSR Recovery Group can discuss vehicle recovery where the vehicle cannot safely continue."],
  ["Can I drive normally on the spare wheel?", "Some spare wheels are temporary and may have speed or distance restrictions. Drivers should follow the vehicle manufacturer's guidance and any instructions marked on the spare wheel."],
  ["What should I tell you when calling?", "Provide your location, vehicle make/model, details of the tyre problem and confirm whether a suitable spare wheel is available."],
  ["Do you provide spare tyre assistance in Darlington?", "Yes. FSR Recovery Group is based in Darlington and provides roadside assistance across Darlington and surrounding areas. Contact us with your location to confirm availability."],
  ["How much does spare tyre assistance cost?", "The cost depends on factors such as the vehicle, location and circumstances. Call or WhatsApp us with the details so an appropriate quote can be discussed."],
].map(([question, answer]) => ({ question, answer }));

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Spare Tyre Change Service", description, serviceType: "Spare tyre change service", provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phone, address: { "@type": "PostalAddress", streetAddress: business.address.street, addressLocality: business.address.locality, postalCode: business.address.postalCode, addressCountry: business.address.countryCode } }, areaServed: { "@type": "City", name: "Darlington" }, availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: business.phone, contactType: "customer service", availableLanguage: "English" } } },
  { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
] };

export default function ChangingSpareTyrePage() {
  return <><Header activePath="/services" /><main>
    <section className="service-hero relative isolate min-h-[680px] overflow-hidden bg-navy text-white">
      <Image src="/images/service-tyre.jpg" alt="Professional spare tyre change assistance" fill preload sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
      <div className="container-site flex min-h-[680px] items-center py-20"><div className="fade-up max-w-3xl">
        <Eyebrow>24/7 Tyre Assistance</Eyebrow><h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">Spare Tyre Change Assistance When You Have a Flat</h1>
        <p className="my-6 max-w-2xl text-lg leading-8 text-white/80">A flat or damaged tyre can bring your journey to an immediate stop. If you have a suitable spare wheel available but cannot safely change it yourself, FSR Recovery Group provides professional roadside spare tyre change assistance for cars and suitable vans.</p>
        <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for Tyre Help" />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">{["Available 24/7", "Roadside Tyre Assistance", "Cars & Suitable Vans"].map(x=><span key={x}><i className="fa-solid fa-circle-check mr-2 text-red" />{x}</span>)}</div>
      </div></div>
    </section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="fade-up relative min-h-[430px] overflow-hidden rounded-3xl"><Image src="/images/gallery-1.jpg" alt="Roadside help for a flat tyre" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
      <div className="fade-up"><Eyebrow>Help With a Flat Tyre</Eyebrow><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Safe Assistance When You Can&apos;t Continue</h2>
        <div className="space-y-4 leading-7 text-navy/70"><p>A puncture or damaged tyre can leave your vehicle unsafe to drive, even if the rest of the car is working normally. Continuing on a flat or badly damaged tyre can risk further damage to the wheel and vehicle.</p><p>FSR Recovery Group provides roadside assistance for drivers who have a suitable spare wheel available but need help changing the damaged tyre safely.</p><p>We can assist at suitable accessible locations, including homes, workplaces, car parks and roadside locations where it is safe to work.</p><p>If a spare wheel is not available, is unsuitable, or the vehicle cannot safely continue after the change, further roadside or recovery options can be discussed.</p></div>
        <a href={business.tel} className="mt-7 block rounded-2xl border-l-4 border-red bg-navy p-5 font-bold text-white">Flat tyre now? <span className="text-red">Call {business.phoneDisplay}</span> for spare tyre assistance.</a>
      </div>
    </div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="When You May Need Us" title="Tyre Problems We Can Help With" intro="A flat tyre does not always mean the same thing. The right next step depends on the tyre condition, your spare wheel and whether the vehicle is in a safe location." /><CardGrid cards={situations} /><p className="mt-7 text-center text-sm text-navy/60">This service is for fitting a suitable spare wheel or tyre that is already available with the vehicle.</p></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/gallery-2.jpg" alt="24 hour roadside tyre assistance" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site"><div className="fade-up max-w-2xl"><Eyebrow>Day or Night</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">24-Hour Spare Tyre Assistance</h2><div className="my-6 space-y-4 leading-7 text-white/75"><p>A flat tyre can happen during your morning commute, while shopping, on an evening journey or late at night. When you cannot safely continue, getting professional roadside help can make the situation much simpler.</p><p>FSR Recovery Group provides 24/7 roadside assistance, including help changing to a suitable spare wheel where the vehicle and location allow safe work.</p><p>When contacting us, provide your location, vehicle make/model and confirm whether you have a spare wheel or tyre available.</p></div><ContactButtons dark callLabel="Call for Tyre Assistance" whatsappLabel="WhatsApp Us" /></div></div></section>

    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Roadside Tyre Support" title="What Our Spare Tyre Change Service Includes" intro="Our service is designed to help drivers safely replace a flat or damaged wheel with a suitable spare that is already available with the vehicle." /><CardGrid cards={included} /></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="Simple Process" title="How Spare Tyre Assistance Works" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["01","Contact Us","Call or WhatsApp FSR Recovery Group and tell us that you have a flat or damaged tyre."],["02","Share the Details","Provide your location, vehicle make/model and confirm whether a suitable spare wheel is available."],["03","Tyre Assistance Is Arranged","The roadside assistance required is discussed based on the vehicle, location and information you provide."],["04","Spare Wheel Is Fitted","Where conditions allow, the damaged wheel is removed and the suitable spare is fitted so you can take the appropriate next step."]].map(([n,t,x])=><article key={n} className="fade-up rounded-3xl border border-white/10 bg-white/[.06] p-6"><span className="text-4xl font-extrabold text-red">{n}</span><h3 className="mb-2 mt-5 text-xl font-bold">{t}</h3><p className="leading-7 text-white/70">{x}</p></article>)}</div><div className="mt-9 flex justify-center"><ContactButtons dark callLabel="Call Now" whatsappLabel="WhatsApp for Tyre Help" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Why Choose Us" title="Straightforward Help for a Flat Tyre" /><CardGrid cards={benefits} /></div></section>

    <section className="py-16 sm:py-24"><div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="fade-up"><Eyebrow>Local Tyre Assistance</Eyebrow><h2 className="text-3xl font-extrabold sm:text-4xl">Spare Tyre Change Assistance in Darlington and Surrounding Areas</h2><div className="my-6 space-y-4 leading-7 text-navy/70"><p>FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB and provides roadside tyre assistance for drivers across <Link href="/areas/darlington" className="font-semibold text-red">Darlington</Link> and surrounding areas.</p><p>If a flat or damaged tyre leaves you unable to continue at home, work, in a car park or at another suitable accessible location, contact us with your vehicle details and location.</p><p>If you are outside Darlington, call or WhatsApp us with your location so we can confirm whether assistance is available.</p></div><address className="mb-7 rounded-2xl bg-slate-100 p-5 not-italic leading-7"><strong>{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel} className="font-bold text-red">{business.phoneDisplay}</a></address><div className="flex flex-col gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-6 py-3.5 text-center font-bold text-white">Call for Tyre Help</a><Link href="/areas" className="rounded-full border border-navy/20 px-6 py-3.5 text-center font-bold">View Areas Covered</Link></div></div><div className="fade-up relative min-h-[480px] overflow-hidden rounded-3xl"><Image src="/images/service-tyre.jpg" alt="Spare wheel being fitted to a car" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Know the Next Step" title="Spare Wheel Available or Recovery Needed?" /><div className="grid gap-6 lg:grid-cols-2">{[["Spare Wheel Available","If your vehicle has a suitable spare wheel and the location is safe for roadside assistance, FSR Recovery Group can help remove the damaged wheel and fit the spare.","This can allow you to continue your journey or reach a tyre specialist, depending on the type of spare fitted and vehicle requirements.","/images/service-tyre.jpg","Spare wheel being fitted to a car"],["No Suitable Spare","If there is no spare wheel, the spare is damaged or unsuitable, or another problem prevents the vehicle from continuing safely, further roadside or recovery assistance may be required.","FSR Recovery Group can discuss vehicle recovery to an agreed destination where appropriate.","/images/service-breakdown.jpg","Vehicle prepared for breakdown recovery"]].map(([t,a,b,img,alt])=><article key={t} className="fade-up overflow-hidden rounded-3xl bg-navy text-white"><div className="relative h-64"><Image src={img} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="p-7"><h3 className="mb-3 text-2xl font-bold">{t}</h3><p className="mb-3 leading-7 text-white/70">{a}</p><p className="leading-7 text-white/70">{b}</p></div></article>)}</div><div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={business.tel} className="rounded-full bg-red px-7 py-4 font-bold text-white">Request Spare Tyre Assistance</a><Link href="/services/vehicle-breakdown-recovery" className="rounded-full border border-navy/20 px-7 py-4 font-bold text-navy">View 24/7 Vehicle Breakdown Recovery</Link></div></div></section>

    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-site"><div className="[&_h2]:!text-white"><SectionHeading eyebrow="More Ways We Can Help" title="Related Roadside & Recovery Services" /></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><RelatedCard title="Roadside Assistance" text="Professional roadside help for suitable vehicle problems at your current location." href={getServiceNavigation("roadside-assistance").href} icon="fa-solid fa-screwdriver-wrench"/><RelatedCard title="24/7 Vehicle Breakdown Recovery" text="Recovery when your vehicle cannot safely continue because of a tyre problem or another fault." href={getServiceNavigation("vehicle-breakdown-recovery").href} icon="fa-solid fa-truck-pickup"/><RelatedCard title="Jumpstart Services" text="Battery assistance when a weak or flat battery prevents your vehicle from starting." href={getServiceNavigation("jumpstart-services").href} icon="fa-solid fa-car-battery"/><RelatedCard title="Winch Out" text="Vehicle extraction assistance when a car or van becomes stuck and cannot regain traction." href={getServiceNavigation("winch-out").href} icon="fa-solid fa-truck-monster"/></div><div className="mt-9 flex justify-center gap-6"><Link href="/services" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">View All Services</Link><Link href="/contact" className="font-bold text-white underline decoration-red decoration-2 underline-offset-4">Contact Us</Link></div></div></section>

    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="Common Questions" title="Spare Tyre Change FAQs" /><FaqAccordion faqs={faqs} /></div></section>

    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"><Image src="/images/service-tyre.jpg" alt="24 hour roadside tyre assistance" fill sizes="100vw" className="-z-20 object-cover"/><div className="absolute inset-0 -z-10 bg-navy/90"/><div className="container-site fade-up text-center"><Eyebrow>Flat Tyre?</Eyebrow><h2 className="text-3xl font-extrabold sm:text-5xl">Get 24/7 Spare Tyre Assistance</h2><p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-white/75">If a flat or damaged tyre has left you unable to continue and you have a suitable spare wheel available, contact FSR Recovery Group. Tell us where you are and what vehicle you have so we can discuss the roadside assistance you need.</p><div className="flex justify-center"><ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} whatsappLabel="WhatsApp for Tyre Help" /></div><address className="mt-8 not-italic leading-7 text-white/75"><strong className="text-white">{business.name}</strong><br/>{business.addressFull}<br/><a href={business.tel}>{business.phoneDisplay}</a></address></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </main><Footer /></>;
}
