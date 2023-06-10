import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, demoUrl, codeUrl }) => {
  return (
    <div className="project-card">
      <img className="project-card-image" src={imageUrl} alt={title} />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-links">
          <a className="project-card-link" href={demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a className="project-card-link" href={codeUrl} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
