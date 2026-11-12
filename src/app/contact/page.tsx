import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Legal Vertex | Schedule Confidential Legal Consultation",
  description:
    "Get in touch with Legal Vertex LLP. Offices in Patna and Bengaluru. Call +91 91226 30161 or +91 62078 88741 or submit a confidential case evaluation inquiry online.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Legal Vertex | Confidential Legal Inquiries",
    description:
      "Schedule a strategy consultation with our senior corporate and litigation attorneys.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", item: "/contact" }]} />

      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-amber-700">
              Direct Counsel Access
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Schedule a Strategic Consultation
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Every inquiry is reviewed confidentially by our conflicts committee and lead partners. Reach out directly or submit your matter overview below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Contact Details & NAP (Local SEO) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-1.5 sm:mb-2">
                Our Office Locations &amp; Direct Lines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating from strategic locations in Patna and Bengaluru with nationwide advisory and litigation capabilities.
              </p>
            </div>

            <address className="not-italic space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-700">
              {/* Office 1 - Patna */}
              <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-amber-400 transition-colors">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="block font-bold text-slate-900 text-sm">Office 1 &bull; Patna</strong>
                    <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      Bihar
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Flat No - 703, 7th Floor, Venus Empire, Khagaul Road, Near Govinda International School, Patna &ndash; 801503
                  </p>
                </div>
              </div>

              {/* Office 2 - Bengaluru */}
              <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-amber-400 transition-colors">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="block font-bold text-slate-900 text-sm">Office 2 &bull; Bengaluru</strong>
                    <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      Karnataka
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Flat No - 007, Ground Floor, Block-A, Shakti Sprinkle Apartment, Begur, Bengaluru &ndash; 560068
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-slate-900">Phone &amp; Urgent Inquiries</strong>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-0.5">
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-amber-700 hover:text-amber-800 font-semibold"
                    >
                      {siteConfig.contact.displayPhone}
                    </a>
                    <span className="hidden sm:inline text-slate-400">&bull;</span>
                    <a
                      href={`tel:${siteConfig.contact.secondaryPhone.replace(/[^0-9+]/g, "")}`}
                      className="text-amber-700 hover:text-amber-800 font-semibold"
                    >
                      {siteConfig.contact.secondaryDisplayPhone}
                    </a>
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Direct partner dispatch &amp; legal counsel lines</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-slate-900">Direct Email</strong>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-amber-700 hover:text-amber-800 font-semibold"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Encrypted transmission monitored 24/7</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-slate-900">Consultation Hours</strong>
                  <span>Monday &ndash; Friday: 9:00 AM &ndash; 7:00 PM IST</span>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Emergency litigation counsel available around the clock</div>
                </div>
              </div>
            </address>

            <div className="p-3 sm:p-4 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-slate-700">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0" />
              <span>
                All inquiries are protected by Bar Council ethical guidelines and strict client confidentiality privilege.
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
