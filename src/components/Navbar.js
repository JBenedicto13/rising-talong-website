import React, { useState } from "react";
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

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [enterTwitter, setEnterTwitter] = useState(false);
  const [enterDc, setEnterDc] = useState(false);
  const [enterOpensea, setEnterOpensea] = useState(false);
  return (
    <>
      <nav className='navbar sticky-top'>
        <img src={logo} className="logo" alt="logo"></img>
        
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='#aboutId'>
            <li>About</li>
          </Link>
          <Link to='#roadMapId'>
            <li>Roadmap</li>
          </Link>
          <Link to='#teamId'>
            <li>Team</li>
          </Link>
          <Link to='/'>
            <li>Mint</li>
          </Link>
          <li className="socialIcons"><a
              href="https://twitter.com/"
              onMouseOver={() => setEnterTwitter(true)}
              onMouseOut={() => setEnterTwitter(false)}>
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
              href="https://discord.com/">
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
              href="https://opensea.io/">
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