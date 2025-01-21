import React from 'react';
import './app.css';

const skills = [
  {
    category: 'Frontend Development',
    skills: [
      'React.js',
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'Bootstrap',
      'Responsive Design',
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Authentication & Authorization',
    ],
  },
  {
    category: 'Database Management',
    skills: ['MongoDB', 'Mongoose', 'SQL','SQLite'],
  },
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'Python','C','C++'],
  },
  {
    category: 'Data Structures & Algorithms',
    skills: [
      'Elementary DSA',
      'Array & String Manipulations',
      'Basic Sorting & Searching Algorithms',
    ],
  },
  {
    category: ' Tools  &    Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Netlify','Vercel'],
  },
 
  {
    category: 'Soft Skills',
    skills: [
      'Consistency',
      'Problem-Solving',
      'Team Collaboration',
      'Time Management',
    ],
  },
  {
    category:"Other Skills",
    skills:[
        'Playing',
        'Coding',
        'Eating',
        "Doubt Resolution"
    ]
  }
];

const Skills = () => (
    <div className='a'>
  <div className="skills-container">
    <h1 className="skills-title">Skills</h1>
    <div style={{justifyContent:"center"}} className="skills-list">
      {skills.map((skillCategory, index) => (
        <div  key={index} className="skill-category">
          <h2 className="category-title">{skillCategory.category}</h2>
          <ul style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
            {skillCategory.skills.map((skill, idx) => (
                
              <li key={idx} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  </div>
);

export default Skills;
