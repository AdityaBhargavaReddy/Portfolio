import React from 'react';
import './app.css'; 
import {FaDesktop,FaServer, FaDatabase,FaCode, FaGithub,FaCloudUploadAlt,FaProjectDiagram,FaHamburger,FaGamepad,FaBed} from 'react-icons/fa'

const About = () => {
  return (
   <div className='a'>
   <div className="about-container">
      <h1>About Me</h1>
   <div style={{marginTop:"50px",fontSize:"20px",padding:"10px"}}>
      <p style={{margin:"10px"}}>
        Hi, I'm <strong>Aditya Bhargav Reddy</strong>, a passionate web developer specializing in the MERN (MongoDB, Express, React, Node.js) stack. I have a strong foundation in building dynamic and user-friendly web applications.
      </p>
      <p style={{margin:"10px"}}>
        In addition to web development, I have hands-on experience with <strong>Python</strong> for scripting and problem-solving. I also have a solid understanding of elementary <strong>Data Structures and Algorithms (DSA)</strong>, which helps me write efficient and optimized code.
      </p>
      <p style={{margin:"10px"}}>
        I'm always eager to learn new technologies, take on challenges, and contribute to meaningful projects. Currently, I'm looking for opportunities to apply my skills and grow as a developer.
      </p>
    </div>
    </div>
    <div className="about-container">
      <h2>Tools and Technologies Known</h2>
      <ul style={{listStyle:"disc",marginTop:"50px",marginBottom:"30px",fontSize:"20px",padding:"10px",display:"flex",flexDirection:"column"}} className="skills-list">
        <li style={{display:"flex",alignItems:"center"}}> Frontend<span style={{width:"5px"}}></span> <FaDesktop/> : React.js, HTML5, CSS3, JavaScript (ES6+), Bootstrap</li>
        <li style={{display:"flex",alignItems:"center"}}>Backend <span style={{width:"5px"}}></span> <FaServer />  : Node.js, Express.js</li>
        <li style={{display:"flex",alignItems:"center"}}>Database <span style={{width:"5px"}}></span><FaDatabase/> : MongoDB, Mongoose</li>
        <li style={{display:"flex",alignItems:"center"}}>Programming<span style={{width:"5px"}}></span> <FaCode/> : Python (Basic scripting, Problem-Solving)</li>
        <li style={{display:"flex",alignItems:"center"}}> Version Control<span style={{width:"5px"}}></span><FaGithub/> : Git, GitHub</li>
        <li style={{display:"flex",alignItems:"center"}}>Deployment<span style={{width:"5px"}}></span><FaCloudUploadAlt/> : Netlify,  Vercel</li>
        <li style={{display:"flex",alignItems:"center"}}>Basic Knowledge<span style={{width:"5px"}}></span><FaProjectDiagram/> : Data Structures and Algorithms</li>
      </ul>
</div>
<div className="about-container">
      <h2>Interests</h2>
      <ul className="interests-list" style={{display:"flex",flexWrap:"wrap",listStyle:'none'}}>
        <li style={{width:"40vw",marginBottom:"30px",textAlign:"center"}}><FaHamburger/><span style={{width:"5px"}}></span> Eating</li> 
        <li style={{width:"40vw",marginBottom:"30px",textAlign:"center"}}><FaCode /><span style={{width:"5px"}}></span> Coding</li>
        <li style={{width:"40vw",marginBottom:"30px",textAlign:"center"}}><FaGamepad/><span style={{width:"5px"}}></span> Playing</li>
        <li style={{width:"42vw",marginBottom:"30px",textAlign:"center"}}><FaBed/><span style={{width:"5px"}}></span> <span style={{width:"5px"}}></span> Sleeping</li>
      </ul>
</div>
<div style={{background: "#f9f9f9",boxShadow:"none"}} className="about-container">
      <h2>Contact</h2>
      <p style={{fontFamily:"Roboto",fontSize:"20px"}}>
        Feel free to reach out to me via <a href="mailto:bhargavareddy2005@gamil.com"  rel="noreferrer">Mail</a> or connect with me on <a href="https://www.linkedin.com/in/aditya-bhargava-reddy-karri/?originalSubdomain=in"  rel="noreferrer" target="_blank">Linkedin</a>.
      </p>
    </div>
    </div>
  );
};

export default About;