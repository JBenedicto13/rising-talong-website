import React from "react";
import '../styles/about.css';
import eggplants from '../assets/eggplants.png';
function About() {
  return (
     <section>
        <div className="about">
          <div className="text-container">
            <h3>WHAT IS RISING EGGPLANTS?</h3>
            <p>RISING EGGPLANTS IS A COLLECTION OF 
               2222 EGGPLANTS THAT WILL SOON RISE IN 
               THE POLYGON BLOCKCHAIN. IT AIMS TO 
               CONNECT PEOPLE, SUPPORT LOCAL ARTIST,
               AND PROMOTE SOCIAL INVOLVEMENT. ASIDE
               FROM BEING A CHILL AND FUN PROJECT, 
               THE VISION FOR THE COMMUNITY IS FOR IT 
               TO BE ENGAGED IN SOCIAL, ARTISTIC, AND 
               FUN ACTIVITIES WITH THE HELP OF 
               EXPERTS AND COMMUNITY MEMBERS.
               TOGETHER WITH OUR EGGPLANTS, RISE 
               WITH US! 
            </p>
          </div>
          <div className="img-container">
            <img className="eggplants" src={eggplants}></img>
          </div>
        </div>
     </section>
  )
}
export default About