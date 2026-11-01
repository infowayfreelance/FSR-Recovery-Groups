import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Barnard Castle Breakdown & Recovery | FSR Recovery Group";
const description =
  "FSR Recovery Group provides 24/7 vehicle recovery, breakdown recovery and roadside assistance in Barnard Castle and Teesdale, including the A66 and A67.";
const path = "/areas/barnard-castle";

const heroImage = "/images/barnard-castle-breakdown-recovery-hero.webp";
const heroImageAlt = "Car secured on a flatbed recovery truck in a stone-built market town";

const ogTitle = "Breakdown Recovery Barnard Castle | FSR Recovery Group";
const ogDescription =
  "Need breakdown recovery in Barnard Castle? FSR Recovery Group provides 24/7 vehicle recovery and roadside assistance for cars and light vans. Call for help.";
const ogImage = "/images/barnard-castle-breakdown-recovery-og.jpg";
const ogImageAlt = "Car secured on a flatbed recovery truck in a stone-built market town";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: path,
    type: "website",
    siteName: business.name,
    locale: "en_GB",
    images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [{ url: ogImage, alt: ogImageAlt }],
  },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Barnard Castle",
  h1: "Barnard Castle Breakdown & Recovery",
  heroIntro:
    "FSR Recovery Group provides 24/7 vehicle recovery and roadside assistance for drivers in Barnard Castle and the surrounding area. We help with breakdowns, accidents and vehicle problems across local roads and major routes including the A66 and A67.",
  heroImage,
  heroImageAlt,
  badges: ["Available 24/7", "Cars & Light Vans", "Local & Major Road Coverage"],
  introHeading: "Recovery Support for Barnard Castle",
  introImage: "/images/barnard-castle-jumpstart-rural-cottage.webp",
  introImageAlt: "Technician jump-starting a car battery outside a stone cottage near Barnard Castle at dusk",
  introParagraphs: [
    "When your vehicle breaks down unexpectedly, finding reliable vehicle recovery in Barnard Castle can be difficult. FSR Recovery Group provides practical recovery support for suitable cars and light vans that cannot safely continue their journey.",
    "Our car recovery service covers common breakdown and emergency situations, including mechanical faults, battery problems, damaged tyres, accidents and vehicles that need to be transported to an agreed destination.",
    <>
      A vehicle can break down anywhere, from local roads to routes connecting the surrounding area. We provide car
      breakdown recovery and vehicle breakdown assistance, while{" "}
      <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
        roadside assistance
      </Link>{" "}
      may be suitable where a problem can be dealt with safely at the roadside.
    </>,
    "If you need a vehicle recovery service in Barnard Castle, provide your exact location, vehicle details and a brief description of the problem so we can understand your recovery requirements.",
  ],
  localHighlightsTitle: "Our Breakdown Recovery Support",
  localHighlights: [
    "Breakdown assistance",
    "Emergency vehicle recovery",
    "Emergency roadside assistance",
    "24 hour breakdown recovery",
    "Local car recovery",
    "Local vehicle recovery",
  ],
  situationsTitle: "Common Vehicle Recovery Services",
  situationsIntro: "FSR Recovery Group provides a range of vehicle recovery services for suitable cars and light vans in and around Barnard Castle.",
  situationsImage: "/images/barnard-castle-tyre-change.webp",
  situationsImageAlt: "Technician changing a wheel at the roadside near Barnard Castle",
  situations: [
    { icon: "fa-solid fa-car", title: "Car Recovery", text: "Our car recovery service is available for suitable vehicles that have broken down, been damaged or cannot safely continue their journey." },
    {
      icon: "fa-solid fa-car-burst",
      title: "Accident Recovery",
      text: (
        <>
          If your vehicle has been involved in a collision, our{" "}
          <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">
            accident recovery
          </Link>{" "}
          service can assist with suitable vehicles that are unsafe or unsuitable to drive.
        </>
      ),
    },
    {
      icon: "fa-solid fa-car-battery",
      title: "Jump Start Service",
      text: (
        <>
          A flat or weak battery can prevent your vehicle from starting. Our{" "}
          <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">
            jump start service
          </Link>{" "}
          may be suitable where a jump start can be carried out safely.
        </>
      ),
    },
    { icon: "fa-solid fa-triangle-exclamation", title: "Flat Tyre Assistance", text: "A puncture or damaged tyre can stop your journey unexpectedly. Flat tyre assistance may be available depending on the vehicle and situation." },
    {
      icon: "fa-solid fa-circle-notch",
      title: "Spare Tyre Change",
      text: (
        <>
          If you have a suitable spare tyre available, our{" "}
          <Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">
            spare tyre change
          </Link>{" "}
          service may help you get your vehicle moving safely again.
        </>
      ),
    },
    {
      icon: "fa-solid fa-gas-pump",
      title: "Fuel Delivery",
      text: (
        <>
          Running out of fuel can leave you stranded. Our{" "}
          <Link href="/services/refueling" className="font-semibold text-red hover:underline">
            fuel delivery
          </Link>{" "}
          service can provide assistance in suitable situations.
        </>
      ),
    },
    {
      icon: "fa-solid fa-truck-monster",
      title: "Vehicle Winch Out",
      text: (
        <>
          If a suitable vehicle becomes stuck on difficult ground, our{" "}
          <Link href="/services/winch-out" className="font-semibold text-red hover:underline">
            vehicle winch out
          </Link>{" "}
          service may be available depending on access and conditions.
        </>
      ),
    },
    { icon: "fa-solid fa-truck", title: "Van Recovery", text: "We provide van recovery for suitable light commercial vehicles that cannot safely continue their journey." },
    {
      icon: "fa-solid fa-truck-ramp-box",
      title: "Towing and Vehicle Transport",
      text: (
        <>
          Our{" "}
          <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">
            towing and vehicle transport
          </Link>{" "}
          service provides suitable vehicle recovery and transportation, including transport to an agreed garage, home, body shop or other suitable destination.
        </>
      ),
    },
  ],
  featured: [
    {
      image: "/images/barnard-castle-winch-out-rural-field.webp",
      imageAlt: "4x4 recovery vehicle winching a stuck van clear of a muddy rural track near Barnard Castle",
      eyebrow: "Local & Emergency Recovery",
      heading: "Local and Emergency Recovery",
      text: (
        <>
          FSR Recovery Group provides local vehicle recovery for suitable cars and light vans across Barnard Castle
          and the surrounding area. If you are searching for vehicle recovery near me or car recovery near me, your
          exact location is important — tell us where you are, your direction of travel and what has happened, and
          we can discuss emergency car recovery,{" "}
          <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
            roadside help
          </Link>{" "}
          and recovery options suitable for your situation. We also provide suitable recovery assistance for drivers
          travelling through{" "}
          <Link href="/areas" className="font-semibold text-red hover:underline">
            the local road network
          </Link>
          .
        </>
      ),
    },
  ],
  whyChooseTitle: "Why Choose FSR Recovery Group?",
  whyChooseIntro: "Here's what to expect when you contact us for vehicle recovery in Barnard Castle.",
  whyChoose: [
    { icon: "fa-solid fa-clock", title: "24/7 Recovery Assistance", text: "Vehicle problems can happen at any time. Recovery assistance is available 24 hours a day for suitable situations." },
    { icon: "fa-solid fa-map-location-dot", title: "Local Coverage", text: "We provide local car recovery and local vehicle recovery across the area, including relevant local roads and major routes within our coverage." },
    {
      icon: "fa-solid fa-list-check",
      title: "Range of Services",
      text: (
        <>
          From{" "}
          <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
            breakdown recovery
          </Link>{" "}
          and roadside assistance to accident recovery, jump starts, tyre assistance, fuel delivery, winch-out
          recovery, towing and{" "}
          <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">
            vehicle transport
          </Link>
          .
        </>
      ),
    },
    { icon: "fa-solid fa-van-shuttle", title: "Cars and Light Vans", text: "We provide recovery for suitable cars and light commercial vans. Vehicle details can be provided when you contact us." },
    { icon: "fa-solid fa-comments", title: "Clear Communication", text: "Tell us your exact location, direction of travel, vehicle details and what has happened. This helps us understand your recovery requirements." },
  ],
  roadsTitle: "Local Road Coverage",
  roadsIntro: (
    <>
      Barnard Castle is connected to important routes including the{" "}
      <Link href="/areas/a66" className="font-semibold text-red hover:underline">
        A66
      </Link>{" "}
      and{" "}
      <Link href="/areas/a67" className="font-semibold text-red hover:underline">
        A67
      </Link>
      , which provide access to surrounding towns and the wider regional road network.
    </>
  ),
  majorRoads: [
    { label: "A66", href: "/areas/a66", text: "Recovery assistance on relevant sections of the A66 trans-Pennine route near Barnard Castle." },
    { label: "A67", href: "/areas/a67", text: "Recovery assistance on relevant sections of the A67 connecting Barnard Castle to Darlington." },
  ],
  whatWeNeedTitle: "What Information Should I Provide When Calling?",
  whatWeNeedIntro: "This helps us understand what type of assistance may be suitable and confirm whether recovery is available.",
  whatWeNeed: [
    "Your exact location and direction of travel",
    "Your vehicle make and model",
    "A brief description of the problem",
    "Whether the vehicle is safe to remain where it is",
  ],
  faqs: [
    { question: "Can you provide car recovery in Barnard Castle?", answer: "Yes. FSR Recovery Group provides car recovery for suitable vehicles that cannot safely continue their journey." },
    { question: "Do you provide breakdown recovery?", answer: "Yes. We provide breakdown recovery for suitable cars and light vans." },
    { question: "Are you available 24 hours a day?", answer: "Yes. We provide 24/7 recovery assistance for suitable breakdown and vehicle recovery situations." },
    { question: "Can you provide roadside assistance?", answer: "Yes. Roadside assistance may be available for suitable problems that can safely be dealt with at the roadside." },
    { question: "Can you recover a van?", answer: "Yes. Our van recovery service covers suitable light commercial vehicles." },
    { question: "Can you recover a vehicle after an accident?", answer: "Yes. Our accident recovery service can assist with suitable vehicles following a collision." },
    { question: "Can you help with a flat battery?", answer: "Yes. A jump start service may be suitable when a flat or weak battery prevents your vehicle from starting." },
    { question: "Can you help with a flat tyre?", answer: "Yes. Flat tyre assistance and spare tyre change support may be available depending on the situation." },
    { question: "Can you provide towing?", answer: "Yes. Our towing service can assist with suitable vehicle recovery and transportation requirements." },
    { question: "Can you recover a vehicle from the A66 or A67?", answer: "We provide recovery assistance across relevant sections of the A66 and A67 within our service coverage. Provide your exact location and direction of travel so we can confirm availability." },
    { question: "Can you recover a vehicle from a rural road?", answer: "Suitable vehicles may be recoverable from rural locations depending on their position, condition, access and recovery requirements." },
    { question: "What information should I provide when calling?", answer: "Provide your exact location, direction of travel, vehicle make and model and a brief description of the problem. This helps us understand what type of assistance may be suitable." },
  ],
  ctaHeading: "Need Vehicle Recovery?",
  ctaText:
    "If you have broken down, been involved in an accident or need your vehicle transported, contact FSR Recovery Group. Tell us your location, what has happened and what vehicle you are driving. We can then discuss the appropriate vehicle recovery or roadside assistance option.",
  nearbyAreas: [
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
    { label: "A67 Recovery", href: "/areas/a67" },
    { label: "A66 Recovery", href: "/areas/a66" },
  ],
  serviceSchemaName: "Breakdown Recovery in Barnard Castle",
  serviceSchemaType: "Vehicle Breakdown Recovery and Roadside Assistance",
  serviceSchemaDescription:
    "Breakdown recovery and roadside assistance for cars and light vans in Barnard Castle and surrounding rural areas, including nearby sections of the A67 and A66.",
  areaServedName: "Barnard Castle and the surrounding areas",
};

export default function BarnardCastleAreaPage() {
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
