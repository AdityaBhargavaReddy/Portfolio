import { Component } from "react";
import './app.css'
import {Link} from 'react-router-dom'
class Header extends Component {
    render(){
        return(
                <nav className="navigation-bar">
                    <div className="name-section">
                        <h1 className="name">Aditya Bhargava Reddy Karri</h1>  
                        <h1 className="Portfolio">Portfolio</h1>                  </div>
                    <div className="inner-options">
                    <Link className="link" to="/"><p>Home</p></Link>
                    <Link to="/skills"><p>Skills</p></Link>
                    <Link to="/projects"><p>Projects</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    </div>
                </nav>
        )
    }
}

export default Header