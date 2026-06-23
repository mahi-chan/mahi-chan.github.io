import { Code2, Server, LayoutGrid, Database, Cpu, GitBranch, Brain, Eye, Bot } from "lucide-react";
import type { Service } from "../data/profile";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = {
  code: Code2,
  server: Server,
  layout: LayoutGrid,
  database: Database,
  cpu: Cpu,
  git: GitBranch,
  brain: Brain,
  eye: Eye,
  bot: Bot,
} as const;

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <div className="card group h-full p-6">
      <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface2 text-accent transition-colors group-hover:border-accent/40">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-fg">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="What I do"
          title="Services"
          description="How I can help — from the interface all the way down to the data layer."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profile.services.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i, 4) * 0.06}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
