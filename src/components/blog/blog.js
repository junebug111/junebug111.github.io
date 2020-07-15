import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css'

class Blog extends React.Component{
    render(){
        return(
            <div className="collections">
                <Link to="/summer2020">
                    <div className="collection">
                        <img src={require("./summer2020.JPG")} alt="summer 2020 collection" /> 
                        <p className="caption">Summer 2020 Collection</p>
                    </div>
                </Link>
                <Link to="/2018favs">
                    <div className="collection">
                        <img src={require("./2018Cover.JPG")} alt="2018 collection" /> 
                        <p className="caption">2018 Favorites</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Blog; 
