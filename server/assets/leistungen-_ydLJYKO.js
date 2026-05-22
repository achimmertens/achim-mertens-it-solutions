import { H as jsxRuntimeExports } from "./server-De2rj96v.js";
import { L as Link } from "./router-tKI1u_iz.js";
import { L as Lightbulb, S as Shield, a as CodeXml, G as Globe, C as Cloud, B as Bot, b as GraduationCap } from "./shield-xl66kc9T.js";
import { A as ArrowRight } from "./arrow-right-DDBVUJCi.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const items = [{
  icon: Lightbulb,
  title: "Generelle IT-Beratung",
  desc: "Strategie, Technologie-Auswahl, Architektur-Reviews. Ich höre zu, ordne ein und gebe Ihnen einen klaren nächsten Schritt – ohne versteckte Eigeninteressen."
}, {
  icon: Shield,
  title: "Identity & Access Management",
  desc: "Konzeption, Tool-Auswahl und Einführung von IAM-Lösungen. Rollen- und Berechtigungskonzepte, SSO, Federation und User Lifecycle."
}, {
  icon: CodeXml,
  title: "Individuelle Softwareentwicklung",
  desc: "Maßgeschneiderte Tools, API- und Datenbank-Anbindungen, Skripte, ... – sauber dokumentiert und wartbar."
}, {
  icon: Globe,
  title: "Webdesign & Webentwicklung",
  desc: "Schnelle, moderne Webseiten mit Javascript. SEO-optimiert, barrierearm, mobilfreundlich – wie diese Seite hier."
}, {
  icon: Cloud,
  title: "IT-Infrastruktur",
  desc: "Installation, Monitoring und Wartung. Cloud (AWS, Azure, Hetzner) oder klassisch On-Premises – inklusive Backup- und Update-Strategie."
}, {
  icon: Bot,
  title: "KI & Automatisierung",
  desc: "LLM-Integration, RAG-Anwendungen, OpenClaw-Agenten mit Telegram-Anbindung und individuelle Bots."
}, {
  icon: GraduationCap,
  title: "Schulungen & Workshops",
  desc: "Praktische Recherche und Workshops zu IT-Themen Ihrer Wahl (nicht nur IAM, Webentwicklung, KI-Tools und Automatisierung) – remote oder vor Ort."
}];
function Leistungen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-semibold uppercase tracking-widest", children: "Leistungen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl md:text-5xl font-bold", children: "Was ich für Sie umsetze" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-primary-foreground/80 text-lg", children: "Sieben Schwerpunkte, ein Anspruch: pragmatische Lösungen, die im Alltag bestehen." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-6", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "p-7 bg-card border border-border rounded-xl", style: {
      boxShadow: "var(--shadow-soft)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg flex items-center justify-center text-accent-foreground", style: {
        background: "var(--gradient-accent)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 24 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-bold text-card-foreground", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: s.desc })
    ] }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-10 text-center text-primary-foreground", style: {
      background: "var(--gradient-hero)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Klingt passend? Lernen wir uns kennen." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-primary-foreground/80", children: "Die erste Stunde Beratung ist kostenlos." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/kontakt", className: "mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition", children: [
        "Kontakt aufnehmen ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
      ] })
    ] }) })
  ] });
}
export {
  Leistungen as component
};
