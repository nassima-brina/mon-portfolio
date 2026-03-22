export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques",
    degree: "Licence",
    field: "Systèmes Informatiques Répartis",
    location: "Marrakech",
    start: "2025-09",
    courses: [
      "Bases de données distribuées",
      "JEE",
      "Architecture répartie",
      "React",
      "Java",
      "SQL",
      "Réseaux TCP/IP",
      "UML",
      "Linux",
    ],
  },
  {
    school: "Faculté des Sciences et Techniques",
    degree: "DEUST",
    field: "Mathématiques Informatiques Physique Chimie",
    location: "Marrakech",
    start: "2023-09",
    end: "2025-06",
    courses: [
      "Langage C",
      "Analyse 1",
      "Analyse 2",
      "Analyse 3",
      "Analyse 4",
      "Algèbre",
      "Algorithmique",
      "Physique",
      "Chimie",
    ],
  },
  {
    school: "Lycée qualifiant Ezarktouni",
    degree: "Baccalauréat",
    field: "Sciences Physiques — Option Française",
    location: "Tanant, Azilal",
    start: "2022-09",
    end: "2023-06",
  },
];
