import {React, useState} from "react";
import '../styles/footer.css';
import logoFooter from '../assets/logo.png';
import dc from '../assets/discord.png';
import dcGreen from '../assets/discord-green.png';
import open_sea from '../assets/opensea.png';
import open_seaGreen from '../assets/opensea-green.png';
import twitter from '../assets/twitter.png';
import twitterGreen from '../assets/twitter-green.png';
function Footer(){
  const [enterTwitter, setEnterTwitter] = useState(false);
  const [enterDc, setEnterDc] = useState(false);
  const [enterOpensea, setEnterOpensea] = useState(false);
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
                <a
                href="https://twitter.com/risingeggplants"
                onMouseOver={() => setEnterTwitter(true)}
                onMouseOut={() => setEnterTwitter(false)}
                target="_blank"
                rel="noreferrer noopener">
                  <img
                      src={enterTwitter ? twitterGreen : twitter}
                      className="social"
                      alt="twitterIcon">
                    </img>
                </a>
              </li>
              <li>
                <a
                  onMouseOver={() => setEnterDc(true)}
                  onMouseOut={() => setEnterDc(false)}
                  href="https://discord.com/invite/uQZxNDDE"
                  target="_blank"
                  rel="noreferrer noopener">
                    <img
                      src={enterDc ? dcGreen : dc}
                      className="social"
                      alt="dcIcon">
                    </img>
                  </a>
              </li>
              <li>
                <a
                  onMouseOver={() => setEnterOpensea(true)}
                  onMouseOut={() => setEnterOpensea(false)}
                  href="https://opensea.io/"
                  target="_blank"
                  rel="noreferrer noopener">
                    <img
                      src={enterOpensea ? open_seaGreen : open_sea}
                      className="social"
                      alt="openseaIcon">
                    </img>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/risingeggplants"><button className="btn-mint">MINT</button></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer