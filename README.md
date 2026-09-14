# Chef's Cookbook

Justin's recipe archive — browse, filter, nutrition estimates, dashboard charts, **Techniques**, and **Recommendations**.

**Repository:** https://github.com/Fjfighter/chefs-cookbook  
**Live site (GitHub Pages):** https://fjfighter.github.io/chefs-cookbook/

## Stack

- Vite + React + TypeScript + React Router
- Recharts
- Data (mirrored in `public/data/` and `src/data/`):
  - `recipes.json` — archive recipes + samples
  - `techniques.json` — cooking techniques library
  - `recommendations.json` — recommendation feed (optional)

## Run locally

```bash
npm install
npm run dev
```

Open **http://127.0.0.1:5173**. Vite listens on `0.0.0.0:5173` by default (`vite.config.ts`).

For GitHub Pages project hosting, the app uses Vite `base: '/chefs-cookbook/'` and React Router `basename="/chefs-cookbook"`.

## Features

- **Browse / Recipe detail** — tags, status, nutrition panel
- **Dashboard** — rating charts (samples keep a rated point)
- **Techniques** — technique cards + detail pages (`TechniquesPage`, `TechniqueDetailPage`)
- **Recommendations** — recommendation feed page

## Deploy

Pushes to `main` run `.github/workflows/deploy-pages.yml` (build + GitHub Pages).

One-time setup if Pages is not already wired: **Settings → Pages → Source = GitHub Actions**.

## Recipes

Synced from the markdown library (`recipes/library/*.md`). Includes:

- Real archive: pizza dough, Hawaiian pizza, BBQ honey chicken pizza, beef chow fun, peanut cucumber chicken salad, chicken sausage rice pot, spaghetti smashed meatballs, crockpot creamy chicken pasta
- Samples (kept for dashboard charts): Mild Chicken Teriyaki Bowls, Garlic Chicken Protein Noodles (`isSample: true`)

## Flavor profile

No spice · high protein · lower carb/cal · stevia / monk fruit / 0-sugar syrup · pasta, chicken, noodles · Japanese/Asian-inspired

## Archive sync

Markdown source of truth lives in the local `recipes/` library. Re-sync into `recipes.json` when new entries are recipeized.
