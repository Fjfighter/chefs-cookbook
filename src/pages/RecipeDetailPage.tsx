import { Link, useParams } from 'react-router-dom';
import NutritionPanel from '../components/NutritionPanel';
import { formatStars, getRecipeBySlug, getRecipeImageUrl } from '../utils/recipes';

export default function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;

  if (!recipe) {
    return (
      <div className="empty-state">
        <h3>Recipe not found</h3>
        <p>
          That slug isn’t in the archive.{' '}
          <Link to="/">Back to recipes</Link>
        </p>
      </div>
    );
  }

  const imageSrc = getRecipeImageUrl(recipe.image);

  return (
    <>
      <Link to="/" className="back-link">
        ← All recipes
      </Link>

      <div className="detail-layout">
        <div className="detail-main">
          <figure className="recipe-hero-photo">
            <img src={imageSrc} alt={recipe.title} />
            {recipe.imageCredit && (
              <figcaption>
                Reference photo:{' '}
                {recipe.imageSource ? (
                  <a href={recipe.imageSource} target="_blank" rel="noopener noreferrer">
                    {recipe.imageCredit}
                  </a>
                ) : (
                  recipe.imageCredit
                )}
              </figcaption>
            )}
          </figure>

          <header className="detail-header">
            <div className="badges">
              <span className={`badge badge-${recipe.status}`}>{recipe.status}</span>
              {recipe.isSample && <span className="badge badge-sample">Sample</span>}
              {recipe.justinAdaptations && (
                <span className="badge badge-adapt">Justin cut</span>
              )}
              {recipe.rating != null && (
                <span className="badge badge-tried rating-stars">
                  {formatStars(recipe.rating)}
                </span>
              )}
            </div>
            <h1>{recipe.title}</h1>
            <p className="detail-summary">{recipe.summary}</p>
            <div className="meta-row">
              {recipe.tags.map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                </span>
              ))}
            </div>
          </header>

          {recipe.whyItFits.length > 0 && (
            <section className="panel">
              <h2>Why it fits</h2>
              <ul className="why-list">
                {recipe.whyItFits.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="panel">
            <h2>Ingredients</h2>
            {recipe.ingredients.map((sec) => (
              <div key={sec.section}>
                <h3>{sec.section}</h3>
                <ul>
                  {sec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="panel">
            <h2>Steps</h2>
            <ol className="steps-list">
              {recipe.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          {recipe.substitutions.length > 0 && (
            <section className="panel">
              <h2>Substitutions (Justin kit)</h2>
              <ul>
                {recipe.substitutions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          )}

          {recipe.notes.length > 0 && (
            <section className="panel">
              <h2>Notes</h2>
              <ul>
                {recipe.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="sidebar-sticky">
          <NutritionPanel nutrition={recipe.nutritionPerServing} />

          <div className="panel">
            <h2>Source</h2>
            <div className="source-links">
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                {recipe.creator}
                {recipe.sourceType ? ` · ${recipe.sourceType}` : ''}
              </span>
              {recipe.source && (
                <a href={recipe.source} target="_blank" rel="noopener noreferrer">
                  Original source ↗
                </a>
              )}
              {recipe.sourceBlog && (
                <a href={recipe.sourceBlog} target="_blank" rel="noopener noreferrer">
                  Blog write-up ↗
                </a>
              )}
              {!recipe.source && !recipe.sourceBlog && (
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {recipe.isSample ? 'Sample placeholder — no external source.' : 'No link saved yet.'}
                </span>
              )}
            </div>
            <div className="meta-row" style={{ marginTop: '0.9rem' }}>
              <span className="tag-chip">Added {recipe.dateAdded}</span>
              {recipe.dateTried && (
                <span className="tag-chip">Tried {recipe.dateTried}</span>
              )}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
