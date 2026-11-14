export interface Insight {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  datePublished: string;
  authorName: string;
  authorSlug: string;
  imageUrl: string;
  content: string[];
}

export const insights: Insight[] = [
  {
    slug: "gst-input-tax-credit-litigation-itc-blockage",
    title: "Navigating GST Input Tax Credit (ITC) Blockage & Scrutiny under Rule 86A",
    description:
      "A strategic legal analysis of departmental ITC restrictions, procedural safeguards, and relief mechanisms before the High Court under Article 226.",
    category: "Taxation Law",
    readTime: "6 min read",
    datePublished: "2026-03-15",
    authorName: "Sagar Sourabh",
    authorSlug: "sagar-sourabh",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    content: [
      "The invocation of Rule 86A of the CGST Rules by tax authorities to disallow electronic credit ledger debits has emerged as a major flashpoint for commercial enterprises and traders.",
      "While departmental officers possess emergency powers to protect revenue, judicial precedents consistently mandate that such powers cannot be exercised mechanically without tangible evidence of fraudulent credit or non-existent suppliers.",
      "Taxpayers confronted with arbitrary ITC blockage must first file detailed objections establishing bonafide purchases backed by tax invoices, e-way bills, and bank payment trails to demonstrate compliance under Section 16(2) of the CGST Act.",
      "Where revenue authorities fail to provide reasoned orders or exceed the one-year statutory sunset clause under Rule 86A(3), approaching the High Court under Article 226 remains the most effective remedy to unfreeze operational capital.",
    ],
  },
  {
    slug: "anticipatory-bail-guidelines-crpc-bnss-defense",
    title: "Strategic Principles of Anticipatory Bail & FIR Quashing under BNSS & CrPC",
    description:
      "Understanding the essential evidentiary parameters for securing pre-arrest bail and quashing frivolous FIRs before State High Courts.",
    category: "Criminal Defense",
    readTime: "5 min read",
    datePublished: "2026-02-28",
    authorName: "Ravi Shankar",
    authorSlug: "ravi-shankar",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    content: [
      "Securing anticipatory bail in non-bailable offences requires an immediate, disciplined presentation of facts before the Sessions Court or High Court, establishing the absence of custodial interrogation requirements.",
      "The Supreme Court of India in landmark precedents has established that personal liberty is the rule and arrest the exception, emphasizing that pre-trial incarceration should not be deployed as punitive measure in commercial or family disputes.",
      "For false or malicious complaints arising out of business or civil disagreements, initiating quashing petitions under Section 482 of the CrPC / Section 528 of the BNSS offers a decisive constitutional shield against prolonged trial harassment.",
      "Meticulous documentation including contemporaneous written communication, bank transaction records, and statutory notices forms the backbone of an effective pre-arrest legal defense.",
    ],
  },
  {
    slug: "civil-property-injunction-specific-performance-cpc",
    title: "Injunctions and Specific Performance in Commercial Land & Property Disputes",
    description:
      "Key litigation strategies under Order XXXIX of CPC and the Specific Relief Act for protecting immovable property and commercial contracts.",
    category: "Civil Litigation",
    readTime: "7 min read",
    datePublished: "2026-01-20",
    authorName: "Deependra Kumar",
    authorSlug: "deependra-kumar",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    content: [
      "Property litigation in fast-growing metropolitan centers like Patna and Bengaluru demands immediate injunctive protection to safeguard land titles against unauthorized alienation or illegal third-party construction.",
      "Under Order XXXIX Rules 1 & 2 of the Code of Civil Procedure (CPC), an applicant must satisfy the tripartite test: establishing a prima facie case, balance of convenience, and irreparable injury that cannot be compensated in monetary damages.",
      "Following the 2018 amendment to the Specific Relief Act, courts are generally mandated to enforce the specific performance of valid land and commercial contracts, eliminating discretionary judicial refusal except under narrow statutory exceptions.",
      "Legal Vertex combines rigorous revenue record verification (Khata, Jamabandi, and encumbrance certificates) with strategic civil filings to guarantee title security for purchasers, developers, and institutional titleholders.",
    ],
  },
];
