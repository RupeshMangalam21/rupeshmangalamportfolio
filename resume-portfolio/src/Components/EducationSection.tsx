import React from 'react';
import '../Styles/EducationSection.css';

const EducationSection: React.FC = () => {
  return (
    <div className='edu'>
      <h2>Education</h2>
      <ul>
        <li>
          <h3>Chandigarh University</h3>
          <p>Degree: Bachelor of Science</p>
          <p>Major: Computer Science</p>
          <p>Year: 2021 - 2025</p>
        </li>
      </ul>
    </div>
  );
};

export default EducationSection;