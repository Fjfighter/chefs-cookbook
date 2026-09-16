export type RecipeStatus = 'wishlist' | 'tried' | 'inbox' | 'cook-tonight';

export interface IngredientSection {
  section: string;
  items: string[];
}

export interface NutritionPerServing {
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  fiberG: number;
  servings: number;
  notes: string;
}

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  status: RecipeStatus;
  rating: number | null;
  isSample: boolean;
  image: string;
  imageCredit?: string;
  imageSource?: string;
  source: string | null;
  sourceBlog: string | null;
  sourceType: string;
  creator: string;
  tags: string[];
  dateAdded: string;
  dateTried: string | null;
  summary: string;
  whyItFits: string[];
  ingredients: IngredientSection[];
  steps: string[];
  substitutions: string[];
  justinAdaptations: boolean;
  notes: string[];
  nutritionPerServing: NutritionPerServing;
}
