export const siteConfig = {
  name: "Legal Vertex",
  legalName: "Legal Vertex LLP",
  tagline: "Premier Strategic Counsel & High-Stakes Litigation",
  description:
    "Legal Vertex is a leading corporate law firm offering comprehensive legal services in business transactions, high-stakes dispute resolution, intellectual property, and regulatory compliance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://legalvertex.com",
  ogImage: "https://legalvertex.com/logo.png",
  keywords: [
    "Legal Vertex",
    "corporate law firm",
    "business litigation attorney",
    "intellectual property lawyers",
    "regulatory compliance counsel",
    "commercial dispute resolution",
    "mergers and acquisitions lawyer",
    "corporate law firm Patna",
    "law firm Bengaluru",
    "top advocates Patna Bihar",
    "corporate lawyers Bengaluru Karnataka",
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
