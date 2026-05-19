import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Github, Landmark } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt · Achim Mertens IT Consulting" },
      { name: "description", content: "So erreichen Sie Achim Mertens – Telefon, E-Mail und Anschrift. Erste Beratungsstunde kostenlos." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const mailto = "mailto:achim_mertens@gmx.de?subject=" + encodeURIComponent("Consultant Anfrage");
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Kontakt</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Lassen Sie uns sprechen.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            Die erste Stunde Beratung ist kostenlos. Schreiben Sie mir oder rufen Sie an – ich melde mich werktags innerhalb von 24 Stunden zurück.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-6">
        <a href={mailto} className="group p-7 bg-card border border-border rounded-xl hover:border-accent transition-colors flex flex-col" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="w-12 h-12 rounded-lg bg-secondary text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <Mail size={22} />
          </div>
          <h2 className="mt-4 text-xl font-bold text-card-foreground">E-Mail</h2>
          <p className="mt-1 text-muted-foreground">Mit Betreff „Consultant Anfrage" landet Ihre Nachricht direkt in der richtigen Ablage.</p>
          <span className="mt-3 font-semibold text-primary group-hover:text-accent">achim_mertens@gmx.de</span>
        </a>

        <a href="tel:+4915174412216" className="group p-7 bg-card border border-border rounded-xl hover:border-accent transition-colors flex flex-col" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="w-12 h-12 rounded-lg bg-secondary text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <Phone size={22} />
          </div>
          <h2 className="mt-4 text-xl font-bold text-card-foreground">Telefon</h2>
          <p className="mt-1 text-muted-foreground">Direkter Draht, deutschsprachig.</p>
          <span className="mt-3 font-semibold text-primary group-hover:text-accent">+49 1517 4412216</span>
        </a>

        <div className="p-7 bg-card border border-border rounded-xl flex flex-col" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="w-12 h-12 rounded-lg bg-secondary text-primary flex items-center justify-center">
            <MapPin size={22} />
          </div>
          <h2 className="mt-4 text-xl font-bold text-card-foreground">Anschrift</h2>
          <address className="mt-2 not-italic text-muted-foreground leading-relaxed">
            Achim Mertens<br />
            Vennstr. 31<br />
            52249 Eschweiler<br />
            Deutschland
          </address>
        </div>

        <div className="p-7 bg-card border border-border rounded-xl flex flex-col" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="w-12 h-12 rounded-lg bg-secondary text-primary flex items-center justify-center">
            <Landmark size={22} />
          </div>
          <h2 className="mt-4 text-xl font-bold text-card-foreground">Bankverbindung</h2>
          <dl className="mt-2 text-sm text-muted-foreground space-y-1">
            <div><dt className="inline font-medium text-foreground">Inhaber: </dt><dd className="inline">Achim Mertens</dd></div>
            <div><dt className="inline font-medium text-foreground">IBAN: </dt><dd className="inline font-mono">DE15 1001 2345 0281 5663 01</dd></div>
            <div><dt className="inline font-medium text-foreground">BIC: </dt><dd className="inline font-mono">TRBKDEBBXXX</dd></div>
            <div><dt className="inline font-medium text-foreground">Bank: </dt><dd className="inline">Trade Republic</dd></div>
          </dl>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-2xl p-8 md:p-10 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-2xl font-bold">Online finden Sie mich hier</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/achim-mertens-97b0" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-accent px-4 py-2.5 rounded-md font-medium transition"><Linkedin size={18} /> LinkedIn</a>
            <a href="https://github.com/achimmertens" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-accent px-4 py-2.5 rounded-md font-medium transition"><Github size={18} /> GitHub</a>
            <a href="https://peakd.com/@achimmertens" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-accent px-4 py-2.5 rounded-md font-medium transition">
              <span className="font-black">Ⓗ</span> Hive Blockchain
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
