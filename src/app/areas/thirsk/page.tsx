import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Car Recovery Thirsk | Breakdown & Towing | FSR Recovery";
const description = "Broken down near Thirsk? FSR Recovery Group recovers cars and light vans in the town, nearby villages and on the A19, A61 and A168. Call +44 7888 502989.";
const path = "/areas/thirsk";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Thirsk",
  h1: "Breakdown Recovery in Thirsk and North Yorkshire",
  heroIntro: "FSR Recovery Group provides dependable vehicle recovery to drivers in Thirsk, covering the market town centre and the rural roads that surround it.",
  heroImage: "/images/gallery-2.jpg",
  heroImageAlt: "Recovery vehicle helping a driver on a rural North Yorkshire road",
  badges: ["Available 24/7", "Town & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Thirsk and the Surrounding Area",
  introParagraphs: [
    "Thirsk's market square, the surrounding rural lanes and the fast-moving A19 and A61 that pass close to the town mean breakdowns here can happen in very different settings. FSR Recovery Group covers the town centre, the nearby villages and the main routes serving Thirsk.",
    "We also assist drivers travelling between North Yorkshire market towns, including those heading toward Northallerton or south toward York, who experience a breakdown near Thirsk.",
    "Whether you've broken down in the town itself or on a country lane nearby, contact us with your location and vehicle details and we'll confirm how we can help and when we can reach you.",
  ],
  localHighlightsTitle: "Thirsk Coverage Highlights",
  localHighlights: [
    "Thirsk market square and town centre",
    "A19, A61, A168 and A170 routes serving Thirsk",
    "Sowerby, Carlton Miniott, Topcliffe and other villages and farmland",
    "Routes toward Northallerton and York",
  ],
  situationsTitle: "Common Breakdown Callouts Around Thirsk",
  situationsIntro: "These are among the recovery situations we most often handle in and around Thirsk.",
  situations: [
    { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "A car that won't start in Thirsk's town centre or on a farm track nearby is a common local callout." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft verges or muddy tracks near Thirsk can be winched clear safely." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on country lanes around Thirsk, with a spare fitted at the roadside where it's safe." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A19 or A61 near Thirsk can be recovered to a suitable garage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Thirsk, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on a rural stretch near Thirsk? We can bring fuel directly to you." },
  ],
  faqs: [
    { question: "Do you cover Thirsk town centre and the market square?", answer: "Yes, we recover vehicles from Thirsk town centre, the market square and surrounding streets." },
    { question: "Can you help on the A19 or A61 near Thirsk?", answer: "Yes, we respond to breakdowns on both the A19 and A61 as they pass near Thirsk." },
    { question: "Do you cover rural villages around Thirsk?", answer: "Yes. We help drivers in the villages and farmland around Thirsk, including Sowerby, Carlton Miniott, Topcliffe and Sessay. Give us the postcode, a farm or lane name, or a shared location and we'll confirm before we set off." },
    { question: "Can you winch a vehicle stuck off-road near Thirsk?", answer: "Yes, we provide winch-out recovery for vehicles stuck on soft ground, verges or farm tracks near Thirsk." },
    { question: "Is recovery available in Thirsk at night?", answer: "Yes, FSR Recovery Group operates 24/7 across Thirsk and the surrounding area." },
    { question: "How far is Thirsk from your Darlington base?", answer: "Thirsk is within our wider North Yorkshire coverage area — call us with your location and we'll confirm response times." },
    { question: "Do I need breakdown cover to call you?", answer: "No. You can call or WhatsApp us directly without breakdown cover or a membership. We'll quote for the job once we know your vehicle, where it is and where it needs to go." },
    { question: "Can you help on the A168 or the A170 near Thirsk?", answer: "Yes. We help drivers on the A168 between Thirsk and the A1(M), and on the A170 east of Thirsk. Tell us your direction of travel and the nearest village, junction or landmark so we can find you." },
    { question: "Where can you take my car from Thirsk?", answer: "We can take your vehicle to a garage in Thirsk, Northallerton or Ripon, to your home, or to another address you agree with us elsewhere in the North East or North Yorkshire." },
    { question: "What should I do while I wait for recovery near Thirsk?", answer: "Switch on your hazard lights and, if it's dark, your sidelights. If it's safe, get everyone out on the side away from traffic and wait well back from the road. On a motorway, don't put out a warning triangle. If you can't get out safely, stay in the vehicle with your seat belt on and call 999." },
  ],
  ctaHeading: "Broken Down Near Thirsk?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Northallerton", href: "/areas/northallerton" },
    { label: "Ripon", href: "/areas/ripon" },
    { label: "A19 Recovery", href: "/areas/a19" },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
{
    "@type": "BreadcrumbList",
    "@id": "https://fsrrecoverygroups.co.uk/areas/thirsk#breadcrumb",
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
            "name": "Thirsk",
            "item": "https://fsrrecoverygroups.co.uk/areas/thirsk"
        }
    ]
},
{
    "@type": "Service",
    "@id": "https://fsrrecoverygroups.co.uk/areas/thirsk#service",
    "name": "Breakdown Recovery in Thirsk and North Yorkshire",
    "description": "FSR Recovery Group provides dependable vehicle recovery to drivers in Thirsk, covering the market town centre and the rural roads that surround it.",
    "serviceType": "Vehicle recovery and roadside assistance",
    "url": "https://fsrrecoverygroups.co.uk/areas/thirsk",
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
            "name": "Thirsk"
        },
        {
            "@type": "AdministrativeArea",
            "name": "North Yorkshire"
        }
    ],
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
      "@id": "https://fsrrecoverygroups.co.uk/areas/thirsk#faq",
      mainEntity: content.faqs.map(({ question, answer }) => ({
        "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function ThirskAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout
          content={content}
          path={path}
          schema={schema}
          afterIntro={
            <section className="py-16 sm:py-24">
              <div className="container-site space-y-10">
                <div className="fade-up space-y-4">
                  <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Villages and Roads We Cover Around Thirsk</h2>
                  <p className="leading-7 text-navy/70">{"We recover vehicles in Thirsk town centre and the Market Place, and in the villages around the town, including Sowerby, Carlton Miniott, Topcliffe, Dalton, Sessay, Pickhill, Bagby and Sutton-under-Whitestonecliffe. Call with the postcode, a farm or lane name, or a shared location and we'll confirm before we set off."}</p>
                  <p className="leading-7 text-navy/70">{"On the main roads, we help drivers on the "}<Link href="/areas/a19" className="font-semibold text-red hover:underline">{"A19"}</Link>{" north towards "}<Link href="/areas/northallerton" className="font-semibold text-red hover:underline">{"Northallerton"}</Link>{" and south towards York, the A61 towards "}<Link href="/areas/ripon" className="font-semibold text-red hover:underline">{"Ripon"}</Link>{", the A168 towards the "}<Link href="/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M)"}</Link>{", and the A170 east of the town. On a dual carriageway, the direction of travel and the nearest junction, lay-by or village helps us find you."}</p>
                </div>
                <div className="fade-up space-y-4">
                  <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Which Service Do You Need?</h2>
                  <p className="leading-7 text-navy/70">{"Tell us what's happened and we'll send the right help:"}</p>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-navy/70">
                    <li><strong>{"Car won't start"}</strong>{" → "}<Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jump start"}</Link>{". If it still won't start, we arrange "}<Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"breakdown recovery"}</Link>{". See also "}<Link href="/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"car won't start but the battery is fine"}</Link>{"."}</li>
                    <li><strong>{"Flat tyre and you have a usable spare"}</strong>{" → "}<Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">{"spare tyre change"}</Link>{"."}</li>
                    <li><strong>{"Run out of fuel"}</strong>{" → "}<Link href="/services/refueling" className="font-semibold text-red hover:underline">{"emergency refuelling"}</Link>{" and "}<Link href="/blog/run-out-of-fuel-what-to-do" className="font-semibold text-red hover:underline">{"what to do if you run out of fuel"}</Link>{"."}</li>
                    <li><strong>{"After a collision"}</strong>{" → "}<Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">{"accident recovery"}</Link>{" once the scene is safe."}</li>
                    <li><strong>{"Stuck on a verge, farm track or in a ditch"}</strong>{" → "}<Link href="/services/winch-out" className="font-semibold text-red hover:underline">{"winch out"}</Link>{"."}</li>
                    <li><strong>{"Planned move or non-runner"}</strong>{" → "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{"."}</li>
                  </ul>
                  <p className="leading-7 text-navy/70">{"You don't need breakdown cover or a membership to call us. We'll quote for the job once we know your vehicle, where it is and where it needs to go."}</p>
                </div>
                <div className="fade-up space-y-4">
                  <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Vehicles We Recover and Where We Take Them</h2>
                  <p className="leading-7 text-navy/70">{"We recover cars, light vans, 4x4s and SUVs. When you call, tell us the make and model, whether it's manual, automatic, electric or hybrid, and whether the wheels turn, the steering is free and it will go into neutral. That helps us load it safely. We can take it to a garage in Thirsk, "}<Link href="/areas/northallerton" className="font-semibold text-red hover:underline">{"Northallerton"}</Link>{" or "}<Link href="/areas/ripon" className="font-semibold text-red hover:underline">{"Ripon"}</Link>{", to your home, or to another address you agree with us. Decide on the destination before we arrive if you can."}</p>
                </div>
                <div className="fade-up space-y-4">
                  <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Staying Safe While You Wait</h2>
                  <p className="leading-7 text-navy/70">{"Switch on your hazard lights and, if it's dark, your sidelights. If it's safe, get everyone out on the side away from traffic and wait well back from the road; never stand between your vehicle and oncoming traffic. On ordinary roads you can place a warning triangle at least 45 metres behind the vehicle if it's safe to do so — but don't use one on a motorway. If you can't get out safely, stay in the vehicle with your seat belt on and call 999. Follow the "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"Highway Code breakdown advice"}</a>{"."}</p>
                </div>
              </div>
            </section>
          }
        />
      </main>
      <Footer />
    </>
  );
}
