import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { attorneys } from "@/lib/data/attorneys";
import { siteConfig } from "@/lib/site-config";
import { Mail, Phone, GraduationCap, Scale, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Attorneys & Senior Counsel",
  description:
    "Meet Legal Vertex partners and litigators. Former federal prosecutors, patent attorneys, and elite trial lawyers representing high-growth enterprises.",
  alternates: {
    canonical: "/attorneys",
  },
  openGraph: {
    title: "Our Attorneys | Legal Vertex LLP",
    description:
      "A distinguished roster of seasoned litigators and corporate advisors with Ivy League pedigree and proven trial records.",
    url: `${siteConfig.url}/attorneys`,
  },
};

export default function AttorneysPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Attorneys", item: "/attorneys" }]} />

      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-amber-700">
              Distinguished Counsel
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Our Attorneys &amp; Senior Partners
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Every matter at Legal Vertex is guided by experienced partners with relentless dedication to client outcomes, academic distinction, and courtroom success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {attorneys.map((lawyer) => (
            <article
              key={lawyer.slug}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="p-5 sm:p-7 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs">
                    <Image
                      src={lawyer.imageUrl}
                      alt={lawyer.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-serif font-bold text-slate-900 leading-snug">
                      <Link href={`/attorneys/${lawyer.slug}`} className="hover:text-amber-700 transition-colors">
                        {lawyer.name}
                      </Link>
                    </h2>
                    <div className="text-[11px] sm:text-xs text-amber-700 font-semibold">{lawyer.title}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500">{lawyer.role}</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {lawyer.bio}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-[11px] sm:text-xs text-slate-600 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 shrink-0" />
                    <span>{lawyer.education[0]}</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 flex items-center gap-2">
                    <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 shrink-0" />
                    <span>Admitted: {lawyer.admissions.slice(0, 2).join(", ")}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-7 sm:pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 sm:gap-4 text-slate-600">
                  <a href={`mailto:${lawyer.email}`} className="hover:text-amber-700 flex items-center gap-1 text-[11px] sm:text-xs">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-amber-700 flex items-center gap-1 text-[11px] sm:text-xs">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
                <Link
                  href={`/attorneys/${lawyer.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 text-[11px] sm:text-xs"
                >
                  <span>Biography</span>
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
