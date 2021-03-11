import React from "react";

import Demo from "../Demo/Demo";
import Description from "../Description/Description";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";

import logo from "../../assets/logo.png";
import phone from "../../assets/phone.svg";
import screenshot from "../../assets/screenshot.png";
import wave from "../../assets/wave.svg";

function Homepage() {
    return (
        <div>
            <Header logoSrc = {logo}/>
            <Intro logoSrc = {logo} waveSrc = {wave}/>
            <Description screenshotSrc = {screenshot}/>
            <Demo phoneSrc = {phone}/>
            <Footer/>
        </div>
    )
}

export default Homepage;
