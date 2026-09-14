import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">About</span>
        <h2>Chef's Cookbook</h2>
        <p>Justin's local recipe archive — vibe-coded for browsing, macros, and mild high-protein cooking.</p>
      </div>

      <div className="panel" style={{ marginBottom: '1.15rem' }}>
        <h2>What this is</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          A polished local website over the markdown recipe archive at{' '}
          <code style={{ color: 'var(--accent)' }}>/home/box/recipes/</code>. Browse
          cards, open full recipes with ingredients / steps / substitutions, check
          estimated Nutrition Facts, and peek at dashboard charts.
        </p>
      </div>

      <div className="panel" style={{ marginBottom: '1.15rem' }}>
        <h2>Flavor profile</h2>
        <ul>
          <li>No spice — keep it mild</li>
          <li>High protein, lower carb &amp; calories, still flavorful</li>
          <li>Sweeteners: granulated stevia, monk fruit extract, 0-sugar simple syrup</li>
          <li>Favorites: pasta, chicken, noodles; Japanese / Asian-inspired</li>
        </ul>
      </div>

      <div className="panel">
        <h2>Statuses</h2>
        <ul>
          <li>
            <strong style={{ color: 'var(--gold)' }}>Wishlist</strong> — interested, not cooked yet
          </li>
          <li>
            <strong style={{ color: 'var(--sage)' }}>Tried</strong> — cooked + rated
          </li>
          <li>
            <strong style={{ color: 'var(--rose)' }}>Inbox</strong> — raw saves waiting to be recipeized
          </li>
        </ul>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.85rem' }}>
          Sample recipes are clearly badged so real archive entries stay obvious.{' '}
          <Link to="/">Browse recipes →</Link>
        </p>
      </div>
    </>
  );
}
