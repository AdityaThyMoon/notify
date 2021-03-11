import React from "react";

import "./Description.scss";

interface IProps {
    screenshotSrc: string
}

function Description({ screenshotSrc }: IProps) {
    return (
        <div id = "description" className = "description">
            <img src = {screenshotSrc} alt = "screenshot"/>
            <div id = "details">
                <h2>The Problem</h2>
                <p>
                    The internet is indispensable in the modern world for receiving crucial news updates. In India alone, over 700 million people
                    do not have consistent internet access. And in the world, 3.6 billion people do not have access to the internet. Many people
                    from across the world do not have consistent internet access, preventing them from receiving pivotal news updates that could
                    potentially save their lives, and the lives of others around them.
                </p>
                <h2>Our Solution</h2>
                <p>
                    In India, you can send a text for as little as $0.087 CAD. The good news is that while consistent internet access is very 
                    limited for many across the world, SMS plans are surprisingly cheap. If reliable internet access is very limited, but SMS is 
                    very cheap, then this must mean that out of the 3.6 billion people who do not have reliable internet access, many of them 
                    must still have access to SMS. That's why we created notify, an SMS based news source, that sends regionally-queried, 
                    customizable, and scheduled news updates. With notify, millions of people across the globe can stay informed no matter where
                    they are :)
                </p>
            </div>
        </div>
    )
}

export default Description;
