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
                <p className="util-text util-title">#2 exclusive web3 skills 
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
  )
}
export default Utility