import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Shield, Cloud, Bot, GraduationCap, Globe, Lightbulb } from "lucide-react";
import profile from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Achim Mertens · IT Consulting & Softwareentwicklung in Eschweiler" },
      { name: "description", content: "Freier IT-Consultant für Beratung, Identity & Access Management, Softwareentwicklung, Webdesign, KI und Automatisierung." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Lightbulb, title: "IT-Beratung", desc: "Strategische und technische Begleitung – herstellerunabhängig und auf Augenhöhe." },
  { icon: Shield, title: "Identity & Access Management", desc: "Konzeption und Einführung sicherer IAM-Lösungen für Unternehmen." },
  { icon: Code2, title: "Individuelle Softwareentwicklung", desc: "Maßgeschneiderte Anwendungen, Schnittstellen und Automatisierungen." },
  { icon: Globe, title: "Webdesign & Entwicklung", desc: "Moderne, schnelle Webseiten – responsive, SEO-stark und wartbar." },
  { icon: Cloud, title: "IT-Infrastruktur", desc: "Installation und Wartung in der Cloud oder On-Premises." },
  { icon: Bot, title: "KI & Automatisierung", desc: "Praxisnahe KI-Anwendungen, Agenten und Workflow-Automatisierung." },
  { icon: GraduationCap, title: "Schulungen & Workshops", desc: "Wissensvermittlung zu IT-Themen für Teams und Einzelpersonen." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center text-primary-foreground">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/10 backdrop-blur px-3 py-1 rounded-full">
              IT Consulting · Eschweiler
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Ihre individuelle und pragmatische IT-Unterstützung
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
              Ich bin Achim Mertens – freier IT-Consultant, Programmierer und Webdesigner. Seit über 25 Jahren arbeite ich als Angestellter der Telekom im Bereich Betrieb von Identity & Access Management sowie Softwareentwicklung. 
            </p>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
              Diese Erfahrungen möchte ich an Sie weitergeben und Sie bei kleinen IT-Projekten unterstützen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/kontakt" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
                Erste Stunde gratis <ArrowRight size={18} />
              </Link>
              <Link to="/leistungen" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition">
                Leistungen ansehen
              </Link>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="absolute -inset-4 bg-accent/30 blur-2xl rounded-full" />
            <img
              src={profile}
              alt="Achim Mertens"
              width={320}
              height={320}
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Was ich für Sie tue</h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Sieben Schwerpunkte – ein Ansprechpartner. Sie bekommen Klartext, transparente Preise und Lösungen, die im Alltag bestehen.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="w-11 h-11 rounded-lg bg-secondary text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground text-lg">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Warum mit mir arbeiten?</h2>
            <ul className="mt-6 space-y-3 text-foreground">
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span> Ein Ansprechpartner – kein Vertriebs-Pingpong</li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span> Faire, transparente Stunden- und Pauschalpreise</li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span> Erste Beratungsstunde kostenlos</li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span> Monatliche Abrechnung nach erbrachter Leistung</li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span> Über 25 Jahre Praxiserfahrung im Großkonzern und Mittelstand</li>
            </ul>
            <Link to="/preise" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent">
              Preise ansehen <ArrowRight size={18} />
            </Link>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8" style={{ boxShadow: "var(--shadow-card)" }}>
            <p className="text-sm uppercase tracking-widest text-accent font-semibold">Referenzen</p>
            <h3 className="mt-2 text-2xl font-bold text-card-foreground">Von mir umgesetzte Webseiten</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="https://fewo.amertens.me" target="_blank" rel="noreferrer" className="flex justify-between items-center p-4 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                  <span className="font-medium">Meine Ferienwohnung</span>
                  <ArrowRight size={18} />
                </a>
              </li>
              <li>
                <a href="https://oasendergesundheit.de" target="_blank" rel="noreferrer" className="flex justify-between items-center p-4 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                  <span className="font-medium">Oasen der Gesundheit</span>
                  <ArrowRight size={18} />
                </a>
              </li>
              <li>
                <Link to="/" className="flex justify-between items-center p-4 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                  <span className="font-medium">Diese Webseite hier</span>
                  <ArrowRight size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
