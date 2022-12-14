import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import logo from '../assets/logo.png';
import dc from '../assets/discord.png';
import dcGreen from '../assets/discord-green.png';
import open_sea from '../assets/opensea.png';
import open_seaGreen from '../assets/opensea-green.png';
import twitter from '../assets/twitter.png';
import twitterGreen from '../assets/twitter-green.png';

//Routing
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [enterTwitter, setEnterTwitter] = useState(false);
  const [enterDc, setEnterDc] = useState(false);
  const [enterOpensea, setEnterOpensea] = useState(false);
  const [onHome, setOnHome] = useState(true);
  const navigate = useNavigate();
  const [document_title, setDoucmentTitle] = useState("RisingEggplants");
   useEffect(() => {
    document.title = document_title; 
  },[document_title]);

  return (
    <>
      <nav className='navbar sticky-top'>
        <img onClick={() => navigate('/home')} src={logo} className="logo" alt="logo"></img>
        
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to={onHome ? "#headerId" : "/#headerId"} onClick={() => {setOnHome(true); setDoucmentTitle("RisingEggplants");}}>
            <li>Home</li>
          </Link>
          <Link to={onHome ? "#aboutId" : "/#aboutId"} onClick={() => {setOnHome(true); setDoucmentTitle("RE | About");}}>
            <li>About</li>
          </Link>
          <Link to={onHome ? "#utilityId" : "/#utilityId"} onClick={() => {setOnHome(true); setDoucmentTitle("RE | Utility");}}>
            <li>Utility</li>
          </Link>
          <Link to={onHome ? "#teamId" : "/#teamId"} onClick={() => {setOnHome(true); setDoucmentTitle("RE | Team");}}>
            <li>Team</li>
          </Link>
          <Link to='/mint' onClick={() => {setOnHome(false); setDoucmentTitle("RE | Mint");}}>
            <li>Mint</li>
          </Link>
          <li className="socialIcons"><a
              href="https://twitter.com/risingeggplants"
              onMouseOver={() => setEnterTwitter(true)}
              onMouseOut={() => setEnterTwitter(false)}
              target="_blank"
              rel="noreferrer noopener">
                  <img
                      src={enterTwitter ? twitterGreen : twitter}
                      className="social"
                      alt="twitterIcon"
                  />
              </a>
          </li>
          <li className="socialIcons"><a
              onMouseOver={() => setEnterDc(true)}
              onMouseOut={() => setEnterDc(false)}
              href="https://discord.gg/pZdAdzqgP7"
              target="_blank"
              rel="noreferrer noopener">
                  <img
                      src={enterDc ? dcGreen : dc}
                      className="social"
                      alt="dcIcon"
                  />
              </a>
          </li>
          <li className="socialIcons"><a
              onMouseOver={() => setEnterOpensea(true)}
              onMouseOut={() => setEnterOpensea(false)}
              href="https://opensea.io/collection/rising-eggplants"
              target="_blank"
              rel="noreferrer noopener">
                  <img
                      src={enterOpensea ? open_seaGreen : open_sea}
                      className="social"
                      alt="openseaIcon"
                  />
              </a>
          </li>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
