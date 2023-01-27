import "./SkillsStyle.css";
import "./BannerScrollParentStyle.css";
import React from 'react';
import BannerScrollParent from "./BannerScrollParent";
import BannerScroll from "./BannerScroll";
import {SiCplusplus, SiJava, SiPython, SiC, SiJavascript, SiHtml5, SiCss3, SiAdobephotoshop, SiFigma} from "react-icons/si";

const Skills = () => {
    return (
    <div id = "Skills" className = "skills">
        <BannerScrollParent/>
        <div className = "skills-wrapper">
            <div className = "skills-container">   
                <div className = "column1">
                    <div className= "java">
                        <SiJava className = "icon" size={90} style = {{color: "#1e1e1e"}}/>
                    </div>
                    <div className= "python">
                        <SiPython className = "icon" size={90} style = {{color: "#1e1e1e"}}/>
                    </div>
                </div>
                <div className = "column2">
                    <div className= "c">
                        <SiC className = "icon" size={90} style = {{color: "#1e1e1e"}}/>
                    </div>
                    <div className= "cpp">
                        <SiCplusplus className = "icon" size={90} style = {{color: "#1e1e1e"}}/>
                    </div>
                </div>
                <div className = "column3">
                    <div className= "javascript">
                        <SiJavascript className = "icon" size={90} style = {{color: "#1e1e1e"}}/>
                    </div>
                    <div className= "css">
                        <SiHtml5 className = "icon" size={90} style = {{color: "#1e1e1e"}}/>
                    </div>
                </div>
                <div className = "column4">
                    <div className= "figma">
                        <SiFigma className = "icon" size={90} style = {{color: "#1e1e1e"}}/>
                    </div>
                    <div className= "photoshop">
                        <SiAdobephotoshop className = "icon" size={90} style = {{color: "#1e1e1e"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default Skills