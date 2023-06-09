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
        <li><SiReact className="skill-icon" /> React</li>
        <li><SiHtml5 className="skill-icon" /> HTML</li>
        <li><SiCss3 className="skill-icon" /> CSS</li>
        <li><SiJavascript className="skill-icon" /> JavaScript</li>
        <li><SiGit className="skill-icon" /> Git</li>
        <li><SiGithub className="skill-icon" /> Github</li>
        <li><SiFirebase className="skill-icon" /> Firebase</li>
        <li><AiOutlineApi className="skill-icon" /> API</li>
        <li><FiLayers className="skill-icon" /> Prompt Engineering</li>
      </ul>
    </div>
  );
};

export default SkillsSection;
