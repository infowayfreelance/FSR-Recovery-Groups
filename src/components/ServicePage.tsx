import Link from "next/link";
import { business } from "@/data/business";

export type ServiceCard = { icon: string; title: string; text: React.ReactNode };
export type ServiceStep = { number: string; title: string; text: string };
export type ServiceFaq = { question: string; answer: React.ReactNode };

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-red">{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: React.ReactNode }) {
  return (
    <div className="fade-up mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-7 text-navy/70 sm:text-lg">{intro}</p>}
    </div>
  );
}

export function ContactButtons({ callLabel = "Call Now", whatsappLabel = "WhatsApp for Recovery", dark = false }: { callLabel?: string; whatsappLabel?: string; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href={business.tel} className={`btn-glow rounded-full px-6 py-3.5 text-center font-bold text-white transition ${dark ? "bg-red hover:bg-red-dark" : "bg-navy hover:bg-navy-light"}`}>
        <i className="fa-solid fa-phone mr-2" />{callLabel}
      </a>
      <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-whatsapp px-6 py-3.5 text-center font-bold text-white transition hover:bg-green-600">
        <i className="fa-brands fa-whatsapp mr-2" />{whatsappLabel}
      </a>
    </div>
  );
}

export function CardGrid({ cards, dark = false }: { cards: ServiceCard[]; dark?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <article key={card.title} className={`fade-up rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${dark ? "border-white/10 bg-white/[.06] text-white hover:border-red/50" : "border-navy/10 bg-white text-navy shadow-sm hover:border-red/40 hover:shadow-xl"}`}>
          <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red/15 text-xl text-red"><i className={card.icon} /></span>
          <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
          <p className={`leading-7 ${dark ? "text-white/70" : "text-navy/70"}`}>{card.text}</p>
        </article>
      ))}
    </div>
  );
}

export function FaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <div className="mx-auto grid max-w-4xl gap-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="service-faq fade-up group rounded-2xl border border-navy/10 bg-white px-5 py-1 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-navy">
            <span>{faq.question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red/10 text-red"><i className="fa-solid fa-plus text-sm transition group-open:rotate-45" /></span>
          </summary>
          <p className="border-t border-navy/10 pb-5 pt-4 leading-7 text-navy/70">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedCard({ title, text, href, icon }: { title: string; text: string; href?: string; icon: string }) {
  const content = <><i className={`${icon} mb-5 text-2xl text-red`} /><h3 className="mb-2 text-xl font-bold">{title}</h3><p className="leading-7 text-white/70">{text}</p>{href && <span className="mt-5 inline-block text-sm font-bold text-red">Learn more <i className="fa-solid fa-arrow-right ml-1" /></span>}</>;
  const classes = "fade-up block rounded-3xl border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-1 hover:border-red/50";
  return href ? <Link href={href} className={classes}>{content}</Link> : <article className={classes}>{content}</article>;
}
