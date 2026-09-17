import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Need Car Recovery? Trust Our Darlington Team";
const description = "Stuck on the road? Our experienced team provides expert car recovery in Darlington. Reach out now!";
const path = "/areas/darlington";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Darlington",
  h1: "24/7 Emergency Car Recovery Darlington",
  heroIntro: "Need car recovery in Darlington right now? FSR Recovery Group is genuinely based in the town, on Gladstone Street, providing 24/7 emergency vehicle recovery, breakdown recovery, roadside assistance and towing service to drivers across Darlington.",
  heroImage: "/images/gallery-3.jpg",
  heroImageAlt: "FSR Recovery Group vehicle attending a breakdown in Darlington",
  badges: ["Based in Darlington", "Available 24/7", "Cars & Vans"],
  introHeading: "A Recovery Company Genuinely Based in Darlington",
  introParagraphs: [
    "Unlike recovery operators dispatching from further afield, FSR Recovery Group is based at 135 Gladstone St, right here in Darlington. We know the town well — from the pedestrianised town centre and Cornmill shopping area to the retail parks along Yarm Road and the residential streets around Cockerton, Harrowgate Hill, Haughton-le-Skerne and Eastbourne.",
    "Our local base also means we're familiar with the villages that surround Darlington, including Middleton St George and Hurworth, and with the main roads that carry traffic into and out of the town. Wherever you've broken down in the Darlington area, tell us your exact location and vehicle details and we'll confirm how we can help.",
    "Because vehicle recovery and towing service in Darlington is what we do every day, you're calling a team that actually operates from the town — not a call centre routing your job to whichever driver happens to be nearest.",
  ],
  localHighlightsTitle: "Darlington Areas We Cover",
  localHighlights: [
    "Darlington town centre and the Cornmill area",
    "Cockerton and Harrowgate Hill",
    "Haughton-le-Skerne and Eastbourne",
    "Middleton St George and Hurworth",
  ],
  situationsTitle: "Breakdown & Recovery Situations We Handle in Darlington",
  situationsIntro: "As our home town, Darlington is where we respond to the widest range of everyday breakdown, accident and recovery situations.",
  situations: [
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "Engine or mechanical faults anywhere in Darlington are recovered promptly given our local base." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery & Jumpstarts", text: "A flat battery in a Darlington car park or driveway is one of our most common local callouts." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre or Puncture", text: "We can fit a spare or recover your vehicle if a tyre problem leaves it unsafe to continue in Darlington." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on Yarm Road or in the town centre? We can bring fuel directly to you." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision anywhere in Darlington, we provide fast, careful vehicle recovery." },
    { icon: "fa-solid fa-truck-monster", title: "Winch Out", text: "Stuck on soft ground or in a ditch near Darlington's rural edges? We can winch your vehicle free." },
  ],
  roadsIntro: "Darlington sits at the crossing point of several major routes. We provide car recovery and breakdown recovery on all of the following roads in addition to the town itself.",
  majorRoads: [
    { label: "A1(M)", href: "/areas/a1m", text: "The A1(M) passes close to Darlington, linking the town to Scotch Corner, Catterick and Durham. We recover vehicles from the carriageway and hard shoulder near Darlington's junctions." },
    { label: "A66", href: "/areas/a66", text: "The A66 runs from Darlington toward Barnard Castle and on across the Pennines. We're familiar with this route's exposed sections and respond to breakdowns along it." },
    { label: "A68", href: "/areas/a68", text: "Heading toward Bishop Auckland and the Durham Dales, the A68 is another route we cover for drivers travelling to and from Darlington." },
    { label: "A167", href: "/areas/a167", text: "The old Great North Road runs through Darlington itself on its way to Durham, making it one of our most regular recovery routes." },
  ],
  whatWeNeedIntro: "Calling us with a few key details helps us get to you faster and arrive prepared for the job.",
  whatWeNeed: [
    "Your exact location in or around Darlington",
    "Your vehicle's make, model and registration",
    "A brief description of the problem",
    "Whether the vehicle is safe to approach and can be moved",
    "Your preferred destination — home, a garage, or another address",
    "How many passengers are with you and any specific requirements",
  ],
  servicesHeading: "Recovery Services in Darlington",
  servicesIntro: "From breakdown recovery to vehicle transport, every service below is available to drivers across Darlington. Select a service to find out more.",
  faqs: [
    { question: "Is FSR Recovery Group actually based in Darlington?", answer: "Yes. We're based at 135 Gladstone St, Darlington DL3 6LB — not a call centre or a depot in another town — which is why we know the local roads and areas well." },
    { question: "Do you offer 24 hour car recovery in Darlington?", answer: "Yes. FSR Recovery Group provides 24/7 emergency car recovery in Darlington, including nights, weekends and public holidays." },
    { question: "What's the difference between roadside assistance and car recovery?", answer: "Roadside assistance covers problems that can often be resolved at your location, such as a flat battery or spare tyre. Car recovery means towing or transporting your vehicle when it can't be fixed at the roadside. We provide both across Darlington." },
    { question: "Do you cover Cockerton, Harrowgate Hill and Haughton-le-Skerne?", answer: "Yes. These are all areas of Darlington we cover regularly, along with Eastbourne, Middleton St George and Hurworth." },
    { question: "Can you tow my car to a garage in Darlington?", answer: "Yes. Once your vehicle is recovered we can take it to an agreed garage in Darlington, your home address, or another suitable destination." },
    { question: "Do you provide car recovery on the A1(M), A66, A68 or A167 near Darlington?", answer: "Yes. We regularly recover vehicles from all four of these routes as they pass through or near Darlington." },
    { question: "How much does car recovery cost in Darlington?", answer: "Cost depends on your location, vehicle and what's needed. Call or WhatsApp us with the details and we'll confirm a clear quote before we start." },
    { question: "Can I visit your Darlington address for a recovery?", answer: "We operate as a mobile recovery service — call or WhatsApp us with your location and vehicle details rather than visiting in person." },
  ],
  ctaHeading: "24/7 Car Recovery in Darlington, When You Need It",
  ctaText: "As a Darlington-based recovery service, we're ready to respond across the town and surrounding villages. Call or WhatsApp us now with your location.",
  nearbyAreas: [
    { label: "Durham", href: "/areas/durham" },
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
    { label: "Catterick", href: "/areas/catterick" },
    { label: "Northallerton", href: "/areas/northallerton" },
  ],
};

export default function DarlingtonAreaPage() {
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
