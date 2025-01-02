import { Component } from "react";
import './app.css'

class Header extends Component {
    render(){
        return(
            <div>
                <nav className="navigation-bar">
                    <div className="name-section">
                        <img className="logo" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Logo"/>
                        <h1 className="name"><span className="span">A</span>di</h1>
                        <p className="role">Full Stack Developer</p>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header