import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, Shield, ArrowRight } from "lucide-react";

interface ConsultationCtaProps {
  title?: string;
  subtitle?: string;
}

export function ConsultationCta({
  title = "Protect Your Business with Proven Legal Counsel",
  subtitle = "Schedule a confidential strategy session with our senior attorneys to evaluate your case, review contracts, or prepare litigation defense.",
}: ConsultationCtaProps) {
  return (
    <section aria-labelledby="cta-heading" className="bg-gradient-to-br from-amber-50/70 via-white to-amber-50/50 text-slate-900 border-y border-amber-200/80 py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700 shrink-0" />
          <span>Strict Attorney-Client Confidentiality</span>
        </div>

        <h2
          id="cta-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-snug"
        >
          {title}
        </h2>

        <p className="text-slate-600 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 pt-2 sm:pt-4">
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-md text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 hover:shadow-xl active:scale-95 text-center"
          >
            <span>Book Confidential Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-md text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs hover:border-amber-400 active:scale-95 text-center"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Call {siteConfig.contact.displayPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
