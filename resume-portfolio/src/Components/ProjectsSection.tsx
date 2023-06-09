import React from 'react';
import ProjectCard from './ProjectCard';
import '../Styles/ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'AVAH - Healthcare Management System',
      description: 'Ava-H: Advanced Virtual Administration for Healthcare. Web-based E-Healthcare Management System.',
      imageUrl: 'https://i.postimg.cc/B6qvLyZR/Avah-demoimage.png',
      demoUrl: 'https://e-healthcare-management-system-avah.vercel.app/',
      codeUrl: 'https://github.com/RupeshMangalam21/e-healthcare-management-system',
    },
    {
      title: 'Resume Portfolio Website',
      description: 'A Personal Portfolio Website made with React and Typescript.',
      imageUrl: 'https://i.postimg.cc/RZJrdTbh/portfoliowebsite.png',
      demoUrl: 'https://e-healthcare-management-system-avah.vercel.app/',
      codeUrl: 'https://github.com/RupeshMangalam21/rupeshmangalamportfolio',
    },
    // Add more projects
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
