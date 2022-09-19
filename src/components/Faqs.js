import React from "react"
import '../styles/faqs.css'

function Faqs() {
    return (
        <section className="secteam">
            <div className="Faqs">
                <div class="container text-center">
                    <div class="row faq-title">
                        <div class="col">
                            <h1>FREQUENTLY ASKED QUESTIONS</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header"  id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        MINTING DETAILS?
                                    </button>
                                    </h2>   
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>
                                            Each eggplant would only cost 2 MATIC for Talong Lovers (OG) and Talonglisted (WL)5 MATIC during public minting.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        MISSION & VISION?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>
                                            MISSION <br />
                                            It aims to CONNECT PEOPLE, SUPPORT LOCAL ARTISTS, and PROMOTE SOCIAL INVOLVEMENT. <br />
                                            <br />
                                            VISION <br />
                                            For it TO BE ENGAGED IN SOCIAL, ARTISTIC, and FUN ACTIVITIES with the help of experts and community members.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> 
                                        MAIN UTILITIES OF THE PROJECT?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>
                                            1) Access to Exclusive Art and Environmental Sessions <br />  
                                            2) Discounts from Business and Brand Partners <br />
                                            3) Exclusive Holder Events and Giveaways. <br />
                                            4) ACCESS TO TALONGCOMICS <br />
                                            5) ACCESS TO NFT DEGEN CHANNEL <br />
                                            6) ACCESS TO POSSIBLE WEB3 JOB OPPORTUNITIES
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        WHAT MAKES RISING EGGPLANT DIFFERENT?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>
                                            It is community-focused, goal-driven, and socially involved. The project aims to <br />
                                            develop certain values from the community members and make them experience a <br />
                                            community that promotes involvement and development in various ways.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        WHAT'S THE END GOAL?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>
                                            The end goal is to provide personal and skill development to the holders, as well <br />
                                            as bring them new connections and opportunities they may embrace.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Faqs