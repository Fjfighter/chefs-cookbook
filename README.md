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

The public site is deployed at **https://fjfighter.github.io/chefs-cookbook/**.

Every push to `main` runs `.github/workflows/deploy-pages.yml`:

1. installs dependencies with `npm ci` using the committed `package-lock.json`
2. builds the Vite app with `npm run build`
3. uploads `dist/` and deploys it with `actions/deploy-pages`

For GitHub Pages project hosting, the app uses Vite `base: '/chefs-cookbook/'` and React Router `basename="/chefs-cookbook"`. The build also copies `dist/index.html` to `dist/404.html` so direct links to app routes load the SPA fallback.

Pages source is set to **GitHub Actions** (enabled 2026-09-14).

## Seed recipes

1. **Crockpot Creamy Chicken Pasta (Justin cut)** — real archive recipe (`wishlist`)
2. **Mild Chicken Teriyaki Bowls** — sample placeholder (`wishlist`)
3. **Garlic Chicken Protein Noodles** — sample, tried + rated 4.5

## Flavor profile

No spice · high protein · lower carb/cal · stevia / monk fruit / 0-sugar syrup · pasta, chicken, noodles · Japanese/Asian-inspired

## Archive sync

Markdown source of truth can live alongside this app (e.g. a local `recipes/` library). Update `recipes.json` when new entries are recipeized.
