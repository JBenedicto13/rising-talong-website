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
        <div>
          <img src={logoFooter}></img>
        </div>

        <div>
          <h3>RISE WITH US</h3>
          <div>
            <ul>
              <li>
                <a href="#"><img src={twitter}></img></a>
             
              </li>
              <li>
                <a href="#"><img src={dc}></img></a>
           
              </li>
              <li>
                <a href="#"><img src={open_sea}></img></a>
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