export default function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Brand</div>
        <div className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">Settings</a>
          <a href="#">Profile</a>
        </div>
      </nav>
      <main className="main-content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main application view after the beautiful welcome screen.</p>
        <div className="grid">
          <div className="card">
            <h3>Analytics</h3>
            <p>View your statistics here.</p>
          </div>
          <div className="card">
            <h3>Recent Activity</h3>
            <p>Your latest updates and interactions.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
