import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ExternalLink, Loader2 } from "lucide-react";
import dtLogo from "@/assets/deutsche-telekom-logo.png";

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
  {
    period: "Nov. 2024–Heute",
    role: "System Engineer für IAM Aufbau und Betrieb bei der Deutschen Rentenversicherung (DRV)",
    org: "Deutsche Telekom",
    bullets: [
      "In unserem 7 Köpfigen Team erarbeiten wir ein Konzept für die zentrale Lösung eines Identity- und Access-Management Systems.",
      "Ich bin dort mit einem anderen Kollegen für die Installation und den Betrieb der notwendigen Server zuständig.",
      "Installation einer POC Umgebung im IAM Umfeld."
    ]
  },
  {
    period: "Juli 2024–Okt. 2024",
    role: "Software Engineer Agile für GreenCode",
    org: "Deutsche Telekom",
    bullets: [
      "Unser Team 'Vanya' entwickelt ein Dashboard, welches den Energieverbrauch von Pipeline-Jobs graphisch darstellt.",
      "Ich arbeite am Frontend (Behebung von Bugs), im Backend (Bashscript zur Transformation von Daten) und helfe bei der Darstellung in Grafana.",
      "Mit einer selbsttrainierten KI und Pythonscripten versuchen wir Code zu optimieren."
    ]
  },
  {
    period: "Apr. 2022–Juni 2024",
    role: "Software Engineer Agile für FileWrapper",
    org: "Deutsche Telekom",
    bullets: [
      "Unser Team 'CodeBoosters' setzte Epics und Userstories um, die folgende Themen beinhalteten: Fileexporter- und Wrapper-Microservices und Frontend-GUI Erstellung.",
      "Programmieraufgaben, die wir via agile Methoden erhielten, wies ich mir beim Sprintplanning zu und arbeitete diese ab.",
      "Dazu gehörte das Anbinden von Monitoring (Java) und die Erstellung von Komponenten eines Frontends (Angular)."
    ]
  },
  {
    period: "Nov. 2021–März 2022",
    role: "New Skilling Academy Developer",
    org: "Deutsche Telekom",
    bullets: [
      "Wir lernten in der Akademie die Grundlagen der Full Stack Softwareentwicklung mit folgenden Themen: Java, Frameworks, die auf Java basieren (nodeJS, React, Spring, ...) und Devops (Git, Docker, Kubernetes, CICD-Pipelines).",
      "Unsere Aufgaben waren lernen und nachvollziehen durch Ausprobieren."
    ]
  },
  {
    period: "Juni 2019–Nov. 2021",
    role: "Product Owner vom Betrieb des CIAM Services",
    org: "Deutsche Telekom",
    bullets: [
      "Im Sommer 2019 wurden wir in einem Hub neu aufgestellt.",
      "Unser ca. 30-köpfiges Team arbeitete mit agilen Methoden am Betrieb der zentralen Corporate Identity and Access Management (CIAM) Server und dem dazugehörenden Kunden-Support.",
      "Als Product Owner pflegte und priorisierte ich im Jira das Backlog unseres Kanban-Boards.",
      "Ich sprach auf der einen Seite mit den Anforderern der Aufgaben (Entwicklung, Product Manager, ...), klärte Termine und Abhängigkeiten.",
      "Auf der anderen Seite sprach ich mit unserem Team und erklärte die Notwendigkeiten.",
      "Zusammen mit unserer Scrummasterin transformierten wir unsere Gruppe in ein familieres und vertrauensvolles Team."
    ]
  },
  {
    period: "Mai 2013–Mai 2019",
    role: "Betriebskoordinator CIAM",
    org: "Deutsche Telekom",
    bullets: [
      "Der Telekom-zentrale CIAM Dienst wurde von unserem 40 Personen Team betrieben.",
      "Ich war verantwortlich für die Koordination der Informationen und Aufgaben.",
      "In unserer Obhut lagen die Data Consolidation Layer (DCL)-, LDAP-, MS-SQL-, IBM TIM- und TAM Server für die jeweils Dev-, Test- und Prod-Umgebungen.",
      "Wir waren Teil des 'Demand 2 Solution' Prozesses."
    ]
  },
  {
    period: "Feb. 2009–Apr. 2013",
    role: "Betrieb DCL Server",
    org: "Deutsche Telekom",
    bullets: [
      "Wir haben als 4-köpfiges Team die zentralen DCL Server des CIAM Systems der Deutschen Telekom betrieben.",
      "Dazu gehörten die MS-SQL- und die Solaris Server (mit der DCL Logic) für die Dev-, Test- und Produktionsumgebungen.",
      "Des Weiteren kümmerten wir uns um die Schnittstellen und die Korrektheit des Datenim- und exports."
    ]
  },
  {
    period: "Feb. 1998–Jan. 2009",
    role: "Betrieb Lotus Domino/Notes",
    org: "Deutsche Telekom",
    bullets: [
      "Als Mitglied eines 10-köpfigen Teams war ich verantwortlich für den Betrieb von Lotus Dominio Servern und Lotus Notes Installationen sowohl für die Debis GmbH (die später zur T-Systems wurde) als auch für externe Kunden wie z.B.: Klingel, T-Systems (Schweiz), Bahlsen, Canon (Niederlande), Heitcamp+Thumann, ...",
      "Zu meinen Aufgaben gehörten auch: 1.+2. Level Support, kleine Projektleitungen, Schulungen halten, ..."
    ]
  }
];

const skills = ["IAM", "SSO / Federation", "TypeScript & React", "Node.js", "Python", "Java", "OpenClaw", "LLM / RAG", "AWS", "Hetzner Cloud", "Linux", "SQL", "Tailwind", "Telegram Bots"];

type HivePost = {
  title: string;
  permlink: string;
  author: string;
  created: string;
  body: string;
  url: string;
  json_metadata: {
    tags?: string[];
    description?: string;
    image?: string[];
  };
};

type RawHivePost = Omit<HivePost, "json_metadata"> & {
  json_metadata: string | HivePost["json_metadata"];
};

async function fetchPage(startAuthor?: string, startPermlink?: string): Promise<RawHivePost[]> {
  const query: Record<string, unknown> = { tag: "achimmertens", limit: 10 };
  if (startAuthor && startPermlink) {
    query.start_author = startAuthor;
    query.start_permlink = startPermlink;
  }
  const res = await fetch("https://api.hive.blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "condenser_api.get_discussions_by_blog",
      params: [query],
      id: 1,
    }),
  });
  if (!res.ok) throw new Error("Hive API Fehler");
  const data = (await res.json()) as { result?: RawHivePost[]; error?: { message: string } };
  if (data.error) throw new Error(data.error.message);
  return data.result ?? [];
}

function parsePost(p: RawHivePost): HivePost {
  let meta: HivePost["json_metadata"] = {};
  try {
    meta =
      typeof p.json_metadata === "string"
        ? JSON.parse(p.json_metadata || "{}")
        : p.json_metadata ?? {};
  } catch {
    meta = {};
  }
  return { ...p, json_metadata: meta };
}

async function fetchDiaryPosts(): Promise<HivePost[]> {
  const collected: HivePost[] = [];
  const seen = new Set<string>();
  let startAuthor: string | undefined;
  let startPermlink: string | undefined;
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

function formatDate(iso: string) {
  const d = new Date(iso + "Z");
  return d.toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

function excerptFrom(post: HivePost) {
  const desc = post.json_metadata?.description;
  if (desc && desc.length > 10) return desc;
  const text = post.body
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_`~-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return "Keine Beschreibung verfügbar.";
  return text.slice(0, 180) + (text.length > 180 ? "…" : "");
}

function extractCoverImage(post: HivePost) {
  const metaImage = post.json_metadata?.image?.[0];
  if (metaImage) return metaImage;
  const match = post.body.match(/!\[[^\]]*\]\((https?:\/\/[^)]+)\)/);
  return match ? match[1] : undefined;
}

function UeberMich() {
  const { data: diaryPosts, isLoading, isError } = useQuery({
    queryKey: ["hive-diary-posts"],
    queryFn: fetchDiaryPosts,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-6">
        <h2 className="text-3xl font-bold text-primary">Erfahrung</h2>
        <div className="mt-4 space-y-6">
          <div className="experience-entry flex items-center gap-4">
            <img src={dtLogo} alt="Deutsche Telekom Logo" className="h-12 w-12" />
            <div>
              <p className="text-sm font-bold">Deutsche Telekom</p>
              <p className="text-muted-foreground">Vollzeit · Seit 1998</p>
            </div>
          </div>
          {/* Add other entries similarly */}
          {/* Repeat for each experience block */}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-16">
        <h2 className="text-3xl font-bold text-primary">Lebenslauf</h2>
        <p className="mt-2 text-muted-foreground">
          Auszug meiner beruflichen Stationen – entnommen aus meinem{" "}
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

        <div className="mt-10">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold text-primary">Letzte Tagebuch-Blogeinträge</h3>
            <a
              href="https://peakd.com/@achimmertens/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:underline flex items-center gap-1"
            >
              Blog auf PeakD ansehen <ExternalLink size={16} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Ich spreche (fast) täglich in mein Handy in Telegram einen kurzen Text an meinen Openclaw Bot. Z.B. "Füge folgendes in mein Tagebuch hinzu:...". Der KI Agent erstellt dann lokale Tagebucheinträge, die (nur) ich auch in meinem persönlichen Wiki finde.
          </p>
          <div className="mt-4">
            <img
              src="https://files.peakd.com/file/peakd-hive/achimmertens/23wMkmZmUetiwQWfdMctybXTQUBDnhuGdkEW4amjJ7wmr5Pwd9qk61LTfF7L9haLzc91S.png"
              alt="Tagebucheintrag Screenshot"
              className="w-full rounded-2xl border border-border shadow"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Einmal wöchentlich macht mein Agent automatisch einen Vorschlag für eine Zusammenfassung. 
            Diese überarbeite ich und poste sie dann in die Hive Blockchain:
          </p>
          {isLoading && (
            <div className="mt-6 flex items-center justify-center gap-3 text-muted-foreground">
              <ExternalLink size={16} className="animate-bounce" />
              <span>Blogeinträge werden geladen…</span>
            </div>
          )}

          {isError && (
            <p className="mt-6 text-sm text-error-foreground">Die Blogeinträge konnten nicht geladen werden.</p>
          )}

          {diaryPosts && diaryPosts.length > 0 && (
            <div className="mt-6 grid gap-6">
              {diaryPosts.map((post) => {
                const img = extractCoverImage(post);
                const href = `https://peakd.com${post.url}`;
                return (
                  <article
                    key={post.permlink}
                    className="group overflow-hidden border border-border rounded-xl bg-card hover:border-accent transition-colors"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" className="grid md:grid-cols-[220px_1fr] gap-0">
                      {img && (
                        <div className="aspect-video md:aspect-auto md:h-full bg-muted overflow-hidden">
                          <img
                            src={img}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={14} /> {formatDate(post.created)}
                          </span>
                          <span className="px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground text-[10px] uppercase tracking-widest">
                            #diary
                          </span>
                        </div>
                        <h4 className="mt-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        <p className="mt-2 text-muted-foreground line-clamp-3">{excerptFrom(post)}</p>
                        <span className="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
                          Auf PeakD lesen <ExternalLink size={16} />
                        </span>
                      </div>
                    </a>
                  </article>
                );
              })}
            </div>
          )}
        </div>
                  <p className="text-sm text-muted-foreground">
            Eine alte Website von mir ist unter <a className="text-accent underline" href="https://greensniper.wordpress.com" target="_blank" rel="noreferrer">greensniper.wordpress.com</a> erreichbar.
          </p>
      </section>
    </>
  );
}

