import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SocialIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="container-content">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 text-center sm:p-14">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-40 w-3/5 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-accent/70" />
              Contact
            </span>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              Have a role, a project, or just want to say hi? My inbox is always open.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:bg-accent-soft"
              >
                Say hello
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface2 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg"
                >
                  <SocialIcon icon={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" />
              {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
