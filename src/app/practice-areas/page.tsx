import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { practiceAreas } from "@/lib/data/practice-areas";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, Scale, Briefcase, ShieldAlert, ShieldCheck, Users, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Practice Areas & Commercial Services",
  description:
    "Explore Legal Vertex practice areas: Corporate M&A, Commercial Litigation, Intellectual Property, Regulatory Compliance, Employment Law, and Real Estate.",
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: "Legal Practice Areas | Legal Vertex LLP",
    description:
      "Comprehensive corporate and litigation legal services tailored for high-growth enterprises and institutional organizations.",
    url: `${siteConfig.url}/practice-areas`,
  },
};

export default function PracticeAreasPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />,
    Scale: <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />,
    Users: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />,
    Building2: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />,
  };

  return (
    <>
      <Breadcrumbs items={[{ name: "Practice Areas", item: "/practice-areas" }]} />

      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-amber-700">
              Specialized Legal Practice
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Legal Mastery Across Critical Business Disciplines
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              From sophisticated cross-border corporate mergers to high-stakes courtroom litigation and regulatory investigations, Legal Vertex provides seasoned strategic counsel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {practiceAreas.map((area) => (
            <article
              key={area.slug}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                  {iconMap[area.iconName] || <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />}
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug">
                  <Link href={`/practice-areas/${area.slug}`} className="hover:text-amber-700 transition-colors">
                    {area.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.detailedDescription}
                </p>

                <div className="pt-1 sm:pt-2">
                  <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5 sm:mb-2">
                    Key Legal Capabilities
                  </h3>
                  <ul className="grid grid-cols-1 gap-1 text-[11px] sm:text-xs text-slate-700">
                    {area.keyServices.map((service) => (
                      <li key={service} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium truncate mr-2">Lead Counsel: {area.leadAttorney}</span>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 transition-colors shrink-0"
                >
                  <span>Practice Overview</span>
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
