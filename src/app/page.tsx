import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { practiceAreas } from "@/lib/data/practice-areas";
import { attorneys } from "@/lib/data/attorneys";
import { insights } from "@/lib/data/insights";
import { homeFaqs } from "@/lib/data/faqs";
import { FaqSection } from "@/components/home/FaqSection";
import { ConsultationCta } from "@/components/common/ConsultationCta";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { JsonLd, getFaqSchema } from "@/components/seo/JsonLd";
import {
  Scale,
  Briefcase,
  ShieldAlert,
  ShieldCheck,
  Users,
  Building2,
  ArrowRight,
  Award,
  Calendar,
  Lock,
  UserCheck,
  FileText,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export default function Home() {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-5 h-5 text-amber-700" />,
    Scale: <Scale className="w-5 h-5 text-amber-700" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-amber-700" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-700" />,
    Users: <Users className="w-5 h-5 text-amber-700" />,
    Building2: <Building2 className="w-5 h-5 text-amber-700" />,
    FileText: <FileText className="w-5 h-5 text-amber-700" />,
  };

  return (
    <>
      <JsonLd data={getFaqSchema(homeFaqs)} />

      {/* Hero Section: Luxury Split-Layout with Editorial Photography */}
      <section
        aria-label="Introduction & Strategic Counsel"
        className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,6,0.06),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content with staggered fade in */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] sm:text-xs font-semibold tracking-wide shadow-xs">
                <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Civil, Criminal &amp; Taxation Legal Counsel</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.12]">
                Strategic Trial Advocacy &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800">
                  Taxation Counsel
                </span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Legal Vertex delivers formidable trial representation and strategic legal defense across Civil disputes, Criminal defense, Bail proceedings, and Direct &amp; Indirect Taxation in Patna, Bengaluru, and pan-India forums.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-md font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 hover:shadow-xl active:scale-[0.98] text-sm sm:text-base text-center"
                >
                  <span>Request Case Evaluation</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-md font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs hover:border-amber-400 text-sm sm:text-base text-center"
                >
                  <span>Explore Practice Areas</span>
                </Link>
              </div>

              {/* Quick Trust Checks */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Confidential Case Review
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Direct Partner Response
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  No Obligation
                </span>
              </div>
            </div>

            {/* Right: Premium Law Firm Imagery with Float Animation */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 aspect-[4/3] sm:aspect-[16/11] group">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Legal Vertex corporate boardroom and conference facility"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                
                {/* Floating Micro-Badge with Gentle Float Animation */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between animate-float">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Patna &amp; Bengaluru Offices</div>
                      <div className="text-[10px] text-slate-500">Commercial Advisory &amp; Litigation Practice</div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-bold text-amber-800 bg-amber-100/70 border border-amber-300 px-2 py-0.5 rounded">
                    Active Practice
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Institutional Pillars */}
          <div className="pt-8 mt-8 sm:pt-12 sm:mt-12 border-t border-slate-200/90">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <ScrollReveal delay={50} direction="up">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-3 h-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Partner-Led Oversight</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Direct strategic leadership on every client matter without delegation to juniors.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150} direction="up">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-3 h-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Transparent Engagements</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Predictable fee structures, clear milestones, and complete billing clarity.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250} direction="up">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-3 h-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Courtroom &amp; Advisory</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Admitted to state benches, federal appellate circuits, and USPTO bar.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={350} direction="up">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-3 h-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Strict Confidentiality</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Complete attorney-client privilege protection from prospective intake onward.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid: Cards with Photography & Staggered Reveal */}
      <section aria-labelledby="practices-heading" className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-8 sm:mb-10">
            <div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-amber-700">
                Areas of Specialization
              </span>
              <h2 id="practices-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-1">
                Comprehensive Legal Capabilities
              </h2>
            </div>
            <Link
              href="/practice-areas"
              className="text-amber-700 hover:text-amber-800 text-xs sm:text-sm font-semibold inline-flex items-center gap-1 transition-colors self-start sm:self-auto group"
            >
              <span>View All Practice Sectors</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {practiceAreas.map((area, idx) => {
            const isLeft = (idx % 4) < 2;
            const staggerDelay = (idx % 2) * 200;
            return (
              <ScrollReveal
                key={area.slug}
                delay={staggerDelay}
                duration={2600}
                direction={isLeft ? "from-left" : "from-right"}
                className="h-full"
              >
                <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs h-full">
                  <div>
                    {/* Practice Area Image */}
                    <div className="relative h-40 sm:h-44 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={area.imageUrl}
                        alt={area.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <div className="w-8 h-8 rounded-lg bg-white/95 backdrop-blur-xs flex items-center justify-center text-amber-700 shadow-sm transition-transform duration-300 group-hover:scale-110">
                          {iconMap[area.iconName] || <Scale className="w-4 h-4 text-amber-700" />}
                        </div>
                        <span className="text-[9px] uppercase font-bold tracking-wider bg-slate-900/85 px-2 py-0.5 rounded text-amber-300">
                          Practice
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug line-clamp-1">
                        <Link href={`/practice-areas/${area.slug}`} className="focus:outline-none">
                          {area.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {area.shortDescription}
                      </p>
                      <ul className="space-y-1 pt-1 border-t border-slate-100">
                        {area.keyServices.slice(0, 2).map((service) => (
                          <li key={service} className="text-[11px] text-slate-600 flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 rounded-full bg-amber-600 shrink-0" />
                            <span className="truncate">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2.5 border-t border-slate-100 flex items-center justify-end text-xs">
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="text-amber-700 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-[11px]"
                    >
                      <span>Explore Practice</span>
                      <span className="text-xs">&rarr;</span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Featured Editorial Section: Firm Heritage & Strategic Focus */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-[4/3] sm:aspect-square group">
                  <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80"
                    alt="Law library and courtroom advocacy books"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
                    <div className="text-amber-400 font-serif font-bold text-sm">Ethical Trial Readiness</div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Strategic courtroom preparation that maximizes negotiation leverage from day one.
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="right">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-amber-400">
                  Strategic Foundation
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-snug mt-1">
                  Precision Advocacy Built for High-Exposure Matters
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2">
                  When facing complex contractual friction, regulatory inquiries, or high-value acquisitions, businesses need counsel that combines technical precision with strategic restraint.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5 hover:border-amber-400/50 transition-colors">
                    <div className="text-amber-400 font-bold text-sm">Direct Accountability</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Senior partners oversee case strategy directly, ensuring no dilution of legal quality.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5 hover:border-amber-400/50 transition-colors">
                    <div className="text-amber-400 font-bold text-sm">Commercial Alignment</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      We tailor legal solutions to support your bottom-line commercial and organizational objectives.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Learn More About Our Firm Philosophy</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Senior Partners with Real Executive Portraits */}
      {/* Meet Our Attorneys Preview */}
      <section aria-labelledby="attorneys-heading" className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-8 sm:mb-10">
            <div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-amber-700">
                Legal Advocates
              </span>
              <h2 id="attorneys-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-1">
                Meet Our Leadership &amp; Legal Partners
              </h2>
            </div>
            <Link
              href="/attorneys"
              className="text-amber-700 hover:text-amber-800 text-xs sm:text-sm font-semibold inline-flex items-center gap-1 transition-colors self-start sm:self-auto group"
            >
              <span>View All Attorneys</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {attorneys.map((lawyer, idx) => {
            const isLeft = (idx % 4) < 2;
            const staggerDelay = (idx % 2) * 200;
            return (
              <ScrollReveal
                key={lawyer.slug}
                delay={staggerDelay}
                duration={2600}
                direction={isLeft ? "from-left" : "from-right"}
                className="h-full"
              >
                <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs h-full">
                  <div>
                    {/* Executive Headshot */}
                    <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={lawyer.imageUrl}
                        alt={lawyer.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute bottom-3.5 left-4 right-4 text-white">
                        <h3 className="text-base sm:text-lg font-serif font-bold leading-snug drop-shadow-sm">
                          <Link href={`/attorneys/${lawyer.slug}`} className="hover:text-amber-300 transition-colors">
                            {lawyer.name}
                          </Link>
                        </h3>
                        <div className="text-xs text-amber-300 font-semibold mt-0.5">{lawyer.title}</div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">
                        {lawyer.role}
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {lawyer.bio}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-3 border-t border-slate-100">
                    <Link
                      href={`/attorneys/${lawyer.slug}`}
                      className="text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors inline-flex items-center gap-1 group/btn"
                    >
                      <span>View Full Biography</span>
                      <span className="transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Featured Insights & Publications with Photography */}
      <section aria-labelledby="insights-heading" className="bg-slate-100/70 border-t border-slate-200 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-8 sm:mb-10">
              <div>
                <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-amber-700">
                  Thought Leadership
                </span>
                <h2 id="insights-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-1">
                  Latest Legal Insights &amp; Briefings
                </h2>
              </div>
              <Link
                href="/insights"
                className="text-amber-700 hover:text-amber-800 text-xs sm:text-sm font-semibold inline-flex items-center gap-1 transition-colors self-start sm:self-auto group"
              >
                <span>Explore All Insights</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {insights.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 100} direction="up">
                <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs h-full">
                  <div>
                    {/* Article Thumbnail */}
                    <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                        <span className="font-semibold px-2 py-0.5 rounded bg-amber-500/90 text-slate-950 font-sans">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-200">
                          <Calendar className="w-3 h-3" />
                          {post.datePublished}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 hover:text-amber-700 transition-colors leading-snug">
                        <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium truncate mr-2">{post.authorName}</span>
                    <span className="text-slate-400 shrink-0">{post.readTime}</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (With Schema) */}
      <section aria-labelledby="faq-heading" className="py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-amber-700">
              Client Inquiries
            </span>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Clear answers to common questions regarding our legal engagements, consultations, and confidentiality standards.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} direction="up">
          <FaqSection faqs={homeFaqs} />
        </ScrollReveal>
      </section>

      {/* Final Call to Action */}
      <ConsultationCta />
    </>
  );
}
