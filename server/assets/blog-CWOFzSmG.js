import { H as jsxRuntimeExports } from "./server-De2rj96v.js";
import { c as createLucideIcon, L as Link } from "./router-tKI1u_iz.js";
import { u as useQuery, C as Calendar, E as ExternalLink } from "./external-link-KOQRDVDy.js";
import { A as ArrowRight } from "./arrow-right-DDBVUJCi.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);
async function fetchPage(startAuthor, startPermlink) {
  const query = {
    tag: "achimmertens",
    limit: 20
  };
  if (startAuthor && startPermlink) {
    query.start_author = startAuthor;
    query.start_permlink = startPermlink;
  }
  const res = await fetch("https://api.hive.blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "condenser_api.get_discussions_by_blog",
      params: [query],
      id: 1
    })
  });
  if (!res.ok) throw new Error("Hive API Fehler");
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.result ?? [];
}
function parsePost(p) {
  let meta = {};
  try {
    meta = typeof p.json_metadata === "string" ? JSON.parse(p.json_metadata || "{}") : p.json_metadata ?? {};
  } catch {
    meta = {};
  }
  return {
    ...p,
    json_metadata: meta
  };
}
async function fetchDokuPosts() {
  const collected = [];
  const seen = /* @__PURE__ */ new Set();
  let startAuthor;
  let startPermlink;
  const MAX_PAGES = 10;
  for (let i = 0; i < MAX_PAGES; i++) {
    const page = await fetchPage(startAuthor, startPermlink);
    if (page.length === 0) break;
    const fresh = i === 0 ? page : page.slice(1);
    for (const raw of fresh) {
      const key = `${raw.author}/${raw.permlink}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const post = parsePost(raw);
      if (post.author === "achimmertens" && (post.json_metadata?.tags ?? []).includes("doku")) {
        collected.push(post);
        if (collected.length >= 10) return collected;
      }
    }
    const last = page[page.length - 1];
    if (!last || page.length < 20) break;
    startAuthor = last.author;
    startPermlink = last.permlink;
  }
  return collected;
}
function formatDate(iso) {
  const d = /* @__PURE__ */ new Date(iso + "Z");
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}
function excerptFrom(post) {
  const desc = post.json_metadata?.description;
  if (desc && desc.length > 10) return desc;
  const text = post.body.replace(/!\[[^\]]*\]\([^)]+\)/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[#>*_`~-]+/g, " ").replace(/\s+/g, " ").trim();
  return text.slice(0, 220) + (text.length > 220 ? "…" : "");
}
function Blog() {
  const {
    data,
    isLoading,
    isError,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ["hive-doku-posts"],
    queryFn: fetchDokuPosts,
    staleTime: 1e3 * 60 * 10
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-semibold uppercase tracking-widest", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl md:text-5xl font-bold", children: "Meine Dokumentation aus der IT-Praxis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 max-w-2xl text-primary-foreground/80 text-lg", children: [
        "Live von der Hive-Blockchain: Meine neuesten Artikel mit dem Hashtag",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "px-1.5 py-0.5 bg-white/10 rounded text-accent", children: "doku" }),
        " von",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://peakd.com/@achimmertens?filter=doku", target: "_blank", rel: "noopener noreferrer", className: "underline decoration-accent underline-offset-4 hover:text-accent", children: "@achimmertens" }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-16", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 text-muted-foreground py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin", size: 20 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Artikel werden von der Hive-Blockchain geladen…" })
      ] }),
      isError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 border border-border rounded-xl bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-card-foreground font-medium", children: "Die Artikel konnten gerade nicht geladen werden." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => refetch(), className: "mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90", children: "Erneut versuchen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-muted-foreground", children: [
          "Alternativ direkt auf",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://peakd.com/@achimmertens?filter=doku", target: "_blank", rel: "noopener noreferrer", className: "text-accent underline", children: "peakd.com" }),
          " ",
          "lesen."
        ] })
      ] }),
      data && data.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-16", children: 'Aktuell keine Artikel mit dem Tag „doku" gefunden.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: data?.map((p) => {
        const img = p.json_metadata?.image?.[0];
        const href = `https://peakd.com${p.url}`;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group overflow-hidden bg-card border border-border rounded-xl hover:border-accent transition-colors", style: {
          boxShadow: "var(--shadow-soft)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", className: "grid md:grid-cols-[220px_1fr] gap-0", children: [
          img && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video md:aspect-auto md:h-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: p.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
                " ",
                formatDate(p.created)
              ] }),
              (p.json_metadata?.tags ?? []).slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground font-medium", children: [
                "#",
                t
              ] }, t))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-xl md:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground line-clamp-3", children: excerptFrom(p) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-accent font-semibold", children: [
              "Auf PeakD lesen ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 })
            ] })
          ] })
        ] }) }, p.permlink);
      }) }),
      data && data.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://peakd.com/@achimmertens?filter=doku", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90", children: [
          "Alle Artikel auf PeakD ansehen ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Themenwunsch?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/kontakt", className: "text-accent font-medium hover:underline", children: "Schreiben Sie mir." }),
          " ",
          isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 opacity-60", children: "(aktualisiere…)" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Blog as component
};
