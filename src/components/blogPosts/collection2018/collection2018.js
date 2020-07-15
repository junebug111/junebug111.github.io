import React from 'react';
import '../blogPosts.css'

class Collection2018 extends React.Component{
    render(){
        return(
            <div className="blogPostLayout">
                <h1 className="collectionOfTitle">2018 favorites</h1> 
                <h3 className="blurb">a year balancing productivity, stress, relaxing, and new adventures</h3>
                <div className="allImages">
                    <img className="width750" src={require("./pictures/worry.JPG")} alt="practice makes perfect..right?" /> 
                    <img className="width700" src={require("./pictures/blue.JPG")} alt="I feel blue" /> 
                    <img className="width750" src={require("./pictures/doMore.JPG")} alt="need to do more" /> 
                    <img className="width750" src={require("./pictures/bear.JPG")} alt="bear in the sun :)" /> 
                    <img className="width800" src={require("./pictures/dino.JPG")} alt="thesasaurus dinosaur" /> 
                    <img className="width750" src={require("./pictures/nyc.JPG")} alt="columbia 2022!" /> 
                </div>
            </div>
        )
    }
}

export default Collection2018; 