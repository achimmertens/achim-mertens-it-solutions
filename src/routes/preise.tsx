import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise · Achim Mertens IT Consulting" },
      { name: "description", content: "Transparente Stunden- und Pauschalpreise für IT-Beratung, Programmierung und Webdesign. Erste Stunde kostenlos." },
    ],
  }),
  component: Preise,
});

const stunden = [
  { label: "Erstes Kennenlernen", price: "0 €", note: "Die erste Stunde Beratung ist kostenlos." },
  { label: "Online-Kommunikation", price: "80 € / h" },
  { label: "Vor-Ort-Anwesenheit", price: "100 € / h" },
  { label: "Programmierung, Wartung, offline Kommunikation …", price: "60 € / h" },
  { label: "Fahrtkosten", price: "0,50 € / km" },
  { label: "Anruf", price: "15 € / Anruf", note: "zzgl. Arbeitszeit" },
];

const pauschalen = [
  {
    title: "Statische Webseite (Prototyp)",
    price: "500 €",
    desc: "Eine einfache, statische Webseite wie diese hier – inklusive 3 Stunden Beratung.",
    highlight: true,
  },
  {
    title: "Webseiten-Hosting",
    price: "30 € / Monat",
    desc: "Monitoring, Updates, Code-Backups und Hosting. Sie haben Ruhe, ich habe das Auge drauf.",
    highlight: false,
  },
  {
    title: "OpenClaw-KI-Agent",
    price: "900 €",
    desc: "Installation eines OpenClaw-Agenten mit Telegram-Anbindung und KI-Integration – inkl. 5 Stunden Beratung, zzgl. Hostingkosten.",
    highlight: false,
  },
];

function Preise() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Preise</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Transparent und fair.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            Wir klären im Vorfeld, welche Leistungen wann und wie erbracht werden. Abgerechnet wird monatsweise nach erbrachter Leistung.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Stundensätze</h2>
        <div className="mt-8 bg-card border border-border rounded-xl overflow-hidden" style={{ boxShadow: "var(--shadow-soft)" }}>
          <table className="w-full">
            <tbody>
              {stunden.map((s, i) => (
                <tr key={s.label} className={i % 2 === 0 ? "bg-secondary/30" : ""}>
                  <td className="px-6 py-4 text-card-foreground">
                    <div className="font-medium">{s.label}</div>
                    {s.note && <div className="text-sm text-muted-foreground">{s.note}</div>}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-primary whitespace-nowrap">{s.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Pauschalen</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {pauschalen.map((p) => (
            <div
              key={p.title}
                            className={`p-7 rounded-xl border ${p.highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}
              style={{ boxShadow: p.highlight ? "var(--shadow-card)" : "var(--shadow-soft)" }}
            >
              {p.highlight && <span className="inline-block text-xs font-bold uppercase tracking-widest bg-accent text-accent-foreground px-2 py-1 rounded">Beliebt</span>}
              <h3 className={`mt-3 text-xl font-bold ${p.highlight ? "" : "text-card-foreground"}`}>{p.title}</h3>
              <p className={`mt-4 text-3xl font-extrabold ${p.highlight ? "text-accent" : "text-primary"}`}>{p.price}</p>
              <p className={`mt-3 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-primary">So läuft die Zusammenarbeit</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Kostenfreies Erstgespräch zum Kennenlernen.",
              "Gemeinsame Definition von Umfang, Zeitrahmen und Abrechnungsmodell.",
              "Umsetzung mit regelmäßigen Status-Updates.",
              "Monatliche Rechnung nach tatsächlich erbrachter Leistung – gemäß § 19 UStG ohne Umsatzsteuer.",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-foreground">
                <Check className="text-accent shrink-0" size={20} /> {t}
              </li>
            ))}
          </ul>
          <Link to="/kontakt" className="mt-7 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            Jetzt unverbindlich anfragen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
