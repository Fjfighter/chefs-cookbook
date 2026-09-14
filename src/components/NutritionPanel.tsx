import type { NutritionPerServing } from '../types/recipe';

export default function NutritionPanel({ nutrition }: { nutrition: NutritionPerServing }) {
  return (
    <div className="nutrition-label" aria-label="Nutrition facts estimate">
      <div className="nl-est">Estimate</div>
      <div className="nl-title">Nutrition Facts</div>
      <div className="nl-servings">
        Per serving · about {nutrition.servings} servings per recipe
      </div>
      <div className="nl-row cal thick">
        <span>Calories</span>
        <span>{nutrition.calories}</span>
      </div>
      <div className="nl-row">
        <strong>Total Fat</strong>
        <strong>{nutrition.fatG}g</strong>
      </div>
      <div className="nl-row">
        <strong>Total Carbohydrate</strong>
        <strong>{nutrition.carbsG}g</strong>
      </div>
      <div className="nl-row nl-indent">
        <span>Dietary Fiber</span>
        <span>{nutrition.fiberG}g</span>
      </div>
      <div className="nl-row thick">
        <strong>Protein</strong>
        <strong>{nutrition.proteinG}g</strong>
      </div>
      <p className="nl-note">{nutrition.notes}</p>
    </div>
  );
}
