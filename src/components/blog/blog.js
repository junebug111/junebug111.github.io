import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css'

class Blog extends React.Component{
    render(){
        return(
            <div className="collections">
                <Link to="/summer2020Pt2">
                    <div className="collection">
                        <img src={require("./summer2020Pt2.jpg")} alt="inhaling food" /> 
                        <p className="caption">summer 2020 pt.2</p>
                    </div>
                </Link>
                <Link to="/summer2020Pt1">
                    <div className="collection">
                        <img src={require("./summer2020.jpg")} alt="hot hot nyc summer" /> 
                        <p className="caption">summer 2020 Pt.1 </p>
                    </div>
                </Link>
                <Link to="/2018favs">
                    <div className="collection">
                        <img src={require("./2018Cover.JPG")} alt="relaxing bear in sun" /> 
                        <p className="caption">2018 favorites</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Blog; 
