import type { Project } from "../types/project";
import { GitHubIcon, PlayIcon } from "./icons/Icons";
import { useLanguage } from "../i18n/LanguageContext";

interface ProjectCardProps {
  project: Project;
}

/**
 * Card individual de projeto na galeria `/projects`.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-card transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent-glow">
      {/* Preview */}
      <div className="relative aspect-video overflow-hidden bg-surface-elevated">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-medium text-white">{project.name}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2 text-xs font-medium text-accent-light transition-colors hover:bg-accent/20"
            >
              <PlayIcon />
              {t.projects.liveDemo}
            </a>
          )}
          <a
            href={project.url_gh}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
