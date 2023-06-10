import React from 'react';
import '../Styles/TopIntroSection.css';

const TopIntroSection: React.FC = () => {
  return (
<div>
    <div className='neon-text' >
      <h3>Hi, i am</h3>
    </div>
    <div className='big-heading'>
        <h2>Rupesh Mangalam.</h2>
    </div>
    <div className='big-heading2'>
        <h3>I build things for the web.</h3>
    </div>
    <div>
        <p>I’m a software engineering student specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on a few interesting projects of my own working with emerging and rapidly growing technologies like BCI's and Blockchain. </p>
    </div>
    <div>
    <a className="projects-link" href="https://github.com/RupeshMangalam21?tab=repositories" target="_blank" rel="noopener noreferrer">
      Check out my projects!</a>
    </div>
</div>
  );
};

export default TopIntroSection;
