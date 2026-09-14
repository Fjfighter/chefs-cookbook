/**
 * Recommendation schema (future JSON entries in recommendations.json):
 * {
 *   id: string;
 *   slug: string;
 *   title: string;
 *   date: string;                 // ISO date suggested
 *   summary: string;
 *   techniqueIds: string[];       // links to techniques/*.id
 *   ingredientsOnHand: string[];
 *   steps: string[];
 *   justinAdaptations: string[];  // mild / HP / LC notes applied
 *   tags: string[];
 *   status?: 'suggested' | 'cooked' | 'promoted';
 * }
 *
 * Lane: Chef fridge-haul / ask-Chef suggestions — not viral library.
 * Populate public/data/recommendations.json (and src/data mirror) when entries land.
 */
export interface Recommendation {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  techniqueIds: string[];
  ingredientsOnHand: string[];
  steps: string[];
  justinAdaptations: string[];
  tags: string[];
  status?: 'suggested' | 'cooked' | 'promoted';
}
