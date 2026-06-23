import { Trophy } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Awards() {
  return (
    <section id="awards" className="py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & achievements"
          description="Moments worth mentioning."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {profile.awards.map((award, i) => (
            <Reveal key={award.title + i} delay={Math.min(i, 5) * 0.06}>
              <div className="card flex h-full gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-surface2 text-accent">
                  <Trophy className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-fg">{award.title}</h3>
                  {(award.org || award.year) && (
                    <p className="mt-0.5 text-sm text-muted">
                      {[award.org, award.year].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {award.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">{award.description}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
