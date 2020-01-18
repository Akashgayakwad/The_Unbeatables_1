import React from 'react';

const Faq = () =>{
    return (
        <div class="accordion-1">
            <div class="container">
                <div class="row">
                <div class="col-md-12 ml-auto">
                    <div class="accordion my-3" id="accordionExample">
                    <h1>Frequently Asked Questions</h1>

                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is the duration of the process?
                            <i class="ni ni-bold-down float-right"></i>

                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body opacity-8">
                            The process is of 90 days.
                        </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Who can tell me the documents required for licensing?
                            <i class="ni ni-bold-down float-right"></i>

                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body opacity-8">
                            You can visit <a href="http://dgca.nic.in/manuals/ProceMan_Aero.pdf">here</a> to get all the process details.
                           </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Do we provide a license for both public and private use?
                            <i class="ni ni-bold-down float-right"></i>

                            </button>
                        </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body opacity-8">
                            Yes.    
                        </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-controls="collapseFour">
                            Who will inspect us onsite?
                            <i class="ni ni-bold-down float-right"></i>
                            </button>
                        </h5>
                        </div>

                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body opacity-8">
                            Director General of Civil Aviation will assign an Aerodrome Inspector with his team, who will be responsible for onsite inspection.
                        </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingFifth">
                        <h5 class="mb-0">
                            <button class="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseFifth" aria-controls="collapseFifth">
                            Who will provide us a license?
                            <i class="ni ni-bold-down float-right"></i>

                            </button>
                        </h5>
                        </div>

                        <div id="collapseFifth" class="collapse" aria-labelledby="headingFifth" data-parent="#accordionExample">
                        <div class="card-body opacity-8">
                        Once DOAS recommend DGCA for grant of a license, DOAS generate license number and update license register, then an online license is generated.
                        </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingSixth">
                        <h5 class="mb-0">
                            <button class="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseSixth" aria-controls="collapseSixth">
                            What if our application for new application is rejected at any phase?
                            <i class="ni ni-bold-down float-right"></i>

                            </button>
                        </h5>
                        </div>

                        <div id="collapseSixth" class="collapse" aria-labelledby="headingSixth" data-parent="#accordionExample">
                        <div class="card-body opacity-8">
                        The Aerodrome Inspector will recommend changes and action plan.
                        </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingSeventh">
                        <h5 class="mb-0">
                            <button class="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseSeventh" aria-controls="collapseSeventh">
                            After how many days we have to renew the license?
                            <i class="ni ni-bold-down float-right"></i>

                            </button>
                        </h5>
                        </div>

                        <div id="collapseSeventh" class="collapse" aria-labelledby="headingSeventh" data-parent="#accordionExample">
                        <div class="card-body opacity-8">
                        The license should be renewed in every two years.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}
export default Faq;