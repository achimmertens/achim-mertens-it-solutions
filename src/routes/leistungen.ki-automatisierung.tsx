import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  ArrowLeft,
  Save,
  Copy,
  Check,
  Mail,
  Info,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/leistungen/ki-automatisierung")({
  head: () => ({
    meta: [
      {
        title: "KI & Automatisierung · OpenClaw-Agent anfragen · Achim Mertens IT Consulting",
      },
      {
        name: "description",
        content:
          "Formular zur Konfiguration eines persönlichen OpenClaw-Agenten. Beantworten Sie die Fragen und erhalten Sie ein JSON – die Basis für Ihre individuelle Automatisierungslösung.",
      },
    ],
  }),
  component: KiAutomatisierungPage,
});

/* ------------------------------------------------------------------ */
/*  Typdefinitionen                                                    */
/* ------------------------------------------------------------------ */

interface FormData {
  // A. Grundentscheidung
  agentName: string;
  useCase: string;
  primaryChannel: string;
  allowedUsers: string;
  // B. LLM-Auswahl
  llmProvider: string;
  specificModel: string;
  hasApiKey: string;
  costPerformance: string;
  // C. Telegram
  telegramEnabled: string;
  telegramScope: string;
  telegramApproval: string;
  telegramBotName: string;
  // D. Betriebsrahmen
  deployment: string;
  existingSystem: string;
  securityLevel: string;
  autoStart: boolean;
  // E. Datenschutz & Verhalten
  dataRetention: boolean;
  enableTools: boolean;
  autonomyLevel: string;
  language: string;
  // F. Datenzugriff
  dataAccessScope: string;
  dataExchangeMethod: string;
  dataAccessPath: string;
  // G. Email-Zugriff
  emailProvider: string;
  smtpServerPort: string;
  imapServerPort: string;
  emailAccount: string;
  emailPassword: string;
  // H. Hive Account
  hiveDesiredName: string;
  // I. Speech To Text
  sttLocal: boolean;
  sttOnline: boolean;
  // J. GitHub
  githubUsername: string;
  githubApiKey: string;
  // K. Kundendaten
  customerName: string;
  customerCompany: string;
  customerEmail: string;
  customerPhone: string;
  // Freitext
  additionalNotes: string;
}

const defaults: FormData = {
  agentName: "",
  useCase: "",
  primaryChannel: "",
  allowedUsers: "",
  llmProvider: "",
  specificModel: "",
  hasApiKey: "",
  costPerformance: "",
  telegramEnabled: "",
  telegramScope: "",
  telegramApproval: "",
  telegramBotName: "",
  deployment: "",
  existingSystem: "",
  securityLevel: "",
  autoStart: true,
  dataRetention: true,
  enableTools: true,
  autonomyLevel: "",
  language: "",
  dataAccessScope: "",
  dataExchangeMethod: "",
  dataAccessPath: "",
  // G. Email-Zugriff
  emailProvider: "",
  smtpServerPort: "",
  imapServerPort: "",
  emailAccount: "",
  emailPassword: "",
  // H. Hive Account
  hiveDesiredName: "",
  // I. Speech To Text
  sttLocal: false,
  sttOnline: false,
  // J. GitHub
  githubUsername: "",
  githubApiKey: "",
  // K. Kundendaten
  customerName: "",
  customerCompany: "",
  customerEmail: "",
  customerPhone: "",
  additionalNotes: "",
};

/* ------------------------------------------------------------------ */
/*  Admin-Vorauswahl (für „Weiß nicht")                                 */
/* ------------------------------------------------------------------ */

function applyDefaults(f: FormData): Record<string, unknown> {
  const d = { ...f };

  const adminDefaults: Record<string, string | boolean> = {
    useCase: "interner Helfer",
    primaryChannel: "Telegram + Dashboard",
    allowedUsers: "nur ich",
    llmProvider: "OpenRouter",
    specificModel: "openrouter/auto",
    hasApiKey: "Admin stellt Key",
    costPerformance: "ausgewogen",
    telegramEnabled: "ja",
    telegramScope: "Einzelchats + Gruppen",
    telegramApproval: "ja",
    telegramBotName: "aus Agentenname generiert",
    deployment: "Raspberry Pi 5 (lokal)",
    existingSystem: "wird neu eingerichtet",
    securityLevel: "nur lokal (LAN)",
    autonomyLevel: "ausgewogen",
    language: "Deutsch",
    dataAccessScope: "eigener Bereich auf dem Agenten",
    dataExchangeMethod: "wird nach Bedarf eingerichtet",
  };

  const result: Record<string, unknown> = {};

  for (const [key, val] of Object.entries(d)) {
    const adminDefault = adminDefaults[key];
    if (adminDefault !== undefined && (val === "" || val === "unsure")) {
      result[key] = adminDefault;
    } else {
      result[key] = val;
    }
  }

  return result;
}

/* ------------------------------------------------------------------ */
/*  Komponente                                                         */
/* ------------------------------------------------------------------ */

const unsureOption = { value: "unsure", label: "🤷 Weiß nicht, entscheide du" };

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-card-foreground mb-1.5">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-ring md:text-sm cursor-pointer"
      >
        <option value="" disabled>
          {placeholder ?? "Bitte auswählen"}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
        <option value="unsure">🤷 Weiß nicht, entscheide du</option>
      </select>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type,
  optional,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  optional?: boolean;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-card-foreground mb-1.5">
        {label}
        {optional && <span className="font-normal text-muted-foreground ml-1">(optional)</span>}
      </label>
      <input
        id={id}
        type={type ?? "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring md:text-sm"
      />
    </div>
  );
}

function CheckField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 cursor-pointer group"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-input accent-[var(--color-accent)]"
      />
      <span className="text-sm text-card-foreground group-hover:text-accent transition-colors">
        {label}
      </span>
    </label>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

function KiAutomatisierungPage() {
  const [form, setForm] = useState<FormData>(defaults);
  const [generated, setGenerated] = useState<Record<string, unknown> | null>(null);
  const [copied, setCopied] = useState(false);
  const [showJson, setShowJson] = useState(false);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    const applied = applyDefaults(form);
    const output = {
      customer_choices: form,
      resolved_config: applied,
      generated_at: new Date().toISOString(),
      schema_version: "1.0",
    };
    setGenerated(output);
    setShowJson(true);
  };

  const handleCopy = async () => {
    if (!generated) return;
    await navigator.clipboard.writeText(JSON.stringify(generated, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!generated) return;
    const blob = new Blob([JSON.stringify(generated, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `openclaw-agent-${form.agentName || "anfrage"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mb-4"
          >
            <ArrowLeft size={16} /> Zurück zu den Leistungen
          </Link>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center text-accent-foreground mb-5" style={{ background: "var(--gradient-accent)" }}>
            <Bot size={28} />
          </div>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">
            KI & Automatisierung
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Ihren OpenClaw-Agenten konfigurieren
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            Lassen Sie uns gemeinsam einen auf Ihre Wünsche abgestimmten KI-Assistenten bauen.
            Sie bestimmen, wo er stehen soll, wer Zugriff bekommt und worauf Ihr Agent Zugriff
            erhalten soll. Am Ende entsteht ein JSON-Dokument, das als Grundlage für die
            Einrichtung des Agenten dient.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-10">

          {/* ========== A. GRUNDENTSCHEIDUNG ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              A. Grundentscheidung
            </legend>
            <div className="mt-5 space-y-5">
              <TextField
                label="Name des Assistenten / Agenten"
                value={form.agentName}
                onChange={(v) => update("agentName", v)}
                placeholder="z. B. Helbardor, Support-Bot, Haushaltshilfe"
              />

              <SelectField
                label="Einsatzkontext"
                value={form.useCase}
                onChange={(v) => update("useCase", v)}
                options={[
                  { value: "private", label: "🏠 Privat / Persönlich" },
                  { value: "team", label: "👥 Team / Abteilung" },
                  { value: "service", label: "🎧 Kundenservice" },
                  { value: "internal", label: "⚙️ Interner Helfer" },
                ]}
              />

              <SelectField
                label="Primärer Kommunikationskanal"
                value={form.primaryChannel}
                onChange={(v) => update("primaryChannel", v)}
                options={[
                  { value: "telegram", label: "💬 Telegram" },
                  { value: "dashboard", label: "🖥️ Nur Dashboard (Web)" },
                  { value: "both", label: "Beides" },
                ]}
              />

              <SelectField
                label="Wer darf den Assistenten verwenden?"
                value={form.allowedUsers}
                onChange={(v) => update("allowedUsers", v)}
                options={[
                  { value: "only-me", label: "👤 Nur ich" },
                  { value: "team", label: "👥 Mein Team" },
                  { value: "customers", label: "🏢 Kunden" },
                  { value: "public", label: "🌍 Öffentlich" },
                ]}
              />
            </div>
          </fieldset>

          {/* ========== B. LLM-AUSWAHL ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              B. LLM-Auswahl
            </legend>
            <div className="mt-5 space-y-5">
              <SelectField
                label="LLM-Anbieter"
                value={form.llmProvider}
                onChange={(v) => update("llmProvider", v)}
                options={[
                  { value: "openai", label: "OpenAI (GPT-4o, GPT-4.1)" },
                  { value: "anthropic", label: "Anthropic (Claude)" },
                  { value: "google", label: "Google (Gemini)" },
                  { value: "openrouter", label: "OpenRouter (viele Modelle)" },
                  { value: "other", label: "Anderer Anbieter" },
                ]}
              />

              <TextField
                label="Bestimmtes Modell"
                value={form.specificModel}
                onChange={(v) => update("specificModel", v)}
                placeholder="z. B. gpt-4o, claude-sonnet-4 — oder leer lassen"
                optional
              />

              <SelectField
                label="Haben Sie bereits einen API-Key?"
                value={form.hasApiKey}
                onChange={(v) => update("hasApiKey", v)}
                options={[
                  { value: "yes", label: "✅ Ja, Key vorhanden" },
                  { value: "no", label: "❌ Nein, benötige einen" },
                ]}
              />

              <SelectField
                label="Kosten- / Leistungsprofil"
                value={form.costPerformance}
                onChange={(v) => update("costPerformance", v)}
                options={[
                  { value: "cheap", label: "💰 Günstig (kleine Modelle)" },
                  { value: "balanced", label: "⚖️ Ausgewogen" },
                  { value: "powerful", label: "🚀 Leistungsstark (Top-Modelle)" },
                ]}
              />
            </div>
          </fieldset>

          {/* ========== C. TELEGRAM ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              C. Telegram
            </legend>
            <div className="mt-5 space-y-5">
              <SelectField
                label="Telegram aktivieren?"
                value={form.telegramEnabled}
                onChange={(v) => update("telegramEnabled", v)}
                options={[
                  { value: "yes", label: "✅ Ja" },
                  { value: "no", label: "❌ Nein, nur Dashboard" },
                ]}
              />

              {form.telegramEnabled !== "no" && (
                <>
                  <SelectField
                    label="Bot-Einsatzbereich"
                    value={form.telegramScope}
                    onChange={(v) => update("telegramScope", v)}
                    options={[
                      { value: "dm", label: "💬 Nur Einzelchats" },
                      { value: "groups", label: "👥 Nur Gruppen" },
                      { value: "both", label: "Beides" },
                    ]}
                  />

                  <SelectField
                    label="Antwort nur nach Freigabe?"
                    value={form.telegramApproval}
                    onChange={(v) => update("telegramApproval", v)}
                    options={[
                      { value: "yes", label: "✅ Ja (Pairing nötig)" },
                      { value: "no", label: "❌ Nein, für alle offen" },
                    ]}
                  />

                  <TextField
                    label="Bevorzugter Bot-Name"
                    value={form.telegramBotName}
                    onChange={(v) => update("telegramBotName", v)}
                    placeholder="z. B. MeinHelferBot"
                    optional
                  />
                </>
              )}
            </div>
          </fieldset>

          {/* ========== D. BETRIEBSRAHMEN ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              D. Betriebsrahmen
            </legend>
            <div className="mt-5 space-y-5">
              <SelectField
                label="Wo soll OpenClaw laufen?"
                value={form.deployment}
                onChange={(v) => update("deployment", v)}
                options={[
                  { value: "local", label: "🖥️ Lokaler Rechner / Raspberry Pi" },
                  { value: "vps", label: "☁️ VPS (Hetzner, DigitalOcean, …)" },
                  { value: "existing", label: "🔧 Bestehender Server" },
                ]}
              />

              <TextField
                label="Bestehendes System (wenn vorhanden)"
                value={form.existingSystem}
                onChange={(v) => update("existingSystem", v)}
                placeholder="z. B. Intel NUC mit Ubuntu 24.04"
                optional
              />

              <SelectField
                label="Sicherheitsanforderungen"
                value={form.securityLevel}
                onChange={(v) => update("securityLevel", v)}
                options={[
                  { value: "local", label: "🔒 Nur lokaler Zugriff (LAN)" },
                  { value: "vpn", label: "🔐 VPN / abgesicherter Zugriff" },
                  { value: "public", label: "🌍 Öffentlich erreichbar" },
                ]}
              />

              <div className="pt-1">
                <CheckField
                  label="Automatischer Start + Persistenz (z. B. systemd-service)"
                  checked={form.autoStart}
                  onChange={(v) => update("autoStart", v)}
                />
              </div>
            </div>
          </fieldset>

          {/* ========== E. DATENSCHUTZ & VERHALTEN ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              E. Datenschutz & Verhalten
            </legend>
            <div className="mt-5 space-y-5">
              <CheckField
                label="Chatverläufe speichern (für Lernen / Langzeitgedächtnis)"
                checked={form.dataRetention}
                onChange={(v) => update("dataRetention", v)}
              />

              <CheckField
                label="Tools / Skills aktivieren (Shell, Web, Dateizugriff)"
                checked={form.enableTools}
                onChange={(v) => update("enableTools", v)}
              />

              <SelectField
                label="Autonomiegrad"
                value={form.autonomyLevel}
                onChange={(v) => update("autonomyLevel", v)}
                options={[
                  { value: "cautious", label: "🛡️ Vorsichtig (vor jeder Aktion fragen)" },
                  { value: "balanced", label: "⚖️ Ausgewogen" },
                  { value: "autonomous", label: "🤖 Autonom (eigenständig handeln)" },
                ]}
              />

              <SelectField
                label="Antwortsprache"
                value={form.language}
                onChange={(v) => update("language", v)}
                options={[
                  { value: "de", label: "🇩🇪 Deutsch" },
                  { value: "en", label: "🇬🇧 Englisch" },
                  { value: "multi", label: "🌐 Mehrsprachig" },
                ]}
              />

              <div>
                <label
                  htmlFor="additional-notes"
                  className="block text-sm font-semibold text-card-foreground mb-1.5"
                >
                  Sonstige Anmerkungen
                  <span className="font-normal text-muted-foreground ml-1">(optional)</span>
                </label>
                <textarea
                  id="additional-notes"
                  value={form.additionalNotes}
                  onChange={(e) => update("additionalNotes", e.target.value)}
                  placeholder="Besondere Wünsche, Hinweise oder Fragen …"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring md:text-sm"
                />
              </div>
            </div>
          </fieldset>
          {/* ========== G. EMAIL-ZUGRIFF (OPTIONAL) ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              G. Email-Zugriff{" "}
              <span className="font-normal text-muted-foreground text-sm">
                (optional)
              </span>
            </legend>
            <div className="mt-5 space-y-5">
              <SelectField
                label="Mail-Provider"
                value={form.emailProvider}
                onChange={(v) => update("emailProvider", v)}
                options={[
                  { value: "gmail", label: "📧 Gmail / Google Workspace" },
                  { value: "outlook", label: "📧 Outlook / Office 365" },
                  { value: "gmx", label: "📧 GMX" },
                  { value: "webde", label: "📧 Web.de" },
                  { value: "posteo", label: "📧 Posteo" },
                  { value: "other", label: "📧 Anderer Anbieter" },
                ]}
                placeholder="Nicht benötigt / später"
              />

              <TextField
                label="SMTP-Server + Port"
                value={form.smtpServerPort}
                onChange={(v) => update("smtpServerPort", v)}
                placeholder="z. B. smtp.gmail.com:587"
                optional
              />

              <TextField
                label="IMAP-Server + Port"
                value={form.imapServerPort}
                onChange={(v) => update("imapServerPort", v)}
                placeholder="z. B. imap.gmail.com:993"
                optional
              />

              <TextField
                label="Mail-Adresse"
                value={form.emailAccount}
                onChange={(v) => update("emailAccount", v)}
                placeholder="agent@beispiel.de"
                optional
              />

              <TextField
                label="Passwort / App-Passwort"
                value={form.emailPassword}
                onChange={(v) => update("emailPassword", v)}
                type="password"
                placeholder="••••••••"
                optional
              />

              <p className="text-xs text-muted-foreground leading-relaxed">
                Der Agent kann so E-Mails senden und empfangen, z. B. für Benachrichtigungen
                oder automatisierte Antworten. Die Zugangsdaten werden sicher auf Ihrem System
                gespeichert und nie an Dritte weitergegeben.
              </p>
            </div>
          </fieldset>

          {/* ========== H. HIVE ACCOUNT (OPTIONAL) ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              H. Hive Account{" "}
              <span className="font-normal text-muted-foreground text-sm">
                (optional)
              </span>
            </legend>
            <div className="mt-5 space-y-5">
              <TextField
                label="Wunschname für Hive-Blockchain-Account"
                value={form.hiveDesiredName}
                onChange={(v) => update("hiveDesiredName", v)}
                placeholder="z. B. mein-agent-bot"
                optional
              />

              <p className="text-xs text-muted-foreground leading-relaxed">
                Falls gewünscht, kann der Agent einen eigenen Hive-Account erhalten, um
                Blockchain-basierte Funktionen zu nutzen (z. B. Blogging, Abstimmungen,
                dezentrale Speicherung). Der Account wird bei Bedarf eingerichtet.
              </p>
            </div>
          </fieldset>

          {/* ========== I. SPEECH TO TEXT ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              I. Speech To Text
            </legend>
            <div className="mt-5 space-y-4">
              <p className="text-sm text-muted-foreground mb-2">
                Welche Methode zur Spracherkennung soll der Agent nutzen? Beide Optionen sind
                gleichzeitig wählbar.
              </p>
              <CheckField
                label="Lokal (sicher + kostenlos)"
                checked={form.sttLocal}
                onChange={(v) => update("sttLocal", v)}
              />
              <CheckField
                label="Online (schnell)"
                checked={form.sttOnline}
                onChange={(v) => update("sttOnline", v)}
              />
            </div>
          </fieldset>

          {/* ========== J. GITHUB ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              J. GitHub{" "}
              <span className="font-normal text-muted-foreground text-sm">
                (optional)
              </span>
            </legend>
            <div className="mt-5 space-y-5">
              <TextField
                label="GitHub-Benutzername"
                value={form.githubUsername}
                onChange={(v) => update("githubUsername", v)}
                placeholder="z. B. maxmustermann"
                optional
              />
              <TextField
                label="GitHub Personal Access Token (API-Key)"
                value={form.githubApiKey}
                onChange={(v) => update("githubApiKey", v)}
                type="password"
                placeholder="github_pat_..."
                optional
              />

              <p className="text-xs text-muted-foreground leading-relaxed">
                Der Agent kann so auf Ihre GitHub-Repositories zugreifen, Issues verwalten,
                Code einsehen oder automatisiert Pull Requests erstellen. Der Token wird
                sicher auf Ihrem System gespeichert.
              </p>
            </div>
          </fieldset>

          {/* ========== K. KUNDENDATEN ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              J. Kundendaten
            </legend>
            <div className="mt-5 space-y-5">
              <TextField
                label="Ihr Name"
                value={form.customerName}
                onChange={(v) => update("customerName", v)}
                placeholder="z. B. Max Mustermann"
              />
              <TextField
                label="Firma / Organisation"
                value={form.customerCompany}
                onChange={(v) => update("customerCompany", v)}
                placeholder="z. B. Muster GmbH"
              />
              <TextField
                label="E-Mail-Adresse"
                value={form.customerEmail}
                onChange={(v) => update("customerEmail", v)}
                placeholder="max@beispiel.de"
                type="email"
              />
              <TextField
                label="Telefon / Mobil"
                value={form.customerPhone}
                onChange={(v) => update("customerPhone", v)}
                placeholder="z. B. +49 171 1234567"
                type="tel"
                optional
              />
            </div>
          </fieldset>

          {/* ========== F. DATENZUGRIFF ========== */}
          <fieldset className="p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <legend className="text-lg font-bold text-card-foreground px-2">
              F. Datenzugriff
            </legend>
            <div className="mt-5 space-y-5">
              <SelectField
                label="Welche Daten soll der Agent sehen dürfen?"
                value={form.dataAccessScope}
                onChange={(v) => update("dataAccessScope", v)}
                options={[
                  { value: "agent-only", label: "📁 Nur sein eigener Bereich" },
                  { value: "specific-folders", label: "📂 Bestimmte Ordner / Freigaben" },
                  { value: "full-system", label: "💻 Gesamtes Dateisystem (lesend)" },
                  { value: "full-readwrite", label: "✏️ Gesamtes System mit Schreibzugriff" },
                  { value: "cloud-only", label: "☁️ Nur Cloud-Verzeichnisse" },
                ]}
              />

              <SelectField
                label="Wie soll der Datenaustausch erfolgen?"
                value={form.dataExchangeMethod}
                onChange={(v) => update("dataExchangeMethod", v)}
                options={[
                  { value: "lan-share", label: "🔗 Gemeinsames Laufwerk (LAN / SMB / NFS)" },
                  { value: "synced", label: "🔄 Synchronisierte Daten (Nextcloud, Syncthing, …)" },
                  { value: "usb", label: "💾 USB-Festplatte (lokal angeschlossen)" },
                  { value: "cloud", label: "☁️ Cloud-Anbieter (Google Drive, Dropbox, …)" },
                  { value: "api", label: "🔌 API-Schnittstelle (REST, WebDAV, …)" },
                ]}
              />

              <TextField
                label="Konkrete Pfade oder Details"
                value={form.dataAccessPath}
                onChange={(v) => update("dataAccessPath", v)}
                placeholder="z. B. //nas/team/freigabe, /mnt/data, bestimmte Nextcloud-Ordner"
                optional
              />
            </div>
          </fieldset>

        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition shadow-lg"
          >
            <Save size={20} />
            Anfrage speichern & JSON erstellen
          </button>
        </div>

        {/* JSON Output */}
        {showJson && generated && (
          <div className="mt-8 p-7 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <Info size={20} /> Generierte Konfiguration (JSON)
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md hover:opacity-80 transition"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? "Kopiert!" : "Kopieren"}
                </button>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md hover:opacity-80 transition"
                >
                  <Download size={15} /> Download
                </button>
              </div>
            </div>

            <pre
              className="text-xs leading-relaxed p-4 rounded-md overflow-x-auto"
              style={{
                background: "var(--color-muted)",
                color: "var(--color-foreground)",
                border: "1px solid var(--color-border)",
                maxHeight: "500px",
              }}
            >
              {JSON.stringify(generated, null, 2)}
            </pre>

            {/* Hinweis E-Mail */}
            <div className="mt-5 p-4 rounded-md flex items-start gap-3" style={{ background: "var(--gradient-accent)", color: "var(--color-accent-foreground)" }}>
              <Mail size={22} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">JSON an mich senden lassen?</p>
                <p className="text-sm mt-1 opacity-90">
                  Speichern Sie das JSON lokal oder kopieren Sie es. Auf Wunsch wird es an meine
                  E-Mail-Adresse <strong>achim_mertens@gmx.de</strong> gesendet (CC an
                  <strong>helbard.bot@gmx.de</strong>) — schreiben Sie mir einfach eine kurze
                  Nachricht mit dem JSON, und ich kümmere mich um die Umsetzung.
                </p>
                <a
                  href={`mailto:achim_mertens@gmx.de?cc=${encodeURIComponent("helbard.bot@gmx.de")}&subject=${encodeURIComponent("OpenClaw-Agent Konfiguration")}&body=${encodeURIComponent("Anbei das JSON für meinen OpenClaw-Agenten.\n\n" + JSON.stringify(generated, null, 2))}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold underline hover:no-underline"
                >
                  <Mail size={15} /> Direkt per E-Mail senden
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Info zur automatischen Provisionierung */}
        <div className="mt-8 p-6 bg-card border border-border rounded-xl" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-accent-foreground" style={{ background: "var(--gradient-accent)" }}>
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold text-card-foreground">So geht es weiter</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Aus Ihren Angaben wird ein JSON-Dokument erstellt. Dieses dient später als
                Grundlage, um auf einem Raspberry Pi automatisiert eine OpenClaw-Instanz
                einzurichten – mit Ihren gewählten Einstellungen zu LLM, Telegram, Sicherheit
                und Verhalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-2xl p-10 text-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-2xl md:text-3xl font-bold">
            Lieber direkt sprechen?
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Ich berate Sie gern persönlich. Die erste Stunde ist kostenlos.
          </p>
          <Link
            to="/kontakt"
            className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Kontakt aufnehmen <ArrowLeft size={18} className="rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
