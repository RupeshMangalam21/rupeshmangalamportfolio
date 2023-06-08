import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Links.css';

const Links: React.FC = () => {
  return (
    <div className="hOvuuP">
      <ul className="dVLQAC">
        <li>
          <a href="https://github.com/bchiang7" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bchiang7" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bchiang7" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bchiang7" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/bchiang7" aria-label="Codepen" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCodepen} className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
