import React, { Component } from 'react';

class Requestform extends Component{
    constructor(props){
      super(props);
    }
    state ={
      fname:"",
      lname:"",
      email:"",
      inspector:false,
      id_card:null,
      proj_doc:null,
      proposal:""
    }
  render(){
    const handleUserRole = () =>{
      this.setState({inspector:!this.state.inspector})
    }

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
                              <input type="text" class="form-control" placeholder="First Name..." aria-label="First Name..." value={this.state.fname} onChange={ (event)=> this.setState({fname:event.target.value})}/>
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
                              <input type="text" class="form-control" placeholder="Last Name..." aria-label="Last Name..." value={this.state.lname} onChange={ (event)=> this.setState({lname:event.target.value})}/>
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
                          <input type="text" class="form-control" placeholder="Email Here..." value={this.state.email} onChange={ (event)=> this.setState({email:event.target.files[0]})}/>
                        </div>
                      </div>

                      <div class="form-group">
                          <p>if applicable</p>

                          <div class="custom-control custom-checkbox mb-3">
                            <input class="custom-control-input" id="customCheck1" type="checkbox" onChange={handleUserRole} checked={this.state.inspector?"checked":null}/>
                            <label class="custom-control-label" for="customCheck1">Aerodrome Inspector</label>
                          </div>
                      </div>

                      {!this.state.inspector?(<div class="form-group">
                        <label>Govt. Issued ID Card</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-book-bookmark"></i></span>
                          </div>
                          <input type="file" class="form-control" placeholder="Email Here..." value={this.state.id_card} onChange={ (event)=> this.setState({id_card:event.target.value})}/>
                        </div>
                      </div>):null}

                      {this.state.inspector?(<div class="form-group">
                        <label>Aerodrome Inspector ID Card</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-book-bookmark"></i></span>
                          </div>
                          <input type="file" class="form-control"/>
                        </div>
                      </div>):null}
                      
                      <div class="form-group">
                        <label>Project Document</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                          </div>
                          <input type="file" class="form-control"/>
                        </div>
                      </div>
                      
                      <div class="form-group">
                        <label>Request Proposal</label>
                        <textarea name="message" class="form-control" id="message" rows="6" placeholder="Write your request propsoal here"></textarea>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="custom-control custom-checkbox mb-3">
                            <input class="custom-control-input" id="customCheck3" type="checkbox"/>
                            <label class="custom-control-label" for="customCheck3">
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
                    <h4 class="card-title text-white">Welcome To Registration Portal</h4>
                    <div class="info info-horizontal mt-lg-5">
                      <div class="icon icon-shape bg-white rounded-circle"  style={{color:"#23374d",marginLeft:"130px"}}>
                        <i class="ni ni-square-pin"></i>
                      </div>
                      <br/>
                      <br/>
                      <div class="description">
                        <p class="info-title text-center text-white mt-2">
                        Office of the<br/>Director General of Civil Aviation<br/>Opposite Safdarjung Airport<br/>New Delhi-110003
                        </p>
                      </div>
                    </div>
                    <div class="info info-horizontal">
                      <div class="icon icon-shape bg-white rounded-circle" style={{color:"#23374d",marginLeft:"60px"}}>
                        <i class="ni ni-mobile-button"></i>
                      </div>
                      <div class="description">
                        <p class="info-title text-left text-white mt-2">
                          +91-9876543210
                        </p>
                      </div>
                    </div>
                    <div class="info info-horizontal">
                      <div class="icon icon-shape bg-white rounded-circle" style={{color:"#23374d",marginLeft:"50px"}}>
                        <i class="ni ni-email-83"></i>
                      </div>
                      <div class="description">
                        <p class="info-title text-left text-white mt-2">
                          someone@dgca.nic.in
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
} 

export default Requestform;