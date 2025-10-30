import React, { useEffect, useState } from 'react';

const Home = ({ animateFrom }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`page-container home-page ${animateFrom === 'bottom' ? 'home-dropup' : 'home-dropdown'}${show ? ' home-dropup-animate' : ''}`}
    >
      <h1>Home</h1>
      <p>Selamat datang di portfolio saya!</p>
    </div>
  );
};

export default Home;
