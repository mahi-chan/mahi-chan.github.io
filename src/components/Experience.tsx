import { Briefcase, GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & education"
          description="Where I've worked, studied and grown."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* timeline spine */}
          <div className="absolute bottom-2 left-5 top-2 w-px bg-line" aria-hidden />

          <div className="space-y-6">
            {profile.experience.map((e, i) => {
              const Icon = e.kind === "education" ? GraduationCap : Briefcase;
              return (
                <Reveal key={e.role + i} delay={Math.min(i, 5) * 0.05}>
                  <div className="relative flex gap-5">
                    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-surface text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="card flex-1 p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h3 className="font-display text-base font-semibold text-fg">{e.role}</h3>
                        <span className="pill">{e.period}</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-accent">{e.org}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{e.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {e.tags.map((t) => (
                          <span key={t} className="pill px-2.5 py-0.5 text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
