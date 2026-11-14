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
    role: "Founder & Head of Strategic Corporate Advisory",
    imageUrl: "/sagar-sourabh.jpeg",
    education: [
      "B.A. LL.B., Chanakya National Law University (CNLU)",
      "MBA (BM), NMIMS Mumbai",
    ],
    admissions: [
      "Bar Council of India",
      "Supreme Court of India, High Courts, Civil Courts & Tribunals",
      "Advisory Board Member (Liberty Lexicon)",
    ],
    bio: "Sagar Sourabh is the Founder and Managing Partner of Legal Vertex. With more than 9 years of extensive legal and business experience, he specializes in Corporate Law, Commercial Contracts Drafting, Board Governance, and cross-border commercial advisory. He also serves as an Advisory Board Member at Liberty Lexicon.",
    practiceAreas: [
      "Corporate Law & Governance",
      "Contracts Drafting & Negotiation",
      "Commercial & Appellate Litigation",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 91226 30161",
  },
  {
    slug: "ravi-shankar",
    name: "Ravi Shankar",
    title: "Co-Partner",
    role: "Co-Partner & Lead Litigation Counsel",
    imageUrl: "/ravi-shankar.jpeg",
    education: [
      "LL.B., Faculty of Law, University of Delhi (DU)",
      "B.Com",
    ],
    admissions: [
      "Bar Council of India",
      "Supreme Court of India, High Courts, Civil Courts & Tribunals",
    ],
    bio: "Ravi Shankar is a Co-Partner at Legal Vertex with more than 3 years of focused courtroom experience in Civil Matters, Direct and Indirect Taxation Law, Property Disputes, and Commercial Litigation. Combining a strong commerce foundation with his University of Delhi legal training, he delivers aggressive courtroom representation and precise tax advisory.",
    practiceAreas: [
      "Civil Matters & Property Suits",
      "Taxation Law & Advisory",
      "Commercial Dispute Resolution",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 91226 30161",
  },
  {
    slug: "brahmanand-kumar",
    name: "Brahmanand Kumar",
    title: "Co-Partner",
    role: "Co-Partner & Dispute Resolution Lead",
    imageUrl: "/brahmanand-kumar.jpeg",
    education: [
      "B.A. LL.B., University of Calcutta",
      "Advocate, Bar Council of India",
    ],
    admissions: [
      "Bar Council of India",
      "Supreme Court of India, High Courts, Civil Courts & Tribunals",
      "Arbitration & Conciliation Forums",
    ],
    bio: "Brahmanand Kumar is a Co-Partner at Legal Vertex with more than 5 years of specialized experience in Arbitration, Conciliation, Criminal Law, Bail Matters, and complex dispute resolution. He is recognized for his strategic trial advocacy, effective cross-examinations, and successful representation before arbitration tribunals and criminal courts.",
    practiceAreas: [
      "Arbitration & Conciliation",
      "Criminal Law & Bail Matters",
      "Civil & Trial Defense",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 62078 88741",
  },
  {
    slug: "deependra-kumar",
    name: "Deependra Kumar",
    title: "Advocate",
    role: "Advocate & Banking Counsel",
    imageUrl: "/deependra-kumar.jpeg",
    education: [
      "B.A. LL.B.",
      "Advocate, Bar Council of India",
    ],
    admissions: [
      "Bar Council of India",
      "High Courts, Civil Courts & Tribunals",
    ],
    bio: "Deependra Kumar is an Advocate at Legal Vertex with dedicated expertise in Banking Law, Debt Recovery Tribunal (DRT) proceedings, SARFAESI litigation, and Consumer Dispute cases. He represents individuals, businesses, and institutional clients in complex financial recoveries, statutory appeals, and consumer rights litigation.",
    practiceAreas: [
      "Banking Law & DRT Matters",
      "Consumer Protection Cases",
      "Statutory Dispute Resolution",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 62078 88741",
  },
];
