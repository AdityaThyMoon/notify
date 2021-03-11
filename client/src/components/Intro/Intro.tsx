import React from 'react';

import "./Intro.scss";

interface IProps {
    logoSrc: string,
    waveSrc: string
}

function Intro( { logoSrc, waveSrc }: IProps) {
    return (
        <div className = "intro">
            <div className = "content">
                <h1>notify</h1>
                <h2>Bringing News To Over 1 Billion People Worldwide!</h2>
                <a href = "#demo">Demo</a>
            </div>
            <img id = "logo" src = {logoSrc} alt = "logo"/>
            <div className = "wave">
                <img src = {waveSrc} alt = "wave"/>
            </div>
            <div className = "bottom-arrow">
                <a href = "#description">
                    <i className="fa fa-chevron-down"></i>
                </a>
            </div>
        </div>
    )
}

export default Intro;
