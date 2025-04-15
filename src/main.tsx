import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(prev => !prev)} style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold'
    }}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeToggle/>
    <App />
  </StrictMode>,
)
