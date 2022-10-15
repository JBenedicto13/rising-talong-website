import React from "react";
import '../styles/footer.css';
import logoFooter from '../assets/logo.png';
import twitter from '../assets/twitter.png';
import dc from '../assets/discord.png';
import open_sea from '../assets/opensea.png';
function Footer(){
  return (
    <div className="footer">
      <footer className="footerContainer">
        <div className="logoFooter">
          <img src={logoFooter} alt='logo'></img>
          <h3>RISE WITH US</h3>
        </div>
        <div className="iconsFooter">
          <h3>RISE WITH US</h3>
          <div>
            <ul>
              <li>
                <a href="#"><img src={twitter} alt='twitter'></img></a>
              </li>
              <li>
                <a href="#"><img src={dc} alt='dc'></img></a>
              </li>
              <li>
                <a href="#"><img src={open_sea} alt='opensea'></img></a>
              </li>
              <li>
                <a href="#"><button className="btn-mint">MINT</button></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer