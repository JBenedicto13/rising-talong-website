import React from "react";
import '../styles/utility.css';
import util1 from '../assets/utility/util1.png';
import util2 from '../assets/utility/util2.png';
import util3 from '../assets/utility/util3.png';
import util4 from '../assets/utility/util4.png';
import util5 from '../assets/utility/util5.png';
import eggplant from '../assets/utility/eggplant.png';
import soil from '../assets/utility/soil.png';

function Utility() {
  return (
      <section className="utilitySec" id="utilityId">
        <img id="eggplantImg" src={eggplant} alt='eggplant'></img>
        <img id="soilImg" src={soil} alt='soil'></img>
        
         <h1 className="title">Talong Holder Utility</h1>
         <div className="utility-container">
          <div className="util-group gap-5">
            <div className="utility-card">
              <div className="util-card-header">
                <img src={util1} alt="a"></img>
              </div>
              <div className="util-card-body">
                <p className="util-text util-title">#1 TROPANG TALONG MEMBERSHIP</p>
                <p className="util-text">Every NFT serves as a membership pass to a specific "Tropahan" or group, it will also serve as an exclusive pass to future events such as workshops, raffles, and other project features to come.</p>
              </div>
            </div>

            <div className="utility-card">
              <div className="util-card-header">
                <img src={util2} alt="a"></img>
              </div>
              <div className="util-card-body">
                <p className="util-text util-title">#2 exclusive web3 skill 
workshop</p>
                <p className="util-text">We believe in the method of empowering individuals through learning! Rising Eggplants aim to provide exclusive workshops revolving around project management, moderation, making art, hosting, and more!</p>
              </div>
            </div>
          </div>

          <div className="util-group gap-5">
            <div className="utility-card">
              <div className="util-card-header">
                <img src={util3} alt="a"></img>
              </div>
              <div className="util-card-body">
                <p className="util-text util-title">#3 access to talong alpha
channel</p>
                <p className="util-text">Throughout our journey, we would continue to onboard partners or "Katropa" that would provide benefits such as discounts and perks to our holders!</p>
              </div>
            </div>

            <div className="utility-card">
              <div className="util-card-header">
                <img src={util4} alt="a"></img>
              </div>
              <div className="util-card-body">
                <p className="util-text util-title">#4 access to partner
discounts</p>
                <p className="util-text">Rising Eggplants aim to provide various opportunities to its holders through alpha calls, job alerts, and other things they will benefit from. We will provide value!</p>
              </div>
            </div>
          </div>

          <div className="util-group gap-5">
            <div className="utility-card">
              <div className="util-card-header">
                <img src={util5} alt="a"></img>
              </div>
              <div className="util-card-body">
                <p className="util-text util-title">#5 talong physical items
(coming soon)</p>
                <p className="util-text">Through time, we would dive into possibilities of incorporating eggplants into physical items to further show our love and support! Stickers? Keychains? Let's see!</p>
              </div>
            </div>
          </div>
            
         </div>
      </section>
      // <section className="roadMapSec" id="roadMapId"> 
      //    <h1 className="title">TALONG MAP</h1>
      //    <div className="road-map"> 
      //       <div className="branch-container">
      //          <div className="branch-1">
      //             <p>BRANCH 1</p>
      //             <ol>
      //                <li>
      //                   SETUP DISCORD SERVER
      //                   AND SOCMED ACCOUNTS 
      //                </li>
      //                <li>
      //                   ESTABLISH TALONG 
      //                   COMMUNITY AND PARTNERSHIPS
      //                </li>
      //                <li>
      //                   LIST 2222 TALONGS IN 
      //                   THE POLYGON BLOCKCHAIN
      //                </li>
      //             </ol>
      //          </div>
      //          <div className="branch-2">
      //             <p>BRANCH 2</p>
      //                <ol start={4}>
      //                   <li>
      //                      TALONG LOVER MINTING:2 MATIC
      //                   </li>
      //                   <li>
      //                      TALONG LISTED MINTING:2 MATIC
      //                   </li>
      //                   <li>
      //                      PUBLIC MINTING: 5 MATIC
      //                   </li>
      //                   <li>
      //                      THE RISE OF TALONG COMICS
      //                   </li>
      //                   <li>
      //                      RISE OF TROPANG TALONG
      //                   </li>
      //                   <li>
      //                   &#127814; 1~554 TALONGS TALONG RARITY
      //                   </li>
      //                </ol>
      //          </div>
      //          <div className="branch-3">
      //             <p>BRANCH 3</p>
      //             <ol start={10}>
      //                <li>
      //                   EXECUTION OF TALONG FUSION A
      //                   BREEDING &#40; 1111 SOLD &#41;
      //                </li>
      //                <li>
      //                   DISBURSEMENT OF UTILITIES
      //                   FOR THE HOLDERS
      //                </li>
      //                <li>
      //                   INVOLVEMENT TO AGRICULTURAL/  
      //                   ENVIRONMENTAL INITIATIVES
      //                </li>
      //             </ol>
      //          </div>
      //          <div className="branch-4">
      //             <p>BRANCH 4</p>
      //                <ol start={13}>
      //                   <li>
      //                      START OF RISING EGGPLANT V2
      //                   </li>
      //                   <li>
      //                      STAKING WITH MINKA 
      //                   </li>
      //                   <li>
      //                      TALONGTADONG TALONG
      //                   </li>
      //                </ol>
      //          </div>
      //       </div>
      //    </div>
      // </section>
  )
}
export default Utility