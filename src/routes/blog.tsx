import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog · Achim Mertens IT Consulting" },
      { name: "description", content: "Artikel und Gedanken zu IT-Beratung, IAM, Webentwicklung, KI und Automatisierung." },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    slug: "iam-fuer-den-mittelstand",
    date: "12. Mai 2026",
    tag: "IAM",
    title: "Identity & Access Management für den Mittelstand – pragmatisch starten",
    excerpt: "Große IAM-Suiten sind teuer und träge. Wie ein KMU mit überschaubarem Aufwand in 90 Tagen einen sauberen IAM-Grundstein legt.",
  },
  {
    slug: "openclaw-telegram-ki",
    date: "28. April 2026",
    tag: "KI & Automatisierung",
    title: "OpenClaw-Agent mit Telegram & LLM in unter einer Woche",
    excerpt: "Wie ich Kunden einen autonomen Chat-Agenten aufsetze, der echte Aufgaben übernimmt – und was dabei wirklich zählt.",
  },
  {
    slug: "tanstack-start-im-praxistest",
    date: "10. April 2026",
    tag: "Webentwicklung",
    title: "TanStack Start im Praxistest – das Ende von Next-only?",
    excerpt: "Server Functions, file-based Routing, edge-ready. Ein Erfahrungsbericht aus einem realen Kundenprojekt.",
  },
  {
    slug: "self-hosting-2026",
    date: "27. März 2026",
    tag: "Infrastruktur",
    title: "Self-Hosting in 2026 – warum sich die eigene Hetzner-Box wieder lohnt",
    excerpt: "Cloud ist nicht alternativlos. Eine ehrliche TCO-Betrachtung für kleinere Anwendungen.",
  },
];

function Blog() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Blog</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Notizen aus der IT-Praxis</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            Gedanken, Erfahrungen und Anleitungen zu IAM, Webentwicklung, KI und Infrastruktur.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="group p-7 bg-card border border-border rounded-xl hover:border-accent transition-colors" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Calendar size={14} /> {p.date}</span>
              <span className="px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground font-medium">{p.tag}</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">{p.title}</h2>
            <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
              Bald lesbar <ArrowRight size={16} />
            </span>
          </article>
        ))}
        <p className="text-center text-sm text-muted-foreground mt-4">
          Weitere Artikel folgen regelmäßig. Sie möchten ein Thema vorschlagen?{" "}
          <Link to="/kontakt" className="text-accent font-medium hover:underline">Schreiben Sie mir.</Link>
        </p>
      </section>
    </>
  );
}
