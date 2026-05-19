import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Github, MapPin } from "lucide-react";
import profile from "@/assets/profile.jpg";
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

function UeberMich() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
  <h2 className="text-3xl font-bold text-primary">Erfahrung</h2>
  <div className="mt-4 space-y-6">
    <div className="experience-entry">
      <img src={dtLogo} alt="Deutsche Telekom Logo" className="h-12 w-12 mr-4" />
      <div>
        <p className="text-sm font-bold">Deutsche Telekom</p>
        <p className="text-muted-foreground">Vollzeit · Seit 1998</p>
      </div>
    </div>
    {/* Add other entries similarly */}
    {/* Repeat for each experience block */}
  </div>
</section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-primary">Lebenslauf</h2>
        <p className="mt-2 text-muted-foreground">
          Auszug meiner beruflichen Stationen – ergänzend zu meinem{" "}
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
      </section>
    </>
  );
}
