import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Github, MapPin } from "lucide-react";
import profile from "@/assets/profile.jpg";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich · Achim Mertens" },
      { name: "description", content: "Lebenslauf und Werdegang von Achim Mertens – freier IT-Consultant, Programmierer und Webdesigner aus Eschweiler." },
    ],
  }),
  component: UeberMich,
});

const cv = [
  { period: "seit 2023", role: "Freier IT-Consultant", org: "Software Consulting Mertens, Eschweiler",
    bullets: ["IT-Beratung, IAM, Softwareentwicklung & Webdesign für KMU und Privatkunden", "KI-Automatisierung mit OpenClaw, n8n und LLM-Integrationen", "Hosting und Wartung von Kundenwebseiten"] },
  { period: "2018 – 2023", role: "IAM Senior Consultant", org: "Konzernumfeld (Energie / Industrie)",
    bullets: ["Konzeption und Einführung großer Identity-&-Access-Management-Lösungen", "Rollenmodelle, SSO, Federation, User Lifecycle Management", "Verantwortlich für Architektur und Toolauswahl"] },
  { period: "2008 – 2018", role: "Senior IT-Berater & Entwickler", org: "Internationale IT-Dienstleister",
    bullets: ["Individuelle Softwareentwicklung (Java, JavaScript, Python)", "Aufbau und Betrieb verteilter IT-Infrastrukturen", "Kundenprojekte in DE, NL und CH"] },
  { period: "ab ca. 2000", role: "Einstieg & Aufbau", org: "IT-Beratung & Entwicklung",
    bullets: ["Erste Stationen als Entwickler und System-Engineer", "Über 25 Jahre Praxiserfahrung – vom Skript bis zur Konzern-Architektur"] },
];

const skills = ["IAM", "SSO / Federation", "TypeScript & React", "Node.js", "Python", "Java", "n8n", "OpenClaw", "LLM / RAG", "AWS", "Hetzner Cloud", "Linux", "PostgreSQL", "Tailwind", "TanStack", "Telegram Bots"];

function UeberMich() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <img src={profile} alt="Achim Mertens" width={208} height={208}
            className="w-44 h-44 md:w-52 md:h-52 object-cover rounded-2xl border-4 border-white/20 shadow-2xl" />
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">Über mich</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">Achim Mertens</h1>
            <p className="mt-3 text-lg text-primary-foreground/85">
              Freier IT-Consultant, Programmierer und Webdesigner. Ich verbinde Konzern-Erfahrung mit der Pragmatik des Mittelstands.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full"><MapPin size={14} /> Eschweiler, DE</span>
              <a href="https://www.linkedin.com/in/achim-mertens-97b0" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-accent px-3 py-1.5 rounded-full transition"><Linkedin size={14} /> LinkedIn</a>
              <a href="https://github.com/achimmertens" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-accent px-3 py-1.5 rounded-full transition"><Github size={14} /> GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-primary">Lebenslauf</h2>
        <p className="mt-2 text-muted-foreground">
          Auszug meiner beruflichen Stationen – ergänzend zu meinem{" "}
          <a className="text-accent font-medium hover:underline" href="https://www.linkedin.com/in/achim-mertens-97b0" target="_blank" rel="noreferrer">LinkedIn-Profil</a>.
        </p>

        <ol className="mt-10 relative border-l-2 border-border ml-2">
          {cv.map((c) => (
            <li key={c.period} className="ml-6 pb-10">
              <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-accent border-4 border-background" />
              <p className="text-xs uppercase tracking-widest text-accent font-bold">{c.period}</p>
              <h3 className="mt-1 text-xl font-bold text-foreground">{c.role}</h3>
              <p className="text-muted-foreground">{c.org}</p>
              <ul className="mt-3 space-y-1 text-foreground">
                {c.bullets.map((b) => <li key={b} className="flex gap-2"><span className="text-accent">›</span>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-primary">Schwerpunkte & Tech-Stack</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm border border-border">{s}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
