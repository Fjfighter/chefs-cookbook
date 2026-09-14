import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-inner">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <div className="brand-mark" aria-hidden>🍽️</div>
            <div className="brand-text">
              <h1>Chef's Cookbook</h1>
              <p>Justin's recipe archive</p>
            </div>
          </NavLink>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          <ul className={`nav-links ${open ? 'open' : ''}`}>
            <li>
              <NavLink to="/" end onClick={() => setOpen(false)}>
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          Chef's Cookbook · local archive · mild · high-protein · lower-carb
        </div>
      </footer>
    </div>
  );
}
