import type { Technique } from '../types/technique';
import techniquesData from '../data/techniques.json' with { type: 'json' };

export const allTechniques = techniquesData as Technique[];

export function getTechniqueById(id: string): Technique | undefined {
  return allTechniques.find((t) => t.id === id || t.slug === id);
}

export function getTechniqueTitle(id: string): string {
  return getTechniqueById(id)?.title ?? id;
}
