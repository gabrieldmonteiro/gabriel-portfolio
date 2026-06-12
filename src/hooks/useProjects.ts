import { useEffect, useState } from "react";
import { ASSETS } from "../constants/assets";
import type { Project } from "../types/project";
import { useLanguage } from "../i18n/LanguageContext";

interface UseProjectsResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

/**
 * Hook para carregar projetos de `public/projects.json` em runtime.
 * Permite atualizar a galeria sem rebuild (apenas redeploy do JSON).
 */
export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    let cancelled = false;

    async function loadProjects() {
      try {
        const response = await fetch(ASSETS.projects);

        if (!response.ok) {
          throw new Error(t.projects.loadError);
        }

        const data = (await response.json()) as Project[];

        if (!cancelled) {
          setProjects(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : t.projects.loadError);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      cancelled = true;
    };
  }, [t.projects.loadError]);

  return { projects, loading, error };
}
