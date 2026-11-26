import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Car Recovery Peterlee & East Durham | FSR Recovery";
const description = "24/7 car recovery and roadside help in Peterlee, Easington, Horden and the A19. Breakdowns, accidents and non-starters. FSR Recovery: +44 7888 502989.";
const path = "/areas/peterlee";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Peterlee",
  h1: "Vehicle Recovery in Peterlee and East Durham",
  heroIntro: "FSR Recovery Group provides dependable breakdown recovery and roadside assistance across Peterlee, from the town centre to the surrounding East Durham villages.",
  heroImage: "/images/service-breakdown.jpg",
  heroImageAlt: "Breakdown recovery vehicle helping a driver near Peterlee",
  badges: ["Available 24/7", "Town & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Peterlee Drivers",
  introParagraphs: [
    "Peterlee's residential neighbourhoods, industrial estates and the surrounding East Durham countryside each present different recovery challenges. FSR Recovery Group is regularly called to breakdowns in the town centre, on the estates and along the rural lanes that connect Peterlee to nearby villages.",
    "We also cover the A19 and A182 as they serve Peterlee, along with routes toward Easington, Horden and the coast, so wherever your vehicle has stopped in the area, help is available.",
    "Whether you're commuting through Peterlee or based locally, contact us with your location and vehicle details and we'll confirm the best way to get you moving again.",
  ],
  localHighlightsTitle: "Peterlee Coverage Highlights",
  localHighlights: [
    "Peterlee town centre and residential estates",
    "A19 and A182 routes serving Peterlee",
    "Easington, Horden and the East Durham coast",
    "Industrial estates and rural lanes around the town",
  ],
  situationsTitle: "Common Breakdown Callouts Around Peterlee",
  situationsIntro: "These are some of the recovery situations we deal with in and around Peterlee.",
  situations: [
    { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "A car that won't start on a Peterlee estate or driveway is one of our most common local callouts." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre", text: "Punctures on Peterlee's estate roads or the A19, with a spare fitted at the roadside where it's safe, or recovery to a tyre fitter where it isn't." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the way through Peterlee can be recovered to a garage of your choice." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft verges or farm tracks near Peterlee can be winched clear." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Peterlee or on the A19, we provide careful recovery once everyone is safe." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "If you've run out of fuel around Peterlee, we can bring fuel directly to your location." },
  ],
  faqs: [
    { question: "Do you cover Peterlee town centre and its estates?", answer: <>{"Yes, we recover vehicles from Peterlee town centre and the surrounding residential estates."}</> },
    { question: "Can you assist on the A19 near Peterlee?", answer: <>{"Yes, we respond to breakdowns on the A19 as it passes Peterlee, following appropriate roadside safety procedures."}</> },
    { question: "Do you cover villages around Peterlee like Easington and Horden?", answer: <>{"Yes, our Peterlee coverage extends to Easington, Horden and other nearby East Durham villages."}</> },
    { question: "Can you recover a vehicle from a rural lane near Peterlee?", answer: <>{"Yes, we regularly assist with recovery from rural lanes and farm tracks in the East Durham countryside around Peterlee."}</> },
    { question: "Is recovery available in Peterlee at night?", answer: <>{"Yes, we operate 24/7 across Peterlee, including overnight and weekend callouts."}</> },
    { question: "Can you transport my car from Peterlee to a garage elsewhere?", answer: <>{"Yes, we can arrange transport from Peterlee to an agreed garage, home address or other destination."}</> },
    { question: "What should I tell you when I call from Peterlee?", answer: <>{"Your exact location (street, estate or car park name and postcode if you know it), the make and model, what happened, whether the vehicle rolls, steers and brakes, whether you have the keys, and where you'd like the vehicle taken. On the A19, add your direction of travel and the last junction you passed."}</> },
    { question: "What should I do if I break down on the A19 near Peterlee?", answer: <>{"Switch on your hazard lights, pull onto the verge or a safe stopping area if you can, and get everyone out on the side away from traffic if it's safe. Wait well away from the carriageway, behind a barrier if there is one. Then call +44 7888 502989. The Highway Code's "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"breakdown and incident rules"}</a>{" explain the full steps."}</> },
    { question: "Can you help if my car won't start at home in Peterlee?", answer: <>{"Yes. Tell us what happens when you turn the key. If it's a flat battery we may be able to "}<Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jump-start"}</Link>{" the car where it is; if it can't be fixed safely at the roadside, we can "}<Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"recover it"}</Link>{" to a garage of your choice."}</> },
    { question: "Can you collect a car from an industrial estate or a business car park in Peterlee?", answer: <>{"Yes, as long as we can reach the vehicle safely. Tell us the estate and unit name, any gate or barrier times and who will meet us, so the collection can be planned."}</> },
    { question: "Do you also cover Sunderland, Durham and Hartlepool routes from Peterlee?", answer: <>{"Our Peterlee page covers the town, the A19 and A182 routes and the East Durham villages and coast. For nearby areas see "}<Link href="/areas/sunderland" className="font-semibold text-red hover:underline">{"Sunderland"}</Link>{", "}<Link href="/areas/durham" className="font-semibold text-red hover:underline">{"Durham"}</Link>{" and "}<Link href="/areas/a19" className="font-semibold text-red hover:underline">{"A19 recovery"}</Link>{", or call +44 7888 502989 and we'll confirm whether we can help."}</> },
    { question: "Can you change a spare tyre for me in Peterlee?", answer: <>{"Yes, if your vehicle has a usable spare and it's safe to work where you've stopped, we can fit it at the roadside. See "}<Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">{"changing spare tyre"}</Link>{". If there's no usable spare, we can recover the vehicle to a tyre fitter or garage."}</> },
  ],
  ctaHeading: "Broken Down Near Peterlee?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm how we can help.",
  nearbyAreas: [
    { label: "Sunderland", href: "/areas/sunderland" },
    { label: "Durham", href: "/areas/durham" },
    { label: "A19 Recovery", href: "/areas/a19" },
    { label: "Middlesbrough", href: "/areas/middlesbrough" },
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
    { label: "A1(M)", href: "/areas/a1m" },
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
          "name": "Peterlee",
          "item": "https://fsrrecoverygroups.co.uk/areas/peterlee"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://fsrrecoverygroups.co.uk/areas/peterlee#service",
      "name": "Vehicle Recovery in Peterlee and East Durham",
      "description": "FSR Recovery Group provides vehicle recovery, towing and roadside assistance for cars and vans across Peterlee and East Durham, including the town centre and estates, the A19 and A182 routes, Easington, Horden and the coast.",
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
          "name": "Peterlee"
        },
        {
          "@type": "Place",
          "name": "Easington"
        },
        {
          "@type": "Place",
          "name": "Horden"
        }
      ],
      "url": "https://fsrrecoverygroups.co.uk/areas/peterlee",
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
      "@id": "https://fsrrecoverygroups.co.uk/areas/peterlee#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you cover Peterlee town centre and its estates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we recover vehicles from Peterlee town centre and the surrounding residential estates."
          }
        },
        {
          "@type": "Question",
          "name": "Can you assist on the A19 near Peterlee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we respond to breakdowns on the A19 as it passes Peterlee, following appropriate roadside safety procedures."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover villages around Peterlee like Easington and Horden?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Peterlee coverage extends to Easington, Horden and other nearby East Durham villages."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover a vehicle from a rural lane near Peterlee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we regularly assist with recovery from rural lanes and farm tracks in the East Durham countryside around Peterlee."
          }
        },
        {
          "@type": "Question",
          "name": "Is recovery available in Peterlee at night?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we operate 24/7 across Peterlee, including overnight and weekend callouts."
          }
        },
        {
          "@type": "Question",
          "name": "Can you transport my car from Peterlee to a garage elsewhere?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we can arrange transport from Peterlee to an agreed garage, home address or other destination."
          }
        },
        {
          "@type": "Question",
          "name": "What should I tell you when I call from Peterlee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your exact location (street, estate or car park name and postcode if you know it), the make and model, what happened, whether the vehicle rolls, steers and brakes, whether you have the keys, and where you'd like the vehicle taken. On the A19, add your direction of travel and the last junction you passed."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I break down on the A19 near Peterlee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Switch on your hazard lights, pull onto the verge or a safe stopping area if you can, and get everyone out on the side away from traffic if it's safe. Wait well away from the carriageway, behind a barrier if there is one. Then call +44 7888 502989. The Highway Code's breakdown and incident rules explain the full steps."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help if my car won't start at home in Peterlee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tell us what happens when you turn the key. If it's a flat battery we may be able to jump-start the car where it is; if it can't be fixed safely at the roadside, we can recover it to a garage of your choice."
          }
        },
        {
          "@type": "Question",
          "name": "Can you collect a car from an industrial estate or a business car park in Peterlee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, as long as we can reach the vehicle safely. Tell us the estate and unit name, any gate or barrier times and who will meet us, so the collection can be planned."
          }
        },
        {
          "@type": "Question",
          "name": "Do you also cover Sunderland, Durham and Hartlepool routes from Peterlee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Peterlee page covers the town, the A19 and A182 routes and the East Durham villages and coast. For nearby areas see Sunderland, Durham and A19 recovery, or call +44 7888 502989 and we'll confirm whether we can help."
          }
        },
        {
          "@type": "Question",
          "name": "Can you change a spare tyre for me in Peterlee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if your vehicle has a usable spare and it's safe to work where you've stopped, we can fit it at the roadside. See changing spare tyre. If there's no usable spare, we can recover the vehicle to a tyre fitter or garage."
          }
        }
      ]
    }
  ]
};

export default function PeterleeAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} schema={schema} afterIntro={<PeterleeGuidance sections={guidance.slice(0, 2)} />} afterSituations={<PeterleeGuidance sections={guidance.slice(2)} />} />
      </main>
      <Footer />
    </>
  );
}

const guidance = [
  { title: "Telling Us Where You Are in Peterlee", content: <><p className="my-4 leading-7 text-navy/70"><>{"Peterlee was built as a new town, so many streets look alike and estates are known by their names. When you call, give us the estate or street name and, if you can, the postcode. A nearby landmark also helps: the Castle Dene shopping centre in the town centre, the "}<a href="https://en.wikipedia.org/wiki/Peterlee" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"Apollo Pavilion"}</a>{" on the Sunny Blunts estate, a school, a pub or a named car park. On an industrial estate, give the estate name, the unit number and any gate or barrier details. If you're on a road out of town, tell us which one: the A19 to the west, the A1086 towards Horden and the coast, or the B1320 through the town centre."}</></p></> },
  { title: "Broken Down on the A19 Near Peterlee?", content: <><p className="my-4 leading-7 text-navy/70"><>{"The A19 runs along the west side of Peterlee between Sunderland and Hartlepool and carries fast, heavy traffic. If your vehicle stops on it:"}</></p><ol className="my-5 space-y-3 pl-6 list-decimal"><li><>{"Switch on your hazard lights and pull onto the verge or a safe stopping area if you can."}</></li><li><>{"Get everyone out on the side away from traffic if it's safe, and wait well away from the carriageway, behind a barrier if there is one."}</></li><li><>{"Don't try roadside repairs next to live traffic."}</></li><li><>{"Call +44 7888 502989 with your direction of travel (northbound towards Sunderland or southbound towards Hartlepool) and the last junction you passed."}</></li></ol><p className="my-4 leading-7 text-navy/70"><>{"The Highway Code's "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"breakdown and incident rules"}</a>{" explain the full steps. We follow appropriate roadside safety procedures on every A19 job; for more on this road see our "}<Link href="/areas/a19" className="font-semibold text-red hover:underline">{"A19 recovery"}</Link>{" page."}</></p></> },
  { title: "Recovery from Easington, Horden and the East Durham Coast", content: <><p className="my-4 leading-7 text-navy/70"><>{"Our Peterlee coverage extends to Easington, Horden and the villages and coast around them. Coastal car parks, narrow village streets and rural lanes can be tricky for a recovery truck, so tell us how the vehicle is parked, whether it's on a slope or soft ground, and whether anything is blocking access. If the vehicle is stuck on a verge or farm track, our "}<Link href="/services/winch-out" className="font-semibold text-red hover:underline">{"winch out"}</Link>{" service can pull it back onto firm ground before recovery."}</></p></> },
  { title: "Where We Can Take Your Vehicle", content: <><p className="my-4 leading-7 text-navy/70"><>{"Once the vehicle is loaded, we can take it to your home, a garage of your choice or another agreed destination. If it's going to a garage, let them know it's coming and check their opening hours, or arrange where the keys will be left. For planned moves between two addresses, see our "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{" service."}</></p></> },
];

function PeterleeGuidance({ sections }: { sections: typeof guidance }) {
  return <>{sections.map((section) => (
    <section key={section.title} className="py-16 sm:py-24">
      <div className="container-site fade-up">
        <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">{section.title}</h2>
        {section.content}
      </div>
    </section>
  ))}</>;
}
