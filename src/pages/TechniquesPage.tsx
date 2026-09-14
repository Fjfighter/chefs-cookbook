import TechniqueCard from '../components/TechniqueCard';
import { allTechniques } from '../utils/techniques';

export default function TechniquesPage() {
  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">Skills</span>
        <h2>Techniques</h2>
        <p>
          Category formulas Chef uses when improvising — stir-fry paths, eggs,
          braises. Separate from the viral recipe library; pair with fridge hauls
          under Recommendations.
        </p>
      </div>

      {allTechniques.length === 0 ? (
        <div className="empty-state">
          <h3>No techniques yet</h3>
          <p>Technique cards will appear here once the archive is synced.</p>
        </div>
      ) : (
        <div className="recipe-grid">
          {allTechniques.map((t) => (
            <TechniqueCard key={t.id} technique={t} />
          ))}
        </div>
      )}
    </>
  );
}
