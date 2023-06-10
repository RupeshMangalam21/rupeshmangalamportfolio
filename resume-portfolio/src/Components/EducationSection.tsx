import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import ibmLogo from '../Assets/images/icons8-ibm.svg';
import btsLogo from '../Assets/images/icons8-bootstrap.svg';
import '../Styles/EducationSection.css';

const EducationSection: React.FC = () => {
  return (
    <div className='edu'>
      <h2>Education & Certifications</h2>
      <ul className='items-grid'>
        <li className="gJHaRi">
          <div className="items-inner">
            <header style={{ marginBottom: '-95px' }}>
              <div className="items-top">
                <div className="folder">
                <span className="icon-scholar-cap">
                    <FaGraduationCap />
                  </span>
                </div>
                <div className="items-links">
                  {/* Remove the entire <a> element */}
                </div>
              </div>
              <h3 className="items-title">
                <a
                  href="https://coursera.org/share/5cbeaf4900397fd6d2e33fde2013be34"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bachelor Of Engineering - Computer Science
                </a>
              </h3>
              <div className="items-description">
                <p>A Bachelor's Degree In Computer Science Engineering from Chandigarh University, India.</p>
              </div>
            </header>
            <footer>
              <ul className="items-tech-list">
                <li>2021-2025</li>
                <li>Software Engineering</li>
                <li>Fullstack Development</li>
              </ul>
            </footer>
          </div>
        </li>
        <li className="gJHaRi">
          <div className="items-inner">
            <header style={{ marginBottom: '-95px' }}>
              <div className="items-top">
                <div className="folder">
                <img src={btsLogo} alt="Bootstrap Logo" className="icon-ibm"/>                
                </div>
                <div className="items-links">
                  {/* Remove the entire <a> element */}
                </div>
              </div>
              <h3 className="items-title">
                <a
                  href="https://coursera.org/share/5cbeaf4900397fd6d2e33fde2013be34"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Front-End Web UI Frameworks and Tools: Bootstrap 4
                </a>
              </h3>
              <div className="items-description">
                <p>A proficiency course offered by The Hong Kong University of Science and Technology, part of a full stack certification course.</p>
              </div>
            </header>
            <footer>
              <ul className="items-tech-list">
                <li>Summer of 2022</li>
                <li>Bootstrap</li>
                <li>Node.Js</li>
                <li>Jquery</li>
                <li>SASS</li>
              </ul>
            </footer>
          </div>
        </li>
        <li className="gJHaRi">
          <div className="items-inner">
            <header style={{ marginBottom: '-95px' }}>
              <div className="items-top">
                <div className="folder">
                <img src={ibmLogo} alt="IBM Logo" className="icon-ibm"/>
                </div>
                <div className="items-links">
                  {/* Remove the entire <a> element */}
                </div>
              </div>
              <h3 className="items-title">
                <a
                  href="https://coursera.org/share/5cbeaf4900397fd6d2e33fde2013be34"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IBM Full Stack Software Developer Professional Certificate
                </a>
              </h3>
              <div className="items-description">
                <p>A Professional Certification course offered by IBM through Coursera.</p>
              </div>
            </header>
            <footer>
              <ul className="items-tech-list">
                <li>Summer of 2023</li>
                <li>Cloud Native</li>
                <li>Full-Stack Development</li>
                <li>Devops</li>
                <li>Django</li>
              </ul>
            </footer>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EducationSection;
