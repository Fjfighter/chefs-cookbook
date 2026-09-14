import type { Recipe, RecipeStatus } from '../types/recipe';
import recipesData from '../data/recipes.json' with { type: 'json' };
import recipesExtra1 from '../data/recipes-extra1.json' with { type: 'json' };
import recipesExtra1b from '../data/recipes-extra1b.json' with { type: 'json' };
import recipesExtra2 from '../data/recipes-extra2.json' with { type: 'json' };

function mergeRecipesBySlug(...lists: Recipe[][]): Recipe[] {
  const bySlug = new Map<string, Recipe>();
  for (const list of lists) {
    for (const recipe of list) {
      const key = recipe.slug || recipe.id;
      if (!bySlug.has(key)) bySlug.set(key, recipe);
    }
  }
  return Array.from(bySlug.values());
}

export const allRecipes = mergeRecipesBySlug(
  recipesData as Recipe[],
  recipesExtra1 as Recipe[],
  recipesExtra1b as Recipe[],
  recipesExtra2 as Recipe[]
);

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find((r) => r.slug === slug || r.id === slug);
}

export function getRecipeImageUrl(image: string): string {
  if (/^https?:\/\//.test(image)) return image;
  const normalized = image.startsWith('/') ? image.slice(1) : image;
  return `${import.meta.env.BASE_URL}${normalized}`;
}

export function getAllTags(recipes: Recipe[] = allRecipes): string[] {
  const set = new Set<string>();
  recipes.forEach((r) => r.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function filterRecipes(
  recipes: Recipe[],
  opts: { query?: string; status?: RecipeStatus | 'all'; tag?: string | 'all' }
): Recipe[] {
  const q = (opts.query || '').trim().toLowerCase();
  return recipes.filter((r) => {
    if (opts.status && opts.status !== 'all' && r.status !== opts.status) return false;
    if (opts.tag && opts.tag !== 'all' && !r.tags.includes(opts.tag)) return false;
    if (!q) return true;
    const hay = [
      r.title,
      r.summary,
      r.creator,
      ...r.tags,
      ...r.ingredients.flatMap((s) => s.items),
    ]
      .join(' ')
      .toLowerCase();
    return hay.includes(q);
  });
}

export function statusCounts(recipes: Recipe[] = allRecipes) {
  return {
    wishlist: recipes.filter((r) => r.status === 'wishlist').length,
    tried: recipes.filter((r) => r.status === 'tried').length,
    inbox: recipes.filter((r) => r.status === 'inbox').length,
    total: recipes.length,
  };
}

export function avgProtein(recipes: Recipe[] = allRecipes): number {
  if (!recipes.length) return 0;
  const sum = recipes.reduce((a, r) => a + r.nutritionPerServing.proteinG, 0);
  return Math.round((sum / recipes.length) * 10) / 10;
}

export function avgMacros(recipes: Recipe[] = allRecipes) {
  if (!recipes.length) return { proteinG: 0, carbsG: 0, fatG: 0, fiberG: 0, calories: 0 };
  const n = recipes.length;
  const sum = recipes.reduce(
    (a, r) => ({
      proteinG: a.proteinG + r.nutritionPerServing.proteinG,
      carbsG: a.carbsG + r.nutritionPerServing.carbsG,
      fatG: a.fatG + r.nutritionPerServing.fatG,
      fiberG: a.fiberG + r.nutritionPerServing.fiberG,
      calories: a.calories + r.nutritionPerServing.calories,
    }),
    { proteinG: 0, carbsG: 0, fatG: 0, fiberG: 0, calories: 0 }
  );
  return {
    proteinG: Math.round(sum.proteinG / n),
    carbsG: Math.round(sum.carbsG / n),
    fatG: Math.round(sum.fatG / n),
    fiberG: Math.round(sum.fiberG / n),
    calories: Math.round(sum.calories / n),
  };
}

export function tagPopularity(recipes: Recipe[] = allRecipes) {
  const map = new Map<string, number>();
  recipes.forEach((r) => r.tags.forEach((t) => map.set(t, (map.get(t) || 0) + 1)));
  return Array.from(map.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

export function ratingTrends(recipes: Recipe[] = allRecipes) {
  return recipes
    .filter((r) => r.rating != null && r.dateTried)
    .map((r) => ({
      name: r.title.length > 22 ? r.title.slice(0, 20) + '…' : r.title,
      fullName: r.title,
      rating: r.rating as number,
      date: r.dateTried as string,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function formatStars(rating: number | null): string {
  if (rating == null) return '';
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + ` ${rating}`;
}
