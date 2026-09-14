import { useMemo, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import type { RecipeStatus } from '../types/recipe';
import { allRecipes, filterRecipes, getAllTags } from '../utils/recipes';

type StatusFilter = RecipeStatus | 'all';

export default function BrowsePage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<StatusFilter>('all');
  const [tag, setTag] = useState<string>('all');
  const tags = useMemo(() => getAllTags(), []);

  const filtered = useMemo(
    () => filterRecipes(allRecipes, { query, status, tag }),
    [query, status, tag]
  );

  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">Browse</span>
        <h2>Recipes</h2>
        <p>
          Mild, high-protein, lower-carb favorites — chicken, pasta, noodles, and
          Asian-inspired weeknight wins. Search, filter by status or tag.
        </p>
      </div>

      <div className="toolbar">
        <div className="search-wrap">
          <span className="search-icon" aria-hidden>
            ⌕
          </span>
          <input
            type="search"
            placeholder="Search recipes, ingredients, tags…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search recipes"
          />
        </div>

        <div className="filter-pills" role="group" aria-label="Status filter">
          {(['all', 'wishlist', 'tried', 'inbox'] as StatusFilter[]).map((s) => (
            <button
              key={s}
              type="button"
              className={`pill ${status === s ? 'active' : ''}`}
              onClick={() => setStatus(s)}
            >
              {s === 'all' ? 'All' : s}
            </button>
          ))}
        </div>

        <select
          className="tag-select"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          aria-label="Filter by tag"
        >
          <option value="all">All tags</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <h3>No recipes match</h3>
          <p>
            Try clearing filters — or drop a link in the archive inbox. Justin’s
            lane: no spice, high protein, lower carb/cal, sweeteners like stevia /
            monk fruit / 0-sugar syrup.
          </p>
        </div>
      ) : (
        <div className="recipe-grid">
          {filtered.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </>
  );
}
