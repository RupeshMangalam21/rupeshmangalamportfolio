import React from 'react';
import '../Styles/ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>Description: Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Description: consectetur adipiscing elit.</p>
        </li>
        {/* Add more projects */}
      </ul>
    </div>
  );
};

export default ProjectsSection;
