/**
 * Contrato de dados dos projetos carregados de `public/projects.json`.
 */
export interface Project {
  id: number;
  name: string;
  description: string;
  url_demo?: string;
  url_github?: string;
  url_android?: string;
  url_steam?: string;
  url_ios?: string;
  url_itch?: string;
  image: string;
}
