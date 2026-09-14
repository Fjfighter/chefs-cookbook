import { Link } from 'react-router-dom';
import type { Recipe } from '../types/recipe';
import { formatStars, getRecipeImageUrl } from '../utils/recipes';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const n = recipe.nutritionPerServing;
  const imageSrc = getRecipeImageUrl(recipe.image);
  return (
    <Link to={`/recipe/${recipe.slug}`} className="recipe-card">
      <img className="recipe-card-image" src={imageSrc} alt={recipe.title} loading="lazy" />

      <div className="card-top">
        <div className="badges">
          <span className={`badge badge-${recipe.status}`}>{recipe.status}</span>
          {recipe.isSample && <span className="badge badge-sample">Sample</span>}
          {recipe.justinAdaptations && (
            <span className="badge badge-adapt">Justin cut</span>
          )}
        </div>
        {recipe.rating != null && (
          <span className="rating-stars" title={`${recipe.rating}/5`}>
            {formatStars(recipe.rating)}
          </span>
        )}
      </div>

      <h3>{recipe.title}</h3>
      <p className="card-summary">{recipe.summary}</p>

      <div className="card-tags">
        {recipe.tags.slice(0, 4).map((t) => (
          <span key={t} className="tag-chip">
            {t}
          </span>
        ))}
      </div>

      <div className="card-meta">
        <div className="macro-mini">
          <span>
            <strong>{n.calories}</strong> kcal
          </span>
          <span>
            <strong>{n.proteinG}g</strong> protein
          </span>
          <span>
            <strong>{n.carbsG}g</strong> carbs
          </span>
        </div>
      </div>
    </Link>
  );
}
