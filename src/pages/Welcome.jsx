import { useState, useEffect } from 'react';
import './Welcome.css';

const Welcome = ({ onContinue }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="background-image-container">
        <img src="/food_app_bg.png" alt="Delicious gourmet food background" className="background-image" />
        <div className="background-overlay"></div>
      </div>
      
      <div className="content-wrapper">
        <div className="glass-card">
          <div className="icon-wrapper">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="food-icon"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>
          
          <h1 className="welcome-title">
            Welcome to <span className="highlight">Savor</span>
          </h1>
          
          <p className="welcome-subtitle">
            Discover the best local restaurants and gourmet dishes delivered straight to your door, piping hot and fresh.
          </p>

          <button className="continue-button" onClick={onContinue}>
            <span className="button-text">Explore Menu</span>
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
