import "./AboutStyle.css";
import React from "react";
import personalImg from "../assets/personal-img.jpg";
const About = () => {
    return (
    <div id = "About" className = "about">
        <div className = "about-container">  
            <img className = "jimg" src = {personalImg} alt = "img"></img>
            <div className = "about-title">
                <h1>A LITTLE ABOUT MYSELF</h1>
            </div>  
            <div className = "text-container"> 
                <div className = "description">
                    <p>Hello! My name is Jacqueline and I'm currently an undergraduate student at the University of Waterloo studying Software Engineering.</p>
                    <p>My interest for programming started after completing my first computer science course in Gr. 10, where I became mesmerized by the power of code and its potential to impact all aspects of the world! Since then, I've grown a huge passion for app/game development, web-development, and UI/UX design.</p>
                    <p>In my free time, you can find me scrolling endlessly on pinterest or trying out a new recipe!</p>
                </div>
            </div>  
        </div>
    </div>
    );
}

export default About