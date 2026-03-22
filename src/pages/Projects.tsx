import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — Brina Nassima</title>
        <meta
          name="description"
          content="Projets académiques : Blog Laravel, Gestion des incidents Java, Réservation de salles Hibernate."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Projets Académiques</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="border rounded-2xl p-4 hover:shadow transition"
          >
            <h3 className="font-semibold">{p.title}</h3>
            {p.period && (
              <p className="text-xs text-muted-foreground mb-2">{p.period}</p>
            )}
            <p className="text-sm text-muted-foreground">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span key={t} className="border rounded-full px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a
                  className="underline"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  className="underline"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
