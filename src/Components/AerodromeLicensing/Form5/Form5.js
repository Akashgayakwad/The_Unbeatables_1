import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'
import Signpad from '../../Signpad/Signpad'
import {Redirect} from 'react-router'


export class Form5 extends Component {
    // Remove all the unnecesaary properties, match it with the fields object in hanlesubmit function
    state = {
        nameofApplicantdef:"",
        AddressofAuthoritydef:"",
        DateofApprovaldef: "",
        ReferenceofApprovaldef:"",
        filedef:null,
        
        nameofApplicantha:"",
        AddressofAuthorityha:"",
        DateofApprovalha:"",
        ReferenceofApprovalha:"",
        fileha:null,

        nameofApplicantownland:"",
        AddressofAuthorityownland:"",
        DateofApprovalownland: "",
        ReferenceofApprovalownland:"",
        fileownland:null,

        nameofApplicantloc:"",
        AddressofAuthorityloc:"",
        DateofApprovalloc:"",
        ReferenceofApprovalloc:"",
        fileloc:null,
        sign:null,
        redirect:false
        
    }

    // 0 for normal input Form
    // 1 form under evaluation but needs any change
    // 2 for sucessful Form only readme 
    // 3 for incorrect form needs change with the error
    // 4 for incorect and rejected so diabled with the error
    
    handleSubmit = (e) => {
        const id = sessionStorage.getItem('id')
        const fields = {
            //match from here
            "approvals": {
                "$class": "org.example.airportlicensing.PermissionsAndApprovals",
                "Defencefile": this.state.filedef,
                "dateApprovalOfMinistryOfDefense": this.state.DateofApprovaldef,
                "HomeAffairsfile": this.state.fileha,
                "dateApprovalOfMinistryOfHomeAffairs": this.AddressofAuthorityha,
                "Ownerfile": this.state.fileownland,
                "dateApprovalOfOwnerOfLand": this.state.DateofApprovalloc,
                "Localfile": this.state.fileloc,
                "dateApprovalOfLocalAuthority": this.state.DateofApprovalownland,
                "id": id
            }
        }
    
        const access_token = sessionStorage.getItem('token');
        fetch('http://3653ec57.ngrok.io/api/LisenceApplication/', {
            headers: {
                    "X-Access-Token":access_token,
                    "Content-Type":"application/json"
                },
            method: 'POST',
            body: JSON.stringify(fields)
            })
            .then(response => response.json())
            .then(success => {
                console.log('sucess');
                this.setState({
                    redirect:true
                })
            })
            .catch(error => console.log(error)
        );
    }

    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }

    handleChangeFileDef = (e) => {
        const ab = e.target.files 
        this.setState({
            filedef : ab[0]
        })
    }

    handleChangeFileHa = (e) => {
        const ab = e.target.files 
        this.setState({
            fileha : ab[0]
        })
    }

    handleChangeFileHa = (e) => {
        const ab = e.target.files 
        this.setState({
            fileha : ab[0]
        })
    }

    handleChangeFileOwnLand = (e) => {
        const ab = e.target.files 
        this.setState({
            fileha : ab[0]
        })
    }

    handleChangeFileLoc = (e) => {
        const ab = e.target.files 
        this.setState({
            fileha : ab[0]
        })
    }
    
    render() {
        if(this.state.redirect) {
            return (<Redirect to='/form6'/>)
        }
        const setImageURL = (imageURL) =>{
            const whiteURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
            if(imageURL!==whiteURL && imageURL!==this.state.sign)
            {
                this.setState({sign:imageURL},()=>{
                    console.log(this.state.sign);
                });    
            }
        };
        return (
            <div>
                <Labels head="PERMISSIONS AND APPROVALS" faded="Attach the attested copies, if not submitted earlier with CA93"/>
                <h5>
                    Ministry of Defence
                </h5>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthoritydef')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthoritydef')} placeholder="Address" />
                <div>
                    <div class="form-group">
                    <h6>Date of Approval</h6>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input type="date" name="DateofApprovaldef" class="flatpickr flatpickr-input form-control" onChange={(e) => {
                                this.setState({
                                    DateofApprovaldef: e.target.value.toString()
                                },() => {
                                    console.log(this.state.DateofApprovaldef);
                                    
                                })
                            }} placeholder="Date of Approval"></input>
                        </div>
                    </div>
                </div>
                <InputForm type={0} name="Reference of Approval" onChange={this.handleChange('ReferenceofApprovaldef')} placeholder="Reference of Approval" />
                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                    <div class="fileinput-new thumbnail img-raised"></div>
                    <div>
                        <span class="btn btn-raised btn-round btn-primary btn-simple btn-file">
                        <span class="fileinput-new">Select File</span>
                        <span class="fileinput-exists">Change</span>
                            <input type="file" name="file" onClick={this.handleChangeFileDef}/>
                        </span>
                    </div>
                </div>
                
                <h5>
                    Ministry of Home Affairs
                </h5>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityha')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityha')} placeholder="Address" />
                <div>
                    <div class="form-group">
                    <h6>Date of Approval</h6>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                        </div>
                        <input class="flatpickr flatpickr-input form-control" onChange={(e) => {
                            this.setState({
                                DateofApprovalha: e.target.value.toString()
                            })
                        }} type="date" placeholder="Date of Approval"></input>
                        </div>
                    </div>
                </div>
                <InputForm type={0} name="Refernce of Approval" onChange={this.handleChange('ReferenceofApprovalha')} placeholder="Reference of Approval" />
                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                    <div class="fileinput-new thumbnail img-raised"></div>
                    <div>
                        <span class="btn btn-raised btn-round btn-primary btn-simple btn-file">
                        <span class="fileinput-new">Select File</span>
                        <span class="fileinput-exists">Change</span>
                            <input type="file" name="fileha" onClick={this.handleChangeFileHa}/>
                        </span>
                    </div>
                </div>
                <h5>
                Owner of the land
                </h5>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityownland')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityownland')} placeholder="Address" />
                <div>
                    <div class="form-group">
                    <h6>Date of Approval</h6>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="flatpickr flatpickr-input form-control" onChange={(e) => {
                                this.setState({
                                    DateofApprovalownland: e.target.value.toString()
                                })
                            }} type="date" placeholder={this.props.placeholder}></input>
                        </div>
                    </div>
                </div>
                <InputForm type={0} name="Reference of Approval" onChange={this.handleChange('ReferenceofApprovalownland')} placeholder="Reference of Approval" />
                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                    <div class="fileinput-new thumbnail img-raised"></div>
                    <div>
                        <span class="btn btn-raised btn-round btn-primary btn-simple btn-file">
                        <span class="fileinput-new">Select File</span>
                        <span class="fileinput-exists">Change</span>
                            <input type="file" name="fileownland" onClick={this.handleChangeFileOwnLand}/>
                        </span>
                    </div>
                </div>
                <h5>
                Local authority such as municipal corporation / committee or urban land development Board/ authority of the State or its Country and Town Planning Department
                </h5>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityloc')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityloc')} placeholder="Address" />
                <div>
                    <div class="form-group">
                    <h6>Date of Approval</h6>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="flatpickr flatpickr-input form-control" onChange={(e) => {
                                this.setState({
                                    DateofApprovalloc: e.target.value.toString()
                                })
                            }} type="date" placeholder={this.props.placeholder}></input>
                        </div>
                    </div>
                </div>
                <InputForm type={0} name="Reference of Approval" onChange={this.handleChange('ReferenceofApprovalloc')} placeholder="Reference of Approval" />
                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                    <div class="fileinput-new thumbnail img-raised"></div>
                    <div>
                        <span class="btn btn-raised btn-round btn-primary btn-simple btn-file">
                        <span class="fileinput-new">Select File</span>
                        <span class="fileinput-exists">Change</span>
                            <input type="file" name="fileloc" onClick={this.handleChangeFileLoc}/>
                        </span>
                    </div>
                </div>
                <Signpad setImageURL={setImageURL}/>
                <button type="button" onClick={this.handleSubmit} class="btn btn-success">Success</button>
            </div>
        )
    }
}

export default Form5
