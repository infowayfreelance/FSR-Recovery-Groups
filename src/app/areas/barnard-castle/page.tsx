import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Fast Breakdown Recovery Services Barnard Castle";
const description = "Need quick breakdown recovery in Barnard Castle? We're here to help you get back on the road fast!";
const path = "/areas/barnard-castle";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Barnard Castle",
  h1: "Breakdown Recovery in Barnard Castle and Teesdale",
  heroIntro: "FSR Recovery Group provides reliable vehicle recovery to drivers in Barnard Castle and the wider Teesdale area, including the A67 and A66.",
  heroImage: "/images/gallery-1.jpg",
  heroImageAlt: "Recovery vehicle assisting a driver in a rural market town",
  badges: ["Available 24/7", "Market Town & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Barnard Castle and Teesdale",
  introParagraphs: [
    "Barnard Castle's historic market town centre sits at the edge of Teesdale, with the River Tees, surrounding farmland and the moors beyond making up much of our coverage in this part of County Durham. FSR Recovery Group responds to breakdowns in the town and on the rural roads around it.",
    "We also cover the A67, which connects Barnard Castle to Darlington, and the A66 trans-Pennine route that passes close to the town, giving travellers heading toward Cumbria a dependable recovery option.",
    "Whether you've broken down in Barnard Castle itself or on an exposed stretch of moorland road nearby, contact us with your location and we'll confirm the fastest way to help.",
  ],
  localHighlightsTitle: "Barnard Castle Coverage Highlights",
  localHighlights: [
    "Barnard Castle market town centre",
    "A67 route connecting to Darlington",
    "A66 trans-Pennine route nearby",
    "Teesdale villages and surrounding moorland roads",
  ],
  situationsTitle: "Common Breakdown Callouts Around Barnard Castle",
  situationsIntro: "These are among the recovery situations we most often handle in and around Barnard Castle.",
  situations: [
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft verges or farm tracks around Teesdale can be winched clear safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A67 or A66 near Barnard Castle can be recovered to a suitable garage." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on Teesdale's country roads are dealt with quickly and safely." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery in Barnard Castle's town centre or a rural driveway is a common local callout." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Barnard Castle, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on a moorland stretch near Barnard Castle? We can bring fuel directly to you." },
  ],
  faqs: [
    { question: "Do you recover vehicles from Barnard Castle town centre?", answer: "Yes, we recover vehicles from Barnard Castle's market town centre and surrounding streets." },
    { question: "Can you help on the A67 near Barnard Castle?", answer: "Yes, we assist drivers who break down on the A67 between Darlington and Barnard Castle." },
    { question: "Do you cover the A66 near Barnard Castle?", answer: "Yes, we assist drivers on the A66 as it passes close to Barnard Castle on its route through Teesdale." },
    { question: "Can you recover a vehicle stuck on moorland near Barnard Castle?", answer: "Yes, we provide winch-out recovery for vehicles stuck on soft ground or verges in the Teesdale area." },
    { question: "Is recovery available in Barnard Castle overnight?", answer: "Yes, FSR Recovery Group operates 24/7 across Barnard Castle and Teesdale." },
    { question: "How far is Barnard Castle from your Darlington base?", answer: "Barnard Castle is within our regular Teesdale coverage area — call us with your location and we'll confirm response times." },
  ],
  ctaHeading: "Broken Down in Barnard Castle?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Darlington", href: "/areas/darlington" },
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
    { label: "A67 Recovery", href: "/areas/a67" },
    { label: "A66 Recovery", href: "/areas/a66" },
  ],
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
