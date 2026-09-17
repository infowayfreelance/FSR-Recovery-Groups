import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Need A66 Car Recovery? We're Here to Help!";
const description = "Experience top-notch A66 car recovery with our expert team. Reach out today for immediate support!";
const path = "/areas/a66";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "road",
  eyebrow: "A66",
  h1: "24/7 Breakdown Recovery on the A66",
  heroIntro: "The A66 carries traffic across the Pennines between Teesside and Cumbria, with long exposed stretches and challenging weather at times. FSR Recovery Group provides 24/7 recovery along the A66 through Darlington, Barnard Castle and beyond.",
  heroImage: "/images/gallery-3.jpg",
  heroImageAlt: "Recovery vehicle on an exposed trans-Pennine road",
  badges: ["Available 24/7", "Trans-Pennine Route", "Cars & Vans"],
  introHeading: "Recovery Along the A66",
  introParagraphs: [
    "From the Scotch Corner interchange with the A1(M) through Darlington and Barnard Castle, the A66 climbs into the Pennines toward Cumbria. It's a route we know well, including the exposed high sections that can be affected by wind, rain and snow.",
    "A breakdown on the A66 can leave you in an isolated spot with limited shelter, which makes a fast, reliable response especially important. FSR Recovery Group is regularly called to breakdowns and accidents along this route.",
    "If you've broken down on the A66, try to reach a safe pull-in or lay-by if possible, keep warm and visible, and call us with your exact location so we can plan the quickest route to reach you.",
  ],
  localHighlightsTitle: "A66 Coverage Highlights",
  localHighlights: [
    "Scotch Corner interchange with the A1(M)",
    "Darlington and the approach to Barnard Castle",
    "Bowes Moor and the high Pennine sections",
    "Routes toward the Cumbrian border",
  ],
  situationsTitle: "Common A66 Breakdown Situations",
  situationsIntro: "These are among the most frequent reasons drivers call us for recovery on the A66.",
  situations: [
    { icon: "fa-solid fa-temperature-high", title: "Overheating on Climbs", text: "The Pennine climbs on the A66 can cause an engine to overheat — we recover the vehicle before further damage occurs." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on an exposed stretch of the A66 needs a prompt, careful recovery response." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on the A66's rougher sections are dealt with quickly, with recovery arranged where needed." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision on the A66, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-snowflake", title: "Weather-Related Breakdowns", text: "Wind, rain and snow on the high sections of the A66 can affect vehicles — we respond as conditions allow." },
    { icon: "fa-solid fa-gas-pump", title: "Running Out of Fuel", text: "Fewer fuel stops on the A66's rural stretches mean running low is a real risk — we can bring fuel to you." },
  ],
  faqs: [
    { question: "Do you recover vehicles on the exposed sections of the A66?", answer: "Yes, we regularly recover vehicles from the higher, more exposed sections of the A66, including near Bowes Moor." },
    { question: "What should I do if I break down on the A66 in bad weather?", answer: "Try to reach a safe pull-in or lay-by, stay warm and visible, and call us with your exact location so we can plan the safest route to reach you." },
    { question: "Do you cover the A66 near Scotch Corner?", answer: "Yes, the Scotch Corner interchange where the A66 meets the A1(M) is within our regular coverage area." },
    { question: "Can you recover a vehicle from the A66 toward the Cumbrian border?", answer: "Yes, we cover the A66 through County Durham, and can discuss availability for locations further toward Cumbria when you call." },
    { question: "Is A66 recovery available overnight?", answer: "Yes, FSR Recovery Group operates 24/7 on the A66, including overnight and in poor weather where it's safe to respond." },
    { question: "Can you take my vehicle from the A66 to a garage in Darlington?", answer: "Yes, once recovered from the A66, we can transport your vehicle to an agreed garage, home address or other suitable destination." },
  ],
  ctaHeading: "Broken Down on the A66?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your exact location on the A66, and we'll confirm the fastest way to reach you.",
  nearbyAreas: [
    { label: "Darlington", href: "/areas/darlington" },
    { label: "Barnard Castle", href: "/areas/barnard-castle" },
    { label: "Middlesbrough", href: "/areas/middlesbrough" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
  ],
};

export default function A66AreaPage() {
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
