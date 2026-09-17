import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Experience Quick A167 Breakdown Recovery Solutions Today";
const description = "Quick A167 breakdown recovery service for peace of mind. Contact us now for immediate assistance!";
const path = "/areas/a167";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "road",
  eyebrow: "A167",
  h1: "Breakdown Recovery on the A167",
  heroIntro: "The A167, the old Great North Road, runs close to the A1(M) through Darlington, Durham and toward Newcastle. FSR Recovery Group provides 24/7 recovery for breakdowns anywhere along the A167.",
  heroImage: "/images/service-transport.jpg",
  heroImageAlt: "Recovery vehicle on a former main road route",
  badges: ["Local Route", "Available 24/7", "Cars & Vans"],
  introHeading: "Recovery Along the A167",
  introParagraphs: [
    "Running parallel to the A1(M) for much of its length, the A167 passes through Darlington, Aycliffe, Durham City, Chester-le-Street and on toward Newcastle, and it's a route we cover regularly as an alternative to the motorway.",
    "The A167 carries a mix of local and through traffic, from town-centre sections in Darlington and Durham to faster, more open stretches further north, so breakdowns here can vary considerably in nature.",
    "If you've broken down on the A167, pull in safely where you can, switch on your hazard lights, and call us with your exact location, naming the nearest town or landmark.",
  ],
  localHighlightsTitle: "A167 Coverage Highlights",
  localHighlights: [
    "Darlington and Aycliffe sections",
    "Durham City and the surrounding stretch",
    "Chester-le-Street and routes toward Newcastle",
    "Alternative route to the A1(M)",
  ],
  situationsTitle: "Common A167 Breakdown Situations",
  situationsIntro: "These are among the most frequent reasons drivers call us for recovery on the A167.",
  situations: [
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery after stopping on the A167 is a common recovery callout along this route." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on the A167's town and open-road sections are dealt with quickly and safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A167 between Darlington and Durham can be recovered to a suitable garage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision on the A167, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-temperature-high", title: "Overheating", text: "An overheating engine on the A167 is recovered before it causes further damage." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on the A167? We can bring fuel directly to your location." },
  ],
  faqs: [
    { question: "Do you cover the whole length of the A167?", answer: "Yes, we cover the A167 from Darlington through Durham and toward Chester-le-Street and Newcastle." },
    { question: "Is the A167 a good alternative route if the A1(M) is closed?", answer: "The A167 does run close to the A1(M) for much of its length. If you break down on it, call us with your exact location and we'll confirm response times." },
    { question: "Do you cover the A167 through Durham City?", answer: "Yes, the section of the A167 that passes through Durham City is within our regular coverage area." },
    { question: "Can you recover a vehicle from the A167 near Chester-le-Street?", answer: "Yes, we cover the A167 as it extends toward Chester-le-Street on the way to Newcastle." },
    { question: "Is A167 recovery available at night?", answer: "Yes, FSR Recovery Group operates 24/7 on the A167, including overnight and weekend breakdowns." },
    { question: "Can you take my vehicle from the A167 to a garage in Darlington?", answer: "Yes, once recovered from the A167, we can transport your vehicle to an agreed garage, home address or other suitable destination." },
  ],
  ctaHeading: "Broken Down on the A167?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your exact location on the A167, and we'll confirm the fastest way to reach you.",
  nearbyAreas: [
    { label: "Darlington", href: "/areas/darlington" },
    { label: "Durham", href: "/areas/durham" },
    { label: "Newcastle", href: "/areas/newcastle" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
  ],
};

export default function A167AreaPage() {
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
