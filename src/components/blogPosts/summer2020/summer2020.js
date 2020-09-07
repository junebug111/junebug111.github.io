import React from 'react';
import '../blogPosts.css'

class Collection2018 extends React.Component{
    render(){
        return(
            <div className="blogPostLayout">
                <h1 className="collectionOfTitle">Summer 2020 Pt.1</h1> 
                <h3 className="blurb">when the mind wanders astray due to increased time for introspection</h3>
                <div className="allImages">
                    <div className="description">
                        <img className="width650" src={require("../../blog/summer2020.jpg")} alt="hot, tired, it's summer" /> 
                        <p className="width650">6.9 - <a href="https://www.youtube.com/watch?v=oKUEbsJDvuo" target="_blank" rel="noopener noreferrer">every summer in nyc</a>☀️</p> 
                    </div> 
                    <div className="description">
                        <img className="width850" src={require("./pictures/tech_World.png")} alt="almost the entire day, I'm in front of some sort of technology" />  
                        <p className="width850">6.11 - tech 24/7 minus the 💤s</p> 
                    </div> 
                    <div className="description">
                        <img className="width850" src={require("./pictures/catAndBird.png")} alt="cat sees bird, chases the bird, but bird flies away free" /> 
                        <p className="width850">6.25 - cat + bird adventures</p>
                    </div>
                    <div className="description">
                        <img className="width700" src={require("./pictures/some_tech_companies.png")} alt="a house walking with chicken legs that has multiple buildings atop of it " />
                        <p className="width700">7.13 - sometimes it's time to rebuild the entire thing instead of building on top of it (inspired also by: Howl's Moving Castle)</p>
                    </div>
                    <div className="description">
                        <img className="width800" src={require("./pictures/uMoveiMove.png")} alt="two people dancing" />
                        <p className="width800">7.14 - <a href="https://www.youtube.com/watch?v=ficEze_Th1s" target="_blank" rel="noopener noreferrer">u move i move</a> inspired drawing ♡</p> 
                    </div> 
                    <div className="description">
                        <img className="width700" src={require("./pictures/two_dragons.png")} alt="a green and red dragon" />
                        <p className="width700">7.15 -a doodle that became two dragons (that reminds me a bit of mario and luigi 😮)</p> 
                    </div> 
                    <div className="description">
                        <img className="width700" src={require("./pictures/monkey_cheek.png")} alt="two people dancing" />
                        <p className="width700">7.23 - monkey cheek inspired park in Bangkok (created listening to <a href="https://open.spotify.com/episode/63KLTwhU99F6gILg0vsO4G?si=rismvxjlTq6OViErCtmlog" target="_blank" rel="noopener noreferrer">pindrop</a>).</p> 
                    </div> 
                </div>
            </div>
        )
    }
}

export default Collection2018; 