import "./FooterStyle.css";
import React, {useState} from "react";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import WaveFunction from "./Wave";

const Footer = () => {
    const [color, setColor]   = useState("white");
    const [color2, setColor2] = useState("white");
    const [color3, setColor3] = useState("white");
    return (
    <div id = "Footer" className = "footer">
        <WaveFunction/>
        <div className = "footer-container">
            <div className = "footer-text">
                <h2>Thanks for checking out my profile!</h2>
                <h1>Let's get in touch</h1>
            </div>
            <div className = "info">
                <a href = {"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=VpCqJXKBlhtMWvdtgLVvPqFSTLtqtrJWDvbRZjnQzjzdWdcNDdfKBMbkfdnMBwzFJgNJSLg"} target="_blank">
                    <p>Email</p>
                </a>
                <a href = {"https://www.linkedin.com/in/jacqueline-ho-0291ab250/"} target="_blank">
                    <p>Linkedin</p>
                </a>
                <a href = {"https://github.com/jho426"} target="_blank">
                    <p>Github</p>
                </a>
            </div>     
        </div>
        <div className = "name">
            <h1>© JACQUELINE HO</h1>
        </div>
    </div>
    );
}

export default Footer