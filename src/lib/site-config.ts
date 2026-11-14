export const siteConfig = {
  name: "Legal Vertex",
  legalName: "Legal Vertex LLP",
  tagline: "Premier Civil, Criminal & Taxation Legal Counsel",
  description:
    "Legal Vertex is a premier law firm offering formidable trial advocacy and counsel in Civil & Criminal Litigation, Bail Defense, Land Disputes, Direct & Indirect Taxation, and GST matters across Patna, Bengaluru, and pan-India judicial forums.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://legalvertex.com",
  ogImage: "https://legalvertex.com/logo.png",
  keywords: [
    "Legal Vertex",
    "civil lawyer Patna",
    "criminal advocate Patna",
    "taxation lawyer Patna",
    "GST advocate Bengaluru",
    "bail lawyer Patna High Court",
    "property dispute advocate Patna",
    "high court advocate Bengaluru",
    "top advocates Patna Bihar",
    "tax litigation lawyers Karnataka",
    "Civil and Criminal law firm India",
  ],
  author: {
    name: "Legal Vertex LLP",
    url: "https://legalvertex.com",
  },
  contact: {
    phone: "+91 91226 30161",
    displayPhone: "+91 91226 30161",
    secondaryPhone: "+91 62078 88741",
    secondaryDisplayPhone: "+91 62078 88741",
    whatsapp: "+919122630161",
    whatsappDisplay: "+91 91226 30161",
    whatsappText: "Hello, I would like to request a confidential consultation regarding a legal matter.",
    email: "legalvertexservices@gmail.com",
    openingHours: "Mo-Fr 09:00-19:00",
    priceRange: "$$$$",
    // Primary / Registered Office (Patna)
    address: {
      streetAddress: "Flat No - 703, 7th Floor, Venus Empire, Khagaul Road, Near Govinda International School",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "801503",
      addressCountry: "IN",
    },
    geo: {
      latitude: 25.5941,
      longitude: 85.0485,
    },
    // Both Official Firm Branches
    offices: [
      {
        id: "patna",
        title: "Office 1 - Patna",
        city: "Patna",
        state: "Bihar",
        postalCode: "801503",
        building: "Flat No - 703, 7th Floor, Venus Empire",
        landmark: "Khagaul Road, Near Govinda International School",
        fullAddress:
          "Flat No - 703, 7th Floor, Venus Empire, Khagaul Road, Near Govinda International School, Patna, Bihar - 801503",
      },
      {
        id: "bengaluru",
        title: "Office 2 - Bengaluru",
        city: "Bengaluru",
        state: "Karnataka",
        postalCode: "560068",
        building: "Flat No - 007, Ground Floor, Block-A, Shakti Sprinkle Apartment",
        landmark: "Begur, Bengaluru",
        fullAddress:
          "Flat No - 007, Ground Floor, Block-A, Shakti Sprinkle Apartment, Begur, Bengaluru, Karnataka - 560068",
      },
    ],
  },
  socials: {
    linkedin: "https://linkedin.com/company/legalvertex",
    twitter: "https://twitter.com/legalvertex",
  },
};
