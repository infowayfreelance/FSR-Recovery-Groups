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
  faqs?: { question: string; answer: string }[];
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
    slug: "flat-battery-cold-morning",
    title: "Flat Battery on a Cold Morning? Jump Start, Replace or Recover: A North East Driver's Guide",
    metaTitle: "Flat Battery on a Cold Morning? What to Do Next",
    metaDescription: "Car won't start on a frosty North East morning? How to tell a flat battery, jump start it safely, when a battery may need replacing and when to call for help.",
    excerpt: "It is a familiar winter scene from Darlington to Durham and out across Teesdale: frost on the windscreen, a cold car on the drive, and when you turn the key, the engine turns over slowly, clicks, or does nothing at all. Cold mornings are when a tired battery finally shows itself.",
    featuredImage: "/images/flat-battery-cold-morning-featured.webp",
    featuredImageAlt: "Frosty car with its bonnet open on a North East street on a cold morning",
    publishedDate: "2026-11-22",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "12 min read",
    tags: ["flat battery", "jump start", "winter driving", "roadside assistance"],
    faqs: [
      { question: "Why does my car battery go flat in cold weather?", answer: "Cold slows the chemical reaction inside the battery, so it delivers less power, while a cold engine needs more power to turn over. Winter driving with heaters and lights on, plus short trips, can also leave the battery undercharged." },
      { question: "Is it safe to jump start a car in freezing weather?", answer: "It can be, but Which? warns never to jump start a battery if its fluids are frozen, and not to use damaged or leaking batteries or leads. If in doubt, call for help." },
      { question: "How long should I drive after a jump start?", answer: "Avoid switching off straight away. A longer drive gives the alternator time to recharge the battery; a short trip may not be enough. If it keeps going flat, have the battery and charging system tested." },
      { question: "How do I know if my battery needs replacing?", answer: "Signs include slow cranking on cold mornings, needing more than one jump start in a short period, and an older battery. A battery test at a garage or battery specialist will show whether it can still hold charge." },
      { question: "Can a battery be too flat to jump start?", answer: "Yes. If the battery is very old, damaged or deeply discharged, a jump start may not work. Repeated failed attempts suggest another fault or a battery that needs replacing." },
      { question: "Can you jump start a hybrid or electric car?", answer: "Hybrid and electric cars still have a 12V battery that can go flat, but procedures vary by make and model. Always follow the owner's handbook, which may show dedicated jump-start points." },
      { question: "What should I do if my car won't start on the A1(M)?", answer: "If you have stopped in a live lane or cannot reach a safe place, switch on your hazard lights and, if safe, exit on the side away from traffic and wait behind the barrier. Call 999 if you feel at risk. Do not try to jump start the car on a motorway." }
    ],
    content: [
      { type: "paragraph", text: <>{"It is a familiar winter scene from Darlington to Durham and out across Teesdale: frost on the windscreen, a cold car on the drive, and when you turn the key, the engine turns over slowly, clicks, or does nothing at all. Cold mornings are when a tired battery finally shows itself."}</> },
      { type: "paragraph", text: <>{"This guide takes you through what is happening, how to tell whether it really is the battery, how to jump start safely, how to decide whether a jump start is enough or the battery needs replacing, and when it is better to call for roadside help. Take it one step at a time."}</> },
      { type: "heading", level: 2, id: "the-short-answer", text: "The short answer" },
      { type: "list", items: [
        <>{"1. "}<strong>{"Stay safe first."}</strong>{" If you are on the roadside rather than your drive, follow the safety steps below before anything else."}</>,
        <>{"2. "}<strong>{"Check the signs."}</strong>{" Slow cranking, clicking or dim dashboard lights usually point to a weak or flat battery."}</>,
        <>{"3. "}<strong>{"Turn off everything electrical"}</strong>{" (heater fan, heated screen, lights, radio) and try once more."}</>,
        <>{"4. "}<strong>{"Jump start only if it is safe"}</strong>{" and the battery is not damaged, leaking or frozen."}</>,
        <>{"5. "}<strong>{"If it starts, keep the engine running"}</strong>{" and plan a proper drive so the battery can recharge, then get the battery and charging system tested."}</>,
        <>{"6. "}<strong>{"If it will not start, or keeps going flat"}</strong>{", the cause may be the battery, the charging system or something else. Call for help rather than repeatedly trying."}</>
      ] },
      { type: "paragraph", text: <>{"If you are stuck and need help, call "}<strong>{"FSR Recovery Group"}</strong>{" on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a></strong>{"."}</> },
      { type: "heading", level: 2, id: "why-batteries-struggle-on-cold-mornings", text: "Why batteries struggle on cold mornings" },
      { type: "paragraph", text: <>{"A car battery produces power through a chemical reaction, and that reaction slows down in the cold. At the same time, a cold engine with thick oil takes more effort to turn over. So just when the starter motor needs the most power, the battery can deliver the least."}</> },
      { type: "paragraph", text: <>{"Winter adds extra load too. Heated screens, blowers, lights and wipers all draw power, and short journeys in the dark may not give the alternator enough time to put back what was used. A battery that coped all summer can suddenly run out of reserve on the first hard frost."}</> },
      { type: "paragraph", text: <>{"Common reasons a battery goes flat in winter:"}</> },
      { type: "list", items: [
        <><strong>{"Age."}</strong>{" Batteries lose capacity over time. Many last roughly three to five years, depending on how the car is used."}</>,
        <><strong>{"Short trips."}</strong>{" Lots of short journeys, especially with lights and heaters on, can leave the battery undercharged."}</>,
        <><strong>{"Standing for days."}</strong>{" Alarms, keyless entry and control modules draw a small current even when the car is parked."}</>,
        <><strong>{"Something left on."}</strong>{" An interior light, boot light or headlights can drain a battery overnight."}</>,
        <><strong>{"A charging fault."}</strong>{" If the alternator is not charging properly, a new battery will soon go flat too."}</>
      ] },
      { type: "heading", level: 2, id: "is-it-really-the-battery-read-the-signs", text: "Is it really the battery? Read the signs" },
      { type: "image", src: "/images/frosty-dashboard-battery-warning.webp", alt: "Dashboard with the battery warning light lit on a frosty morning" },
      { type: "table", headers: ["What happens when you try to start", "What it often points to"], rows: [
        [<>{"Engine turns over slowly, then may or may not start"}</>, <>{"Weak or partly discharged battery"}</>],
        [<>{"Rapid clicking, dashboard lights dim or flicker"}</>, <>{"Battery too flat to turn the starter"}</>],
        [<>{"Nothing at all, no dashboard lights"}</>, <>{"Very flat battery or a poor battery connection"}</>],
        [<>{"Single click, lights stay bright"}</>, <>{"Possible starter motor or connection fault"}</>],
        [<>{"Engine turns over at normal speed but will not fire"}</>, <>{"Probably not the battery: fuel, ignition or immobiliser issue"}</>],
        [<>{"Battery or key warning light on the dashboard"}</>, <>{"Charging or key recognition problem"}</>]
      ] },
      { type: "paragraph", text: <>{"If the engine cranks at a normal speed but will not start, the battery is probably fine. Our guide to "}<a href="https://fsrrecoverygroups.co.uk/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"why a car won't start when the battery is fine"}</a>{" covers the other common causes."}</> },
      { type: "heading", level: 2, id: "first-get-safe", text: "First, get safe" },
      { type: "paragraph", text: <>{"On your own drive, safety is simple. On the roadside, it matters more:"}</> },
      { type: "list", items: [
        <><strong>{"On a motorway such as the A1(M):"}</strong>{" if the car has stopped in a live lane, or you cannot get to a safe place, switch on your hazard lights and, if it is safe, get out on the side away from traffic and behind the barrier. Call 999 if you feel at risk. National Highways can be contacted on 0300 123 5000."}</>,
        <><strong>{"On an A-road or country lane:"}</strong>{" pull as far off the road as you can, switch on hazard lights, and wait somewhere safe away from passing traffic, especially in the dark or fog."}</>,
        <><strong>{"Wear warm, visible clothing."}</strong>{" A cold morning stop can quickly become uncomfortable."}</>
      ] },
      { type: "paragraph", text: <>{"Do not attempt to jump start a car on a live carriageway or a motorway hard shoulder. Wait in a safe place and call for help."}</> },
      { type: "heading", level: 2, id: "before-you-try-again-quick-checks", text: "Before you try again: quick checks" },
      { type: "paragraph", text: <>{"If you are safely parked:"}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Switch off all electrical loads"}</strong>{": heater blower, heated screen and seats, lights, radio, phone chargers."}</>,
        <>{"2. "}<strong>{"Check the gear position."}</strong>{" Automatics usually need to be in Park; many manuals need the clutch fully pressed."}</>,
        <>{"3. "}<strong>{"Try one more start"}</strong>{", holding for a few seconds only. Repeated long attempts can drain what little charge is left."}</>,
        <>{"4. "}<strong>{"Look at the battery if you can see it"}</strong>{" without touching anything: obvious corrosion on the terminals, loose clamps, cracks, swelling or leaks."}</>
      ] },
      { type: "paragraph", text: <>{"If the battery case is cracked, swollen or leaking, or you can smell a strong rotten-egg odour, "}<strong>{"do not jump start it"}</strong>{". Call for help."}</> },
      { type: "heading", level: 2, id: "how-to-jump-start-a-car-safely", text: "How to jump start a car safely" },
      { type: "image", src: "/images/jump-leads-connected-safely.webp", alt: "Red and black jump leads connected to a car battery and an earth point" },
      { type: "paragraph", text: <>{"Which? advises that you should never jump start a battery if its fluids are frozen, and you should not use damaged or leaking batteries or leads. Always check your owner's handbook first: some cars have dedicated jump-start points under the bonnet rather than direct access to the battery, and some hybrid and electric cars have specific instructions."}</> },
      { type: "paragraph", text: <>{"If it is safe and your handbook allows it, the usual method with jump leads and a donor car is:"}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Park the donor car close"}</strong>{", without the cars touching. Turn both engines off, apply the handbrakes and put both cars in neutral or Park."}</>,
        <>{"2. "}<strong>{"Red lead to the flat battery's positive (+) terminal."}</strong></>,
        <>{"3. "}<strong>{"Other end of the red lead to the donor battery's positive (+) terminal."}</strong></>,
        <>{"4. "}<strong>{"Black lead to the donor battery's negative (-) terminal."}</strong></>,
        <>{"5. "}<strong>{"Other end of the black lead to an unpainted metal earth point"}</strong>{" on the car with the flat battery, away from the battery itself, or to the earth point the handbook shows."}</>,
        <>{"6. "}<strong>{"Start the donor car"}</strong>{" and let it run for a few minutes."}</>,
        <>{"7. "}<strong>{"Try to start the car with the flat battery."}</strong>{" If it starts, leave both running for a few minutes."}</>,
        <>{"8. "}<strong>{"Remove the leads in reverse order"}</strong>{", taking care not to let the clamps touch each other or any metal."}</>
      ] },
      { type: "paragraph", text: <>{"A portable jump pack follows a similar principle; follow the pack maker's instructions."}</> },
      { type: "paragraph", text: <>{"If the car still will not start after a couple of attempts, stop. Something other than a flat battery may be wrong, and repeated attempts can cause more problems."}</> },
      { type: "heading", level: 2, id: "it-started-what-now", text: "It started: what now?" },
      { type: "paragraph", text: <>{"A jump start gets the engine running, but it does not fully recharge the battery."}</> },
      { type: "list", items: [
        <><strong>{"Keep the engine running."}</strong>{" Do not switch it off straight away, or you may be back where you started."}</>,
        <><strong>{"Plan a proper drive"}</strong>{" if you can, rather than a short hop. AXA suggests a 30-minute drive weekly in winter to help keep a battery charged."}</>,
        <><strong>{"Keep electrical loads sensible"}</strong>{" until the battery has had time to recover."}</>,
        <><strong>{"Get the battery and charging system tested"}</strong>{" soon, at a garage or battery specialist. A test shows whether the battery can still hold charge and whether the alternator is charging it."}</>
      ] },
      { type: "heading", level: 2, id: "jump-start-replace-or-recover-how-to-decide", text: "Jump start, replace or recover? How to decide" },
      { type: "table", headers: ["Situation", "Likely next step"], rows: [
        [<>{"One-off flat after leaving a light on, battery fairly new"}</>, <>{"Jump start, then a good drive or a proper charge"}</>],
        [<>{"Slow cranking every cold morning, battery several years old"}</>, <>{"Have it tested; it may need replacing"}</>],
        [<>{"Needed a jump start more than once in a short time"}</>, <>{"Get the battery, charging system and any electrical drain checked"}</>],
        [<>{"Battery or charging warning light while driving"}</>, <>{"Charging fault likely; get it checked before relying on the car"}</>],
        [<>{"Battery cracked, swollen, leaking or frozen"}</>, <>{"Do not jump start; call for help"}</>],
        [<>{"Engine cranks normally but will not start"}</>, <>{"Not a battery problem; may need diagnosis or recovery to a garage"}</>],
        [<>{"Jump start does not work"}</>, <>{"Call for roadside assistance or recovery"}</>]
      ] },
      { type: "paragraph", text: <>{"A jump start is the right tool for a healthy battery that has been drained for a clear reason. It is not a cure for a battery that can no longer hold charge, or for a car that is not charging its battery properly."}</> },
      { type: "heading", level: 2, id: "when-to-call-for-roadside-help", text: "When to call for roadside help" },
      { type: "image", src: "/images/roadside-assistance-van-frosty-lay-by.webp", alt: "Roadside assistance van behind a broken-down car in a frosty rural lay-by" },
      { type: "paragraph", text: <>{"Call for help if:"}</> },
      { type: "list", items: [
        <>{"you do not have leads, a jump pack or a donor car;"}</>,
        <>{"you are on a busy road, a motorway or an unlit country lane;"}</>,
        <>{"the battery looks damaged, or you are not comfortable connecting leads;"}</>,
        <>{"the car will not start after a jump start;"}</>,
        <>{"the battery keeps going flat;"}</>,
        <>{"the car has a warning light you do not recognise."}</>
      ] },
      { type: "paragraph", text: <>{"FSR Recovery Group provides "}<a href="https://fsrrecoverygroups.co.uk/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jumpstart services"}</a>{" and wider "}<a href="https://fsrrecoverygroups.co.uk/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</a>{" across Darlington, County Durham, Teesside and North Yorkshire, including towns such as "}<a href="https://fsrrecoverygroups.co.uk/areas/middlesbrough" className="font-semibold text-red hover:underline">{"Middlesbrough"}</a>{" and "}<a href="https://fsrrecoverygroups.co.uk/areas/durham" className="font-semibold text-red hover:underline">{"Durham"}</a>{". If the car cannot be started at the roadside, our "}<a href="https://fsrrecoverygroups.co.uk/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</a>{" can take it to a garage of your choice."}</> },
      { type: "paragraph", text: <>{"When you call, it helps to tell us:"}</> },
      { type: "list", items: [
        <><strong>{"where you are"}</strong>{", as precisely as possible, such as a postcode, road name, junction number or what3words;"}</>,
        <><strong>{"the vehicle's make, model and fuel type"}</strong>{", and whether it is a hybrid or electric car;"}</>,
        <><strong>{"what happens when you try to start it"}</strong>{": slow cranking, clicking or nothing;"}</>,
        <><strong>{"whether you are in a safe place."}</strong></>
      ] },
      { type: "heading", level: 2, id: "how-to-avoid-a-flat-battery-this-winter", text: "How to avoid a flat battery this winter" },
      { type: "list", items: [
        <><strong>{"Drive longer journeys regularly"}</strong>{", especially if you mainly do short trips."}</>,
        <><strong>{"Switch off heaters, heated screens and lights"}</strong>{" before turning off the engine, so they are not all drawing power at the next start."}</>,
        <><strong>{"Have the battery tested before winter"}</strong>{", particularly if it is several years old or has been slow to crank."}</>,
        <><strong>{"Keep terminals clean and tight."}</strong></>,
        <><strong>{"Use a suitable battery charger or maintainer"}</strong>{" if the car stands for long periods."}</>,
        <><strong>{"Carry jump leads or a charged jump pack"}</strong>{", and know where your car's jump-start points are."}</>
      ] },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "paragraph", text: <><strong>{"Why does my car battery go flat in cold weather?"}</strong></> },
      { type: "paragraph", text: <>{"Cold slows the chemical reaction inside the battery, so it delivers less power, while a cold engine needs more power to turn over. Winter driving with heaters and lights on, plus short trips, can also leave the battery undercharged."}</> },
      { type: "paragraph", text: <><strong>{"Is it safe to jump start a car in freezing weather?"}</strong></> },
      { type: "paragraph", text: <>{"It can be, but Which? warns never to jump start a battery if its fluids are frozen, and not to use damaged or leaking batteries or leads. If in doubt, call for help."}</> },
      { type: "paragraph", text: <><strong>{"How long should I drive after a jump start?"}</strong></> },
      { type: "paragraph", text: <>{"Avoid switching off straight away. A longer drive gives the alternator time to recharge the battery; a short trip may not be enough. If it keeps going flat, have the battery and charging system tested."}</> },
      { type: "paragraph", text: <><strong>{"How do I know if my battery needs replacing?"}</strong></> },
      { type: "paragraph", text: <>{"Signs include slow cranking on cold mornings, needing more than one jump start in a short period, and an older battery. A battery test at a garage or battery specialist will show whether it can still hold charge."}</> },
      { type: "paragraph", text: <><strong>{"Can a battery be too flat to jump start?"}</strong></> },
      { type: "paragraph", text: <>{"Yes. If the battery is very old, damaged or deeply discharged, a jump start may not work. Repeated failed attempts suggest another fault or a battery that needs replacing."}</> },
      { type: "paragraph", text: <><strong>{"Can you jump start a hybrid or electric car?"}</strong></> },
      { type: "paragraph", text: <>{"Hybrid and electric cars still have a 12V battery that can go flat, but procedures vary by make and model. Always follow the owner's handbook, which may show dedicated jump-start points."}</> },
      { type: "paragraph", text: <><strong>{"What should I do if my car won't start on the A1(M)?"}</strong></> },
      { type: "paragraph", text: <>{"If you have stopped in a live lane or cannot reach a safe place, switch on your hazard lights and, if safe, exit on the side away from traffic and wait behind the barrier. Call 999 if you feel at risk. Do not try to jump start the car on a motorway."}</> },
      { type: "heading", level: 2, id: "flat-battery-call-fsr-recovery-group", text: "Flat battery? Call FSR Recovery Group" },
      { type: "paragraph", text: <>{"If your car will not start on a cold morning around Darlington, Durham, Teesside or North Yorkshire, and you are safe, call "}<strong>{"FSR Recovery Group"}</strong>{" on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a></strong>{". You can also WhatsApp the same number with your location, vehicle and what happens when you try to start it. We are based at 135 Gladstone Street, Darlington DL3 6LB, and our roadside assistance is available 24/7."}</> },
      { type: "paragraph", text: <>{"You can also use our "}<a href="https://fsrrecoverygroups.co.uk/contact" className="font-semibold text-red hover:underline">{"contact page"}</a>{", or read more practical guides on the "}<a href="https://fsrrecoverygroups.co.uk/blog" className="font-semibold text-red hover:underline">{"FSR Recovery Group blog"}</a>{"."}</> },
    ],
  },
  {
    slug: "run-out-of-fuel-what-to-do",
    title: "Run Out of Fuel? What to Do on the A1(M), A19 and North East Roads",
    metaTitle: "Run Out of Fuel? What to Do, Step by Step",
    metaDescription: "Run out of fuel in the North East? Where to stop, what not to do on a motorway, what to tell the operator, and how roadside fuel help or recovery works.",
    excerpt: "The fuel light has been on for longer than you meant it to be. The car coughs, loses power, and coasts to a stop. Running out of fuel is one of the most ordinary ways to break down, and it can still leave you in an awkward or dangerous place: a hard shoulder on the A1(M), a dark stretch of the A66 across the tops, or a narrow lane outside Barnard Castle with nowhere to pull in.",
    featuredImage: "/images/run-out-of-fuel-what-to-do-featured.webp",
    featuredImageAlt: "Car stopped on a motorway hard shoulder with hazard lights on after running out of fuel",
    publishedDate: "2026-11-21",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "12 min read",
    tags: ["out of fuel", "roadside assistance", "breakdown recovery", "A1(M)", "A19"],
    faqs: [
      {
        question: "What should I do first if I run out of fuel on the A1(M)?",
        answer: "Get into the left lane and stop on the hard shoulder or in an emergency area if you can, with hazard lights on. Leave by the side away from traffic, get behind the barrier, and call for help. If you cannot get out of a live lane safely, stay in the vehicle with your seat belt on and call 999.",
      },
      {
        question: "Can I walk to the next services or filling station?",
        answer: "Not along a motorway or a fast road. National Highways advises waiting well away from your vehicle and moving traffic, behind the safety barrier where there is one. Call for help instead.",
      },
      {
        question: "Should I put a warning triangle out?",
        answer: "Never on a motorway. On an ordinary road, the Highway Code says a warning triangle can be placed at least 45 metres behind the vehicle on the same side of the road, but only if it is safe to do so.",
      },
      {
        question: "Will my car start straight away once fuel is added?",
        answer: "Often, but not always. Some vehicles take a few attempts to draw fuel through, and some diesels need more than fuel after running dry. If it still will not start, another fault may be involved and further assistance or recovery can be discussed.",
      },
      {
        question: "What if I put the wrong fuel in rather than running out?",
        answer: "That is a different problem. Do not start the engine if you have not already, and explain exactly what happened when you call so the right help can be discussed.",
      },
      {
        question: "Is roadside fuel help available at night?",
        answer: "Yes. FSR Recovery Group's emergency refueling assistance is available 24/7 for genuine out-of-fuel situations.",
      }
    ],
    content: [
      {
        type: "paragraph",
        text: "The fuel light has been on for longer than you meant it to be. The car coughs, loses power, and coasts to a stop. Running out of fuel is one of the most ordinary ways to break down, and it can still leave you in an awkward or dangerous place: a hard shoulder on the A1(M), a dark stretch of the A66 across the tops, or a narrow lane outside Barnard Castle with nowhere to pull in.",
      },
      {
        type: "paragraph",
        text: "This guide is for drivers around Darlington, Durham, Teesside and North Yorkshire. It covers what to do in the first few minutes, what not to do, how to describe where you are, and how roadside fuel assistance or recovery usually works once you are safe. It is written in the order you need it: safety first, then help.",
      },
      { type: "heading", level: 2, id: "the-short-answer", text: "The short answer" },
      {
        type: "paragraph",
        text: "If you are running out of fuel, or the vehicle has already stopped:",
      },
      {
        type: "list",
        items: [
          (
          <>
            {"1. "}
            <strong>{"Get off the live road if you can."}</strong>
            {" Leave at the next exit, or use a service area, lay-by or car park. On a motorway, if you cannot leave, get into the left lane and stop on the hard shoulder or in an emergency area."}
          </>
        ),
          (
          <>
            {"2. "}
            <strong>{"Hazard lights on."}</strong>
            {" Sidelights too if it is dark or visibility is poor."}
          </>
        ),
          (
          <>
            {"3. "}
            <strong>{"Get yourself and passengers safe."}</strong>
            {" On a motorway or fast road, leave by the side away from traffic and wait behind the barrier if there is one."}
          </>
        ),
          (
          <>
            {"4. "}
            <strong>{"Do not walk to a filling station"}</strong>
            {" along a motorway or fast road."}
          </>
        ),
          (
          <>
            {"5. "}
            <strong>{"Call for help"}</strong>
            {" with your location, direction of travel, vehicle and fuel type ready."}
          </>
        ),
        ],
      },
      {
        type: "paragraph",
        text: "If you cannot get out of a live lane safely, stay in the vehicle with your seat belt and hazard lights on, and call 999 for the police.",
      },
      { type: "heading", level: 2, id: "before-the-tank-runs-dry-when-the-fuel-light-comes-on", text: "Before the tank runs dry: when the fuel light comes on" },
      {
        type: "paragraph",
        text: "The best time to deal with low fuel is before the engine stops. There is no single rule for how far a car will go once the warning light comes on. It depends on the vehicle, the load, the road and the weather, and a car that is cold, heavily loaded or climbing towards Bowes on the A66 will use fuel differently from one on a flat run. Treat the light as a firm instruction, not a challenge.",
      },
      { type: "image", src: "/images/low-fuel-warning-light-dashboard.webp", alt: "Low fuel warning light glowing on a car dashboard at dusk" },
      {
        type: "paragraph",
        text: "Practical steps once the light comes on:",
      },
      {
        type: "list",
        items: [
          (
          <>
            <strong>{"Plan the nearest fuel stop now,"}</strong>
            {" not the one you would usually use. Some stops on rural roads and quieter A-roads may be closed late at night."}
          </>
        ),
          (
          <>
            <strong>{"Drive smoothly."}</strong>
            {" Gentle acceleration and steady speeds are kinder to what is left in the tank."}
          </>
        ),
          (
          <>
            <strong>{"Choose where you might stop."}</strong>
            {" If you think you will not make it, start looking for a lay-by, a service area or a slip road exit rather than waiting for the engine to cut out in a live lane."}
          </>
        ),
        ],
      },
      {
        type: "paragraph",
        text: "If the car begins to hesitate, lose power or surge, take it as the final warning and get off the carriageway while you still have some control.",
      },
      { type: "heading", level: 2, id: "if-you-run-out-on-the-a1-m-or-another-motorway", text: "If you run out on the A1(M) or another motorway" },
      {
        type: "paragraph",
        text: "Some North East routes are motorway, signed A1(M), and some are ordinary dual carriageway. If you are not sure which you are on, treat it as a motorway. National Highways' advice for a vehicle problem on a motorway is to leave at the next exit or pull into a service area if possible. If you cannot, it is \"Go left, get safe, get help\":",
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"Go left"}</strong>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Move into the left lane.",
          "Pull into an emergency area or onto the hard shoulder if you can.",
          "Stop as far left as possible, with your wheels turned to the left, leaving space to get out.",
          "If you can, stop just beyond an emergency telephone.",
          "Hazard lights on; sidelights if it is dark or visibility is poor.",
        ],
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"Get safe"}</strong>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Leave the vehicle by the side away from traffic, if it is safe and possible, and make sure passengers do the same.",
          "Put on high-visibility clothing if it is within easy reach.",
          "Get behind the safety barrier where there is one, keeping an eye out for drops, uneven ground or debris.",
          "Do not return to the vehicle, even if it is cold, wet or dark.",
          (
          <>
            <strong>{"Do not place a warning triangle on the carriageway."}</strong>
          </>
        ),
          "Do not attempt repairs on the vehicle.",
        ],
      },
      { type: "image", src: "/images/out-of-fuel-waiting-behind-barrier.webp", alt: "Driver in a high-visibility vest waiting behind a motorway safety barrier, well away from traffic" },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"Get help"}</strong>
          </>
        ),
      },
      {
        type: "list",
        items: [
          "Use the free emergency telephone, or call National Highways on 0300 123 5000.",
          "Contact a breakdown recovery service.",
          "Face the traffic while you speak.",
        ],
      },
      {
        type: "paragraph",
        text: "The Highway Code says the same in its breakdowns and incidents rules (Rule 277 for motorways), and reminds drivers that the safest place to stop on a high-speed road is a service area. Hard shoulders give less protection than other places because they are so close to fast traffic.",
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"Do not walk along the motorway to the next services or junction"}</strong>
            {" with a can. Wait behind the barrier for help to come to you."}
          </>
        ),
      },
      {
        type: "paragraph",
        text: (
          <>
            {"For more on the A1(M) specifically, see our guide to "}
            <a href="https://fsrrecoverygroups.co.uk/blog/broken-down-on-the-a1m" className="font-semibold text-red hover:underline">{"breaking down on the A1(M)"}</a>
            {" and our "}
            <a href="https://fsrrecoverygroups.co.uk/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M) area page"}</a>
            {"."}
          </>
        ),
      },
      { type: "heading", level: 2, id: "if-you-run-out-on-an-a-road-or-country-lane", text: "If you run out on an A-road or country lane" },
      {
        type: "paragraph",
        text: "Many North East fuel stops happen away from the motorway: the A19 through Teesside, the A66 between Scotch Corner and Penrith, the A167 or A68, or a rural lane where filling stations are far apart. The principles are the same, adapted to the road:",
      },
      { type: "image", src: "/images/out-of-fuel-rural-lay-by-a66.webp", alt: "Car pulled into a rural lay-by on an upland A-road in winter with hazard lights on" },
      {
        type: "list",
        items: [
          (
          <>
            <strong>{"Use the last of your momentum."}</strong>
            {" As the engine falters, aim for a lay-by, a field gateway that is not in use, a car park or a wide verge on a straight stretch, rather than a bend or the brow of a hill."}
          </>
        ),
          (
          <>
            <strong>{"Hazard lights on."}</strong>
            {" Sidelights if visibility is poor."}
          </>
        ),
          (
          <>
            <strong>{"Get passengers out and away from traffic"}</strong>
            {" if it is safe, and wait somewhere well clear of the road."}
          </>
        ),
          (
          <>
            <strong>{"Warning triangle on ordinary roads only."}</strong>
            {" The Highway Code allows a warning triangle on an ordinary road if it is safe to place, at least 45 metres behind the vehicle on the same side of the road. Never use one on a motorway, and do not put yourself at risk placing it on a fast or busy road."}
          </>
        ),
          (
          <>
            <strong>{"Keep warm and visible."}</strong>
            {" On the A66 or upland roads in winter, the temperature can drop quickly. Take coats and a phone with you if you leave the vehicle."}
          </>
        ),
        ],
      },
      {
        type: "paragraph",
        text: "If you are blocking the road, are in a dangerous position, or anyone is unwell or injured, call 999 first.",
      },
      {
        type: "paragraph",
        text: (
          <>
            {"You can read more about local routes on our "}
            <a href="https://fsrrecoverygroups.co.uk/areas/a19" className="font-semibold text-red hover:underline">{"A19"}</a>
            {" and "}
            <a href="https://fsrrecoverygroups.co.uk/areas/a66" className="font-semibold text-red hover:underline">{"A66"}</a>
            {" area pages."}
          </>
        ),
      },
      { type: "heading", level: 2, id: "what-not-to-do-when-you-have-run-out-of-fuel", text: "What not to do when you have run out of fuel" },
      {
        type: "paragraph",
        text: "A few common reactions make things worse:",
      },
      {
        type: "list",
        items: [
          (
          <>
            <strong>{"Do not keep turning the key or pressing start."}</strong>
            {" Repeated cranking on an empty tank drains the battery and, on some vehicles, can leave you with a second problem to deal with."}
          </>
        ),
          (
          <>
            <strong>{"Do not walk along a motorway or fast road for fuel."}</strong>
            {" Wait for help in a safe place."}
          </>
        ),
          (
          <>
            <strong>{"Do not try to push the vehicle on a live road."}</strong>
            {" It is heavier and harder to control than it looks, especially on a slope."}
          </>
        ),
          (
          <>
            <strong>{"Do not use an improvised container."}</strong>
            {" If someone brings fuel to you, it should be in a container designed for fuel."}
          </>
        ),
        ],
      },
      { type: "heading", level: 2, id: "petrol-diesel-wrong-fuel-or-an-electric-car", text: "Petrol, diesel, wrong fuel or an electric car?" },
      {
        type: "paragraph",
        text: "Tell the operator exactly what you are driving and what happened, because the right help depends on it.",
      },
      {
        type: "list",
        items: [
          (
          <>
            <strong>{"Petrol:"}</strong>
            {" many petrol vehicles restart once enough fuel has been added, although it can take a few turns of the key to draw fuel through."}
          </>
        ),
          (
          <>
            <strong>{"Diesel:"}</strong>
            {" some diesel vehicles need more than fuel to restart after running completely dry, because air can get into the fuel system. Your vehicle handbook may describe what is needed. Mention it on the call."}
          </>
        ),
          (
          <>
            <strong>{"Wrong fuel:"}</strong>
            {" if you have put the wrong fuel in, that is a different problem from running out. Do not start the engine if you have not already, and say clearly on the call what has happened so the right help can be discussed."}
          </>
        ),
          (
          <>
            <strong>{"Electric vehicles:"}</strong>
            {" if an electric car has run out of charge, fuel obviously will not help. Tell the operator the make and model so they can say what assistance is suitable."}
          </>
        ),
        ],
      },
      { type: "heading", level: 2, id: "how-to-describe-your-location", text: "How to describe your location" },
      {
        type: "paragraph",
        text: "A clear location helps whoever is coming to find you. Have these ready:",
      },
      {
        type: "list",
        items: [
          (
          <>
            <strong>{"Road number and direction of travel."}</strong>
            {" For example, \"A1(M) northbound\" or \"A66 westbound towards Penrith\"."}
          </>
        ),
          (
          <>
            <strong>{"Nearest junction or landmark."}</strong>
            {" The last junction you passed, the next one signed, or a village, roundabout or service area you recognise."}
          </>
        ),
          (
          <>
            <strong>{"Marker posts or driver location signs."}</strong>
            {" On motorways, small blue signs and marker posts give a reference that helps pinpoint where you are."}
          </>
        ),
          (
          <>
            <strong>{"What3words or a map pin"}</strong>
            {", if you have it and your phone has signal."}
          </>
        ),
          (
          <>
            <strong>{"Which side of the road"}</strong>
            {" you are on, and whether you are on the hard shoulder, in a lay-by or on a verge."}
          </>
        ),
        ],
      },
      {
        type: "paragraph",
        text: (
          <>
            {"Our "}
            <a href="https://fsrrecoverygroups.co.uk/areas" className="font-semibold text-red hover:underline">{"areas page"}</a>
            {" lists the towns and main roads FSR Recovery Group covers, including Durham, Bishop Auckland, Northallerton, Middlesbrough and Barnard Castle, and the A1(M), A66, A19, A67, A68 and A167."}
          </>
        ),
      },
      { type: "heading", level: 2, id: "how-roadside-fuel-assistance-usually-works", text: "How roadside fuel assistance usually works" },
      {
        type: "paragraph",
        text: (
          <>
            {"Once you are safe, you can call "}
            <strong>{"FSR Recovery Group"}</strong>
            {" on "}
            <a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a>
            {", or WhatsApp the same number. Our "}
            <a href="https://fsrrecoverygroups.co.uk/services/refueling" className="font-semibold text-red hover:underline">{"emergency refueling service"}</a>
            {" is for genuine out-of-fuel situations with suitable cars and light vans. It is available 24/7."}
          </>
        ),
      },
      {
        type: "paragraph",
        text: "When you call, have this information ready:",
      },
      {
        type: "list",
        items: [
          (
          <>
            {"1. "}
            <strong>{"Your location and direction of travel,"}</strong>
            {" as above."}
          </>
        ),
          (
          <>
            {"2. "}
            <strong>{"Vehicle make and model,"}</strong>
            {" and whether it is a car or light van."}
          </>
        ),
          (
          <>
            {"3. "}
            <strong>{"The fuel type the vehicle needs,"}</strong>
            {" if you know it. If you are not sure, check the fuel filler flap or the handbook."}
          </>
        ),
          (
          <>
            {"4. "}
            <strong>{"What happened before it stopped."}</strong>
            {" Did it run out gradually, or were there warning lights, noises or loss of power beforehand?"}
          </>
        ),
          (
          <>
            {"5. "}
            <strong>{"Where you are waiting,"}</strong>
            {" and whether anyone with you is vulnerable, elderly or has young children."}
          </>
        ),
        ],
      },
      {
        type: "paragraph",
        text: "Where appropriate, enough fuel can be provided to help you restart and continue to a nearby filling station or a suitable destination. The aim is to get you moving, not to fill the tank, so plan your next fuel stop straight away.",
      },
      {
        type: "paragraph",
        text: (
          <>
            {"If the vehicle still does not start after fuel has been added, another fault may be involved. That might be a flat battery after repeated cranking, a diesel that needs more attention, or something unrelated to fuel. In that case, further "}
            <a href="https://fsrrecoverygroups.co.uk/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</a>
            {", a "}
            <a href="https://fsrrecoverygroups.co.uk/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jumpstart"}</a>
            {" or "}
            <a href="https://fsrrecoverygroups.co.uk/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</a>
            {" can be discussed. If you find the car will not start for reasons that do not seem to be fuel or battery, our guide to "}
            <a href="https://fsrrecoverygroups.co.uk/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"a car that won't start when the battery is fine"}</a>
            {" may help."}
          </>
        ),
      },
      { type: "heading", level: 2, id: "how-to-avoid-running-out-again", text: "How to avoid running out again" },
      {
        type: "paragraph",
        text: "Once you are moving, a few habits make a repeat less likely:",
      },
      {
        type: "list",
        items: [
          (
          <>
            <strong>{"Refuel at a quarter of a tank"}</strong>
            {" on longer journeys, especially on rural routes and at night."}
          </>
        ),
          (
          <>
            <strong>{"Know your stops."}</strong>
            {" On regular routes such as the A1(M), A66 or A19, know where you would fuel up and which places are likely to be closed late."}
          </>
        ),
          (
          <>
            <strong>{"Allow for diversions and delays."}</strong>
            {" Closures, queues and winter conditions can add miles and engine-running time you did not plan for."}
          </>
        ),
        ],
      },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"What should I do first if I run out of fuel on the A1(M)?"}</strong>
          </>
        ),
      },
      {
        type: "paragraph",
        text: "Get into the left lane and stop on the hard shoulder or in an emergency area if you can, with hazard lights on. Leave by the side away from traffic, get behind the barrier, and call for help. If you cannot get out of a live lane safely, stay in the vehicle with your seat belt on and call 999.",
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"Can I walk to the next services or filling station?"}</strong>
          </>
        ),
      },
      {
        type: "paragraph",
        text: "Not along a motorway or a fast road. National Highways advises waiting well away from your vehicle and moving traffic, behind the safety barrier where there is one. Call for help instead.",
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"Should I put a warning triangle out?"}</strong>
          </>
        ),
      },
      {
        type: "paragraph",
        text: "Never on a motorway. On an ordinary road, the Highway Code says a warning triangle can be placed at least 45 metres behind the vehicle on the same side of the road, but only if it is safe to do so.",
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"Will my car start straight away once fuel is added?"}</strong>
          </>
        ),
      },
      {
        type: "paragraph",
        text: "Often, but not always. Some vehicles take a few attempts to draw fuel through, and some diesels need more than fuel after running dry. If it still will not start, another fault may be involved and further assistance or recovery can be discussed.",
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"What if I put the wrong fuel in rather than running out?"}</strong>
          </>
        ),
      },
      {
        type: "paragraph",
        text: "That is a different problem. Do not start the engine if you have not already, and explain exactly what happened when you call so the right help can be discussed.",
      },
      {
        type: "paragraph",
        text: (
          <>
            <strong>{"Is roadside fuel help available at night?"}</strong>
          </>
        ),
      },
      {
        type: "paragraph",
        text: "Yes. FSR Recovery Group's emergency refueling assistance is available 24/7 for genuine out-of-fuel situations.",
      },
      { type: "heading", level: 2, id: "run-out-of-fuel-call-fsr-recovery-group", text: "Run out of fuel? Call FSR Recovery Group" },
      {
        type: "paragraph",
        text: (
          <>
            {"If you have run out of fuel around Darlington, Durham, Teesside or North Yorkshire, and you are safe — or you have already called 999 if you are not — contact "}
            <strong>{"FSR Recovery Group"}</strong>
            {" on "}
            <a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a>
            {". You can also WhatsApp the same number with your location, vehicle and fuel type. We are based at 135 Gladstone Street, Darlington DL3 6LB, and our roadside assistance is available 24/7."}
          </>
        ),
      },
      {
        type: "paragraph",
        text: (
          <>
            {"You can also use our "}
            <a href="https://fsrrecoverygroups.co.uk/contact" className="font-semibold text-red hover:underline">{"contact page"}</a>
            {", or read more practical guides on the "}
            <a href="https://fsrrecoverygroups.co.uk/blog" className="font-semibold text-red hover:underline">{"FSR Recovery Group blog"}</a>
            {"."}
          </>
        ),
      },
    ],
  },
  {
    slug: "broken-down-on-the-a1m",
    title: "Broken Down on the A1(M)? What to Do Around Durham, Darlington and Scotch Corner",
    metaTitle: "Broken Down on the A1(M)? What to Do",
    metaDescription: "What to do if you break down on the A1(M) in the North East: official safety steps, how to describe your junction and direction, and when to call for recovery.",
    excerpt: "An A1(M) breakdown can leave you deciding what to do while traffic keeps passing. A warning light, a damaged tyre or sudden loss of power needs a different response here from the one you would make on your drive.",
    featuredImage: "/images/broken-down-a1m-featured.webp",
    featuredImageAlt: "Dark hatchback stopped on an A1(M) motorway hard shoulder with hazard lights, titled Broken Down on the A1(M)? What to Do",
    publishedDate: "2026-11-20",
    updatedDate: "2026-11-23",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "11 min read",
    tags: ["A1(M)", "breakdown recovery", "roadside assistance", "motorway safety"],
    faqs: [
      { question: "What should I do first if I break down on the A1(M)?", answer: "Reach an exit or service area if the vehicle can safely get there. Otherwise move left, stop in an available hard shoulder or emergency area, and use hazards. Leave and get clear only if safe; if trapped in danger, stay belted in and call 999." },
      { question: "Should I put a warning triangle out on the A1(M)?", answer: "No. Do not place a warning triangle on a motorway or carriageway. Do not walk back towards traffic to make your car more visible. Use hazard lights, get clear if safe, and tell the emergency or recovery operator where you have stopped." },
      { question: "Who do I call: 999, National Highways or a recovery company?", answer: "Call 999 for police assistance when you cannot reach safety or leave safely. For a breakdown where you are safely clear, contact National Highways on 0300 123 5000 and a recovery company. Report injuries or immediate danger to the emergency services." },
      { question: "How can I explain where I am on the A1(M)?", answer: "Give your direction, the last confirmed junction and any visible marker reference. Describe where the vehicle is stopped and where you are waiting. A safely shared map pin can help. Tell the operator when a junction or place name is only a guess." },
      { question: "Are the A1 and A1(M) the same around Durham and Darlington?", answer: "No. The route name includes motorway and non-motorway sections. Read the designation shown for your current position and report it accurately. Follow motorway advice on A1(M) sections; do not assume that an ordinary-road instruction applies throughout your journey." },
      { question: "What if I stop in a live lane with no way to reach the hard shoulder?", answer: "Stay in the vehicle if you cannot get clear safely. Keep seat belts fastened and hazards on, call 999 and ask for the police. Use the SOS button if available. Do not try to push the vehicle or walk across live lanes." },
      { question: "Can FSR Recovery Group help near Durham or Darlington?", answer: "Yes. FSR Recovery Group provides 24/7 car and light-van recovery across its A1(M) service area. Call with your exact position and vehicle details so the operator can confirm arrangements. Emergency assistance comes first if you are still in danger." }
    ],
    content: [
      { type: "paragraph", text: "Last updated: 23 November 2026." },
      { type: "paragraph", text: <>{"An A1(M) breakdown can leave you deciding what to do while traffic keeps passing. A warning light, a damaged tyre or sudden loss of power needs a different response here from the one you would make on your drive."}</> },
      { type: "paragraph", text: <>{"This guide puts those decisions in order for drivers around Durham, Darlington and Scotch Corner. Start with your position on the road, then the people in your vehicle, then the calls for help. Leave the diagnosis until you are somewhere safer."}</> },
      { type: "heading", level: 2, id: "broken-down-on-the-a1-m-start-with-these-decisions", text: "Broken down on the A1(M)? Start with these decisions" },
      { type: "image", src: "/images/a1m-hard-shoulder-hazards.webp", alt: "Dark hatchback stopped on a motorway hard shoulder with hazard lights on in overcast daylight" },
      { type: "paragraph", text: <>{"Your first decision is whether you can reach a stopping place away from moving traffic. Do not make checking the engine your first task."}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Still able to drive safely?"}</strong>{" Leave at the next exit or enter a service area if possible. Do not continue solely to reach your preferred garage."}</>,
        <>{"2. "}<strong>{"Unable to leave the motorway?"}</strong>{" Move left and use a hard shoulder or emergency area where you can. Stop as far left as possible, leaving space to leave the vehicle, and turn your wheels left."}</>,
        <>{"3. "}<strong>{"Once stopped:"}</strong>{" use hazard warning lights, with sidelights if visibility is poor or it is dark."}</>,
        <>{"4. "}<strong>{"Safe to leave?"}</strong>{" Use the side away from traffic and move well clear, behind a barrier where available. Keep passengers together and away from the road."}</>,
        <>{"5. "}<strong>{"Unable to get clear safely?"}</strong>{" Remain belted in, keep the hazards on and call 999 for the police. Otherwise, contact National Highways and a recovery operator from your safer waiting position."}</>
      ] },
      { type: "paragraph", text: <>{"Read the fuller steps below only when you can use your phone safely. A passenger can help with the call, but nobody should step towards traffic to read a sign or investigate the fault."}</> },
      { type: "heading", level: 2, id: "a1-or-a1-m-check-which-road-you-are-on", text: "A1 or A1(M): check which road you are on" },
      { type: "paragraph", text: <>{"The motorway designation matters more than how familiar the route feels. The wider A1 route includes motorway and non-motorway sections; do not assume that advice for an ordinary road applies wherever you see “A1”."}</> },
      { type: "paragraph", text: <>{"When speaking to an operator, use the road designation shown on signs or your map, together with your direction. Say if you are on a slip road, in a service area or on the main carriageway. Those details describe different access problems."}</> },
      { type: "paragraph", text: <>{"On A1(M) sections, use motorway breakdown guidance. "}<strong>{"Do not put out a warning triangle on a motorway or carriageway."}</strong>{" Do not walk along the road looking for a garage or filling station. Calling from a safer position is the next step."}</> },
      { type: "paragraph", text: <>{"If you have already left onto another road, explain that change. “Off the A1(M), stopped on the approach to the roundabout” gives a different starting point from “on the motorway”. Do not try to return to the motorway to make the collection easier."}</> },
      { type: "paragraph", text: <>{"Our "}<a href="https://fsrrecoverygroups.co.uk/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M) recovery area page"}</a>{" describes FSR Recovery Group’s regional coverage. This guide explains the safety decisions before a recovery can take place."}</> },
      { type: "heading", level: 2, id: "official-safety-steps-stop-get-clear-and-report-the-breakdown", text: "Official safety steps: stop, get clear and report the breakdown" },
      { type: "image", src: "/images/a1m-behind-barrier-safe.webp", alt: "Driver waiting behind a motorway safety barrier away from a stopped vehicle and passing traffic" },
      { type: "paragraph", text: <>{"The stopping and waiting sequence below follows "}<a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="font-semibold text-red hover:underline">{"National Highways’ motorway breakdown guidance"}</a>{" and "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"The Highway Code, rules 275–279"}</a>{". Follow police or traffic officer instructions at the scene."}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Choose the best available stopping place."}</strong>{" If the vehicle can safely reach an exit or service area, leave the carriageway. A hard shoulder remains close to traffic, so reaching it does not end the risk."}</>,
        <>{"2. "}<strong>{"Make your stopped vehicle visible."}</strong>{" Switch on hazards and use sidelights in darkness or poor visibility. Do not stand where you hide the lights from approaching drivers."}</>,
        <>{"3. "}<strong>{"Leave only when it is safe."}</strong>{" Get out on the side furthest from traffic. Help passengers follow that route rather than opening doors towards passing vehicles."}</>,
        <>{"4. "}<strong>{"Move away from the vehicle."}</strong>{" Use a barrier where there is one, checking for uneven ground, drops or debris before stepping behind it. Keep out of the path your vehicle could take if another vehicle struck it."}</>,
        <>{"5. "}<strong>{"Leave repairs for a safer location."}</strong>{" Do not change a wheel, connect jump leads or inspect the underside on the hard shoulder. Do not put out a warning triangle. A small fault does not make the roadside a safe workshop."}</>,
        <>{"6. "}<strong>{"Report your situation."}</strong>{" Use an emergency telephone where provided and safely accessible, or call National Highways on 0300 123 5000. Contact your recovery operator too. Face approaching traffic while using the phone."}</>
      ] },
      { type: "paragraph", text: <>{"Keep children under control and away from the carriageway. Animals should stay in the vehicle unless an emergency means they must be kept under control on the verge."}</> },
      { type: "paragraph", text: <>{"Do not return to sit in the vehicle because the weather is unpleasant. If you cannot leave safely in the first place, use the emergency procedure below instead of attempting these steps at any cost."}</> },
      { type: "heading", level: 2, id: "how-to-describe-your-location-around-durham-darlington-and-scotch-corner", text: "How to describe your location around Durham, Darlington and Scotch Corner" },
      { type: "image", src: "/images/a1m-marker-post-location.webp", alt: "Motorway location marker beside the A1(M) for reporting a breakdown location" },
      { type: "paragraph", text: <>{"Give the operator a road, a direction and a landmark before explaining the mechanical problem. “A1(M) southbound, beyond the last junction I passed” starts a useful conversation; a town name alone can still leave uncertainty about the carriageway."}</> },
      { type: "paragraph", text: <>{"Use junctions you actually remember. Useful junction references on this stretch include Junctions 62, 61, 60 and 59. They help describe where you stopped; they do not mean an operator can enter the motorway beside your vehicle."}</> },
      { type: "paragraph", text: <>{"For journeys around "}<a href="https://fsrrecoverygroups.co.uk/areas/durham" className="font-semibold text-red hover:underline">{"Durham"}</a>{", say whether the last sign you recognised showed Junction 62 or Junction 61. Further along the corridor, report Junction 60 or Junction 59 if those are the numbers you saw. Never choose one simply because it sounds nearby."}</> },
      { type: "paragraph", text: <>{"Scotch Corner is the A66 connection at A1(M) Junction 53. If you have turned towards the "}<a href="https://fsrrecoverygroups.co.uk/areas/a66" className="font-semibold text-red hover:underline">{"A66"}</a>{", say whether you have left the A1(M), rather than describing the whole journey as a motorway breakdown."}</> },
      { type: "paragraph", text: <>{"Add these details when you can obtain them without approaching traffic:"}</> },
      { type: "list", items: [
        <>{"The letters and numbers on a visible driver location sign or marker post."}</>,
        <>{"Whether you are northbound or southbound, and before or after the junction you remember."}</>,
        <>{"Your stopping place: hard shoulder, emergency area, slip road, service area or live lane."}</>,
        <>{"A map location you can share from where you are safely waiting."}</>,
        <>{"Any uncertainty: say “I think” rather than presenting a guess as confirmed."}</>
      ] },
      { type: "paragraph", text: <>{"A journey towards "}<a href="https://fsrrecoverygroups.co.uk/areas/bishop-auckland" className="font-semibold text-red hover:underline">{"Bishop Auckland"}</a>{" or "}<a href="https://fsrrecoverygroups.co.uk/areas/northallerton" className="font-semibold text-red hover:underline">{"Northallerton"}</a>{" can help explain your route, but give your present position first. Your intended destination is not necessarily near the place you stopped."}</> },
      { type: "heading", level: 2, id: "if-you-cannot-get-off-the-carriageway", text: "If you cannot get off the carriageway" },
      { type: "paragraph", text: <>{"A vehicle stopped in a live lane is an emergency. If you cannot reach a safer position and get well clear safely, stay in the vehicle, keep everyone’s seat belts fastened and leave the hazard lights on. Call 999 immediately and ask for the police."}</> },
      { type: "paragraph", text: <>{"Use the vehicle’s SOS button if available and ask for the police. Explain that you are stopped in a live lane, then give your road, direction and best available location. Do not postpone that call while arranging a tow."}</> },
      { type: "paragraph", text: <>{"Do not push the vehicle, stand behind it to wave traffic around, or cross live lanes. A recovery booking cannot provide the lane protection that the emergency services may need to arrange."}</> },
      { type: "paragraph", text: <>{"If a disability prevents you or a passenger from getting out and reaching safety, explain this immediately. The Highway Code’s Rule 279 advises staying belted in with hazards on and calling 999 for police assistance in these circumstances."}</> },
      { type: "paragraph", text: <>{"Tell a recovery operator once the emergency call has been made. Make clear whether police assistance is already arranged and whether your position has changed. Follow the emergency operator’s directions if they differ from a general checklist."}</> },
      { type: "heading", level: 2, id: "waiting-safely-passengers-weather-and-changing-conditions", text: "Waiting safely: passengers, weather and changing conditions" },
      { type: "paragraph", text: <>{"Keep watching the road while you wait, even after somebody confirms that help has been arranged. A booking does not remove the risk from passing vehicles, debris or a vehicle moving after an impact."}</> },
      { type: "paragraph", text: <>{"If you have left the car safely, remain away from it and traffic. Keep children close enough to supervise. Tell the operator about anyone who is disabled, older, travelling alone or otherwise needs extra help; do not assume those needs are obvious over the phone."}</> },
      { type: "paragraph", text: <>{"Cold, rain and darkness can make the vehicle feel like the easier place to wait. Official motorway advice says not to return for shelter. Explain any difficulty to the operator instead of changing position without telling anyone."}</> },
      { type: "paragraph", text: <>{"If the situation becomes more dangerous, or somebody becomes injured or unwell, contact the emergency services. Give the new information clearly, including whether you are outside the vehicle or still inside it. Do not leave somebody else to guess what has changed."}</> },
      { type: "heading", level: 2, id: "what-recovery-usually-involves-once-you-are-safe", text: "What recovery usually involves once you are safe" },
      { type: "paragraph", text: <>{"Recovery starts with confirming the location, the vehicle and what prevents it continuing. Tell the operator whether it is a car or light van, its make and model, what happened before it stopped, and whether it starts, rolls and steers."}</> },
      { type: "paragraph", text: <>{"Also describe the people travelling with you and your preferred destination. A garage, home address or another agreed place needs to be discussed before the move. Explain if you do not yet know where the vehicle should go."}</> },
      { type: "paragraph", text: <><a href="https://fsrrecoverygroups.co.uk/services/roadside-assistance" className="font-semibold text-red hover:underline">{"Roadside assistance"}</a>{" may suit some faults, but a motorway stopping place can limit what is sensible there. Do not attempt a repair yourself while waiting for an operator to decide how to help."}</> },
      { type: "paragraph", text: <>{"Where the vehicle cannot safely continue, "}<a href="https://fsrrecoverygroups.co.uk/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</a>{" can move it to an agreed destination. Describe collision damage, a locked wheel or steering trouble when booking; these affect collection arrangements even when the original fault sounds straightforward."}</> },
      { type: "paragraph", text: <>{"If the vehicle has left the carriageway onto a verge, say so. A "}<a href="https://fsrrecoverygroups.co.uk/services/winch-out" className="font-semibold text-red hover:underline">{"winch-out"}</a>{" may be considered only after access, ground conditions and the vehicle’s position have been assessed. Do not attempt to drive it back into moving traffic."}</> },
      { type: "paragraph", text: <>{"For a journey continuing west from Scotch Corner, our "}<a href="https://fsrrecoverygroups.co.uk/blog/broken-down-on-the-a66-in-winter" className="font-semibold text-red hover:underline">{"A66 winter breakdown guide"}</a>{" covers that separate road. Use the guidance for the road you are on now, rather than applying one route’s stopping arrangements to another."}</> },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "paragraph", text: <><strong>{"What should I do first if I break down on the A1(M)?"}</strong></> },
      { type: "paragraph", text: <>{"Reach an exit or service area if the vehicle can safely get there. Otherwise move left, stop in an available hard shoulder or emergency area, and use hazards. Leave and get clear only if safe; if trapped in danger, stay belted in and call 999."}</> },
      { type: "paragraph", text: <><strong>{"Should I put a warning triangle out on the A1(M)?"}</strong></> },
      { type: "paragraph", text: <>{"No. Do not place a warning triangle on a motorway or carriageway. Do not walk back towards traffic to make your car more visible. Use hazard lights, get clear if safe, and tell the emergency or recovery operator where you have stopped."}</> },
      { type: "paragraph", text: <><strong>{"Who do I call: 999, National Highways or a recovery company?"}</strong></> },
      { type: "paragraph", text: <>{"Call 999 for police assistance when you cannot reach safety or leave safely. For a breakdown where you are safely clear, contact National Highways on 0300 123 5000 and a recovery company. Report injuries or immediate danger to the emergency services."}</> },
      { type: "paragraph", text: <><strong>{"How can I explain where I am on the A1(M)?"}</strong></> },
      { type: "paragraph", text: <>{"Give your direction, the last confirmed junction and any visible marker reference. Describe where the vehicle is stopped and where you are waiting. A safely shared map pin can help. Tell the operator when a junction or place name is only a guess."}</> },
      { type: "paragraph", text: <><strong>{"Are the A1 and A1(M) the same around Durham and Darlington?"}</strong></> },
      { type: "paragraph", text: <>{"No. The route name includes motorway and non-motorway sections. Read the designation shown for your current position and report it accurately. Follow motorway advice on A1(M) sections; do not assume that an ordinary-road instruction applies throughout your journey."}</> },
      { type: "paragraph", text: <><strong>{"What if I stop in a live lane with no way to reach the hard shoulder?"}</strong></> },
      { type: "paragraph", text: <>{"Stay in the vehicle if you cannot get clear safely. Keep seat belts fastened and hazards on, call 999 and ask for the police. Use the SOS button if available. Do not try to push the vehicle or walk across live lanes."}</> },
      { type: "paragraph", text: <><strong>{"Can FSR Recovery Group help near Durham or Darlington?"}</strong></> },
      { type: "paragraph", text: <>{"Yes. FSR Recovery Group provides 24/7 car and light-van recovery across its A1(M) service area. Call with your exact position and vehicle details so the operator can confirm arrangements. Emergency assistance comes first if you are still in danger."}</> },
      { type: "heading", level: 2, id: "calling-for-recovery-on-the-a1-m", text: "Calling for recovery on the A1(M)" },
      { type: "paragraph", text: <>{"Once you are safe, call "}<strong>{"FSR Recovery Group"}</strong>{" on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a></strong>{". Have your direction, junction or location reference, vehicle details and proposed destination ready. Say whether anybody needs additional help and whether the emergency services are already involved."}</> },
      { type: "paragraph", text: <>{"The base is 135 Gladstone Street, Darlington DL3 6LB. For a non-emergency enquiry, use the "}<a href="https://fsrrecoverygroups.co.uk/contact" className="font-semibold text-red hover:underline">{"contact page"}</a>{". When you call from the roadside, begin with your current position so the operator can confirm the next steps for your vehicle."}</> },
    ],
  },
  {
    slug: "broken-down-on-the-a66-in-winter",
    title: "Broken Down on the A66 in Winter? What to Do Between Scotch Corner and Bowes",
    metaTitle: "Broken Down on the A66 in Winter? What to Do",
    metaDescription: "What to do if you break down on the A66 in winter between Scotch Corner and Bowes: safety steps from the Highway Code, how to describe your location, and when to call for recovery.",
    excerpt: "If your car or light van stops on the A66 in winter, the first job is not the repair. It is getting you, your passengers and the vehicle into a safer position, then calling for the right help.",
    featuredImage: "/images/broken-down-on-the-a66-in-winter-featured.webp",
    featuredImageAlt: "Winter A66 lay-by with a dark hatchback and hazard lights, title text Broken Down on the A66 in Winter?",
    publishedDate: "2026-11-19",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "12 min read",
    tags: ["A66", "breakdown recovery", "winter driving", "roadside assistance"],
    faqs: [
      {
        question: "What should I do first if I break down on the A66 in winter?",
        answer: "Get off the live carriageway if you can, into a lay-by or other place of relative safety, and switch on your hazards. Get clear if it is safe; if not, stay belted in and call 999, then National Highways and a recovery service."
      },
      {
        question: "Do you cover the A66 near Scotch Corner and Bowes?",
        answer: "Yes. FSR Recovery Group covers the A66 around Scotch Corner, Darlington, the approaches toward Barnard Castle, and Bowes Moor. Further toward Cumbria, call with your location so availability can be confirmed. The base is 135 Gladstone Street, Darlington DL3 6LB."
      },
      {
        question: "Should I stay in the car or get out?",
        answer: "If you have reached a place of relative safety and can get out safely, leave by the side furthest from traffic and get well away, behind a barrier if there is one. If you cannot get clear, stay belted in with the hazards on and call 999."
      },
      {
        question: "Can a warning triangle be used on the A66?",
        answer: "The A66 is not a motorway, so The Highway Code allows a triangle at least 45 metres behind, on the same side, if you can place and retrieve it safely. Never use one on the A1(M). If it would put you at risk, do not use one."
      },
      {
        question: "What details should I give the recovery operator?",
        answer: "Direction of travel, the last place name or junction you are sure of, any marker post or driver location sign, whether you are in a lay-by, on a verge or in a live lane, the weather, your vehicle, and whether anyone is vulnerable."
      },
      {
        question: "What if the vehicle is stuck in snow or on a verge?",
        answer: "Do not keep spinning the wheels. Stay clear of the live carriageway and call for help. A winch-out may be possible for a suitable car or light van if access and ground conditions allow it to be done safely."
      },
      {
        question: "Is recovery on the A66 available at night?",
        answer: "Yes. FSR Recovery Group provides 24/7 recovery and roadside assistance, including overnight. In poor weather, a clear location still matters so the operator can reach you safely."
      }
    ],
    content: [
      { type: "paragraph", text: "If your car or light van stops on the A66 in winter, the first job is not the repair. It is getting you, your passengers and the vehicle into a safer position, then calling for the right help." },
      { type: "paragraph", text: (
          <>{"This guide is for the stretch between Scotch Corner, where the A66 meets the "}
            <a href="https://fsrrecoverygroups.co.uk/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M)"}</a>
            {", and the climb toward Bowes and Bowes Moor. The safety steps follow "}
            <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"The Highway Code: Breakdowns and incidents (rules 275 to 287)"}</a>
            {" and "}
            <a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="font-semibold text-red hover:underline">{"National Highways’ advice on what to do if you break down"}</a>
            {". It is a practical briefing, not legal advice. Where anything is in doubt, follow the official sources and the emergency services."}</>
        ),
      },
      { type: "heading", level: 2, id: "if-you-only-read-one-section-get-safe-then-get-help", text: "If you only read one section: get safe, then get help" },
      { type: "paragraph", text: "Work through this in order. Do not start with the bonnet." },
      { type: "list", items: [
        "1. If the vehicle can still be moved, leave at the next junction or pull into a lay-by or other place designed for stopping.",
        "2. If you cannot, move left. Stop as far left as you can, leaving room to get out, with the wheels turned left. Switch on your hazard warning lights. If it is dark or visibility is poor, use your sidelights.",
        "3. If you have reached a place of relative safety and it is safe to get out, leave by the side furthest from traffic. Put on high-visibility clothing if you have it. Get behind a safety barrier if there is one and it is safe to do so.",
        "4. If you cannot get off the live carriageway, stay in the vehicle, keep your seat belts and hazard lights on, and call 999 for the police. Use the vehicle’s SOS button if it has one.",
        "5. Once you are safe, call National Highways on 0300 123 5000 from a safe position, then a breakdown recovery service. Face the traffic while you speak.",
      ] },
      { type: "image", src: "/images/a66-breakdown-get-safe.webp", alt: "Driver in high-visibility clothing standing behind a safety barrier beside a winter dual carriageway" },
      { type: "heading", level: 2, id: "why-the-a66-in-winter-is-a-different-breakdown", text: "Why the A66 in winter is a different breakdown" },
      { type: "paragraph", text: (
          <>{"The A66 here is a trans-Pennine A-road, not a motorway. Some rules differ from those on the "}
            <a href="https://fsrrecoverygroups.co.uk/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M)"}</a>
            {" at Scotch Corner, including the rule on warning triangles. The road also changes character over a short distance, which is why “I’m on the A66” is rarely enough on its own."}</>
        ),
      },
      { type: "paragraph", text: "At Scotch Corner the interchange is busy, and you may still be close to motorway traffic. West of there, toward Bowes, the road opens and climbs. Some stretches are dual carriageway. Around Bowes there is a shorter single-carriageway section between dual stretches. Beyond the village the ground rises toward Bowes Moor, where there is less shelter if the weather turns." },
      { type: "paragraph", text: "Winter on these high, open sections can bring wind, rain, snow, ice and sudden drops in visibility. A lay-by or a firm, designed pull-in is a very different place to wait than a verge that looks solid under a thin layer of snow and is soft underneath." },
      { type: "paragraph", text: (
          <><strong>{"FSR Recovery Group"}</strong>
            {"’s "}
            <a href="https://fsrrecoverygroups.co.uk/areas/a66" className="font-semibold text-red hover:underline">{"A66 area page"}</a>
            {" covers this route around Scotch Corner, Darlington, the approaches toward "}
            <a href="https://fsrrecoverygroups.co.uk/areas/barnard-castle" className="font-semibold text-red hover:underline">{"Barnard Castle"}</a>
            {", and Bowes Moor. This article is the winter safety sequence, and the detail to give when you call, rather than a repeat of that page."}</>
        ),
      },
      { type: "heading", level: 2, id: "step-by-step-what-to-do-on-the-carriageway", text: "Step-by-step: what to do on the carriageway" },
      { type: "paragraph", text: (
          <><a href="https://gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"The Highway Code"}</a>
            {" asks you to think first of all other road users. National Highways puts the same idea in three words: go left, get safe, get help."}</>
        ),
      },
      { type: "list", items: [
        <>{"1. "}
            <strong>{"Get off the live road if you can"}</strong>
            {" (Rule 276). Aim for a junction, a lay-by or another place designed for parking. Rule 275 calls this a place of relative safety: somewhere you, your passengers and the vehicle are less likely to be at risk from moving traffic. Hard shoulders, where they exist, give less protection because they sit so close to fast traffic. A snow-covered or waterlogged verge is not a good substitute."}</>,
        <>{"2. "}
            <strong>{"Make the vehicle and yourself visible."}</strong>
            {" If you are causing an obstruction, use your hazard warning lights. If it is dark or visibility is poor, keep your sidelights on if you can. Wear light-coloured or fluorescent clothing in daylight, and reflective clothing at night or in poor visibility."}</>,
        <>{"3. "}
            <strong>{"Use a warning triangle only if it is safe, and never on a motorway."}</strong>
            {" Rule 276 allows a triangle on ordinary roads at least 45 metres (147 feet) behind the vehicle, on the same side, with great care. The A66 is not a motorway, so a triangle may be used if you can place and retrieve it without stepping into traffic or walking on ice. If you have stopped on the A1(M) at Scotch Corner, do not use a triangle at all."}</>,
        <>{"4. "}
            <strong>{"Stay out of the danger line, then get well clear if it is safe to leave."}</strong>
            {" Do not stand between the vehicle and oncoming traffic, or where you will block your lights. Leave by the side furthest from traffic, and make sure passengers do the same. Get behind a safety barrier where there is one, watching for drops, uneven ground or debris. Official advice for high-speed roads is not to return to the vehicle even if it is raining, cold or dark, and not to attempt repairs at the roadside. Keep animals in the vehicle, or under control on the verge in an emergency. Keep well away from the vehicle and moving traffic, because a collision could force the vehicle into you."}</>,
        <>{"5. "}
            <strong>{"If you cannot get to a place of relative safety, stay in the vehicle."}</strong>
            {" Keep your seat belts and hazard lights on and call 999 for the police, or use the vehicle’s SOS button. Rule 279 gives the same advice if a disability prevents you from following the usual steps."}</>,
      ] },
      { type: "heading", level: 2, id: "how-to-describe-your-location-on-the-a66", text: "How to describe your location on the A66" },
      { type: "paragraph", text: "Once you are safe, a precise location helps National Highways and a recovery operator plan how to reach you. “Westbound, just west of Bowes, in the lay-by” is far more useful than “somewhere on the A66.”" },
      { type: "image", src: "/images/a66-marker-post-location.webp", alt: "Roadside location marker post beside a frosty A-road verge" },
      { type: "paragraph", text: "Give as much of the following as you can, without walking back toward the carriageway to find it:" },
      { type: "list", items: [
        <><strong>{"Direction of travel."}</strong>
            {" Eastbound, toward Scotch Corner and the A1(M), or westbound, toward Bowes and the Pennines."}</>,
        <><strong>{"The last junction or place name you are sure of."}</strong>
            {" Scotch Corner, the approaches toward Barnard Castle, Bowes, or Bowes Moor."}</>,
        <><strong>{"Marker posts or driver location signs."}</strong>
            {" Quote the numbers and letters on the posts or signs along the edge of the road, as The Highway Code and National Highways advise."}</>,
        <><strong>{"A map pin"}</strong>
            {", only if you can send one safely."}</>,
        <><strong>{"Where the vehicle actually is."}</strong>
            {" A lay-by, a verge, or still in a live lane. If you are still in a live lane, that is a 999 call first."}</>,
        <><strong>{"The weather, the vehicle and who is with you."}</strong>
            {" Snow, ice, fog or strong wind all affect access. Say whether it is a car or light van, the colour, the registration if you are asked, and if anyone is disabled, older, travelling alone, or if there are children in the group."}</>,
      ] },
      { type: "paragraph", text: "If you have an SOS or eCall button, use it when you need the police, fire or ambulance, not for ordinary breakdown recovery. For advice on England’s motorways and major A-roads, call National Highways on 0300 123 5000 from a safe position, facing the traffic." },
      { type: "heading", level: 2, id: "when-it-is-a-999-call-not-only-a-recovery-call", text: "When it is a 999 call, not only a recovery call" },
      { type: "paragraph", text: "A recovery service cannot make a live lane safe. Call 999 and ask for the police, or press the vehicle’s SOS button and ask for the police, if any of the following is true:" },
      { type: "list", items: [
        "You have had to stop in a live lane and cannot reach a place of relative safety.",
        "You cannot get out of the vehicle safely.",
        "A disability prevents you from following the usual “get out and get behind the barrier” advice.",
        "You are involved in a collision, someone is injured, or there is an immediate danger to life.",
        "Something has fallen onto the carriageway on a high-speed road. Rule 280 says you must not remove that obstruction yourself. Stop in a place of relative safety if you can, and call 999.",
      ] },
      { type: "paragraph", text: "Once you are safe, or once the police have been called, you can also contact National Highways and a recovery service. If you are a vulnerable motorist — disabled, older, or travelling alone — say so." },
      { type: "heading", level: 2, id: "what-recovery-may-involve-on-this-road", text: "What recovery may involve on this road" },
      { type: "paragraph", text: "What happens next depends on where the vehicle is, whether it can be moved, and whether the ground and weather make roadside work sensible. That cannot be promised in advance, and no honest operator should promise how soon someone will arrive from a page like this." },
      { type: "image", src: "/images/a66-winter-recovery-van.webp", alt: "Recovery vehicle loading a car onto a flatbed in a winter lay-by beside open moorland" },
      { type: "paragraph", text: (
          <>{"If the car or light van cannot safely continue, "}
            <a href="https://fsrrecoverygroups.co.uk/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</a>
            {" is the usual next step: the vehicle is collected and taken to an agreed garage, home address or other suitable destination. "}
            <strong>{"FSR Recovery Group"}</strong>
            {" provides this 24/7 for cars and light vans, including on the A66 near Darlington, subject to the location when you call."}</>
        ),
      },
      { type: "paragraph", text: (
          <>{"Sometimes "}
            <a href="https://fsrrecoverygroups.co.uk/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</a>
            {" is enough — a spare wheel, a jump start, or fuel, for example. On a winter A66, the safer option is often to load the vehicle and move the work off the road. That is a judgement for the operator once they can see the site."}</>
        ),
      },
      { type: "paragraph", text: (
          <>{"If the vehicle is stuck in snow, mud or a soft verge, stop spinning the wheels. A short, controlled "}
            <a href="https://fsrrecoverygroups.co.uk/services/winch-out" className="font-semibold text-red hover:underline">{"winch-out"}</a>
            {" may be possible for a suitable car or light van, but only where access, position and ground conditions allow it to be done safely. It is not an off-road recovery claim. If the vehicle cannot continue after it has been moved, it can still be recovered to an agreed destination."}</>
        ),
      },
      { type: "paragraph", text: "Tell the operator if you are on the open stretch toward Bowes Moor, on the approaches to Barnard Castle, or close to the Scotch Corner interchange. Those are different places to work, especially after dark or in snow." },
      { type: "heading", level: 2, id: "waiting-in-the-cold-practical-checks", text: "Waiting in the cold: practical checks" },
      { type: "paragraph", text: "Waiting is often the hardest part on an exposed stretch with little shelter. Stay with the official advice rather than with what would feel more comfortable." },
      { type: "list", items: [
        "If you have left the vehicle and reached a safer position, stay there. Do not go back to sit in the car because it is raining, cold or dark.",
        "Keep high-visibility clothing on, stay behind a safety barrier if it is safe, and remain alert for traffic or debris.",
        "Do not attempt a repair at the roadside, and do not walk along the carriageway to “just have a look.”",
        "Keep children away from the road. Keep animals in the vehicle unless it is an emergency and you can control them on the verge.",
        "If you had to stay in the vehicle because you could not get clear, keep the seat belts and hazard lights on and wait for the police.",
        "Use your phone from a safe position. Do not step closer to the traffic to find a better signal.",
      ] },
      { type: "paragraph", text: (
          <>{"If the engine will not restart, treat it as a breakdown, not as a reason to keep trying in a risky place. There is a separate guide on "}
            <a href="https://fsrrecoverygroups.co.uk/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"what to check when a car will not start but the battery seems fine"}</a>
            {". Make those checks only if you are already in a place of relative safety."}</>
        ),
      },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "paragraph", text: (
          <><strong>{"What should I do first if I break down on the A66 in winter?"}</strong></>
        ),
      },
      { type: "paragraph", text: "Get off the live carriageway if you can, into a lay-by or other place of relative safety, and switch on your hazards. Get clear if it is safe; if not, stay belted in and call 999, then National Highways and a recovery service." },
      { type: "paragraph", text: (
          <><strong>{"Do you cover the A66 near Scotch Corner and Bowes?"}</strong></>
        ),
      },
      { type: "paragraph", text: (
          <>{"Yes. "}
            <strong>{"FSR Recovery Group"}</strong>
            {" covers the A66 around Scotch Corner, Darlington, the approaches toward Barnard Castle, and Bowes Moor. Further toward Cumbria, call with your location so availability can be confirmed. The base is 135 Gladstone Street, Darlington DL3 6LB."}</>
        ),
      },
      { type: "paragraph", text: (
          <><strong>{"Should I stay in the car or get out?"}</strong></>
        ),
      },
      { type: "paragraph", text: "If you have reached a place of relative safety and can get out safely, leave by the side furthest from traffic and get well away, behind a barrier if there is one. If you cannot get clear, stay belted in with the hazards on and call 999." },
      { type: "paragraph", text: (
          <><strong>{"Can a warning triangle be used on the A66?"}</strong></>
        ),
      },
      { type: "paragraph", text: "The A66 is not a motorway, so The Highway Code allows a triangle at least 45 metres behind, on the same side, if you can place and retrieve it safely. Never use one on the A1(M). If it would put you at risk, do not use one." },
      { type: "paragraph", text: (
          <><strong>{"What details should I give the recovery operator?"}</strong></>
        ),
      },
      { type: "paragraph", text: "Direction of travel, the last place name or junction you are sure of, any marker post or driver location sign, whether you are in a lay-by, on a verge or in a live lane, the weather, your vehicle, and whether anyone is vulnerable." },
      { type: "paragraph", text: (
          <><strong>{"What if the vehicle is stuck in snow or on a verge?"}</strong></>
        ),
      },
      { type: "paragraph", text: "Do not keep spinning the wheels. Stay clear of the live carriageway and call for help. A winch-out may be possible for a suitable car or light van if access and ground conditions allow it to be done safely." },
      { type: "paragraph", text: (
          <><strong>{"Is recovery on the A66 available at night?"}</strong></>
        ),
      },
      { type: "paragraph", text: (
          <>{"Yes. "}
            <strong>{"FSR Recovery Group"}</strong>
            {" provides 24/7 recovery and roadside assistance, including overnight. In poor weather, a clear location still matters so the operator can reach you safely."}</>
        ),
      },
      { type: "heading", level: 2, id: "if-you-need-recovery-on-the-a66", text: "If you need recovery on the A66" },
      { type: "paragraph", text: (
          <>{"If you have broken down between Scotch Corner and Bowes, or elsewhere on the A66 near Darlington, call "}
            <strong>{"FSR Recovery Group"}</strong>
            {" on +44 7888 502989. The service is available 24/7 for cars and light vans. Have your location, your direction of travel and a short description of what has happened ready if you can. The operator can then confirm what help is possible from where you are."}</>
        ),
      },
      { type: "paragraph", text: (
          <>{"You can also use the "}
            <a href="https://fsrrecoverygroups.co.uk/contact" className="font-semibold text-red hover:underline">{"contact page"}</a>
            {". For more practical guides, see the "}
            <a href="https://fsrrecoverygroups.co.uk/blog" className="font-semibold text-red hover:underline">{"FSR Recovery Group blog"}</a>
            {"."}</>
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
