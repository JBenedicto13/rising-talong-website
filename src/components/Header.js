import React from "react";
import '../styles/header.css';
import logo from '../assets/logo.png';
import dc from '../assets/discord.png';
import open_sea from '../assets/opensea.png';
import twitter from '../assets/twitter.png';
import short from '../assets/Short.png';

function Header() {
    return(
        <section>
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
                    <div className="mint">
                        <div className="textBox">
                            <p>!TALONG</p>
                            <h1>WHO WILL RISE</h1>
                            <h1>ABOVE ALL EGGPLANTS?</h1>
                            <p>WILL A NEW CLAN EMERGE?</p>
                            <button className="mint-btn"><a href="#">MINT</a></button>
                        </div>
                        <div className="imgBox">
                            <img src={short} className="short-talong"></img>
                        </div>
                    </div>
        </section>
    )
}

export default Header