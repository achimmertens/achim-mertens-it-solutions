import { Link } from "@tanstack/react-router";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-3">IT Consulting Mertens</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            IT-Beratung, Programmierung & Webdesign aus Eschweiler. Pragmatisch, persönlich, herstellerunabhängig.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <h3 className="text-lg font-semibold mb-3">Kontakt</h3>
          <p className="flex items-center gap-2"><MapPin size={16} /> Vennstr. 31, 52249 Eschweiler</p>
          <p className="flex items-center gap-2"><Phone size={16} /> +49 1517 4412216</p>
          <p className="flex items-center gap-2"><Mail size={16} />
            <a className="hover:text-accent" href="mailto:achim_mertens@gmx.de?subject=Consultant%20Anfrage">achim_mertens@gmx.de</a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Profile</h3>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/achim-mertens-97b0" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="p-2 rounded-md bg-white/10 hover:bg-accent transition-colors"><Linkedin size={18} /></a>
            <a href="https://github.com/achimmertens" target="_blank" rel="noreferrer" aria-label="GitHub"
              className="p-2 rounded-md bg-white/10 hover:bg-accent transition-colors"><Github size={18} /></a>
            <a href="https://peakd.com/@achimmertens" target="_blank" rel="noreferrer" aria-label="Hive Blockchain"
              className="p-2 rounded-md bg-white/10 hover:bg-accent transition-colors font-bold text-sm">H</a>
          </div>
          <div className="mt-6 flex gap-4 text-xs text-primary-foreground/60">
            <Link to="/impressum" className="hover:text-accent">Impressum</Link>
            <Link to="/kontakt" className="hover:text-accent">Kontakt</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Achim Mertens · Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
      </div>
    </footer>
  );
}
