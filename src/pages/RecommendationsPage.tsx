import { Link } from 'react-router-dom';
import { allRecommendations } from '../utils/recommendations';
// Schema for future entries: see src/types/recommendation.ts
// recommendations.json is [] until Chef fridge-haul / ask-Chef suggestions land.

export default function RecommendationsPage() {
  const hasEntries = allRecommendations.length > 0;

  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">Chef suggests</span>
        <h2>Recommendations</h2>
        <p>
          Fridge-haul and “make me something” ideas built from{' '}
          <Link to="/techniques">Techniques</Link> plus Justin’s mild /
          high-protein / lower-carb profile — not the viral recipe inbox.
        </p>
      </div>

      {!hasEntries ? (
        <div className="empty-state empty-recs">
          <h3>No recommendations yet</h3>
          <p>
            Ask Chef what’s for dinner, share what’s in the fridge, or request a
            cuisine vibe. Suggestions land here as concrete dishes powered by
            technique cards — promote keepers into the Recipes library when you
            want them saved long-term.
          </p>
          <ul className="empty-hints">
            <li>
              <strong>Fridge haul</strong> — list proteins &amp; veg on hand
            </li>
            <li>
              <strong>Ask Chef</strong> — mood, time, macros, mild only
            </li>
            <li>
              <strong>Techniques first</strong> — formulas → tailored dish
            </li>
          </ul>
          <p style={{ marginTop: '1.25rem' }}>
            <Link to="/techniques">Browse techniques →</Link>
          </p>
        </div>
      ) : (
        <div className="recipe-grid">
          {allRecommendations.map((r) => (
            <Link key={r.id} to={`/recipe/${r.slug}`} className="recipe-card">
              <div className="card-top">
                <div className="badges">
                  <span className="badge badge-tried">{r.status || 'suggested'}</span>
                </div>
              </div>
              <h3>{r.title}</h3>
              <p className="card-summary">{r.summary}</p>
              <div className="card-meta">
                <span>{r.date}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
