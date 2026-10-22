import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArticleContent,
  ArticleCta,
  ArticleSchema,
  PrevNextNav,
  RelatedArticles,
  TableOfContents,
} from "@/components/Blog";
import { blogPosts, formatBlogDate, getAdjacentPosts, getBlogPost, getRelatedPosts } from "@/data/blog";
import { business } from "@/data/business";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  const title = `${post.title} | FSR Recovery Group`;

  return {
    title: { absolute: title },
    description: post.metaDescription,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description: post.metaDescription,
      url: path,
      type: "article",
      siteName: business.name,
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate ?? post.publishedDate,
      authors: [post.author],
      images: [{ url: post.featuredImage, alt: post.featuredImageAlt }],
    },
    twitter: { card: "summary_large_image", title, description: post.metaDescription, images: [post.featuredImage] },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { previous, next } = getAdjacentPosts(slug);
  const related = getRelatedPosts(post);

  return (
    <>
      <Header activePath="/blog" />

      <main>
        {/* Hero */}
        <section className="service-hero relative isolate min-h-[480px] overflow-hidden bg-navy text-white">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            preload
            fetchPriority="high"
            quality={65}
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
          <div className="container-site flex min-h-[480px] items-center py-16">
            <div className="fade-up max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
                <Link href="/" className="hover:text-white">Home</Link>
                <span aria-hidden="true"> / </span>
                <Link href="/blog" className="hover:text-white">Blog</Link>
              </nav>
              <h1 className="text-3xl font-extrabold leading-[1.1] sm:text-5xl">{post.title}</h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-white/75">
                <span>{post.author}</span>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={post.publishedDate}>{formatBlogDate(post.publishedDate)}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime}</span>
                {post.isSample && (
                  <span className="rounded-full bg-red/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-red-100">
                    Example Post
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="py-16 sm:py-24">
          <div className="container-site mx-auto max-w-3xl space-y-10">
            <TableOfContents blocks={post.content} />
            <ArticleContent blocks={post.content} />
            <ArticleCta />
            <RelatedArticles posts={related} />
            <PrevNextNav previous={previous} next={next} />
          </div>
        </section>

        <ArticleSchema post={post} />
      </main>

      <Footer />
    </>
  );
}
