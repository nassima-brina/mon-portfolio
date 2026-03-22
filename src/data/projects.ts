export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Blog Collaboratif",
    period: "2025-2026",
    tags: ["Laravel", "PHP", "MySQL"],
    summary:
      "Mini-site web permettant la gestion et la publication d'articles connectés à une base de données.",
  },
  {
    title: "Gestion des Incidents Réseau",
    period: "2025-2026",
    tags: ["Java Swing", "JDBC", "MySQL", "JFreeChart"],
    summary:
      "Application desktop de gestion des incidents avec CRUD complet, recherche/filtrage et tableau de bord statistique.",
    repo: "https://github.com/nassima-brina/Gestion_incidents",
  },
  {
    title: "Réservation de Salles",
    period: "2025-2026",
    tags: ["Java", "Hibernate", "JPA", "Maven", "H2"],
    summary:
      "Application backend de gestion des salles, utilisateurs et réservations avec recherche de disponibilité et pagination.",
    repo: "https://github.com/nassima-brina/tp-capstone-Hibernat-JPA",
  },
];
