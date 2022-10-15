import React from "react";
import '../styles/about.css';
import eggplants from '../assets/eggplants.png';
function About() {
  return (
     <section className="aboutSec" id="aboutId">
        <div className="about">
        <div className="img-container">
            <img className="eggplants" src={eggplants} alt="eggplants"></img>
          </div>
          <div className="text-container">
            <h3>WHAT IS RISING EGGPLANTS?</h3>
            <ul>
              <li>
                RISING EGGPLANTS IS A COLLECTION OF 2222 EGGPLANTS
                THAT WILL SOON RISE IN THE POLYGON BLOCKCHAIN.
              </li>
              <li>
                  IT AIMS TO CONNECT PEOPLE, SUPPORT LOCAL ARTIST, 
                  AND PROMOTE SOCIAL INVOLVEMENT.
              </li>
              <li>
                ASIDE FROM BEING A CHILL AND FUN PROJECT, THE
                VISION FOR THE COMMUNITY IS FOR IT TO BE ENGAGED 
                IN SOCIAL, ARTISTIC, AND FUN ACTIVITIES WITH THE 
                HELP OF EXPERTS AND COMMUNITY MEMBERS.
              </li>
              <li>
                TOGETHER WITH OUR EGGPLANTS, RISE WITH US! &#127814;
              </li>
            </ul>
          </div>
        </div>
     </section>
  )
}
export default About