import React from 'react';
import '../Styles/Navbar.css';


const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
