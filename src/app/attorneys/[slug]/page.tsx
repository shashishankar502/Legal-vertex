import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { attorneys } from "@/lib/data/attorneys";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { GraduationCap, Scale, Mail, Phone } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return attorneys.map((lawyer) => ({
    slug: lawyer.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lawyer = attorneys.find((a) => a.slug === slug);

  if (!lawyer) {
    return { title: "Attorney Not Found" };
  }

  return {
    title: `${lawyer.name} | ${lawyer.title}`,
    description: `${lawyer.name} is ${lawyer.title} at Legal Vertex. ${lawyer.bio.slice(0, 150)}...`,
    alternates: {
      canonical: `/attorneys/${lawyer.slug}`,
    },
    openGraph: {
      title: `${lawyer.name} | Legal Vertex LLP`,
      description: lawyer.bio,
      url: `${siteConfig.url}/attorneys/${lawyer.slug}`,
    },
  };
}

export default async function AttorneyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lawyer = attorneys.find((a) => a.slug === slug);

  if (!lawyer) {
    notFound();
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: lawyer.name,
    jobTitle: lawyer.title,
    worksFor: {
      "@type": "LegalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description: lawyer.bio,
    telephone: lawyer.phone,
    email: lawyer.email,
    alumniOf: lawyer.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu,
    })),
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <Breadcrumbs
        items={[
          { name: "Attorneys", item: "/attorneys" },
          { name: lawyer.name, item: `/attorneys/${lawyer.slug}` },
        ]}
      />

      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 border-2 border-amber-400 shrink-0 shadow-md">
              <Image
                src={lawyer.imageUrl}
                alt={lawyer.name}
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-amber-700">
                {lawyer.role}
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                {lawyer.name}
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold">{lawyer.title}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Bio & Details */}
          <article className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                Biography &amp; Professional Profile
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {lawyer.bio}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">
                Key Practice Focus
              </h2>
              <div className="flex flex-wrap gap-2">
                {lawyer.practiceAreas.map((p) => (
                  <span
                    key={p}
                    className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Bar Admissions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-amber-700" />
                  Education
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {lawyer.education.map((edu) => (
                    <li key={edu} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-amber-700" />
                  Bar Admissions
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {lawyer.admissions.map((adm) => (
                    <li key={adm} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                      <span>{adm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Contact Card */}
          <aside className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-serif font-bold text-slate-900">
                Direct Contact
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <a
                  href={`mailto:${lawyer.email}`}
                  className="flex items-center gap-3 hover:text-amber-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{lawyer.email}</span>
                </a>
                <a
                  href={`tel:${lawyer.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3 hover:text-amber-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{lawyer.phone}</span>
                </a>
              </div>
              <Link
                href="/contact"
                className="block text-center py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors mt-4 shadow-xs"
              >
                Schedule Direct Consultation
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <ConsultationCta />
    </>
  );
}
