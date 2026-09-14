import type { Recommendation } from '../types/recommendation';
import recommendationsData from '../data/recommendations.json' with { type: 'json' };

/** Empty for now — schema documented in types/recommendation.ts */
export const allRecommendations = recommendationsData as Recommendation[];
