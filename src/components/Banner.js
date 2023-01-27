import "./BannerStyle.css";
import React, {useState, useEffect} from "react";
import {HiArrowLongDown} from "react-icons/hi2";
import TypeWriter from "react-typewriter";

const Banner = () => {
    return (
    <div id = "Banner" className = "banner">
       <div className = "introduction">
            <div className = "introduction-text">
                {/* <div className = "typeWriter"> */}
                    <TypeWriter typing={0.6}>
                        <div className = "header">
                            <h1>HI,<br/>I'M JACQUELINE</h1>
                        </div>
                        <div className = "header-media">
                            <h1>HI, I'M<br/>JACQUELINE</h1>
                        </div>
                    </TypeWriter>
                {/* </div> */}
                {/* <HiArrowLongDown className = "down-arrow" size={60} style = {{color: "#fdfcf2"}} /> */}
            </div>
            <div className = "spacer_1"></div>
            <div className = "welcome">
                    <p>welcome to my portfolio</p>
            </div>
       </div>
    </div>
    );
}

export default Banner
