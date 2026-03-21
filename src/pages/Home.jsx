import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="hero-content">
      <h1 className="title">Next-Gen React</h1>
      <p className="subtitle">
        Experience a fluid, premium web interface powered by Vite and designed with modern aesthetics.
      </p>

      <button 
        className="interactive-btn"
        onClick={() => setCount((count) => count + 1)}
      >
        Interactions: {count}
      </button>

      <div className="card-grid">
        <div className="feature-card">
          <div className="feature-icon">⚡️</div>
          <h2 className="feature-title">Lightning Fast</h2>
          <p>Hot Module Replacement (HMR) that stays fast regardless of app size.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h2 className="feature-title">Premium Design</h2>
          <p>Thoughtfully crafted interfaces with micro-animations and dark mode.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h2 className="feature-title">Page Routing</h2>
          <p>Seamlessly navigate through the application using React Router.</p>
        </div>
      </div>
    </main>
  );
}
