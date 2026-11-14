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
    slug: "civil-and-criminal-law",
    title: "Civil & Criminal Litigation",
    shortDescription:
      "Strategic trial defense and courtroom advocacy across District & Sessions Courts, State High Courts, and the Supreme Court of India.",
    detailedDescription:
      "Legal Vertex delivers aggressive trial advocacy, appellate litigation, and strategic legal counsel across civil and criminal matters. Our advocates regularly represent clients before District & Sessions Courts, the High Court of Judicature at Patna, the High Court of Karnataka at Bengaluru, and the Supreme Court of India. In civil litigation, we handle land and property title disputes, partition suits, declaration and injunctions under the Code of Civil Procedure (CPC), specific performance, and commercial breach of contracts. In criminal matters, we provide immediate legal defense in regular and anticipatory bail, quashing of FIRs and charge-sheets under Section 482 CrPC / Section 528 BNSS, criminal revision, Section 138 Negotiable Instruments Act (cheque dishonour), cybercrime, and economic offences under the Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS).",
    iconName: "Scale",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    keyServices: [
      "Regular & Anticipatory Bail Applications (CrPC / BNSS)",
      "FIR & Charge-Sheet Quashing Petitions (Section 482 High Court)",
      "Civil Land & Property Title Disputes, Partition & Mutation Suits",
      "Temporary & Permanent Injunctions, Specific Performance (CPC)",
      "Section 138 Negotiable Instruments Act (Cheque Bounce Proceedings)",
      "Commercial Contractual Disputes, Money Recovery & Execution Petitions",
      "Constitutional Writ Petitions (Articles 226 & 32 before High Courts & Supreme Court)",
      "Economic Offences, Cyber Crime & Criminal Trial Defense",
    ],
    benefits: [
      "24/7 emergency response for arrest, police custody, and urgent bail hearings",
      "Formidable trial preparation with rigorous witness cross-examination strategies",
      "Dual-bench presence across Patna High Court, Karnataka High Court, and Supreme Court",
    ],
    leadAttorney: "Ravi Shankar & Sagar Sourabh",
  },
  {
    slug: "taxation-law",
    title: "Taxation Law & Advisory",
    shortDescription:
      "Comprehensive direct and indirect tax litigation, GST compliance disputes, scrutiny assessments, and appellate defense before ITAT and High Courts.",
    detailedDescription:
      "Legal Vertex provides sophisticated taxation counsel, statutory compliance audits, and assertive dispute resolution for corporations, MSMEs, partnership firms, and high-net-worth individuals. We cover the entire spectrum of Direct Taxes (Income Tax Act, 1961) and Indirect Taxes (Central GST, State GST, Integrated GST, and Customs). Our tax attorneys defend clients against complex scrutiny assessments under Section 143(3), reassessment proceedings under Section 147/148, search and survey actions under Section 132/133A, and penalty adjudications. We represent matters before the Commissioner of Income Tax (Appeals), the Income Tax Appellate Tribunal (ITAT), the GST Appellate Tribunal (GSTAT), and High Courts on substantial questions of law. On the indirect tax front, we resolve Input Tax Credit (ITC) blockages, show-cause notices (SCN), classification conflicts, and tax recovery proceedings.",
    iconName: "FileText",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    keyServices: [
      "Income Tax Scrutiny, Reassessment (Sec 147/148) & Faceless Assessment Defense",
      "Appeals before Commissioner of Income Tax (Appeals) & ITAT Benches",
      "Goods and Services Tax (GST) Audits, SCN Defense & Demand Reductions",
      "Input Tax Credit (ITC) Reversal, Blockage (Rule 86A) & Mismatch Disputes",
      "Tax Search, Seizure & Survey Proceedings Defense (Sec 132/133A)",
      "High Court Tax Appeals & Writ Petitions against Arbitrary Bank Attachments",
      "Corporate Tax Structuring, Capital Gains Planning & TDS/TCS Advisory",
      "Departmental Summons Defense & GST Criminal Prosecution Mitigation",
    ],
    benefits: [
      "Strategic defense preventing coercive departmental bank attachments and account freezing",
      "End-to-end representation from reply to show cause notice up to High Court tax appeals",
      "Preventive tax compliance audits shielding businesses from unexpected statutory liabilities",
    ],
    leadAttorney: "Sagar Sourabh & Deependra Kumar",
  },
  {
    slug: "corporate-law-governance",
    title: "Corporate Law & Governance",
    shortDescription:
      "Strategic advisory for Indian corporate structuring, Companies Act compliance, mergers, commercial contracts, and board governance.",
    detailedDescription:
      "Legal Vertex advises Indian corporate entities, startups, MSMEs, and business promoters through every phase of the corporate lifecycle under the Companies Act, 2013. We structure commercial partnerships, draft shareholder and joint venture agreements, oversee statutory Registrar of Companies (RoC) compliances, and represent corporate leadership in board governance and fiduciary matters.",
    iconName: "Briefcase",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Company Incorporation, Structuring & LLP Formation",
      "Shareholders' Agreements (SHA) & Joint Venture Contracts",
      "Companies Act 2013 & RoC Statutory Filings & Compounding",
      "Corporate Due Diligence & M&A Transaction Advisory",
      "Commercial Drafting, Vendor Contracts & Master Service Agreements",
    ],
    benefits: [
      "Mitigated contractual risk through airtight legal documentation",
      "Seamless statutory compliance before the Ministry of Corporate Affairs (MCA)",
      "Direct partner-level strategic oversight on every transaction",
    ],
    leadAttorney: "Sagar Sourabh",
  },
  {
    slug: "commercial-litigation-disputes",
    title: "Commercial Litigation & Dispute Resolution",
    shortDescription:
      "Aggressive courtroom advocacy and arbitration resolving high-stakes business, contractual, and NCLT company disputes.",
    detailedDescription:
      "When business disputes escalate, Legal Vertex delivers formidable courtroom advocacy. We represent clients before Commercial Courts, the National Company Law Tribunal (NCLT / NCLAT), appellate forums, and domestic arbitration panels under the Arbitration and Conciliation Act, 1996 for recovery of commercial dues, partnership disputes, and insolvency proceedings under IBC.",
    iconName: "Scale",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Commercial Suits under the Commercial Courts Act, 2015",
      "Domestic & Commercial Arbitration under the 1996 Act",
      "NCLT Proceedings under Insolvency & Bankruptcy Code (IBC)",
      "Shareholder Oppression & Mismanagement Petitions",
      "Money Recovery, Summary Suits & Execution of Decrees",
    ],
    benefits: [
      "Strategic focus on early dispute resolution and asset recovery",
      "Trial-ready posture from day one to maximize legal leverage",
      "Transparent litigation budgeting and predictable milestones",
    ],
    leadAttorney: "Ravi Shankar",
  },
  {
    slug: "intellectual-property-technology",
    title: "Intellectual Property & Technology",
    shortDescription:
      "Trademark filing, brand protection, copyright registration, patent advisory, and infringement litigation across India.",
    detailedDescription:
      "Safeguarding intellectual capital is vital for modern commercial ventures. Our legal team provides end-to-end IP protection across India under the Trade Marks Act 1999, Copyright Act 1957, and Patents Act 1970. We manage trademark registration portfolios, handle opposition and rectification proceedings before the Trade Marks Registry, and litigate infringement and passing-off suits before High Courts.",
    iconName: "ShieldAlert",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Trademark Search, Filing & Portfolio Management across India",
      "Trademark Opposition & Rectification Hearings",
      "Copyright Registration & Software Licensing Agreements",
      "Trade Secrets Protection & Non-Disclosure Agreements (NDA)",
      "IP Infringement, Passing-Off & Injunction Suits before Courts",
    ],
    benefits: [
      "Pan-India brand protection and trademark defense",
      "Rapid injunctive relief against counterfeiters and IP infringers",
      "Commercial monetization and technology transfer legal support",
    ],
    leadAttorney: "Sagar Sourabh",
  },
  {
    slug: "regulatory-compliance-investigations",
    title: "Regulatory Compliance & Statutory Inquiries",
    shortDescription:
      "Defending corporations, promoters, and individuals before statutory investigation agencies, SEBI, ED, and MCA authorities.",
    detailedDescription:
      "We defend business organizations and corporate officers facing inquiries by statutory and regulatory bodies in India. Our advocates advise on inquiries and summons issued by the Enforcement Directorate (ED), Serious Fraud Investigation Office (SFIO), SEBI, Central and State regulatory departments, ensuring complete constitutional defense and legal compliance.",
    iconName: "ShieldCheck",
    imageUrl:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Representation in Statutory Summons & Investigation Inquiries",
      "Enforcement Directorate (ED) & PMLA Legal Defense",
      "Serious Fraud Investigation Office (SFIO) Inquiries",
      "Statutory Corporate Audits & Internal Governance Reviews",
      "High Court Writ Petitions Challenging Arbitrary Regulatory Notices",
    ],
    benefits: [
      "Immediate strategic legal counsel during departmental summons",
      "Mitigation of criminal liability and protection of personal liberty",
      "Tailored compliance frameworks built to withstand statutory scrutiny",
    ],
    leadAttorney: "Ravi Shankar",
  },
  {
    slug: "employment-executive-compensation",
    title: "Employment & Industrial Labor Law",
    shortDescription:
      "Advising employers on labor law compliance, employment contracts, non-competes, workplace disputes, and POSH compliance.",
    detailedDescription:
      "Legal Vertex advises enterprises, institutions, and management leadership on navigating Indian employment and labor laws. We draft employment contracts, confidentiality covenants, non-compete agreements, and ensure full statutory compliance under Indian Labor Codes, Industrial Disputes Act, and POSH (Prevention of Sexual Harassment at Workplace) Act.",
    iconName: "Users",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Executive Employment Contracts & Separation Agreements",
      "Workplace Harassment (POSH Act) Compliance & Internal Committee Advisory",
      "Non-Compete & Restrictive Covenants Enforcement",
      "Industrial Disputes & Labor Court Representation",
      "Statutory Gratuity, PF, ESIC & Employment Law Audits",
    ],
    benefits: [
      "Protection of proprietary customer relationships and business assets",
      "Clean statutory compliance preventing employer penal liability",
      "Discreet and effective resolution of executive employment disputes",
    ],
    leadAttorney: "Deependra Kumar",
  },
  {
    slug: "real-estate-land-use",
    title: "Real Estate & Property Law",
    shortDescription:
      "RERA compliance, commercial property lease negotiations, title verification, and builder-buyer dispute resolution.",
    detailedDescription:
      "Our property law practice represents landholders, institutional developers, commercial tenants, and individual buyers across high-value real estate transactions in Bihar and Karnataka. We handle land title due diligence, RERA registrations and complaints, master commercial leases, and property conveyance under the Transfer of Property Act, 1882.",
    iconName: "Building2",
    imageUrl:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80",
    keyServices: [
      "Land Title Due Diligence & Revenue Record Verification",
      "RERA Advisory, Project Registrations & Buyer Complaints",
      "Commercial Lease Agreements & Joint Development Agreements (JDA)",
      "Property Sale Deeds, Conveyance & Mutation Proceedings",
      "Builder-Buyer Litigation & Consumer Forum Representation",
    ],
    benefits: [
      "Rigorous revenue search preventing defective or encumbered title purchases",
      "Speedy dispute resolution before RERA authorities and appellate tribunals",
      "Airtight lease and joint development agreements protecting capital investments",
    ],
    leadAttorney: "Deependra Kumar",
  },
];
