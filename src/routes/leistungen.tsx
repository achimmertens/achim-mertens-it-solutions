import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Shield, Cloud, Bot, GraduationCap, Globe, Lightbulb, UtensilsCrossed, Palette, Grid3x3, BookOpen, Image, Film, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen · Achim Mertens IT Consulting" },
      { name: "description", content: "IT-Beratung, IAM, Softwareentwicklung, Webdesign, Cloud & On-Premises, KI-Automatisierung, Schulungen, Design und mehr." },
    ],
  }),
  component: Leistungen,
});

const items = [
  { icon: Lightbulb, title: "Generelle IT-Beratung", desc: "Strategie, Technologie-Auswahl, Architektur-Reviews. Ich höre zu, ordne ein und gebe Ihnen einen klaren nächsten Schritt – ohne versteckte Eigeninteressen." },
  { icon: Shield, title: "Identity & Access Management", desc: "Konzeption, Tool-Auswahl und Einführung von IAM-Lösungen. Rollen- und Berechtigungskonzepte, SSO, Federation und User Lifecycle." },
  { icon: Code2, title: "Individuelle Softwareentwicklung", desc: "Maßgeschneiderte Tools, API- und Datenbank-Anbindungen, Skripte, ... – sauber dokumentiert und wartbar." },
  { icon: Globe, title: "Webdesign & Webentwicklung", desc: "Schnelle, moderne Webseiten mit Javascript. SEO-optimiert, barrierearm, mobilfreundlich – wie diese Seite hier." },
  { icon: Cloud, title: "IT-Infrastruktur", desc: "Installation, Monitoring und Wartung. Cloud (AWS, Azure, Hetzner) oder klassisch On-Premises – inklusive Backup- und Update-Strategie." },
  { icon: Bot, title: "KI & Automatisierung", desc: "LLM-Integration, RAG-Anwendungen, OpenClaw-Agenten mit Telegram-Anbindung und individuelle Bots.", href: "/leistungen/ki-automatisierung" },
  { icon: GraduationCap, title: "Schulungen & Workshops", desc: "Praktische Recherche und Workshops zu IT-Themen Ihrer Wahl (nicht nur IAM, Webentwicklung, KI-Tools und Automatisierung) – remote oder vor Ort." },
  { icon: UtensilsCrossed, title: "Speisekarten mit KI designen", desc: "Professionell gestaltete Menüs für Restaurants – erstellt in kurzer Zeit, als fertiges Design inklusive Druckvorbereitung." },
  { icon: Palette, title: "Logos und Brand Kits erstellen", desc: "Komplette Markenauftritte (Logo, Farben, Schriftarten) für kleine Unternehmen, die bisher kein einheitliches Branding haben." },
  { icon: Grid3x3, title: "Social-Media-Vorlagenpakete", desc: "Wiederverwendbare Design-Templates für Unternehmen, die regelmäßig posten möchten, ohne jedes Mal neu gestalten zu müssen." },
  { icon: BookOpen, title: "Schulungsunterlagen und Handbücher", desc: "Unstrukturierte Firmeninfos werden in professionelle Dokumentationen umgewandelt – ideal für interne Trainings und Prozesse." },
  { icon: Image, title: "Flyer und Aushänge", desc: "Werbematerialien für lokale Aktionen, die Unternehmen regelmäßig benötigen – wiederkehrende Aufträge inklusive." },
  { icon: Film, title: "Animationen und Bewegtbild", desc: "Kurze, visuell ansprechende Animationen für Werbung, Websites oder Social Media." },
];

function Leistungen() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Leistungen</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Was ich für Sie umsetze</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            IT-Beratung, Design und mehr – praxisnah und umsetzungsstark.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-6">
        {items.map((s) => {
          const card = (
            <article key={s.title} className={`p-7 bg-card border border-border rounded-xl transition-all ${s.href ? "cursor-pointer hover:border-accent hover:shadow-lg" : ""}`} style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-accent-foreground" style={{ background: "var(--gradient-accent)" }}>
                <s.icon size={24} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-card-foreground">{s.title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              {s.href && (
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors">
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              )}
            </article>
          );
          return s.href ? (
            <Link key={s.title} to={s.href} className="block group">
              {card}
            </Link>
          ) : (
            card
          );
        })}
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
