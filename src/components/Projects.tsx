import { Star, GitFork, ArrowUpRight, Folder } from "lucide-react";
import type { Project } from "../data/profile";
import { profile } from "../data/profile";
import { colorForLanguage } from "../data/languageColors";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { GitHubIcon } from "./icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={
        "card flex h-full flex-col p-6 " + (project.featured ? "ring-1 ring-accent/25" : "")
      }
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface2 text-accent">
          <Folder className="h-[18px] w-[18px]" />
        </span>
        <div className="flex items-center gap-1">
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="grid h-8 w-8 place-items-center rounded-md text-muted transition-colors hover:bg-surface2 hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} source`}
            className="grid h-8 w-8 place-items-center rounded-md text-muted transition-colors hover:bg-surface2 hover:text-fg"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-fg">
        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
          {project.name}
        </a>
      </h3>

      <p className="mt-2 line-clamp-3 grow text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.topics.slice(0, 4).map((t) => (
            <span key={t} className="pill px-2.5 py-0.5 text-[11px]">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-xs text-muted">
        {project.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: colorForLanguage(project.language) }}
            />
            {project.language}
          </span>
        )}
        {project.stars > 0 && (
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" /> {project.stars}
          </span>
        )}
        {project.forks > 0 && (
          <span className="flex items-center gap-1">
            <GitFork className="h-3.5 w-3.5" /> {project.forks}
          </span>
        )}
        <span className="ml-auto font-mono text-[11px] text-muted/80">View →</span>
      </div>
    </article>
  );
}

export function Projects() {
  const projects = [...profile.projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.stars - a.stars,
  );

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          description="A selection of things I've built. Pulled from my GitHub — stars, languages and links included."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i, 5) * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href={`${profile.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/60"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
            View all repositories
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
