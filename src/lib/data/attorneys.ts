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
    slug: "marcus-vance",
    name: "Marcus Vance, Esq.",
    title: "Senior Managing Partner",
    role: "Head of Corporate & M&A Practice",
    imageUrl:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    education: [
      "J.D., Harvard Law School (Magna Cum Laude)",
      "B.A. in Economics, Columbia University",
    ],
    admissions: [
      "State Bar of California",
      "New York State Bar",
      "U.S. District Court, Northern District of California",
    ],
    bio: "Marcus Vance has over 22 years of elite legal advisory experience representing technology innovators, private equity sponsors, and Fortune 100 enterprises in multibillion-dollar transactions and board negotiations.",
    practiceAreas: [
      "Corporate Law & Governance",
      "Employment Law & Executive Compensation",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 91226 30161 ext. 101",
  },
  {
    slug: "elena-rostova",
    name: "Elena Rostova, J.D.",
    title: "Partner & Chair of Litigation",
    role: "Lead Trial Counsel",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    education: [
      "J.D., Stanford Law School",
      "B.S. in Political Science, UC Berkeley",
    ],
    admissions: [
      "State Bar of California",
      "U.S. Court of Appeals for the Ninth Circuit",
      "U.S. Supreme Court Bar",
    ],
    bio: "A renowned trial attorney with multiple landmark commercial verdicts, Elena has represented clients in complex commercial litigation, antitrust cases, and international commercial arbitrations across three continents.",
    practiceAreas: [
      "Commercial Litigation & Dispute Resolution",
      "Commercial Real Estate & Land Use",
    ],
    email: "legalvertexservices@gmail.com",
    phone: "+91 91226 30161 ext. 102",
  },
  {
    slug: "david-chen",
    name: "David K. Chen, Esq.",
    title: "Partner",
    role: "Head of Intellectual Property & Tech Transactions",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    education: [
      "J.D., NYU School of Law",
      "M.S. in Electrical Engineering & Computer Science, MIT",
    ],
    admissions: [
      "State Bar of California",
      "United States Patent and Trademark Office (USPTO Registered)",
    ],
    bio: "David bridges technology and legal strategy. With an MIT engineering background, he counsels premier AI startups, semiconductor corporations, and biomedical firms on high-value IP protection and licensing.",
    practiceAreas: ["Intellectual Property & Technology"],
    email: "legalvertexservices@gmail.com",
    phone: "+91 62078 88741 ext. 103",
  },
  {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins, Esq.",
    title: "Partner & Former Federal Prosecutor",
    role: "Chair of Regulatory Compliance & White-Collar Defense",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    education: [
      "J.D., Yale Law School",
      "B.A. in Public Policy, Princeton University",
    ],
    admissions: [
      "District of Columbia Bar",
      "State Bar of California",
      "U.S. District Court, Central District of California",
    ],
    bio: "Prior to joining Legal Vertex, Sarah served for seven years as an Assistant U.S. Attorney, leading investigations into securities fraud, cybersecurity breaches, and foreign corrupt practices.",
    practiceAreas: ["Regulatory Compliance & Government Investigations"],
    email: "legalvertexservices@gmail.com",
    phone: "+91 62078 88741 ext. 104",
  },
];
