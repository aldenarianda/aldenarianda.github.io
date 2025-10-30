import React from 'react';
import './SplashScreen.css';

function SplashScreen({ visible }) {
  return visible ? (
    <div className="splash">
      <span className="splash-text-main">Hello, I’m Alden</span>
      <span className="splash-text-sub">Welcome to my portfolio</span>
    </div>
  ) : null;
}

export default SplashScreen;
