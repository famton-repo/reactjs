import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
