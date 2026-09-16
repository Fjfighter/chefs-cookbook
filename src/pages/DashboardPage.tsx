import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  allRecipes,
  avgMacros,
  avgProtein,
  ratingTrends,
  statusCounts,
  tagPopularity,
} from '../utils/recipes';

const COLORS = ['#e8a87c', '#8fbc8f', '#d4a84b', '#d4899a', '#7eb6d9', '#c4785a', '#b8a0d0', '#9ccc9c'];
const tooltipStyle = {
  background: '#2a221c',
  border: '1px solid rgba(232,196,160,0.22)',
  borderRadius: 8,
  color: '#f5ebe0',
};

export default function DashboardPage() {
  const counts = statusCounts();
  const macros = avgMacros();
  const protein = avgProtein();
  const tags = tagPopularity();
  const ratings = ratingTrends();

  const statusData = [
    { name: 'Wishlist', value: counts.wishlist, fill: '#d4a84b' },
    { name: 'Cook tonight', value: counts.cookTonight, fill: '#7eb6d9' },
    { name: 'Tried', value: counts.tried, fill: '#8fbc8f' },
    { name: 'Inbox', value: counts.inbox, fill: '#d4899a' },
  ].filter((d) => d.value > 0);

  const macroData = [
    { name: 'Protein', grams: macros.proteinG, fill: '#e8a87c' },
    { name: 'Carbs', grams: macros.carbsG, fill: '#7eb6d9' },
    { name: 'Fat', grams: macros.fatG, fill: '#d4a84b' },
    { name: 'Fiber', grams: macros.fiberG, fill: '#8fbc8f' },
  ];

  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">Insights</span>
        <h2>Dashboard</h2>
        <p>
          Macro averages, tag popularity, and wishlist vs tried — so the archive
          stays oriented around high protein and mild flavor.
        </p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Recipes</div>
          <div className="stat-value">{counts.total}</div>
          <div className="stat-sub">in the archive</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Wishlist</div>
          <div className="stat-value">{counts.wishlist}</div>
          <div className="stat-sub">ready to cook</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Tried</div>
          <div className="stat-value">{counts.tried}</div>
          <div className="stat-sub">cooked + rated</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg protein</div>
          <div className="stat-value">{protein}g</div>
          <div className="stat-sub">per serving est.</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg calories</div>
          <div className="stat-value">{macros.calories}</div>
          <div className="stat-sub">kcal / serving est.</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-panel">
          <h3>Macro distribution (avg g / serving)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={macroData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(232,196,160,0.1)" />
              <XAxis dataKey="name" stroke="#8a7a6c" tick={{ fill: '#b9a899', fontSize: 12 }} />
              <YAxis stroke="#8a7a6c" tick={{ fill: '#b9a899', fontSize: 12 }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="grams" radius={[6, 6, 0, 0]}>
                {macroData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-panel">
          <h3>Wishlist vs tried</h3>
          {statusData.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No status data yet.</p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                >
                  {statusData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ color: '#b9a899', fontSize: 13 }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="chart-panel">
          <h3>Tag popularity</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={tags}
              layout="vertical"
              margin={{ top: 8, right: 16, left: 8, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(232,196,160,0.1)" />
              <XAxis type="number" allowDecimals={false} stroke="#8a7a6c" tick={{ fill: '#b9a899', fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="tag"
                width={90}
                stroke="#8a7a6c"
                tick={{ fill: '#b9a899', fontSize: 11 }}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                {tags.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-panel">
          <h3>Rating trends</h3>
          {ratings.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', paddingTop: '2rem' }}>
              No rated recipes yet — mark a dish as tried and add a score to see
              trends here.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={ratings} margin={{ top: 8, right: 16, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(232,196,160,0.1)" />
                <XAxis dataKey="name" stroke="#8a7a6c" tick={{ fill: '#b9a899', fontSize: 11 }} />
                <YAxis domain={[0, 5]} stroke="#8a7a6c" tick={{ fill: '#b9a899', fontSize: 12 }} />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value) => [`${value} / 5`, 'Rating']}
                  labelFormatter={(_, payload) =>
                    payload?.[0]?.payload?.fullName ?? ''
                  }
                />
                <Line
                  type="monotone"
                  dataKey="rating"
                  stroke="#e8a87c"
                  strokeWidth={2.5}
                  dot={{ fill: '#f0b890', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="about-blurb">
        <h3>Justin’s flavor profile</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Charts stay honest when the archive does — {allRecipes.length} recipes
          seeded so far ({allRecipes.filter((r) => r.isSample).length} samples).
        </p>
        <ul>
          <li>No spice — mild seasoning only</li>
          <li>High protein, lower carb / calories, still tasty</li>
          <li>Sweeteners: stevia, monk fruit, 0-sugar syrup</li>
          <li>Loves pasta, chicken, noodles; Japanese / Asian-inspired</li>
        </ul>
      </div>
    </>
  );
}
