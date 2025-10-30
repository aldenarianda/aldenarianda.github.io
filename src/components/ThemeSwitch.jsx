import React from 'react';
import './ThemeSwitch.css';

function ThemeSwitch({ dark, setDark }) {
  return (
    <div className="theme-switch-wrapper">
      <span className={dark ? 'theme-inactive' : 'theme-active'}>Light</span>
      <button
        className={"theme-switch" + (dark ? " theme-switch-dark" : "")}
        aria-label="Toggle dark/light mode"
        onClick={() => setDark(d => !d)}
      >
        <span className="switch-thumb" />
      </button>
      <span className={dark ? 'theme-active' : 'theme-inactive'}>Dark</span>
    </div>
  );
}

export default ThemeSwitch;
