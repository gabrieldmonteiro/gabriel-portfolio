import type { Project } from "../types/project";
import { AppStoreIcon, GitHubIcon, GooglePlayIcon, ItchIcon, PlayIcon, SteamIcon } from "./icons/Icons";
import { useLanguage } from "../i18n/LanguageContext";

const secondaryBtn =
  "inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-600 hover:text-fg";

interface ProjectCardProps {
  project: Project;
}

/**
 * Card individual de projeto na galeria `/projects`.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const storeLinks = [
    { href: project.url_android, label: "Google Play", Icon: GooglePlayIcon },
    { href: project.url_steam, label: "Steam", Icon: SteamIcon },
    { href: project.url_ios, label: "App Store", Icon: AppStoreIcon },
    { href: project.url_itch, label: "itch.io", Icon: ItchIcon },
  ];

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
        <h3 className="mb-2 font-medium text-fg">{project.name}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.url_demo && (
            <a
              href={project.url_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2 text-xs font-medium text-accent-light transition-colors hover:bg-accent/20"
            >
              <PlayIcon />
              {t.projects.liveDemo}
            </a>
          )}
          {project.url_github && (
            <a
              href={project.url_github}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryBtn}
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {storeLinks.map(
            ({ href, label, Icon }) =>
              href === "" ? (
                <span key={label} aria-disabled="true" className={`${secondaryBtn} cursor-not-allowed opacity-40`}>
                  <Icon />
                  {label}
                </span>
              ) : (
                href && (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
                  <Icon />
                  {label}
                </a>
                )
              ),
          )}
        </div>
      </div>
    </article>
  );
}
