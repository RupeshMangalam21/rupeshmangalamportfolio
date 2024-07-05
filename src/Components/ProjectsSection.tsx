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
      title: 'Developer Portfolio',
      description: 'A Personal Portfolio Website made with React and Typescript.',
      imageUrl: 'https://i.postimg.cc/RZJrdTbh/portfoliowebsite.png',
      demoUrl: 'https://e-healthcare-management-system-avah.vercel.app/',
      codeUrl: 'https://github.com/RupeshMangalam21/rupeshmangalamportfolio',
    },
    {
      title: 'INDRA - CloudBurst Prediction Model',
      description: 'Ensemble Models for cloudburst Prediction',
      imageUrl: 'https://i.postimg.cc/TPhgmJmh/Screenshot-171.png',
      demoUrl: 'https://e-healthcare-management-system-avah.vercel.app/',
      codeUrl: 'https://github.com/RupeshMangalam21/rupeshmangalamportfolio',
    },
    {
      title: 'Sweet Addictions - Online Bakery Store',
      description: 'Online Store for a Local Bakery run by Students',
      imageUrl: 'https://i.postimg.cc/Y9dSx5HH/Screenshot-172.png',
      demoUrl: 'https://e-healthcare-management-system-avah.vercel.app/',
      codeUrl: 'https://github.com/RupeshMangalam21/rupeshmangalamportfolio',
    },
    {
      title: 'BharatAgro - Agricultural Produce Tracking Solution',
      description: 'Mobile Application for Market Condition Backed Estimation for Crop Production Tracking',
      imageUrl: 'https://i.postimg.cc/902Dxd4d/Bharat-Agro.png',
      demoUrl: 'https://e-healthcare-management-system-avah.vercel.app/',
      codeUrl: 'https://github.com/RupeshMangalam21/rupeshmangalamportfolio',
    },
    {
      title: 'KickX - Luxury Shoe Store for Authentic Sneakers',
      description: 'Authenticity Verification Solution For Limited Edition Products',
      imageUrl: 'https://i.postimg.cc/BQFc6p3g/Screenshot-174.png',
      demoUrl: 'https://e-healthcare-management-system-avah.vercel.app/',
      codeUrl: 'https://github.com/RupeshMangalam21/rupeshmangalamportfolio',
    },
    //
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
