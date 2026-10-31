import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/Blog";
import { getPublishedPosts } from "@/data/blog";
import { business } from "@/data/business";
import { breadcrumbList, SITE_URL } from "@/data/schema";

const title = "Recovery & Roadside Advice Blog | FSR Recovery Group";
const description =
  "Practical breakdown, roadside safety and vehicle recovery advice from FSR Recovery Group, covering Darlington, County Durham and North Yorkshire.";
const path = "/blog";
const heroImage = "/images/gallery-2.webp";
const heroImageAlt = "Technician checking a tyre on a 4x4 recovery vehicle at the roadside";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name, images: [{ url: heroImage, alt: heroImageAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [heroImage] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]),
    {
      "@type": "Blog",
      name: "FSR Recovery Group Blog",
      description,
      url: `${SITE_URL}${path}`,
    },
  ],
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Header activePath="/blog" />

      <main>
        {/* Page Banner */}
        <section className="relative isolate overflow-hidden text-white">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            preload
            fetchPriority="high"
            quality={65}
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(90deg, rgba(11, 34, 65, 0.95), rgba(11, 34, 65, 0.8))" }}
          />
          <div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-circle-check flex-shrink-0"></i> Recovery &amp; Roadside Advice
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">Blog</h1>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Practical advice on breakdowns, roadside safety and vehicle recovery from the FSR Recovery Group team.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-white py-16 sm:py-24">
          <div className="container-site">
            {posts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center text-navy/70">New articles are on the way — check back soon.</p>
            )}
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </main>

      <Footer />
    </>
  );
}
