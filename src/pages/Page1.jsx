export default function Page1() {
  return (
    <main className="hero-content">
      <h1 className="title">Discover Page 1</h1>
      <p className="subtitle" style={{ maxWidth: '800px' }}>
        This is a demonstration of routing with react-router-dom, seamlessly navigating
        between pages without full page reloads.
      </p>

      <div className="card-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px' }}>
        <div className="feature-card" style={{ animationDelay: '0.2s' }}>
          <div className="feature-icon">🌐</div>
          <h2 className="feature-title">Flexible Architecture</h2>
          <p>
            By adding a Navigation Bar and incorporating multiple pages, the application
            gains scalability. More pages and complex flows can be integrated with ease.
          </p>
        </div>
      </div>
    </main>
  );
}
