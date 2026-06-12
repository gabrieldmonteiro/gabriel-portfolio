import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_FILE = join(__dirname, "../public/projects.json");

const GITHUB_USER = process.env.GITHUB_USER ?? "gabrieldmonteiro";
const PORTFOLIO_TOPIC = process.env.PORTFOLIO_TOPIC ?? "portfolio";

function repoNameFromUrl(url) {
  return url.replace(/\/$/, "").split("/").pop()?.toLowerCase() ?? "";
}

function defaultImage(owner, repo) {
  return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
}

function nextId(projects) {
  return projects.reduce((max, project) => Math.max(max, project.id), -1) + 1;
}

async function fetchAllRepos(username) {
  const repos = [];
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-sync-script",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const batch = await response.json();
    if (batch.length === 0) break;

    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return repos;
}

async function syncProjects() {
  const existing = JSON.parse(readFileSync(PROJECTS_FILE, "utf-8"));
  const byRepoName = new Map(
    existing.map((project) => [repoNameFromUrl(project.url_gh), project]),
  );

  const githubRepos = await fetchAllRepos(GITHUB_USER);
  let updated = 0;
  let added = 0;

  for (const repo of githubRepos) {
    if (repo.fork) continue;

    const key = repo.name.toLowerCase();
    const hasTopic = repo.topics?.includes(PORTFOLIO_TOPIC);
    const existingProject = byRepoName.get(key);

    if (!existingProject && !hasTopic) continue;

    const homepage = repo.homepage?.trim() || undefined;
    const demoUrl = homepage && homepage.length > 0 ? homepage : undefined;

    if (existingProject) {
      existingProject.name = repo.name.replace(/-/g, " ");
      if (repo.description) existingProject.description = repo.description;
      existingProject.url_gh = repo.html_url;
      if (demoUrl) existingProject.url = demoUrl;
      updated += 1;
      continue;
    }

    const newProject = {
      id: nextId(existing),
      name: repo.name.replace(/-/g, " "),
      description: repo.description ?? "Sem descrição.",
      url_gh: repo.html_url,
      image: defaultImage(GITHUB_USER, repo.name),
    };

    if (demoUrl) newProject.url = demoUrl;

    existing.push(newProject);
    byRepoName.set(key, newProject);
    added += 1;
  }

  existing.sort((a, b) => a.id - b.id);
  writeFileSync(PROJECTS_FILE, `${JSON.stringify(existing, null, 2)}\n`);

  console.log(`Sync concluído: ${updated} atualizado(s), ${added} adicionado(s).`);
  console.log(`Arquivo: ${PROJECTS_FILE}`);
  console.log(`Dica: adicione o topic "${PORTFOLIO_TOPIC}" no GitHub para incluir novos repos automaticamente.`);
}

syncProjects().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
