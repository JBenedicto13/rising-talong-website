import React from "react";
import '../styles/header.css';
import logo from '../assets/logo.png';
import dc from '../assets/discord.png';
import open_sea from '../assets/opensea.png';
import twitter from '../assets/twitter.png';

function Header() {
    return(
        
            <header>
                    <img src={logo} className="logo"></img>
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">ROADMAP</a></li>
                        <li><a href="#">TEAM</a></li>
                        <li><a href="#">MINT</a></li>
                        <li><a href="#"><img src={twitter} className="social"></img></a></li>
                        <li><a href="#"><img src={dc} className="social"></img></a></li>
                        <li><a href="#"><img src={open_sea} className="social"></img></a></li>
                    </ul>
            </header>
        
    )
}

export default Header