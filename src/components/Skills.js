import "./SkillsStyle.css";
import "./BannerScrollParentStyle.css";
import React from "react";
import BannerScrollParent from "./BannerScrollParent";
import {
  SiCplusplus,
  SiJava,
  SiPython,
  SiC,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="skills">
      <BannerScrollParent />
      <div className="skills-wrapper">
        <div className="skills-blurb">
          <p>A GALLERY OF MY TECHNICAL SKILLS</p>
        </div>
        <div className="skills-container">
          <div className="skill-small-container">
            <h1>JAVA</h1>
            <p>
              A PROGRAMMING LANGUAGE I USE TO IMPLEMENT OOP DESIGN PRINCIPLES IN
              MY PROJECTS
            </p>
            {/* <SiJava className = "icon" size={90} style = {{color: "#1e1e1e"}}/> */}
          </div>
          <div className="skill-small-container">
            <h1>PYTHON</h1>
            <p>
              A PROGRAMMING LANGUAGE I USE TO CREATE GAMES AND INTERACTIVE
              SOFTWARE PROJECTS
            </p>
            {/*  <SiPython className = "icon" size={90} style = {{color: "#1e1e1e"}}/> */}
          </div>
          <div className="skill-small-container">
            <h1>C</h1>
            <p>
              A PROCEDURAL PROGRAMMING LANGUAGE I USE TO SOLVE PROBLEMS AND
              ORGANIZE DATA
            </p>
            {/* <SiC className = "icon" size={90} style = {{color: "#1e1e1e"}}/> */}
          </div>
          <div className="skill-small-container">
            <h1>C++</h1>
            <p>
              A PROGRAMMING LANGUAGE I USE TO BUILD APPLICATIONS AND SOLVE
              PROBLEMS
            </p>
            {/* <SiCplusplus className = "icon" size={90} style = {{color: "#1e1e1e"}}/> */}
          </div>
          <div className="skill-small-container">
            <h1>REACT.JS</h1>
            <p>THE FRAMEWORK I USE TO BUILD MY WEBSITES (INCLUDING THIS ONE)</p>
            {/* <SiJavascript className = "icon" size={90} style = {{color: "#1e1e1e"}}/> */}
          </div>
          <div className="skill-small-container">
            <h1>CSS</h1>
            <p>THE LANGUAGE I USE TO CREATE AESTHETICALLY PLEASING WEBSITES</p>
            {/*  <SiHtml5 className = "icon" size={90} style = {{color: "#1e1e1e"}}/> */}
          </div>
          <div className="skill-small-container">
            <h1>FIGMA</h1>
            <p>
              THE TOOL I USE TO PLAN OUT ANY DESIGNS, LAYOUTS, OR MOODBOARDS FOR
              MY PROJECTS.
            </p>
          </div>
          <div className="skill-small-container">
            <h1>PHOTOSHOP</h1>
            <p>THE TOOL I USE TO CREATE UNIQUE GRAPHICS.</p>
            {/* <SiAdobephotoshop className = "icon" size={90} style = {{color: "#1e1e1e"}}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
