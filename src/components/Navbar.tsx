import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./icons";

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  ...(profile.awards.length ? [{ id: "awards", label: "Awards" }] : []),
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent")
      }
    >
      <nav className="container-content flex h-16 items-center justify-between">
        {/* Monogram */}
        <a
          href="#home"
          className="group flex items-center gap-2"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface font-display text-sm font-bold text-accent transition-colors group-hover:border-accent/60">
            {profile.initials}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                  (active === link.id ? "text-fg" : "text-muted hover:text-fg")
                }
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-1">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden rounded-md p-2 text-muted transition-colors hover:text-fg sm:inline-flex"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          {profile.socials.some((s) => s.icon === "linkedin") && (
            <a
              href={profile.socials.find((s) => s.icon === "linkedin")?.href ?? "#"}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden rounded-md p-2 text-muted transition-colors hover:text-fg sm:inline-flex"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
          )}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 hidden items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-accent/60 md:inline-flex"
            >
              <FileText className="h-4 w-4" /> Résumé
            </a>
          )}

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex rounded-md p-2 text-fg md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="container-content flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={
                    "block rounded-md px-3 py-3 text-base font-medium transition-colors " +
                    (active === link.id ? "text-accent" : "text-muted hover:text-fg")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
