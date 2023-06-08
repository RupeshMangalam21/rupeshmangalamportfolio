import React from 'react';
import '../Styles/HomePage.css';
import SkillsSection from '../Components/SkillsSection';
import EducationSection from '../Components/EducationSection';
import ProjectsSection from '../Components/ProjectsSection';
import TopIntroSection from '../Components/TopIntroSection';
import Links from '../Components/Links'

const HomePage: React.FC = () => {
  return (
    
    <div className='main-cont'>
      <Links />
      <TopIntroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
