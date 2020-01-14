import React, { Component } from 'react'
import InputForm from '../../FormComponents/InputForm'
import Labels from '../../FormComponents/Labels'

export class Form1 extends Component {
    
    state = {
        nameofApplicantdef:"",
        AddressofAuthoritydef:"",
        DateofApprovaldef:"",
        ReferenceofApprovaldef:"",
        
        nameofApplicantha:"",
        AddressofAuthorityha:"",
        DateofApprovalha:"",
        ReferenceofApprovalha:"",

        nameofApplicantownland:"",
        AddressofAuthorityownland:"",
        DateofApprovalownland:"",
        ReferenceofApprovalownland:"",

        nameofApplicantloc:"",
        AddressofAuthorityloc:"",
        DateofApprovalloc:"",
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
                <Labels head="Ministry of Defence" faded=""/>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthoritydef')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthoritydef')} placeholder="Address" />
                <InputForm type={0} name="Date of Approval" onChange={this.handleChange('DateofApprovaldef')} placeholder="Date of Approval" />
                <InputForm type={0} name="Date of Approval" onChange={this.handleChange('ReferenceofApprovaldef')} placeholder="Reference of Approval" />
                
                <Labels head="Ministry of Home Affairs" faded=""/>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityha')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityha')} placeholder="Address" />
                <InputForm type={0} name="Date of Approval" onChange={this.handleChange('DateofApprovalha')} placeholder="Date of Approval" />
                <InputForm type={0} name="Date of Approval" onChange={this.handleChange('ReferenceofApprovalha')} placeholder="Reference of Approval" />
                
                <Labels head="Owner of the land" faded=""/>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityownland')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityownland')} placeholder="Address" />
                <InputForm type={0} name="Date of Approval" onChange={this.handleChange('DateofApprovalownland')} placeholder="Date of Approval" />
                <InputForm type={0} name="Date of Approval" onChange={this.handleChange('ReferenceofApprovalownland')} placeholder="Reference of Approval" />
                
                <Labels head="Local authority such as municipal corporation / committee or urban land development Board/ authority of the State or its Country and Town Planning Department" faded=""/>
                <InputForm type={0} name="Name of authority" onChange={this.handleChange('nameofAuthorityloc')} placeholder="Name" />
                <InputForm type={0} name="Address of authority" onChange={this.handleChange('AddressofAuthorityloc')} placeholder="Address" />
                <InputForm type={0} name="Date of Approval" onChange={this.handleChange('DateofApprovalloc')} placeholder="Date of Approval" />
                <InputForm type={0} name="Date of Approval" onChange={this.handleChange('ReferenceofApprovalloc')} placeholder="Reference of Approval" />
                
            </div>
        )
    }
}

export default Form1
