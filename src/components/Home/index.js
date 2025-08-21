import { useNavigate } from 'react-router-dom';
import './app.css';


import{FaDownload} from 'react-icons/fa'

const Home = () =>{
  const Navigate = useNavigate();

  const skills = [
    { name: 'HTML', logo: 'https://www.onlinecasinos.org.uk/wp-content/uploads/CASINO/Articles/html5-logo.png' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
    { name: 'JavaScript', logo: 'https://freesvg.org/img/js_logo.png' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Express.js', logo: 'https://kinsta.com/wp-content/uploads/2022/04/express-1.png' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    {name: 'Hooks', logo: 'https://velog.velcdn.com/images/kwonh/post/bba244e8-1e64-49c9-85df-7bf4e4c0fdb3/hook-logo.png' },
    { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
    { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'SQL', logo: 'https://logodix.com/logo/542135.jpg ' },
    { name: 'NoSQL', logo: 'https://cdn.ourcodeworld.com/public-media/articles/articleocw-5d78ebb022d1e.webp' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
   
  ];
  
  const getAbout=()=>{
    Navigate('/about')
  }

  const getProjects=()=>{
    Navigate('/projects')
  }
  
  
  return(
   
  <div style={{overflowX:"hidden", width:"100%"}}>
    
  <div className='back'>
    <div className='first-part'>
      <div className='first-inner-container'>
        <h1 style={{marginBottom:"40px", wordBreak:"break-word", overflowWrap:"break-word"}}>
          Hello, I'm Aditya Bhargava Reddy Karri, <br /> and I'm a <br/><span className='typig-effect'> MERN Stack Developer</span>
        </h1>
        <p style={{wordBreak:"break-word", overflowWrap:"break-word", hyphens:"auto"}}>
        I'm a skilled <b>MERN Stack Developer</b> with over a year of experience in building dynamic and responsive web applications. My expertise spans web design, front-end development, and seamlessly integrating back-end data, and many more...
        </p>
      </div>
      <img 
        src="https://res.cloudinary.com/dosqewmuo/image/upload/c_crop,ar_1:1/v1737209329/c3244c78-3d9c-4f99-b2e2-e61eba537459_gbytdr.jpg"
        alt="Aditya Bhargava Reddy Karri"
      />
    </div>
    <div style={{textAlign:"center"}} >
      <button onClick={getAbout} style={{height:"35px",width:"100px",padding:"5px",color:"white" ,backgroundColor:"rgb(196, 101, 251)",border:"none",borderRadius:"5px"}}>Know More </button>
    </div>
  </div>

  <div  className='second-inner-container' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",alignSelf:"center", width:"100%"}}>
  <h2 className='second-head' style={{wordBreak:"break-word", overflowWrap:"break-word", textAlign:"center"}}>Let's Create Something Amazing Together!</h2>
  <p2 style={{textAlign:"center",marginTop:"30px", wordBreak:"break-word", overflowWrap:"break-word"}} className="second-para">Check out my projects or get in touch to discuss your idea.</p2>
  <div className='second-div' style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"50vh",alignItems:"center"}}>
  <button   style={{height:"35px",width:"100px",padding:"5px" ,backgroundColor:"rgb(196, 101, 251)",border:"none",borderRadius:"5px"}}><a style={{color:"white"}} href="mailto:bhargavareddy2005@gmail.com" >Contact Me</a></button>
  
  </div>
  
</div>
<div className='second-inner-container third' style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"70vh",alignItems:"center",alignSelf:"center", width:"100%"}}>

      <h2 className='second-head third-head' style={{wordBreak:"break-word", overflowWrap:"break-word", textAlign:"center"}}>About Me</h2>
      <hr style={{height:"2px",backgroundColor:"black"}}/>
      <p style={{marginTop:"30px", wordBreak:"break-word", overflowWrap:"break-word", hyphens:"auto", textAlign:"center"}} className="third-para">
        I am an enthusiastic and self-motivated <b>MERN Stack Developer</b> with a passion for creating modern, user-friendly web applications. 
        Proficient in React for building dynamic front-end interfaces and experienced in managing back-end operations using Node.js, Express, and MongoDB, 
        I focus on delivering scalable and efficient solutions.
      </p>
      <p className="third-para" style={{wordBreak:"break-word", overflowWrap:"break-word", hyphens:"auto", textAlign:"center"}}>
       Working as <b>Teaching Assistant at NxtWave</b>, I play a pivotal role in facilitating the learning process for students pursuing technical skills. 
        My goal is to contribute to innovative projects that make a meaningful impact while continuously expanding my technical expertise.
      </p>
      <div style={{textAlign:"center",marginTop:"40px",}} >
      <button  onClick={getProjects} style={{height:"35px",width:"100px",padding:"5px",color:"white" ,backgroundColor:"rgb(196, 101, 251)",border:"none",borderRadius:"5px"}}>Know More </button>
    </div>
    </div>
    <div className="skills-container" style={{boxSizing:"border-box",margin:'0px',overflow:"hidden", width:"100%"}}>
      <h2 className="skills-title" style={{wordBreak:"break-word", overflowWrap:"break-word", textAlign:"center"}}>My Skills</h2>
      <div className="skills-list" style={{justifyContent:"center", width:"100%" ,marginLeft:"100px" }}>
        {skills.map((skill, index) => (
          <div className="skill-item" key={index} style={{wordBreak:"break-word", overflowWrap:"break-word"}}>
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <p className="skill-name" style={{wordBreak:"break-word", overflowWrap:"break-word", textAlign:"center"}}>{skill.name}</p>
          </div>
        ))}
      </div>

      <button style={{height:"35px",width:"100px",padding:"5px" ,marginTop:"60px",marginBottom:"30px",backgroundColor:"rgb(196, 101, 251)",border:"none",borderRadius:"5px"}}><a style={{color:"white"}} href="https://drive.google.com/file/d/109FhTASGhJ57ryRxBHtLLPdpuPAePEwV/view?usp=sharing" > <FaDownload/> Resume</a></button>
      
    </div>
</div>
);
}

export default Home;
