import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <span className="nav-brand-glow">ViteReact</span>
      </Link>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/page1" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Page 1
        </NavLink>
      </div>
    </nav>
  );
}
