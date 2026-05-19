import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Shield, Cloud, Bot, GraduationCap, Globe, Lightbulb, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen · Achim Mertens IT Consulting" },
      { name: "description", content: "IT-Beratung, IAM, Softwareentwicklung, Webdesign, Cloud & On-Premises, KI-Automatisierung und Schulungen." },
    ],
  }),
  component: Leistungen,
});

const items = [
  { icon: Lightbulb, title: "Generelle IT-Beratung", desc: "Strategie, Technologie-Auswahl, Architektur-Reviews. Ich höre zu, ordne ein und gebe Ihnen einen klaren nächsten Schritt – ohne versteckte Eigeninteressen." },
  { icon: Shield, title: "Identity & Access Management", desc: "Konzeption, Tool-Auswahl und Einführung von IAM-Lösungen. Rollen- und Berechtigungskonzepte, SSO, Federation und User Lifecycle." },
  { icon: Code2, title: "Individuelle Softwareentwicklung", desc: "Maßgeschneiderte Tools, REST- und GraphQL-APIs, Datenbank-Anbindungen, Skripte und Schnittstellen – sauber dokumentiert und wartbar." },
  { icon: Globe, title: "Webdesign & Webentwicklung", desc: "Schnelle, moderne Webseiten mit React, TanStack & Tailwind. SEO-optimiert, barrierearm, mobilfreundlich – wie diese Seite hier." },
  { icon: Cloud, title: "IT-Infrastruktur", desc: "Installation, Monitoring und Wartung. Cloud (AWS, Azure, Hetzner) oder klassisch On-Premises – inklusive Backup- und Update-Strategie." },
  { icon: Bot, title: "KI & Automatisierung", desc: "LLM-Integration, RAG-Anwendungen, OpenClaw-Agenten mit Telegram-Anbindung, n8n-Workflows und individuelle Bots." },
  { icon: GraduationCap, title: "Schulungen & Workshops", desc: "Praktische Workshops zu IT-Sicherheit, IAM, Webentwicklung, KI-Tools und Automatisierung – remote oder vor Ort." },
];

function Leistungen() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Leistungen</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Was ich für Sie umsetze</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            Sieben Schwerpunkte, ein Anspruch: pragmatische Lösungen, die im Alltag bestehen.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-6">
        {items.map((s) => (
          <article key={s.title} className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-accent-foreground" style={{ background: "var(--gradient-accent)" }}>
              <s.icon size={24} />
            </div>
            <h2 className="mt-4 text-xl font-bold text-card-foreground">{s.title}</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-2xl p-10 text-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-2xl md:text-3xl font-bold">Klingt passend? Lernen wir uns kennen.</h2>
          <p className="mt-2 text-primary-foreground/80">Die erste Stunde Beratung ist kostenlos.</p>
          <Link to="/kontakt" className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            Kontakt aufnehmen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
