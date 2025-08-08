import { Component } from "react";
import './app.css'
import { FaHome, FaTasks,FaBriefcase , FaInfoCircle } from 'react-icons/fa'
import { FiMessageSquare } from "react-icons/fi";
import { GiSkills } from 'react-icons/gi'; 
import { FaBars, FaTimes } from 'react-icons/fa';

import {Link} from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    closeMenu = () => {
        this.setState({
            isMenuOpen: false
        });
    }

    // Close menu when clicking outside
    handleOutsideClick = (e) => {
        if (this.state.isMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
            this.closeMenu();
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    render(){
        return(
            <div style={{overflowX:"hidden" ,paddingBottom:"0px",margin:"0px"}}>
                <nav className="navigation-bar" style={{overflowX:"hidden"}}>
                    <div className="name-section"  style={{marginRight:"20px"}}>
                        <h1 className="name">Aditya Bhargava Reddy Karri</h1>  
                        <h1 className="Portfolio">Portfolio</h1>                  
                    </div>
                    
                    {/* Hamburger Button */}
                    <div className="hamburger" onClick={this.toggleMenu} aria-label="Toggle menu" style={{marginLeft:"0px"}}  >
                        {this.state.isMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="inner-options">
                        <Link className="link" to="/" style={{color:"black",textDecoration:"none"}} onClick={this.closeMenu}><FaHome /><p>Home</p></Link>
                        <Link className="link" to="/about" style={{color:"black",textDecoration:"none"}} onClick={this.closeMenu}><FaInfoCircle/><p>About</p></Link>
                        <Link className="link" to="/skills" style={{color:"black",textDecoration:"none"}} onClick={this.closeMenu}><GiSkills/><p>Skills</p></Link>
                        <Link className="link" to="/projects" style={{color:"black",textDecoration:"none"}} onClick={this.closeMenu}><FaTasks/><p>Projects</p></Link>
                        <Link className="link" to="/experience" style={{color:"black",textDecoration:"none"}} onClick={this.closeMenu}><FaBriefcase /><p>Experience</p></Link>
                        <Link className="link" to="/contact" style={{color:"black",textDecoration:"none"}} onClick={this.closeMenu}><FiMessageSquare /><p>Contact Me</p></Link>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`mobile-menu ${this.state.isMenuOpen ? 'active' : ''}`}>
                        <Link className="mobile-link" to="/" onClick={this.closeMenu}>
                            <FaHome />
                            <span>Home</span>
                        </Link>
                        <Link className="mobile-link" to="/about" onClick={this.closeMenu}>
                            <FaInfoCircle />
                            <span>About</span>
                        </Link>
                        <Link className="mobile-link" to="/skills" onClick={this.closeMenu}>
                            <GiSkills />
                            <span>Skills</span>
                        </Link>
                        <Link className="mobile-link" to="/projects" onClick={this.closeMenu}>
                            <FaTasks />
                            <span>Projects</span>
                        </Link>
                        <Link className="mobile-link" to="/experience" onClick={this.closeMenu}>
                            <FaBriefcase />
                            <span>Experience</span>
                        </Link>
                        <Link className="mobile-link" to="/contact" onClick={this.closeMenu}>
                            <FiMessageSquare />
                            <span>Contact Me</span>
                        </Link>
                    </div>
                </nav>
                <hr style={{height:"2px",}}/>
            </div>
        )
    }
}

export default Header