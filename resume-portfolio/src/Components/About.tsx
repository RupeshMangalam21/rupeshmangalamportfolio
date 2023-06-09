import React from 'react';
import '../Styles/About.css';
import vectorImage from '../Assets/images/programmerimg2.svg';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-heading">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with a strong focus on frontend technologies. I love building
              user-friendly and visually appealing websites that deliver great user experiences.
            </p>
            <p>
              With several years of experience in the industry, I have honed my skills in HTML, CSS, and
              JavaScript, and I'm proficient in various frontend frameworks like React and Vue.js.
            </p>
          </div>
          <div className="about-vector">
            <img src={vectorImage} alt="Vector" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
