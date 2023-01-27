import "./NavBarStyle.css"
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className = {click? "header-active" : "header"}> 
            <ul className = {click? "nav-menu active" : "nav-menu"}>
                <li>
                    <a href = "#Projects">PROJECTS</a>
                </li>
                <li>
                    <a href = "#About">ABOUT</a>
                </li>
                <li>
                    <a href = "#Banner">HOME</a>
                </li>
            </ul>
            
            <div className = "hamburger-menu" onClick = {handleClick}>
                {click ? (<FaTimes size={20} style = {{color: "#dedecc"}} />) : (<FaBars size={20} style = {{color: "#dedecc"}} />)}
            </div>
        </div>
    )
}

export default NavBar