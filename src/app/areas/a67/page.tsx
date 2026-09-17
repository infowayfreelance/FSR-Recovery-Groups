import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "A67 Car Recovery Services Near You";
const description = "In need of A67 car recovery? Our professionals are ready to help you 24/7. Reach out for assistance!";
const path = "/areas/a67";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "road",
  eyebrow: "A67",
  h1: "Breakdown Recovery on the A67",
  heroIntro: "The A67 links Darlington to Barnard Castle through Teesdale, and it's a route right on our doorstep. FSR Recovery Group provides fast, local recovery for breakdowns anywhere along the A67.",
  heroImage: "/images/gallery-2.jpg",
  heroImageAlt: "Recovery vehicle on a rural A-road",
  badges: ["Local Route", "Available 24/7", "Cars & Vans"],
  introHeading: "Recovery Along the A67",
  introParagraphs: [
    "Running west from Darlington through villages such as Piercebridge, Winston and Gainford before reaching Barnard Castle, the A67 is a route we cover as part of our everyday local recovery work.",
    "The road passes through open countryside as well as village centres, so breakdowns here can range from a straightforward roadside fix to a full recovery from a rural verge.",
    "If you've broken down on the A67, pull in safely where possible and call us with your location, ideally naming the nearest village so we can plan the quickest route to reach you.",
  ],
  localHighlightsTitle: "A67 Coverage Highlights",
  localHighlights: [
    "Darlington to Piercebridge and Winston",
    "Gainford and the surrounding villages",
    "The approach into Barnard Castle",
    "Connections to the A1(M) and A66",
  ],
  situationsTitle: "Common A67 Breakdown Situations",
  situationsIntro: "These are among the most frequent reasons drivers call us for recovery on the A67.",
  situations: [
    { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "A car that won't start after stopping on the A67 near a village is a common local callout." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on the A67's country stretches are dealt with quickly and safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A67 can be recovered to a garage in Darlington or Barnard Castle." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on a Verge", text: "Vehicles that end up stuck on a soft verge along the A67 can be winched clear safely." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision on the A67, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel between Darlington and Barnard Castle? We can bring fuel directly to you." },
  ],
  faqs: [
    { question: "Do you cover the whole length of the A67?", answer: "Yes, we cover the A67 from Darlington through to Barnard Castle, including the villages along the route." },
    { question: "How quickly can you reach a breakdown on the A67?", answer: "Because the A67 runs close to our Darlington base, we're often able to respond quickly here — call us with your location for an accurate estimate." },
    { question: "Can you recover a vehicle stuck on a verge on the A67?", answer: "Yes, we provide winch-out recovery for vehicles stuck on soft verges or ditches along the A67." },
    { question: "Do you cover villages like Piercebridge and Gainford on the A67?", answer: "Yes, our A67 coverage includes Piercebridge, Winston, Gainford and the other villages along the route." },
    { question: "Is A67 recovery available at night?", answer: "Yes, FSR Recovery Group operates 24/7 on the A67, including overnight and weekend breakdowns." },
    { question: "Can you take my vehicle from the A67 to a garage?", answer: "Yes, once recovered from the A67, we can transport your vehicle to an agreed garage, home address or other suitable destination." },
  ],
  ctaHeading: "Broken Down on the A67?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location on the A67, and we'll confirm the fastest way to reach you.",
  nearbyAreas: [
    { label: "Darlington", href: "/areas/darlington" },
    { label: "Barnard Castle", href: "/areas/barnard-castle" },
    { label: "A66 Recovery", href: "/areas/a66" },
  ],
};

export default function A67AreaPage() {
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
