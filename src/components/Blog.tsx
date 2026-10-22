import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { businessEntityRef, breadcrumbList, SITE_URL } from "@/data/schema";
import { formatBlogDate, type BlogContentBlock, type BlogPost } from "@/data/blog";
import { ContactButtons } from "@/components/ServicePage";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="fade-up flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="relative block h-48 overflow-hidden sm:h-56">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          quality={65}
          loading="lazy"
          className="object-cover transition duration-300 hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-navy/50">
          <time dateTime={post.publishedDate}>{formatBlogDate(post.publishedDate)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime}</span>
          {post.isSample && (
            <span className="rounded-full bg-red/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-red">
              Example Post
            </span>
          )}
        </div>
        <h2 className="mb-2 text-xl font-bold leading-snug text-navy">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-red">
            {post.title}
          </Link>
        </h2>
        <p className="mb-5 flex-1 leading-7 text-navy/70">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-bold text-red hover:text-red-dark">
          Read Article <i className="fa-solid fa-arrow-right text-sm" />
        </Link>
      </div>
    </article>
  );
}

export function TableOfContents({ blocks }: { blocks: BlogContentBlock[] }) {
  const headings = blocks.filter((b): b is Extract<BlogContentBlock, { type: "heading" }> => b.type === "heading");
  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="fade-up rounded-3xl border border-navy/10 bg-slate-50 p-6">
      <h2 className="mb-4 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-navy">
        <i className="fa-solid fa-list-check text-red" /> On This Page
      </h2>
      <ol className="space-y-2.5 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "pl-4" : ""}>
            <a href={`#${heading.id}`} className="text-navy/70 transition hover:text-red">
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ArticleContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          const Tag = block.level === 2 ? "h2" : "h3";
          return (
            <Tag
              key={block.id}
              id={block.id}
              className={block.level === 2 ? "pt-3 text-2xl font-extrabold text-navy sm:text-3xl" : "pt-2 text-xl font-bold text-navy"}
            >
              {block.text}
            </Tag>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 leading-7 text-navy/75">
                  <i className="fa-solid fa-circle-check mt-1.5 flex-shrink-0 text-sm text-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={i} className="rounded-2xl border-l-4 border-red bg-slate-50 px-6 py-4 italic leading-7 text-navy/80">
              {block.text}
            </blockquote>
          );
        }
        return (
          <p key={i} className="leading-8 text-navy/75">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-navy/10 pt-10">
      <h2 className="mb-6 text-2xl font-extrabold text-navy">Related Articles</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

export function PrevNextNav({ previous, next }: { previous: BlogPost | null; next: BlogPost | null }) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="More articles" className="grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group rounded-2xl border border-navy/10 bg-slate-50 p-5 transition hover:border-red/40 hover:bg-white hover:shadow-md"
        >
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-navy/50">&larr; Previous</span>
          <span className="font-bold text-navy transition group-hover:text-red">{previous.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group rounded-2xl border border-navy/10 bg-slate-50 p-5 text-right transition hover:border-red/40 hover:bg-white hover:shadow-md"
        >
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-navy/50">Next &rarr;</span>
          <span className="font-bold text-navy transition group-hover:text-red">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export function ArticleCta() {
  return (
    <section className="rounded-3xl bg-navy p-8 text-center text-white sm:p-12">
      <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Need Recovery or Roadside Help?</h2>
      <p className="mx-auto mb-7 max-w-xl leading-7 text-white/75">
        FSR Recovery Group provides 24/7 vehicle recovery and roadside assistance across Darlington, County Durham
        and North Yorkshire. Call or message us with your location and we&rsquo;ll confirm the right help for your
        situation.
      </p>
      <div className="flex justify-center">
        <ContactButtons dark callLabel={`Call ${business.phoneDisplay}`} />
      </div>
    </section>
  );
}

export function ArticleSchema({ post }: { post: BlogPost }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
      {
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: `${SITE_URL}${post.featuredImage}`,
        datePublished: post.publishedDate,
        dateModified: post.updatedDate ?? post.publishedDate,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", name: post.author },
        publisher: businessEntityRef,
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
