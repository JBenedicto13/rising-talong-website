import React from "react";
import '../styles/header.css';
import logo from '../assets/logo.png';
import dc from '../assets/discord.png';
import open_sea from '../assets/opensea.png';
import twitter from '../assets/twitter.png';
import short from '../assets/Short.png';

//Routing
import { HashLink as Link } from "react-router-hash-link";

function Header() {
    return(
        <section className="headerSec" id="headerId">
            <header>
                    <img src={logo} className="logo"></img>
                    <ul>
                        <li><Link to='#aboutId'>ABOUT</Link></li>
                        <li><Link to='#roadMapId'>ROADMAP</Link></li>
                        <li><Link to='#teamId'>TEAM</Link></li>
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