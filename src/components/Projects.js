import "./ProjectsStyle.css";
import React from "react";
import lomp from "../assets/lomp.png";
import boink from "../assets/boink.png";
import chess from "../assets/chess.png";
import se from "../assets/se.png";
import {useState} from "react";
import {FaArrowUp, FaJava, FaPython, FaUnity} from "react-icons/fa";
import {BsArrowUpRight} from "react-icons/bs";
import {SiAdobephotoshop, SiArduino, SiCsharp} from "react-icons/si";
import {FiFigma} from "react-icons/fi";


const bg = {background: "#1a1a18"};
const bg2 = {background: "#e0dbc6"};


const Projects = () => {
    
    const [colour, setColour] = useState(bg);
    
    return (
    <div id = "Projects" className = "projects" style = {colour}>
        <div className = "projects-title">
            <h1 style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}>PROJECTS</h1>
        </div>
       <div className = "gallery">
            <div className = "lomp">
                <div className = "lomp-img-container" >
                    <img onMouseEnter = {
                        () => setColour(bg2)
                    } 
                    onMouseLeave = {
                        () => setColour(bg)
                    }
                    className = "lomp-img" src = {lomp} alt = "lomp-img" style ={{borderColor: colour == bg? "#fdfcf2" :  "#1a1a18"}}></img>
                </div>
                 <div className = "lomp-text" style ={{borderColor:  colour == bg? "#fdfcf2" : "#1a1a18"}}>
                    <h1 style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}> [OO] </h1>
                    <h1 className = "lomp-title" style ={{color:  colour == bg? "#fdfcf2" :  "#1a1a18"}} > Legends of Math Prodigy</h1>
                    
                    <div className = "lomp-icons">
                        <FaJava size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                        <SiAdobephotoshop size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                    </div>
                    
                    <p style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}>Set in a fantasy kingdom, the objective of the role-play game requires a user to complete an adventure-based quest in order to defeat the enemies in the realm. During the quest, the user must traverse through a map and complete various challenges, battles, and math-based problems along the way to defeat any enemies! </p>
                    <a href = {"https://github.com/jho426/Legends-Of-Math-Prodigy"} target="_blank">
                        <div className = "lomp-link">
                            <h3 style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}>github</h3>
                            <BsArrowUpRight size={20} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}} />
                        </div>
                    </a>
                </div>
            </div>
            <div className = "se">
                <div className = "se-img-container">
                <   img onMouseEnter = {
                        () => setColour(bg2)
                    } 
                    onMouseLeave = {
                        () => setColour(bg)
                    } className = "se-img" src = {se} alt = "se-img" style ={{borderColor: colour == bg? "#fdfcf2" : "#1a1a18"}}></img>
                </div>
                 <div className = "se-text" style ={{borderColor: colour == bg? "#fdfcf2" : "#1a1a18"}}>
                    <h1 style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}> [O1] </h1>
                    <h1 className = "se-title" style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}> SmartChess</h1>
                    
                    <div className = "se-icons">
                        <div className = "se-icons-wrapper">
                            <FaPython size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                            <SiArduino size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                            <SiAdobephotoshop size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                        </div>
                    </div>
                    
                    <p style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}>SmartChess is a miniature chess board designed to help a user learn chess. Connected to a graphical user interface, the user can physically move the pieces of the board and view a graphical representation of the current board state and the possible moves of the chosen piece–while receiving feedback on the legality of their moves. (Created with Nandan P., Varun P., Justin L., Emily W.)</p>
                    <a href = {"https://github.com/vrnprkh/SE101"} target="_blank">
                        <div className = "se-link">
                            <h3 style ={{color:  colour == bg? "#fdfcf2" :  "#1a1a18"}}>github</h3>
                            <BsArrowUpRight size={20} style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}} />
                        </div>
                    </a>
                </div>
            </div>
            <div className = "boink">
                <div className = "boink-img-container">
                    <img onMouseEnter = {
                        () => setColour(bg2)
                    } 
                    onMouseLeave = {
                        () => setColour(bg)
                    } className = "boink-img" src = {boink} alt = "boink-img" style ={{borderColor: colour == bg? "#fdfcf2" :  "#1a1a18"}}></img>
                </div>
                 <div className = "boink-text" style ={{borderColor:  colour == bg? "#fdfcf2" : "#1a1a18"}}>
                    <h1 style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}> [O2] </h1>
                    <h1 className = "boink-title" style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}> Bo!nk</h1>
                    
                    <div className = "boink-icons">
                        <FaUnity size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                        <SiCsharp size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                        <FiFigma size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                        <SiAdobephotoshop size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                    </div>
                    
                    <p style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}>Bo!nk is a drawing-based puzzle game that challenges the player to draw lines and direct balls into holes. It features a cartoonish art style, multiple levels, sound effects and many other mechanics! </p>
                    <div className = "link-wrapper">
                        <a href = {"https://markville.dev/boinksite/"} target="_blank">
                            <div className = "boink-link">
                                <h3 style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}}>website</h3>
                                <BsArrowUpRight size={20} style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}} />
                            </div>
                        </a>
                        <a href = {"https://apps.apple.com/ca/app/bo-nk/id1570376501"} target="_blank">
                            <div className = "boink-link2">
                                <h3 style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}}>app store</h3>
                                <BsArrowUpRight size={20} style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className = "chess">
                <div className = "chess-img-container">
                    <img onMouseEnter = {
                        () => setColour(bg2)
                    } 
                    onMouseLeave = {
                        () => setColour(bg)
                    } className = "chess-img" src = {chess} alt = "chess-img" style ={{borderColor: colour == bg? "#fdfcf2" :  "#1a1a18"}}></img>
                </div>
                <div className = "chess-text" style ={{borderColor:  colour == bg? "#fdfcf2" : "#1a1a18"}}>
                    <h1 style ={{color:  colour == bg? "#fdfcf2" :  "#1a1a18"}}> [O3] </h1>
                    <h1 className = "chess-title" style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}> Chess </h1>
                    
                    <div className = "chess-icons">
                        <div className="chess-icons-wrapper">
                            <FaJava size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                            <SiAdobephotoshop size={50} style ={{color:  colour == bg? "#fdfcf2" : "#1a1a18"}}/>
                        </div>
                    </div>
                    
                    <p style ={{color:  colour == bg? "#fdfcf2" :  "#1a1a18"}}>Programmed in Java, the two-player chess game includes a variety of features including selectable themes and a complete scoreboard. (Created with Jonathan Feng) </p>
                    <a href = {"https://github.com/jho426/Chess-Desktop-Game"} target="_blank">
                        <div className = "chess-link">
                            <h3 style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}}>github</h3>
                            <BsArrowUpRight size={20} style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}} />
                        </div>
                    </a>
                </div>
            </div>
            <div className = "go-top">
                <a href = "#Banner">
                    <FaArrowUp className = "arrow" size={60} style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}} />
                </a>
                <h3 style ={{color: colour == bg? "#fdfcf2" : "#1a1a18"}}>Go to Top</h3>
            </div>
       </div>
        
    </div>
    );
}


export default Projects