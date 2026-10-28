import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { insights } from "@/lib/data/insights";
import { siteConfig } from "@/lib/site-config";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Insights, Regulatory Analysis & Publications",
  description:
    "Authoritative analysis on corporate governance, SEC enforcement, cross-border M&A antitrust, and AI patent jurisprudence from Legal Vertex attorneys.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Legal Insights & Case Commentary | Legal Vertex",
    description:
      "Strategic insights, legislative tracking, and legal analysis authored by senior partners.",
    url: `${siteConfig.url}/insights`,
  },
};

export default function InsightsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Legal Insights", item: "/insights" }]} />

      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-amber-700">
              Thought Leadership &amp; Case Commentary
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Legal Insights &amp; Briefings
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Timely analysis on emerging regulatory doctrines, appellate precedents, corporate transactions, and technology law.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {insights.map((article) => (
            <article
              key={article.slug}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-900 font-semibold px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-[11px] sm:text-xs">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-[11px] sm:text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900 hover:text-amber-700 transition-colors leading-snug">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {article.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="text-slate-500 font-medium text-[11px] sm:text-xs truncate mr-2">
                  <span>By {article.authorName}</span>
                </div>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 text-[11px] sm:text-xs shrink-0"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
