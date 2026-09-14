import { Link } from 'react-router-dom';
import type { Technique } from '../types/technique';

export default function TechniqueCard({ technique }: { technique: Technique }) {
  return (
    <Link to={`/techniques/${technique.slug}`} className="recipe-card">
      <div className="card-top">
        <div className="badges">
          <span className="badge badge-adapt">{technique.cuisine || 'skill'}</span>
          {technique.isOverview && <span className="badge badge-sample">Overview</span>}
        </div>
      </div>

      <h3>{technique.title}</h3>
      {technique.formula && (
        <p className="formula-snippet">{technique.formula}</p>
      )}
      <p className="card-summary">{technique.whenToUse || technique.summary}</p>

      <div className="card-tags">
        {technique.tags.slice(0, 4).map((t) => (
          <span key={t} className="tag-chip">
            {t}
          </span>
        ))}
      </div>

      <div className="card-meta">
        <span>{technique.creator || 'Technique'}</span>
        {technique.steps.length > 0 && (
          <span>
            <strong>{technique.steps.length}</strong> steps
          </span>
        )}
        {technique.isOverview && technique.formulas.length > 0 && (
          <span>
            <strong>{technique.formulas.length}</strong> formulas
          </span>
        )}
      </div>
    </Link>
  );
}
