import { Link, useParams } from 'react-router-dom';
import { getTechniqueById, getTechniqueTitle } from '../utils/techniques';

export default function TechniqueDetailPage() {
  const { id } = useParams<{ id: string }>();
  const technique = id ? getTechniqueById(id) : undefined;

  if (!technique) {
    return (
      <div className="empty-state">
        <h3>Technique not found</h3>
        <p>
          That card isn’t in the archive.{' '}
          <Link to="/techniques">Back to techniques</Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <Link to="/techniques" className="back-link">
        ← All techniques
      </Link>

      <div className="detail-layout">
        <div className="detail-main">
          <header className="detail-header">
            <div className="badges">
              <span className="badge badge-adapt">{technique.cuisine || 'skill'}</span>
              {technique.isOverview && <span className="badge badge-sample">Overview</span>}
            </div>
            <h1>{technique.title}</h1>
            {technique.formula && (
              <p className="formula-banner">{technique.formula}</p>
            )}
            <p className="detail-summary">{technique.whenToUse}</p>
            <div className="meta-row">
              {technique.tags.map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                </span>
              ))}
            </div>
          </header>

          {technique.formulas.length > 0 && (
            <section className="panel">
              <h2>The 5 formulas</h2>
              <ol className="steps-list">
                {technique.formulas.map((f) => (
                  <li key={f.cardId}>
                    <Link to={`/techniques/${f.cardId}`}>{f.formula}</Link>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {technique.frameworks.length > 0 && (
            <section className="panel">
              <h2>Cross-cutting frameworks</h2>
              <ul className="why-list">
                {technique.frameworks.map((fw) => (
                  <li key={fw}>{fw}</li>
                ))}
              </ul>
            </section>
          )}

          {technique.steps.length > 0 && (
            <section className="panel">
              <h2>Steps</h2>
              <ol className="steps-list">
                {technique.steps.map((step) => (
                  <li key={step}>{step.replace(/^\d+\.\s*/, '')}</li>
                ))}
              </ol>
            </section>
          )}

          {technique.exampleIngredients.length > 0 && (
            <section className="panel">
              <h2>Example ingredients</h2>
              <ul>
                {technique.exampleIngredients.map((item) => (
                  <li key={item}>{item.replace(/\*\*/g, '')}</li>
                ))}
              </ul>
            </section>
          )}

          {technique.chefNotes.length > 0 && (
            <section className="panel">
              <h2>How Chef uses this</h2>
              <ul>
                {technique.chefNotes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </section>
          )}

          {technique.justinAdaptations.length > 0 && (
            <section className="panel">
              <h2>Justin adaptations</h2>
              <ul className="why-list">
                {technique.justinAdaptations.map((a) => (
                  <li key={a.preference}>
                    <strong style={{ color: 'var(--accent-strong)' }}>{a.preference}:</strong>{' '}
                    {a.how}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {technique.relatedTechniques.length > 0 && !technique.isOverview && (
            <section className="panel">
              <h2>Related</h2>
              <div className="meta-row">
                {technique.relatedTechniques.map((rid) => (
                  <Link key={rid} to={`/techniques/${rid}`} className="tag-chip" style={{ color: 'var(--accent-strong)' }}>
                    {getTechniqueTitle(rid)}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="sidebar-sticky">
          <div className="panel">
            <h2>Justin notes</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              {technique.justinNotes || 'No preference notes yet.'}
            </p>
          </div>

          <div className="panel">
            <h2>Source</h2>
            <div className="source-links">
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                {technique.creator}
                {technique.cuisine ? ` · ${technique.cuisine}` : ''}
              </span>
              {technique.source && (
                <a href={technique.source} target="_blank" rel="noopener noreferrer">
                  Original source ↗
                </a>
              )}
            </div>
          </div>

          <div className="panel">
            <h2>Next</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              Turn fridge ingredients into a dish with this formula.
            </p>
            <Link to="/recommendations">Open Recommendations →</Link>
          </div>
        </aside>
      </div>
    </>
  );
}
