import React from 'react'

import "./Footer.scss";

import devpost from "../../assets/devpost-icon.svg";
import github from "../../assets/GitHub-Mark-64px.png";

function Footer() {
    return (
        <div id = "footer" className = "footer">
            <div className = "social-media-icons">
                <a href = "https://github.com/TheAdityaMoon/notify" target = "_blank" rel="noopener noreferrer">
                    <img src = {github} alt = "github"/>
                </a>
                <a href = "https://devpost.com/software/notify-nc4tkv" target = "_blank" rel="noopener noreferrer">
                    <img src = {devpost} alt = "devpost"/> 
                </a>
            </div>
            <h3 id = "copyright">© 2020.</h3>
            <h3>Made with love by the notify team</h3>
            <div className = "programmers">
                <a href = "https://github.com/TheAdityaMoon" target = "_blank" rel="noopener noreferrer">
                    <img
                        src = "https://avatars2.githubusercontent.com/u/56058964?s=460&u=e5eab41d3de68b6fa6f09dac5069bc5a78122524&v=4"
                        alt = "programmer-1"
                    />
                </a>
                <a href = "https://github.com/alvanli" target = "_blank" rel="noopener noreferrer">
                    <img
                        src = "https://avatars1.githubusercontent.com/u/51011489?s=400&u=9a944957b50ca6b08e97c70532d6b9429149355f&v=4"
                        alt = "programmer-2"
                    />
                </a>
                <a href = "https://github.com/KavpreetGrewal" target = "_blank" rel="noopener noreferrer">
                    <img 
                        src = "https://avatars0.githubusercontent.com/u/59240145?s=400&v=4"
                        alt = "programmer-3"
                        />
                </a>
                <a href = "https://github.com/michellemx-lai" target = "_blank" rel="noopener noreferrer">
                    <img 
                        src = "https://avatars3.githubusercontent.com/u/70861416?s=400&v=4"
                        alt = "programmer-4"
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer;
