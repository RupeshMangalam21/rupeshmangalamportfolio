import React from 'react';
import '../Styles/Navbar.css';
import loadimg from '../Assets/images/icons8-r-96 (1).png'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="ihALZY">
      <img src={loadimg} alt="R" className="logo-image" />        
      <ol>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/skills">Education & Certifications</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ol>
        <div>
          <a href="/" className="bttn">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
