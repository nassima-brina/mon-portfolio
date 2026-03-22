import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="grid gap-6 max-w-lg">
      <Helmet>
        <title>Contact — Brina Nassima</title>
        <meta
          name="description"
          content="Contacter Brina Nassima pour un stage PFE en développement logiciel."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="border rounded-2xl p-6 grid gap-3">
        <p className="text-sm">
          <span className="font-medium">Email : </span>
          <a href={"mailto:" + profile.email} className="underline">
            {profile.email}
          </a>
        </p>
        <p className="text-sm">
          <span className="font-medium">Téléphone : </span>
          <a href={"tel:" + profile.phone} className="underline">
            {profile.phone}
          </a>
        </p>
        {profile.socials.map((s) => (
          <p key={s.label} className="text-sm">
            <span className="font-medium">{s.label} : </span>
            <a
              href={s.href}
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              {s.href}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
}
