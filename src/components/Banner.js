import "./BannerStyle.css";
import React, {useState, useEffect} from "react";
import {IoIosFlower} from "react-icons/io";
import TypeWriter from "react-typewriter";
import  IconSun from "./IconSun";
import {Link} from "react-router-dom";

const Banner = () => {
    return (
    <div id = "Banner" className = "banner">
       <div className = "introduction">
            <div className = "introduction-text">
                <ul className = "nav">
                    <li>
                        <a href = "#Banner">HOME</a>
                    </li>
                    <li>
                        <a href = "#About">ABOUT</a>
                    </li>
                    <li>
                        <a href = "#Projects">PROJECTS</a>
                    </li>
                </ul>
                <TypeWriter typing={0.6}>
                     <div className = "header">
                        <h1>HI, I'M<br/>JACQUELINE</h1>
                    </div>
                    <div className = "header-media">
                        <h1>HI, I'M<br/>JACQUELINE</h1>
                    </div>
                </TypeWriter>
            </div>
            <div className = "blurb">
                <p>I AM PASSIONATE ABOUT DESIGNING AND CREATING SOFTWARE DEVELOPMENT PROJECTS THAT IMPROVE THE WORLD AROUND ME.</p>
            </div>
            <div className = "spacer_1"></div>
            <div className = "welcome">
                 <h1>WELCOME TO<br/>MY PORTFOLIO</h1>
            </div>
        
       </div>
    </div>
    );
}

export default Banner
