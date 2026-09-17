import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "A1(M) Breakdown Recovery Services Available Now";
const description = "Need speedy A1(M) breakdown recovery? Our experts can help you get back on the road quickly. Contact us!";
const path = "/areas/a1m";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "road",
  eyebrow: "A1(M)",
  h1: "24/7 Breakdown Recovery on the A1(M)",
  heroIntro: "A breakdown on the A1(M) needs a fast, safety-conscious response. FSR Recovery Group provides 24/7 recovery along the A1(M) through County Durham and North Yorkshire, including the junctions near Darlington, Scotch Corner, Catterick and Durham.",
  heroImage: "/images/trackrecord-bg.jpg",
  heroImageAlt: "Recovery truck on a UK motorway hard shoulder",
  badges: ["Available 24/7", "Motorway Recovery", "Cars & Vans"],
  introHeading: "Recovery Along the A1(M)",
  introParagraphs: [
    "The A1(M) is the main north-south motorway through our coverage area, running past Darlington, Scotch Corner, Catterick and Durham on its way between Yorkshire and the North East. A breakdown here — whether on the carriageway, a hard shoulder or a slip road — puts you and other drivers at risk, so a prompt, careful response matters.",
    "FSR Recovery Group is regularly called to breakdowns and accidents on the A1(M), and we follow appropriate safety procedures for motorway recovery, including working with the emergency services when required.",
    "If you've broken down on the A1(M), stay safe first — if possible, move to the hard shoulder or a place of relative safety, keep your hazard lights on, and call us with your exact location, including the nearest junction number if you know it.",
  ],
  localHighlightsTitle: "A1(M) Coverage Highlights",
  localHighlights: [
    "Darlington and Scotch Corner junctions",
    "Catterick and the A1(M)/A66 interchange",
    "Durham and the approach to Chester-le-Street",
    "Connections to Newcastle and the wider A1 corridor",
  ],
  situationsTitle: "Common A1(M) Breakdown Situations",
  situationsIntro: "These are among the most frequent reasons drivers call us for recovery on the A1(M).",
  situations: [
    { icon: "fa-solid fa-gears", title: "Sudden Mechanical Failure", text: "A mechanical fault at motorway speed on the A1(M) needs prompt, careful recovery to a safe location." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A vehicle that won't restart after stopping on the A1(M) hard shoulder is a common recovery callout." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Blowout", text: "A tyre blowout on the A1(M) can be dangerous — we recover the vehicle once it's safe to do so." },
    { icon: "fa-solid fa-temperature-high", title: "Overheating", text: "An overheating engine on a long A1(M) journey is recovered before it causes further damage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision on the A1(M), we provide prompt, careful vehicle recovery in coordination with other responders where needed." },
    { icon: "fa-solid fa-gas-pump", title: "Running Out of Fuel", text: "Running low on fuel on a long stretch of the A1(M) is more common than you'd think — we can bring fuel to you." },
  ],
  faqs: [
    { question: "Do you recover vehicles broken down on the A1(M) hard shoulder?", answer: "Yes, we respond to breakdowns on the A1(M) hard shoulder, following appropriate motorway safety procedures throughout." },
    { question: "What junctions of the A1(M) do you cover?", answer: "We cover the A1(M) through our region, including the junctions near Darlington, Scotch Corner, Catterick and Durham. Call us with your nearest junction number." },
    { question: "What should I do if I break down on the A1(M)?", answer: "If possible, move to the hard shoulder or a place of relative safety, switch on your hazard lights, and call us with your exact location before staying somewhere safe until we arrive." },
    { question: "Can you recover a vehicle after an accident on the A1(M)?", answer: "Yes, we provide vehicle recovery following accidents on the A1(M), working carefully and in coordination with other emergency responders where required." },
    { question: "Is A1(M) recovery available at night?", answer: "Yes, FSR Recovery Group operates 24/7 on the A1(M), including overnight and weekend breakdowns." },
    { question: "Can you take my vehicle from the A1(M) to a garage?", answer: "Yes, once recovered from the A1(M), we can transport your vehicle to an agreed garage, home address or other suitable destination." },
    { question: "Do you cover the A1(M) near Scotch Corner?", answer: "Yes, the Scotch Corner interchange, where the A1(M) meets the A66, is within our regular coverage area." },
  ],
  ctaHeading: "Broken Down on the A1(M)?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your exact location and nearest junction, and we'll confirm the fastest way to reach you.",
  nearbyAreas: [
    { label: "Darlington", href: "/areas/darlington" },
    { label: "Durham", href: "/areas/durham" },
    { label: "Catterick", href: "/areas/catterick" },
    { label: "A66 Recovery", href: "/areas/a66" },
  ],
};

export default function A1MAreaPage() {
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
