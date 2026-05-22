import { H as jsxRuntimeExports } from "./server-De2rj96v.js";
import { L as Link } from "./router-tKI1u_iz.js";
import { A as ArrowRight } from "./arrow-right-DDBVUJCi.js";
import { L as Lightbulb, S as Shield, a as CodeXml, G as Globe, C as Cloud, B as Bot, b as GraduationCap } from "./shield-xl66kc9T.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const profile = "/assets/profile-DBBMknoF.jpg";
const services = [{
  icon: Lightbulb,
  title: "IT-Beratung",
  desc: "Strategische und technische Begleitung – herstellerunabhängig und auf Augenhöhe."
}, {
  icon: Shield,
  title: "Identity & Access Management",
  desc: "Konzeption und Einführung sicherer IAM-Lösungen für Unternehmen."
}, {
  icon: CodeXml,
  title: "Individuelle Softwareentwicklung",
  desc: "Maßgeschneiderte Anwendungen, Schnittstellen und Automatisierungen."
}, {
  icon: Globe,
  title: "Webdesign & Entwicklung",
  desc: "Moderne, schnelle Webseiten – responsive, SEO-stark und wartbar."
}, {
  icon: Cloud,
  title: "IT-Infrastruktur",
  desc: "Installation und Wartung in der Cloud oder On-Premises."
}, {
  icon: Bot,
  title: "KI & Automatisierung",
  desc: "Praxisnahe KI-Anwendungen, Agenten und Workflow-Automatisierung."
}, {
  icon: GraduationCap,
  title: "Schulungen & Workshops",
  desc: "Wissensvermittlung zu IT-Themen für Teams und Einzelpersonen."
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: {
        background: "var(--gradient-hero)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-20", style: {
        backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold tracking-widest uppercase bg-white/10 backdrop-blur px-3 py-1 rounded-full", children: "IT Consulting · Eschweiler" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]", children: "Ihre individuelle und pragmatische IT-Unterstützung" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl", children: "Ich bin Achim Mertens – freier IT-Consultant, Programmierer und Webdesigner. Seit über 25 Jahren arbeite ich als Angestellter der Telekom im Bereich Betrieb von Identity & Access Management sowie Softwareentwicklung." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl", children: "Diese Erfahrungen möchte ich an Sie weitergeben und Sie bei kleinen IT-Projekten unterstützen." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/kontakt", className: "inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition", children: [
              "Erste Stunde gratis ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leistungen", className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition", children: "Leistungen ansehen" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-accent/30 blur-2xl rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile, alt: "Achim Mertens", width: 320, height: 320, className: "relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white/20 shadow-2xl" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary", children: "Was ich für Sie tue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-lg", children: "Sieben Schwerpunkte – ein Ansprechpartner. Sie bekommen Klartext, transparente Preise und Lösungen, die im Alltag bestehen." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg bg-secondary text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold text-card-foreground text-lg", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.desc })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/50 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary", children: "Warum mit mir arbeiten?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: "✓" }),
            " Ein Ansprechpartner – kein Vertriebs-Pingpong"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: "✓" }),
            " Faire, transparente Stunden- und Pauschalpreise"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: "✓" }),
            " Erste Beratungsstunde kostenlos"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: "✓" }),
            " Monatliche Abrechnung nach erbrachter Leistung"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: "✓" }),
            " Über 25 Jahre Praxiserfahrung im Großkonzern und Mittelstand"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/preise", className: "mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent", children: [
          "Preise ansehen ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-accent font-semibold", children: "Referenzen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-bold text-card-foreground", children: "Von mir umgesetzte Webseiten" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://fewo.amertens.me", target: "_blank", rel: "noreferrer", className: "flex justify-between items-center p-4 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Meine Ferienwohnung" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://oasendergesundheit.de", target: "_blank", rel: "noreferrer", className: "flex justify-between items-center p-4 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Oasen der Gesundheit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex justify-between items-center p-4 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Diese Webseite hier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
