import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { practiceAreas } from "@/lib/data/practice-areas";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, Scale, Briefcase, ShieldAlert, ShieldCheck, Users, Building2, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Practice Areas | Civil, Criminal & Taxation Law",
  description:
    "Explore Legal Vertex core practice areas: Civil & Criminal Litigation, and Direct & Indirect Taxation Law across District Courts, High Courts, and Supreme Court of India.",
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: "Legal Practice Areas | Legal Vertex LLP",
    description:
      "Strategic courtroom advocacy and tax counsel in Civil, Criminal, and Taxation Law across Patna, Bengaluru, and pan-India forums.",
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
    FileText: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />,
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

      <section className="py-10 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {practiceAreas.map((area, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <ScrollReveal
                key={area.slug}
                direction={isLeft ? "from-left" : "from-right"}
                delay={(idx % 2) * 200}
                duration={2600}
                className="h-full"
              >
                <article
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs group h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {iconMap[area.iconName] || <Scale className="w-5 h-5 text-amber-700" />}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                        Core Area
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                      <Link href={`/practice-areas/${area.slug}`}>
                        {area.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {area.shortDescription}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
                        Key Legal Capabilities
                      </h3>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {area.keyServices.slice(0, 3).map((service) => (
                          <li key={service} className="flex items-center gap-2 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                            <span className="truncate">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end text-xs">
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      <span>Practice Overview</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
