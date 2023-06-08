import React from 'react';
import '../Styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="ihALZY">
        <h1>RM</h1>
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
      </div>
    </nav>
  );
};

export default Navbar;
