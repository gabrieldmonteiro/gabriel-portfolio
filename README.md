# Portfolio — Gabriel D. Monteiro

Site portfolio profissional baseado no currículo, construído com React, TypeScript e Tailwind CSS.

## Seções

- **Hero** — Apresentação e links principais
- **Sobre** — Resumo profissional
- **Habilidades** — Stack técnica completa
- **Experiência** — Histórico profissional com timeline
- **Projetos** — Galeria com 13 projetos pessoais ([/projects](/projects))
- **Formação** — Educação, certificações e idiomas
- **Contato** — Email, LinkedIn e GitHub

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build para produção

```bash
npm run build
npm run preview
```

## Projetos (dinâmico)

A página `/projects` carrega os dados em runtime a partir de `public/projects.json` — sem alterar código TypeScript.

### Adicionar manualmente

Edite `public/projects.json` e inclua um novo objeto:

```json
{
  "id": 13,
  "name": "Meu Novo Projeto",
  "description": "Breve descrição do projeto.",
  "url": "https://demo-opcional.vercel.app",
  "url_gh": "https://github.com/gabrieldmonteiro/meu-projeto",
  "image": "https://raw.githubusercontent.com/.../screenshot.png"
}
```

Projetos com `id` maior aparecem primeiro na página.

### Sincronizar com o GitHub

Para puxar repos automaticamente da sua conta:

```bash
npm run sync:projects
```

O script:
- Atualiza nome, descrição, demo (`homepage`) e link dos projetos já listados
- **Adiciona repos novos** que tenham o topic `portfolio` no GitHub

Para incluir um repo novo no sync, adicione o topic `portfolio` em **Settings → Topics** do repositório no GitHub.

Variáveis opcionais:

```bash
GITHUB_USER=gabrieldmonteiro PORTFOLIO_TOPIC=portfolio npm run sync:projects
```

## Arquitetura (manutenção)

```
src/
├── components/          # UI por seção (Hero, About, Skills…)
│   ├── icons/           # SVGs reutilizáveis (DRY)
│   └── layout/          # Section, SectionHeading, NavLink
├── constants/           # Caminhos de assets estáticos
├── data/                # Dados fixos (contato)
├── hooks/               # useProjects (fetch do JSON)
├── i18n/                # PT/EN — traduções e contexto
│   └── translations/    # pt.ts e en.ts
├── pages/               # HomePage e ProjectsPage
└── types/               # Contratos TypeScript
```

| O que alterar | Onde |
|---------------|------|
| Textos PT/EN | `src/i18n/translations/pt.ts` e `en.ts` |
| Projetos | `public/projects.json` |
| Cores do tema | `src/index.css` (`@theme`) |
| Contato (email, links) | `src/data/profile.ts` |
| Links da navbar | `src/i18n/index.ts` (`navLinks`) |

## Deploy

O conteúdo gerado em `dist/` pode ser publicado em Vercel, Netlify, GitHub Pages ou qualquer host estático.
