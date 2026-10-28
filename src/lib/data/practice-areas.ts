export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  imageUrl: string;
  keyServices: string[];
  benefits: string[];
  leadAttorney: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-law-governance",
    title: "Corporate Law & Governance",
    shortDescription:
      "Strategic advisory for cross-border mergers, venture financings, corporate structuring, and board governance.",
    detailedDescription:
      "Legal Vertex advises Fortune 500 corporations, high-growth tech enterprises, and private equity funds through every phase of the corporate lifecycle. Our attorneys deliver proactive, commercially sound counsel on corporate reorganizations, board fiduciary duties, joint ventures, and capital raises.",
    iconName: "Briefcase",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Mergers & Acquisitions (M&A)",
      "Corporate Structuring & Incorporation",
      "Venture Capital & Private Equity Financing",
      "Board Advisory & Fiduciary Compliance",
      "Commercial Contracting & Joint Ventures",
    ],
    benefits: [
      "Mitigated transactional risk with comprehensive due diligence",
      "Faster deal closing through battle-tested negotiation playbooks",
      "Direct partner-level strategic oversight on every transaction",
    ],
    leadAttorney: "Marcus Vance, Esq.",
  },
  {
    slug: "commercial-litigation-disputes",
    title: "Commercial Litigation & Dispute Resolution",
    shortDescription:
      "Aggressive courtroom advocacy and sophisticated arbitration resolving high-stakes business and contract disputes.",
    detailedDescription:
      "When business disputes escalate, Legal Vertex delivers formidable courtroom advocacy. We represent plaintiffs and defendants in federal and state courts, international arbitrations, and appellate venues across multi-million dollar contractual, partnership, and trade disputes.",
    iconName: "Scale",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Breach of Contract & Complex Commercial Claims",
      "Shareholder & Partnership Disputes",
      "Class Action Defense & Multi-District Litigation",
      "International Commercial Arbitration",
      "Appellate Advocacy & Injunction Practice",
    ],
    benefits: [
      "Strategic focus on early risk mitigation and dispute resolution",
      "Trial-ready posture from day one to maximize leverage",
      "Cost-predictable litigation budgeting and transparent milestones",
    ],
    leadAttorney: "Elena Rostova, J.D.",
  },
  {
    slug: "intellectual-property-technology",
    title: "Intellectual Property & Technology",
    shortDescription:
      "Robust protection, patent prosecution, trademark portfolios, and trade secret litigation for modern innovators.",
    detailedDescription:
      "Safeguarding intellectual capital is critical in today's knowledge economy. Our registered patent attorneys and IP litigators provide end-to-end counsel encompassing worldwide trademark filing, patent strategy, technology licensing, and defending against infringement claims.",
    iconName: "ShieldAlert",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Patent Prosecution & Freedom-to-Operate Opinions",
      "Trademark Portfolio Strategy & Brand Protection",
      "Trade Secret Defense & Restrictive Covenants",
      "Software & SaaS Licensing Agreements",
      "IP Infringement Litigation before USPTO & Federal Courts",
    ],
    benefits: [
      "Multi-jurisdictional IP portfolio management",
      "Deep technical expertise in AI, biotech, and software systems",
      "Commercial monetization and defensive licensing strategies",
    ],
    leadAttorney: "David K. Chen, Esq.",
  },
  {
    slug: "regulatory-compliance-investigations",
    title: "Regulatory Compliance & Government Investigations",
    shortDescription:
      "Guiding institutions through complex enforcement actions, SEC, DOJ inquiries, and evolving data privacy mandates.",
    detailedDescription:
      "We defend corporations and corporate officers facing intense governmental scrutiny. Our regulatory team includes former federal prosecutors who understand how regulatory agencies evaluate corporate compliance programs, conduct internal investigations, and enforce statutes.",
    iconName: "ShieldCheck",
    imageUrl:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "SEC, DOJ & FTC Enforcement Defense",
      "Internal Corporate Investigations & Audits",
      "Global Data Privacy (GDPR, CCPA, CPRA) Advisory",
      "Anti-Money Laundering (AML) & Sanctions Compliance",
      "Whistleblower Response & Risk Mitigation",
    ],
    benefits: [
      "Insider insight from former regulatory enforcement officials",
      "Rapid crisis-response protocols minimizing reputational damage",
      "Tailored compliance frameworks built to survive federal audits",
    ],
    leadAttorney: "Sarah Jenkins, Esq.",
  },
  {
    slug: "employment-executive-compensation",
    title: "Employment Law & Executive Compensation",
    shortDescription:
      "Counseling employers on executive contracts, equity incentives, workplace policies, and defending wrongful termination claims.",
    detailedDescription:
      "Legal Vertex advises executive suites and HR leadership on navigating modern labor regulations. We craft bulletproof executive employment packages, non-competes, and severance structures while defending employers against discrimination, wage-and-hour, and harassment claims.",
    iconName: "Users",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Executive Employment Agreements & Severance Packages",
      "Equity Compensation & Incentive Plans",
      "Workplace Harassment & Retaliation Defense",
      "Wage & Hour Collective Action Defense",
      "Restrictive Covenants & Non-Compete Enforcement",
    ],
    benefits: [
      "Protection of proprietary customer and business relationships",
      "Equitable executive compensation plans aligned with IRS rules",
      "Proactive risk assessment preventing high-exposure labor claims",
    ],
    leadAttorney: "Marcus Vance, Esq.",
  },
  {
    slug: "real-estate-land-use",
    title: "Commercial Real Estate & Land Use",
    shortDescription:
      "Structuring complex acquisitions, commercial leases, construction contracts, and municipal zoning entitlements.",
    detailedDescription:
      "Our real estate practice represents institutional developers, REITs, lenders, and corporate tenants across high-profile real estate transactions. From ground-up developments and zoning variances to distressed asset workouts, we ensure our clients' holdings are legally sound.",
    iconName: "Building2",
    imageUrl:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Commercial Property Acquisition & Disposition",
      "Master Leasing & Ground Lease Negotiations",
      "Zoning, Permitting & Environmental Entitlements",
      "Real Estate Syndication & Joint Ventures",
      "Construction Contracts & Mechanic's Lien Disputes",
    ],
    benefits: [
      "Turnkey handling of title, environmental, and municipal approvals",
      "Optimized lease terms protecting landlord and tenant investments",
      "Expedited closings backed by seasoned title examiners",
    ],
    leadAttorney: "Elena Rostova, J.D.",
  },
];
