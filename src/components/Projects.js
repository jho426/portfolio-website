import "./ProjectsStyle.css";
import React from "react";
import lomp from "../assets/lomp.png";
import boink from "../assets/boink.png";
import chess from "../assets/chess.png";
import se from "../assets/se.png";
import {useState} from "react";
import { FaArrowUp } from "react-icons/fa";
import {BsArrowUpRight} from "react-icons/bs";


const bg = {background: "#1a1a18"};
const bg2 = {background: "#b97e47"};


const Projects = () => {
    
    const [colour, setColour] = useState(bg);
    
    return (
    <div id = "Projects" className = "projects" style = {colour}>
        <div className = "projects-title">
                <h1>PROJECTS</h1>
        </div>
       <div className = "gallery">
            <div className = "lomp">
                <div className = "lomp-img-container">
                    <img onMouseEnter = {
                        () => setColour(bg2)
                    } 
                    onMouseLeave = {
                        () => setColour(bg)
                    }
                    className = "lomp-img" src = {lomp} alt = "lomp-img"></img>
                </div>
                 <div className = "lomp-text">
                    <h1> [OO] </h1>
                    <h1 className = "lomp-title"> Legends of Math Prodigy</h1>
                    <p>Set in a fantasy kingdom, the objective of the role-play game requires a user to complete an adventure-based quest in order to defeat the enemies in the realm. During the quest, the user must traverse through a map and complete various challenges, battles, and math-based problems along the way to defeat any enemies! </p>
                    <a href = {"https://github.com/jho426/Legends-Of-Math-Prodigy"} target="_blank">
                        <div className = "lomp-link">
                            <h3>github</h3>
                            <BsArrowUpRight size={20} style = {{color: "#fdfcf2"}} />
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
                    } className = "se-img" src = {se} alt = "se-img"></img>
                </div>
                 <div className = "se-text">
                    <h1> [O1] </h1>
                    <h1 className = "se-title"> SmartChess</h1>
                    <p>SmartChess is a miniature 4 x4 chess board designed to help a user learn the movements of various chess pieces. Connected to a graphical user interface, the user can physically move the pieces of the board and see a visual representation of the current board state and the possible moves of their chosen piece, while receiving feedback on the legality of the moves they make. (Created with Nandan Patel, Varun Parikh, Justin Lin, Emily Wang)</p>
                    <a href = {"https://github.com/vrnprkh/SE101"} target="_blank">
                        <div className = "se-link">
                            <h3>github</h3>
                            <BsArrowUpRight size={20} style = {{color: "#fdfcf2"}} />
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
                    } className = "boink-img" src = {boink} alt = "boink-img"></img>
                </div>
                 <div className = "boink-text">
                    <h1> [O2] </h1>
                    <h1 className = "boink-title"> Bo!nk</h1>
                    <p>Bo!nk is a drawing-based puzzle game that challenges the player to draw lines and direct balls into holes. It features a cartoonish art style, multiple levels, sound effects and many other mechanics! </p>
                    <div className = "link-wrapper">
                        <a href = {"https://markville.dev/boinksite/"} target="_blank">
                            <div className = "boink-link">
                                <h3>website</h3>
                                <BsArrowUpRight size={20} style = {{color: "#fdfcf2"}} />
                            </div>
                        </a>
                        <a href = {"https://apps.apple.com/ca/app/bo-nk/id1570376501"} target="_blank">
                            <div className = "boink-link2">
                                <h3>app store</h3>
                                <BsArrowUpRight size={20} style = {{color: "#fdfcf2"}} />
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
                    } className = "chess-img" src = {chess} alt = "chess-img"></img>
                </div>
                <div className = "chess-text">
                    <h1> [O3] </h1>
                    <h1 className = "chess-title"> Chess </h1>
                    <p>Programmed in Java, the two-player chess game includes a variety of features including selectable themes and a complete scoreboard. (Created with Jonathan Feng) </p>
                    <a href = {"https://github.com/jho426/Chess-Desktop-Game"} target="_blank">
                        <div className = "chess-link">
                            <h3>github</h3>
                            <BsArrowUpRight size={20} style = {{color: "#fdfcf2"}} />
                        </div>
                    </a>
                </div>
            </div>
            <div className = "go-top">
                <a href = "#Banner">
                    <FaArrowUp className = "arrow" size={60} style = {{color: "#black"}} />
                </a>
                <h3>Go to Top</h3>
            </div>
       </div>
        
    </div>
    );
}


export default Projects