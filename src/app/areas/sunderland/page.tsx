import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Sunderland Breakdown Recovery & Towing | FSR Recovery";
const description = "24/7 breakdown and accident recovery in Sunderland, Washington, Roker and Seaburn, including the A19 and A1231. Call FSR Recovery on +44 7888 502989.";
const path = "/areas/sunderland";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Sunderland",
  h1: "Breakdown Recovery Across Sunderland",
  heroIntro: "From the city centre to the coast, FSR Recovery Group provides reliable vehicle recovery and roadside assistance to drivers throughout Sunderland and Wearside.",
  heroImage: "/images/service-roadside.jpg",
  heroImageAlt: "Roadside assistance technician helping a driver in Sunderland",
  badges: ["Available 24/7", "City & Coastal Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Sunderland and Wearside",
  introParagraphs: [
    "Sunderland's mix of city centre streets, coastal roads and busy retail areas around the Bridges shopping centre means breakdowns can happen almost anywhere. FSR Recovery Group responds to callouts across the city, from the Wear riverside to the seafront at Roker and Seaburn.",
    "We also cover the A19 and A1231 as they serve Sunderland, along with routes connecting to Washington and South Tyneside, giving commuters and visitors a dependable option if their vehicle lets them down.",
    "Wherever you've broken down in Sunderland, tell us your location and vehicle details and we'll advise whether we can get you moving again at the roadside or recover the vehicle to a suitable destination.",
  ],
  localHighlightsTitle: "Sunderland Coverage Highlights",
  localHighlights: [
    "Sunderland city centre and the Bridges area",
    "A19 and A1231 routes into and around the city",
    "Roker, Seaburn and the coastal road",
    "Washington and surrounding Wearside suburbs",
  ],
  situationsTitle: "Common Breakdown Callouts in Sunderland",
  situationsIntro: "These are some of the common reasons Sunderland drivers call us for recovery support.",
  situations: [
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery in a Sunderland car park or on a residential street is a common reason for our callouts." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures from city centre kerbs or coastal road debris, with a spare fitted at the roadside where it's safe, or recovery arranged where needed." },
    { icon: "fa-solid fa-gears", title: "Mechanical Breakdown", text: "If your vehicle develops a mechanical fault in Sunderland, we can recover it to a suitable garage." },
    { icon: "fa-solid fa-temperature-high", title: "Overheating", text: "An overheating engine in traffic near the Bridges can be recovered before it causes further damage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "We provide careful recovery following a collision on Sunderland's roads or the A19, once everyone is safe." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on the coastal road or A1231? We can bring fuel directly to you." },
  ],
  faqs: [
    { question: "Do you cover Sunderland city centre for breakdown recovery?", answer: <>{"Yes, we recover vehicles from Sunderland city centre and the surrounding streets, including near the Bridges shopping area."}</> },
    { question: "Can you help if I break down on the A19 near Sunderland?", answer: <>{"Yes, we assist drivers who break down on the A19 as it passes Sunderland, following appropriate roadside safety procedures."}</> },
    { question: "Do you cover the Sunderland coastal areas like Roker and Seaburn?", answer: <>{"Yes, our Sunderland coverage extends to Roker, Seaburn and the surrounding coastal roads."}</> },
    { question: "How far is Sunderland from your Darlington base?", answer: <>{"Sunderland is part of our wider North East coverage area, which we cover from our Darlington base. Call us with your location and we'll confirm how we can help."}</> },
    { question: "Can you transport my car from Sunderland to a garage elsewhere?", answer: <>{"Yes, we can arrange vehicle transport from Sunderland to an agreed garage, home address or other destination."}</> },
    { question: "Is recovery available in Sunderland overnight?", answer: <>{"Yes, FSR Recovery Group operates 24/7 in Sunderland, including nights, weekends and holidays."}</> },
    { question: "Do you cover Washington as well as Sunderland city itself?", answer: <>{"Yes, Washington and the surrounding Wearside suburbs are included in our Sunderland coverage area."}</> },
    { question: "What should I tell you when I call from Sunderland?", answer: <>{"Tell us where you are, which road or landmark you're near, the direction you were travelling and which side of the River Wear you're on if you're near a bridge. Add your vehicle's make, model and registration, what happened, and where you'd like it taken. If you're in a car park, give the car park name and the level or bay if you know it."}</> },
    { question: "Is it safe to stay in my vehicle on the A19 or A1231?", answer: <>{"Not usually. On a fast dual carriageway, if you can leave the vehicle safely, get everyone out and wait well away from the traffic, behind a barrier where there is one, and don't stand between your vehicle and moving traffic. Switch on your hazard lights and follow the Highway Code's "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"breakdown and incident rules"}</a>{", then call us with your location."}</> },
    { question: "Do you recover vans as well as cars in Sunderland?", answer: <>{"Our Sunderland service covers cars and vans. When you call, tell us the make and model, whether the vehicle is loaded and whether the wheels turn, so we can send suitable equipment."}</> },
    { question: "Can you help with a flat battery or a puncture in Sunderland?", answer: <>{"Yes. We can help with a "}<Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jump start"}</Link>{" for a flat battery and with "}<Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">{"changing a spare tyre"}</Link>{" where it's safe to do so at the roadside. If the vehicle can't be fixed on the spot, we can arrange "}<Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"recovery"}</Link>{" instead."}</> },
    { question: "Do you also cover Newcastle, Peterlee and Durham?", answer: <>{"Yes. We also provide recovery in "}<Link href="/areas/newcastle" className="font-semibold text-red hover:underline">{"Newcastle"}</Link>{", "}<Link href="/areas/peterlee" className="font-semibold text-red hover:underline">{"Peterlee"}</Link>{" and "}<Link href="/areas/durham" className="font-semibold text-red hover:underline">{"Durham"}</Link>{", and along the "}<Link href="/areas/a19" className="font-semibold text-red hover:underline">{"A19"}</Link>{". Call us with your location if you're travelling between these areas."}</> },
  ],
  ctaHeading: "Need Recovery in Sunderland?",
  ctaText: "Call or WhatsApp FSR Recovery Group with your location in Sunderland and we'll confirm how we can help.",
  nearbyAreas: [
    { label: "Newcastle", href: "/areas/newcastle" },
    { label: "Peterlee", href: "/areas/peterlee" },
    { label: "A19 Recovery", href: "/areas/a19" },
    { label: "Durham", href: "/areas/durham" },
    { label: "Middlesbrough", href: "/areas/middlesbrough" },
    { label: "A1(M)", href: "/areas/a1m" },
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://fsrrecoverygroups.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Areas",
          "item": "https://fsrrecoverygroups.co.uk/areas"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sunderland",
          "item": "https://fsrrecoverygroups.co.uk/areas/sunderland"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://fsrrecoverygroups.co.uk/areas/sunderland#service",
      "name": "Breakdown Recovery Across Sunderland",
      "description": "FSR Recovery Group provides vehicle recovery, towing and roadside assistance for cars and vans across Sunderland and Wearside, including the city centre, the A19 and A1231, Washington, Roker and Seaburn.",
      "serviceType": "Vehicle recovery and roadside assistance",
      "provider": {
        "@type": "AutomotiveBusiness",
        "@id": "https://fsrrecoverygroups.co.uk/#business",
        "name": "FSR Recovery Group",
        "telephone": "+447888502989",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "135 Gladstone St",
          "addressLocality": "Darlington",
          "postalCode": "DL3 6LB",
          "addressCountry": "GB"
        }
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sunderland"
        },
        {
          "@type": "Place",
          "name": "Washington"
        },
        {
          "@type": "Place",
          "name": "Roker"
        },
        {
          "@type": "Place",
          "name": "Seaburn"
        }
      ],
      "url": "https://fsrrecoverygroups.co.uk/areas/sunderland",
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+447888502989",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://fsrrecoverygroups.co.uk/areas/sunderland#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you cover Sunderland city centre for breakdown recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we recover vehicles from Sunderland city centre and the surrounding streets, including near the Bridges shopping area."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help if I break down on the A19 near Sunderland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we assist drivers who break down on the A19 as it passes Sunderland, following appropriate roadside safety procedures."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover the Sunderland coastal areas like Roker and Seaburn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Sunderland coverage extends to Roker, Seaburn and the surrounding coastal roads."
          }
        },
        {
          "@type": "Question",
          "name": "How far is Sunderland from your Darlington base?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sunderland is part of our wider North East coverage area, which we cover from our Darlington base. Call us with your location and we'll confirm how we can help."
          }
        },
        {
          "@type": "Question",
          "name": "Can you transport my car from Sunderland to a garage elsewhere?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we can arrange vehicle transport from Sunderland to an agreed garage, home address or other destination."
          }
        },
        {
          "@type": "Question",
          "name": "Is recovery available in Sunderland overnight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FSR Recovery Group operates 24/7 in Sunderland, including nights, weekends and holidays."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover Washington as well as Sunderland city itself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Washington and the surrounding Wearside suburbs are included in our Sunderland coverage area."
          }
        },
        {
          "@type": "Question",
          "name": "What should I tell you when I call from Sunderland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tell us where you are, which road or landmark you're near, the direction you were travelling and which side of the River Wear you're on if you're near a bridge. Add your vehicle's make, model and registration, what happened, and where you'd like it taken. If you're in a car park, give the car park name and the level or bay if you know it."
          }
        },
        {
          "@type": "Question",
          "name": "Is it safe to stay in my vehicle on the A19 or A1231?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not usually. On a fast dual carriageway, if you can leave the vehicle safely, get everyone out and wait well away from the traffic, behind a barrier where there is one, and don't stand between your vehicle and moving traffic. Switch on your hazard lights and follow the Highway Code's breakdown and incident rules, then call us with your location."
          }
        },
        {
          "@type": "Question",
          "name": "Do you recover vans as well as cars in Sunderland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Sunderland service covers cars and vans. When you call, tell us the make and model, whether the vehicle is loaded and whether the wheels turn, so we can send suitable equipment."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with a flat battery or a puncture in Sunderland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can help with a jump start for a flat battery and with changing a spare tyre where it's safe to do so at the roadside. If the vehicle can't be fixed on the spot, we can arrange recovery instead."
          }
        },
        {
          "@type": "Question",
          "name": "Do you also cover Newcastle, Peterlee and Durham?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We also provide recovery in Newcastle, Peterlee and Durham, and along the A19. Call us with your location if you're travelling between these areas."
          }
        }
      ]
    }
  ]
};

export default function SunderlandAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} schema={schema} afterIntro={<SunderlandGuidance sections={guidance.slice(0, 2)} />} afterSituations={<SunderlandGuidance sections={guidance.slice(2)} />} />
      </main>
      <Footer />
    </>
  );
}

const guidance = [
  { title: "Describing Where You Are in Sunderland", text: <>{"The River Wear divides the city, and a breakdown near a bridge can be on either side of it. When you call, tell us which bank you're on and the nearest landmark, for example the "}<a href="https://en.wikipedia.org/wiki/Sunderland" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"Wearmouth Bridge"}</a>{", the Queen Alexandra Bridge, the Northern Spire Bridge, the Bridges shopping centre or the seafront at Roker. If you're on the A19 or the A1231 (Sunderland Highway), give us the direction you were travelling and the last junction or road sign you passed. Street name, car park name and postcode all help too."}</> },
  { title: "Breakdowns on the Coast Road at Roker and Seaburn", text: <>{"The seafront road past Roker and Seaburn is a mix of promenade parking, junctions and slower traffic. If you've stopped near the pier, a car park or a side street, tell us the name of the car park or the nearest junction and which way the vehicle is facing. We'll ask whether it can be moved safely, and whether the keys, steering and handbrake are working, so we can plan the recovery."}</> },
  { title: "Staying Safe After a Breakdown on the A19 or A1231", text: <>{"Dual carriageways are fast and unforgiving. Switch on your hazard lights, steer onto the verge or a safe stopping area if you can, and get everyone out of the vehicle on the side away from traffic if it's safe to do so. Wait well away from the road, behind a barrier where there is one, and don't stand between the vehicle and moving traffic. The Highway Code's "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"breakdown and incident rules"}</a>{" explain what to do before you call us."}</> },
  { title: "Washington and the Routes Around Sunderland", text: <>{"Sunderland's wider area includes Washington and the routes linking the city with South Tyneside and the A19. If your vehicle has stopped on one of these routes, say whether you're heading into the city or away from it, and mention any landmark you can see, such as a junction, a retail park or a petrol station. If you're not sure of the road name, describe what's around you and we'll work it out with you on the call."}</> },
  { title: "Where Can We Take Your Vehicle?", text: <>{"Once your vehicle is safely loaded, it can go to the destination you choose: a garage, a dealership, your home or another agreed address. Tell us the name and postcode of the garage and whether it's open, so you aren't left with a vehicle outside a closed workshop. For longer or planned moves, see "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{"."}</> },
];

function SunderlandGuidance({ sections }: { sections: typeof guidance }) {
  return <>{sections.map((section) => (
    <section key={section.title} className="py-16 sm:py-24">
      <div className="container-site fade-up">
        <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">{section.title}</h2>
        <p className="leading-7 text-navy/70">{section.text}</p>
      </div>
    </section>
  ))}</>;
}
