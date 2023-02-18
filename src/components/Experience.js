import React, {useState} from "react";
import "./ExperienceStyle.css";
import {BsFillArrowDownCircleFill} from "react-icons/bs";

const Experience = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const toggleMenu2 = () => {
        setIsOpen2(!isOpen2);
      };

    return (
        <div className = "experience">
            <div className = "experience-wrapper">
                <div className = "experience-title">
                    <h3>Experience:</h3>
                </div>
                <div className="app-dev-container">
                    <div className = "app-dev">
                        <h1>Markville App Development</h1>
                        <button className = "button1" onClick={toggleMenu}>
                            <BsFillArrowDownCircleFill size={80} style = {{color: "#fdfcf2"}} />
                        </button>
                    </div>
                    <div class="dropdown-app">
                        {isOpen && ( 
                            <p>[Aug 2020 - Aug 2022]<br></br>In Grade 11, I co-founded my high school's very first App Development Club! As Vice President, I led weekly instructional meetings on advanced programming concepts and app-design in Java and Flutter. Over the course of two years, we were able to successfully develop and launch 3 full-stack mobile applications on the IOS App store and Google Play Store!</p>
                        )} 
                    </div>
                </div>
                <div className = "kiwii-container">
                    <div className = "kiwii">
                        <h1>Kiwii</h1>
                        <button className = "button2" onClick={toggleMenu2}>
                            <BsFillArrowDownCircleFill size={80} style = {{color: "#fdfcf2"}} />
                        </button>
                    </div>
                    <div class="dropdown-kiwii">
                        {isOpen2 && (
                            <p>
                                [May 2022 - Present] <br></br>Kiwii is a small startup dedicated to helping restaurants digitalize. As a web developer at Kiwii, I designed and developed interactive digital menus and wireframes using Figma, React.js, and CSS. Over the course of 3 months, we were able to develop QR-code accessed websites for 5 restaurants in the GTA, establishing an online presence for each restaurant!
                            </p>
                        )} 
                    </div>
                </div>
            </div>


        </div>

        
    );
}

export default Experience