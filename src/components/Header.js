import { React } from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';
import short from '../assets/Short.png';
import long from '../assets/Long.png';

function makeLong() {
    document.getElementById('hero').src = long;
}

function makeShort() {
    document.getElementById('hero').src = short;
}

function Header() {
    return(
        <section className="headerSec" id="headerId">
            <div className="mint">
                <div className="textBox">
                    <p>!TALONG</p>
                    <h1>WHO WILL RISE</h1>
                    <h1>ABOVE ALL EGGPLANTS?</h1>
                    <p>WILL A NEW CLAN EMERGE?</p>
                    <button className="mint-btn"><Link to={"/mint"}>MINT</Link></button>
                </div>
                <div className="imgBox">
                    <img
                        onMouseOver={() => makeLong()}
                        onMouseOut={() => makeShort()}
                        src={short} className="short-talong" alt="hero" id="hero"></img>
                </div>
            </div>
        </section>
    )
}

export default Header