import React from 'react';
import Resume from '../../Resume.pdf';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends React.Component{
    render(){
        return(
            <header>
                <Link to="/blog">
                    <img src={require("./logo.png")} alt="Christi Kim" className="logo" /> 
                </Link>
                <nav className="navLinks">
                    <Link to="/blog">blog</Link>
                    <Link to="/aboutMe">about me</Link>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">resume</a>
                </nav> 
            </header>
        )
    }
}

export default Header;