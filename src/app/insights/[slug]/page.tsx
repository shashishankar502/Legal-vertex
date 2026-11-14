import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { insights } from "@/lib/data/insights";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, getArticleSchema } from "@/components/seo/JsonLd";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((p) => p.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Legal Vertex Insights`,
    description: article.description,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      authors: [article.authorName],
      url: `${siteConfig.url}/insights/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

async function InsightContent({ params }: PageProps) {
  const { slug } = await params;
  const article = insights.find((p) => p.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={getArticleSchema({
          title: article.title,
          description: article.description,
          slug: article.slug,
          datePublished: article.datePublished,
          authorName: article.authorName,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Legal Insights", item: "/insights" },
          { name: article.title, item: `/insights/${article.slug}` },
        ]}
      />

      {/* Article Header */}
      <header className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-amber-50 border border-amber-200 text-amber-900 font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-slate-500 flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Published: {article.datePublished}
            </span>
            <span className="text-slate-500 flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 border border-amber-400 flex items-center justify-center text-amber-800 font-serif font-bold text-xs sm:text-sm">
              {article.authorName.charAt(0)}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900">
                <Link
                  href={`/attorneys/${article.authorSlug}`}
                  className="hover:text-amber-700 transition-colors"
                >
                  {article.authorName}
                </Link>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500">Legal Vertex LLP Contributor</div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 border border-slate-200 shadow-sm">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <article className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed">
          <p className="text-xl text-slate-900 font-serif italic border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/40">
            {article.description}
          </p>

          {article.content.map((paragraph, index) => (
            <p key={index} className="text-base text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>
        </div>
      </div>

      <ConsultationCta />
    </>
  );
}

export default function InsightDetailPage(props: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 animate-pulse" />}>
      <InsightContent {...props} />
    </Suspense>
  );
}
