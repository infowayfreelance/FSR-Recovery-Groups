import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Breakdown Recovery Ripon, 24/7 | FSR Recovery Group";
const description = "24/7 breakdown recovery in Ripon, nearby villages and the A61. Cars and vans recovered to a garage or home. Call FSR Recovery Group on +44 7888 502989.";
const path = "/areas/ripon";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Ripon",
  h1: "Vehicle Recovery in Ripon",
  heroIntro: "FSR Recovery Group provides dependable breakdown recovery to drivers in Ripon, one of North Yorkshire's smallest cities, and the surrounding countryside.",
  heroImage: "/images/about-tow.jpg",
  heroImageAlt: "Recovery vehicle assisting a driver near a cathedral city",
  badges: ["Available 24/7", "City & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Ripon and the Surrounding Area",
  introParagraphs: [
    <>{"Ripon's compact city centre around the market place and Cathedral, along with the rural roads that lead out toward Harrogate and the Yorkshire Dales, both fall within our coverage area. FSR Recovery Group responds to breakdowns throughout Ripon and the surrounding villages. Ripon is a cathedral city about 12 miles north of Harrogate and 11 miles south-west of Thirsk, in the HG4 postcode district ("}<a href="https://en.wikipedia.org/wiki/Ripon" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"Ripon – Wikipedia"}</a>{")."}</>,
    "We also cover the A61 and the nearby A1(M) as they serve Ripon, giving drivers travelling to or from the city a reliable recovery option if a vehicle problem occurs.",
    "Whether you've broken down in Ripon's centre or on a quieter road nearby, contact us with your location and vehicle details and we'll confirm how we can help.",
  ],
  localHighlightsTitle: "Ripon Coverage Highlights",
  localHighlights: [
    "Ripon city centre and the market place",
    "A61 and nearby A1(M) routes",
    "Routes toward Harrogate and the Yorkshire Dales",
    "Surrounding rural villages and farmland",
  ],
  situationsTitle: "Common Breakdown Callouts Around Ripon",
  situationsIntro: "These are among the recovery situations we most often handle in and around Ripon.",
  situations: [
    { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "A car that won't start in Ripon's city centre or on a rural drive is a common local callout." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre", text: "Punctures on Ripon's streets or the surrounding country roads are dealt with safely, with a spare fitted where possible or the car recovered." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: <>{"Vehicles stuck on soft ground near Ripon can be winched clear safely. See "}<Link href="/services/winch-out" className="font-semibold text-red hover:underline">{"winch out"}</Link>{"."}</> },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A61 near Ripon can be recovered to a suitable garage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Ripon, we provide careful vehicle recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel near Ripon? We can bring fuel directly to your location." },
  ],
  faqs: [
    { question: "Do you recover vehicles from Ripon city centre?", answer: <>{"Yes, we recover vehicles from Ripon city centre, including the market place and surrounding streets."}</> },
    { question: "Can you help on the A61 near Ripon?", answer: <>{"Yes, we assist drivers who break down on the A61 as it serves Ripon."}</> },
    { question: "Do you cover villages around Ripon?", answer: <>{"Yes, our Ripon coverage extends to the surrounding villages and rural North Yorkshire roads."}</> },
    { question: "Is recovery available in Ripon overnight?", answer: <>{"Yes, FSR Recovery Group operates 24/7 across Ripon, including nights, weekends and holidays."}</> },
    { question: "Can you transport my car from Ripon to a garage elsewhere?", answer: <>{"Yes, we can arrange transport from Ripon to an agreed garage, home address or other suitable destination."}</> },
    { question: "How far is Ripon from your Darlington base?", answer: <>{"Ripon sits toward the southern edge of our coverage area — call us with your location and we'll confirm response times."}</> },
    { question: "What details help you find me in Ripon?", answer: <>{"The street or car park name and your HG4 postcode if you know it, or the nearest landmark, such as the Market Place, the Cathedral, the racecourse or the canal basin. Add the make and model, what has gone wrong, whether the vehicle rolls and steers, and where you would like it taken."}</> },
    { question: "I've broken down on the A61 near Ripon. What should I do first?", answer: <>{"Put your hazard lights on, move onto a verge, lay-by or other safe place if the car will still roll, and get everyone out on the side away from traffic if it's safe. Wait behind a barrier or well back from the road, then call +44 7888 502989 and tell us which way you were heading and the last village or junction you passed. The Highway Code's "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"breakdown and incident rules"}</a>{" set out the full steps."}</> },
    { question: "I'm visiting Ripon and live a long way away. Can you take my car home?", answer: <>{"We can recover the vehicle to a local garage in or near Ripon, or arrange "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{" to an agreed address further away. Tell us both postcodes when you call and we'll explain the options before anything is booked."}</> },
    { question: "Can you get a car out of a field, verge or farm track near Ripon?", answer: <>{"Often, yes. If the vehicle is stuck on soft ground, our "}<Link href="/services/winch-out" className="font-semibold text-red hover:underline">{"winch out"}</Link>{" service can pull it back onto a firm surface where it's safe to do so. Tell us how far it is from the road and whether the ground is muddy, sloping or flooded. Our guide to "}<Link href="/blog/winch-out-vs-recovery-stuck-in-mud" className="font-semibold text-red hover:underline">{"winching or recovery when you're stuck in mud"}</Link>{" explains the difference."}</> },
    { question: "Do you also cover Thirsk, Northallerton and Catterick?", answer: <>{"Yes. Each has its own page: "}<Link href="/areas/thirsk" className="font-semibold text-red hover:underline">{"Thirsk"}</Link>{", "}<Link href="/areas/northallerton" className="font-semibold text-red hover:underline">{"Northallerton"}</Link>{" and "}<Link href="/areas/catterick" className="font-semibold text-red hover:underline">{"Catterick"}</Link>{". For the motorway, see "}<Link href="/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M) recovery"}</Link>{" and our guide to "}<Link href="/blog/broken-down-on-the-a1m" className="font-semibold text-red hover:underline">{"breaking down on the A1(M)"}</Link>{"."}</> },
    { question: "Can you help if I've run out of fuel near Ripon?", answer: <>{"Yes. Our "}<Link href="/services/refueling" className="font-semibold text-red hover:underline">{"refueling"}</Link>{" service can bring fuel to you where it's safe to stop. If you're not sure whether it's fuel or a fault, our guide on "}<Link href="/blog/run-out-of-fuel-what-to-do" className="font-semibold text-red hover:underline">{"what to do when you run out of fuel"}</Link>{" may help, or call +44 7888 502989."}</> },
  ],
  ctaHeading: "Broken Down in Ripon?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm how we can help.",
  nearbyAreas: [
    { label: "Thirsk", href: "/areas/thirsk" },
    { label: "Catterick", href: "/areas/catterick" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
    { label: "Northallerton", href: "/areas/northallerton" },
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
          "name": "Ripon",
          "item": "https://fsrrecoverygroups.co.uk/areas/ripon"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://fsrrecoverygroups.co.uk/areas/ripon#service",
      "name": "Vehicle Recovery in Ripon",
      "description": "FSR Recovery Group provides vehicle recovery, towing and roadside assistance for cars and vans in Ripon and the surrounding North Yorkshire villages, including the city centre and market place, the A61 and nearby A1(M), and routes toward Harrogate and the Yorkshire Dales.",
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
          "name": "Ripon"
        },
        {
          "@type": "AdministrativeArea",
          "name": "North Yorkshire"
        }
      ],
      "url": "https://fsrrecoverygroups.co.uk/areas/ripon",
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
      "@id": "https://fsrrecoverygroups.co.uk/areas/ripon#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you recover vehicles from Ripon city centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we recover vehicles from Ripon city centre, including the market place and surrounding streets."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help on the A61 near Ripon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we assist drivers who break down on the A61 as it serves Ripon."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover villages around Ripon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Ripon coverage extends to the surrounding villages and rural North Yorkshire roads."
          }
        },
        {
          "@type": "Question",
          "name": "Is recovery available in Ripon overnight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FSR Recovery Group operates 24/7 across Ripon, including nights, weekends and holidays."
          }
        },
        {
          "@type": "Question",
          "name": "Can you transport my car from Ripon to a garage elsewhere?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we can arrange transport from Ripon to an agreed garage, home address or other suitable destination."
          }
        },
        {
          "@type": "Question",
          "name": "How far is Ripon from your Darlington base?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ripon sits toward the southern edge of our coverage area — call us with your location and we'll confirm response times."
          }
        },
        {
          "@type": "Question",
          "name": "What details help you find me in Ripon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The street or car park name and your HG4 postcode if you know it, or the nearest landmark, such as the Market Place, the Cathedral, the racecourse or the canal basin. Add the make and model, what has gone wrong, whether the vehicle rolls and steers, and where you would like it taken."
          }
        },
        {
          "@type": "Question",
          "name": "I've broken down on the A61 near Ripon. What should I do first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Put your hazard lights on, move onto a verge, lay-by or other safe place if the car will still roll, and get everyone out on the side away from traffic if it's safe. Wait behind a barrier or well back from the road, then call +44 7888 502989 and tell us which way you were heading and the last village or junction you passed. The Highway Code's breakdown and incident rules set out the full steps."
          }
        },
        {
          "@type": "Question",
          "name": "I'm visiting Ripon and live a long way away. Can you take my car home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can recover the vehicle to a local garage in or near Ripon, or arrange vehicle transporting to an agreed address further away. Tell us both postcodes when you call and we'll explain the options before anything is booked."
          }
        },
        {
          "@type": "Question",
          "name": "Can you get a car out of a field, verge or farm track near Ripon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. If the vehicle is stuck on soft ground, our winch out service can pull it back onto a firm surface where it's safe to do so. Tell us how far it is from the road and whether the ground is muddy, sloping or flooded. Our guide to winching or recovery when you're stuck in mud explains the difference."
          }
        },
        {
          "@type": "Question",
          "name": "Do you also cover Thirsk, Northallerton and Catterick?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Each has its own page: Thirsk, Northallerton and Catterick. For the motorway, see A1(M) recovery and our guide to breaking down on the A1(M)."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help if I've run out of fuel near Ripon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our refueling service can bring fuel to you where it's safe to stop. If you're not sure whether it's fuel or a fault, our guide on what to do when you run out of fuel may help, or call +44 7888 502989."
          }
        }
      ]
    }
  ]
};

export default function RiponAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} schema={schema} afterIntro={<RiponGuidance sections={guidance.slice(0, 2)} />} afterSituations={<RiponGuidance sections={guidance.slice(2)} />} />
      </main>
      <Footer />
    </>
  );
}

const guidance = [
  { title: "Landmarks That Help Us Find You in Ripon", content: <><p className="my-4 leading-7 text-navy/70"><>{"Ripon is compact, but streets around the centre can look alike to someone who doesn't know them. When you call +44 7888 502989, a landmark helps: the "}<strong><>{"Market Place"}</></strong>{", "}<strong><>{"Ripon Cathedral"}</></strong>{", "}<strong><>{"Ripon Racecourse"}</></strong>{", the "}<strong><>{"canal basin"}</></strong>{" at the end of the Ripon Canal, or the name of the car park or supermarket you're in ("}<a href="https://en.wikipedia.org/wiki/Ripon" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"Ripon – Wikipedia"}</a>{"). Give us your HG4 postcode if you know it. If you're on the edge of the city, tell us which road you came in on and which way you were heading."}</></p></> },
  { title: "Broken Down on the A61 Through Ripon?", content: <><p className="my-4 leading-7 text-navy/70"><>{"The A61 runs through Ripon, linking it with Harrogate to the south and Thirsk to the north ("}<a href="https://en.wikipedia.org/wiki/A61_road" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"A61 road – Wikipedia"}</a>{"). If your vehicle stops on it:"}</></p><ul className="my-5 space-y-3 pl-6 list-disc"><li><><strong><>{"Hazard lights on"}</></strong>{", and if the car will still roll, move it onto a verge, lay-by or side road rather than stopping in a live lane."}</></li><li><><strong><>{"Get out on the side away from traffic"}</></strong>{" if it's safe, and wait well back from the road, behind a barrier if there is one."}</></li><li><><strong><>{"Call +44 7888 502989"}</></strong>{" and tell us which way you were travelling and the last village, roundabout or junction you passed."}</></li></ul><p className="my-4 leading-7 text-navy/70"><>{"The Highway Code's "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"breakdown and incident rules"}</a>{" explain these steps in full. If you're on the motorway rather than the A61, see "}<Link href="/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M) recovery"}</Link>{"."}</></p></> },
  { title: "Visiting Fountains Abbey or the Dales? If Your Car Breaks Down Away From Ripon", content: <><p className="my-4 leading-7 text-navy/70"><>{"Many people drive to Ripon for the cathedral, the races, Fountains Abbey or the Yorkshire Dales, so a breakdown can happen a long way from home. If it does, tell us:"}</></p><ul className="my-5 space-y-3 pl-6 list-disc"><li><><strong><>{"Where the car is:"}</></strong>{" the car park, lane or village name, or the nearest road sign."}</></li><li><><strong><>{"Where it needs to go:"}</></strong>{" a local garage near Ripon, or your home address if you'd rather have it repaired there."}</></li><li><><strong><>{"Who is travelling:"}</></strong>{" how many people need to leave the scene with the vehicle, so we can tell you what's possible."}</></li></ul><p className="my-4 leading-7 text-navy/70"><>{"We can recover the vehicle to an agreed garage or address, and for longer trips we can arrange "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{". We recover from public roads and car parks where we can reach the vehicle safely and access is allowed."}</></p></> },
];

function RiponGuidance({ sections }: { sections: typeof guidance }) {
  return <>{sections.map((section) => (
    <section key={section.title} className="py-16 sm:py-24">
      <div className="container-site fade-up">
        <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">{section.title}</h2>
        {section.content}
      </div>
    </section>
  ))}</>;
}
