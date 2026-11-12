export interface Attorney {
  slug: string;
  name: string;
  title: string;
  role: string;
  imageUrl: string;
  education: string[];
  admissions: string[];
  bio: string;
  practiceAreas: string[];
  email: string;
  phone: string;
}

export const attorneys: Attorney[] = [
  {
    slug: "sagar-sourabh",
    name: "Sagar Sourabh",
    title: "Founder / Managing Partner",
    role: "Founder & Head of Strategic Advisory",
    imageUrl: "/sagar-sourabh.jpeg",
    education: [
      "LL.B., Faculty of Law",
      "Advocate, Bar Council of India",
    ],
    admissions: [
      "Bar Council of India",
      "Patna High Court",
      "Supreme Court of India (Appellate Jurisdiction)",
    ],
    bio: "Sagar Sourabh is the Founder and Managing Partner of Legal Vertex LLP. With an uncompromising dedication to high-stakes legal strategy, he counsels corporate leadership, business founders, and institutional clients in commercial litigation, mergers & acquisitions, and cross-border regulatory governance.",
    practiceAreas: [
      "Corporate Law & Governance",
      "Commercial Litigation & Dispute Resolution",
      "Intellectual Property & Technology",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 91226 30161",
  },
  {
    slug: "ravi-shankar",
    name: "Ravi Shankar",
    title: "Co-Partner",
    role: "Co-Partner & Lead Advisory Counsel",
    imageUrl: "/ravi-shankar.jpeg",
    education: [
      "LL.B., Faculty of Law",
      "Advocate, Bar Council of India",
    ],
    admissions: [
      "Bar Council of India",
      "State Bar Council & High Court Jurisdiction",
      "National Company Law Tribunal (NCLT)",
    ],
    bio: "Ravi Shankar is Co-Partner at Legal Vertex LLP, driving complex dispute resolution, contract negotiations, commercial real estate, and statutory compliance. His sharp analytical rigor and courtroom command provide clients with decisive strategic defense in high-value proceedings.",
    practiceAreas: [
      "Commercial Litigation & Dispute Resolution",
      "Regulatory Compliance & Government Investigations",
      "Commercial Real Estate & Land Use",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 91226 30161",
  },
  {
    slug: "deependra-kumar",
    name: "Deependra Kumar",
    title: "Associate",
    role: "Legal Associate & Case Counsel",
    imageUrl: "/deependra-kumar.jpeg",
    education: [
      "B.A. LL.B. (Hons.)",
      "Advocate, Bar Council of India",
    ],
    admissions: [
      "Bar Council of India",
      "High Court Jurisdiction & Appellate Tribunals",
    ],
    bio: "Deependra Kumar is an Associate at Legal Vertex LLP, specializing in case preparation, appellate research, commercial contract drafting, and multi-jurisdictional compliance. He works closely with senior leadership to build bulletproof arguments for corporate and trial matters.",
    practiceAreas: [
      "Corporate Law & Governance",
      "Commercial Litigation & Dispute Resolution",
      "Employment Law & Executive Compensation",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 62078 88741",
  },
];
