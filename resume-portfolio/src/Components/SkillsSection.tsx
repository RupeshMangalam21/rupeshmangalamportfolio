import React from 'react';
import '../Styles/SkillsSection.css';
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiGit, SiGithub, SiFirebase } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { FiLayers } from 'react-icons/fi';

const SkillsSection: React.FC = () => {
  return (
    <div className='skill'>
      <h2>Skills</h2>
      <ul>
        <li>
          <span className="skill-icon"><SiReact /></span> React
        </li>
        <li>
          <span className="skill-icon"><SiHtml5 /></span> HTML
        </li>
        <li>
          <span className="skill-icon"><SiCss3 /></span> CSS
        </li>
        <li>
          <span className="skill-icon"><SiJavascript /></span> JavaScript
        </li>
        <li>
          <span className="skill-icon"><SiGit /></span> Git
        </li>
        <li>
          <span className="skill-icon"><SiGithub /></span> Github
        </li>
        <li>
          <span className="skill-icon"><SiFirebase /></span> Firebase
        </li>
        <li>
          <span className="skill-icon"><AiOutlineApi /></span> API
        </li>
        <li>
          <span className="skill-icon"><FiLayers /></span> Prompt Engineering
        </li>
      </ul>
    </div>
  );
};

export default SkillsSection;
