import { Boxes, Code2, Users, CalendarDays } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "../data/profile";
import { colorForLanguage } from "../data/languageColors";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function StatCard({ icon: Icon, value, label }: { icon: LucideIcon; value: string; label: string }) {
  return (
    <div className="card p-5">
      <Icon className="h-5 w-5 text-accent" />
      <div className="mt-3 font-display text-3xl font-bold text-fg">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-muted">{label}</div>
    </div>
  );
}

export function GitHubStats() {
  const s = profile.stats;
  const cards: { icon: LucideIcon; value: string; label: string }[] = [
    { icon: Boxes, value: String(s.repos), label: "Repositories" },
    { icon: Code2, value: String(profile.topLanguages.length), label: "Languages" },
    { icon: Users, value: String(s.followers), label: "Followers" },
    { icon: CalendarDays, value: s.joined, label: "On GitHub since" },
  ];

  return (
    <section id="github" className="py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="By the numbers"
          title="GitHub activity"
          description="A snapshot of what I've been building, pulled straight from my profile."
        />

        <div className="grid gap-5 lg:grid-cols-5">
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {cards.map((c) => (
              <Reveal key={c.label}>
                <StatCard icon={c.icon} value={c.value} label={c.label} />
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="card h-full p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Most used languages
              </h3>
              <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full border border-line">
                {profile.topLanguages.map((l) => (
                  <span
                    key={l.name}
                    style={{ width: `${l.pct}%`, backgroundColor: colorForLanguage(l.name) }}
                    title={`${l.name} ${l.pct}%`}
                  />
                ))}
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                {profile.topLanguages.map((l) => (
                  <li key={l.name} className="flex items-center gap-2 text-sm">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: colorForLanguage(l.name) }}
                    />
                    <span className="text-fg">{l.name}</span>
                    <span className="ml-auto font-mono text-xs text-muted">{l.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
