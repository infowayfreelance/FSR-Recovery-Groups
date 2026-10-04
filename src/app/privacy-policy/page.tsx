import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: { absolute: "Understand Our Privacy Policy Today" },
  description: "Your privacy matters. Learn how FSR Recovery Group safeguards your information and data practices.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "1. Who we are",
    content: <><p>FSR Recovery Group provides vehicle recovery, transport and roadside assistance services. For the purposes of UK data protection law, FSR Recovery Group is the controller of the personal information described in this policy.</p><p>You can contact us at {business.addressFull}, by telephone on <a href={business.tel}>{business.phoneDisplay}</a>, or by email at <a href={`mailto:${business.email}`}>{business.email}</a>.</p></>,
  },
  {
    title: "2. Information we may collect",
    content: <><p>Depending on how you contact us and the service you request, we may collect your name, telephone number, email address, current or collection location, destination, vehicle details, service requirements, messages and correspondence, and payment or transaction information.</p><p>We may also receive technical information when you use this website, such as IP address, browser and device information, pages visited, and cookie or analytics data.</p></>,
  },
  {
    title: "3. How we use your information",
    content: <p>We use personal information to respond to enquiries; assess, arrange and provide requested services; communicate about a call-out or vehicle movement; prepare quotes and maintain transaction records; operate and improve the website; prevent misuse and protect our legal rights; and comply with legal, tax, accounting or regulatory obligations that apply to us.</p>,
  },
  {
    title: "4. Our lawful bases",
    content: <p>We process information where it is necessary to take steps at your request or perform a contract with you, where required by law, where necessary for our legitimate interests in operating and protecting our business and services, or where you have given consent. Where processing relies on consent, you may withdraw it at any time.</p>,
  },
  {
    title: "5. Sharing your information",
    content: <p>We only share information where reasonably necessary, including with recovery or service partners involved in fulfilling a request, garages or destinations you nominate, payment and professional service providers, website and communications providers, insurers or authorities where appropriate, and law-enforcement or regulatory bodies where disclosure is required or permitted by law. We do not sell your personal information.</p>,
  },
  {
    title: "6. Cookies and analytics",
    content: <p>This website may use essential technologies and analytics or tag-management tools to understand website use and maintain the service. Your browser can be configured to limit or block cookies, although doing so may affect parts of the website. Where consent is legally required for a non-essential technology, we will request it before that technology is used.</p>,
  },
  {
    title: "7. Retention and security",
    content: <><p>We keep personal information only for as long as reasonably necessary for the purpose for which it was collected, including providing services, responding to disputes and meeting legal, accounting or reporting requirements. Different records may be retained for different periods.</p><p>We use reasonable organisational and technical measures intended to protect personal information. No internet transmission or storage system can, however, be guaranteed completely secure.</p></>,
  },
  {
    title: "8. Your data protection rights",
    content: <><p>Subject to the circumstances and exemptions in UK data protection law, you may have rights to request access to your personal information, correction, erasure, restriction or transfer, and to object to certain processing. You may also withdraw consent where consent is the lawful basis.</p><p>To exercise a right, contact us using the details above. You also have the right to complain to the UK Information Commissioner&apos;s Office. Information about making a complaint is available at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p></>,
  },
  {
    title: "9. Third-party links and changes",
    content: <><p>This website may link to third-party websites. Their privacy practices are controlled by their own policies, and we are not responsible for those sites.</p><p>We may update this policy when our practices or legal obligations change. The latest version will be published on this page.</p></>,
  },
];

export default function PrivacyPolicyPage() {
  return <><Header /><main>
    <section className="relative isolate overflow-hidden text-white"><Image src="/images/service-roadside.webp" alt="Technician checking a car engine roadside in the rain" fill priority sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(90deg, rgba(11, 34, 65, 0.95), rgba(11, 34, 65, 0.8))" }} /><div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20"><p className="mb-4 font-bold text-red-100">Legal Information</p><h1 className="text-3xl font-extrabold sm:text-4xl lg:text-6xl">Privacy Policy</h1><p className="mx-auto mt-5 max-w-2xl text-white/80">How FSR Recovery Group collects, uses and protects your personal information.</p></div></section>
    <section className="bg-slate-50 py-16 sm:py-24"><div className="container-site"><div className="mx-auto max-w-4xl rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-10 lg:p-12"><p className="mb-8 text-sm font-semibold text-navy/60">Last updated: 26 August 2026</p><div className="space-y-9">{sections.map((section) => <section key={section.title}><h2 className="mb-3 text-2xl font-extrabold text-navy">{section.title}</h2><div className="space-y-3 leading-7 text-navy/70 [&_a]:font-semibold [&_a]:text-red [&_a]:underline">{section.content}</div></section>)}</div><div className="mt-10 border-t border-navy/10 pt-7"><Link href="/contact" className="font-bold text-red underline">Contact FSR Recovery Group</Link></div></div></div></section>
  </main><Footer /></>;
}
