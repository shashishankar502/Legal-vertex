import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { practiceAreas } from "@/lib/data/practice-areas";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone } from "lucide-react";

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

async function PracticeAreaContent({ params }: PageProps) {
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

      {/* Header with Split Layout: Text on Left, High-Res Practice Image on Right */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Practice Focus &bull; Dedicated Legal Counsel
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                {area.title}
              </h1>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {area.shortDescription}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 active:scale-95"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call: {siteConfig.contact.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Practice Area Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-60 sm:h-72 lg:h-80 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100 group">
                <Image
                  src={area.imageUrl}
                  alt={area.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-amber-300">Legal Vertex LLP</div>
                  <div className="text-sm sm:text-base font-serif font-bold drop-shadow-sm">{area.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
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
                Core Advisory &amp; Litigation Capabilities
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
            <div className="bg-gradient-to-br from-amber-100/60 via-amber-50 to-white border border-amber-300 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Consult With A Partner
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Receive an immediate strategic evaluation of your legal exposure, contract, civil dispute, or pending tax assessment.
              </p>

              <div className="space-y-2 pt-2 border-t border-amber-200/60 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">Direct Call:</span>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="text-amber-800 font-bold hover:underline">
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">Secondary:</span>
                  <a href={`tel:${siteConfig.contact.secondaryPhone.replace(/[^0-9+]/g, "")}`} className="text-amber-800 font-bold hover:underline">
                    {siteConfig.contact.secondaryDisplayPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">Email:</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-800 hover:underline truncate">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="block text-center py-3 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-md shadow-slate-900/10 active:scale-95"
              >
                Schedule Confidential Consultation
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

export default function PracticeAreaDetailPage(props: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 animate-pulse" />}>
      <PracticeAreaContent {...props} />
    </Suspense>
  );
}
