import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'

class Form1 extends Component {
    
    state = {
        nameofApplicant:"",
        addressofApplicant:"",
        telephonenumber:"",
        faxnumber:"",
        email_telex_number:"",
        nationality:""
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
                <Labels head="DETAILS OF LICENCEE (as required to be shown on the license)" faded=""/>
                <InputForm type={0} name="Full name of applicant" onChange={this.handleChange('nameofApplicant')} placeholder="Name" />
                <InputForm type={0} name="Address of applicant" onChange={this.handleChange('addressofApplicant')} placeholder="Address"/>
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('telephonenumber')} placeholder="Telephone Number" />
                <InputForm type={0} name="Fax Number" onChange={this.handleChange('faxnumber')} placeholder="Fax Number"/>
                <InputForm type={0} name="Email/Telex Number" onChange={this.handleChange('email_telex_number')} placeholder="Email/Telex Number" />
                <InputForm type={0} name="Nationality" onChange={this.handleChange('nationality')} placeholder="Nationality" />
            </div>
        )
    }
}

export default Form1
