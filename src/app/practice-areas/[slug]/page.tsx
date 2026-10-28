import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { practiceAreas } from "@/lib/data/practice-areas";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((p) => p.slug === slug);

  if (!area) {
    return {
      title: "Practice Area Not Found",
    };
  }

  return {
    title: `${area.title} | Legal Vertex Practice`,
    description: area.shortDescription,
    alternates: {
      canonical: `/practice-areas/${area.slug}`,
    },
    openGraph: {
      title: `${area.title} | Legal Vertex LLP`,
      description: area.shortDescription,
      url: `${siteConfig.url}/practice-areas/${area.slug}`,
    },
  };
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = practiceAreas.find((p) => p.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Practice Areas", item: "/practice-areas" },
          { name: area.title, item: `/practice-areas/${area.slug}` },
        ]}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-amber-700">
              Practice Focus
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              {area.title}
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              {area.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                Strategic Legal Representation &amp; Scope
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {area.detailedDescription}
              </p>
            </div>

            {/* Core Capabilities */}
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">
                Core Advisory &amp; Transactional Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {area.keyServices.map((service) => (
                  <div
                    key={service}
                    className="p-4 bg-white border border-slate-200 rounded-lg flex items-start gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Value */}
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">
                The Legal Vertex Advantage
              </h2>
              <div className="space-y-3">
                {area.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="p-4 bg-amber-50/50 border border-amber-200/70 rounded-lg flex items-start gap-3"
                  >
                    <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-amber-700" />
                Practice Leadership
              </h3>
              <p className="text-sm text-slate-600">
                Direct partner oversight ensures strategic consistency and trial readiness.
              </p>
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-sm font-bold text-slate-900">{area.leadAttorney}</div>
                <div className="text-xs text-amber-700 font-medium">Practice Group Lead</div>
              </div>
              <Link
                href="/attorneys"
                className="block text-center py-2 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                View Attorney Credentials
              </Link>
            </div>

            <div className="bg-gradient-to-br from-amber-100/60 via-amber-50 to-white border border-amber-300 rounded-xl p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-serif font-bold text-slate-900">
                Consult With A Partner
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive an immediate evaluation of your legal exposure, contract, or pending dispute.
              </p>
              <Link
                href="/contact"
                className="block text-center py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
              >
                Request Confidential Intake
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <ConsultationCta
        title={`Discuss Your ${area.title} Matter`}
        subtitle="Schedule a consultation with our specialized practice leaders to review your objectives under strict attorney-client privilege."
      />
    </>
  );
}
