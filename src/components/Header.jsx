import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [highlightLogo, setHighlightLogo] = useState(false);

  useEffect(() => {
    // Trigger the logo highlight animation
    const timer = setTimeout(() => setHighlightLogo(true), 300); // Delay for 0.3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <a href="/">
        <img
          src="/assets/Rj_logo.png"
          alt="RJC Logo"
          className={`logo ${highlightLogo ? 'highlighted' : ''}`}
        />
      </a>
      <div className="title-container">
        <h1 className="header-title">
          <span className="typing-text">
            INFORMATION TECHNOLOGY DEPARTMENT
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
