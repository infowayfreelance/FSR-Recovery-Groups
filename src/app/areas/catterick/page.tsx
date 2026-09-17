import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Reliable Car Recovery in Catterick for Quick Help";
const description = "Get back on the road fast with our Catterick car recovery services. Quick response and reliable support!";
const path = "/areas/catterick";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Catterick",
  h1: "Breakdown Recovery in Catterick",
  heroIntro: "FSR Recovery Group provides fast, reliable vehicle recovery across Catterick and Catterick Garrison, including the A1(M) that runs alongside the area.",
  heroImage: "/images/service-roadside.jpg",
  heroImageAlt: "Recovery vehicle assisting a driver near a garrison town",
  badges: ["Available 24/7", "A1(M) Access", "Cars & Vans"],
  introHeading: "Recovery Support for Catterick and Catterick Garrison",
  introParagraphs: [
    "Catterick village and the much larger Catterick Garrison sit just off the A1(M), making the area one we regularly cover for both local residents and personnel travelling through. FSR Recovery Group responds to breakdowns on the estate roads, the village centre and the surrounding lanes.",
    "The A1(M) junction serving Catterick is a key route for traffic heading between Darlington and Ripon, and we're regularly called to assist drivers who break down there or on the roads connecting into the garrison.",
    "Whether you're based in Catterick or just passing through, contact us with your location and vehicle details and we'll confirm the fastest way to reach you.",
  ],
  localHighlightsTitle: "Catterick Coverage Highlights",
  localHighlights: [
    "Catterick village and Catterick Garrison",
    "A1(M) junction serving Catterick",
    "Estate roads and surrounding residential areas",
    "Rural lanes connecting to nearby villages",
  ],
  situationsTitle: "Common Breakdown Callouts in Catterick",
  situationsIntro: "These are among the recovery situations we most often handle in and around Catterick.",
  situations: [
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A1(M) near Catterick can be recovered to a suitable garage." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery on the garrison estate or in Catterick village is a common local callout." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on the A1(M) or estate roads around Catterick are dealt with quickly and safely." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Catterick or on the A1(M), we provide prompt, careful recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel near Catterick? We can bring fuel directly to your location." },
    { icon: "fa-solid fa-truck-ramp-box", title: "Vehicle Transport", text: "Need a vehicle moved from Catterick to a garage elsewhere? We can arrange planned transport." },
  ],
  faqs: [
    { question: "Do you cover Catterick Garrison as well as Catterick village?", answer: "Yes, we recover vehicles from both Catterick village and the wider Catterick Garrison area." },
    { question: "Can you help on the A1(M) near Catterick?", answer: "Yes, we assist drivers who break down on the A1(M) at the Catterick junction, following appropriate motorway safety procedures." },
    { question: "Is recovery available in Catterick at night?", answer: "Yes, FSR Recovery Group operates 24/7 across Catterick, including overnight and weekend callouts." },
    { question: "Can you transport my car from Catterick to a garage elsewhere?", answer: "Yes, we can arrange transport from Catterick to an agreed garage, home address or other suitable destination." },
    { question: "How far is Catterick from your Darlington base?", answer: "Catterick is relatively close to Darlington within our coverage area, helping us respond quickly to breakdowns there." },
    { question: "Do you cover rural lanes around Catterick?", answer: "Yes, our Catterick coverage extends to the surrounding rural lanes and nearby villages." },
  ],
  ctaHeading: "Broken Down in Catterick?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Darlington", href: "/areas/darlington" },
    { label: "Ripon", href: "/areas/ripon" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
  ],
};

export default function CatterickAreaPage() {
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
