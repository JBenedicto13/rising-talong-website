import React from "react";
import '../styles/team.css';

// TeamCards Imports
import MartinC from '../assets/TeamCards/MartinC.png';
import JuanitoO from '../assets/TeamCards/JuanitoO.png';
import MarkC from '../assets/TeamCards/MarkC.png';
import MarkV from '../assets/TeamCards/MarkV.png';
import LizzieD from '../assets/TeamCards/LizzieD.png';
import AlliahA from '../assets/TeamCards/AlliahA.png';
import TheresaB from '../assets/TeamCards/TheresaB.png';
import RoselanI from '../assets/TeamCards/RoselanI.png';
import DarleneV from '../assets/TeamCards/DarleneV.png';
import ZhenB from '../assets/TeamCards/ZhenB.png';
import ChinD from '../assets/TeamCards/ChinD.png';
import AshleeB from '../assets/TeamCards/AshleeB.png';
import IvanM from '../assets/TeamCards/IvanM.png';
import MarinellaC from '../assets/TeamCards/MarinellaC.png';
import CamilleV from '../assets/TeamCards/CamilleV.png';
import RonaldF from '../assets/TeamCards/RonaldF.png';
import AesE from '../assets/TeamCards/AesE.png';
import CriskenM from '../assets/TeamCards/CriskenM.png';

function Team() {
    return (
        <section className="teamSec" id="teamId">
            <div className="team">
                <h1>MEET THE TEAM</h1>
                <div className="row row1">
                    <div className="col cardDiv">
                        <img src={MartinC} alt='MartinC'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={JuanitoO} alt='JuanitoO'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={MarkC} alt='MarkC'></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col cardDiv">
                        <img src={MarkV} alt='MarkV'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={LizzieD} alt='LizzieD'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={AlliahA} alt='AlliahA'></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col cardDiv">
                        <img src={TheresaB} alt='TheresaB'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={RoselanI} alt='RoselanI'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={DarleneV} alt='DarleneV'></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col cardDiv">
                        <img src={ZhenB} alt='ZhenB'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={ChinD} alt='ChinD'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={AshleeB} alt='AshleeB'></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col cardDiv">
                        <img src={IvanM} alt='IvanM'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={MarinellaC} alt='MarinellaC'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={CamilleV} alt='CamilleV'></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col cardDiv">
                        <img src={RonaldF} alt='RonaldF'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={AesE} alt='AesE'></img>
                    </div>
                    <div className="col cardDiv">
                        <img src={CriskenM} alt='CriskenM'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team