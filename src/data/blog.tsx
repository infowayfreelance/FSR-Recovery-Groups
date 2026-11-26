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
    slug: "broken-down-on-the-a19",
    title: "Broken Down on the A19? What to Do Between Thirsk, Teesside, Peterlee and Sunderland",
    metaTitle: "Broken Down on the A19? What to Do Next",
    metaDescription: "Broken down on the A19? Safe stopping advice, what to tell recovery and getting help for your car around Thirsk, Teesside, Peterlee and Sunderland.",
    excerpt: "Broken down on the A19? Safe stopping advice, what to tell recovery and getting help for your car around Thirsk, Teesside, Peterlee and Sunderland.",
    featuredImage: "/images/broken-down-on-the-a19-featured.webp",
    featuredImageAlt: "Car with hazard lights on in a lay-by beside the A19",
    publishedDate: "2026-11-26",
    updatedDate: "2026-11-26",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "11 min read",
    tags: ["A19", "breakdown recovery", "roadside assistance"],
    faqs: [{"question": "What should I do if I break down on a dual carriageway with no hard shoulder?", "answer": "Reach a proper stopping place if you can safely move the vehicle. If you cannot get clear of traffic safely, remain belted in with hazards on and call 999 for the police. Do not push the car."}, {"question": "Should I put out a warning triangle on the A19?", "answer": "Only consider it where placing and retrieving it would be safe. Rule 276 gives guidance for ordinary roads, but the A19’s traffic may make the attempt dangerous. Never enter a live lane or use a triangle on a motorway."}, {"question": "Should I stay in my car or get out?", "answer": "Leave by the side away from traffic only if you can reach somewhere safer. Wait well clear, behind a suitable barrier where available. If you cannot leave safely, stay belted in, keep hazards on and call 999."}, {"question": "How do I tell recovery exactly where I am on the A19?", "answer": "Give your direction, nearest junction or landmark and stopping position. Quote a marker reference only if safely visible. A map pin may help, but explain if you are unsure that it shows the correct place."}, {"question": "Can my car be fixed at the roadside or will it need towing?", "answer": "That depends on the fault and location. Suitable roadside help may be possible somewhere safe. If the vehicle cannot safely continue, recovery to an agreed destination may be needed."}, {"question": "Do you cover the A19 near Middlesbrough and Sunderland?", "answer": "FSR Recovery Group covers relevant A19 sections around Middlesbrough, Sunderland, Peterlee and Thirsk within its service area. Call with your exact location to confirm availability."}],
    content: [
      { type: "paragraph", text: <>{"If you break down on the A19, get away from moving traffic if the vehicle can still be moved safely. Aim for a lay-by, service area or another suitable stopping place, switch on your hazards, and leave by the side furthest from traffic only if it is safe. Wait well clear, behind a barrier where available. If you cannot get clear safely, stay belted in with hazards on and call 999 for the police."}</> },
      { type: "paragraph", text: <>{"Once people are safe, contact recovery with your direction of travel, nearest junction or landmark and vehicle details. This guide covers what to do around Thirsk, Teesside, Peterlee and Sunderland, including how to describe your location and decide whether roadside help or recovery is needed."}</> },
      { type: "heading", level: 2, id: "short-answer-broken-down-on-the-a19", text: "Short answer: broken down on the A19" },
      { type: "paragraph", text: <>{"Deal with danger before trying to identify the fault. A flat tyre, warning light or loss of power can wait while you work out where everyone can stand safely."}</> },
      { type: "paragraph", text: <>{"Use this order:"}</> },
      { type: "list", items: [<>{"1. Reach a suitable stopping place if you can."}</>, <>{"2. Make the stopped vehicle visible."}</>, <>{"3. Get people clear of traffic where safe."}</>, <>{"4. Call emergency services first if anyone is in danger."}</>, <>{"5. Describe your location and arrange appropriate help."}</>] },
      { type: "paragraph", text: <>{"Do not push the car out of a lane or ask a passenger to direct traffic. If there has been a collision, our guide to "}<Link href="/blog/after-a-car-accident-county-durham" className="font-semibold text-red hover:underline">{"what to do after a car accident in County Durham"}</Link>{" explains the next steps once the immediate danger has been addressed."}</> },
      { type: "heading", level: 2, id: "why-a19-breakdowns-need-extra-care", text: "Why A19 breakdowns need extra care" },
      { type: "paragraph", text: <>{"The A19 includes busy dual-carriageway sections where vehicles may pass close to a stopped car. Do not assume that there will be a hard shoulder, a nearby exit or enough space beyond the barrier to stand safely."}</> },
      { type: "paragraph", text: <>{"Look at the stopping place itself. A narrow verge is different from a proper lay-by. A junction brings turning traffic, while a slip road may leave you beside vehicles joining or leaving the main road. None should be treated as a convenient place to inspect a fault."}</> },
      { type: "paragraph", text: <>{"The "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"Highway Code’s breakdown rules"}</a>{", particularly Rules 275 and 276, put stopping safely and considering other road users first. A hard shoulder offers less protection than somewhere designed for parking."}</> },
      { type: "paragraph", text: <>{"If you are travelling onto another major road, use the guidance for that road. Our "}<Link href="/blog/broken-down-on-the-a1m" className="font-semibold text-red hover:underline">{"A1(M) breakdown guide"}</Link>{" covers motorway precautions; this A19 article does not replace them."}</> },
      { type: "paragraph", text: <>{"An exit being visible does not mean you should try to reach it with an unsafe vehicle. Equally, a road sign is not worth stopping beside just to make your location easier to describe. Tell the operator what you already know, and explain any uncertainty."}</> },
      { type: "heading", level: 2, id: "step-by-step-what-to-do-the-moment-something-goes-wrong", text: "Step-by-step: what to do the moment something goes wrong" },
      { type: "paragraph", text: <>{"If the car starts behaving differently, focus on controlling it and finding somewhere suitable to stop."}</> },
      { type: "list", items: [<>{"1. "}<strong>{"Check your surroundings."}</strong>{" Use mirrors and signal before changing position. Do not make a sudden turn towards an entrance you have already passed."}</>, <>{"2. "}<strong>{"Leave the running carriageway if possible."}</strong>{" A service area or proper lay-by is preferable to stopping beside passing traffic. Only continue towards one while the vehicle remains safe to control."}</>, <>{"3. "}<strong>{"Stop and secure the vehicle."}</strong>{" Put the handbrake on and avoid leaving it where it could roll. Do not restart repeatedly to test whether the fault has disappeared."}</>, <>{"4. "}<strong>{"Assess the exit before opening a door."}</strong>{" Check traffic, barriers and the ground beyond. A grass bank may hide a ditch or a drop."}</>, <>{"5. "}<strong>{"Move to a safer waiting position if you can."}</strong>{" Take your phone and a hi-vis jacket if within reach. Keep children close and tell the operator if someone cannot leave safely."}</>] },
      { type: "paragraph", text: <>{"Do not turn this into a roadside inspection. Looking under the bonnet or changing a wheel beside high-speed traffic can expose you to more danger than the original fault. Describe the symptoms instead."}</> },
      { type: "heading", level: 2, id: "if-you-can-t-get-off-the-carriageway", text: "If you can’t get off the carriageway" },
      { type: "image", src: "/images/driver-behind-barrier-dual-carriageway.webp", alt: "Driver waiting safely behind a barrier after a breakdown" },
      { type: "paragraph", text: <>{"A car stranded in a live lane needs emergency assistance. If you cannot get out safely and reach a position clear of traffic, stay inside, keep seat belts fastened and hazards on, and call 999 for the police. Use the vehicle’s SOS button if available."}</> },
      { type: "paragraph", text: <>{"Say that you are on the A19 and stopped in a live lane. Give the direction and nearest location information you already know. Explain whether there are passengers who need help leaving the vehicle."}</> },
      { type: "paragraph", text: <><a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="font-semibold text-red hover:underline">{"National Highways’ breakdown advice"}</a>{" explains these precautions for its network. Follow emergency-service instructions rather than trying to make the lane safe yourself."}</> },
      { type: "paragraph", text: <>{"If you have reached a safer place behind a barrier, remain alert. Stand away from the path your car could take if struck. Do not return for bags or sit inside simply because waiting outside is uncomfortable."}</> },
      { type: "paragraph", text: <>{"When speaking to the emergency operator, describe the immediate problem plainly: whether the car is blocking traffic, whether anyone is hurt, and whether people remain inside. Keep the call focused on getting help to the right place. You can discuss the vehicle’s eventual destination afterwards."}</> },
      { type: "heading", level: 2, id: "warning-triangles-hazard-lights-and-visibility", text: "Warning triangles, hazard lights and visibility" },
      { type: "paragraph", text: <>{"The A19 is not a motorway, but that does not make walking beside it safe. Rule 276 describes placing a warning triangle at least 45 metres behind a broken-down vehicle on the same side of an ordinary road, with great care. Never use one on a motorway."}</> },
      { type: "paragraph", text: <>{"Treat the actual conditions as the deciding factor. Do not step into a lane, cross the carriageway or walk along an exposed stretch to place or retrieve a triangle. If it cannot be done safely, do not attempt it. People’s safety comes first."}</> },
      { type: "paragraph", text: <>{"Use hazard lights when your stopped vehicle causes an obstruction. In darkness or poor visibility, keep sidelights on where possible. Wear suitable visible clothing if available, but do not search the boot for it while exposed to traffic."}</> },
      { type: "paragraph", text: <>{"Keep yourself visible without standing in front of the vehicle’s lights or between it and approaching traffic. "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"GOV.UK"}</a></> },
      { type: "heading", level: 2, id: "what-to-tell-the-recovery-operator", text: "What to tell the recovery operator" },
      { type: "image", src: "/images/phone-call-recovery-location.webp", alt: "Driver giving their location to a recovery service" },
      { type: "paragraph", text: <>{"Start with location, then explain what has happened. “On the A19 near Sunderland” may leave several possible approaches; direction and junction details make the description more useful."}</> },
      { type: "paragraph", text: <>{"Have these details ready:"}</> },
      { type: "list", items: [<>{"1. "}<strong>{"Direction:"}</strong>{" northbound or southbound. If unsure, say which town you were heading towards."}</>, <>{"2. "}<strong>{"Nearest junction:"}</strong>{" name the road, place or sign you last passed. Say if you are before or after it."}</>, <>{"3. "}<strong>{"Stopping position:"}</strong>{" lay-by, service area, slip road, verge or live lane. A live-lane emergency goes to the police first."}</>, <>{"4. "}<strong>{"Other location clues:"}</strong>{" a landmark, safely visible marker-post reference or map pin."}</>, <>{"5. "}<strong>{"Vehicle:"}</strong>{" make, model, registration, car or light van, and whether it is loaded."}</>, <>{"6. "}<strong>{"Problem:"}</strong>{" warning lights, tyre damage, overheating, loss of power, collision damage or another symptom."}</>, <>{"7. "}<strong>{"People and destination:"}</strong>{" anyone needing extra support, and where you want the vehicle taken."}</>] },
      { type: "paragraph", text: <>{"Read marker-post numbers only if visible from somewhere safe. Do not walk back towards traffic to find one. If your phone location looks uncertain, explain that instead of presenting a guess as an exact position."}</> },
      { type: "paragraph", text: <>{"If another person makes the call for you, make sure they have the same location details. Agree which phone number the operator should use to reach you. If you are asked a question you cannot answer safely, say so; you do not need to inspect the car."}</> },
      { type: "heading", level: 2, id: "what-happens-when-recovery-arrives", text: "What happens when recovery arrives" },
      { type: "image", src: "/images/recovery-truck-loading-car-a19.webp", alt: "Recovery truck loading a broken-down car in a lay-by" },
      { type: "paragraph", text: <>{"The first question is whether the location and fault allow work to take place safely. A suitable stopping place may permit some "}<Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</Link>{"; an exposed position may make recovery the appropriate option."}</> },
      { type: "paragraph", text: <>{"FSR Recovery Group’s A19 service includes help with mechanical breakdowns, battery problems, tyre damage, overheating, running out of fuel and accident recovery. A jump start, suitable spare-wheel change or fuel delivery depends on the circumstances. None should be assumed possible beside passing traffic. "}<a href="https://fsrrecoverygroups.co.uk/areas/a19" className="font-semibold text-red hover:underline">{"24/7 Vehicle Recovery"}</a></> },
      { type: "paragraph", text: <>{"If the car cannot safely continue, "}<Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</Link>{" can take it to an agreed suitable destination. Tell the operator about damage, wheels that will not turn, steering problems or a vehicle stuck in gear before loading begins."}</> },
      { type: "paragraph", text: <>{"Stay out of the working area and follow the operator’s directions. Do not stand beside the ramp, touch recovery equipment or try to help move the car without instructions."}</> },
      { type: "paragraph", text: <>{"Confirm the destination clearly. If it is a garage, check that it can receive the vehicle and explain any access arrangements. For a separate planned journey after the breakdown, see "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{"."}</> },
      { type: "paragraph", text: <>{"Tell the operator if you have already arranged help through another provider, a garage or your insurer. Make clear who is handling collection and which destination has been agreed. This helps avoid conflicting instructions while you are trying to manage passengers and a stopped vehicle."}</> },
      { type: "heading", level: 2, id: "a19-stretches-we-cover", text: "A19 stretches we cover" },
      { type: "paragraph", text: <>{"FSR Recovery Group provides "}<Link href="/areas/a19" className="font-semibold text-red hover:underline">{"A19 breakdown recovery"}</Link>{" on relevant sections within its wider service area, including around Thirsk, Middlesbrough, Peterlee and Sunderland. Call with your exact location to confirm availability rather than assuming that every part of the route is covered."}</> },
      { type: "paragraph", text: <>{"Explain the nearest part of the corridor:"}</> },
      { type: "list", items: [<><strong>{"Thirsk:"}</strong>{" give the junction or nearby place name as well as whether you are travelling north or south."}</>, <><strong>{"Middlesbrough and Teesside:"}</strong>{" name the connecting road or junction where possible. See "}<Link href="/areas/middlesbrough" className="font-semibold text-red hover:underline">{"Middlesbrough recovery coverage"}</Link>{"."}</>, <><strong>{"Peterlee and East Durham:"}</strong>{" give the nearest exit or landmark and your stopping position. See "}<Link href="/areas/peterlee" className="font-semibold text-red hover:underline">{"recovery around Peterlee"}</Link>{"."}</>, <><strong>{"Sunderland:"}</strong>{" describe the approach you are using and the last junction passed. See "}<Link href="/areas/sunderland" className="font-semibold text-red hover:underline">{"Sunderland recovery coverage"}</Link>{"."}</>] },
      { type: "paragraph", text: <>{"These are location prompts, not extra coverage promises. If you are unsure whether your stopping place falls within the service area, describe it when you call. Avoid changing your location merely to reach a town named here."}</> },
      { type: "heading", level: 2, id: "winter-and-night-time-on-the-a19", text: "Winter and night-time on the A19" },
      { type: "paragraph", text: <>{"Darkness, rain, fog and icy ground can make a difficult stop harder to manage. Consider what you can see, what approaching drivers can see, and whether the ground away from traffic is safe to stand on."}</> },
      { type: "paragraph", text: <>{"Before travelling, keep your phone charged and have warm clothing, a torch and a hi-vis jacket accessible. Save the recovery number so you do not need to search for it at the roadside. Tell a passenger where essential items are kept."}</> },
      { type: "paragraph", text: <>{"Once stopped, avoid walking around the vehicle to investigate noises or damage. A wet verge can be uneven, and a barrier may have a drop beyond it. Use your phone from your safer waiting position."}</> },
      { type: "paragraph", text: <>{"If someone cannot manage the ground or needs medical help, explain this when calling. Do not leave a child or vulnerable passenger to find a signal or a better landmark."}</> },
      { type: "paragraph", text: <>{"For journeys involving the Pennines, our guide to "}<Link href="/blog/broken-down-on-the-a66-in-winter" className="font-semibold text-red hover:underline">{"breaking down on the A66 in winter"}</Link>{" covers that different road. Use it for the A66 part of your trip rather than assuming the two routes have the same stopping places."}</> },
      { type: "paragraph", text: <>{"If you are waiting with other people, explain the plan before anyone moves: where to wait, who is making the call and who is keeping children close. Avoid splitting the group between different places to search for information. Tell the operator if your circumstances change."}</> },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "heading", level: 3, id: "what-should-i-do-if-i-break-down-on-a-dual-carriageway-with-no-hard-shoulder", text: "What should I do if I break down on a dual carriageway with no hard shoulder?" },
      { type: "paragraph", text: <>{"Reach a proper stopping place if you can safely move the vehicle. If you cannot get clear of traffic safely, remain belted in with hazards on and call 999 for the police. Do not push the car."}</> },
      { type: "heading", level: 3, id: "should-i-put-out-a-warning-triangle-on-the-a19", text: "Should I put out a warning triangle on the A19?" },
      { type: "paragraph", text: <>{"Only consider it where placing and retrieving it would be safe. Rule 276 gives guidance for ordinary roads, but the A19’s traffic may make the attempt dangerous. Never enter a live lane or use a triangle on a motorway."}</> },
      { type: "heading", level: 3, id: "should-i-stay-in-my-car-or-get-out", text: "Should I stay in my car or get out?" },
      { type: "paragraph", text: <>{"Leave by the side away from traffic only if you can reach somewhere safer. Wait well clear, behind a suitable barrier where available. If you cannot leave safely, stay belted in, keep hazards on and call 999."}</> },
      { type: "heading", level: 3, id: "how-do-i-tell-recovery-exactly-where-i-am-on-the-a19", text: "How do I tell recovery exactly where I am on the A19?" },
      { type: "paragraph", text: <>{"Give your direction, nearest junction or landmark and stopping position. Quote a marker reference only if safely visible. A map pin may help, but explain if you are unsure that it shows the correct place."}</> },
      { type: "heading", level: 3, id: "can-my-car-be-fixed-at-the-roadside-or-will-it-need-towing", text: "Can my car be fixed at the roadside or will it need towing?" },
      { type: "paragraph", text: <>{"That depends on the fault and location. Suitable roadside help may be possible somewhere safe. If the vehicle cannot safely continue, recovery to an agreed destination may be needed."}</> },
      { type: "heading", level: 3, id: "do-you-cover-the-a19-near-middlesbrough-and-sunderland", text: "Do you cover the A19 near Middlesbrough and Sunderland?" },
      { type: "paragraph", text: <>{"FSR Recovery Group covers relevant A19 sections around Middlesbrough, Sunderland, Peterlee and Thirsk within its service area. Call with your exact location to confirm availability."}</> },
      { type: "heading", level: 2, id: "broken-down-on-the-a19", text: "Broken down on the A19?" },
      { type: "paragraph", text: <>{"Once you are safe, call FSR Recovery Group on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">{"+44 7888 502989"}</a></strong>{" for recovery support around the A19 sections covered. Assistance is available 24/7 for suitable cars and light vans."}</> },
      { type: "paragraph", text: <>{"Give your direction, nearest junction or landmark, vehicle details and what has happened. You can also use WhatsApp on the same number or the "}<Link href="/contact" className="font-semibold text-red hover:underline">{"contact page"}</Link>{". If anyone is in danger, call 999 first."}</> }
    ],
  },
  {
    slug: "clutch-gone-drive-or-recovery",
    title: "Clutch Gone? When You Can Drive to a Garage and When You Need Recovery",
    metaTitle: "Clutch Gone? Drive to a Garage or Call for Recovery",
    metaDescription: "Clutch slipping, pedal on the floor or stuck in gear? How to tell if you can reach a garage or need recovery, and what to do on the A1(M) or A66.",
    excerpt: "Clutch slipping, pedal on the floor or stuck in gear? How to tell if you can reach a garage or need recovery, and what to do on the A1(M) or A66.",
    featuredImage: "/images/clutch-gone-drive-or-recovery-featured.webp",
    featuredImageAlt: "Driver waiting safely behind a barrier after a clutch failure on an A-road",
    publishedDate: "2026-11-25",
    updatedDate: "2026-11-25",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "10 min read",
    tags: ["clutch failure", "breakdown recovery", "roadside assistance"],
    faqs: [{"question": "Can I drive with a slipping clutch?", "answer": "Do not assume it is safe because the car still moves. Park safely and describe the symptoms to a garage. If acceleration or control is unreliable, stop driving and arrange recovery."}, {"question": "What do I do if my clutch pedal goes to the floor?", "answer": "Get to a safe stopping place if you can still control the vehicle. Do not force gears or keep restarting. Once safe, call for recovery and explain whether the pedal returns."}, {"question": "Can a car stuck in gear be recovered?", "answer": "Yes, recovery can be arranged, but tell the operator before collection. Explain the position, access and whether the car could roll when last moved. Do not try to free it yourself."}, {"question": "Is a clutch problem a breakdown?", "answer": "A clutch fault that makes the car unsafe or unable to continue is a breakdown. You do not need a confirmed diagnosis before calling for recovery."}, {"question": "Can I drive to the garage if the clutch is going?", "answer": "If the clutch has failed, arrange recovery. For an early change while the car otherwise operates normally, get professional advice before deciding to drive. Distance alone does not make the trip safe."}, {"question": "What should I tell the recovery company about a clutch failure?", "answer": "Give your location, vehicle details, symptoms and destination. Mention a stuck gear, brake concerns, missing keys, slopes or restricted access. Describe what you already know without attempting roadside tests."}],
    content: [
      { type: "paragraph", text: <>{"A clutch problem does not always arrive as a complete failure. You might notice the engine revving without the car gathering speed, struggle to select a gear, or find the pedal has stayed on the floor. Those symptoms need different assessments, but none should be ignored."}</> },
      { type: "paragraph", text: <>{"If you cannot change gear normally, control the car reliably or move away safely, stop somewhere suitable and arrange recovery. Mild slipping still needs prompt garage advice; being close to a workshop does not make the journey safe. This guide explains what to notice, when to stop, and what to tell a recovery operator around Darlington, County Durham and North Yorkshire."}</> },
      { type: "heading", level: 2, id: "short-answer-drive-on-or-stop-and-call-for-recovery", text: "Short answer: drive on, or stop and call for recovery?" },
      { type: "paragraph", text: <>{"If the clutch has failed, do not try to drive to a garage. A car that still moves can still leave you unable to pull away at the next junction."}</> },
      { type: "paragraph", text: <>{"If you have noticed an early change but the car still operates normally, park safely and speak to a garage before deciding how to get it inspected. Explain the symptom and the route, including hills, roundabouts and busy roads. Only consider driving if a qualified professional advises that it is suitable for your circumstances."}</> },
      { type: "paragraph", text: <>{"Choose recovery if there is any doubt about controlling the vehicle. You do not need to prove that the clutch has completely failed before asking for help."}</> },
      { type: "heading", level: 2, id: "three-clutch-problems-and-what-each-one-means-for-your-journey", text: "Three clutch problems and what each one means for your journey" },
      { type: "image", src: "/images/clutch-pedal-footwell.webp", alt: "Clutch pedal in a manual car footwell" },
      { type: "heading", level: 3, id: "slipping-but-the-car-still-moves", text: "Slipping, but the car still moves" },
      { type: "paragraph", text: <>{"A possible sign of clutch slip is engine speed rising without a matching increase in road speed. You may notice it when accelerating or climbing. A burning smell can also accompany trouble, although neither symptom confirms the cause by itself."}</> },
      { type: "paragraph", text: <>{"Do not accelerate harder to test it. Note what happened and arrange an inspection. A quiet road near a garage may sound manageable, but you still need dependable control when joining traffic or stopping. Ask the garage whether recovery is appropriate."}</> },
      { type: "heading", level: 3, id: "pedal-on-the-floor-or-gears-will-not-select", text: "Pedal on the floor, or gears will not select" },
      { type: "paragraph", text: <>{"If the pedal drops, stays down or suddenly feels different, the clutch may no longer operate normally. A hydraulic or mechanical fault could be involved; the pedal position alone cannot identify which part needs attention."}</> },
      { type: "paragraph", text: <>{"Do not force the gear lever or keep restarting to see whether the fault disappears. Get to safety, stop and describe the problem when you call. This is a recovery decision, rather than a roadside repair project."}</> },
      { type: "heading", level: 3, id: "stuck-in-gear-with-the-car-unable-to-move", text: "Stuck in gear, with the car unable to move" },
      { type: "paragraph", text: <>{"Tell the operator if the lever will not return to neutral. Whether the vehicle can roll affects how it can be collected, especially on a slope or in a tight parking space."}</> },
      { type: "paragraph", text: <>{"Leave assessment and loading to the recovery operator. Do not push the car onto a road, crawl underneath it or try to free the transmission yourself. Keep the keys available and explain any access restrictions."}</> },
      { type: "paragraph", text: <>{"This guide mainly concerns manual cars. If your automatic or automated transmission shows a fault, follow its handbook and explain the warning when you call. Do not apply manual-clutch advice to a different transmission or assume that selecting another driving mode will solve the problem."}</> },
      { type: "heading", level: 2, id: "early-warning-signs-worth-acting-on", text: "Early warning signs worth acting on" },
      { type: "paragraph", text: <>{"Changes matter most when compared with how your own car normally behaves. Tell a garage about:"}</> },
      { type: "list", items: [<>{"Revs rising without the acceleration you expect."}</>, <>{"New difficulty selecting or changing gears."}</>, <>{"A pedal that sticks, drops or returns differently."}</>, <>{"A new smell, judder or noise associated with using the clutch."}</>] },
      { type: "paragraph", text: <>{"These are observations, not a diagnosis. Another fault may produce similar symptoms, and a garage needs to inspect the vehicle before confirming the cause."}</> },
      { type: "paragraph", text: <>{"Write down when it happens: moving away, changing gear, climbing or after the car has warmed up. Do not recreate the symptom on a busy road. If there is also an engine-temperature warning, follow the separate advice on "}<Link href="/blog/car-overheating-while-driving" className="font-semibold text-red hover:underline">{"car overheating while driving"}</Link>{". A car that refuses to start may need a different assessment; our guide to a "}<Link href="/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"car that will not start but the battery seems fine"}</Link>{" covers that situation."}</> },
      { type: "heading", level: 2, id: "if-the-clutch-fails-while-you-are-driving-safe-steps", text: "If the clutch fails while you are driving: safe steps" },
      { type: "paragraph", text: <>{"People come before the vehicle. Follow the "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"Highway Code’s breakdown guidance"}</a>{" and any instructions from emergency services."}</> },
      { type: "list", items: [<>{"1. "}<strong>{"Find safety if you can."}</strong>{" If the vehicle remains controllable, leave the road or reach a place intended for stopping. Avoid stopping in a live lane where possible."}</>, <>{"2. "}<strong>{"Make the stopped car visible."}</strong>{" Use hazard lights when it is an obstruction, and sidelights in darkness or poor visibility."}</>, <>{"3. "}<strong>{"Leave only when safe."}</strong>{" Use the side away from traffic. Keep passengers clear of the road and, where suitable, behind a barrier. Check for drops or other hazards beyond it."}</>, <>{"4. "}<strong>{"Keep clear of the vehicle’s path."}</strong>{" Do not wait where another vehicle could strike your car and force it towards you."}</>, <>{"5. "}<strong>{"If you cannot get clear safely, stay belted in."}</strong>{" Keep hazards on and call the police using the emergency services or the vehicle’s SOS system."}</>, <>{"6. "}<strong>{"Arrange recovery once safe."}</strong>{" Give your location first, then explain the clutch symptoms."}</>] },
      { type: "paragraph", text: <>{"On the "}<Link href="/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M)"}</Link>{", never put out a warning triangle. Do not attempt repairs beside high-speed traffic. "}<a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="font-semibold text-red hover:underline">{"National Highways’ breakdown advice"}</a>{" explains the motorway safety sequence; our "}<Link href="/blog/broken-down-on-the-a1m" className="font-semibold text-red hover:underline">{"A1(M) breakdown guide"}</Link>{" provides related local guidance. "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"GOV.UK"}</a></> },
      { type: "paragraph", text: <>{"On the A66, a Durham street or a Teesdale lane, assess the actual stopping place. A soft verge, blind bend or narrow gateway may create another hazard."}</> },
      { type: "heading", level: 2, id: "why-limping-home-on-a-failing-clutch-is-a-gamble", text: "Why limping home on a failing clutch is a gamble" },
      { type: "paragraph", text: <>{"The difficult part may come after you have decided to continue. A queue, hill or roundabout could require another stop and a controlled move away. You cannot plan a journey around never needing the clutch again."}</> },
      { type: "paragraph", text: <>{"Driving gently does not establish that the fault is safe. Nor does a pedal temporarily returning to its usual position show that the underlying problem has gone."}</> },
      { type: "paragraph", text: <>{"Do not attempt clutchless gear changes, start the car in gear or arrange an improvised tow with another driver. These are not substitutes for safe recovery. If somebody suggests trying a technique they have used before, remember that they have not assessed your vehicle or the road ahead."}</> },
      { type: "paragraph", text: <>{"Stopping before the situation becomes harder gives you space to arrange the next step. The aim is to reach an inspection without creating another roadside problem."}</> },
      { type: "heading", level: 2, id: "check-the-brakes-too-shared-fluid-on-some-cars", text: "Check the brakes too (shared fluid on some cars)" },
      { type: "paragraph", text: <>{"On some cars, the clutch and brakes draw fluid from the same reservoir. This is vehicle-specific: check your handbook rather than assuming every car has the same arrangement. "}<a href="https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G558291&Uid=G1397006&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G548950&userMarket=GBR&vFilteringEnabled=False&variantid=2303" className="font-semibold text-red hover:underline">{"Ford’s owner guidance"}</a>{", for example, confirms a shared reservoir on the model covered."}</> },
      { type: "paragraph", text: <>{"A clutch problem does not automatically mean the brakes have failed. However, a brake warning, low-fluid indication or unusual brake-pedal feel must be treated seriously. Do not drive to test the brakes or assume that topping up fluid makes the vehicle safe."}</> },
      { type: "paragraph", text: <>{"Tell the operator about any brake concern when booking. Do not open hydraulic connections or attempt to bleed the system. The "}<a href="https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security" className="font-semibold text-red hover:underline">{"Highway Code’s vehicle-maintenance guidance"}</a>{" says warning displays should be understood and not ignored."}</> },
      { type: "heading", level: 2, id: "what-to-tell-the-recovery-operator", text: "What to tell the recovery operator" },
      { type: "paragraph", text: <>{"Start with where you are and whether people are safe. Then work through these details:"}</> },
      { type: "list", items: [<>{"1. "}<strong>{"Location:"}</strong>{" road, direction, nearest junction, village, landmark or postcode. Share a location pin only from somewhere safe."}</>, <>{"2. "}<strong>{"Vehicle:"}</strong>{" make, model and whether it is a car or light van."}</>, <>{"3. "}<strong>{"Symptoms:"}</strong>{" slipping, pedal down, difficult gear selection or stuck in gear. Mention any warning lights or brake concerns."}</>, <>{"4. "}<strong>{"Movement:"}</strong>{" whether it was able to roll or steer when last moved. Do not attempt a new test to answer this."}</>, <>{"5. "}<strong>{"Access:"}</strong>{" slope, narrow entrance, low clearance, nearby traffic or a blocked parking position."}</>, <>{"6. "}<strong>{"Destination:"}</strong>{" the garage, home or other suitable address you want to agree."}</>] },
      { type: "paragraph", text: <>{"Keep the keys with you and mention if they are unavailable. Clear information helps the operator assess collection; you do not need to name the failed component."}</> },
      { type: "heading", level: 2, id: "how-recovery-to-your-garage-works", text: "How recovery to your garage works" },
      { type: "paragraph", text: <>{"FSR Recovery Group provides "}<Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"breakdown recovery in Darlington"}</Link>{" for suitable cars and light vans that cannot safely continue, including clutch or gearbox problems. The vehicle can be taken to an agreed garage, home address or another suitable destination."}</> },
      { type: "image", src: "/images/car-on-recovery-truck-county-durham.webp", alt: "Car with a failed clutch loaded onto a recovery truck" },
      { type: "paragraph", text: <>{"The operator assesses the position and vehicle before loading. A car stuck in gear needs that information considered; do not assume it can simply be rolled onto the truck."}</> },
      { type: "paragraph", text: <>{"Contact your chosen garage to check that it can accept the vehicle. Confirm the address, opening arrangements and where a recovered car should be left. Tell the recovery operator if the entrance is narrow or access depends on someone opening a gate."}</> },
      { type: "image", src: "/images/garage-drop-off-after-recovery.webp", alt: "Car being delivered to a garage for clutch repair" },
      { type: "paragraph", text: <>{"For drivers needing "}<Link href="/areas/durham" className="font-semibold text-red hover:underline">{"recovery around Durham"}</Link>{", the same practical details matter. Agree the destination before collection rather than leaving the decision until the car is loaded."}</> },
      { type: "paragraph", text: <>{"FSR Recovery Group transports the vehicle for inspection. It does not repair clutches at the roadside. If you are unsure whether the symptoms are clutch-related, describe them accurately; "}<Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</Link>{" may be relevant to another fault, but do not assume it can resolve clutch failure."}</> },
      { type: "paragraph", text: <>{"You do not need an exact diagnosis to arrange collection. Tell the operator what you observed and let the garage investigate the cause after delivery. Recovery and repair are separate steps."}</> },
      { type: "heading", level: 2, id: "when-the-car-fails-at-home-planned-transport-instead", text: "When the car fails at home: planned transport instead" },
      { type: "paragraph", text: <>{"A car parked safely at home gives you room to organise its next journey. Leave it parked if the clutch has failed, even if the garage is nearby."}</> },
      { type: "paragraph", text: <>{"Ask the garage about accepting the car, then arrange "}<Link href="/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</Link>{" to the agreed address. Describe the driveway, any slope, parked vehicles and the available space. Explain if it is stuck in gear or the keys are missing."}</> },
      { type: "paragraph", text: <>{"Do not move the car onto the street to make collection seem easier. Let the operator assess the existing position and explain what access is needed. Planned transport gets the car to the workshop without asking you to drive it there."}</> },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "heading", level: 3, id: "can-i-drive-with-a-slipping-clutch", text: "Can I drive with a slipping clutch?" },
      { type: "paragraph", text: <>{"Do not assume it is safe because the car still moves. Park safely and describe the symptoms to a garage. If acceleration or control is unreliable, stop driving and arrange recovery."}</> },
      { type: "heading", level: 3, id: "what-do-i-do-if-my-clutch-pedal-goes-to-the-floor", text: "What do I do if my clutch pedal goes to the floor?" },
      { type: "paragraph", text: <>{"Get to a safe stopping place if you can still control the vehicle. Do not force gears or keep restarting. Once safe, call for recovery and explain whether the pedal returns."}</> },
      { type: "heading", level: 3, id: "can-a-car-stuck-in-gear-be-recovered", text: "Can a car stuck in gear be recovered?" },
      { type: "paragraph", text: <>{"Yes, recovery can be arranged, but tell the operator before collection. Explain the position, access and whether the car could roll when last moved. Do not try to free it yourself."}</> },
      { type: "heading", level: 3, id: "is-a-clutch-problem-a-breakdown", text: "Is a clutch problem a breakdown?" },
      { type: "paragraph", text: <>{"A clutch fault that makes the car unsafe or unable to continue is a breakdown. You do not need a confirmed diagnosis before calling for recovery."}</> },
      { type: "heading", level: 3, id: "can-i-drive-to-the-garage-if-the-clutch-is-going", text: "Can I drive to the garage if the clutch is going?" },
      { type: "paragraph", text: <>{"If the clutch has failed, arrange recovery. For an early change while the car otherwise operates normally, get professional advice before deciding to drive. Distance alone does not make the trip safe."}</> },
      { type: "heading", level: 3, id: "what-should-i-tell-the-recovery-company-about-a-clutch-failure", text: "What should I tell the recovery company about a clutch failure?" },
      { type: "paragraph", text: <>{"Give your location, vehicle details, symptoms and destination. Mention a stuck gear, brake concerns, missing keys, slopes or restricted access. Describe what you already know without attempting roadside tests."}</> },
      { type: "heading", level: 2, id: "clutch-trouble-in-darlington-or-county-durham", text: "Clutch trouble in Darlington or County Durham?" },
      { type: "paragraph", text: <>{"If the clutch has failed or you cannot safely continue, call FSR Recovery Group on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">{"+44 7888 502989"}</a></strong>{". Recovery is available 24/7 for suitable cars and light vans."}</> },
      { type: "paragraph", text: <>{"You can also use WhatsApp on the same number or the "}<Link href="/contact" className="font-semibold text-red hover:underline">{"contact page"}</Link>{". Give your location, vehicle details, symptoms and preferred destination. FSR Recovery Group can then discuss recovery to your garage, home or another agreed address."}</> }
    ],
  },
  {
    slug: "car-stuck-in-snow-what-to-do",
    title: "Car Stuck in Snow on a Country Lane? What to Do, and When to Call for a Winch-Out",
    metaTitle: "Car Stuck in Snow? What to Do and When to Call for Help",
    metaDescription: "Stuck in snow or ice on a North East lane? How to free your car safely, what not to do, and when a winch-out or full recovery is the safer choice.",
    excerpt: "Stuck in snow or ice on a North East lane? How to free your car safely, what not to do, and when a winch-out or full recovery is the safer choice.",
    featuredImage: "/images/car-stuck-in-snow-country-lane-featured.webp",
    featuredImageAlt: "Car stuck in snow on a narrow country lane in the North East",
    publishedDate: "2026-11-24",
    updatedDate: "2026-11-24",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "12 min read",
    tags: ["winter driving", "winch-out", "roadside assistance"],
    faqs: [{"question": "What should you do if your car gets stuck in snow?", "answer": "Stop spinning the wheels, switch on your hazard lights, and check you're in a safe place. Clear the snow around the driven wheels, add grit or a rubber mat in front of them, and pull away gently. If the car doesn't move after a few careful tries, or it's on a slope or near a drop, call for help."}, {"question": "Should traction control be on or off in snow?", "answer": "It depends on the car, so follow your handbook. Some guides say to switch it off to allow a little wheel spin, while others advise leaving it on. Your manufacturer's advice for your model is the one to trust."}, {"question": "Is it safe to stay in the car if you're stuck in snow?", "answer": "Usually, yes, if you're in a safe position and not in the path of traffic. Keep the exhaust clear of snow before running the engine, keep your hazards on, and don't leave the engine running for long periods. If the car is a danger to others, get out and stand well clear."}, {"question": "Can you use cat litter or floor mats to get unstuck?", "answer": "Yes. Both work well. Put cat litter, grit or sand in front of the driven tyres, or push rubber mats firmly under them. Mats can be thrown out or marked by the tyre, so use old ones if you can."}, {"question": "When should I call a winch-out service instead of trying again?", "answer": "Call when the car is sliding towards a ditch or verge, is on a slope, is blocking a lane, is partly off the road, or hasn't moved after a few careful attempts. Our winch-out service is there for exactly these situations."}, {"question": "Will spinning the wheels damage my car?", "answer": "It can add wear to the tyres and drivetrain, and it usually makes the car more stuck. Gentle attempts are fine. Repeated hard spinning is best avoided. If you're unsure whether something has been damaged, have it checked."}],
    content: [
      { type: "paragraph", text: <>{"If your car is stuck in snow, take your foot off the accelerator. Spinning the wheels digs the car deeper and polishes the snow under the tyre into ice. Put your hazard lights on and check you are not in anyone's path. Then clear the snow from around the driven wheels, put something gritty or rubbery in front of them, and pull away gently in the highest sensible gear. Give it a few careful tries. If the car won't move, is sliding towards a ditch or verge, is on a slope, or is blocking the lane, stop trying and call for help. A "}<Link href="/services/winch-out" className="font-semibold text-red hover:underline">{"winch-out service"}</Link>{" is often the safer choice."}</> },
      { type: "paragraph", text: <>{"This guide is written for the lanes, farm tracks and hill roads of the North East, where one wrong move can put a car in a wall or a ditch. It is for being "}<strong>{"stuck"}</strong>{", not broken down. If your car has failed on a main road, our guide to "}<Link href="/blog/broken-down-on-the-a66-in-winter" className="font-semibold text-red hover:underline">{"breaking down on the A66 in winter"}</Link>{" is the better read."}</> },
      { type: "heading", level: 2, id: "first-things-first-make-yourself-safe", text: "First things first: make yourself safe" },
      { type: "paragraph", text: <>{"The first 60 seconds matter more than the digging. Before you get out, run through this:"}</> },
      { type: "list", items: [<>{"1. "}<strong>{"Stop the wheels spinning."}</strong>{" Ease off the accelerator and let the car settle."}</>, <>{"2. "}<strong>{"Switch your hazard lights on."}</strong>{" Snow muffles sound and cuts visibility, so other drivers may not see you until late."}</>, <>{"3. "}<strong>{"Look at where you are."}</strong>{" Are you on a bend, at the brow of a hill, or across the road? A car stuck in a blind spot is a danger to you and to others."}</>, <>{"4. "}<strong>{"Look at the ground."}</strong>{" Is there a steep drop, a ditch or a water-filled verge beside you? If the car could slide that way, don't try to drive it out."}</>, <>{"5. "}<strong>{"Check your exhaust."}</strong>{" If snow has built up around the tailpipe, don't run the engine until it is clear. Fumes can leak into the cabin."}</>] },
      { type: "paragraph", text: <>{"If you get out, put on a hi-vis jacket if you have one, and keep well away from moving traffic. On a quiet lane the car itself is often the safest thing to stay near. Don't wander off in poor weather to look for signal or help unless you have to."}</> },
      { type: "heading", level: 2, id: "how-to-free-a-car-stuck-in-snow-step-by-step", text: "How to free a car stuck in snow: step by step" },
      { type: "paragraph", text: <>{"Stay calm and work through these in order."}</> },
      { type: "list", items: [<>{"1. "}<strong>{"Straighten the steering wheel."}</strong>{" Turned wheels plough snow in front of them. Straight wheels roll more easily."}</>, <>{"2. "}<strong>{"Turn off anything that drains the engine."}</strong>{" Switch off heated seats and the blower if you can. You need the car to be as simple as possible to move."}</>, <>{"3. "}<strong>{"Clear the snow around the driven wheels."}</strong>{" Which wheels drive the car depends on the vehicle, so check your handbook if you're unsure. Dig out the snow in front of and behind those tyres. Clear the gap under the car too. If snow is packed against the underside, the car may be resting on it with the wheels barely touching the ground."}</>] },
      { type: "image", src: "/images/clearing-snow-from-car-wheel.webp", alt: "Clearing snow from in front of a car tyre with a small shovel" },
      { type: "list", items: [<>{"4. "}<strong>{"Make a path."}</strong>{" Clear a short, gentle ramp in the direction you want to move, a car's length or so."}</>, <>{"5. "}<strong>{"Add grip."}</strong>{" Put something rough or rubbery in front of each driven tyre: grit, sand, a bag of cat litter, or your rubber car mats. Push the mats in firmly, ribbed side up, so the tyre can bite and roll over them."}</>] },
      { type: "image", src: "/images/grit-mat-under-tyre-snow.webp", alt: "Car mat and grit placed in front of a tyre to help it grip on snow" },
      { type: "list", items: [<>{"6. "}<strong>{"Pull away gently."}</strong>{" See below."}</>, <>{"7. "}<strong>{"Don't give up the ground you've gained."}</strong>{" If the car moves a short way and stops, stop too. Clear again and add more grip before the next try."}</>, <>{"8. "}<strong>{"Keep going in a straight line."}</strong>{" Once the car moves, keep it rolling gently until you reach firmer, cleared ground. Don't stop on a slope if you can avoid it."}</>] },
      { type: "heading", level: 3, id: "pulling-away", text: "Pulling away" },
      { type: "paragraph", text: <>{"Most modern cars do best with gentle, smooth power. Use second gear in a manual if your handbook allows it. In an automatic, select drive and follow any winter or snow mode in the handbook. Bring the clutch up slowly, or squeeze the accelerator the way you would on a wet road. If the wheels start to spin, ease off straight away. Sudden power breaks the grip you've just made."}</> },
      { type: "heading", level: 3, id: "rocking-the-car-gently", text: "Rocking the car, gently" },
      { type: "paragraph", text: <>{"If the car won't move, you can try rocking it out. Move forward a short way, release, let the car roll back, then move forward again with a little more momentum. Keep each movement small and smooth. This works best when the car is only a few inches stuck. If the wheels are spinning without moving the car at all after a few rocks, stop. Spinning only makes the hole deeper."}</> },
      { type: "heading", level: 2, id: "ice-hills-and-lay-bys-what-changes", text: "Ice, hills and lay-bys: what changes" },
      { type: "paragraph", text: <><strong>{"Ice."}</strong>{" Snow often sits on top of ice, especially on shaded stretches and at the edge of the road. On ice, tyres make almost no noise, a point the "}<a href="https://www.gov.uk/guidance/the-highway-code/driving-in-adverse-weather-conditions-226-to-237" className="font-semibold text-red hover:underline">{"Highway Code makes in rule 231"}</a>{". If you're stuck on ice, grit or sand under the tyres matters more than digging. Be careful when you stand on the surface to put it down. Use a gentle touch on the pedals and don't hurry."}</> },
      { type: "paragraph", text: <><strong>{"Hills."}</strong>{" Being stuck on a slope is the situation most likely to turn from awkward into dangerous. A car can slide backwards or sideways as soon as it loses grip. If you are on a climb on a road such as the "}<Link href="/areas/a68" className="font-semibold text-red hover:underline">{"A68"}</Link>{", put the handbrake on, hazards on, and think carefully before you try to move. Do not attempt to reverse down a steep, icy hill. If the car won't climb on the second or third try, call for help instead of continuing."}</> },
      { type: "paragraph", text: <><strong>{"Lay-bys and driveways."}</strong>{" These often collect snow that isn't cleared by gritters. The surface can hide ice, soft verge or a kerb. Clear around the wheels as usual, but check what is under the snow before you drive across it. If the car is stuck half on a verge, don't try to drive it straight out sideways."}</> },
      { type: "heading", level: 2, id: "what-not-to-do-when-you-re-stuck", text: "What not to do when you're stuck" },
      { type: "paragraph", text: <>{"A few well-meant fixes can make things worse, or put you at risk."}</> },
      { type: "list", items: [<><strong>{"Don't keep revving."}</strong>{" Spinning wheels melt and polish the snow into ice and dig the car in further. The Highway Code (rule 231) advises slow, gentle driving in as high a gear as possible, and this applies when you're pulling away too."}</>, <><strong>{"Don't try a rope or strap tow."}</strong>{" A DIY tow with a passing vehicle can snap, shift suddenly or damage both cars. If you need pulling out, that is a job for a recovery operator with the right equipment."}</>, <><strong>{"Don't pour boiling water on the ice."}</strong>{" It can crack glass, and it will refreeze into a worse surface within minutes."}</>, <><strong>{"Don't stand behind a wheel while someone else drives."}</strong>{" Snow, grit and mats can fire out at speed."}</>, <><strong>{"Don't run the engine with the exhaust blocked."}</strong>{" Check that the tailpipe is clear before running the engine for heat."}</>, <><strong>{"Don't push on if the car is moving the wrong way."}</strong>{" If it is sliding towards a drop, the verge or oncoming traffic, stop and call for help."}</>] },
      { type: "heading", level: 2, id: "when-to-stop-trying-and-call-for-help", text: "When to stop trying and call for help" },
      { type: "paragraph", text: <>{"Digging yourself out is a good first move. It stops being a good one when the risk goes up or the effort stops working. Call for help when:"}</> },
      { type: "list", items: [<>{"the car is "}<strong>{"sliding or drifting"}</strong>{" towards a ditch, verge, wall or drop"}</>, <>{"you are on a "}<strong>{"slope"}</strong>{" and the car won't hold its position"}</>, <>{"the car is "}<strong>{"blocking the lane"}</strong>{" or sits somewhere other drivers can't see it"}</>, <>{"the car is "}<strong>{"partly off the road surface"}</strong>{", on soft ground or in a ditch"}</>, <>{"you've made "}<strong>{"a few careful attempts"}</strong>{" and the car hasn't moved"}</>, <>{"you are "}<strong>{"cold, tired or alone"}</strong>{", and the effort is making things worse"}</>, <>{"the wheels have "}<strong>{"dug in"}</strong>{" to the point where the underside is resting on snow"}</>] },
      { type: "paragraph", text: <>{"If the car is a danger to other road users, and you can't make it safe, you should also tell the police. Our "}<Link href="/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</Link>{" team can help once you're safe and the car is where it is."}</> },
      { type: "heading", level: 2, id: "what-happens-during-a-winch-out", text: "What happens during a winch-out" },
      { type: "image", src: "/images/recovery-winch-line-snowy-verge.webp", alt: "Recovery operator winching a car off a snowy verge" },
      { type: "paragraph", text: <>{"A winch-out is a controlled way of pulling a stuck car back onto firm ground, using a cable fixed to a recovery vehicle. FSR Recovery Group's winch-out service covers cars and suitable light vans stuck in mud, wet grass, soft ground, loss of traction and awkward roadside positions, and the service is listed as 24/7."}</> },
      { type: "paragraph", text: <>{"Here is what to expect:"}</> },
      { type: "list", items: [<>{"1. "}<strong>{"You call and describe the situation."}</strong>{" The more detail you give, the better."}</>, <>{"2. "}<strong>{"The operator assesses the location and the ground."}</strong>{" They look at where the car is, which way it faces, how it's positioned and what's around it, before any equipment is attached."}</>, <>{"3. "}<strong>{"The car is winched in a controlled way, where conditions allow."}</strong>{" The operator works slowly and keeps people well clear of the line."}</>, <>{"4. "}<strong>{"If the car can't continue, recovery is the next step."}</strong>{" If the car is damaged or not safe to drive after it's freed, "}<Link href="/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</Link>{" can take it from there."}</>] },
      { type: "paragraph", text: <><strong>{"What to tell the operator when you call:"}</strong></> },
      { type: "list", items: [<>{"your location: road name or number, nearest village or landmark, and direction of travel"}</>, <>{"the make and type of vehicle, and whether it's a car or a light van"}</>, <>{"how the car is sitting: on the road, on a verge, on a slope, facing a ditch"}</>, <>{"whether it's blocking the lane"}</>, <>{"whether anyone is inside, and whether anyone is hurt"}</>] },
      { type: "paragraph", text: <>{"Stay clear of the winch line while it's under load. Keep everyone back and let the operator do the work."}</> },
      { type: "heading", level: 2, id: "winter-kit-for-north-east-country-lanes", text: "Winter kit for North East country lanes" },
      { type: "paragraph", text: <><a href="https://www.gov.uk/guidance/the-highway-code/driving-in-adverse-weather-conditions-226-to-237" className="font-semibold text-red hover:underline">{"Highway Code rule 228"}</a>{" suggests carrying an emergency kit in winter, including a shovel, torch, warm clothing and boots, a first aid kit and some food and drink. For Teesdale, Weardale and the hill roads around "}<Link href="/areas/barnard-castle" className="font-semibold text-red hover:underline">{"Barnard Castle"}</Link>{", it's worth adding:"}</> },
      { type: "list", items: [<>{"a "}<strong>{"small folding shovel"}</strong></>, <><strong>{"grit, sand or cat litter"}</strong>{" in a bag"}</>, <>{"a pair of "}<strong>{"rubber mats"}</strong>{" (your car's own work well)"}</>, <>{"an "}<strong>{"ice scraper and de-icer"}</strong></>, <>{"a "}<strong>{"fully charged phone and a car charger"}</strong></>, <><strong>{"gloves, a hat and a blanket"}</strong></>, <>{"a "}<strong>{"hi-vis jacket and a torch"}</strong></>, <>{"a "}<strong>{"flask"}</strong>{" and some food"}</>] },
      { type: "paragraph", text: <>{"Cold weather also tests your battery. If the engine is slow to start on a freezing morning, our guide to a "}<Link href="/blog/flat-battery-cold-morning" className="font-semibold text-red hover:underline">{"flat battery on a cold morning"}</Link>{" explains what to check. If you're driving across moorland such as the "}<Link href="/areas/a66" className="font-semibold text-red hover:underline">{"A66"}</Link>{", tell someone your route and expected arrival time."}</> },
      { type: "paragraph", text: <>{"Before you set off, check the "}<a href="https://www.metoffice.gov.uk/weather/warnings-and-advice/uk-warnings" className="font-semibold text-red hover:underline">{"Met Office weather warnings"}</a>{". If a warning for snow or ice is in force, rule 228 says not to drive unless your journey is essential."}</> },
      { type: "heading", level: 2, id: "after-you-re-moving-again-quick-checks", text: "After you're moving again: quick checks" },
      { type: "paragraph", text: <>{"Once the car is free, pull up somewhere safe on firm ground before you drive off. Then:"}</> },
      { type: "list", items: [<>{"1. "}<strong>{"Walk round the car."}</strong>{" Look at the tyres, bumpers and wheel arches. Clear any packed snow and ice from the wheel arches so it doesn't block the wheels."}</>, <>{"2. "}<strong>{"Look underneath."}</strong>{" Check for anything hanging, dragging or damaged."}</>, <>{"3. "}<strong>{"Check the dashboard."}</strong>{" If any warning light comes on, or the car feels or sounds wrong, stop and get it looked at."}</>, <>{"4. "}<strong>{"Drive gently."}</strong>{" Brake and steer smoothly, leave a big gap, and stay in a high gear. Rule 230 warns that stopping distances in snow and ice can be up to ten times greater than on a dry road."}</>, <>{"5. "}<strong>{"Rethink the route."}</strong>{" If the lane that caught you out is the only way home, consider another road, or wait until it has been treated."}</>] },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "paragraph", text: <><strong>{"What should you do if your car gets stuck in snow?"}</strong></> },
      { type: "paragraph", text: <>{"Stop spinning the wheels, switch on your hazard lights, and check you're in a safe place. Clear the snow around the driven wheels, add grit or a rubber mat in front of them, and pull away gently. If the car doesn't move after a few careful tries, or it's on a slope or near a drop, call for help."}</> },
      { type: "paragraph", text: <><strong>{"Should traction control be on or off in snow?"}</strong></> },
      { type: "paragraph", text: <>{"It depends on the car, so follow your handbook. Some guides say to switch it off to allow a little wheel spin, while others advise leaving it on. Your manufacturer's advice for your model is the one to trust."}</> },
      { type: "paragraph", text: <><strong>{"Is it safe to stay in the car if you're stuck in snow?"}</strong></> },
      { type: "paragraph", text: <>{"Usually, yes, if you're in a safe position and not in the path of traffic. Keep the exhaust clear of snow before running the engine, keep your hazards on, and don't leave the engine running for long periods. If the car is a danger to others, get out and stand well clear."}</> },
      { type: "paragraph", text: <><strong>{"Can you use cat litter or floor mats to get unstuck?"}</strong></> },
      { type: "paragraph", text: <>{"Yes. Both work well. Put cat litter, grit or sand in front of the driven tyres, or push rubber mats firmly under them. Mats can be thrown out or marked by the tyre, so use old ones if you can."}</> },
      { type: "paragraph", text: <><strong>{"When should I call a winch-out service instead of trying again?"}</strong></> },
      { type: "paragraph", text: <>{"Call when the car is sliding towards a ditch or verge, is on a slope, is blocking a lane, is partly off the road, or hasn't moved after a few careful attempts. Our "}<Link href="/services/winch-out" className="font-semibold text-red hover:underline">{"winch-out service"}</Link>{" is there for exactly these situations."}</> },
      { type: "paragraph", text: <><strong>{"Will spinning the wheels damage my car?"}</strong></> },
      { type: "paragraph", text: <>{"It can add wear to the tyres and drivetrain, and it usually makes the car more stuck. Gentle attempts are fine. Repeated hard spinning is best avoided. If you're unsure whether something has been damaged, have it checked."}</> },
      { type: "heading", level: 2, id: "stuck-in-snow-near-darlington-durham-or-the-dales", text: "Stuck in snow near Darlington, Durham or the Dales?" },
      { type: "paragraph", text: <>{"If you've tried the steps above and the car still won't move, or you don't feel safe doing any more, call FSR Recovery Group on "}<strong>{"+44 7888 502989"}</strong>{". You can also message us on WhatsApp on the same number, or use our "}<Link href="/contact" className="font-semibold text-red hover:underline">{"contact page"}</Link>{". Tell us where you are, what you're driving and how the car is sitting, and we'll talk you through what happens next."}</> }
    ],
  },
  {
    slug: "after-a-car-accident-county-durham",
    title: "After a Collision in County Durham or Darlington: What to Do at the Scene and How Accident Recovery Works",
    metaTitle: "After a Car Accident in County Durham: What to Do Next",
    metaDescription: "What to do at the scene of a collision in County Durham or Darlington, when to call 999 or 101, what details to swap and how accident recovery works.",
    excerpt: "After a car accident, stop safely, check for injuries and call 999 if anyone is in danger or needs urgent help. Exchange details, record what happened when safe, tell your insurer and arrange recovery if the car cannot safely continue.",
    featuredImage: "/images/after-a-car-accident-county-durham-featured.webp",
    featuredImageAlt: "Recovery truck loading a damaged car beside a rural road in County Durham.",
    publishedDate: "2026-11-23",
    updatedDate: "2026-11-23",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "11 min read",
    tags: ["accident recovery", "County Durham", "Darlington", "roadside safety"],
    faqs: [
      { question: "Do I have to report a car accident to the police in County Durham?", answer: "Report it if anyone was injured, details could not be exchanged, or you suspect a driving offence, following Durham Constabulary’s guidance. If details were exchanged, nobody was injured and no driving offence is alleged, its guidance says a police report is not needed." },
      { question: "What details must I exchange after a collision?", answer: "Give your name, address and vehicle registration, plus the owner’s name and address if different. Durham Constabulary also says to provide insurance details if requested. Record the other parties’ details accurately and tell police if you cannot obtain them." },
      { question: "Should I call 999 or 101 after a crash?", answer: "Call 999 for danger, serious injury, a dangerous obstruction or a suspected serious offence. Use 101 for non-emergency police help, including difficulty obtaining another driver’s details. Do not wait for a recovery booking when emergency assistance is needed." },
      { question: "Can I drive my car after a minor accident?", answer: "Only if it is safe and roadworthy. Small-looking damage does not prove that steering, brakes, tyres or other parts are unaffected. If anything seems wrong, or you cannot judge the condition safely, arrange assessment or recovery instead of driving away." },
      { question: "Where will my car be taken after accident recovery?", answer: "The destination should be agreed before collection: a suitable garage, bodyshop, home or another agreed location. If your insurer is directing the recovery, confirm its instructions first. Tell the operator if you have not yet decided where the vehicle should go." },
      { question: "Should I call my insurer before booking recovery?", answer: "Once emergency needs are addressed, check with your insurer before independently booking where possible. It may arrange recovery or specify the destination. Explain if the vehicle is in danger and follow police instructions; do not delay an emergency call while checking a policy." }
    ],
    content: [
      { type: "paragraph", text: <>{"After a car accident, stop safely, check for injuries and call 999 if anyone is in danger or needs urgent help. Exchange details, record what happened when safe, tell your insurer and arrange recovery if the car cannot safely continue."}</> },
      { type: "paragraph", text: <>{"That order matters whether you are on the A167, a Darlington street or a rural County Durham lane. A damaged car and passing traffic can make a stressful moment worse. Work through one step at a time; photographs and recovery bookings come after people’s safety."}</> },
      { type: "heading", level: 2, id: "short-answer-the-first-things-to-do-after-a-collision", text: "Short answer: the first things to do after a collision" },
      { type: "paragraph", text: <>{"Start with the immediate danger, then deal with information and the vehicle:"}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Stop as soon as it is safe."}</strong>{" Use hazards, switch off the engine once stopped and assess your surroundings."}</>,
        <>{"2. "}<strong>{"Check people first."}</strong>{" Call 999 for serious injury, danger or a dangerous road obstruction."}</>,
        <>{"3. "}<strong>{"Exchange details."}</strong>{" Record names, addresses, vehicle registrations and insurance information as appropriate."}</>,
        <>{"4. "}<strong>{"Keep a factual record."}</strong>{" Take photographs and witness details only from somewhere safe."}</>,
        <>{"5. "}<strong>{"Contact your insurer."}</strong>{" Check whether it will arrange recovery and where the car should go."}</>,
        <>{"6. "}<strong>{"Arrange suitable recovery."}</strong>{" Explain the location, damage and agreed destination before collection."}</>
      ] },
      { type: "paragraph", text: <>{"You do not need to settle responsibility at the roadside before following these steps. This is practical guidance, not legal advice; follow police and emergency-service instructions for your circumstances."}</> },
      { type: "heading", level: 2, id: "step-1-make-the-scene-safe-a-roads-a1-m-and-rural-lanes", text: "Step 1: Make the scene safe (A-roads, A1(M) and rural lanes)" },
      { type: "image", src: "/images/collision-scene-hazard-lights-hi-vis.webp", alt: "Driver in a hi-vis vest waiting safely behind a barrier after a collision." },
      { type: "paragraph", text: <>{"Make your stopping place and the people around you the first priority. Do not stand between a damaged vehicle and approaching traffic, and do not attempt repairs beside a live carriageway."}</> },
      { type: "paragraph", text: <>{"On the A66, A167 or A68, explain whether the car obstructs a lane, junction or bend. On a rural road, give a nearby village, farm entrance or postcode if known. A location that looks quiet can still expose people to approaching vehicles."}</> },
      { type: "paragraph", text: <>{"On the "}<a href="https://fsrrecoverygroups.co.uk/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M)"}</a>{", follow motorway precautions. If you can leave safely, use the side furthest from traffic and get well clear, behind a barrier where available. Do not put out a warning triangle on the motorway or carriageway."}</> },
      { type: "paragraph", text: <>{"If you cannot get clear safely, remain belted in with hazards on and call 999 for the police. Our "}<a href="https://fsrrecoverygroups.co.uk/blog/broken-down-on-the-a1m" className="font-semibold text-red hover:underline">{"A1(M) breakdown safety guide"}</a>{" explains motorway stopping and location details. Follow the "}<a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="font-semibold text-red hover:underline">{"National Highways motorway guidance"}</a>{" and any instructions from responders."}</> },
      { type: "heading", level: 2, id: "step-2-check-for-injuries-and-when-to-call-999", text: "Step 2: Check for injuries and when to call 999" },
      { type: "paragraph", text: <>{"Call 999 when somebody is in danger, seriously injured, or the collision creates a dangerous obstruction. Durham Constabulary also advises an emergency call if you believe a serious offence has been committed."}</> },
      { type: "paragraph", text: <>{"Give the road, direction and best available location first, followed by what happened and the number of people affected. State whether vehicles remain in live lanes. Use a junction number, visible marker reference or safely shared map location rather than guessing."}</> },
      { type: "paragraph", text: <><a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"Highway Code Rule 283"}</a>{" says not to move injured people unless they face immediate danger. Do not remove a motorcyclist’s helmet unless essential and you are trained. Follow the call handler’s directions, including first-aid instructions."}</> },
      { type: "paragraph", text: <>{"Keep uninjured people away from traffic where possible. Do not smoke near the scene. If there is smoke, fire or a suspected fuel leak, tell the emergency operator and keep clear instead of investigating."}</> },
      { type: "heading", level: 2, id: "step-3-stop-exchange-details-and-when-to-call-101", text: "Step 3: Stop, exchange details and when to call 101" },
      { type: "image", src: "/images/exchange-details-after-collision.webp", alt: "Two drivers exchanging details after a minor collision." },
      { type: "paragraph", text: <>{"Stopping is a legal duty after a reportable collision. "}<a href="https://www.durham.police.uk/advice/advice-and-information/rs/road-safety/collisions/" className="font-semibold text-red hover:underline">{"Durham Constabulary’s collision guidance"}</a>{" explains the local requirements and what to do at the scene."}</> },
      { type: "paragraph", text: <>{"Exchange your name, address and vehicle registration with those involved. Give the vehicle owner’s name and address if the vehicle is not yours. Durham Constabulary says to provide insurance details if requested."}</> },
      { type: "paragraph", text: <>{"Record the information carefully rather than relying on a remembered registration or an incomplete phone contact. If safe, check that a written note or photograph is readable before leaving."}</> },
      { type: "paragraph", text: <>{"If someone will not provide details, or has left without giving them, call 101 while still at the scene. Use 999 instead where there is immediate danger or another emergency. Do not follow a departing vehicle or turn a disagreement into a confrontation."}</> },
      { type: "heading", level: 2, id: "do-you-need-to-report-the-collision-to-the-police", text: "Do you need to report the collision to the police?" },
      { type: "paragraph", text: <>{"Reporting depends on what happened, not simply how small the dent looks. Durham Constabulary says to report a collision if anyone was injured, details could not be exchanged, or you suspect a driving offence."}</> },
      { type: "paragraph", text: <>{"Its guidance says a police report is not needed where details have been exchanged, nobody was injured and there are no allegations of driving offences. If unsure how the guidance applies, ask the police rather than assuming another driver has reported it."}</> },
      { type: "paragraph", text: <>{"Where details were not given, "}<a href="https://www.gov.uk/vehicle-insurance/if-youre-in-an-accident" className="font-semibold text-red hover:underline">{"GOV.UK’s accident guidance"}</a>{" says to report within 24 hours. The Highway Code says as soon as reasonably practicable, within that limit. Do not treat the limit as a reason to delay."}</> },
      { type: "paragraph", text: <>{"Use Durham Constabulary’s online reporting route for a non-emergency report where appropriate. Keep the submission and reference for your insurer. A recovery booking does not replace a police report or the duty to exchange details."}</> },
      { type: "heading", level: 2, id: "step-4-record-evidence-photos-notes-witnesses-dashcam", text: "Step 4: Record evidence (photos, notes, witnesses, dashcam)" },
      { type: "image", src: "/images/photograph-car-damage-evidence.webp", alt: "Driver photographing car damage as evidence after an accident." },
      { type: "paragraph", text: <>{"Collect information only after the immediate safety and injury checks. No photograph is worth stepping into traffic, crossing a carriageway or standing beside an unstable vehicle."}</> },
      { type: "paragraph", text: <>{"From somewhere safe, record:"}</> },
      { type: "list", items: [
        <>{"The road, date, time and direction of travel."}</>,
        <>{"Vehicle registrations, makes and models."}</>,
        <>{"Visible damage to vehicles and nearby property."}</>,
        <>{"The wider scene, signs and road markings where safely visible."}</>,
        <>{"Weather, light and road conditions you observed."}</>,
        <>{"Witness contact details, if they agree to provide them."}</>
      ] },
      { type: "paragraph", text: <>{"Make a short factual note while events are fresh. Separate what you saw from what another person told you. Avoid guessing speeds, causes or injuries, and do not alter the scene simply to make a clearer photograph."}</> },
      { type: "paragraph", text: <>{"If you have dashcam footage, preserve the relevant recording when safe. Note any nearby cameras for the police or insurer, without assuming footage exists or that you can obtain it. Keep records together so you can explain the incident consistently."}</> },
      { type: "heading", level: 2, id: "step-5-tell-your-insurer", text: "Step 5: Tell your insurer" },
      { type: "paragraph", text: <>{"Notify your insurer even if you do not plan to claim. "}<a href="https://www.gov.uk/vehicle-insurance/if-youre-in-an-accident" className="font-semibold text-red hover:underline">{"GOV.UK’s insurance guidance"}</a>{" makes this distinction clear: deciding against a claim does not remove the need to report the accident to your insurance company."}</> },
      { type: "paragraph", text: <>{"Have your policy details, registrations, photographs and any police reference ready. Describe events accurately and follow the insurer’s process. Ask what it needs next rather than promising another driver a particular outcome."}</> },
      { type: "paragraph", text: <>{"Before arranging your own recovery, ask whether the insurer will organise it and whether it specifies a destination. Check your policy rather than assuming recovery or a particular provider is included. Tell the recovery operator about any arrangements already made."}</> },
      { type: "heading", level: 2, id: "is-the-car-safe-to-drive-signs-it-needs-recovery", text: "Is the car safe to drive? Signs it needs recovery" },
      { type: "paragraph", text: <>{"A car can start and still be unsafe to drive after a collision. A current MOT does not establish its condition after fresh damage; "}<a href="https://www.gov.uk/check-vehicle-safe" className="font-semibold text-red hover:underline">{"GOV.UK’s roadworthiness guidance"}</a>{" explains that drivers remain responsible for vehicle safety."}</> },
      { type: "paragraph", text: <>{"Do not drive away if you notice:"}</> },
      { type: "list", items: [
        <>{"Damage to a tyre or wheel, or bodywork pressing against it."}</>,
        <>{"Steering or braking that feels different."}</>,
        <>{"Fluid leaking or smoke from the vehicle."}</>,
        <>{"Loose bodywork or parts that could detach."}</>,
        <>{"Damage affecting your view, lights or mirrors."}</>,
        <>{"Warning messages or other signs the car may not operate safely."}</>
      ] },
      { type: "paragraph", text: <>{"These are reasons to stop and seek assessment, not a complete roadside inspection checklist. Do not crawl underneath, reach around damaged parts or attempt a test drive into traffic to find out whether the car is all right."}</> },
      { type: "paragraph", text: <>{"If you are unsure, explain the damage and arrange professional advice. Recovery is often the practical way to get a vehicle to a suitable place for inspection without relying on it being safe to drive."}</> },
      { type: "heading", level: 2, id: "how-accident-recovery-works-with-fsr-recovery-group", text: "How accident recovery works with FSR Recovery Group" },
      { type: "paragraph", text: <>{"Once immediate danger has been dealt with, "}<a href="https://fsrrecoverygroups.co.uk/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">{"FSR Recovery Group’s accident recovery service"}</a>{" can help with suitable cars and light vans that cannot safely continue. Assistance is available 24/7, subject to the vehicle, location and circumstances."}</> },
      { type: "paragraph", text: <>{"Start the call with these details:"}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Location:"}</strong>{" road, direction, junction or marker reference, postcode or a safely shared location. Say whether the car remains in a live lane or has left the road."}</>,
        <>{"2. "}<strong>{"Vehicle:"}</strong>{" make, model and whether it is a car or light van. Mention if it is automatic, hybrid or electric."}</>,
        <>{"3. "}<strong>{"Condition:"}</strong>{" visible damage, whether it starts, whether wheels turn and whether steering and neutral selection work. Report only what you already know; do not test these beside traffic."}</>,
        <>{"4. "}<strong>{"People and access:"}</strong>{" passenger needs, police involvement, restricted access or an awkward stopping position."}</>,
        <>{"5. "}<strong>{"Destination:"}</strong>{" a garage, bodyshop, home or another suitable agreed address, including any instructions from your insurer."}</>
      ] },
      { type: "paragraph", text: <>{"For accident recovery around "}<a href="https://fsrrecoverygroups.co.uk/areas/durham" className="font-semibold text-red hover:underline">{"Durham"}</a>{" or "}<a href="https://fsrrecoverygroups.co.uk/areas/bishop-auckland" className="font-semibold text-red hover:underline">{"Bishop Auckland"}</a>{", a town name alone may not identify the collection point. Explain where the vehicle actually stopped and whether you are still beside it."}</> },
      { type: "paragraph", text: <>{"The operator can then discuss suitable recovery arrangements. Do not assume that a damaged car which will not roll can be collected in the same way as a freely moving vehicle. Clear information helps the operator plan the loading."}</> },
      { type: "paragraph", text: <>{"Agree the destination before the vehicle moves. If a separate onward move is needed later, see "}<a href="https://fsrrecoverygroups.co.uk/services/vehicle-transporting" className="font-semibold text-red hover:underline">{"vehicle transporting"}</a>{". Recovery arrangements and the insurer’s decisions about repairs or a claim are separate matters."}</> },
      { type: "heading", level: 2, id: "what-not-to-do-after-a-collision", text: "What not to do after a collision" },
      { type: "paragraph", text: <>{"Avoid decisions made simply to get the incident over with:"}</> },
      { type: "list", items: [
        <>{"Do not drive a vehicle that may be unsafe."}</>,
        <>{"Do not leave without meeting your duties to stop, exchange details and report where required."}</>,
        <>{"Do not enter traffic to collect debris or take photographs."}</>,
        <>{"Do not attempt motorway repairs or put out a warning triangle there."}</>,
        <>{"Do not argue about blame or make guesses about responsibility. Give factual information to police and insurers."}</>,
        <>{"Do not arrange duplicate recovery without checking what your insurer or another operator has already organised."}</>
      ] },
      { type: "paragraph", text: <>{"The same practical steps apply whether you believe the collision was your fault or somebody else’s. Concentrate on safety, accurate information and the required reports; responsibility is not something this guide can decide."}</> },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "heading", level: 3, id: "do-i-have-to-report-a-car-accident-to-the-police-in-county-durham", text: "Do I have to report a car accident to the police in County Durham?" },
      { type: "paragraph", text: <>{"Report it if anyone was injured, details could not be exchanged, or you suspect a driving offence, following Durham Constabulary’s guidance. If details were exchanged, nobody was injured and no driving offence is alleged, its guidance says a police report is not needed."}</> },
      { type: "heading", level: 3, id: "what-details-must-i-exchange-after-a-collision", text: "What details must I exchange after a collision?" },
      { type: "paragraph", text: <>{"Give your name, address and vehicle registration, plus the owner’s name and address if different. Durham Constabulary also says to provide insurance details if requested. Record the other parties’ details accurately and tell police if you cannot obtain them."}</> },
      { type: "heading", level: 3, id: "should-i-call-999-or-101-after-a-crash", text: "Should I call 999 or 101 after a crash?" },
      { type: "paragraph", text: <>{"Call 999 for danger, serious injury, a dangerous obstruction or a suspected serious offence. Use 101 for non-emergency police help, including difficulty obtaining another driver’s details. Do not wait for a recovery booking when emergency assistance is needed."}</> },
      { type: "heading", level: 3, id: "can-i-drive-my-car-after-a-minor-accident", text: "Can I drive my car after a minor accident?" },
      { type: "paragraph", text: <>{"Only if it is safe and roadworthy. Small-looking damage does not prove that steering, brakes, tyres or other parts are unaffected. If anything seems wrong, or you cannot judge the condition safely, arrange assessment or recovery instead of driving away."}</> },
      { type: "heading", level: 3, id: "where-will-my-car-be-taken-after-accident-recovery", text: "Where will my car be taken after accident recovery?" },
      { type: "paragraph", text: <>{"The destination should be agreed before collection: a suitable garage, bodyshop, home or another agreed location. If your insurer is directing the recovery, confirm its instructions first. Tell the operator if you have not yet decided where the vehicle should go."}</> },
      { type: "heading", level: 3, id: "should-i-call-my-insurer-before-booking-recovery", text: "Should I call my insurer before booking recovery?" },
      { type: "paragraph", text: <>{"Once emergency needs are addressed, check with your insurer before independently booking where possible. It may arrange recovery or specify the destination. Explain if the vehicle is in danger and follow police instructions; do not delay an emergency call while checking a policy."}</> },
      { type: "heading", level: 2, id: "need-accident-recovery-in-darlington-or-county-durham", text: "Need accident recovery in Darlington or County Durham?" },
      { type: "paragraph", text: <>{"Once you are safe, call "}<strong>{"FSR Recovery Group on "}<a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a></strong>{", or WhatsApp the same number. Give your location, vehicle details, visible damage and intended destination, and mention any police or insurer instructions."}</> },
      { type: "paragraph", text: <>{"See our "}<a href="https://fsrrecoverygroups.co.uk/services/accident-emergency-assistance" className="font-semibold text-red hover:underline">{"accident recovery and emergency assistance"}</a>{" page, or use the "}<a href="https://fsrrecoverygroups.co.uk/contact" className="font-semibold text-red hover:underline">{"contact page"}</a>{" for other enquiries. If anyone is injured or in immediate danger, contact the emergency services first."}</> },
    ],
  },
  {
    slug: "flat-battery-cold-morning",
    title: "Flat Battery on a Cold Morning? Jump Start, Replace or Recover: A North East Driver's Guide",
    metaTitle: "Flat Battery on a Cold Morning? What to Do Next",
    metaDescription: "Car won't start on a frosty North East morning? How to tell a flat battery, jump start it safely, when a battery may need replacing and when to call for help.",
    excerpt: "Frost on the windscreen is manageable. A car that barely turns over can stop the whole morning before it begins. Whether you are outside a Darlington home or parked after an overnight shift, do not assume that every winter starting problem needs a new battery.",
    featuredImage: "/images/flat-battery-cold-morning-featured.webp",
    featuredImageAlt: "Frosty car with its bonnet open on a North East street on a cold morning",
    publishedDate: "2026-11-22",
    updatedDate: "2026-11-23",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "12 min read",
    tags: ["flat battery", "jump start", "winter driving", "roadside assistance"],
    faqs: [
      { question: "Does a cold morning mean I need a new battery?", answer: "No. Cold may expose low charge or an existing weakness, but starting trouble can have other causes. A suitable boost may help a discharged battery. Repeated problems need testing of the battery and charging system before deciding on replacement." },
      { question: "What signs suggest the battery is flat?", answer: "Slow turning, repeated clicking and lights that dim during a starting attempt can point towards low available power. Connections or other faults can produce similar symptoms. Tell the operator exactly what you hear and see rather than treating one sign as a diagnosis." },
      { question: "Is a frozen battery safe to jump start?", answer: "No. Do not attempt a jump start if the battery fluids may be frozen. Stop for damaged or leaking batteries and leads too. Follow the handbook and seek professional advice when the condition or correct procedure is uncertain." },
      { question: "Can I jump start on the A1(M) hard shoulder?", answer: "No. Do not carry out jump-start work on a motorway hard shoulder or live carriageway. Get clear of traffic if safe. If you cannot reach safety or leave safely, stay belted in with hazards on and call 999 for police assistance." },
      { question: "How long should I drive after a boost?", answer: "There is no guaranteed duration that suits every vehicle and battery. A short trip may leave too little charge for another start. Follow the handbook and professional advice about driving or charging, and have repeated failures investigated rather than relying on another boost." },
      { question: "Can hybrid and electric cars have flat starting batteries?", answer: "Yes, their low-voltage systems can lose charge too. Procedures depend on the model and must follow the manufacturer’s guidance. Explain the vehicle type when calling. Do not assume the same connection points or donor-car procedure apply to every hybrid or electric car." },
      { question: "What if the car still refuses to start after a jump?", answer: "Stop repeated attempts and describe the result to a professional. The battery may be unsuitable for a boost, or another fault may prevent starting. Roadside assessment or recovery to an agreed destination can be discussed once the location is safe." }
    ],
    content: [
      { type: "paragraph", text: "Last updated: 23 November 2026." },
      { type: "paragraph", text: <>{"Frost on the windscreen is manageable. A car that barely turns over can stop the whole morning before it begins. Whether you are outside a Darlington home or parked after an overnight shift, do not assume that every winter starting problem needs a new battery."}</> },
      { type: "paragraph", text: <>{"This guide helps you separate a possible flat battery from other faults. Start with safety, note what the car does, then decide whether a jump start is suitable or whether you need testing and roadside help."}</> },
      { type: "heading", level: 2, id: "flat-battery-on-a-cold-morning-choose-the-next-step", text: "Flat battery on a cold morning: choose the next step" },
      { type: "paragraph", text: <>{"A jump start may restore starting power, but it does not explain why that power disappeared. The useful decision is what the vehicle needs next, rather than simply whether somebody can get it running."}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Check where you are."}</strong>{" A driveway and a motorway hard shoulder are different situations. Do not attempt roadside battery work where traffic puts you at risk."}</>,
        <>{"2. "}<strong>{"Describe the starting attempt."}</strong>{" Does the engine turn slowly, click, remain silent or turn normally without firing? Those observations help an operator decide what assistance to discuss."}</>,
        <>{"3. "}<strong>{"Reduce unnecessary electrical demand."}</strong>{" If you are safely parked, switch off heaters, heated screens, radio and other accessories before another brief attempt. Keep any lights needed for roadside safety on."}</>,
        <>{"4. "}<strong>{"Inspect without disturbing the battery."}</strong>{" Leaks, visible damage or suspected freezing mean you should stop and seek help. Do not connect leads simply because another vehicle is available."}</>,
        <>{"5. "}<strong>{"Plan beyond the restart."}</strong>{" A repeated flat, unsuccessful jump start or warning light needs assessment. An engine that starts once has not proved that the battery or charging system is healthy."}</>
      ] },
      { type: "paragraph", text: <>{"If you are safely stopped and need assistance, contact "}<strong>{"FSR Recovery Group"}</strong>{" on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a></strong>{". Explain the symptoms before asking for a particular repair."}</> },
      { type: "heading", level: 2, id: "why-winter-exposes-a-weak-battery", text: "Why winter exposes a weak battery" },
      { type: "paragraph", text: <>{"Cold conditions make starting harder by reducing a battery’s available performance while the engine needs effort to turn over. Winter also brings more use of lights, blowers and heated screens. A battery with little charge in reserve may struggle when these demands meet."}</> },
      { type: "paragraph", text: <><a href="https://www.axa.co.uk/car-insurance/tips-and-guides/getting-your-car-started-in-the-cold/" className="font-semibold text-red hover:underline">{"AXA’s cold-weather starting guidance"}</a>{" identifies battery trouble as a common reason for winter starting difficulties. It recommends reducing electrical loads at start-up and taking regular drives to help maintain charge."}</> },
      { type: "paragraph", text: <>{"Cold may expose a weakness. If the battery repeatedly loses charge, a garage may need to check its condition, charging performance and any electrical drain while parked. A replacement alone may leave the underlying problem unresolved."}</> },
      { type: "heading", level: 2, id: "listen-to-the-start-clues-rather-than-a-diagnosis", text: "Listen to the start: clues rather than a diagnosis" },
      { type: "image", src: "/images/frosty-dashboard-battery-warning.webp", alt: "Dashboard with the battery warning light lit on a frosty morning" },
      { type: "paragraph", text: <>{"What happens during a starting attempt is more useful than saying that the car is “dead”. These clues can guide a conversation, but they do not replace a battery or electrical test."}</> },
      { type: "table", headers: ["What you notice", "What it could mean", "What to tell the operator"], rows: [
        [<>{"Slow, laboured turning"}</>, <>{"Low available battery power"}</>, <>{"Whether the turning becomes slower with each attempt"}</>],
        [<>{"Repeated clicking and dimming lights"}</>, <>{"Insufficient power or a connection problem"}</>, <>{"Whether the dashboard dims when you try to start"}</>],
        [<>{"No sound and little electrical activity"}</>, <>{"A very discharged battery or an electrical connection issue"}</>, <>{"Which lights or accessories still work"}</>],
        [<>{"One click but lights remain bright"}</>, <>{"A starter or connection fault may be involved"}</>, <>{"That it is a single click, not repeated clicking"}</>],
        [<>{"Normal turning but no ignition"}</>, <>{"Something other than a flat battery may prevent starting"}</>, <>{"That the engine turns at its usual speed"}</>],
        [<>{"Battery warning after the engine starts"}</>, <>{"A charging-system concern needs attention"}</>, <>{"Whether the warning remains on while the engine runs"}</>]
      ] },
      { type: "paragraph", text: <>{"For an engine that turns normally but does not fire, read "}<a href="https://fsrrecoverygroups.co.uk/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"car will not start but the battery seems fine"}</a>{". Do not assume a jump start will solve a fuel, ignition or immobiliser problem."}</> },
      { type: "heading", level: 2, id: "safety-changes-when-the-car-is-beside-a-road", text: "Safety changes when the car is beside a road" },
      { type: "paragraph", text: <>{"Your stopping place decides whether any battery checks are sensible. On your drive or in a parking area, you may be able to consult the handbook and inspect the vehicle. Beside moving traffic, getting people safe comes first."}</> },
      { type: "paragraph", text: <>{"Do not attempt a jump start in a live lane or on a motorway hard shoulder. Do not place a warning triangle on a motorway or carriageway. A flat battery does not make work beside fast traffic safe."}</> },
      { type: "paragraph", text: <><a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="font-semibold text-red hover:underline">{"National Highways’ motorway advice"}</a>{" explains the emergency steps. Reach an exit or service area if the vehicle can safely continue; otherwise move left to a suitable stopping place, use hazards and leave away from traffic only if safe."}</> },
      { type: "paragraph", text: <>{"If you can leave safely, move away from the vehicle and behind a barrier where available. If you cannot reach safety or get out safely, remain belted in with hazards on and call 999 for the police. Tell the operator about any disability affecting evacuation."}</> },
      { type: "paragraph", text: <>{"On a rural North East lane, explain whether you obstruct the road and give a village, postcode or recognisable junction. Keep people away from traffic. Do not stand behind the vehicle waiting for somebody to connect leads or push it."}</> },
      { type: "heading", level: 2, id: "before-another-attempt-make-a-few-simple-checks", text: "Before another attempt, make a few simple checks" },
      { type: "list", items: [
        <><strong>{"Controls:"}</strong>{" check the required gear position. An automatic may need Park; a manual may require the clutch depressed. Follow the dashboard prompt or handbook."}</>,
        <><strong>{"Accessories:"}</strong>{" turn off unnecessary heating, entertainment and charging equipment. Do not switch off hazard or side lights needed to make a roadside vehicle visible."}</>,
        <><strong>{"Recent use:"}</strong>{" note whether the car has stood unused, made repeated short trips or had a light left on. Say if it has recently needed another jump start."}</>,
        <><strong>{"Visible condition:"}</strong>{" look for a cracked or swollen case, leakage, damaged leads or obvious loose connections without touching exposed parts. Stop if anything looks unsafe."}</>
      ] },
      { type: "paragraph", text: <>{"Do not keep the starter working through long, repeated attempts. If the same symptom returns, you have useful information for the call. More attempts can use what charge remains without finding the cause."}</> },
      { type: "paragraph", text: <>{"If you suspect a frozen battery, do not jump start it. Do not try to warm it using improvised heat or investigate a leak yourself. Ask for professional advice instead."}</> },
      { type: "heading", level: 2, id: "jump-starting-safely-means-following-the-right-procedure", text: "Jump starting safely means following the right procedure" },
      { type: "image", src: "/images/jump-leads-connected-safely.webp", alt: "Red and black jump leads connected to a car battery and an earth point" },
      { type: "paragraph", text: <>{"Use the instructions for the vehicle and equipment, not a universal set of timings. Some cars use designated connection points rather than direct battery terminals, and the battery may not be under the bonnet."}</> },
      { type: "paragraph", text: <><a href="https://www.which.co.uk/reviews/new-and-used-cars/article/how-to-jump-start-your-car-safely-aB0rY3m93Sfw" className="font-semibold text-red hover:underline">{"Which?’s jump-start guide"}</a>{" warns against damaged leads, leaking batteries and frozen battery fluids. It also advises checking the handbook first. If the equipment or battery condition is doubtful, stop before connecting anything."}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Confirm compatibility."}</strong>{" Check the required voltage, suitable leads or jump pack, and the manufacturer’s instructions. Do not assume a larger donor vehicle or an unfamiliar pack is suitable."}</>,
        <>{"2. "}<strong>{"Prepare a safe working space."}</strong>{" For a permitted donor-car procedure, keep the vehicles from touching, apply parking brakes and follow the specified gear and ignition instructions."}</>,
        <>{"3. "}<strong>{"Identify every connection point first."}</strong>{" Find the marked positive connection and the designated earth point. If you cannot identify them confidently, request help instead of trying a clamp position."}</>,
        <>{"4. "}<strong>{"Follow the complete sequence."}</strong>{" Connection, starting, waiting and disconnection instructions all matter. Keep clamps apart, clear of moving parts and secure at the specified points. Do not improvise a different removal order."}</>,
        <>{"5. "}<strong>{"Stop if the attempt does not work."}</strong>{" A failed jump start may indicate poor battery condition or another fault. Repeated attempts are not a substitute for diagnosis."}</>
      ] },
      { type: "paragraph", text: <>{"A jump pack also needs its own instructions and correct rating. For a hybrid or electric car, check the manufacturer’s guidance for its low-voltage battery and whether it permits the proposed procedure. Do not assume it can act as a donor vehicle."}</> },
      { type: "heading", level: 2, id: "it-started-decide-what-happens-before-switching-off", text: "It started: decide what happens before switching off" },
      { type: "paragraph", text: <>{"A running engine is progress, but a boost has not fully restored the battery or proved its condition. Avoid assuming that a short trip followed by another stop will leave enough charge for the next start."}</> },
      { type: "paragraph", text: <>{"Plan a suitable drive or charging arrangement in line with the handbook and the advice you receive. There is no single driving duration here that guarantees a full charge for every battery, journey or underlying fault."}</> },
      { type: "paragraph", text: <>{"If you are in an enclosed garage, do not leave the engine running there. Arrange the next safe step instead of treating idling as a charging solution. Keep checking for dashboard warnings and explain any continued problem before relying on the car."}</> },
      { type: "paragraph", text: <>{"A test can help separate a serviceable battery that lost charge from one that no longer holds it. Ask the garage or battery specialist to consider charging performance as well, particularly after repeated starting trouble."}</> },
      { type: "heading", level: 2, id: "jump-start-battery-test-or-recovery", text: "Jump start, battery test or recovery?" },
      { type: "paragraph", text: <>{"Choose the next step from the whole situation, including where the vehicle is stopped. These are discussion points for a garage or recovery operator, not promises that a particular repair will work."}</> },
      { type: "table", headers: ["Situation", "Sensible next step"], rows: [
        [<>{"A light was left on and the battery previously started reliably"}</>, <>{"Discuss a suitable jump start or recharge, then check that the problem does not recur"}</>],
        [<>{"Slow starting keeps returning on cold mornings"}</>, <>{"Arrange battery and charging-system tests"}</>],
        [<>{"The vehicle needs repeated boosts"}</>, <>{"Investigate battery condition and the reason charge is being lost"}</>],
        [<>{"The battery is damaged, leaking or possibly frozen"}</>, <>{"Do not connect leads; seek professional help"}</>],
        [<>{"The engine turns normally without starting"}</>, <>{"Discuss diagnosis rather than assuming a boost is required"}</>],
        [<>{"A correctly performed jump start fails"}</>, <>{"Stop repeated attempts and discuss roadside assessment or recovery"}</>],
        [<>{"The vehicle is exposed to motorway traffic"}</>, <>{"Prioritise emergency safety and recovery arrangements, not battery work"}</>]
      ] },
      { type: "heading", level: 2, id: "what-to-say-when-calling-for-roadside-help", text: "What to say when calling for roadside help" },
      { type: "image", src: "/images/roadside-assistance-van-frosty-lay-by.webp", alt: "Roadside assistance van behind a broken-down car in a frosty rural lay-by" },
      { type: "paragraph", text: <>{"Begin with your location and whether you are safe, then describe the starting symptom. On a main road, give the direction and nearest confirmed junction or marker reference. In a car park or village, provide the postcode and access details you know."}</> },
      { type: "paragraph", text: <>{"Tell the operator the make and model, fuel type, whether it is automatic, hybrid or electric, and whether any warnings remain on. Mention previous jump starts, a recent battery change, damaged connections or anything you have already tried."}</> },
      { type: "paragraph", text: <>{"FSR Recovery Group provides "}<a href="https://fsrrecoverygroups.co.uk/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jumpstart services"}</a>{" and "}<a href="https://fsrrecoverygroups.co.uk/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</a>{" for suitable cars and light vans. Its coverage includes "}<a href="https://fsrrecoverygroups.co.uk/areas/durham" className="font-semibold text-red hover:underline">{"Durham"}</a>{" and "}<a href="https://fsrrecoverygroups.co.uk/areas/middlesbrough" className="font-semibold text-red hover:underline">{"Middlesbrough"}</a>{", alongside the wider service area. Call with your actual position to confirm arrangements."}</> },
      { type: "paragraph", text: <>{"If starting assistance does not resolve the problem, "}<a href="https://fsrrecoverygroups.co.uk/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</a>{" can be discussed. Explain your preferred garage or destination and any difficulty with rolling, steering or selecting neutral before collection is arranged."}</> },
      { type: "heading", level: 2, id: "reduce-the-chance-of-another-winter-non-start", text: "Reduce the chance of another winter non-start" },
      { type: "paragraph", text: <>{"Check that lights and accessories are off when you park. If the car mostly makes short journeys or stands for long periods, ask about an appropriate charger or maintainer and follow the vehicle and charger instructions."}</> },
      { type: "paragraph", text: <>{"Do not ignore a pattern of worsening starts. Record when it happens and arrange testing before the next essential journey. If the battery is replaced, make sure the replacement and any required setup suit the vehicle; leave that choice to a qualified provider."}</> },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "paragraph", text: <><strong>{"Does a cold morning mean I need a new battery?"}</strong></> },
      { type: "paragraph", text: <>{"No. Cold may expose low charge or an existing weakness, but starting trouble can have other causes. A suitable boost may help a discharged battery. Repeated problems need testing of the battery and charging system before deciding on replacement."}</> },
      { type: "paragraph", text: <><strong>{"What signs suggest the battery is flat?"}</strong></> },
      { type: "paragraph", text: <>{"Slow turning, repeated clicking and lights that dim during a starting attempt can point towards low available power. Connections or other faults can produce similar symptoms. Tell the operator exactly what you hear and see rather than treating one sign as a diagnosis."}</> },
      { type: "paragraph", text: <><strong>{"Is a frozen battery safe to jump start?"}</strong></> },
      { type: "paragraph", text: <>{"No. Do not attempt a jump start if the battery fluids may be frozen. Stop for damaged or leaking batteries and leads too. Follow the handbook and seek professional advice when the condition or correct procedure is uncertain."}</> },
      { type: "paragraph", text: <><strong>{"Can I jump start on the A1(M) hard shoulder?"}</strong></> },
      { type: "paragraph", text: <>{"No. Do not carry out jump-start work on a motorway hard shoulder or live carriageway. Get clear of traffic if safe. If you cannot reach safety or leave safely, stay belted in with hazards on and call 999 for police assistance."}</> },
      { type: "paragraph", text: <><strong>{"How long should I drive after a boost?"}</strong></> },
      { type: "paragraph", text: <>{"There is no guaranteed duration that suits every vehicle and battery. A short trip may leave too little charge for another start. Follow the handbook and professional advice about driving or charging, and have repeated failures investigated rather than relying on another boost."}</> },
      { type: "paragraph", text: <><strong>{"Can hybrid and electric cars have flat starting batteries?"}</strong></> },
      { type: "paragraph", text: <>{"Yes, their low-voltage systems can lose charge too. Procedures depend on the model and must follow the manufacturer’s guidance. Explain the vehicle type when calling. Do not assume the same connection points or donor-car procedure apply to every hybrid or electric car."}</> },
      { type: "paragraph", text: <><strong>{"What if the car still refuses to start after a jump?"}</strong></> },
      { type: "paragraph", text: <>{"Stop repeated attempts and describe the result to a professional. The battery may be unsuitable for a boost, or another fault may prevent starting. Roadside assessment or recovery to an agreed destination can be discussed once the location is safe."}</> },
      { type: "heading", level: 2, id: "flat-battery-contact-fsr-recovery-group", text: "Flat battery? Contact FSR Recovery Group" },
      { type: "paragraph", text: <>{"For help with a car that will not start around Darlington, County Durham, Teesside or North Yorkshire, call "}<strong>{"FSR Recovery Group"}</strong>{" on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a></strong>{" once you are safe. WhatsApp the same number with your location and vehicle details if appropriate."}</> },
      { type: "paragraph", text: <>{"The base is 135 Gladstone Street, Darlington DL3 6LB, and roadside assistance is available 24/7. Use the "}<a href="https://fsrrecoverygroups.co.uk/contact" className="font-semibold text-red hover:underline">{"contact page"}</a>{" for other enquiries. For more practical guidance, visit the "}<a href="https://fsrrecoverygroups.co.uk/blog" className="font-semibold text-red hover:underline">{"FSR Recovery Group blog"}</a>{"."}</> },
    ],
  },
  {
    slug: "run-out-of-fuel-what-to-do",
    title: "Run Out of Fuel? What to Do on the A1(M), A19 and North East Roads",
    metaTitle: "Run Out of Fuel? What to Do, Step by Step",
    metaDescription: "Run out of fuel in the North East? Where to stop, what not to do on a motorway, what to tell the operator, and how roadside fuel help or recovery works.",
    excerpt: "A low-fuel warning is inconvenient. Losing power before you reach a filling station is a breakdown, and the place where you stop matters more than getting another few litres into the tank. That is especially true beside fast North East traffic.",
    featuredImage: "/images/run-out-of-fuel-what-to-do-featured.webp",
    featuredImageAlt: "Car stopped on a motorway hard shoulder with hazard lights on after running out of fuel",
    publishedDate: "2026-11-21",
    updatedDate: "2026-11-23",
    author: "FSR Recovery Group",
    authorRole: "Editorial Team",
    readingTime: "12 min read",
    tags: ["out of fuel", "roadside assistance", "breakdown recovery", "A1(M)", "A19"],
    faqs: [
      { question: "What comes first if I run out of fuel on the A1(M)?", answer: "Reach an exit or service area if safe. Otherwise move left, use hazards and leave away from traffic only if you can get clear safely. If you cannot, stay belted in and call 999 for the police before arranging fuel assistance." },
      { question: "Can I walk to a petrol station from the motorway?", answer: "No. Do not walk along the motorway or a fast carriageway to collect fuel. Wait somewhere safer, away from your vehicle and traffic if you can leave safely, and arrange assistance. A short distance on a map does not make the walk safe." },
      { question: "Should I use a warning triangle after running out of fuel?", answer: "Do not place a warning triangle on a motorway or carriageway. Use hazard lights and concentrate on getting people clear where safe. Report the vehicle’s position so the operator understands the danger rather than stepping into traffic to warn other drivers." },
      { question: "Does adding fuel always restart the car?", answer: "No. Correct fuel may help, but a diesel that has run dry or a vehicle with another fault may need further attention. Explain what happens when you try to start it. Recovery can be discussed if the vehicle cannot safely continue." },
      { question: "What if I have put in the wrong fuel?", answer: "Say so immediately; that is different from an empty tank. Do not start the engine if you have not already. Explain the fuel added and whether you have driven since, so the operator can discuss suitable assistance without assuming ordinary refuelling will help." },
      { question: "Can I contact FSR Recovery Group overnight?", answer: "Yes. FSR Recovery Group provides 24/7 assistance for suitable out-of-fuel situations. Call with your location, vehicle and fuel details so arrangements can be confirmed. If you are trapped in danger, call 999 first rather than waiting for a recovery booking." }
    ],
    content: [
      { type: "paragraph", text: "Last updated: 23 November 2026." },
      { type: "paragraph", text: <>{"A low-fuel warning is inconvenient. Losing power before you reach a filling station is a breakdown, and the place where you stop matters more than getting another few litres into the tank. That is especially true beside fast North East traffic."}</> },
      { type: "paragraph", text: <>{"Use this guide to decide what to do while the car still moves, what changes when it stops, and what help to request. It covers motorway journeys, A-roads and rural lanes around Darlington, County Durham, Teesside and North Yorkshire."}</> },
      { type: "heading", level: 2, id: "run-out-of-fuel-what-to-do-before-anything-else", text: "Run out of fuel: what to do before anything else" },
      { type: "paragraph", text: <>{"Deal with your position on the road before arranging fuel. An apparently simple empty tank does not make a hard shoulder, live lane or narrow verge a safe place to work."}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"If you can still drive safely, leave the traffic stream."}</strong>{" Aim for an exit, service area or suitable stopping place. Do not keep passing safer options because you hope to reach a preferred filling station."}</>,
        <>{"2. "}<strong>{"If you must stop, make yourself visible."}</strong>{" Switch on hazard lights. Use sidelights in darkness or poor visibility, and stop as far left as you can while leaving room to get out."}</>,
        <>{"3. "}<strong>{"Decide whether leaving is safe."}</strong>{" On a high-speed road, use the side away from traffic and move well clear, behind a barrier where available. Do not stand beside the vehicle to inspect it."}</>,
        <>{"4. "}<strong>{"If you cannot get clear safely, call 999 for the police."}</strong>{" Stay in the vehicle with seat belts fastened and hazards on. Use its SOS button if available."}</>,
        <>{"5. "}<strong>{"When you are safely clear, arrange help."}</strong>{" Report your road, direction and stopping place. Explain that you suspect an empty tank rather than assuming fuel alone will solve the problem."}</>
      ] },
      { type: "paragraph", text: <>{"If you need roadside assistance once you are safe, call "}<strong>{"FSR Recovery Group"}</strong>{" on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a></strong>{". Make the emergency call first if your position puts you in danger."}</> },
      { type: "heading", level: 2, id: "the-warning-light-is-on-but-the-engine-still-runs", text: "The warning light is on but the engine still runs" },
      { type: "image", src: "/images/low-fuel-warning-light-dashboard.webp", alt: "Low fuel warning light glowing on a car dashboard at dusk" },
      { type: "paragraph", text: <>{"Treat a low-fuel warning as a reason to plan a fuel stop now, not as a promise of remaining mileage. A displayed range is not a safe allowance for an extra detour, another junction or a queue."}</> },
      { type: "paragraph", text: <>{"Check the route to a suitable filling station while safely parked, or ask a passenger to help. Do not use a handheld phone while driving. If a planned stop is unavailable, reassess the journey rather than carrying on towards another uncertain option."}</> },
      { type: "paragraph", text: <>{"Around the North East, the route may lead from motorway services onto an A-road or into a village. Know which road the filling station is actually on. Seeing its name on a map does not mean you can reach it directly from your carriageway."}</> },
      { type: "paragraph", text: <>{"If the engine begins to hesitate or lose power, concentrate on reaching a safer stopping place. Do not try to prove how much fuel remains by continuing past an exit or pull-in. Once stopped, explain the warning and symptoms on the call."}</> },
      { type: "heading", level: 2, id: "ran-out-of-fuel-on-the-motorway-the-a1-m", text: "Ran out of fuel on the motorway: the A1(M)" },
      { type: "image", src: "/images/out-of-fuel-waiting-behind-barrier.webp", alt: "Driver in a high-visibility vest waiting behind a motorway safety barrier, well away from traffic" },
      { type: "paragraph", text: <>{"An empty tank on the A1(M) needs the same safety response as another motorway breakdown. "}<a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="font-semibold text-red hover:underline">{"National Highways’ motorway guidance"}</a>{" puts reaching safety ahead of roadside repairs."}</> },
      { type: "list", items: [
        <>{"1. "}<strong>{"Leave the carriageway if you can."}</strong>{" Use the next exit or service area where possible. If you cannot leave, move left towards an available hard shoulder or emergency area rather than stopping in a live lane unnecessarily."}</>,
        <>{"2. "}<strong>{"Stop with space to leave."}</strong>{" Get as far left as possible, turn your wheels left and switch on hazards. Add sidelights if it is dark or visibility is poor."}</>,
        <>{"3. "}<strong>{"Get away from traffic if safe."}</strong>{" Everyone should leave on the side furthest from passing vehicles. Move well away from the car, behind a barrier if there is one, watching for drops, debris and uneven ground."}</>,
        <>{"4. "}<strong>{"Report where you are."}</strong>{" From safety, use an emergency telephone where provided or contact National Highways on 0300 123 5000. Contact a recovery operator as well and face traffic while speaking."}</>
      ] },
      { type: "paragraph", text: <>{"Do not put out a warning triangle on a motorway or carriageway. Do not walk along the motorway to a filling station, even if a sign or map makes it look close. Do not attempt a repair while waiting."}</> },
      { type: "paragraph", text: <>{"If you cannot get off the live road and leave safely, stay belted in with hazards on and call 999 for the police. A disability that prevents you reaching safety also needs to be explained during that emergency call."}</> },
      { type: "paragraph", text: <>{"For more about this route, see "}<a href="https://fsrrecoverygroups.co.uk/blog/broken-down-on-the-a1m" className="font-semibold text-red hover:underline">{"what to do after an A1(M) breakdown"}</a>{". Our "}<a href="https://fsrrecoverygroups.co.uk/areas/a1m" className="font-semibold text-red hover:underline">{"A1(M) area page"}</a>{" covers the road within FSR Recovery Group’s service area."}</> },
      { type: "heading", level: 2, id: "on-the-a19-a66-or-a-rural-lane", text: "On the A19, A66 or a rural lane" },
      { type: "image", src: "/images/out-of-fuel-rural-lay-by-a66.webp", alt: "Car pulled into a rural lay-by on an upland A-road in winter with hazard lights on" },
      { type: "paragraph", text: <>{"Away from the motorway, choose the safest available stopping place rather than assuming a verge or gateway is suitable. Get the vehicle off the carriageway if possible, use hazards and keep people away from passing traffic."}</> },
      { type: "paragraph", text: <>{"The "}<a href="https://fsrrecoverygroups.co.uk/areas/a19" className="font-semibold text-red hover:underline">{"A19"}</a>{" and "}<a href="https://fsrrecoverygroups.co.uk/areas/a66" className="font-semibold text-red hover:underline">{"A66"}</a>{" are useful road names to give an operator, but add your direction and nearest landmark. “A66 eastbound in a lay-by” describes a different collection from a vehicle still obstructing a lane."}</> },
      { type: "paragraph", text: <>{"On a narrow country lane, report a village, postcode, farm entrance or recognisable junction if you know it. Say whether your car blocks the road. Do not move into a muddy verge simply because it appears to offer extra width."}</> },
      { type: "paragraph", text: <>{"The "}<a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="font-semibold text-red hover:underline">{"Highway Code’s breakdown rules"}</a>{" explain visibility and places of relative safety. In particular, avoid standing between your vehicle and approaching traffic. Do not stand where you hide its lights from other drivers."}</> },
      { type: "paragraph", text: <>{"If you leave the vehicle safely, wait well clear rather than gathering at the boot. Keep children under control. On an exposed road in cold or wet weather, tell the operator about anyone who needs additional help while waiting."}</> },
      { type: "paragraph", text: <>{"If your position is dangerous or somebody is injured, call 999. Describing it as an out-of-fuel call does not reduce the danger from traffic. Tell the emergency operator about the road and obstruction before discussing the fuel problem."}</> },
      { type: "heading", level: 2, id: "shortcuts-that-make-an-empty-tank-harder-to-deal-with", text: "Shortcuts that make an empty tank harder to deal with" },
      { type: "paragraph", text: <>{"Avoid trying to fix the fuel problem by creating another roadside risk. The next useful step is a clear call from safety, not a walk into traffic or repeated attempts to restart."}</> },
      { type: "list", items: [
        <><strong>{"Do not go looking for fuel along a motorway or fast carriageway."}</strong>{" A nearby filling station on a map is not an invitation to walk there."}</>,
        <><strong>{"Do not push the car in a live lane."}</strong>{" Contact the emergency services if you cannot reach safety. Other drivers need to see an obstruction, not people trying to manoeuvre around it."}</>,
        <><strong>{"Do not keep cranking the engine."}</strong>{" Repeated attempts can use the battery without resolving the missing fuel. Tell the operator how often you have tried."}</>,
        <><strong>{"Do not guess the fuel type."}</strong>{" Check the vehicle information if you can do so safely. Explain any doubt before somebody brings fuel."}</>,
        <><strong>{"Do not improvise with a drink bottle or another unsuitable container."}</strong>{" Fuel needs suitable handling and equipment. Discuss the help available rather than asking somebody to bring it in whatever is at hand."}</>,
        <><strong>{"Do not promise yourself it will restart."}</strong>{" An empty gauge is useful information, but another fault may also be involved. Describe the symptoms instead of ruling out recovery before anyone has assessed the vehicle."}</>
      ] },
      { type: "heading", level: 2, id: "petrol-diesel-wrong-fuel-and-electric-cars-need-different-conversations", text: "Petrol, diesel, wrong fuel and electric cars need different conversations" },
      { type: "paragraph", text: <>{"Tell the operator what powers the vehicle and what happened before it stopped. “It needs fuel” leaves out information that can change the next step."}</> },
      { type: "paragraph", text: <><strong>{"Petrol:"}</strong>{" adding the correct fuel may allow a suitable vehicle to restart. That is a possibility, not a guarantee. Report other warnings, unusual noises or a sudden stop that did not seem connected to the gauge."}</> },
      { type: "paragraph", text: <><strong>{"Diesel:"}</strong>{" a vehicle that has run completely dry may need more than fuel before it starts again. Procedures vary, so consult the handbook and explain the situation. Do not try unfamiliar work on the fuel system beside traffic."}</> },
      { type: "paragraph", text: <><strong>{"Wrong fuel:"}</strong>{" putting the wrong fuel into the tank is a separate problem. If you have not started the engine, do not start it. Tell the operator what went in and whether the engine has run so appropriate help can be discussed."}</> },
      { type: "paragraph", text: <><strong>{"Electric car:"}</strong>{" running out of charge calls for a different assessment from petrol or diesel assistance. Give the make and model, your location and any warning messages. Do not assume that an emergency refuelling service provides roadside charging."}</> },
      { type: "paragraph", text: <>{"If the engine turns over but will not run and you are unsure why, our guide to "}<a href="https://fsrrecoverygroups.co.uk/blog/car-wont-start-but-battery-is-fine" className="font-semibold text-red hover:underline">{"a car that will not start despite the battery seeming fine"}</a>{" explains other possibilities. Save those checks for a safe location."}</> },
      { type: "heading", level: 2, id: "give-a-location-someone-can-use", text: "Give a location someone can use" },
      { type: "paragraph", text: <>{"Start your call with where the vehicle is, then describe the fault. A precise stopping place lets an operator distinguish a car in a parking area from one exposed to moving traffic."}</> },
      { type: "paragraph", text: <>{"Give the details you know, without walking towards the road to collect missing information:"}</> },
      { type: "list", items: [
        <>{"Road number and direction: for example, A1(M) northbound or A66 westbound."}</>,
        <>{"The last confirmed junction, village or place name; say if you are unsure."}</>,
        <>{"Letters and numbers on any driver location sign or marker post visible from safety."}</>,
        <>{"Your stopping place: service area, emergency area, hard shoulder, lay-by, verge or live lane."}</>,
        <>{"A map pin you can share safely, plus where you and your passengers are waiting."}</>
      ] },
      { type: "paragraph", text: <>{"Distinguish your current position from your intended destination. A journey towards Darlington or Middlesbrough does not mean you stopped near either place. Explain if you left a main road and are now on a slip road or local route."}</> },
      { type: "paragraph", text: <>{"FSR Recovery Group’s "}<a href="https://fsrrecoverygroups.co.uk/areas" className="font-semibold text-red hover:underline">{"coverage page"}</a>{" lists the service area. Call with your actual location to confirm arrangements."}</> },
      { type: "heading", level: 2, id: "what-happens-after-you-request-roadside-fuel-help", text: "What happens after you request roadside fuel help?" },
      { type: "paragraph", text: <>{"FSR Recovery Group’s "}<a href="https://fsrrecoverygroups.co.uk/services/refueling" className="font-semibold text-red hover:underline">{"emergency refuelling service"}</a>{" supports genuine out-of-fuel situations involving suitable cars and light vans. It is available 24/7, with assistance depending on the vehicle and whether the stopping place is accessible and safe to work at."}</> },
      { type: "paragraph", text: <>{"Expect to discuss the vehicle’s make, model and correct fuel, together with the symptoms and location. Say if you have already tried restarting, added fuel or noticed another warning. Explain whether anybody travelling with you needs extra support."}</> },
      { type: "paragraph", text: <>{"Where appropriate, the aim is enough fuel to restart and continue to a nearby filling station or suitable destination. It is not a replacement for planning the next fuel stop. Agree the next step before setting off again."}</> },
      { type: "paragraph", text: <>{"If the vehicle still will not start, discuss "}<a href="https://fsrrecoverygroups.co.uk/services/roadside-assistance" className="font-semibold text-red hover:underline">{"roadside assistance"}</a>{" or "}<a href="https://fsrrecoverygroups.co.uk/services/vehicle-breakdown-recovery" className="font-semibold text-red hover:underline">{"vehicle breakdown recovery"}</a>{". A battery weakened by repeated attempts may also be relevant, but "}<a href="https://fsrrecoverygroups.co.uk/services/jumpstart-services" className="font-semibold text-red hover:underline">{"jumpstart services"}</a>{" should not be treated as proof that the underlying fault is resolved."}</> },
      { type: "heading", level: 2, id: "make-the-next-journey-easier", text: "Make the next journey easier" },
      { type: "paragraph", text: <>{"Plan fuel stops before the tank becomes a concern, particularly when travelling late or using rural routes. Allow room in the plan for a closed station, a diversion or a longer journey than expected."}</> },
      { type: "paragraph", text: <>{"Check fuel before departure, alongside knowing where you intend to stop. On an unfamiliar route, identify an alternative while you are safely parked. Do not rely on being able to turn around or cross to a station on the opposite carriageway."}</> },
      { type: "paragraph", text: <>{"After roadside fuel assistance, make refuelling the next practical task. Postponing it to finish the journey can recreate the same problem. If warnings or poor running continue, seek advice rather than assuming that every symptom came from an empty tank."}</> },
      { type: "heading", level: 2, id: "frequently-asked-questions", text: "Frequently asked questions" },
      { type: "paragraph", text: <><strong>{"What comes first if I run out of fuel on the A1(M)?"}</strong></> },
      { type: "paragraph", text: <>{"Reach an exit or service area if safe. Otherwise move left, use hazards and leave away from traffic only if you can get clear safely. If you cannot, stay belted in and call 999 for the police before arranging fuel assistance."}</> },
      { type: "paragraph", text: <><strong>{"Can I walk to a petrol station from the motorway?"}</strong></> },
      { type: "paragraph", text: <>{"No. Do not walk along the motorway or a fast carriageway to collect fuel. Wait somewhere safer, away from your vehicle and traffic if you can leave safely, and arrange assistance. A short distance on a map does not make the walk safe."}</> },
      { type: "paragraph", text: <><strong>{"Should I use a warning triangle after running out of fuel?"}</strong></> },
      { type: "paragraph", text: <>{"Do not place a warning triangle on a motorway or carriageway. Use hazard lights and concentrate on getting people clear where safe. Report the vehicle’s position so the operator understands the danger rather than stepping into traffic to warn other drivers."}</> },
      { type: "paragraph", text: <><strong>{"Does adding fuel always restart the car?"}</strong></> },
      { type: "paragraph", text: <>{"No. Correct fuel may help, but a diesel that has run dry or a vehicle with another fault may need further attention. Explain what happens when you try to start it. Recovery can be discussed if the vehicle cannot safely continue."}</> },
      { type: "paragraph", text: <><strong>{"What if I have put in the wrong fuel?"}</strong></> },
      { type: "paragraph", text: <>{"Say so immediately; that is different from an empty tank. Do not start the engine if you have not already. Explain the fuel added and whether you have driven since, so the operator can discuss suitable assistance without assuming ordinary refuelling will help."}</> },
      { type: "paragraph", text: <><strong>{"Can I contact FSR Recovery Group overnight?"}</strong></> },
      { type: "paragraph", text: <>{"Yes. FSR Recovery Group provides 24/7 assistance for suitable out-of-fuel situations. Call with your location, vehicle and fuel details so arrangements can be confirmed. If you are trapped in danger, call 999 first rather than waiting for a recovery booking."}</> },
      { type: "heading", level: 2, id: "need-help-after-running-out-of-fuel", text: "Need help after running out of fuel?" },
      { type: "paragraph", text: <>{"Once you are safe, call "}<strong>{"FSR Recovery Group"}</strong>{" on "}<strong><a href="tel:+447888502989" className="font-semibold text-red hover:underline">+44 7888 502989</a></strong>{" or WhatsApp the same number. Begin with your location and direction, then describe the vehicle, fuel type and what happened. Mention passengers who need additional support."}</> },
      { type: "paragraph", text: <>{"FSR Recovery Group is based at 135 Gladstone Street, Darlington DL3 6LB. For other enquiries, use the "}<a href="https://fsrrecoverygroups.co.uk/contact" className="font-semibold text-red hover:underline">{"contact page"}</a>{". Give clear details so the operator can confirm what help is appropriate for your stopping place and vehicle."}</> },
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
