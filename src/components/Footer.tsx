import { profile } from "../data/profile";
import { SocialIcon } from "./icons";

const footerLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="container-content flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface font-display text-sm font-bold text-accent">
            {profile.initials}
          </span>
          <span className="text-sm text-muted">
            © {year} {profile.name}
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:text-fg"
            >
              <SocialIcon icon={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <p className="container-content mt-6 text-center text-xs text-muted/70">
        Built with React, Tailwind CSS &amp; Framer Motion.
      </p>
    </footer>
  );
}
