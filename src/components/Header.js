import React from "react";
import '../styles/header.css';
import pic1 from '../assets/pic1.jpg';

function Header() {
    return(
        <div className="header">
            <ul>
                <li><a className="first">This is haha</a></li>
                
            </ul>
            <img src={pic1} style={{height: "100px", width: "100px"}} />
            <h1>Hi world</h1>
        </div>
    )
}

export default Header