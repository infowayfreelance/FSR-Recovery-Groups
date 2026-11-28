import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Car Recovery Northallerton, A167 & A684 | FSR Recovery";
const description = "24/7 car recovery and roadside help in Northallerton, nearby villages and the A167 and A684. Breakdowns and accidents. FSR Recovery: +44 7888 502989.";
const path = "/areas/northallerton";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Northallerton",
  h1: "24/7 Breakdown Recovery in Northallerton",
  heroIntro: "FSR Recovery Group provides reliable vehicle recovery across Northallerton, North Yorkshire's county town, and the villages that surround it.",
  heroImage: "/images/gallery-3.jpg",
  heroImageAlt: "Recovery vehicle assisting a driver in a market town",
  badges: ["Available 24/7", "Town & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Northallerton",
  introParagraphs: [
    "Northallerton's high street, the surrounding residential estates and the county's administrative buildings sit alongside quieter rural roads just outside town. FSR Recovery Group responds to breakdowns throughout Northallerton, whether you've stopped on the high street or on a nearby lane.",
    "We also cover the A167 and A684 as they pass through Northallerton, both important routes connecting the town to Darlington, Thirsk and the surrounding North Yorkshire countryside.",
    "Wherever in or around Northallerton your vehicle has broken down, contact us with your location and vehicle details and we'll confirm how we can help.",
  ],
  localHighlightsTitle: "Northallerton Coverage Highlights",
  localHighlights: [
    "Northallerton High Street and town centre",
    "A167 and A684 routes serving Northallerton",
    "Surrounding residential estates",
    "Nearby villages and North Yorkshire countryside",
  ],
  situationsTitle: "Common Breakdown Callouts in Northallerton",
  situationsIntro: "These are some of the recovery situations we deal with in and around Northallerton.",
  situations: [
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery on Northallerton's high street or a residential drive is a common local callout." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre", text: "Punctures around Northallerton's town centre or country roads: we can fit a usable spare at the roadside where it's safe, or recover the vehicle to a tyre fitter where it isn't." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A167 or A684 near Northallerton can be recovered to a suitable garage." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft verges near Northallerton can be winched clear safely." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Northallerton, we provide careful recovery once everyone is safe." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel near Northallerton? We can bring fuel directly to your location." },
  ],
  faqs: [
    { question: "Do you recover vehicles from Northallerton town centre?", answer: <>{"Yes, we recover vehicles from Northallerton High Street and the surrounding town centre streets."}</> },
    { question: "Can you help on the A167 or A684 near Northallerton?", answer: <>{"Yes, we assist drivers who break down on either the A167 or A684 as they serve Northallerton."}</> },
    { question: "Do you cover villages around Northallerton?", answer: <>{"Yes, our Northallerton coverage extends to the surrounding villages and North Yorkshire countryside."}</> },
    { question: "Is recovery available in Northallerton overnight?", answer: <>{"Yes, FSR Recovery Group operates 24/7 across Northallerton, including nights and weekends."}</> },
    { question: "Can you transport my car from Northallerton to a garage elsewhere?", answer: <>{"Yes, we can arrange transport from Northallerton to an agreed garage, home address or other suitable destination."}</> },
    { question: "How far is Northallerton from your Darlington base?", answer: <>{"Our base is at 135 Gladstone St, Darlington, and the A167 links Darlington with Northallerton. Call +44 7888 502989 with your location and we'll confirm how we can help."}</> },
    { question: "What should I tell you when I call from Northallerton?", answer: <>{"Your exact location (street, car park or lane name and postcode if you know it), the make and model, what happened, whether the vehicle rolls, steers and brakes, whether you have the keys, and where you'd like the vehicle taken. On the A167 or A684, add your direction of travel and the last junction or village you passed."}</> },
    { question: "What should I do if I break down on the A167 or A684?", answer: <>{"Switch on your hazard lights, pull onto the verge, into a lay-by or another safe stopping place if you can, and get everyone out on the side away from traffic if it's safe. Wait well away from the road, behind a barrier if there is one, then call +44 7888 502989. The Highway Code's "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"breakdown and incident rules"}</a>{" explain the full steps."}</> },
    { question: "Can you help if my car won't start at home in Northallerton?", answer: <>{"Yes. Tell us what happens when you turn the key. If it's a flat battery we may be able to "}<Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jump-start"}</Link>{" the car where it is; if it can't be fixed safely at the roadside, we can "}<Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"recover it"}</Link>{" to a garage of your choice. Our guide to "}<Link href="/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"a car that won't start with a good battery"}</Link>{" may help you describe the problem."}</> },
    { question: "Can you recover a car from a car park or the station in Northallerton?", answer: <>{"Yes, as long as we can reach the vehicle safely. Tell us the car park name, any barrier height or ticket rules and where the car is parked, so the collection can be planned."}</> },
    { question: "Do you also cover Thirsk, Ripon and Catterick from Northallerton?", answer: <>{"Our Northallerton page covers the town, the A167 and A684 routes and the surrounding villages. For nearby areas see "}<Link href="/areas/thirsk" className="font-semibold text-red hover:underline">{"Thirsk"}</Link>{", "}<Link href="/areas/ripon" className="font-semibold text-red hover:underline">{"Ripon"}</Link>{", "}<Link href="/areas/catterick" className="font-semibold text-red hover:underline">{"Catterick"}</Link>{" and "}<Link href="/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M) recovery"}</Link>{", or call +44 7888 502989 and we'll confirm whether we can help."}</> },
    { question: "Can you change a spare tyre for me in Northallerton?", answer: <>{"Yes, if your vehicle has a usable spare and it's safe to work where you've stopped, we can fit it at the roadside. See "}<Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">{"changing spare tyre"}</Link>{". If there's no usable spare, we can recover the vehicle to a tyre fitter or garage."}</> },
  ],
  ctaHeading: "Broken Down in Northallerton?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm how we can help.",
  nearbyAreas: [
    { label: "Thirsk", href: "/areas/thirsk" },
    { label: "A167 Recovery", href: "/areas/a167" },
    { label: "Ripon", href: "/areas/ripon" },
    { label: "Catterick", href: "/areas/catterick" },
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
          "name": "Northallerton",
          "item": "https://fsrrecoverygroups.co.uk/areas/northallerton"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://fsrrecoverygroups.co.uk/areas/northallerton#service",
      "name": "Vehicle Recovery in Northallerton",
      "description": "FSR Recovery Group provides vehicle recovery, towing and roadside assistance for cars and vans in Northallerton and the surrounding North Yorkshire villages, including the town centre and estates and the A167 and A684 routes.",
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
          "name": "Northallerton"
        },
        {
          "@type": "AdministrativeArea",
          "name": "North Yorkshire"
        }
      ],
      "url": "https://fsrrecoverygroups.co.uk/areas/northallerton",
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
      "@id": "https://fsrrecoverygroups.co.uk/areas/northallerton#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you recover vehicles from Northallerton town centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we recover vehicles from Northallerton High Street and the surrounding town centre streets."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help on the A167 or A684 near Northallerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we assist drivers who break down on either the A167 or A684 as they serve Northallerton."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover villages around Northallerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Northallerton coverage extends to the surrounding villages and North Yorkshire countryside."
          }
        },
        {
          "@type": "Question",
          "name": "Is recovery available in Northallerton overnight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FSR Recovery Group operates 24/7 across Northallerton, including nights and weekends."
          }
        },
        {
          "@type": "Question",
          "name": "Can you transport my car from Northallerton to a garage elsewhere?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we can arrange transport from Northallerton to an agreed garage, home address or other suitable destination."
          }
        },
        {
          "@type": "Question",
          "name": "How far is Northallerton from your Darlington base?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our base is at 135 Gladstone St, Darlington, and the A167 links Darlington with Northallerton. Call +44 7888 502989 with your location and we'll confirm how we can help."
          }
        },
        {
          "@type": "Question",
          "name": "What should I tell you when I call from Northallerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your exact location (street, car park or lane name and postcode if you know it), the make and model, what happened, whether the vehicle rolls, steers and brakes, whether you have the keys, and where you'd like the vehicle taken. On the A167 or A684, add your direction of travel and the last junction or village you passed."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I break down on the A167 or A684?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Switch on your hazard lights, pull onto the verge, into a lay-by or another safe stopping place if you can, and get everyone out on the side away from traffic if it's safe. Wait well away from the road, behind a barrier if there is one, then call +44 7888 502989. The Highway Code's breakdown and incident rules explain the full steps."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help if my car won't start at home in Northallerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tell us what happens when you turn the key. If it's a flat battery we may be able to jump-start the car where it is; if it can't be fixed safely at the roadside, we can recover it to a garage of your choice. Our guide to a car that won't start with a good battery may help you describe the problem."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover a car from a car park or the station in Northallerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, as long as we can reach the vehicle safely. Tell us the car park name, any barrier height or ticket rules and where the car is parked, so the collection can be planned."
          }
        },
        {
          "@type": "Question",
          "name": "Do you also cover Thirsk, Ripon and Catterick from Northallerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Northallerton page covers the town, the A167 and A684 routes and the surrounding villages. For nearby areas see Thirsk, Ripon, Catterick and A1(M) recovery, or call +44 7888 502989 and we'll confirm whether we can help."
          }
        },
        {
          "@type": "Question",
          "name": "Can you change a spare tyre for me in Northallerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if your vehicle has a usable spare and it's safe to work where you've stopped, we can fit it at the roadside. See changing spare tyre. If there's no usable spare, we can recover the vehicle to a tyre fitter or garage."
          }
        }
      ]
    }
  ]
};

export default function NorthallertonAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} schema={schema} afterIntro={<NorthallertonGuidance sections={guidance.slice(0, 2)} />} afterSituations={<NorthallertonGuidance sections={guidance.slice(2)} />} />
      </main>
      <Footer />
    </>
  );
}

const guidance = [
  { title: "Telling Us Where You Are in Northallerton", content: <><p className="my-4 leading-7 text-navy/70"><>{"Northallerton is a market town ("}<a href="https://en.wikipedia.org/wiki/Northallerton" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"Wikipedia"}</a>{") with a long High Street, car parks behind it and residential streets around it, so a street name or car park name helps us find you. When you call, give us the street and postcode if you know it, and a nearby landmark: the railway station, the Friarage Hospital, a supermarket car park, a school or a pub. If you are on a road out of town, tell us which one: the A167 towards Darlington or Thirsk, or the A684 towards Bedale and Leeming Bar. If you have stopped in a lay-by or on a village lane, give us the village name and the last junction you passed."}</></p></> },
  { title: "Broken Down on the A167 or A684 Near Northallerton?", content: <><p className="my-4 leading-7 text-navy/70"><>{"The A167 runs north to south through the area and the A684 runs east to west, so both carry local and through traffic. If your vehicle stops on either:"}</></p><ol className="my-5 space-y-3 pl-6 list-decimal"><li><>{"Switch on your hazard lights and pull onto the verge, into a lay-by or another safe stopping place if you can."}</></li><li><>{"Get everyone out on the side away from traffic if it's safe, and wait well away from the road, behind a barrier if there is one."}</></li><li><>{"Don't try roadside repairs next to moving traffic."}</></li><li><>{"Call +44 7888 502989 with your direction of travel and the last junction, village or turning you passed."}</></li></ol><p className="my-4 leading-7 text-navy/70"><>{"The Highway Code's "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener" className="font-semibold text-red hover:underline">{"breakdown and incident rules"}</a>{" explain the full steps. For more on this road see our "}<Link href="/areas/a167" className="font-semibold text-red hover:underline">{"A167 recovery"}</Link>{" page."}</></p></> },
  { title: "Villages, Farm Lanes and Soft Verges Around Northallerton", content: <><p className="my-4 leading-7 text-navy/70"><>{"Our Northallerton coverage extends to the surrounding villages and North Yorkshire countryside. Narrow lanes, gateways and farm tracks can be tricky for a recovery truck, so tell us how the vehicle is parked, whether it's on a slope or soft ground, and whether anything is blocking access. If the vehicle is stuck on a verge or in a field entrance, our "}<Link href="/services/winch-out" className="font-semibold text-red hover:underline">{"winch out"}</Link>{" service can pull it back onto firm ground before recovery."}</></p></> },
  { title: "Where We Can Take Your Vehicle", content: <><p className="my-4 leading-7 text-navy/70"><>{"Once the vehicle is loaded, we can take it to your home, a garage of your choice or another agreed destination. If it's going to a garage, let them know it's coming and check their opening hours, or arrange where the keys will be left. For planned moves between two addresses, see our "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{" service."}</></p></> },
];

function NorthallertonGuidance({ sections }: { sections: typeof guidance }) {
  return <>{sections.map((section) => (
    <section key={section.title} className="py-16 sm:py-24">
      <div className="container-site fade-up">
        <h2 className="mb-5 text-3xl font-extrabold text-navy sm:text-4xl">{section.title}</h2>
        {section.content}
      </div>
    </section>
  ))}</>;
}
