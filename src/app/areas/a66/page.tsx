import Link from "next/link";
import { CardGrid, SectionHeading } from "@/components/ServicePage";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "A66 Breakdown Recovery: Darlington & Scotch Corner | FSR";
const description = "24/7 A66 breakdown and accident recovery from Scotch Corner through Darlington and Barnard Castle. Call FSR Recovery on +44 7888 502989.";
const path = "/areas/a66";

const ogImage = "/images/a66-breakdown-recovery-flatbed.webp";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: {
    title, description, url: path, type: "website", siteName: business.name,
    images: [{ url: ogImage, width: 1536, height: 1024, alt: "Car being transported on a flatbed recovery truck on the A66 with the Pennines behind" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage] },
};

const content: AreaPageContent = {
  category: "road",
  eyebrow: "A66",
  h1: "24/7 Breakdown Recovery on the A66",
  heroIntro: "The A66 carries traffic across the Pennines between Teesside and Cumbria, with long exposed stretches and challenging weather at times. FSR Recovery Group provides 24/7 recovery along the A66 through Darlington, Barnard Castle and beyond.",
  heroImage: ogImage,
  heroImageAlt: "Car being transported on a flatbed recovery truck on the A66 with the Pennines behind",
  badges: ["Available 24/7", "Trans-Pennine Route", "Cars & Vans"],
  introHeading: "Recovery Along the A66",
  introParagraphs: [
    "From the Scotch Corner interchange with the A1(M) through Darlington and Barnard Castle, the A66 climbs into the Pennines toward Cumbria. It's a route we know well, including the exposed high sections that can be affected by wind, rain and snow.",
    "A breakdown on the A66 can leave you in an isolated spot with limited shelter, which makes getting help to you safely especially important. FSR Recovery Group provides recovery for breakdowns and accidents along this route.",
    "If you've broken down on the A66, try to reach a safe pull-in or lay-by if possible, keep warm and visible, and call us with your exact location so we can plan the safest route to reach you.",
  ],
  localHighlightsTitle: "A66 Coverage Highlights",
  localHighlights: [
    "Scotch Corner interchange with the A1(M)",
    "Darlington and the approach to Barnard Castle",
    "Bowes Moor and the high Pennine sections",
    "Routes toward the Cumbrian border",
  ],
  situationsTitle: "Common A66 Breakdown Situations",
  situationsIntro: "These are among the most frequent reasons drivers call us for recovery on the A66.",
  situations: [
    { icon: "fa-solid fa-temperature-high", title: "Overheating on Climbs", text: "The Pennine climbs on the A66 can cause an engine to overheat — we recover the vehicle before further damage occurs." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on an exposed stretch of the A66 needs a careful recovery response." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on the A66's rougher sections, with a spare fitted at the roadside where it's safe, or recovery arranged where needed." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision on the A66, we provide careful vehicle recovery once everyone is safe." },
    { icon: "fa-solid fa-snowflake", title: "Weather-Related Breakdowns", text: "Wind, rain and snow on the high sections of the A66 can affect vehicles — we respond as conditions allow." },
    { icon: "fa-solid fa-gas-pump", title: "Running Out of Fuel", text: "Fewer fuel stops on the A66's rural stretches mean running low is a real risk — we can bring fuel to you." },
  ],
  featured: [
    {
      image: "/images/a66-equipped-recovery-van.webp",
      imageAlt: "Recovery van equipment compartment with straps, wheel chocks and a work light, Pennine hills in the background",
      eyebrow: "Ready for the Pennines",
      heading: "Equipped for Exposed, Remote Stretches",
      text: "The A66's high, open sections can bring sudden weather changes and limited shelter. Our recovery vehicles carry the straps, chocks and lighting needed to work safely and efficiently, whatever the conditions.",
    },
    {
      image: "/images/a66-customer-handover.webp",
      imageAlt: "Technician talking with a driver beside their van, recovery truck and Pennine hills in the background",
      eyebrow: "Here When You Need Us",
      heading: "A Friendly Face on an Isolated Road",
      text: "Breaking down on a quiet stretch of the A66 can feel isolating. We'll talk you through what's happened and the options available, so you're never left wondering what happens next.",
    },
  ],
  faqs: [
    { question: "Do you recover vehicles on the exposed sections of the A66?", answer: "Yes, we recover vehicles from the higher, more exposed sections of the A66, including near Bowes Moor." },
    { question: "What should I do if I break down on the A66 in bad weather?", answer: "Try to reach a safe pull-in or lay-by, stay warm and visible, and call us with your exact location so we can plan the safest route to reach you." },
    { question: "Do you cover the A66 near Scotch Corner?", answer: "Yes, the Scotch Corner interchange where the A66 meets the A1(M) is within our coverage area." },
    { question: "Can you recover a vehicle from the A66 toward the Cumbrian border?", answer: "Yes, we cover the A66 through County Durham, and can discuss availability for locations further toward Cumbria when you call." },
    { question: "Is A66 recovery available overnight?", answer: "Yes, FSR Recovery Group operates 24/7 on the A66, including overnight and in poor weather where it's safe to respond." },
    { question: "Can you take my vehicle from the A66 to a garage in Darlington?", answer: "Yes, once recovered from the A66, we can transport your vehicle to an agreed garage, home address or other suitable destination." },
    { question: "What details should I give when I call from the A66?", answer: "Tell us which direction you are travelling (for example towards Barnard Castle or towards Darlington), the nearest junction, village, lay-by or landmark, and what has happened to the vehicle. If you can, share your live location with us on WhatsApp so we can find you on a long, quiet stretch." },
    { question: "Should I call 999 or FSR Recovery Group after a collision on the A66?", answer: "If anyone is hurt or in danger, call 999 first. The Highway Code also advises you to stop in a place of relative safety, use your hazard warning lights and move uninjured people away from the vehicles. Once everyone is safe, call us and we will arrange recovery for the vehicle." },
    { question: "How should I prepare before driving the A66 in winter?", answer: "Check the weather forecast for warnings before you set off, and only travel if your journey is essential in icy or snowy conditions. The Highway Code recommends carrying an emergency kit including a torch, warm clothing, a first aid kit and a shovel, with a warm drink and emergency food, in case you get stuck or break down. Keep our number saved in your phone." },
    { question: "Do you recover vehicles on the A66 towards Middlesbrough and Teesside?", answer: <>We also provide recovery in <Link href="/areas/middlesbrough" className="font-semibold text-red hover:underline">Middlesbrough</Link> and the wider Teesside area, as well as on the <Link href="/areas/a1m" className="font-semibold text-red hover:underline">A1(M)</Link> and in <Link href="/areas/barnard-castle" className="font-semibold text-red hover:underline">Barnard Castle</Link>. Call us with your exact location and we will confirm how we can help.</> },
  ],
  ctaHeading: "Broken Down on the A66?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your exact location on the A66, and we'll confirm how we can help and when we can reach you.",
  ctaImage: "/images/a66-roadside-inspection.webp",
  ctaImageAlt: "Technician inspecting a car's tyre with a torch at the roadside",
  nearbyAreas: [
    { label: "Barnard Castle", href: "/areas/barnard-castle" },
    { label: "Middlesbrough", href: "/areas/middlesbrough" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
    { label: "A19", href: "/areas/a19" },
    { label: "Durham", href: "/areas/durham" },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://fsrrecoverygroups.co.uk/areas/a66#breadcrumb",
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
          "name": "A66",
          "item": "https://fsrrecoverygroups.co.uk/areas/a66"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://fsrrecoverygroups.co.uk/areas/a66#service",
      "name": "24/7 Breakdown Recovery on the A66",
      "description": "FSR Recovery Group provides 24/7 vehicle recovery along the A66 from the Scotch Corner interchange through Darlington and Barnard Castle, including the exposed Pennine sections, with availability toward Cumbria to confirm on the call.",
      "serviceType": "Vehicle recovery and roadside assistance",
      "url": "https://fsrrecoverygroups.co.uk/areas/a66",
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
          "name": "A66"
        },
        {
          "@type": "City",
          "name": "Darlington"
        },
        {
          "@type": "City",
          "name": "Barnard Castle"
        },
        {
          "@type": "Place",
          "name": "Scotch Corner"
        },
        {
          "@type": "AdministrativeArea",
          "name": "County Durham"
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
      "@id": "https://fsrrecoverygroups.co.uk/areas/a66#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you recover vehicles on the exposed sections of the A66?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we recover vehicles from the higher, more exposed sections of the A66, including near Bowes Moor."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I break down on the A66 in bad weather?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Try to reach a safe pull-in or lay-by, stay warm and visible, and call us with your exact location so we can plan the safest route to reach you."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover the A66 near Scotch Corner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Scotch Corner interchange where the A66 meets the A1(M) is within our coverage area."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover a vehicle from the A66 toward the Cumbrian border?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we cover the A66 through County Durham, and can discuss availability for locations further toward Cumbria when you call."
          }
        },
        {
          "@type": "Question",
          "name": "Is A66 recovery available overnight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FSR Recovery Group operates 24/7 on the A66, including overnight and in poor weather where it's safe to respond."
          }
        },
        {
          "@type": "Question",
          "name": "Can you take my vehicle from the A66 to a garage in Darlington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, once recovered from the A66, we can transport your vehicle to an agreed garage, home address or other suitable destination."
          }
        },
        {
          "@type": "Question",
          "name": "What details should I give when I call from the A66?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tell us which direction you are travelling (for example towards Barnard Castle or towards Darlington), the nearest junction, village, lay-by or landmark, and what has happened to the vehicle. If you can, share your live location with us on WhatsApp so we can find you on a long, quiet stretch."
          }
        },
        {
          "@type": "Question",
          "name": "Should I call 999 or FSR Recovery Group after a collision on the A66?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If anyone is hurt or in danger, call 999 first. The Highway Code also advises you to stop in a place of relative safety, use your hazard warning lights and move uninjured people away from the vehicles. Once everyone is safe, call us and we will arrange recovery for the vehicle."
          }
        },
        {
          "@type": "Question",
          "name": "How should I prepare before driving the A66 in winter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the weather forecast for warnings before you set off, and only travel if your journey is essential in icy or snowy conditions. The Highway Code recommends carrying an emergency kit including a torch, warm clothing, a first aid kit and a shovel, with a warm drink and emergency food, in case you get stuck or break down. Keep our number saved in your phone."
          }
        },
        {
          "@type": "Question",
          "name": "Do you recover vehicles on the A66 towards Middlesbrough and Teesside?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We also provide recovery in Middlesbrough and the wider Teesside area, as well as on the A1(M) and in Barnard Castle. Call us with your exact location and we will confirm how we can help."
          }
        }
      ]
    }
  ]
};

export default function A66AreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} schema={schema} afterSituations={<A66Guidance />} />
      </main>
      <Footer />
    </>
  );
}

function A66Guidance() { return <>
<section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="A66 Recovery" title="What to Tell Us When You Call from the A66" /><p className="my-4 leading-7 text-navy/70">On a long, quiet road the first question is always &quot;where exactly are you?&quot;. Have these ready:</p>
<ol className="my-5 space-y-3 pl-6 list-decimal">
<li><strong>Direction of travel</strong>, for example towards Barnard Castle or towards Darlington.</li>
<li><strong>The nearest junction, village, lay-by or landmark</strong> you passed.</li>
<li><strong>What has happened</strong>, for example overheating, warning lights, a puncture or a collision, and whether the vehicle can still be driven.</li>
<li><strong>Your vehicle:</strong> car or light van, and whether it is automatic or has any damage.</li>
<li><strong>Where you want it taken:</strong> a garage, your home address or another agreed destination.</li>
</ol>
<p className="my-4 leading-7 text-navy/70">If you can, share your live location with us on WhatsApp. Then call <strong>+44 7888 502989</strong>.</p></div></section>
<section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="A66 Recovery" title="Broken Down on the A66? Stay Safe First" /><p className="my-4 leading-7 text-navy/70">Follow the Highway Code&apos;s advice on <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">breakdowns</a>: get your vehicle off the road if possible, switch on your hazard warning lights, and stop in a place of relative safety such as a lay-by. Wear light-coloured or reflective clothing where you can, and keep passengers away from moving traffic. If it&apos;s dark or visibility is poor, keep your sidelights on.</p>
<p className="my-4 leading-7 text-navy/70">After a collision, call <strong>999</strong> first if anyone is hurt or in danger, ask other drivers to switch off their engines, and move uninjured people away from the vehicles to a safe place. Once everyone is safe, call us and we&apos;ll arrange recovery. See also the guidance on <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">accident emergency assistance</Link>.</p></div></section>
<section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="A66 Recovery" title="Driving the A66 in Winter" /><p className="my-4 leading-7 text-navy/70">The high Pennine sections are open and exposed, so wind, rain, ice and snow can change conditions quickly. Before you set off:</p>
<ul className="my-5 space-y-3 pl-6 list-disc">
<li>Check the weather forecast and any <a href="https://www.metoffice.gov.uk/weather/warnings-and-advice/uk-warnings" className="font-semibold text-red hover:underline">Met Office warnings</a> for your route.</li>
<li>In icy or snowy weather the Highway Code says not to drive unless your journey is essential, and to allow more time if it is (<a href="https://www.gov.uk/guidance/the-highway-code/driving-in-adverse-weather-conditions-226-to-237" className="font-semibold text-red hover:underline">Highway Code: adverse weather</a>).</li>
<li>Carry an emergency kit: de-icer and ice scraper, torch, warm clothing and boots, first aid kit, jump leads and a shovel, plus a warm drink and emergency food in case you get stuck or break down.</li>
<li>Keep your phone charged and save <strong>+44 7888 502989</strong> in your contacts.</li>
</ul>
<p className="my-4 leading-7 text-navy/70">For more on this, read our guide to <Link href="/blog/broken-down-on-the-a66-in-winter" className="font-semibold text-red hover:underline">what to do if you break down on the A66 in winter</Link>.</p></div></section>
<section className="py-16 sm:py-24"><div className="container-site"><SectionHeading eyebrow="A66 Recovery" title="Which Service Do You Need on the A66?" /><CardGrid cards={[{ icon: "fa-solid fa-truck", title: "Vehicle won't move or is unsafe to drive:", text: <><Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">vehicle breakdown recovery</Link>, and onward <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">vehicle transporting</Link> to a garage or home.</> },{ icon: "fa-solid fa-truck", title: "Flat battery, puncture or out of fuel:", text: <><Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">jumpstart services</Link>, <Link href="/services/changing-spare-tyre" className="font-semibold text-red hover:underline">changing a spare tyre</Link> and <Link href="/services/refueling" className="font-semibold text-red hover:underline">refuelling</Link>.</> },{ icon: "fa-solid fa-truck", title: "Stuck off the carriageway or after a collision:", text: <><Link href="/services/winch-out" className="font-semibold text-red hover:underline">winch out</Link> and <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">accident emergency assistance</Link>.</> }]} /></div></section>
</>; }
