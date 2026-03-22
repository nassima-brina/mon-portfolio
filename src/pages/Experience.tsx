import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Parcours — Brina Nassima</title>
        <meta
          name="description"
          content="Compétences transversales et linguistiques de Brina Nassima."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Parcours</h2>
      <p className="text-muted-foreground">
        À la recherche d'un stage PFE en développement logiciel.
      </p>
      <div className="border rounded-2xl p-6">
        <h3 className="font-semibold text-lg">Compétences transversales</h3>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Capacité d'apprentissage rapide</li>
          <li>Autonomie et sens des responsabilités</li>
          <li>Motivation et persévérance</li>
          <li>Bonne organisation du travail</li>
          <li>Capacité à résoudre des problèmes</li>
          <li>Travail en équipe</li>
        </ul>
        <h3 className="font-semibold text-lg mt-6">Langues</h3>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Arabe — langue maternelle</li>
          <li>Français — bon niveau</li>
          <li>Anglais — niveau intermédiaire</li>
        </ul>
      </div>
    </section>
  );
}
