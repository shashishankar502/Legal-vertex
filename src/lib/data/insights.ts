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
    slug: "navigating-ai-ip-patent-eligibility-2026",
    title: "Navigating AI Patents and Intellectual Property Rights in 2026",
    description:
      "A comprehensive analysis of USPTO guidelines, Federal Circuit rulings on machine learning inventions, and best practices for safeguarding algorithmic trade secrets.",
    category: "Intellectual Property",
    readTime: "6 min read",
    datePublished: "2026-03-15",
    authorName: "Sagar Sourabh",
    authorSlug: "sagar-sourabh",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    content: [
      "The rapid evolution of generative neural networks and autonomous AI agents has forced courts and patent offices worldwide to reassess foundational IP doctrines.",
      "In this briefing, we examine the three pivotal components every tech enterprise must address: patent eligibility under 35 U.S.C. § 101, inventorship declarations for machine-assisted discovery, and the strategic hybrid balance between patent disclosure and trade secrecy.",
      "Recent rulings clarify that while purely computational concepts remain ineligible as abstract ideas, specific algorithmic improvements that solve defined systems latency, cryptographic integrity, or real-time inference hurdles pass muster under the Alice/Mayo framework.",
      "Enterprises must institute rigorous source-code provenance tracking and clean-room training protocols to insulate their products against third-party copyright and trade secret infringement litigation.",
    ],
  },
  {
    slug: "sec-scrutiny-corporate-esg-disclosures",
    title: "SEC Enforcement Trends: Assessing Scrutiny on Corporate Governance Disclosures",
    description:
      "Understanding new regulatory standards, climate risk reporting mandates, and executive accountability in quarterly filings.",
    category: "Regulatory & Compliance",
    readTime: "5 min read",
    datePublished: "2026-02-28",
    authorName: "Ravi Shankar",
    authorSlug: "ravi-shankar",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    content: [
      "Federal regulatory agencies have substantially expanded their examination of public and pre-IPO disclosures, with heightened enforcement focus on ESG metrics, cybersecurity readiness, and supply-chain risk attestations.",
      "Boards of directors must ensure internal audit committees maintain direct oversight over qualitative statements in investor presentations, avoiding discrepancies with mandatory SEC filings.",
      "Proactive internal compliance reviews and documented stress tests offer corporations the most reliable shield against formal SEC investigative inquiries and private securities class actions.",
    ],
  },
  {
    slug: "cross-border-ma-antitrust-playbook",
    title: "Cross-Border Mergers & Acquisitions: The Modern Antitrust Playbook",
    description:
      "How multinational acquirers navigate simultaneous scrutiny from the FTC, DOJ, and international competition regulators to close complex transactions.",
    category: "Corporate & M&A",
    readTime: "7 min read",
    datePublished: "2026-01-20",
    authorName: "Deependra Kumar",
    authorSlug: "deependra-kumar",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    content: [
      "The global merger control landscape has become significantly more rigorous. Regulatory bodies are examining non-horizontal mergers, ecosystem acquisitions, and nascent competitor buyouts with unprecedented vigor.",
      "Dealmakers must formulate regulatory clearance strategies long before signing definitive agreements, incorporating flexible closing conditions, regulatory ticking fees, and pre-negotiated remedy packages.",
      "Legal Vertex's M&A practice routinely collaborates with economic consulting experts to prepare evidentiary defenses that substantiate pro-competitive efficiencies and consumer benefits early in the second request phase.",
    ],
  },
];
