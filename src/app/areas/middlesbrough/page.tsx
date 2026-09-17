import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Middlesbrough Car Recovery Services Available 24/7";
const description = "Experience quick car recovery in Middlesbrough anytime! Contact us for reliable assistance on the road.";
const path = "/areas/middlesbrough";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Middlesbrough",
  h1: "24/7 Vehicle Recovery in Middlesbrough",
  heroIntro: "FSR Recovery Group provides fast, reliable breakdown recovery across Middlesbrough and the wider Teesside area, from the town centre to the industrial estates.",
  heroImage: "/images/gallery-1.jpg",
  heroImageAlt: "Recovery vehicle assisting a driver in an industrial town",
  badges: ["Available 24/7", "Town & Industrial Cover", "Cars & Vans"],
  introHeading: "Recovery Support Across Middlesbrough and Teesside",
  introParagraphs: [
    "Middlesbrough's mix of town centre streets, the areas around the Riverside Stadium and the industrial estates that line the Tees can each bring different recovery challenges. FSR Recovery Group responds to breakdowns throughout the town, including residential streets in Linthorpe and Acklam.",
    "We also cover the A66 and A19 as they serve Middlesbrough, along with routes toward Stockton and the Tees Transporter Bridge area, so commuters and visitors have a dependable recovery option nearby.",
    "Whether your vehicle has broken down in the town centre, on an industrial estate or on the approach roads, contact us with your location and we'll confirm the quickest way to assist.",
  ],
  localHighlightsTitle: "Middlesbrough Coverage Highlights",
  localHighlights: [
    "Middlesbrough town centre and Riverside area",
    "A66 and A19 routes serving Middlesbrough",
    "Linthorpe, Acklam and surrounding suburbs",
    "Industrial estates along the River Tees",
  ],
  situationsTitle: "Common Breakdown Callouts in Middlesbrough",
  situationsIntro: "These are among the most frequent recovery situations we handle across Middlesbrough and Teesside.",
  situations: [
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "Mechanical faults on Middlesbrough's town centre streets or industrial roads are recovered promptly." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery in a Middlesbrough car park is one of our most common local callouts." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures near industrial estates or on the A66 are dealt with quickly and safely." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision in Middlesbrough or on the A19, we provide careful, prompt recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on the A66 near Middlesbrough? We can bring fuel to get you moving." },
    { icon: "fa-solid fa-truck-ramp-box", title: "Vehicle Transport", text: "Need a vehicle moved to a garage outside Middlesbrough? We can arrange planned transport." },
  ],
  faqs: [
    { question: "Do you recover vehicles from Middlesbrough town centre?", answer: "Yes, we recover vehicles from Middlesbrough town centre and the surrounding streets, including near the Riverside area." },
    { question: "Can you help if I break down on the A66 near Middlesbrough?", answer: "Yes, we assist drivers who break down on the A66 as it serves Middlesbrough, following appropriate roadside safety procedures." },
    { question: "Do you cover the industrial estates along the Tees?", answer: "Yes, we regularly assist commercial and fleet vehicles breaking down at industrial estates around Middlesbrough." },
    { question: "Do you cover Linthorpe and Acklam as well as the town centre?", answer: "Yes, our Middlesbrough coverage extends to Linthorpe, Acklam and other surrounding residential areas." },
    { question: "Is recovery available in Middlesbrough at night or weekends?", answer: "Yes, FSR Recovery Group operates 24/7 across Middlesbrough, including overnight and weekend breakdowns." },
    { question: "Can you transport my car from Middlesbrough to a garage in another town?", answer: "Yes, we can arrange transport from Middlesbrough to an agreed garage, home address or other suitable destination." },
    { question: "Do you help with vans and commercial vehicles in Middlesbrough?", answer: "Yes, suitable light vans and commercial vehicles can be recovered — tell us your vehicle details when you contact us." },
  ],
  ctaHeading: "Need Recovery in Middlesbrough?",
  ctaText: "Call or WhatsApp FSR Recovery Group with your location in Middlesbrough and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Darlington", href: "/areas/darlington" },
    { label: "Thirsk", href: "/areas/thirsk" },
    { label: "A66 Recovery", href: "/areas/a66" },
    { label: "A19 Recovery", href: "/areas/a19" },
  ],
};

export default function MiddlesbroughAreaPage() {
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
