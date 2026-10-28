import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { siteConfig } from "@/lib/site-config";
import { Award, Shield, CheckCircle2, Scale, Target, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Law Firm | History, Values & Leadership",
  description:
    "Learn about Legal Vertex LLP, our seasoned corporate litigators, core values, bar admissions, and client-first commitment across high-stakes matters.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Legal Vertex | Premier Law Firm Leadership",
    description:
      "Founded on principles of unwavering trial readiness and strategic business counsel, Legal Vertex serves corporate leaders worldwide.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About Us", item: "/about" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-amber-700">
              The Firm Behind Industry Leaders
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              A Legacy of Decisive Advocacy &amp; Strategic Insight
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Legal Vertex was established to dismantle the inefficiency of conventional corporate legal practice. We deliver direct partner access, unrelenting courtroom vigor, and deep domain intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-white border border-slate-200 p-5 sm:p-8 rounded-xl shadow-xs space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900">Our Mission</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To empower executives and corporate boards to take bold commercial decisions with absolute confidence, fortified by bulletproof contracts and fearless litigation counsel.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-5 sm:p-8 rounded-xl shadow-xs space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900">Our Approach</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We look beyond mere statutory compliance. We dissect our clients&apos; business models to preempt regulatory pitfalls, engineer contractual advantages, and resolve conflicts before litigation arises.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-5 sm:p-8 rounded-xl shadow-xs space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900">Our Integrity</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ethical transparency is non-negotiable. We maintain uncompromising fidelity to attorney-client privilege, conflict clearance, and fiduciary stewardship.
            </p>
          </div>
        </div>

        {/* Firm Commitments & Standards */}
        <div className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-slate-900 mb-6 sm:mb-8 text-center leading-tight">
            Professional Standards That Define Our Practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-white border border-slate-200 rounded-xl text-center space-y-2 shadow-xs">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700 mx-auto" />
              <div className="text-sm sm:text-base font-serif font-bold text-slate-900">Partner-Led Practice</div>
              <div className="text-xs text-slate-500 leading-relaxed">Direct strategy and execution by seasoned partners</div>
            </div>
            <div className="p-5 sm:p-6 bg-white border border-slate-200 rounded-xl text-center space-y-2 shadow-xs">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700 mx-auto" />
              <div className="text-sm sm:text-base font-serif font-bold text-slate-900">Multi-Bar Admissions</div>
              <div className="text-xs text-slate-500 leading-relaxed">Licensed across California, New York, D.C. &amp; USPTO</div>
            </div>
            <div className="p-5 sm:p-6 bg-white border border-slate-200 rounded-xl text-center space-y-2 shadow-xs">
              <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700 mx-auto" />
              <div className="text-sm sm:text-base font-serif font-bold text-slate-900">Clear Fee Transparency</div>
              <div className="text-xs text-slate-500 leading-relaxed">Predictable milestone budgets and structured retainers</div>
            </div>
            <div className="p-5 sm:p-6 bg-white border border-slate-200 rounded-xl text-center space-y-2 shadow-xs">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700 mx-auto" />
              <div className="text-sm sm:text-base font-serif font-bold text-slate-900">Complete Privilege</div>
              <div className="text-xs text-slate-500 leading-relaxed">Uncompromising data security and client confidentiality</div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
