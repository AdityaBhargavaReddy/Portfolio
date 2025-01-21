// Experience.js
import React from 'react';
import './app.css';
import { FaUserGraduate, FaChalkboardTeacher, FaAward } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className='a'>
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <div className="icon-container">
            <FaUserGraduate className="experience-icon" />
          </div>
          <div className="experience-details">
            <h3 className="job-title">Trainee</h3>
            <p className="company-location">NxtWave, Remote | June 2023 – Present</p>
            <ul className="responsibilities">
              <li>Learning 4.0 Technologies with a focus on industry-ready practices.</li>
              <li>Building expertise in Full Stack Development (MERN stack).</li>
              <li>Hands-on learning with projects and real-world problem-solving.</li>
            </ul>
          </div>
        </div>

        <div className="experience-card">
          <div className="icon-container">
            <FaChalkboardTeacher className="experience-icon" />
          </div>
          <div className="experience-details">
            <h3 className="job-title">Teaching Assistant</h3>
            <p className="company-location">NxtWave, Remote | December 2024 – Present</p>
            <ul className="responsibilities">
              <li>Resolved 70+ students' doubts, providing effective explanations and solutions.</li>
              <li>Reviewed and improved students' code, ensuring adherence to best practices.</li>
              <li>Mentored students in Python, SQL, and DSA concepts.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="section-title" style={{marginTop:"50px",width:""}}>Achievements</h2>
      <div className="experience-container c" >
        <div className="icon-container ">
          <FaAward className="achievement-icon" />
        </div>
        <ul className="achievements-list">
          <li>
        Maintained a learning streak of over <strong>444+ days</strong> on the NxtWave platform, showcasing dedication and consistency.
          </li>
          <li>
            Solved over <strong>600 coding problems</strong> in Python and completed <strong>20+ projects</strong>, demonstrating advanced problem-solving skills.
          </li>
        </ul>
    
    </div>
    </div>
    </div>
  );
};

export default Experience;
