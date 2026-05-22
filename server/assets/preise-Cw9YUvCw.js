import { H as jsxRuntimeExports } from "./server-De2rj96v.js";
import { c as createLucideIcon, L as Link } from "./router-tKI1u_iz.js";
import { A as ArrowRight } from "./arrow-right-DDBVUJCi.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const stunden = [{
  label: "Erstes Kennenlernen",
  price: "0 €",
  note: 'Die erste "Stunde" Beratung ist kostenlos. Wir entscheiden gemeinsam, ab wann abgerechnet wird.'
}, {
  label: "Online-Kommunikation",
  price: "80 € / h",
  note: "Chat, Videomeetings, Anrufe – alle Live-Kommunikationswege außer Vor-Ort-Termine."
}, {
  label: "Vor-Ort-Anwesenheit",
  price: "100 € / h"
}, {
  label: "Programmierung, Wartung, offline Kommunikation …",
  price: "60 € / h",
  note: "Alle Tätigkeiten, die ich ungestört von zu Hause aus erledigen kann."
}, {
  label: "Fahrtkosten",
  price: "0,50 € / km",
  note: "gefahrene Kilometer"
}, {
  label: "Anruf",
  price: "15 € / Anruf",
  note: "zzgl. Arbeitszeit"
}];
const pauschalen = [{
  title: "Statische Webseite (Prototyp)",
  price: "500 €",
  desc: "Eine einfache, statische Webseite wie diese hier – inklusive 3 Stunden Beratung.",
  highlight: true
}, {
  title: "Webseiten-Hosting",
  price: "30 € / Monat",
  desc: "Monitoring, Updates, Code-Backups und Hosting. Sie haben Ruhe, ich habe das Auge drauf.",
  highlight: false
}, {
  title: "OpenClaw-KI-Agent",
  price: "900 €",
  desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Installation eines OpenClaw-Agenten mit Telegram-Anbindung und KI-Integration – inkl. 5 Stunden Beratung, zzgl. Hostingkosten. Werden Sie Herr über Ihre interne Datenflut und nutzen Sie KI-gestützte Suche, ohne Ihre Daten an Dritte weiterzugeben. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://peakd.com/hive-121566/@achimmertens/openclaw-llm-wiki-und-meilisearch-erfahrungsbericht", target: "_blank", rel: "noreferrer", className: "text-accent font-semibold underline", children: "Beispiel" })
  ] }),
  highlight: false
}];
function Preise() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-semibold uppercase tracking-widest", children: "Preise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl md:text-5xl font-bold", children: "Transparent und fair." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-primary-foreground/80 text-lg", children: "Wir klären im Vorfeld, welche Leistungen wann und wie erbracht werden. Abgerechnet wird monatsweise nach erbrachter Leistung." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-primary", children: "Stundensätze" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 bg-card border border-border rounded-xl overflow-hidden", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: stunden.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-secondary/30" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 text-card-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: s.label }),
          s.note && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: s.note })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-right font-semibold text-primary whitespace-nowrap", children: s.price })
      ] }, s.label)) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-primary", children: "Pauschalen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid md:grid-cols-3 gap-6", children: pauschalen.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-7 rounded-xl border ${p.highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`, style: {
        boxShadow: p.highlight ? "var(--shadow-card)" : "var(--shadow-soft)"
      }, children: [
        p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold uppercase tracking-widest bg-accent text-accent-foreground px-2 py-1 rounded", children: "Beliebt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `mt-3 text-xl font-bold ${p.highlight ? "" : "text-card-foreground"}`, children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-4 text-3xl font-extrabold ${p.highlight ? "text-accent" : "text-primary"}`, children: p.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-3 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`, children: p.desc })
      ] }, p.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary border border-border rounded-2xl p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-primary", children: "So läuft die Zusammenarbeit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: ["Kostenfreies Erstgespräch zum Kennenlernen.", "Gemeinsame Definition von Umfang, Zeitrahmen und Abrechnungsmodell.", "Umsetzung mit regelmäßigen Status-Updates.", "Monatliche Rechnung nach tatsächlich erbrachter Leistung – gemäß § 19 UStG ohne Umsatzsteuer."].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "text-accent shrink-0", size: 20 }),
        " ",
        t
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/kontakt", className: "mt-7 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition", children: [
        "Jetzt unverbindlich anfragen ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
      ] })
    ] }) })
  ] });
}
export {
  Preise as component
};
