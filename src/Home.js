import React from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./HomeStyle.css";
import BannerScrollParent from "./components/BannerScrollParent";
import Experience from "./components/Experience";

const Home = () => {
    return <div className = "parent-container">
        <Banner/>
        <About/>
        <Skills/>
        <BannerScrollParent/>
        <Projects/>
        <Footer/> 
    </div>
}

export default Home