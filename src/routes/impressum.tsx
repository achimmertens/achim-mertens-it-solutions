import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum · Achim Mertens" },
      { name: "description", content: "Impressum und Angaben gemäß § 5 TMG." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-primary">Impressum</h1>
      <div className="mt-8 space-y-6 text-foreground leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-primary">Angaben gemäß § 5 TMG</h2>
          <address className="mt-2 not-italic">
            Achim Mertens<br />
            Software Consulting Mertens<br />
            Vennstr. 31<br />
            52249 Eschweiler<br />
            Deutschland
          </address>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-primary">Kontakt</h2>
          <p className="mt-2">Telefon: +49 1517 4412216<br />
          E-Mail: achim_mertens@gmx.de</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-primary">Umsatzsteuer</h2>
          <p className="mt-2">Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-primary">Verantwortlich für den Inhalt</h2>
          <p className="mt-2">Achim Mertens (Anschrift wie oben).</p>
        </div>
      </div>
    </section>
  );
}
