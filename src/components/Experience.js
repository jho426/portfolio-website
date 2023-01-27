import React from "react";
import "./ExperienceStyle.css";
import personalImg2 from "../assets/personal-img.jpg";

const Experience = () => {


    return (
        <div className = "experience">
            <div className = "experience-wrapper">
                <div className = "carousel">
                    <img className = "img2" src = {personalImg2} alt = "img2"></img>
                    <img className = "img3" src = {personalImg2} alt = "img2"></img>
                    <img className = "img4" src = {personalImg2} alt = "img2"></img>
                </div>
                <div className = "experience-title">
                    <h3>Experience:</h3>
                </div>
                <div className = "app-dev">
                    <h1>Markville App Development</h1>
                </div>
                <div className = "kiwii">
                    <h1>Kiwii</h1>
                </div>
                <div className = "idk">
                    <h1>idk</h1>
                </div>
            </div>
        </div>
    );
}

export default Experience