import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Página de projetos — carrega dados dinamicamente de `public/projects.json`.
 */
export function ProjectsPage() {
  const { projects, loading, error } = useProjects();
  const { t } = useLanguage();
  const sortedProjects = [...projects].reverse();

  return (
    <div className="min-h-screen px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Navegação de retorno */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-accent-light"
        >
          <span aria-hidden>←</span>
          {t.projects.backHome}
        </Link>

        {/* Cabeçalho da página */}
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-accent-light">{t.projects.eyebrow}</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{t.projects.title}</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">{t.projects.description}</p>
        </div>

        {/* Estado: carregando */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse overflow-hidden rounded-xl border border-border bg-surface-card"
              >
                <div className="aspect-video bg-surface-elevated" />
                <div className="space-y-3 p-5">
                  <div className="h-4 w-3/4 rounded bg-surface-elevated" />
                  <div className="h-3 w-full rounded bg-surface-elevated" />
                  <div className="h-3 w-2/3 rounded bg-surface-elevated" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Estado: erro */}
        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Galeria de projetos */}
        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
