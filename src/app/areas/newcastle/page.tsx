import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Car Recovery Newcastle | Breakdown & Towing | FSR Recovery";
const description = "Broken down in Newcastle upon Tyne? FSR Recovery Group recovers cars and light vans across the city and Tyneside. Call or WhatsApp +44 7888 502989.";
const path = "/areas/newcastle";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Newcastle",
  h1: "Car Recovery & Breakdown Assistance in Newcastle",
  heroIntro: "Broken down in Newcastle upon Tyne? FSR Recovery Group recovers cars and light vans from the city centre, the suburbs and the main approach roads across Tyneside, day or night.",
  heroImage: "/images/gallery-1.jpg",
  heroImageAlt: "Recovery vehicle assisting a stranded car in a UK city",
  badges: ["Available 24/7", "City & Motorway Cover", "Cars & Vans"],
  introHeading: "Breakdown Recovery Across Newcastle",
  introParagraphs: [
    "Newcastle's busy Quayside, city centre one-way system and the approach roads around the Tyne and Redheugh bridges can turn a simple breakdown into a stressful situation. FSR Recovery Group responds to vehicle breakdowns throughout Newcastle upon Tyne, from the city centre out to Gosforth, Jesmond and beyond.",
    "We regularly assist drivers on the A1 Western Bypass and the A167 corridor that carries traffic into and out of the city, as well as on residential streets and retail park car parks. Wherever your vehicle has stopped, tell us your exact location and we'll confirm when we can reach you.",
    "We're based at 135 Gladstone Street in Darlington and cover Newcastle as part of our wider North East service area, bringing the same careful vehicle handling and clear communication to every callout in the city.",
  ],
  localHighlightsTitle: "Newcastle Coverage Highlights",
  localHighlights: [
    "Newcastle city centre and the Quayside",
    "A1 Western Bypass and A167 approach routes",
    "Gosforth, Jesmond, Heaton, Fenham, Kenton, Byker and surrounding suburbs",
    "Retail parks, industrial estates and residential streets",
    "Gateshead and the Tyne crossings",
  ],
  situationsTitle: "Breakdown Situations We Handle in Newcastle",
  situationsIntro: "From city centre traffic to the outer ring road, these are some of the most common reasons drivers in Newcastle call us for recovery.",
  situations: [
    { icon: "fa-solid fa-gears", title: "Mechanical Breakdown", text: "Sudden mechanical faults on Newcastle's busy roads can leave a vehicle undriveable — we recover it to a safe location or garage." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat or failing battery is one of the most common breakdown calls we receive from drivers across Newcastle." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Problems", text: "Punctures and blowouts on city streets or the bypass are dealt with quickly and safely." },
    { icon: "fa-solid fa-temperature-high", title: "Overheating Engine", text: "If your vehicle overheats in traffic, we can recover it before further damage occurs." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision in or around Newcastle, we provide prompt, careful recovery of your vehicle." },
    { icon: "fa-solid fa-gas-pump", title: "Running Out of Fuel", text: "Caught out on the A1 or in the city centre with an empty tank? We can bring fuel to get you moving." },
  ],
  faqs: [
    { question: "Do you provide vehicle recovery in Newcastle city centre?", answer: "Yes. We recover vehicles from Newcastle city centre, the Quayside and surrounding streets, and can navigate the one-way system to reach you." },
    { question: "How quickly can you reach a breakdown in Newcastle?", answer: "Response times depend on your exact location and current traffic, but we aim to reach drivers in Newcastle as quickly as possible. Call us with your location for an accurate estimate." },
    { question: "Do you recover vehicles on the A1 near Newcastle?", answer: "Yes, we assist drivers who break down on the A1 Western Bypass and other approach roads into Newcastle, following appropriate roadside safety procedures." },
    { question: "Can you take my car from Newcastle to a garage outside the city?", answer: "Yes. We can transport your vehicle from Newcastle to an agreed garage, home address or another suitable destination, including locations outside the city." },
    { question: "Do you cover areas around Newcastle such as Gosforth and Jesmond?", answer: "Yes. Our Newcastle coverage extends to the surrounding suburbs including Gosforth, Jesmond and neighbouring areas — call us to confirm your specific location." },
    { question: "Is recovery available in Newcastle at night or on weekends?", answer: "Yes. FSR Recovery Group operates 24/7, including nights, weekends and public holidays, for breakdowns anywhere in Newcastle." },
    { question: "What should I do while I wait for recovery in Newcastle?", answer: "Switch on your hazard lights. If it's safe, get everyone out on the side away from traffic and wait well back from the road, behind a barrier if there is one. On a motorway, don't put out a warning triangle. If you can't get out safely, stay in the vehicle with your seat belt on and call 999." },
    { question: "Do I need breakdown cover to call you?", answer: "No. You can call or WhatsApp us directly without breakdown cover or a membership. We'll quote for the job once we know your vehicle, where it is and where it needs to go." },
    { question: "Do you cover Gateshead and the Tyne crossings?", answer: "We cover Newcastle and the surrounding Tyneside area, including Gateshead across the river. Give us the postcode, the road name or a shared location and we'll confirm before we set off." },
    { question: "What vehicles do you recover in Newcastle?", answer: "Cars, light vans, 4x4s and SUVs. Tell us the make and model, and whether it's automatic, electric or hybrid, so we can plan how to load it safely." },
  ],
  ctaHeading: "Need Recovery in Newcastle Right Now?",
  ctaText: "Call or WhatsApp FSR Recovery Group with your location in Newcastle and we will confirm the fastest way to get you moving again.",
  nearbyAreas: [
    { label: "Durham", href: "/areas/durham" },
    { label: "Sunderland", href: "/areas/sunderland" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
    { label: "A19 Recovery", href: "/areas/a19" },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
{
    "@type": "BreadcrumbList",
    "@id": "https://fsrrecoverygroups.co.uk/areas/newcastle#breadcrumb",
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
            "name": "Newcastle",
            "item": "https://fsrrecoverygroups.co.uk/areas/newcastle"
        }
    ]
},
{
    "@type": "Service",
    "@id": "https://fsrrecoverygroups.co.uk/areas/newcastle#service",
    "name": "Car Recovery & Breakdown Assistance in Newcastle",
    "description": "Broken down in Newcastle upon Tyne? FSR Recovery Group recovers cars and light vans from the city centre, the suburbs and the main approach roads across Tyneside, day or night.",
    "serviceType": "Vehicle recovery and roadside assistance",
    "url": "https://fsrrecoverygroups.co.uk/areas/newcastle",
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
            "name": "Newcastle upon Tyne"
        },
        {
            "@type": "City",
            "name": "Gateshead"
        },
        {
            "@type": "AdministrativeArea",
            "name": "Tyne and Wear"
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
      "@id": "https://fsrrecoverygroups.co.uk/areas/newcastle#faq",
      mainEntity: content.faqs.map(({ question, answer }) => ({
        "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function NewcastleAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} schema={schema} afterIntro={
          <section className="py-16 sm:py-24"><div className="container-site space-y-10">
<div className="fade-up space-y-4"><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Areas and Roads We Cover in and Around Newcastle</h2><p className="leading-7 text-navy/70">{"We recover vehicles across Newcastle upon Tyne, including the city centre and Quayside, Gosforth, Jesmond, Heaton, Byker, Walker, Fenham, Kenton and Benwell, and across the river in Gateshead. Call with the postcode or a shared location and we'll confirm before we set off."}</p><p className="leading-7 text-navy/70">{"On the main roads, we help drivers on the A1 Western Bypass, the "}<Link href="/areas/a167" className="font-semibold text-red hover:underline">{"A167"}</Link>{" and the Central Motorway, the A1058 Coast Road and the A184, plus the approaches to the Tyne Bridge, Redheugh Bridge and Tyne Tunnel on the "}<Link href="/areas/a19" className="font-semibold text-red hover:underline">{"A19"}</Link>{". On a dual carriageway or motorway, the nearest junction, exit or marker post helps us find you. For longer trips south, see our "}<Link href="/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M)"}</Link>{" page."}</p></div>
<div className="fade-up space-y-4"><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Which Service Do You Need?</h2><p className="leading-7 text-navy/70">{"Tell us what's happened and we'll send the right help:"}</p><ul className="list-disc space-y-3 pl-5 leading-7 text-navy/70"><li><strong>{"Car won't start"}</strong>{" → "}<Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jump start"}</Link>{". If it still won't start, we arrange "}<Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"breakdown recovery"}</Link>{"."}</li><li><strong>{"Flat tyre and you have a usable spare"}</strong>{" → "}<Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">{"spare tyre change"}</Link>{"."}</li><li><strong>{"Run out of fuel"}</strong>{" → "}<Link href="/services/refueling" className="font-semibold text-red hover:underline">{"emergency refuelling"}</Link>{"."}</li><li><strong>{"After a collision"}</strong>{" → "}<Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">{"accident recovery"}</Link>{" once the scene is safe."}</li><li><strong>{"Stuck in mud, snow or a ditch"}</strong>{" → "}<Link href="/services/winch-out" className="font-semibold text-red hover:underline">{"winch out"}</Link>{"."}</li><li><strong>{"Planned move or non-runner"}</strong>{" → "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{"."}</li></ul><p className="leading-7 text-navy/70">{"You don't need breakdown cover or a membership to call us. We'll quote for the job once we know your vehicle, where it is and where it needs to go."}</p></div>
<div className="fade-up space-y-4"><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Vehicles We Recover in Newcastle</h2><p className="leading-7 text-navy/70">{"We recover cars, light vans, 4x4s and SUVs. When you call, tell us the make and model, whether it's manual, automatic, electric or hybrid, and whether the wheels turn and the steering is free. That helps us load it safely. We can take it to your garage, a body repair centre, your home or another address you agree with us, in Newcastle or elsewhere in the North East, including "}<Link href="/areas/durham" className="font-semibold text-red hover:underline">{"Durham"}</Link>{" and "}<Link href="/areas/sunderland" className="font-semibold text-red hover:underline">{"Sunderland"}</Link>{"."}</p></div>
<div className="fade-up space-y-4"><h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Staying Safe While You Wait</h2><p className="leading-7 text-navy/70">{"Switch on your hazard lights. If it's safe, get everyone out on the side away from traffic and wait well back from the road, behind a barrier if there is one. On a motorway, don't put out a warning triangle. If you can't get out safely, stay in the vehicle with your seat belt on and call 999. Follow the "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"Highway Code breakdown advice"}</a>{". If your engine was getting hot before it stopped, read "}<Link href="/blog/car-overheating-while-driving" className="font-semibold text-red hover:underline">{"car overheating while driving"}</Link>{"."}</p></div>
          </div></section>
        } />
      </main>
      <Footer />
    </>
  );
}
