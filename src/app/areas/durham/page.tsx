import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Car Recovery Durham | 24/7 Breakdown | FSR Recovery";
const description = "24/7 car recovery and breakdown help in Durham City and County Durham, including the A1(M), A167 and A690. Cars and light vans. Call FSR on +44 7888 502989.";
const path = "/areas/durham";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  serviceSchemaName: "Car Recovery Durham",
  eyebrow: "Durham",
  h1: "24/7 Car Recovery & Breakdown Help in Durham",
  heroIntro: "From the historic city centre to the outskirts of County Durham, FSR Recovery Group provides prompt vehicle recovery and roadside assistance to drivers across Durham.",
  heroImage: "/images/gallery-2.jpg",
  heroImageAlt: "Recovery truck loading a vehicle in Durham",
  badges: ["Available 24/7", "City & A1(M) Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Durham Drivers",
  introParagraphs: [
    "Durham's narrow city centre streets, the peninsula around the Cathedral and the steep approaches near the river can make an already stressful breakdown harder to manage. FSR Recovery Group is regularly called out to Durham City, Durham University's campuses and the residential areas that surround them.",
    "We also cover the A1(M) and A167 as they pass Durham, along with the A690 and A691 routes into the city, so drivers travelling to or from Durham have somewhere reliable to turn if a vehicle problem strikes.",
    <>
      Whether you’re a student, commuter or visitor, tell us where in Durham you’ve broken down and we’ll confirm how to get your vehicle recovered safely. See our{" "}
      <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">breakdown recovery</Link>{" "}
      service for more information.
    </>,
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
    { question: "How far from Darlington is Durham for recovery response?", answer: "Our base is in Darlington. Call with your exact location in Durham City or the surrounding County Durham villages so we can confirm the recovery arrangements." },
    { question: "Can I get my car towed from Durham to a garage in another town?", answer: "Yes. We can transport your vehicle from Durham to an agreed garage, your home, or another suitable destination." },
    { question: "Is your Durham recovery service available at night?", answer: "Yes, we operate 24/7 in Durham, including overnight breakdowns and weekend callouts." },
    { question: "What information do you need for a Durham breakdown callout?", answer: "Your exact location, vehicle make and model, a brief description of the fault, and your preferred destination if known." },
    { question: "Do you cover villages around Durham as well as the city?", answer: "Yes. We regularly assist drivers in villages surrounding Durham City as part of our wider County Durham coverage." },
    { question: "Which A1(M) junctions near Durham do you cover?", answer: "We cover the A1(M) around Durham, including junctions 61 (Bowburn), 62 (Carrville/Durham) and 63 (Chester-le-Street), as well as the wider A1(M) through County Durham." },
    { question: "Do you recover vans as well as cars in Durham?", answer: "Yes, we recover cars and light vans. Tell us the make, model and problem when you call." },
    { question: "What should I do while I wait for recovery on the A1(M)?", answer: "Follow The Highway Code: get to the hard shoulder or an emergency area if you can, use hazard lights, leave by the passenger side, and wait behind the barrier if it’s safe. Call 999 if you’re in danger." },
  ],
  ctaHeading: "Broken Down in Durham?",
  ctaText: "Call or WhatsApp FSR Recovery Group with your location in Durham and we will confirm the recovery arrangements.",
  nearbyAreas: [
    { label: "Newcastle", href: "/areas/newcastle" },
    { label: "Sunderland", href: "/areas/sunderland" },
    { label: "Peterlee", href: "/areas/peterlee" },
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
  ],
};

export default function DurhamAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout
          content={content}
          path={path}
          afterIntro={
            <section className="py-16 sm:py-24">
              <div className="container-site space-y-10">
                <div className="fade-up">
                  <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Breakdown Recovery on the A1(M) Around Durham</h2>
                  <p className="leading-7 text-navy/70">
                    The A1(M) runs just east of Durham City, with junction 61 (Bowburn, for the A688 and A177), junction 62 (Carrville, for the A690 into Durham and towards Sunderland) and junction 63 (Chester-le-Street, for the A167). If you break down on this stretch, tell us your direction of travel, the nearest junction and the number on the nearest marker post or driver location sign, so we can find you. FSR Recovery Group also covers the{" "}
                    <Link href="/areas/a1m" className="font-semibold text-red hover:underline">A1(M)</Link>{" "}
                    north and south of Durham and the{" "}
                    <Link href="/areas/a167" className="font-semibold text-red hover:underline">A167</Link>{" "}
                    through the city.
                  </p>
                </div>
                <div className="fade-up">
                  <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Areas Around Durham City We Cover</h2>
                  <p className="leading-7 text-navy/70">
                    Breakdowns don’t only happen in the city centre. We cover Durham City and the surrounding communities, including Gilesgate, Belmont, Framwellgate Moor, Newton Hall, Pity Me, Neville’s Cross, Langley Moor, Meadowfield, Brandon, Ushaw Moor, Sherburn, Bowburn, Coxhoe and Chester-le-Street. If you’re in a village not listed, call with your exact location and we’ll confirm.
                  </p>
                </div>
                <div className="fade-up">
                  <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Staying Safe While You Wait</h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-navy/70">
                    <li>On a motorway, follow The Highway Code: move to the hard shoulder or an emergency area if you can, put your hazard lights on, leave by the passenger-side doors, and wait behind the safety barrier if it’s safe to do so. Never put a warning triangle on the motorway.</li>
                    <li>On other roads, get your vehicle off the carriageway if possible, switch on hazard lights and keep passengers away from traffic.</li>
                    <li>If you feel at risk at any point, call 999.</li>
                  </ul>
                  <p className="mt-4 leading-7 text-navy/70">
                    Source:{" "}
                    <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">The Highway Code – Breakdowns and incidents (rules 274–287)</a>.
                  </p>
                </div>
                <div className="fade-up">
                  <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Getting Your Car From Durham to a Garage</h2>
                  <p className="leading-7 text-navy/70">
                    If your car can’t be fixed at the roadside, we can transport it to your chosen garage, your home, or another agreed address, whether that’s in Durham, back towards Darlington, or elsewhere in the North East. Tell us the destination when you call. See{" "}
                    <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">vehicle transporting</Link>{" "}
                    for planned moves.
                  </p>
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
