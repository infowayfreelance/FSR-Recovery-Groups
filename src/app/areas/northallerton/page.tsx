import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Quick Car Recovery in Northallerton – Call Us Today!";
const description = "Experience hassle-free car recovery in Northallerton. We're ready to help—call for immediate assistance!";
const path = "/areas/northallerton";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Northallerton",
  h1: "24/7 Breakdown Recovery in Northallerton",
  heroIntro: "FSR Recovery Group provides reliable vehicle recovery across Northallerton, North Yorkshire's county town, and the villages that surround it.",
  heroImage: "/images/gallery-3.jpg",
  heroImageAlt: "Recovery vehicle assisting a driver in a market town",
  badges: ["Available 24/7", "Town & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Northallerton",
  introParagraphs: [
    "Northallerton's high street, the surrounding residential estates and the county's administrative buildings sit alongside quieter rural roads just outside town. FSR Recovery Group responds to breakdowns throughout Northallerton, whether you've stopped on the high street or on a nearby lane.",
    "We also cover the A167 and A684 as they pass through Northallerton, both important routes connecting the town to Darlington, Thirsk and the surrounding North Yorkshire countryside.",
    "Wherever in or around Northallerton your vehicle has broken down, contact us with your location and we'll confirm the fastest way to reach you.",
  ],
  localHighlightsTitle: "Northallerton Coverage Highlights",
  localHighlights: [
    "Northallerton High Street and town centre",
    "A167 and A684 routes serving Northallerton",
    "Surrounding residential estates",
    "Nearby villages and North Yorkshire countryside",
  ],
  situationsTitle: "Common Breakdown Callouts in Northallerton",
  situationsIntro: "These are among the recovery situations we most often handle in and around Northallerton.",
  situations: [
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery on Northallerton's high street or a residential drive is a common local callout." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre", text: "Punctures around Northallerton's town centre or country roads are dealt with quickly." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A167 or A684 near Northallerton can be recovered to a suitable garage." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft verges near Northallerton can be winched clear safely." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Northallerton, we provide prompt, careful recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel near Northallerton? We can bring fuel directly to your location." },
  ],
  faqs: [
    { question: "Do you recover vehicles from Northallerton town centre?", answer: "Yes, we recover vehicles from Northallerton High Street and the surrounding town centre streets." },
    { question: "Can you help on the A167 or A684 near Northallerton?", answer: "Yes, we assist drivers who break down on either the A167 or A684 as they serve Northallerton." },
    { question: "Do you cover villages around Northallerton?", answer: "Yes, our Northallerton coverage extends to the surrounding villages and North Yorkshire countryside." },
    { question: "Is recovery available in Northallerton overnight?", answer: "Yes, FSR Recovery Group operates 24/7 across Northallerton, including nights and weekends." },
    { question: "Can you transport my car from Northallerton to a garage elsewhere?", answer: "Yes, we can arrange transport from Northallerton to an agreed garage, home address or other suitable destination." },
    { question: "How far is Northallerton from your Darlington base?", answer: "Northallerton is close to Darlington within our coverage area, helping us respond quickly to breakdowns in the town." },
  ],
  ctaHeading: "Broken Down in Northallerton?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Thirsk", href: "/areas/thirsk" },
    { label: "Darlington", href: "/areas/darlington" },
    { label: "A167 Recovery", href: "/areas/a167" },
  ],
};

export default function NorthallertonAreaPage() {
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
