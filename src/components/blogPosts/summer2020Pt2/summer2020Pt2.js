import React from 'react';
import '../blogPosts.css'

class Collection2018 extends React.Component{
    render(){
        return(
            <div className="blogPostLayout">
                <h1 className="collectionOfTitle">Summer 2020 Pt.2</h1> 
                <h3 className="blurb">daily life comics, comics, and more comics</h3>
                <div className="allImages">
                    <img className="width1200" src={require("./pictures/Helicopter.jpg")} alt="hot, tired, it's summer" /> 
                    <img className="width1000" src={require("./pictures/Boiling_Water.jpg")} alt="hot, tired, it's summer" /> 
                    <img className="width1000" src={require("./pictures/The_Vacuum.jpg")} alt="hot, tired, it's summer" /> 
                </div>
            </div>
        )
    }
}

export default Collection2018; 