import './app.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {Link}from 'react-router-dom'

const Footer=()=>(
    <div className="body">
    
       <div className='wave'></div>
       <div className=' wave1 '></div>
        <footer>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex',justifyContent:"center", gap: '10px'}}>
      <li style={{marginLeft:"30px"}} className="c" >
        <a  href="https://www.instagram.com/aditya_bhargava_reddy?igsh=MXhtNmk1YWc1bWxqag=="   rel="noreferrer" target="_blank" >
          <FaInstagram size={30} color="#E1306C" />
        </a>
      </li>
      <li style={{marginLeft:"40px"}}className="c" >
        <a href="https://www.linkedin.com/in/aditya-bhargava-reddy-karri/?originalSubdomain=in"  rel="noreferrer" target="_blank" >
          <FaLinkedin size={30} color="#0077B5" />
        </a>
      </li>
    
      <li style={{marginLeft:"40px"}} className="c" >
        <a href="https://github.com/AdityaBhargavaReddy"  rel="noreferrer" target="_blank" >
          <FaGithub  size={30} color="black"/>
        </a>
      </li>
    </ul>
        </footer>
        <span className="h" style={{ position:"relative",textAlign:"center",backgroundColor:"hsl(229, 82.10%, 62.70%)"}}>Copyright © Adi<span style={{letterSpacing:"0px"}}>...</span> <span className='big'>🖤</span> 2025. All rights reserved.</span>
        <nav className="navigation-bar" style={{marginLeft:"200px", justifyContent:"center",background:"hsl(229, 82.10%, 62.70%)",paddingBottom:"40px"}}>
                    <Link className="link" to="/"style={{color:"black",textDecoration:"none"}}><p>Home</p></Link>
                    <Link className="link" to="/skills" style={{color:"black",textDecoration:"none"}}><p>Skills</p></Link>
                    <Link className="link" to="/projects" style={{color:"black",textDecoration:"none"}}><p>Projects</p></Link>
                    <Link className="link" to="/about" style={{color:"black",textDecoration:"none"}}><p>About</p></Link>
                    <Link className="link" to="/experience" style={{color:"black",textDecoration:"none"}}><p >Experience</p></Link>
                </nav>
    </div>
)
export default Footer