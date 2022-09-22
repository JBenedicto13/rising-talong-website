import React from "react";
import '../styles/partners.css';
import ininja from '../assets/Logo/ININJA.png';
import pixel from  '../assets/Logo/hammy.png';
import newbs from  '../assets/Logo/newbs.png';
import company from '../assets/Logo/Company.png';
import tclogo3 from '../assets/Logo/TCLOGO3.png';
import dye2row from '../assets/Logo/DYE2ROW.png';
import meemoo from '../assets/Logo/MEEMOO.png';
import tshirt from '../assets/Logo/Tshirt_Front.png';
function Partners() {
  return (
    <section className="containerPartners" id="partnersId">
      <div className="partners">
        <div className="titlePartners"><h3>PARTNERS</h3></div>
        <div className="firstRow">
          <div>
              <img className="logo" src={ininja} alt="ininja"/>
          </div>
          <div>
              <img className="logo" src={pixel} alt="pixel"/>
          </div>
          <div>
            <img className="logo" src={newbs} alt="newbs"/>
          </div>
          <div>
            <img className="logo" src={company} alt="company"/>
          </div>
        </div>
        <div className="secondRow">
          <div>
              <img className="logo" src={tclogo3} alt="tclogo3"/>
          </div>
          <div>
              <img className="logo" src={dye2row} alt="dye2row"/>
          </div>
          <div>
            <img className="logo" src={meemoo} alt="meemoo"/>
          </div>
          <div>
            <img className="logo" src={tshirt} alt="tshirt"/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Partners