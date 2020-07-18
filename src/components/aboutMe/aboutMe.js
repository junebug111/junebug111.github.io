import React from 'react';
import './aboutMe.css'

class AboutMe extends React.Component{
    render(){
        return(
            <div className="bio">
                <div className="infoAboutMe">
                    <h3 className="intro">Hi! My name is Christi!</h3>
                    <p className="moreInfo">I am a rising junior at Columbia University majoring in computer science 
                        and minoring in East Asian studies. I am a coder, a storyteller, an 
                        illustrator, a friend, and most definitely a lifetime student. I am a 
                        passionate advocate of women in tech. I am a New York native. And hopefully, 
                        I will be many more things yet to come.</p>
                    <div className="buttons">
                        <a href="https://www.linkedin.com/in/christi-kim-a2a837146/" target="_blank" rel="noopener noreferrer">
                            <img src={require("./buttons/Linkedin_.png")} alt="linkedin"/>
                        </a>
                        <a href="https://github.com/junebug111" target="_blank" rel="noopener noreferrer">
                            <img src={require("./buttons/GitHub.png")} alt="github"/>
                        </a>
                        <a href="https://www.instagram.com/bitsodoodles/" target="_blank" rel="noopener noreferrer">
                            <img src={require("./buttons/Insta.png")} alt="insta"/>
                        </a>
                    </div> 
                </div>
                <img src={require("./me.jpg")} alt="Christi Kim" className="picOfMe"/>
            </div>
        )
    }
}

export default AboutMe; 