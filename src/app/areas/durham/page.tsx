import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Reliable Car Recovery in Durham for Emergencies";
const description = "Get back on the road with our trusted Durham car recovery services. Accessible help is just a call away!";
const path = "/areas/durham";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Durham",
  h1: "24/7 Breakdown Recovery in Durham",
  heroIntro: "From the historic city centre to the outskirts of County Durham, FSR Recovery Group provides prompt vehicle recovery and roadside assistance to drivers across Durham.",
  heroImage: "/images/gallery-2.jpg",
  heroImageAlt: "Recovery truck loading a vehicle in Durham",
  badges: ["Available 24/7", "City & A1(M) Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Durham Drivers",
  introParagraphs: [
    "Durham's narrow city centre streets, the peninsula around the Cathedral and the steep approaches near the river can make an already stressful breakdown harder to manage. FSR Recovery Group is regularly called out to Durham City, Durham University's campuses and the residential areas that surround them.",
    "We also cover the A1(M) and A167 as they pass Durham, along with the A690 and A691 routes into the city, so drivers travelling to or from Durham have somewhere reliable to turn if a vehicle problem strikes.",
    "Whether you're a student, commuter or visitor, tell us where in Durham you've broken down and we'll confirm the quickest way to reach you and get your vehicle recovered safely.",
  ],
  localHighlightsTitle: "Durham Coverage Highlights",
  localHighlights: [
    "Durham City centre and the Cathedral peninsula",
    "A1(M) and A167 through Durham",
    "Durham University campuses and student areas",
    "Surrounding villages and County Durham suburbs",
  ],
  situationsTitle: "Common Breakdown Callouts in Durham",
  situationsIntro: "These are some of the most frequent reasons drivers in Durham contact us for recovery.",
  situations: [
    { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "If your car won't start on a Durham street or car park, we can recover it once roadside checks rule out a quick fix." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A dead battery is a common cause of breakdowns for drivers parked around Durham City." },
    { icon: "fa-solid fa-circle-notch", title: "Punctures & Tyre Damage", text: "Kerb damage on Durham's narrow streets can cause tyre problems — we can assist or recover as needed." },
    { icon: "fa-solid fa-gauge-high", title: "Gearbox or Clutch Faults", text: "Transmission trouble on hills around the peninsula can leave a vehicle unsafe to drive further." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "We provide careful, prompt recovery following a collision on Durham's roads or the A1(M)." },
    { icon: "fa-solid fa-truck-ramp-box", title: "Vehicle Transport", text: "Need your vehicle moved to a garage outside Durham? We can arrange planned transport." },
  ],
  faqs: [
    { question: "Do you recover vehicles from Durham city centre?", answer: "Yes. We recover vehicles from Durham City centre, including the peninsula and surrounding streets, taking care with the area's narrow roads." },
    { question: "Can you help if I break down on the A1(M) near Durham?", answer: "Yes. We assist drivers who break down on the A1(M) near Durham, following appropriate safety procedures for motorway recovery." },
    { question: "Do you cover Durham University halls and student areas?", answer: "Yes, our Durham coverage extends to the university campuses and surrounding student residential areas." },
    { question: "How far from Darlington is Durham for recovery response?", answer: "Durham is close to our Darlington base, which helps us respond quickly to breakdowns in the city and surrounding County Durham villages." },
    { question: "Can I get my car towed from Durham to a garage in another town?", answer: "Yes. We can transport your vehicle from Durham to an agreed garage, your home, or another suitable destination." },
    { question: "Is your Durham recovery service available at night?", answer: "Yes, we operate 24/7 in Durham, including overnight breakdowns and weekend callouts." },
    { question: "What information do you need for a Durham breakdown callout?", answer: "Your exact location, vehicle make and model, a brief description of the fault, and your preferred destination if known." },
    { question: "Do you cover villages around Durham as well as the city?", answer: "Yes. We regularly assist drivers in villages surrounding Durham City as part of our wider County Durham coverage." },
  ],
  ctaHeading: "Broken Down in Durham?",
  ctaText: "Call or WhatsApp FSR Recovery Group now and we will confirm the fastest way to reach your location in Durham.",
  nearbyAreas: [
    { label: "Darlington", href: "/areas/darlington" },
    { label: "Newcastle", href: "/areas/newcastle" },
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
  ],
};

export default function DurhamAreaPage() {
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
