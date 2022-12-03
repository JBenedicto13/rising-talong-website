import React from "react";
import '../styles/partners.css';
import ininja from '../assets/Logo/ININJA.png';
import pixel from  '../assets/Logo/hammy.png';
import newbs from  '../assets/Logo/newbs.png';
import tinygeisha from '../assets/Logo/tinygeisha.png';
import tclogo3 from '../assets/Logo/TCLOGO3.png';
import dye2row from '../assets/Logo/DYE2ROW.png';
import meemoo from '../assets/Logo/MEEMOO.png';
import tshirt from '../assets/Logo/Tshirt_Front.png';
function Partners() {
  return (
    <section className="partnersSec" id="partnersId">
      <div className="partners">
          <h1>PARTNERS</h1>
          <div className="row row1">
              <div className="col cardDiv">
                  <img src={ininja} alt='ininja'></img>
              </div>
              <div className="col cardDiv">
                  <img src={pixel} alt='pixel'></img>
              </div>
              <div className="col cardDiv">
                  <img src={newbs} alt='newbs'></img>
              </div>
              <div className="col cardDiv">
                  <img src={tinygeisha} alt='tinygeisha'></img>
              </div>
          </div>

          <div className="row">
              <div className="col cardDiv">
                  <img src={tclogo3} alt='tclogo3'></img>
              </div>
              <div className="col cardDiv">
                  <img src={dye2row} alt='AlliahA'></img>
              </div>
              <div className="col cardDiv">
                  <img src={meemoo} alt='meemoo'></img>
              </div>
              <div className="col cardDiv">
                  <img src={tshirt} alt='tshirt'></img>
              </div>
          </div>
      </div>
  </section>
  )
}
export default Partners