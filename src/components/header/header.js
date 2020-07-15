import React from 'react';
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
                    <a href={require("../../Resume.pdf")} target="_blank" rel="noopener noreferrer">resume</a>
                </nav> 
            </header>
        )
    }
}

export default Header;