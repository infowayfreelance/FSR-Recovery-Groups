import type { ReactNode } from "react";
import Link from "next/link";

export type BlogContentBlock =
  | { type: "paragraph"; text: ReactNode }
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "list"; items: ReactNode[] }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "table"; headers: string[]; rows: ReactNode[][] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  /** Overrides the <title>/og:title text exactly, with no automatic "| FSR Recovery Group" suffix. Falls back to `${title} | FSR Recovery Group` when omitted. */
  metaTitle?: string;
  featuredImage: string;
  featuredImageAlt: string;
  /** ISO date (YYYY-MM-DD) */
  publishedDate: string;
  /** ISO date (YYYY-MM-DD); omit if never updated */
  updatedDate?: string;
  author: string;
  authorRole?: string;
  readingTime: string;
  tags: string[];
  content: BlogContentBlock[];
  /** Explicit related-post slugs; falls back to shared-tag matching when omitted. */
  relatedSlugs?: string[];
  /**
   * Marks this as the demonstration article shipped with the blog system.
   * Replace it (or add further posts) by adding more entries to `blogPosts`
   * below — each post is a plain object, no other wiring is needed.
   */
  isSample?: boolean;
};

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Example article demonstrating the blog layout (card grid, article template,
 * table of contents, related posts, prev/next nav and internal linking).
 * Safe to edit or delete once real articles are added — see isSample above.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-do-if-your-car-breaks-down-on-the-motorway",
    title: "What to Do If Your Car Breaks Down on the Motorway",
    excerpt:
      "A breakdown on a fast-moving motorway is one of the more stressful situations a driver can face. Here's how to stay safe and get help quickly.",
    metaDescription:
      "Car broken down on the motorway? Follow these steps to stay safe, then call FSR Recovery Group for 24/7 breakdown recovery across the North East.",
    featuredImage: "/images/service-breakdown.jpg",
    featuredImageAlt: "Broken-down car beside a professional recovery vehicle on a motorway hard shoulder",
    publishedDate: "2026-10-22",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "5 min read",
    tags: ["breakdown recovery", "motorway safety", "roadside assistance"],
    isSample: true,
    content: [
      {
        type: "paragraph",
        text: "A breakdown on a motorway is a different situation to breaking down on a quiet side street. Traffic is faster, there's less room to manoeuvre, and the priority shifts from fixing the problem to getting yourself and your passengers somewhere safe. This guide covers what to do in the first few minutes, and when to call for recovery.",
      },
      { type: "heading", level: 2, id: "get-off-the-live-lanes", text: "1. Get Off the Live Lanes if You Safely Can" },
      {
        type: "paragraph",
        text: "If your vehicle is losing power, try to move across to the hard shoulder or, better still, the next exit or a service station, using your hazard lights to warn other drivers. Only do this if it's safe — never risk crossing lanes in a vehicle that's hard to control.",
      },
      { type: "heading", level: 2, id: "get-out-safely", text: "2. Get Out of the Vehicle Safely" },
      {
        type: "paragraph",
        text: "On the hard shoulder, exit from the passenger side where possible and move behind the safety barrier if there is one, well away from the carriageway. Keep children and pets with you. If you're stuck in a live lane and can't get out safely, stay belted in with your hazard lights on and call 999 immediately.",
      },
      { type: "heading", level: 2, id: "call-for-help", text: "3. Call for Help" },
      {
        type: "paragraph",
        text: (
          <>
            On a motorway, use the nearest emergency roadside telephone (SOS phone) if there is one, or call from a
            mobile once you&rsquo;re in a safe position. Once you&rsquo;re safe,{" "}
            <a href="tel:+447888502989" className="font-semibold text-red hover:underline">
              call FSR Recovery Group
            </a>{" "}
            with your exact location — the number on the marker post nearest to you is the fastest way to tell us
            where you are.
          </>
        ),
      },
      { type: "heading", level: 2, id: "what-happens-next", text: "4. What Happens Next" },
      {
        type: "paragraph",
        text: (
          <>
            Depending on what&rsquo;s happened, we&rsquo;ll talk you through the right next step. A flat battery or
            a problem that can be dealt with at the roadside may only need{" "}
            <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
              roadside assistance
            </Link>
            . If the vehicle can&rsquo;t safely continue, we&rsquo;ll arrange{" "}
            <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
              breakdown recovery
            </Link>{" "}
            to a garage, your home, or another agreed destination. If the breakdown followed a collision, our{" "}
            <Link href="/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">
              accident recovery
            </Link>{" "}
            service can help instead.
          </>
        ),
      },
      { type: "heading", level: 2, id: "quick-checklist", text: "Quick Checklist for a Motorway Breakdown" },
      {
        type: "list",
        items: [
          "Hazard lights on as soon as you notice a problem.",
          "Move to the hard shoulder or next exit only if it's safe to do so.",
          "Exit the vehicle from the passenger side and stand behind any barrier.",
          "Keep everyone together, away from moving traffic.",
          "Call for help and give your exact location, including the nearest marker post if you can see one.",
        ],
      },
      {
        type: "paragraph",
        text: (
          <>
            FSR Recovery Group provides 24/7 recovery across Darlington, County Durham and North Yorkshire,
            including motorway sections within our{" "}
            <Link href="/areas" className="font-semibold text-red hover:underline">
              coverage area
            </Link>
            . Wherever you&rsquo;ve broken down, tell us your situation and we&rsquo;ll confirm the right type of help.
          </>
        ),
      },
    ],
  },
  {
    slug: "car-wont-start-but-battery-is-fine",
    title: "Car Won't Start but Battery Is Fine? 8 Possible Reasons",
    metaTitle: "Car Won't Start but Battery Is Fine? 8 Causes",
    excerpt:
      "Car won't start but the battery seems fine? Here are 8 possible causes, what the clicking sounds mean, safe checks to make, and when to call for help.",
    metaDescription:
      "Car won't start but battery is fine? Discover 8 possible causes, what clicking sounds mean, safe checks and when to call roadside assistance.",
    featuredImage: "/images/fsr-car-wont-start-hero.webp",
    featuredImageAlt: "Driver checking a car that will not start even though the battery seems fine",
    publishedDate: "2026-10-22",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "10 min read",
    tags: ["breakdown recovery", "car battery", "roadside assistance"],
    content: [
      {
        type: "paragraph",
        text: (
          <>
            Your <strong>car won&rsquo;t start but the battery is fine</strong>, or at least it seems that way. The
            dashboard lights come on, the radio works, and the headlights look normal, yet the engine refuses to
            start.
          </>
        ),
      },
      {
        type: "paragraph",
        text: "This doesn't always mean the battery is healthy. A weak battery can still power your lights without having enough energy to turn the engine. If the battery has been properly tested, the problem could be a faulty starter motor, loose electrical connections, an immobiliser fault, or a fuel system issue.",
      },
      {
        type: "paragraph",
        text: "In this guide, we'll explain eight possible causes, what different starting sounds mean, and what you can safely check before calling for help.",
      },
      { type: "image", src: "/images/fsr-car-wont-start-hero.webp", alt: "Driver checking a car that will not start even though the battery seems fine" },
      { type: "heading", level: 2, id: "why-wont-your-car-start", text: "Why Won't Your Car Start if the Battery Is Fine?" },
      {
        type: "paragraph",
        text: "A car needs more than a working battery to start. The starter motor must turn the engine, the fuel system must supply fuel, and the ignition or engine management system must work correctly.",
      },
      {
        type: "paragraph",
        text: "If just one of these systems fails, your car may not start even when the battery is fully charged.",
      },
      {
        type: "paragraph",
        text: "It's also important to understand the difference between two common problems:",
      },
      {
        type: "list",
        items: [
          <>
            <strong>Car won&rsquo;t crank:</strong> The engine doesn&rsquo;t turn when you press the start button or
            turn the key. This may indicate a battery, starter, electrical, or safety-interlock problem.
          </>,
          <>
            <strong>Car cranks but won&rsquo;t start:</strong> The engine turns over normally but doesn&rsquo;t begin
            running. Fuel delivery, ignition, sensors, or engine management faults may be responsible.
          </>,
        ],
      },
      {
        type: "paragraph",
        text: "Recognising which problem you're experiencing can make troubleshooting much easier.",
      },
      { type: "heading", level: 2, id: "what-happens-when-you-try-to-start", text: "What Happens When You Try to Start the Car?" },
      {
        type: "paragraph",
        text: "Before checking individual components, pay attention to the sounds and dashboard behaviour.",
      },
      {
        type: "table",
        headers: ["What you notice", "Possible causes"],
        rows: [
          ["Rapid clicking when starting", "Weak battery, poor connections, or starter circuit fault"],
          ["One loud click but no crank", "Starter motor, solenoid, or electrical connection problem"],
          ["No clicking or engine sound", "Ignition switch, immobiliser, relay, or start circuit fault"],
          ["Engine cranks normally but won't start", "Fuel delivery, ignition, or sensor problem"],
          ["Engine turns over slowly", "Weak battery, poor connections, or starter problem"],
          ["Engine starts and then stops", "Immobiliser, fuel supply, or engine management fault"],
        ],
      },
      {
        type: "paragraph",
        text: "These symptoms are clues rather than definite diagnoses. Different faults can cause similar behaviour.",
      },
      {
        type: "paragraph",
        text: "For example, if your car won't start but the lights come on, you shouldn't immediately assume the starter motor needs replacing.",
      },
      {
        type: "paragraph",
        text: "A professional battery and electrical system test can help identify the actual problem.",
      },
      {
        type: "paragraph",
        text: (
          <>
            For further general guidance on starting problems, see this starting-a-car advice from{" "}
            <a href="https://www.theaa.com/breakdown-cover/advice/starting-a-car" target="_blank" rel="noopener noreferrer" className="font-semibold text-red hover:underline">
              the AA
            </a>{" "}
            and this &ldquo;my car won&rsquo;t start&rdquo; guide from{" "}
            <a href="https://www.rac.co.uk/drive/advice/know-how/help-my-car-wont-start-what-do-i-do/" target="_blank" rel="noopener noreferrer" className="font-semibold text-red hover:underline">
              the RAC
            </a>
            .
          </>
        ),
      },
      { type: "heading", level: 2, id: "8-reasons-your-car-wont-start", text: "8 Reasons Your Car Won't Start Even With a Good Battery" },
      { type: "heading", level: 3, id: "1-faulty-starter-motor-or-solenoid", text: "1. Faulty Starter Motor or Solenoid" },
      { type: "paragraph", text: "The starter motor is responsible for turning the engine when you turn the key or press the start button." },
      { type: "paragraph", text: "If the starter motor fails, the dashboard lights might work normally, but the engine won't crank." },
      { type: "paragraph", text: <strong>Common warning signs include:</strong> },
      {
        type: "list",
        items: [
          "A single clicking sound when starting.",
          "Dashboard lights working but no engine movement.",
          "Intermittent starting problems.",
          "The engine occasionally starting after several attempts.",
        ],
      },
      { type: "paragraph", text: "A faulty starter solenoid or damaged electrical connection can produce similar symptoms." },
      { type: "paragraph", text: <strong>What should you do?</strong> },
      {
        type: "paragraph",
        text: "Avoid repeatedly trying to start the engine. If the battery has been tested and the starter appears faulty, arrange a professional inspection.",
      },
      { type: "heading", level: 3, id: "2-loose-or-corroded-battery-connections", text: "2. Loose or Corroded Battery Connections" },
      { type: "image", src: "/images/fsr-corroded-battery-terminal.webp", alt: "Corroded battery terminal and electrical connections inside a car engine bay" },
      { type: "paragraph", text: "Sometimes the battery itself is working perfectly, but electricity cannot flow properly through its connections." },
      { type: "paragraph", text: "Battery terminals can become loose or develop corrosion over time. A damaged earth cable can also interrupt the electrical connection between the battery and the vehicle." },
      { type: "paragraph", text: "This may explain why your car won't start but the battery is good." },
      { type: "paragraph", text: <strong>Signs to look for:</strong> },
      {
        type: "list",
        items: [
          "White, green, or powdery deposits around battery terminals.",
          "Intermittent electrical problems.",
          "Dashboard lights flickering when starting.",
          "Slow cranking or repeated clicking.",
        ],
      },
      { type: "paragraph", text: <strong>What should you do?</strong> },
      { type: "paragraph", text: "If the vehicle is safely parked, you can visually inspect the battery connections without touching them." },
      { type: "paragraph", text: "Do not disconnect terminals or attempt electrical repairs unless you have the required knowledge and equipment. Damaged, hot, leaking, or swollen batteries need professional attention." },
      { type: "heading", level: 3, id: "3-faulty-ignition-switch-or-start-circuit", text: "3. Faulty Ignition Switch or Start Circuit" },
      { type: "paragraph", text: "The ignition switch tells the vehicle's electrical system to begin the starting process." },
      { type: "paragraph", text: "In cars with push-button starting, this process involves electronic controls, switches, and other safety systems." },
      { type: "paragraph", text: "If the ignition switch or start circuit develops a fault, the battery may have power, but the starter motor might not receive the correct signal." },
      { type: "paragraph", text: <strong>Possible symptoms include:</strong> },
      {
        type: "list",
        items: [
          "Nothing happens when you turn the key.",
          "Starting works occasionally but not consistently.",
          "The dashboard behaves unusually.",
          "The engine does not crank despite a charged battery.",
        ],
      },
      { type: "paragraph", text: <strong>What should you do?</strong> },
      { type: "paragraph", text: "Make sure the vehicle is correctly in Park or Neutral, or that the clutch is fully pressed where required." },
      { type: "paragraph", text: "If the problem continues, have the ignition and starting circuit inspected rather than replacing parts based on guesswork." },
      { type: "heading", level: 3, id: "4-immobiliser-or-key-recognition-problems", text: "4. Immobiliser or Key Recognition Problems" },
      { type: "paragraph", text: "Most modern cars use an immobiliser to prevent the engine from starting without a recognised key." },
      { type: "paragraph", text: "If the system cannot recognise your key or develops an electronic fault, it may prevent the engine from starting." },
      { type: "paragraph", text: "This can happen even when the car battery is fully charged." },
      { type: "paragraph", text: <strong>Common symptoms include:</strong> },
      {
        type: "list",
        items: [
          "A flashing security or key warning light.",
          "A message saying the key isn't detected.",
          "The engine cranking but not starting.",
          "The engine starting briefly before stopping.",
        ],
      },
      { type: "paragraph", text: <strong>What should you do?</strong> },
      { type: "paragraph", text: "Try your spare key if one is available." },
      { type: "paragraph", text: "For keyless vehicles, follow the manufacturer's instructions for emergency key detection. A flat key-fob battery can sometimes cause recognition problems." },
      { type: "paragraph", text: "If neither key works, professional diagnosis may be necessary." },
      { type: "heading", level: 3, id: "5-fuel-pump-or-fuel-delivery-problems", text: "5. Fuel Pump or Fuel Delivery Problems" },
      { type: "paragraph", text: "If your engine cranks but won't start, the problem may be related to fuel delivery." },
      { type: "paragraph", text: "The fuel pump supplies petrol or diesel to the engine. If it fails, the engine may turn over normally but not receive enough fuel to start." },
      { type: "paragraph", text: "Other possible problems include a blocked fuel filter, fuel pressure fault, or an issue with the fuel injection system." },
      { type: "paragraph", text: <strong>Warning signs may include:</strong> },
      {
        type: "list",
        items: [
          "The engine cranking without starting.",
          "Difficulty starting after the vehicle has been standing.",
          "Sudden engine stalling.",
          "Reduced performance before the starting problem develops.",
        ],
      },
      { type: "paragraph", text: <strong>What should you do?</strong> },
      { type: "paragraph", text: "First, check the fuel gauge and make sure there is enough fuel." },
      { type: "paragraph", text: "If the tank isn't empty and the engine continues cranking without starting, avoid repeated starting attempts. The fuel system may need professional testing." },
      { type: "heading", level: 3, id: "6-faulty-crankshaft-sensor-or-ignition-system", text: "6. Faulty Crankshaft Sensor or Ignition System" },
      { type: "paragraph", text: "Modern engines use sensors to tell the engine control unit when to deliver fuel and produce a spark." },
      { type: "paragraph", text: "One important component is the crankshaft position sensor, which monitors engine speed and position." },
      { type: "paragraph", text: "If this sensor fails, the engine may crank normally but fail to start." },
      { type: "paragraph", text: "On petrol vehicles, faulty ignition coils or other ignition components can also prevent the engine from running correctly." },
      { type: "paragraph", text: <strong>Possible warning signs include:</strong> },
      {
        type: "list",
        items: [
          "Engine cranking without starting.",
          "Sudden stalling while driving.",
          "Intermittent starting problems.",
          "An engine warning light.",
        ],
      },
      { type: "paragraph", text: "Some faults appear only when the engine is warm, making them difficult to identify without testing." },
      { type: "paragraph", text: <strong>What should you do?</strong> },
      { type: "paragraph", text: "A qualified technician can use diagnostic equipment and electrical tests to investigate the fault." },
      { type: "paragraph", text: "Avoid replacing sensors without confirming which component is causing the problem." },
      { type: "heading", level: 3, id: "7-blown-fuse-faulty-relay-or-wiring-problem", text: "7. Blown Fuse, Faulty Relay or Wiring Problem" },
      { type: "paragraph", text: "Your vehicle has fuses, relays, and wiring that help control the starter, fuel pump, ignition, and engine management systems." },
      { type: "paragraph", text: "If a relevant fuse blows, a relay fails, or a wire becomes damaged, the engine may not start." },
      { type: "paragraph", text: "Electrical faults can develop because of corrosion, moisture, vibration, or damaged wiring." },
      { type: "paragraph", text: <strong>Possible symptoms include:</strong> },
      {
        type: "list",
        items: [
          "No response when turning the key.",
          "Intermittent starting failure.",
          "Electrical components stopping unexpectedly.",
          "Dashboard warning lights or unusual electrical behaviour.",
        ],
      },
      { type: "paragraph", text: <strong>What should you do?</strong> },
      { type: "paragraph", text: "You can check the vehicle handbook to understand the location and purpose of its fuse boxes." },
      { type: "paragraph", text: "However, don't replace fuses with higher-rated ones, bypass relays, or interfere with damaged wiring." },
      { type: "paragraph", text: "If a replacement fuse blows again, the underlying electrical fault needs professional attention." },
      { type: "heading", level: 3, id: "8-alternator-or-charging-system-problems", text: "8. Alternator or Charging System Problems" },
      { type: "paragraph", text: "The alternator recharges the battery while the engine is running." },
      { type: "paragraph", text: "If it stops working properly, the vehicle may continue using the battery's stored energy until the charge becomes too low." },
      { type: "paragraph", text: "Eventually, the car may refuse to start." },
      { type: "paragraph", text: "A faulty alternator doesn't normally prevent an otherwise healthy, fully charged battery from starting the engine directly. Instead, charging problems often leave the battery discharged." },
      { type: "paragraph", text: <strong>Warning signs include:</strong> },
      {
        type: "list",
        items: [
          "Battery warning light while driving.",
          "Headlights becoming unusually dim.",
          "Electrical problems while the engine is running.",
          "A battery that repeatedly goes flat.",
        ],
      },
      { type: "paragraph", text: <strong>What should you do?</strong> },
      { type: "paragraph", text: "If your car starts after a jumpstart but the battery quickly becomes flat again, the charging system may need testing." },
      { type: "paragraph", text: "Don't assume replacing the battery will permanently fix the problem." },
      { type: "heading", level: 2, id: "what-can-you-safely-check", text: "What Can You Safely Check Before Calling for Help?" },
      { type: "paragraph", text: "If your car won't start but the battery is charged, there are a few simple checks you can make before arranging assistance." },
      { type: "heading", level: 3, id: "check-1-dashboard", text: "Check 1: Look at the Dashboard" },
      { type: "paragraph", text: "Turn on the ignition and check for warning lights." },
      { type: "paragraph", text: "A key symbol, security warning, or other unusual message may help identify the problem." },
      { type: "heading", level: 3, id: "check-2-starting-sound", text: "Check 2: Listen to the Starting Sound" },
      { type: "paragraph", text: "Notice whether the engine cranks, makes clicking noises, turns slowly, or remains completely silent." },
      { type: "paragraph", text: "These details are helpful when speaking to a mechanic or recovery provider." },
      { type: "heading", level: 3, id: "check-3-gear-position", text: "Check 3: Check the Gear Position" },
      { type: "paragraph", text: "Automatic vehicles normally need to be in Park or Neutral before starting." },
      { type: "paragraph", text: "Manual vehicles may require the clutch pedal to be fully pressed." },
      { type: "paragraph", text: "Check the vehicle handbook for the correct procedure." },
      { type: "heading", level: 3, id: "check-4-spare-key", text: "Check 4: Try a Spare Key" },
      { type: "paragraph", text: "If the vehicle displays a key recognition warning, try a working spare key." },
      { type: "paragraph", text: "This may help identify a problem with the original key or key-fob battery." },
      { type: "heading", level: 3, id: "check-5-fuel-level", text: "Check 5: Check the Fuel Level" },
      { type: "paragraph", text: "It sounds obvious, but an empty fuel tank can produce symptoms that resemble more serious faults." },
      { type: "paragraph", text: "Check the gauge before assuming there's an electrical or mechanical problem." },
      { type: "heading", level: 3, id: "check-6-inspect-battery", text: "Check 6: Visually Inspect the Battery" },
      { type: "paragraph", text: "If the vehicle is safely parked, look for obvious corrosion, loose-looking connections, or visible battery damage." },
      { type: "paragraph", text: "Do not touch exposed electrical parts or attempt repairs if you're unsure." },
      {
        type: "quote",
        text: "Important: If your car breaks down in a dangerous location, personal safety comes before troubleshooting. Do not open the bonnet or attempt repairs where doing so would expose you to traffic.",
      },
      { type: "heading", level: 2, id: "when-should-you-call-roadside-assistance", text: "When Should You Call Roadside Assistance?" },
      { type: "image", src: "/images/fsr-roadside-assistance.webp", alt: "Roadside assistance technician helping a driver with a car that will not start" },
      { type: "paragraph", text: "Some starting problems are straightforward, while others require professional equipment and inspection." },
      { type: "paragraph", text: "Consider calling roadside assistance when:" },
      {
        type: "list",
        items: [
          "Your car doesn't crank despite basic checks.",
          "The engine cranks but repeatedly fails to start.",
          "You hear unusual clicking or grinding sounds.",
          "A battery problem returns after jumpstarting.",
          "There are signs of electrical damage or overheating.",
          "Your vehicle has stopped somewhere unsafe.",
        ],
      },
      {
        type: "paragraph",
        text: (
          <>
            If the problem involves insufficient battery power, professional{" "}
            <Link href="/services/jumpstart-services" className="font-semibold text-red hover:underline">
              jumpstart assistance
            </Link>{" "}
            may help.
          </>
        ),
      },
      {
        type: "paragraph",
        text: (
          <>
            For other starting problems,{" "}
            <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
              roadside assistance
            </Link>{" "}
            can help determine the next step.
          </>
        ),
      },
      {
        type: "paragraph",
        text: (
          <>
            If the car cannot be restarted or safely driven,{" "}
            <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
              vehicle breakdown recovery
            </Link>{" "}
            may be needed to transport it to a suitable garage.
          </>
        ),
      },
      { type: "paragraph", text: "Not every starting problem can be fixed at the roadside. Some vehicles need further mechanical or electrical diagnosis." },
      { type: "heading", level: 2, id: "how-to-prevent-car-starting-problems", text: "How to Prevent Car Starting Problems" },
      { type: "paragraph", text: "Not every breakdown is avoidable, but basic maintenance can reduce the risk of being stranded." },
      { type: "paragraph", text: <><strong>Look after your battery.</strong> Have it tested if you notice slow starting, especially before winter. Older batteries can struggle in cold weather.</> },
      { type: "paragraph", text: <><strong>Keep up with servicing.</strong> Regular maintenance can identify worn components and developing problems before they cause a breakdown.</> },
      { type: "paragraph", text: <><strong>Pay attention to warning lights.</strong> Don&rsquo;t ignore battery, engine, or electrical warning messages.</> },
      { type: "paragraph", text: <><strong>Investigate repeated starting problems.</strong> If your car occasionally refuses to start, have it checked before the fault becomes permanent.</> },
      { type: "paragraph", text: <><strong>Avoid unnecessary battery drain.</strong> Switch off lights and electrical equipment when appropriate, and remember that vehicles left unused for long periods may experience battery discharge.</> },
      { type: "paragraph", text: <><strong>Deal with unusual sounds early.</strong> Grinding, repeated clicking, or changes in cranking speed may indicate a developing problem.</> },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently Asked Questions" },
      { type: "heading", level: 3, id: "faq-fully-charged", text: "Why won't my car start if the battery is fully charged?" },
      { type: "paragraph", text: "A fully charged battery is only one part of the starting system. The engine also needs a working starter, suitable electrical connections, fuel delivery, and the correct control signals. A fault in any of these systems may prevent starting." },
      { type: "heading", level: 3, id: "faq-starter-fail", text: "Can a starter motor fail even if the battery is good?" },
      { type: "paragraph", text: "Yes. A starter motor can fail even when the battery is healthy. A single click or no engine movement may indicate a starter problem, although electrical connections and other components can cause similar symptoms." },
      { type: "heading", level: 3, id: "faq-click-not-start", text: "Why does my car click but not start?" },
      { type: "paragraph", text: "Rapid clicking often suggests insufficient electrical power or poor battery connections. A single click can indicate a starter or solenoid problem. However, the sound alone cannot confirm the fault." },
      { type: "heading", level: 3, id: "faq-jumpstart-help", text: "Will jumpstarting help if my battery is fine?" },
      { type: "paragraph", text: "A jumpstart may help if the battery is weak despite appearing normal. However, it won't repair a faulty starter motor, failed fuel pump, or immobiliser problem. Only attempt jumpstarting when it's appropriate for your vehicle and you can follow the manufacturer's instructions safely." },
      { type: "heading", level: 3, id: "faq-sometimes-starts", text: "Why does my car sometimes start and sometimes not?" },
      { type: "paragraph", text: "Intermittent starting problems can be caused by poor electrical connections, a developing starter fault, key recognition issues, or failing sensors. Because the problem may disappear temporarily, professional testing can be useful before it becomes worse." },
      { type: "heading", level: 2, id: "need-help-with-a-car-that-wont-start", text: "Need Help With a Car That Won't Start?" },
      { type: "paragraph", text: "A car that refuses to start can interrupt your plans, whether you're leaving home, heading to work, or stopping during a journey." },
      { type: "paragraph", text: "If the battery seems fine but the engine still won't start, avoid repeatedly trying to start it without knowing the cause." },
      {
        type: "paragraph",
        text: (
          <>
            <strong>FSR Recovery Group</strong> provides 24/7 roadside assistance, jumpstart support, and vehicle
            breakdown recovery in Darlington and surrounding areas.
          </>
        ),
      },
      {
        type: "paragraph",
        text: "If your vehicle can't be restarted safely, our team can discuss suitable roadside help or arrange recovery to an agreed destination.",
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>
              Call FSR Recovery Group:{" "}
              <a href="tel:+447888502989" className="text-red hover:underline">
                +44 7888 502989
              </a>
            </strong>
          </>
        ),
      },
      {
        type: "paragraph",
        text: (
          <>
            You can also{" "}
            <a href="https://fsrrecoverygroups.co.uk/" className="font-semibold text-red hover:underline">
              contact us through our website
            </a>{" "}
            to discuss the assistance you need.
          </>
        ),
      },
    ],
  },
];

export function getPublishedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string): { previous: BlogPost | null; next: BlogPost | null } {
  const posts = getPublishedPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  if (post.relatedSlugs && post.relatedSlugs.length > 0) {
    return post.relatedSlugs
      .map((slug) => getBlogPost(slug))
      .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug)
      .slice(0, limit);
  }

  return getPublishedPosts()
    .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, limit);
}
