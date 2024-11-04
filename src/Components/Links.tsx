import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '../Styles/Links.css';

const Links: React.FC = () => {
  return (
    <div className="hOvuuP">
      <ul className="dVLQAC">
        <li>
          <a href="https://github.com/RupeshMangalam21" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub as IconProp} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/levixin_" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram as IconProp} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter as IconProp} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/code404/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin as IconProp} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/" aria-label="Codepen" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCodepen as IconProp} className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
