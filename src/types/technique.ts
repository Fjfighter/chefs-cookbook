export interface TechniqueFormulaLink {
  order: number;
  formula: string;
  cardId: string;
}

export interface JustinAdaptation {
  preference: string;
  how: string;
}

export interface Technique {
  id: string;
  slug: string;
  title: string;
  cuisine: string;
  source: string | null;
  creator: string;
  tags: string[];
  whenToUse: string;
  justinNotes: string;
  formula: string;
  summary: string;
  steps: string[];
  exampleIngredients: string[];
  chefNotes: string[];
  justinAdaptations: JustinAdaptation[];
  isOverview: boolean;
  relatedTechniques: string[];
  formulas: TechniqueFormulaLink[];
  frameworks: string[];
}
