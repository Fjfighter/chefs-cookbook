import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import BrowsePage from './pages/BrowsePage';
import DashboardPage from './pages/DashboardPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import RecommendationsPage from './pages/RecommendationsPage';
import TechniqueDetailPage from './pages/TechniqueDetailPage';
import TechniquesPage from './pages/TechniquesPage';

export default function App() {
  return (
    <BrowserRouter basename="/chefs-cookbook">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<BrowsePage />} />
          <Route path="recipe/:slug" element={<RecipeDetailPage />} />
          <Route path="techniques" element={<TechniquesPage />} />
          <Route path="techniques/:id" element={<TechniqueDetailPage />} />
          <Route path="recommendations" element={<RecommendationsPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
