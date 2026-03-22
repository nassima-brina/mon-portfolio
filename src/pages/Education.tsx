import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formations — Brina Nassima</title>
        <meta
          name="description"
          content="Formations académiques : Licence SIR, DEUST MIPC, Baccalauréat Sciences Physiques."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Formations</h2>
      <ol className="relative border-s border-gray-300">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6 pb-8">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-white" />
            <h3 className="font-semibold text-base">
              {e.degree}
              {e.field ? ` — ${e.field}` : ""}
            </h3>
            <p className="text-sm font-medium">{e.school}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {fmt(e.start)} — {fmt(e.end)}
              {e.location ? ` • ${e.location}` : ""}
              {e.gpa ? ` • GPA ${e.gpa}` : ""}
            </p>
            {e.courses && e.courses.length > 0 && (
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Cours : </span>
                {e.courses.slice(0, 5).join(", ")}
                {e.courses.length > 5 ? "…" : ""}
              </p>
            )}
            {e.highlights && e.highlights.length > 0 && (
              <ul className="list-disc ms-5 mt-2 text-sm text-muted-foreground">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
