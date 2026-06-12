/**
 * Contrato de dados dos projetos carregados de `public/projects.json`.
 */
export interface Project {
  id: number;
  name: string;
  description: string;
  url?: string;
  url_gh: string;
  image: string;
}
