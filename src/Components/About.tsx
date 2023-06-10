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
            As a student, I have been actively working on projects to gain practical experience and enhance my skills in web development. I have a solid foundation in HTML, CSS, and JavaScript, and I'm continuously learning and exploring new technologies. I have hands-on experience with frontend frameworks like React and languages like Typescript, which I have utilized in personal projects to build dynamic and interactive user interfaces.
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
