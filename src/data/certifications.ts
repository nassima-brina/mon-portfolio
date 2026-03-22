export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hands-On Introduction to Linux with Ubuntu",
    issuer: "Udemy",
    issueDate: "2025-01",
    skills: ["Linux", "Ubuntu", "Commandes Shell"],
    tags: ["Linux", "OS"],
    status: "active",
  },
  {
    title: "Hibernate & JPA — Certification Professionnelle",
    issuer: "MLIAEdu",
    issueDate: "2025-01",
    skills: ["Hibernate", "JPA", "Java", "Maven"],
    tags: ["Java", "Backend"],
    status: "active",
  },
];
