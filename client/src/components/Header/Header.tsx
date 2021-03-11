import React, { useState, useEffect } from 'react';

import "./Header.scss";

interface IProps {
    logoSrc: string
}

function Header({ logoSrc }: IProps) {
    const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
    const [visible, setVisibility] = useState(false);

    const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset;
        const isVisible = previousScrollPosition > currentScrollPosition;
        
        setPreviousScrollPosition(currentScrollPosition);
        setVisibility(isVisible);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if(window.pageYOffset < 50) {
            setVisibility(true)
        }
    })

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    return (
        <div className = {visible ? "header" : "header-hidden"}>
            <img src = {logoSrc} alt = "logo"/>
            <div className = "tags">
                <a href = "#description">Description</a>
                <a href = "#demo">Demo</a>
                <a href = "#footer">Contact</a>
            </div>
        </div>
    )
}

export default Header;
