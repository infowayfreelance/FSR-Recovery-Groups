import Link from "next/link";
import { CardGrid, SectionHeading } from "@/components/ServicePage";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "A167 Breakdown Recovery Darlington & Durham | FSR";
const description = "24/7 breakdown and accident recovery on the A167 through Darlington, Newton Aycliffe, Durham and Chester-le-Street. Call FSR Recovery on +44 7888 502989.";
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
  heroImage: "/images/a167-breakdown-recovery-flatbed.webp",
  heroImageAlt: "Car being loaded onto a flatbed recovery truck on a rural road near the A167",
  badges: ["Local Route", "Available 24/7", "Cars & Vans"],
  introHeading: "Recovery Along the A167",
  introParagraphs: [
    "Running parallel to the A1(M) for much of its length, the A167 passes through Darlington, Aycliffe, Durham City, Chester-le-Street and on toward Newcastle. Many drivers use it as an alternative to the A1(M), and we cover it as part of our service area.",
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
  situationsIntro: "These are some of the common reasons drivers call us for recovery on the A167.",
  situations: [
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery after stopping on the A167 is a common recovery callout along this route." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on the A167's town and open-road sections, with a spare fitted at the roadside where it's safe, or recovery arranged where needed." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A167 between Darlington and Durham can be recovered to a suitable garage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision on the A167, we provide careful vehicle recovery once everyone is safe." },
    { icon: "fa-solid fa-temperature-high", title: "Overheating", text: "An overheating engine on the A167 is recovered before it causes further damage." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on the A167? We can bring fuel directly to your location." },
  ],
  galleryIntro: "A look at the kind of recovery and roadside assistance work we carry out for drivers along the A167.",
  gallery: [
    { src: "/images/a167-roadside-battery-assistance.webp", alt: "Technician providing roadside jumpstart assistance to a car at dusk with a recovery van behind", caption: "Jumpstart assistance for a flat battery" },
    { src: "/images/a167-roadside-tyre-change.webp", alt: "Technician changing a wheel on a car using a jack and ratchet strap", caption: "Roadside tyre and wheel changes" },
    { src: "/images/a167-van-recovery-transport.webp", alt: "Van loaded onto a flatbed recovery truck on a residential street", caption: "Flatbed transport for vans and cars" },
  ],
  faqs: [
    { question: "Do you cover the whole length of the A167?", answer: <>{"Yes, we cover the A167 from Darlington through Durham and toward Chester-le-Street and Newcastle."}</> },
    { question: "Is the A167 a good alternative route if the A1(M) is closed?", answer: <>{"The A167 does run close to the A1(M) for much of its length. If you break down on it, call us with your exact location and we'll confirm how we can help."}</> },
    { question: "Do you cover the A167 through Durham City?", answer: <>{"Yes, the section of the A167 that passes through Durham City is within our coverage area."}</> },
    { question: "Can you recover a vehicle from the A167 near Chester-le-Street?", answer: <>{"Yes, we cover the A167 as it extends toward Chester-le-Street on the way to Newcastle."}</> },
    { question: "Is A167 recovery available at night?", answer: <>{"Yes, FSR Recovery Group operates 24/7 on the A167, including overnight and weekend breakdowns."}</> },
    { question: "Can you take my vehicle from the A167 to a garage in Darlington?", answer: <>{"Yes, once recovered from the A167, we can transport your vehicle to an agreed garage, home address or other suitable destination."}</> },
    { question: "How do I tell you where I am on the A167?", answer: <>{"Give us the town or village you are in or have just passed, such as Darlington, Newton Aycliffe, Ferryhill, Durham or Chester-le-Street, the direction you are heading, and the nearest roundabout, junction, petrol station or other landmark. If you can, share your live location with us on WhatsApp."}</> },
    { question: "I've broken down in a town-centre section of the A167. What should I do?", answer: <>{"Switch on your hazard warning lights and, if the car can still move, pull in where you are not blocking a junction, roundabout, bus stop or crossing. Keep passengers on the pavement away from traffic and do not try a repair in a live lane. Then call us with the street name and a nearby landmark."}</> },
    { question: "Should I call you if I break down on the A1(M) instead of the A167?", answer: <>{"Yes. We also provide recovery on the A1(M). Motorways have their own safety rules, so read our "}<Link href="/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M) recovery page"}</Link>{" and our guide to "}<Link href="/blog/broken-down-on-the-a1m" className="font-semibold text-red hover:underline">{"breaking down on the A1(M)"}</Link>{", and call us once you are somewhere safe."}</> },
    { question: "Can you help south of Darlington, toward Northallerton?", answer: <>{"We also cover "}<Link href="/areas/northallerton" className="font-semibold text-red hover:underline">{"Northallerton"}</Link>{" and "}<Link href="/areas/thirsk" className="font-semibold text-red hover:underline">{"Thirsk"}</Link>{". Call us with your exact location on the A167 and we will confirm how we can help."}</> },
  ],
  ctaHeading: "Broken Down on the A167?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your exact location on the A167, and we'll confirm how we can help and when we can reach you.",
  nearbyAreas: [
    { label: "Durham", href: "/areas/durham" },
    { label: "Newcastle", href: "/areas/newcastle" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
    { label: "Sunderland", href: "/areas/sunderland" },
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
    { label: "Northallerton", href: "/areas/northallerton" },
    { label: "A66", href: "/areas/a66" },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://fsrrecoverygroups.co.uk/areas/a167#breadcrumb",
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
          "name": "A167",
          "item": "https://fsrrecoverygroups.co.uk/areas/a167"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://fsrrecoverygroups.co.uk/areas/a167#service",
      "name": "Breakdown Recovery on the A167",
      "description": "FSR Recovery Group provides 24/7 breakdown and accident recovery along the A167 through Darlington, Newton Aycliffe, Durham and Chester-le-Street toward Newcastle, with transport to an agreed garage, home address or other suitable destination.",
      "serviceType": "Vehicle recovery and roadside assistance",
      "url": "https://fsrrecoverygroups.co.uk/areas/a167",
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
          "@type": "Place",
          "name": "A167"
        },
        {
          "@type": "City",
          "name": "Darlington"
        },
        {
          "@type": "Place",
          "name": "Newton Aycliffe"
        },
        {
          "@type": "City",
          "name": "Durham"
        },
        {
          "@type": "Place",
          "name": "Chester-le-Street"
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
      "@id": "https://fsrrecoverygroups.co.uk/areas/a167#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you cover the whole length of the A167?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we cover the A167 from Darlington through Durham and toward Chester-le-Street and Newcastle."
          }
        },
        {
          "@type": "Question",
          "name": "Is the A167 a good alternative route if the A1(M) is closed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The A167 does run close to the A1(M) for much of its length. If you break down on it, call us with your exact location and we'll confirm how we can help."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover the A167 through Durham City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the section of the A167 that passes through Durham City is within our coverage area."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover a vehicle from the A167 near Chester-le-Street?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we cover the A167 as it extends toward Chester-le-Street on the way to Newcastle."
          }
        },
        {
          "@type": "Question",
          "name": "Is A167 recovery available at night?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FSR Recovery Group operates 24/7 on the A167, including overnight and weekend breakdowns."
          }
        },
        {
          "@type": "Question",
          "name": "Can you take my vehicle from the A167 to a garage in Darlington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, once recovered from the A167, we can transport your vehicle to an agreed garage, home address or other suitable destination."
          }
        },
        {
          "@type": "Question",
          "name": "How do I tell you where I am on the A167?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Give us the town or village you are in or have just passed, such as Darlington, Newton Aycliffe, Ferryhill, Durham or Chester-le-Street, the direction you are heading, and the nearest roundabout, junction, petrol station or other landmark. If you can, share your live location with us on WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "I've broken down in a town-centre section of the A167. What should I do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Switch on your hazard warning lights and, if the car can still move, pull in where you are not blocking a junction, roundabout, bus stop or crossing. Keep passengers on the pavement away from traffic and do not try a repair in a live lane. Then call us with the street name and a nearby landmark."
          }
        },
        {
          "@type": "Question",
          "name": "Should I call you if I break down on the A1(M) instead of the A167?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We also provide recovery on the A1(M). Motorways have their own safety rules, so read our A1(M) recovery page and our guide to breaking down on the A1(M), and call us once you are somewhere safe."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help south of Darlington, toward Northallerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We also cover Northallerton and Thirsk. Call us with your exact location on the A167 and we will confirm how we can help."
          }
        }
      ]
    }
  ]
};

export default function A167AreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} schema={schema} afterSituations={<A167Guidance />} />
      </main>
      <Footer />
    </>
  );
}

function A167Guidance() {
  return <>
    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="A167 Recovery" title="Where Are You on the A167? Landmarks That Help Us Find You" /><p className="my-4 leading-7 text-navy/70"><>{"The A167 changes character every few miles, so \"I'm on the A167\" isn't enough on its own. Tell us which stretch you're on:"}</></p><ul className="my-5 space-y-3 pl-6 list-disc"><li><><strong>{"Darlington:"}</strong>{" the town-centre roads and the section out to where the A167 crosses the A1(M) at junction 59."}</></li><li><><strong>{"Newton Aycliffe and Ferryhill:"}</strong>{" the open stretch north of Darlington, including the Chilton bypass near Ferryhill."}</></li><li><><strong>{"Durham:"}</strong>{" the approach roads and the section through Durham City."}</></li><li><><strong>{"Chester-le-Street and Birtley:"}</strong>{" the northern stretch toward Gateshead and Newcastle."}</></li></ul><p className="my-4 leading-7 text-navy/70"><>{"Then add "}<strong>{"the direction you're heading"}</strong>{" (for example north toward Durham or south toward Darlington), "}<strong>{"the nearest roundabout, junction, petrol station or village sign"}</strong>{", and "}<strong>{"what has happened to the vehicle"}</strong>{". If you can, share your live location with us on WhatsApp, then call "}<strong>{"+44 7888 502989"}</strong>{"."}</></p></div></section>
    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="A167 Recovery" title="Town Streets and Open Stretches: Staying Safe on the A167" /><p className="my-4 leading-7 text-navy/70"><>{"On the busier town sections in Darlington, Durham and Chester-le-Street, switch on your hazard warning lights and, if the vehicle can still move, pull in where you are not blocking a junction, roundabout, bus stop or pedestrian crossing. Keep passengers on the pavement, away from traffic, and don't try a repair in a live lane."}</></p><p className="my-4 leading-7 text-navy/70"><>{"On the more open stretches with higher speed limits, follow the Highway Code's advice on "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"breakdowns and incidents"}</a>{": get the vehicle off the road if possible, use your hazard lights, keep your sidelights on if it's dark or visibility is poor, and wait in a place of relative safety. After a collision, call "}<strong>{"999"}</strong>{" first if anyone is hurt or in danger. Once everyone is safe, call us and we'll arrange recovery. For what to do next, read our guide on "}<Link href="/blog/after-a-car-accident-county-durham" className="font-semibold text-red hover:underline">{"what to do after a car accident in County Durham"}</Link>{"."}</></p></div></section>
    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="A167 Recovery" title="On the A167 or the A1(M)?" /><p className="my-4 leading-7 text-navy/70"><>{"The A167 runs close to the A1(M) for much of the way between Darlington and Durham, and drivers sometimes aren't sure which road they're on. If you're on the motorway, you'll see hard shoulders or emergency areas and blue signs with junction numbers; tell us the junction you last passed. Motorways have their own safety rules, so see our "}<Link href="/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M) recovery page"}</Link>{" and our guide to "}<Link href="/blog/broken-down-on-the-a1m" className="font-semibold text-red hover:underline">{"breaking down on the A1(M)"}</Link>{". Either way, the number to call is the same: "}<strong>{"+44 7888 502989"}</strong>{"."}</></p></div></section>
    <section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="A167 Recovery" title="Matching the Problem to the Right Help" /><CardGrid cards={[{ icon: "fa-solid fa-truck", title: "Won't start or warning lights on:", text: <><Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jumpstart services"}</Link>{"; read "}<Link href="/blog/flat-battery-cold-morning" className="font-semibold text-red hover:underline">{"flat battery on a cold morning"}</Link>{" and "}<Link href="/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"car won't start but the battery is fine"}</Link>{"."}</> },{ icon: "fa-solid fa-truck", title: "Overheating, puncture or empty tank:", text: <><Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</Link>{", "}<Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">{"changing a spare tyre"}</Link>{" and "}<Link href="/services/refueling" className="font-semibold text-red hover:underline">{"refuelling"}</Link>{"; read "}<Link href="/blog/car-overheating-while-driving" className="font-semibold text-red hover:underline">{"car overheating while driving"}</Link>{" and "}<Link href="/blog/run-out-of-fuel-what-to-do" className="font-semibold text-red hover:underline">{"run out of fuel: what to do"}</Link>{"."}</> },{ icon: "fa-solid fa-truck", title: "Can't be driven or after a collision:", text: <><Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</Link>{", "}<Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">{"accident emergency assistance"}</Link>{" and onward "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{" to a garage or home."}</> }]} /></div></section>
  </>;
}
