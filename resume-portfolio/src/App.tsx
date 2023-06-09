import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import './Loading.css';
import loadimg from './Assets/images/icons8-r-96 (1).png'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false to hide the loading animation
    }, 2000); // Replace this with your actual loading time or API request
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Animation complete, do any cleanup if necessary
      return;
    }

    // Animate the loading octagon
    const octagon = document.getElementById('loading-octagon');
    if (octagon) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(octagon, { rotation: '+=360', duration: 2, ease: 'linear' });
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen">
          <svg id="loading-octagon" className="loading-octagon" viewBox="0 0 50 50">
            <polygon points="15 5 35 5 45 15 45 35 35 45 15 45 5 35 5 15" stroke="#64ffda" strokeWidth="2" fill="transparent" />
          </svg>
          <img src={loadimg} alt="R" className="loading-image" />
        </div>
      ) : (
        // Render your content when loading is complete
        <div>
          <Navbar />
          <HomePage />
        </div>
      )}
    </div>
  );
};

export default App;
