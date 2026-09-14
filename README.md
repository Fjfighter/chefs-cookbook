# Chef's Cookbook

Justin's recipe archive — browse, filter, nutrition estimates, and dashboard charts.

**Repository:** https://github.com/Fjfighter/chefs-cookbook  
**Live site (GitHub Pages):** https://fjfighter.github.io/chefs-cookbook/

## Stack

- Vite + React + TypeScript + React Router
- Recharts
- Recipe data: `public/data/recipes.json` (also mirrored at `src/data/recipes.json`)

## Run locally

```bash
npm install
npm run dev
```

Open **http://127.0.0.1:5173**. Vite listens on `0.0.0.0:5173` by default (`vite.config.ts`).

For GitHub Pages project hosting, the app uses Vite `base: '/chefs-cookbook/'` and React Router `basename="/chefs-cookbook"`.

## Deploy

Pushes to `main` run `.github/workflows/deploy-pages.yml` (build + GitHub Pages).

One-time setup if Pages is not already wired: **Settings → Pages → Source = GitHub Actions**.

## Seed recipes

1. **Crockpot Creamy Chicken Pasta (Justin cut)** — real archive recipe (`wishlist`)
2. **Mild Chicken Teriyaki Bowls** — sample placeholder (`wishlist`)
3. **Garlic Chicken Protein Noodles** — sample, tried + rated 4.5

## Flavor profile

No spice · high protein · lower carb/cal · stevia / monk fruit / 0-sugar syrup · pasta, chicken, noodles · Japanese/Asian-inspired

## Archive sync

Markdown source of truth can live alongside this app (e.g. a local `recipes/` library). Update `recipes.json` when new entries are recipeized.
