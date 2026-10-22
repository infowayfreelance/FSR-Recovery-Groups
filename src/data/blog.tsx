import type { ReactNode } from "react";
import Link from "next/link";

export type BlogContentBlock =
  | { type: "paragraph"; text: ReactNode }
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "list"; items: ReactNode[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
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
