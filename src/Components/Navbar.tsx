import React from 'react';
import '../Styles/Navbar.css';
import loadimg from '../Assets/images/icons8-r-96 (1).png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="ihALZY">
        <div className="logo-container">
          <img src={loadimg} alt="R" className="logo-image" />
          <div className="flicker-effect"></div>
        </div>
        <ol>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education & Certifications</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ol>
        <div>
        <a href="https://docs.google.com/document/d/1eB2Vl1OImnilWrS1epFQdmeAWDQATUxkl4mYyFSnPkI/edit?usp=sharing" className="bttn" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
