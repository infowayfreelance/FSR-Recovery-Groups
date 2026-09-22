import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieSettingsLink } from "@/components/CookieConsent";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: { absolute: "Cookie Policy | FSR Recovery Group" },
  description: "Which cookies and browser storage technologies FSR Recovery Group's website uses, and how to manage your choices.",
  alternates: { canonical: "/cookie-policy" },
};

const sections = [
  {
    title: "1. What are cookies and similar technologies?",
    content: <p>Cookies are small text files placed on your device when you visit a website. Websites can also use similar technologies, such as browser &ldquo;local storage&rdquo;, to remember information. This policy explains which of these technologies this website uses, and why.</p>,
  },
  {
    title: "2. Strictly necessary — cookie consent preference",
    content: <><p><strong>What it does:</strong> remembers the choice you make in our cookie banner (for example, &ldquo;Accept All&rdquo; or &ldquo;Reject Non-Essential&rdquo;), so we don&rsquo;t ask you again on every visit and so your choice is respected.</p><p><strong>Technology:</strong> browser local storage (not a traditional cookie).</p><p><strong>Provider:</strong> {business.name} (first-party — stored only in your own browser, never sent to our servers).</p><p><strong>Duration:</strong> until you clear your browser&rsquo;s site data, or change your choice using &ldquo;Cookie Settings&rdquo; in the footer.</p><p><strong>Consent required:</strong> no — this is strictly necessary to operate the cookie banner itself and is exempt from consent requirements under UK PECR.</p></>,
  },
  {
    title: "3. Non-essential — Analytics (Google Tag Manager)",
    content: <><p><strong>What it does:</strong> if enabled, loads Google Tag Manager, which may set cookies to help us understand how visitors use this website.</p><p><strong>Technology:</strong> third-party script and any cookies it sets.</p><p><strong>Provider:</strong> Google.</p><p><strong>Duration:</strong> set by Google, not controlled by us — see Google&rsquo;s own policies for current details, as these can change without notice to us.</p><p><strong>Consent required:</strong> yes. Tag Manager is not loaded, and no related cookies are set, until you accept the &ldquo;Analytics&rdquo; category.</p></>,
  },
  {
    title: "4. Non-essential — Embedded Maps (Google)",
    content: <><p><strong>What it does:</strong> if enabled, displays an interactive Google Map showing our location, on the homepage, the Areas page and the Contact page.</p><p><strong>Technology:</strong> third-party embedded iframe.</p><p><strong>Provider:</strong> Google.</p><p><strong>Duration:</strong> set by Google, not controlled by us — see Google&rsquo;s own policies for current details, as these can change without notice to us.</p><p><strong>Consent required:</strong> yes. This map does not load, and no related cookies are set, until you accept the &ldquo;Embedded Maps&rdquo; category. If you choose not to enable it, a plain link to view our location on Google Maps is shown instead — that link does not set any cookies through this website.</p></>,
  },
  {
    title: "5. Other third-party resources",
    content: <p>This website loads its icon set (Font Awesome) from a self-hosted, same-origin file, and its fonts (Poppins and Inter) are downloaded and hosted on our own server when the site is built — not loaded live from Google Fonts&rsquo; servers when you visit. Based on our review, neither of these sets cookies on your device.</p>,
  },
  {
    title: "6. What this website does not use",
    content: <><p>Beyond what is described above, this website does not currently use advertising or marketing cookies, social media tracking pixels, or any other cookie-based tracking. If this changes in future, we will update this policy and our cookie banner accordingly, and will ask for your consent before any new non-essential technology is used.</p></>,
  },
  {
    title: "7. Managing your preferences",
    content: <><p>When you first visit, use &ldquo;Accept All&rdquo;, &ldquo;Reject Non-Essential&rdquo; or &ldquo;Manage Preferences&rdquo; in our cookie banner.</p><p>Afterwards, click <CookieSettingsLink className="font-semibold text-red underline decoration-red/40 underline-offset-2 hover:text-red-dark" /> (also available in the footer of every page) to reopen your preferences and change your choices at any time.</p><p>You can also clear cookies and site data using your browser&rsquo;s own settings, which will reset your choice and show the banner again on your next visit.</p></>,
  },
  {
    title: "8. Contact us",
    content: <p>If you have questions about this Cookie Policy, contact us:<br />{business.name}<br />{business.addressFull}<br />Phone: <a href={business.tel}>{business.phoneDisplay}</a><br />Email: <a href={`mailto:${business.email}`}>{business.email}</a></p>,
  },
];

export default function CookiePolicyPage() {
  return <><Header /><main>
    <section className="hero-bg text-white"><div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20"><p className="mb-4 font-bold text-red-100">Legal Information</p><h1 className="text-3xl font-extrabold sm:text-4xl lg:text-6xl">Cookie Policy</h1><p className="mx-auto mt-5 max-w-2xl text-white/80">Which cookies and browser storage technologies we use, and how to manage your choices.</p></div></section>
    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><div className="mx-auto max-w-4xl rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-10 lg:p-12"><p className="mb-8 text-sm font-semibold text-navy/60">Last updated: 22 September 2026</p><div className="space-y-9">{sections.map((section) => <section key={section.title}><h2 className="mb-3 text-2xl font-extrabold text-navy">{section.title}</h2><div className="space-y-3 leading-7 text-navy/70 [&_a]:font-semibold [&_a]:text-red [&_a]:underline">{section.content}</div></section>)}</div><div className="mt-10 border-t border-navy/10 pt-7"><Link href="/contact" className="font-bold text-red underline">Contact FSR Recovery Group</Link></div></div></div></section>
  </main><Footer /></>;
}
