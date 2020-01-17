import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'
import axios from 'axios'

class Form1 extends Component {
    
    state = {
        type:0,
        "firstName":"",
        "lastName": "",
        "phoneNumber": "",
        "email": "",
        "designation": "",
        "line1": "",
        "line": "",
        "city": "", 
        "state": "",
        "country": "",
        "postalcode": 0,
    }

    handleSubmit = (e) => {
        const fields = {
            "aerodrome" : {
                "owner": {
                    "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                    "firstName": this.state.firstName,
                    "lastName": this.state.lastName,
                    "phoneNumber": this.state.phoneNumber,
                    "email": this.state.email,
                    "designation": this.state.designation,
                    "address": {
                        "$class": "org.example.airportlicensing.Address",
                        "line1": this.state.addressLine1,
                        "line": this.state.addressLine2,
                        "city": this.state.city, 
                        "state": this.state.State,
                        "country": this.state.country,
                        "postalcode": this.state.postalcode,
                        "id": ""
                    },
                    "id": ""
                }
            }
        }

        const access_token = sessionStorage.getItem('token');
        fetch('', {
            headers: {
                    "X-Access-Token":access_token,
                },
            method: 'POST',
            body: {fields}
            })
            .then(response => response.json())
            .then(success => {
                console.log('sucess');
            })
            .catch(error => console.log(error)
        );
    }
    
    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <Labels head="DETAILS OF LICENCEE (as required to be shown on the license)" faded=""/>
                <InputForm 
                    type={this.state.type} 
                    name="First name of applicant" 
                    onChange={this.handleChange('firstName')} 
                    placeholder="First Name" />
                <InputForm 
                    type={this.state.type} 
                    name="Last Name of applicant" 
                    onChange={this.handleChange('lastName')} 
                    placeholder="Last Name"/>
                <InputForm 
                    type={this.state.type} 
                    name="Telephone Number" 
                    onChange={this.handleChange('telephonenumber')} 
                    placeholder="Telephone Number" />
                <InputForm 
                    type={this.state.type} 
                    name="Fax Number" 
                    onChange={this.handleChange('faxnumber')} 
                    placeholder="Fax Number"/>
                <InputForm 
                    type={this.state.type} 
                    name="Email/Telex Number" 
                    onChange={this.handleChange('email_telex_number')} 
                    placeholder="Email/Telex Number" />
                <InputForm 
                    type={this.state.type} 
                    name="Nationality" 
                    onChange={this.handleChange('nationality')} 
                    placeholder="Nationality" />
            </div>
        )
    }
}

export default Form1
