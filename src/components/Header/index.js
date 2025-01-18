import { Component } from "react";
import './app.css'

class Header extends Component {
    render(){
        return(
                <nav className="navigation-bar">
                    <div className="name-section">
                        <h1 className="name">Aditya Bhargava Reddy Karri</h1>  
                        <h1 className="Portfolio">Portfolio</h1>                  </div>
                    <div className="inner-options">
                    <p>Home</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>About</p>
                    </div>
                </nav>
        )
    }
}

export default Header