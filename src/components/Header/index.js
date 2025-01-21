import { Component } from "react";
import './app.css'
import { FaHome, FaTasks,FaBriefcase , FaInfoCircle} from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'; 

import {Link} from 'react-router-dom'
class Header extends Component {
    render(){
        return(<div >
                <nav className="navigation-bar">
                    <div className="name-section">
                        <h1 className="name">Aditya Bhargava Reddy Karri</h1>  
                        <h1 className="Portfolio">Portfolio</h1>                  </div>
                    <div className="inner-options" >
                    <Link className="link" to="/"style={{color:"black",textDecoration:"none"}}>< FaHome  /><p>Home</p></Link>
                    <Link className="link" to="/about" style={{color:"black",textDecoration:"none"}}><FaInfoCircle/><p >About</p></Link>
                    <Link className="link" to="/skills" style={{color:"black",textDecoration:"none"}}><GiSkills/><p  >Skills</p></Link>
                    <Link className="link" to="/projects" style={{color:"black",textDecoration:"none"}}><FaTasks/><p >Projects</p></Link>
                    <Link className="link" to="/experience" style={{color:"black",textDecoration:"none"}}><FaBriefcase /><p >Experience</p></Link>
                    </div>
                </nav><hr style={{height:"2px",}}/>
                
                </div>
        )
    }
}

export default Header