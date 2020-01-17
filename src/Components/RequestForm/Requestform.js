import React from 'react';

const Requestform = () =>{
    return(
        <div class="col-md-12 m-auto">
            <div class="card card-contact card-raised">
              <div class="row">
                <div class="col-lg-8 col-md-7 pr-md-0">
                  <form role="form" class="p-3" id="contact-form" method="post">
                    <div class="card-header">
                      <h4 class="card-title">Network Access Form</h4>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>First name</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                              </div>
                              <input type="text" class="form-control" placeholder="First Name..." aria-label="First Name..."/>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Last name</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-collection"></i></span>
                              </div>
                              <input type="text" class="form-control" placeholder="Last Name..." aria-label="Last Name..."/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Email address</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Email Here..."/>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Govt. Issued ID Card</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-book-bookmark"></i></span>
                          </div>
                          <input type="file" class="form-control" placeholder="Email Here..."/>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Project Document</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                          </div>
                          <input type="file" class="form-control" placeholder="Email Here..."/>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Your message</label>
                        <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="custom-control custom-checkbox mb-3">
                            <input class="custom-control-input" id="customCheck2" type="checkbox"/>
                            <label class="custom-control-label" for="customCheck2">
                              <span>I'm not a robot</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <button type="submit" class="btn pull-right"  style={{color:"#eeeeee",backgroundColor:"#23374d"}}>Send Request</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-lg-4 col-md-5 pl-md-0" style={{}}>
                  <div class="info text-center"  style={{background:"#23374d",height:"100%"}}>
                    <h4 class="card-title text-white">Contact information</h4>
                    <div class="info info-horizontal mt-lg-5">
                      <div class="icon icon-shape bg-white rounded-circle"  style={{color:"#23374d"}}>
                        <i class="ni ni-square-pin"></i>
                      </div>
                      <div class="description">
                        <p class="info-title text-center text-white mt-2">
                          345 Street 2, Bucharest
                        </p>
                      </div>
                    </div>
                    <div class="info info-horizontal">
                      <div class="icon icon-shape bg-white rounded-circle" style={{color:"#23374d"}}>
                        <i class="ni ni-mobile-button"></i>
                      </div>
                      <div class="description">
                        <p class="info-title text-center text-white mt-2">
                          +16(3412) 421 241
                        </p>
                      </div>
                    </div>
                    <div class="info info-horizontal">
                      <div class="icon icon-shape bg-white rounded-circle" style={{color:"#23374d"}}>
                        <i class="ni ni-email-83"></i>
                      </div>
                      <div class="description">
                        <p class="info-title text-center text-white mt-2">
                          contact@yoursite.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
} 

export default Requestform;