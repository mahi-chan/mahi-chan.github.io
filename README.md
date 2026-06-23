# Mahi — Portfolio

A fast, single-page developer portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.
Warm, neutral, editorial design with a blueprint-grid + drifting-shapes animated background.

## Edit your content

**Everything lives in one file:** [`src/data/profile.ts`](src/data/profile.ts).
Change your name, role, tagline, about, services, experience, skills, projects, languages,
stats and social links there — no component code required.

A few things you'll likely want to set:

- `name` — currently `"Mahi"` (your GitHub has no display name); set your full name + `initials`.
- `email` — currently your academic address; change if you prefer another.
- `socials` — add your **LinkedIn** (an example line is commented in).
- `experience` — refine the exact dates/details.
- `resumeUrl` — add a link to show a "Résumé" button in the nav.

> Project descriptions were drafted from your repo names (most repos had no description on
> GitHub). Tweak them to taste, or add a description on the repo and re-fetch.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

> Requires Node ≥ 20.19 for the latest Vite, but this project is pinned to **Vite 6** so it
> runs on Node 20.17+ too. CI builds on Node 22.

## Deploy to GitHub Pages

1. Create a repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/mahi-chan/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) builds and
   deploys on every push to `main`.

Asset paths use `base: './'`, so it works whether you deploy to a **user site**
(`mahi-chan.github.io`) or a **project site** (`mahi-chan.github.io/<repo>/`) — no config change needed.
