import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./HomeStyle.css";
import BannerScrollParent from "./components/BannerScrollParent";
import WaveFunction from "./components/Wave";
import Experience from "./components/Experience";

const Home = () => {
    return <div className = "parent-container">
        <NavBar/>
        <Banner/>
        <About/>
        <Skills/>
        <BannerScrollParent/>
        <Projects/>
        <Footer/> 
    </div>
}

export default Home