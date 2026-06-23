import { Mail, MapPin, User, Briefcase } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  const facts = [
    { icon: User, label: "Name", value: profile.name },
    { icon: Briefcase, label: "Role", value: profile.role },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="About"
          title="A bit about me"
          description="The short version — who I am and how I work."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="space-y-5 lg:col-span-7" delay={0.05}>
            {profile.about.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.12}>
            <div className="card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Quick facts
              </h3>
              <dl className="mt-5 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-surface2 text-accent">
                      <f.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-muted">{f.label}</dt>
                      <dd className="text-sm font-medium text-fg">{f.value}</dd>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-surface2 text-accent">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-wide text-muted">Email</dt>
                    <dd className="truncate text-sm font-medium">
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-fg transition-colors hover:text-accent"
                      >
                        {profile.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-line bg-surface2/60 p-5 text-center"
              >
                <div className="font-display text-2xl font-bold text-accent sm:text-3xl">
                  {h.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-muted">{h.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
