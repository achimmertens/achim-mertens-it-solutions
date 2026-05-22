import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowRight, ExternalLink, Loader2 } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog · Achim Mertens IT Consulting" },
      { name: "description", content: "Aktuelle Artikel von Achim Mertens auf der Hive-Blockchain – zu IT, Doku, Anleitungen und mehr." },
    ],
  }),
  component: Blog,
});

type HivePost = {
  title: string;
  author: string;
  permlink: string;
  created: string;
  category: string;
  url: string;
  body: string;
  json_metadata: {
    tags?: string[];
    image?: string[];
    description?: string;
  };
};

type RawHivePost = Omit<HivePost, "json_metadata"> & {
  json_metadata: string | HivePost["json_metadata"];
};

async function fetchPage(startAuthor?: string, startPermlink?: string): Promise<RawHivePost[]> {
  const query: Record<string, unknown> = { tag: "achimmertens", limit: 20 };
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

async function fetchDokuPosts(): Promise<HivePost[]> {
  const collected: HivePost[] = [];
  const seen = new Set<string>();
  let startAuthor: string | undefined;
  let startPermlink: string | undefined;
  const MAX_PAGES = 10; // up to ~200 posts scanned
  for (let i = 0; i < MAX_PAGES; i++) {
    const page = await fetchPage(startAuthor, startPermlink);
    if (page.length === 0) break;
    // When paginating, first item duplicates the previous page's last item
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

function formatDate(iso: string) {
  const d = new Date(iso + "Z");
  return d.toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

function excerptFrom(post: HivePost): string {
  const desc = post.json_metadata?.description;
  if (desc && desc.length > 10) return desc;
  // Fallback: strip markdown/images from body
  const text = post.body
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_`~-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.slice(0, 220) + (text.length > 220 ? "…" : "");
}

function Blog() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["hive-doku-posts"],
    queryFn: fetchDokuPosts,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Blog</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Meine Dokumentation aus der IT-Praxis</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            Live von der Hive-Blockchain: Meine neuesten Artikel mit dem Hashtag{" "}
            <code className="px-1.5 py-0.5 bg-white/10 rounded text-accent">doku</code> von{" "}
            <a
              href="https://peakd.com/@achimmertens?filter=doku"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent underline-offset-4 hover:text-accent"
            >
              @achimmertens
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {isLoading && (
          <div className="flex items-center justify-center gap-3 text-muted-foreground py-20">
            <Loader2 className="animate-spin" size={20} />
            <span>Artikel werden von der Hive-Blockchain geladen…</span>
          </div>
        )}

        {isError && (
          <div className="text-center py-16 border border-border rounded-xl bg-card">
            <p className="text-card-foreground font-medium">
              Die Artikel konnten gerade nicht geladen werden.
            </p>
            <button
              onClick={() => refetch()}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Erneut versuchen
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              Alternativ direkt auf{" "}
              <a
                href="https://peakd.com/@achimmertens?filter=doku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                peakd.com
              </a>{" "}
              lesen.
            </p>
          </div>
        )}

        {data && data.length === 0 && (
          <p className="text-center text-muted-foreground py-16">
            Aktuell keine Artikel mit dem Tag „doku" gefunden.
          </p>
        )}

        <div className="grid gap-6">
          {data?.map((p) => {
            const img = p.json_metadata?.image?.[0];
            const href = `https://peakd.com${p.url}`;
            return (
              <article
                key={p.permlink}
                className="group overflow-hidden bg-card border border-border rounded-xl hover:border-accent transition-colors"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <a href={href} target="_blank" rel="noopener noreferrer" className="grid md:grid-cols-[220px_1fr] gap-0">
                  {img && (
                    <div className="aspect-video md:aspect-auto md:h-full bg-muted overflow-hidden">
                      <img
                        src={img}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} /> {formatDate(p.created)}
                      </span>
                      {(p.json_metadata?.tags ?? []).slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground font-medium"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-3 text-xl md:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">{excerptFrom(p)}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
                      Auf PeakD lesen <ExternalLink size={16} />
                    </span>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        {data && data.length > 0 && (
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href="https://peakd.com/@achimmertens?filter=doku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Alle Artikel auf PeakD ansehen <ArrowRight size={16} />
            </a>
            <p className="text-sm text-muted-foreground">
              Themenwunsch?{" "}
              <Link to="/kontakt" className="text-accent font-medium hover:underline">
                Schreiben Sie mir.
              </Link>{" "}
              {isFetching && <span className="ml-2 opacity-60">(aktualisiere…)</span>}
            </p>
          </div>
        )}
      </section>
    </>
  );
}
