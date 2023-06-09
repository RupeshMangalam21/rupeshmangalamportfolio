import React, { useState, useEffect } from 'react';
import '../Styles/HomePage.css';
import SkillsSection from '../Components/SkillsSection';
import EducationSection from '../Components/EducationSection';
import ProjectsSection from '../Components/ProjectsSection';
import TopIntroSection from '../Components/TopIntroSection';
import Links from '../Components/Links';

const HomePage: React.FC = () => {
  const [gradientPosition, setGradientPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setGradientPosition({
      x: event.clientX,
      y: event.clientY + window.pageYOffset, // Adjust for scroll position
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='main-cont'
      style={{
        background: `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <Links />
      <TopIntroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
