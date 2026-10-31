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

export const blogPosts: BlogPost[] = [
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
  {
    slug: "car-overheating-while-driving",
    title: "Car Overheating While Driving? Causes and What to Do",
    metaTitle: "Car Overheating While Driving? Causes and Fixes",
    excerpt:
      "Car overheating while driving? See the common causes, what to do at the roadside and when to call for recovery. Advice from FSR Recovery Group.",
    metaDescription:
      "Car overheating while driving? See the common causes, what to do at the roadside and when to call for recovery. Advice from FSR Recovery Group.",
    featuredImage: "/images/car-overheating-roadside-driver-calling-recovery.webp",
    featuredImageAlt: "Driver on the phone beside a steaming car at the roadside after it overheated while driving",
    publishedDate: "2026-10-27",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "8 min read",
    tags: ["breakdown recovery", "engine overheating", "roadside assistance"],
    content: [
      {
        type: "paragraph",
        text: "Your temperature gauge climbs, steam rises from the bonnet or a red warning light comes on. Car overheating while driving is stressful, and every extra minute of heat adds engine damage.",
      },
      {
        type: "paragraph",
        text: "Pull over safely, switch off and call for help. This guide covers the first steps, the common causes, motorway rules and when to call for recovery.",
      },
      { type: "heading", level: 2, id: "what-to-do-first", text: "What to do first if your car overheats while driving" },
      {
        type: "paragraph",
        text: "What to do if your car overheats: turn off the air conditioning, turn the heater to full and pull over at the first safe place.",
      },
      {
        type: "list",
        items: [
          "Switch off the air conditioning. Turn the heater and fan to full to pull some heat away from the engine.",
          "Pull over at the first safe place, such as a layby or side road. On a motorway, follow the motorway steps below.",
          "Switch off the engine and turn on your hazard lights. Read the manual note below first if your car shows an on-screen message.",
          "Get everyone out on the side away from traffic, if it is safe.",
          "Wait about 30 minutes before you open the bonnet. Never open the radiator or coolant cap while the engine is hot.",
          "Call your breakdown provider or a recovery firm. If you see flames, move well away and call 999.",
        ],
      },
      {
        type: "quote",
        text: "Do not pour cold water into a hot radiator. The sudden temperature change can damage the engine.",
      },
      { type: "heading", level: 3, id: "check-owners-manual", text: "Check your owner's manual first" },
      {
        type: "paragraph",
        text: (
          <>
            Generic advice says switch off at once, but manufacturers differ.{" "}
            <a
              href="https://www.volvocars.com/ie/support/car/v60/article/c71ccdbc88ebfe30c0a80151177dd9f0/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red hover:underline"
            >
              Volvo&rsquo;s V60 support page
            </a>{" "}
            separates two dashboard messages.
          </>
        ),
      },
      {
        type: "paragraph",
        text: "On “Stop safely”, Volvo says to let the engine idle for several minutes. On “Turn off engine”, switch it off.",
      },
      {
        type: "paragraph",
        text: "Read the cooling section of your manual now. It names the exact messages your car shows.",
      },
      { type: "heading", level: 2, id: "how-do-you-know", text: "How do you know your car is overheating?" },
      {
        type: "paragraph",
        text: "A red or amber engine temperature warning light, a gauge climbing into the red or steam from the bonnet means the engine is too hot.",
      },
      { type: "image", src: "/images/car-overheating-temperature-gauge-warning.webp", alt: "Car dashboard temperature gauge showing the needle climbing into the red overheating zone" },
      {
        type: "list",
        items: [
          "A temperature warning light on the dashboard",
          "A gauge needle that climbs towards hot or red",
          "Steam or smoke from under the bonnet",
          "A sweet smell, a sign of leaking coolant",
          "Loss of power or a rough-running engine",
        ],
      },
      {
        type: "paragraph",
        text: (
          <>
            Not every car has a gauge. In a July 2026{" "}
            <a
              href="https://www.theaa.com/about-us/newsroom/drivers-want-engine-temperature-gauges-to-help-avoid-overheating-breakdowns"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red hover:underline"
            >
              AA survey
            </a>{" "}
            of 12,438 AA members, run by Yonder, 63% wanted both a gauge and a warning light. 15% wanted a warning
            light only and 14% a gauge only.
          </>
        ),
      },
      {
        type: "paragraph",
        text: "If your car has only a warning light, treat steam or a sweet smell as the same alert. Do not wait for the light.",
      },
      { type: "heading", level: 2, id: "why-overheating-causes", text: "Why is my car overheating? 7 common causes" },
      {
        type: "paragraph",
        text: "Most overheating comes from a cooling system fault: low coolant, a stuck thermostat, a failing pump or fan, or a radiator problem.",
      },
      {
        type: "table",
        headers: ["Cause", "What you notice", "Roadside fix or recovery?"],
        rows: [
          ["Low coolant or a leak", "Puddle under the car, sweet smell, low coolant reservoir", "Top up with the correct coolant only if the engine is cold and nothing is leaking. Otherwise, recovery."],
          ["Stuck thermostat", "Gauge climbs quickly soon after starting", "Recovery"],
          ["Radiator fault", "Steam, a leak at the front of the car, poor cooling", "Recovery"],
          ["Failing water pump", "Coolant leak at the front of the engine, a whining noise", "Recovery"],
          ["Cooling fan fault", "Overheats in traffic or at idle, cools down at speed", "Recovery"],
          ["Low engine oil", "Oil warning light, engine noise, burning smell", "Do not drive. Check the oil level when cold, then recovery."],
          ["Blocked or air-locked cooling system", "Temperature swings, heater blows cold", "Recovery"],
        ],
      },
      {
        type: "paragraph",
        text: "You can't confirm most of these at the roadside. A garage finds the exact fault, so your job is to stop safely and limit the damage.",
      },
      { type: "heading", level: 2, id: "can-you-keep-driving", text: "Can you keep driving an overheating car?" },
      {
        type: "paragraph",
        text: "No. Stop as soon as it is safe and let the engine cool.",
      },
      {
        type: "paragraph",
        text: "Motrio's UK guide says a few minutes of overheating can warp the cylinder head or blow the gasket. Both are serious engine faults.",
      },
      {
        type: "paragraph",
        text: "After the engine cools, don't treat the problem as solved. The cause is still there, so get the car checked before your next journey.",
      },
      {
        type: "paragraph",
        text: "One UK owner-forum thread suggests a quick check after an overheat. With the engine cold, open the oil filler cap and look underneath for a creamy residue. If you see it, tell the garage.",
      },
      { type: "heading", level: 2, id: "motorway-a-road", text: "Car overheating on a motorway or A-road" },
      {
        type: "paragraph",
        text: (
          <>
            On a motorway, a red or amber warning light means leave at the next exit or service area, says{" "}
            <a
              href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red hover:underline"
            >
              National Highways
            </a>
            . Never stop in a live lane.
          </>
        ),
      },
      {
        type: "list",
        items: [
          "If you can't leave, go left onto the hard shoulder or into an emergency area with your hazard lights on.",
          "Get out on the side away from traffic and wait behind the barrier.",
          "Do not try to repair the car.",
          "Call National Highways on 0300 123 5000, then your breakdown provider.",
          "Do not leave an emergency area without speaking to National Highways.",
        ],
      },
      {
        type: "paragraph",
        text: "If you can't reach a safe place, stay in the car with your seatbelt and hazard lights on and call 999. Keep animals in the vehicle or, in an emergency, under control on the verge.",
      },
      {
        type: "paragraph",
        text: (
          <>
            This happens to real drivers.{" "}
            <a
              href="https://www.cheshirefire.gov.uk/news-events/incidents/?i=55605"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red hover:underline"
            >
              Cheshire Fire and Rescue
            </a>{" "}
            attended an overheated engine bay on the M56 eastbound hard shoulder, between junctions 10 and 9, on 25
            May 2026.
          </>
        ),
      },
      {
        type: "paragraph",
        text: "Crews cooled it with a hose reel jet and checked it with thermal imaging. Two lanes closed.",
      },
      {
        type: "paragraph",
        text: "On an A-road, pull into a layby, gateway or side road. Avoid stopping on a bend or the brow of a hill.",
      },
      { type: "heading", level: 2, id: "traffic-heat-hills", text: "Why cars overheat in traffic, heat and on hills" },
      {
        type: "paragraph",
        text: "Slow traffic, hot weather and long climbs all make the cooling system work harder.",
      },
      {
        type: "paragraph",
        text: "In stop-start traffic, less air passes through the radiator, so the cooling fan does the work. A weak fan or low coolant shows up first.",
      },
      {
        type: "paragraph",
        text: "On a hill, the engine works harder and makes more heat. The AA attended 21% more overheating-related callouts in the week before its 5 August 2026 survey release than in the same week of 2025.",
      },
      { type: "heading", level: 2, id: "hybrid-electric", text: "Hybrid and electric cars: is it different?" },
      {
        type: "paragraph",
        text: "Yes. Hybrids and electric cars cool a drive system as well as an engine, and the steps differ.",
      },
      {
        type: "paragraph",
        text: (
          <>
            Volkswagen UK&rsquo;s page for its{" "}
            <a
              href="https://volkswagen.co.uk/en/owners-and-services/my-car/warning-light/electric-drive-overheated.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red hover:underline"
            >
              &ldquo;Electric drive overheated&rdquo;
            </a>{" "}
            warning says to park in the open air and deactivate the drive system. It also says not to add coolant
            and to call roadside assistance.
          </>
        ),
      },
      {
        type: "paragraph",
        text: "Other brands word this differently. Read your own manual and tell the operator your car is a hybrid or electric.",
      },
      { type: "heading", level: 2, id: "when-to-call-recovery", text: "When to call for recovery, and what to tell us" },
      {
        type: "paragraph",
        text: "Call for recovery if the warning returns after the engine cools, coolant is leaking or you are on a fast road.",
      },
      { type: "image", src: "/images/car-overheating-recovery-truck-garage.webp", alt: "Car loaded onto a flatbed recovery truck outside a garage after overheating" },
      {
        type: "table",
        headers: ["Situation", "What to do"],
        rows: [
          ["Coolant slightly low, engine cold, no leak", "Top up with the correct coolant, then book a garage check"],
          ["Warning returns after a top-up", "Stop driving and call recovery"],
          ["Coolant on the ground or steam from the bonnet", "Call recovery"],
          ["Overheating in traffic or at idle", "Call recovery so the fan, pump and thermostat get checked"],
          ["Motorway or hard shoulder", "Call National Highways, then your breakdown provider"],
          ["Hybrid or electric warning", "Park in the open air and call recovery"],
        ],
      },
      {
        type: "paragraph",
        text: (
          <>
            FSR Recovery Group&rsquo;s{" "}
            <Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">
              vehicle breakdown recovery
            </Link>{" "}
            covers cars, light vans, 4x4s and SUVs, 24/7. We work around Darlington, on the{" "}
            <Link href="/areas/a1m" className="font-semibold text-red hover:underline">
              A1(M)
            </Link>{" "}
            and the{" "}
            <Link href="/areas/a66" className="font-semibold text-red hover:underline">
              A66
            </Link>
            , and across the{" "}
            <Link href="/areas" className="font-semibold text-red hover:underline">
              areas we cover
            </Link>
            .
          </>
        ),
      },
      {
        type: "paragraph",
        text: (
          <>
            For a flat battery or a flat tyre, our{" "}
            <Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">
              roadside assistance
            </Link>{" "}
            can help on the spot. An overheating engine needs recovery, and{" "}
            <Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">
              vehicle transporting
            </Link>{" "}
            covers moving the car on afterwards.
          </>
        ),
      },
      { type: "heading", level: 3, id: "what-to-tell-operator", text: "What to tell the operator" },
      {
        type: "paragraph",
        text: "Give the operator these details so the right truck arrives:",
      },
      {
        type: "list",
        items: [
          "Your exact location: road, direction and nearest junction or marker post",
          "Make, model and fuel type, including hybrid or electric",
          "The warning message or symbol on the dash",
          "Whether coolant is leaking or steam is rising",
          "Whether the car is low or lowered",
          "Who is with you, including pets",
        ],
      },
      {
        type: "paragraph",
        text: "A lowered car needs the right truck, so say so when you call.",
      },
      { type: "heading", level: 3, id: "no-breakdown-cover", text: "No breakdown cover?" },
      {
        type: "paragraph",
        text: "You can still call a recovery firm directly. Alphabet Fleet and Ageas both say you can ask for emergency help without cover.",
      },
      {
        type: "paragraph",
        text: "Ageas adds that most online policies take 24 hours to activate, so buying cover after you break down does not help.",
      },
      {
        type: "paragraph",
        text: "Ask for a quote before the truck loads. At FSR, we discuss a quote before any work begins.",
      },
      { type: "heading", level: 2, id: "prevent-overheating", text: "How to stop it happening again" },
      {
        type: "paragraph",
        text: "Check your coolant level regularly, and always with the engine cold.",
      },
      {
        type: "list",
        items: [
          "Keep the level between the minimum and maximum marks",
          "Top up only with the coolant your manual specifies",
          "Ask your garage to inspect the hoses, water pump and cooling fan at each service",
          "Note the exact warning messages in your manual",
          "Save your breakdown provider, National Highways (0300 123 5000) and FSR (+44 7888 502989) in your phone",
        ],
      },
      {
        type: "paragraph",
        text: (
          <>
            A car that won&rsquo;t start is a different fault. Our guide to{" "}
            <Link href="/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">
              a car that won&rsquo;t start when the battery is fine
            </Link>{" "}
            covers it, and you can browse every{" "}
            <Link href="/services" className="font-semibold text-red hover:underline">
              service we offer
            </Link>
            .
          </>
        ),
      },
      { type: "heading", level: 2, id: "faq", text: "Car overheating FAQ" },
      { type: "heading", level: 3, id: "faq-wait-bonnet", text: "How long should I wait before opening the bonnet or checking the coolant?" },
      {
        type: "paragraph",
        text: "Wait about 30 minutes. Never open the radiator or coolant cap while the engine is hot, because pressurised coolant can spray out and scald you. Check the level only when the engine is cold, and add the coolant your manual specifies.",
      },
      { type: "heading", level: 3, id: "faq-drive-after-cool", text: "Can I drive after the engine has cooled?" },
      {
        type: "paragraph",
        text: "Recovery is the safest choice. The cause of the overheating is still there, and a second overheat can finish the damage the first one started. If you must move the car, drive only to the nearest safe place and stop if the warning returns.",
      },
      { type: "heading", level: 3, id: "faq-water-instead", text: "Can I top up with water instead of coolant?" },
      {
        type: "paragraph",
        text: "No, use the coolant your manual specifies. Plain water dilutes the coolant mix that protects the engine, and cold water poured into a hot radiator can damage it. Wait until the engine is cold, then have the system checked.",
      },
      { type: "heading", level: 3, id: "faq-idle-traffic", text: "Why does my car overheat when idling or in traffic?" },
      {
        type: "paragraph",
        text: "A faulty cooling fan is a common cause, because little air passes through the radiator at idle. Low coolant and a weak water pump show up first in traffic too. If the gauge drops once you move, ask a garage to check the fan.",
      },
      { type: "heading", level: 3, id: "faq-stop-straight-away", text: "Does the temperature warning light mean stop straight away?" },
      {
        type: "paragraph",
        text: "Yes, stop at the first safe place. National Highways says a red or amber warning light on a motorway means leave at the next exit or service area. Manufacturers word these messages differently, so check your manual for what your car shows.",
      },
      { type: "heading", level: 3, id: "faq-no-cover-call", text: "Can I call a recovery firm if I have no breakdown cover?" },
      {
        type: "paragraph",
        text: "Yes, you can call a recovery firm directly and ask for emergency help, say Alphabet Fleet and Ageas. Ageas adds that most online policies take 24 hours to activate. At FSR, we discuss a quote before work begins.",
      },
      { type: "heading", level: 2, id: "contact-cta", text: "Overheating on the A1(M), the A66 or around Darlington?" },
      {
        type: "paragraph",
        text: (
          <>
            Call or WhatsApp FSR Recovery Group on{" "}
            <a href="tel:+447888502989" className="font-semibold text-red hover:underline">
              +44 7888 502989
            </a>
            , or use our{" "}
            <Link href="/contact" className="font-semibold text-red hover:underline">
              contact page
            </Link>
            . We are at 135 Gladstone St, Darlington DL3 6LB and recover cars, light vans, 4x4s and SUVs 24/7.
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
