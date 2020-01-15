import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'
import Date from '../FormComponents/Date'

export class Form5 extends Component {
    
    state = {
        nameofApplicantdef:"",
        AddressofAuthoritydef:"",
        DateofApprovaldef:new Date(),
        ReferenceofApprovaldef:"",
        
        nameofApplicantha:"",
        AddressofAuthorityha:"",
        DateofApprovalha:new Date(),
        ReferenceofApprovalha:"",

        nameofApplicantownland:"",
        AddressofAuthorityownland:"",
        DateofApprovalownland:new Date(),
        ReferenceofApprovalownland:"",

        nameofApplicantloc:"",
        AddressofAuthorityloc:"",
        DateofApprovalloc:new Date(),
        ReferenceofApprovalloc:"",

        
    }

// 0 for normal input Form
// 1 form under evaluation but needs any change
// 2 for sucessful Form only readme 
// 3 for incorrect form needs change with the error
// 4 for incorect and rejected so diabled with the error

    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <Labels head="PERMISSIONS AND APPROVALS" faded="Attach the attested copies, if not submitted earlier with CA93"/>
                <h5>
                    Ministry of Defence
                </h5>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthoritydef')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthoritydef')} placeholder="Address" />
                <Date name="Date of Approval" handleChange={this.handleChange('DateofApprovaldef')} placeholder="Date of Approval"/>
                <InputForm type={0} name="Reference of Approval" onChange={this.handleChange('ReferenceofApprovaldef')} placeholder="Reference of Approval" />
                
                
                <h5>
                    Ministry of Home Affairs
                </h5>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityha')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityha')} placeholder="Address" />
                <Date name="Date of Approval" handleChange={this.handleChange('DateofApprovalha')} placeholder="Date of Approval"/>
                <InputForm type={0} name="Refernce of Approval" onChange={this.handleChange('ReferenceofApprovalha')} placeholder="Reference of Approval" />
                
                
                <h5>
                Owner of the land
                </h5>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityownland')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityownland')} placeholder="Address" />
                <Date name="Date of Approval" handleChange={this.handleChange('DateofApprovalownland')} placeholder="Date of Approval"/>
                <InputForm type={0} name="Reference of Approval" onChange={this.handleChange('ReferenceofApprovalownland')} placeholder="Reference of Approval" />
                
                <h5>
                Local authority such as municipal corporation / committee or urban land development Board/ authority of the State or its Country and Town Planning Department
                </h5>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityloc')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityloc')} placeholder="Address" />
                <Date name="Date of Approval" handleChange={this.handleChange('DateofApprovalloc')} placeholder="Date of Approval"/>
                <InputForm type={0} name="Reference of Approval" onChange={this.handleChange('ReferenceofApprovalloc')} placeholder="Reference of Approval" />
                
            </div>
        )
    }
}

export default Form5
