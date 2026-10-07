import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "A19 Breakdown & Recovery Service | 24/7 Vehicle Recovery";
const description = "FSR Recovery Group provides 24/7 breakdown recovery, roadside assistance and vehicle towing along the A19, from Thirsk to Sunderland.";
const path = "/areas/a19";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "road",
  eyebrow: "A19",
  h1: "A19 Breakdown & Recovery Service",
  heroIntro: "Need vehicle recovery on the A19? FSR Recovery Group provides 24/7 breakdown recovery, roadside assistance and towing support for drivers travelling through the A19 sections covered by our team.",
  heroImage: "/images/a19-breakdown-recovery-flatbed.webp",
  heroImageAlt: "Car loaded onto a flatbed recovery truck on an A-road",
  badges: ["Available 24/7", "Dual Carriageway Route", "Cars & Vans"],
  introHeading: "Reliable Recovery on the A19",
  introParagraphs: [
    "A breakdown on the A19 can leave you in a difficult and stressful situation, particularly when you are travelling on a busy dual carriageway. Whether your vehicle has stopped because of a mechanical fault, flat battery, tyre damage or another problem, getting to a safe position is the first priority.",
    "FSR Recovery Group provides breakdown and vehicle recovery support for drivers travelling along the A19. We cover relevant sections of the route through our wider North East service area, including areas around Thirsk, Middlesbrough, Peterlee and Sunderland.",
    "When you contact us, give us your exact location, direction of travel and nearest junction, landmark or other useful location details. Also tell us what has happened and provide your vehicle details. This helps us understand your situation and advise you on the appropriate recovery or roadside assistance service.",
  ],
  localHighlightsTitle: "A19 Coverage Highlights",
  localHighlights: [
    "Thirsk and the surrounding North Yorkshire area",
    "Middlesbrough and Teesside",
    "Peterlee and East Durham",
    "Sunderland and surrounding areas",
  ],
  situationsTitle: "Breakdown Problems We Can Help With",
  situationsIntro: "A vehicle can stop for many different reasons. Our recovery and roadside assistance services cover a range of common problems.",
  situations: [
    { icon: "fa-solid fa-gears", title: "Mechanical Breakdown", text: "Mechanical or electrical faults can leave a vehicle unable to continue its journey. Where recovery is required, we can assist with transporting suitable vehicles to an agreed destination." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat or weak battery can leave your vehicle unable to start. Our jump start service may be suitable for vehicles where the battery issue can be safely addressed at the roadside." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "A puncture or damaged tyre can bring your journey to an unexpected stop. Where appropriate, we can assist with changing a suitable spare tyre or arrange vehicle recovery." },
    { icon: "fa-solid fa-temperature-high", title: "Vehicle Overheating", text: "If your vehicle begins overheating, continuing to drive may cause further damage. Stop in a safe location where possible and contact us for suitable assistance." },
    { icon: "fa-solid fa-gas-pump", title: "Running Out of Fuel", text: "Running out of fuel during a journey can leave you stranded on the roadside. Our emergency fuel delivery service can provide assistance in suitable situations." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "After a collision, a vehicle may no longer be safe to drive. We provide accident recovery assistance for suitable vehicles following road traffic accidents." },
  ],
  galleryIntro: "A look at the kind of recovery and roadside assistance work we carry out for drivers along the A19.",
  gallery: [
    { src: "/images/a19-roadside-tyre-change.webp", alt: "Technician changing a wheel on a car using a jack and ratchet strap", caption: "Roadside tyre and wheel changes" },
    { src: "/images/a19-securing-vehicle-strap.webp", alt: "Technician securing a vehicle to a flatbed recovery truck with a ratchet strap", caption: "Securing vehicles for safe transport" },
  ],
  servicesHeading: "A19 Recovery and Roadside Services",
  servicesIntro: "FSR Recovery Group provides a range of services for drivers who need assistance on the A19.",
  whyChooseTitle: "Why Choose FSR Recovery Group?",
  whyChooseIntro: "When you are stranded on the A19, you need a recovery service that can understand your situation and provide clear information about the available options.",
  whyChoose: [
    { icon: "fa-solid fa-clock", title: "24/7 Recovery Support", text: "Vehicle problems can happen at any time. FSR Recovery Group provides recovery assistance 24 hours a day, including nights and weekends." },
    { icon: "fa-solid fa-map-location-dot", title: "A19 Route Coverage", text: "Our wider service area includes relevant sections of the A19 around Thirsk, Middlesbrough, Peterlee and Sunderland." },
    { icon: "fa-solid fa-list-check", title: "Range of Recovery Services", text: "We provide more than standard breakdown recovery, with services including roadside assistance, jump starts, tyre assistance, accident recovery, fuel delivery and vehicle transport." },
    { icon: "fa-solid fa-car-side", title: "Cars and Light Vans", text: "We provide recovery services for suitable cars and light vans. Give us your vehicle details when you contact us so we can understand your requirements." },
    { icon: "fa-solid fa-comments", title: "Clear Communication", text: "Tell us your exact location, direction of travel, vehicle details and what has happened. We can then discuss the appropriate assistance for your situation." },
  ],
  whatWeNeedTitle: "What to Do If You Break Down on the A19",
  whatWeNeedIntro: "A breakdown on a major road requires particular attention to safety. If your vehicle develops a problem:",
  whatWeNeed: [
    "Move to a safe position away from moving traffic if you can do so safely.",
    "Switch on your hazard warning lights.",
    "Identify your exact location and direction of travel.",
    "Note the nearest junction, landmark or other useful location information.",
    "Contact FSR Recovery Group and explain the problem.",
    "Avoid attempting repairs or inspecting the vehicle if you are in an unsafe position, close to moving traffic.",
  ],
  faqs: [
    { question: "Do you provide breakdown recovery on the A19?", answer: "Yes. FSR Recovery Group provides breakdown and vehicle recovery assistance across the A19 within our service coverage." },
    { question: "Can you recover a car that has broken down on the A19?", answer: "Yes. We provide recovery for suitable vehicles that cannot safely continue their journey." },
    { question: "Do you provide roadside assistance on the A19?", answer: "Yes. Depending on the vehicle problem and circumstances, roadside assistance may be available for suitable breakdown situations." },
    { question: "Can you help with a flat battery on the A19?", answer: "Yes. We provide jump start assistance for suitable vehicles and situations." },
    { question: "Can you help if I have a flat tyre on the A19?", answer: "Yes. Spare tyre assistance may be available if you have a suitable spare tyre. Vehicle recovery can also be arranged where required." },
    { question: "What should I do if my vehicle breaks down on the A19?", answer: "Move to a safe position if possible, switch on your hazard warning lights and identify your exact location and direction of travel. Then contact FSR Recovery Group with your vehicle details and explain the problem." },
    { question: "Can you recover a vehicle after an accident on the A19?", answer: "Yes. We provide accident recovery assistance for suitable vehicles following a collision." },
    { question: "Do you provide emergency fuel delivery on the A19?", answer: "Yes. Emergency fuel delivery is available for suitable situations when you have run out of fuel." },
    { question: "Are A19 recovery services available at night?", answer: "Yes. FSR Recovery Group provides 24/7 recovery assistance, including overnight and weekend callouts." },
    { question: "Which areas of the A19 do you cover?", answer: "Our wider A19 coverage includes relevant sections around Thirsk, Middlesbrough, Peterlee and Sunderland. Contact us with your exact location to confirm availability." },
  ],
  ctaHeading: "Need Recovery on the A19?",
  ctaText: "If your vehicle has broken down on the A19, contact FSR Recovery Group with your exact location, direction of travel and vehicle details. Whether you need breakdown recovery, roadside assistance, a jump start, tyre assistance, accident recovery or another suitable recovery service, our team can discuss the available options with you.",
  ctaImage: "/images/a19-van-recovery-safety-check.webp",
  ctaImageAlt: "Recovery operator carrying out a safety check on a van loaded onto a flatbed truck",
  nearbyAreas: [
    { label: "Middlesbrough", href: "/areas/middlesbrough" },
    { label: "Sunderland", href: "/areas/sunderland" },
    { label: "Peterlee", href: "/areas/peterlee" },
    { label: "Thirsk", href: "/areas/thirsk" },
  ],
};

export default function A19AreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} />
      </main>
      <Footer />
    </>
  );
}
