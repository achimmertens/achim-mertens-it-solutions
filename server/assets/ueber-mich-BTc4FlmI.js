import { H as jsxRuntimeExports } from "./server-De2rj96v.js";
import { u as useQuery, E as ExternalLink, C as Calendar } from "./external-link-KOQRDVDy.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-tKI1u_iz.js";
const dtLogo = "/assets/deutsche-telekom-logo-4YBUvST-.png";
const cv = [{
  period: "Nov. 2024–Heute",
  role: "System Engineer für IAM Aufbau und Betrieb bei der Deutschen Rentenversicherung (DRV)",
  org: "Deutsche Telekom",
  bullets: ["In unserem 7 Köpfigen Team erarbeiten wir ein Konzept für die zentrale Lösung eines Identity- und Access-Management Systems.", "Ich bin dort mit einem anderen Kollegen für die Installation und den Betrieb der notwendigen Server zuständig.", "Installation einer POC Umgebung im IAM Umfeld."]
}, {
  period: "Juli 2024–Okt. 2024",
  role: "Software Engineer Agile für GreenCode",
  org: "Deutsche Telekom",
  bullets: ["Unser Team 'Vanya' entwickelt ein Dashboard, welches den Energieverbrauch von Pipeline-Jobs graphisch darstellt.", "Ich arbeite am Frontend (Behebung von Bugs), im Backend (Bashscript zur Transformation von Daten) und helfe bei der Darstellung in Grafana.", "Mit einer selbsttrainierten KI und Pythonscripten versuchen wir Code zu optimieren."]
}, {
  period: "Apr. 2022–Juni 2024",
  role: "Software Engineer Agile für FileWrapper",
  org: "Deutsche Telekom",
  bullets: ["Unser Team 'CodeBoosters' setzte Epics und Userstories um, die folgende Themen beinhalteten: Fileexporter- und Wrapper-Microservices und Frontend-GUI Erstellung.", "Programmieraufgaben, die wir via agile Methoden erhielten, wies ich mir beim Sprintplanning zu und arbeitete diese ab.", "Dazu gehörte das Anbinden von Monitoring (Java) und die Erstellung von Komponenten eines Frontends (Angular)."]
}, {
  period: "Nov. 2021–März 2022",
  role: "New Skilling Academy Developer",
  org: "Deutsche Telekom",
  bullets: ["Wir lernten in der Akademie die Grundlagen der Full Stack Softwareentwicklung mit folgenden Themen: Java, Frameworks, die auf Java basieren (nodeJS, React, Spring, ...) und Devops (Git, Docker, Kubernetes, CICD-Pipelines).", "Unsere Aufgaben waren lernen und nachvollziehen durch Ausprobieren."]
}, {
  period: "Juni 2019–Nov. 2021",
  role: "Product Owner vom Betrieb des CIAM Services",
  org: "Deutsche Telekom",
  bullets: ["Im Sommer 2019 wurden wir in einem Hub neu aufgestellt.", "Unser ca. 30-köpfiges Team arbeitete mit agilen Methoden am Betrieb der zentralen Corporate Identity and Access Management (CIAM) Server und dem dazugehörenden Kunden-Support.", "Als Product Owner pflegte und priorisierte ich im Jira das Backlog unseres Kanban-Boards.", "Ich sprach auf der einen Seite mit den Anforderern der Aufgaben (Entwicklung, Product Manager, ...), klärte Termine und Abhängigkeiten.", "Auf der anderen Seite sprach ich mit unserem Team und erklärte die Notwendigkeiten.", "Zusammen mit unserer Scrummasterin transformierten wir unsere Gruppe in ein familieres und vertrauensvolles Team."]
}, {
  period: "Mai 2013–Mai 2019",
  role: "Betriebskoordinator CIAM",
  org: "Deutsche Telekom",
  bullets: ["Der Telekom-zentrale CIAM Dienst wurde von unserem 40 Personen Team betrieben.", "Ich war verantwortlich für die Koordination der Informationen und Aufgaben.", "In unserer Obhut lagen die Data Consolidation Layer (DCL)-, LDAP-, MS-SQL-, IBM TIM- und TAM Server für die jeweils Dev-, Test- und Prod-Umgebungen.", "Wir waren Teil des 'Demand 2 Solution' Prozesses."]
}, {
  period: "Feb. 2009–Apr. 2013",
  role: "Betrieb DCL Server",
  org: "Deutsche Telekom",
  bullets: ["Wir haben als 4-köpfiges Team die zentralen DCL Server des CIAM Systems der Deutschen Telekom betrieben.", "Dazu gehörten die MS-SQL- und die Solaris Server (mit der DCL Logic) für die Dev-, Test- und Produktionsumgebungen.", "Des Weiteren kümmerten wir uns um die Schnittstellen und die Korrektheit des Datenim- und exports."]
}, {
  period: "Feb. 1998–Jan. 2009",
  role: "Betrieb Lotus Domino/Notes",
  org: "Deutsche Telekom",
  bullets: ["Als Mitglied eines 10-köpfigen Teams war ich verantwortlich für den Betrieb von Lotus Dominio Servern und Lotus Notes Installationen sowohl für die Debis GmbH (die später zur T-Systems wurde) als auch für externe Kunden wie z.B.: Klingel, T-Systems (Schweiz), Bahlsen, Canon (Niederlande), Heitcamp+Thumann, ...", "Zu meinen Aufgaben gehörten auch: 1.+2. Level Support, kleine Projektleitungen, Schulungen halten, ..."]
}];
const skills = ["IAM", "SSO / Federation", "TypeScript & React", "Node.js", "Python", "Java", "OpenClaw", "LLM / RAG", "AWS", "Hetzner Cloud", "Linux", "SQL", "Tailwind", "Telegram Bots"];
async function fetchPage(startAuthor, startPermlink) {
  const query = {
    tag: "achimmertens",
    limit: 10
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
async function fetchDiaryPosts() {
  const collected = [];
  const seen = /* @__PURE__ */ new Set();
  let startAuthor;
  let startPermlink;
  const MAX_PAGES = 5;
  for (let i = 0; i < MAX_PAGES; i++) {
    const page = await fetchPage(startAuthor, startPermlink);
    if (page.length === 0) break;
    const fresh = i === 0 ? page : page.slice(1);
    for (const raw of fresh) {
      const key = `${raw.author}/${raw.permlink}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const post = parsePost(raw);
      if (post.author === "achimmertens" && (post.json_metadata?.tags ?? []).includes("diary")) {
        collected.push(post);
        if (collected.length >= 5) return collected;
      }
    }
    const last = page[page.length - 1];
    if (!last || page.length < 10) break;
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
  if (!text) return "Keine Beschreibung verfügbar.";
  return text.slice(0, 180) + (text.length > 180 ? "…" : "");
}
function extractCoverImage(post) {
  const metaImage = post.json_metadata?.image?.[0];
  if (metaImage) return metaImage;
  const match = post.body.match(/!\[[^\]]*\]\((https?:\/\/[^)]+)\)/);
  return match ? match[1] : void 0;
}
function UeberMich() {
  const {
    data: diaryPosts,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["hive-diary-posts"],
    queryFn: fetchDiaryPosts,
    staleTime: 1e3 * 60 * 10
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-primary", children: "Erfahrung" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-entry flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dtLogo, alt: "Deutsche Telekom Logo", className: "h-12 w-12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "Deutsche Telekom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Vollzeit · Seit 1998" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-primary", children: "Lebenslauf" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground", children: [
        "Auszug meiner beruflichen Stationen – entnommen aus meinem",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-accent font-medium hover:underline", href: "https://www.linkedin.com/in/achim-mertens-97b0", target: "_blank", rel: "noreferrer", children: "LinkedIn-Profil" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-10 relative border-l-2 border-border ml-2", children: cv.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "ml-6 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[9px] w-4 h-4 rounded-full bg-accent border-4 border-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent font-bold", children: c.period }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-xl font-bold text-foreground", children: c.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: c.org }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1 text-foreground", children: c.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "›" }),
          b
        ] }, b)) })
      ] }, c.period)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary", children: "Schwerpunkte & Tech-Stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm border border-border", children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary", children: "Letzte Tagebuch-Blogeinträge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://peakd.com/@achimmertens/posts", target: "_blank", rel: "noopener noreferrer", className: "text-accent font-semibold hover:underline flex items-center gap-1", children: [
            "Blog auf PeakD ansehen ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: 'Ich spreche (fast) täglich in mein Handy in Telegram einen kurzen Text an meinen Openclaw Bot. Z.B. "Füge folgendes in mein Tagebuch hinzu:...". Der KI Agent erstellt dann lokale Tagebucheinträge, die (nur) ich auch in meinem persönlichen Wiki finde.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://files.peakd.com/file/peakd-hive/achimmertens/23wMkmZmUetiwQWfdMctybXTQUBDnhuGdkEW4amjJ7wmr5Pwd9qk61LTfF7L9haLzc91S.png", alt: "Tagebucheintrag Screenshot", className: "w-full rounded-2xl border border-border shadow" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Einmal wöchentlich macht mein Agent automatisch einen Vorschlag für eine Zusammenfassung. Diese überarbeite ich und poste sie dann in die Hive Blockchain:" }),
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16, className: "animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Blogeinträge werden geladen…" })
        ] }),
        isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-error-foreground", children: "Die Blogeinträge konnten nicht geladen werden." }),
        diaryPosts && diaryPosts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6", children: diaryPosts.map((post) => {
          const img = extractCoverImage(post);
          const href = `https://peakd.com${post.url}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group overflow-hidden border border-border rounded-xl bg-card hover:border-accent transition-colors", style: {
            boxShadow: "var(--shadow-soft)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", className: "grid md:grid-cols-[220px_1fr] gap-0", children: [
            img && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video md:aspect-auto md:h-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: post.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
                  " ",
                  formatDate(post.created)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground text-[10px] uppercase tracking-widest", children: "#diary" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors", children: post.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground line-clamp-3", children: excerptFrom(post) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-accent font-semibold", children: [
                "Auf PeakD lesen ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 })
              ] })
            ] })
          ] }) }, post.permlink);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Eine alte Website von mir ist unter ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-accent underline", href: "https://greensniper.wordpress.com", target: "_blank", rel: "noreferrer", children: "greensniper.wordpress.com" }),
        " erreichbar."
      ] })
    ] })
  ] });
}
export {
  UeberMich as component
};
