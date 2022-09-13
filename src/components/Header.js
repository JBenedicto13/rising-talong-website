import React from "react";
import '../styles/header.css';
import pic1 from '../assets/pic1.jpg';


function Header() {
    return(
        
            <header>
                    <img src="" alt="LOGO" className="logo"></img>
                    <ul>
                        <li><a>ABOUT</a></li>
                        <li><a>ROADMAP</a></li>
                        <li><a>TEAM</a></li>
                        <li><a>MINT</a></li>
                    </ul>
            </header>
        
    )
}

export default Header