import React, { useState, useEffect } from 'react';
import '../Styles/HomePage.css';
import SkillsSection from '../Components/SkillsSection';
import EducationSection from '../Components/EducationSection';
import ProjectsSection from '../Components/ProjectsSection';
import TopIntroSection from '../Components/TopIntroSection';
import About from '../Components/About';
import Links from '../Components/Links';
import Footer from '../Components/Footer';

const HomePage: React.FC = () => {
  const [gradientPosition, setGradientPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    setGradientPosition({
      x: event.clientX,
      y: event.clientY + window.pageYOffset, // Adjust for scroll position
    });
  };

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const aboutSectionOffset = aboutSection.offsetTop;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > aboutSectionOffset);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className='main-cont'
      style={{
        background: `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <Links />
      <div>
        <TopIntroSection />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='skills' style={{ paddingTop: '10px' }}>
        <SkillsSection />
      </div>
      <div id='education' style={{ paddingTop: '10px' }}>
        <EducationSection />
      </div>
      <div id='projects' style={{ paddingTop: '10px' }}>
        <ProjectsSection />
      </div>
      <div className='line-element'>
        <p>rupeshmangalam.work@gmail.com</p>
      </div>
      {showBackToTop && (
        <a href='#top' className='back-to-top' onClick={handleBackToTop}>
          <i className='fas fa-arrow-up'></i>
        </a>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
