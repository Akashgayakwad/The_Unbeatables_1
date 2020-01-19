import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'
import axios from 'axios'
import Signpad from '../../Signpad/Signpad'
import uuid from 'uuid'
import { Redirect } from 'react-router';

class Form1 extends Component {
    
    state = {
        type:0,
        firstName:"",
        lastName: "",
        telephoneNumber: "",
        faxnumber:"",
        email_telex_number: "",
        nationality: "",
        designation: "",
        line1: "",
        line: "",
        city: "", 
        state: "",
        country: "",
        postalcode: "",
        sign: null,
        success: false
    }

    handleSubmit = (e) => {
        const id = sessionStorage.getItem('id')
        console.log(id);
        const fields = {
            "$class": "org.example.airportlicensing.LisenceApplication",
            "id": id,
            "status": "Approved",
            "operator":"resource:org.example.airportlicensing.Operator#uc@gmail.com"          
            // "aerodrome" : {
            //     "$class": "org.example.airportlicensing.Aerodrome",
            //     "placeName":  "string",
            //     "id": id,
            //     "owner": {
            //         "$class": "org.example.airportlicensing.PersonWithoutIdentity",
            //         "firstName": this.state.firstName,
            //         "lastName": this.state.lastName,
            //         "phoneNumber": this.state.phoneNumber,
            //         "email": this.state.email,
            //         "designation": this.state.designation,
            //         "address": {
            //             "$class": "org.example.airportlicensing.Address",
            //             "line1": this.state.addressLine1,
            //             "line": this.state.addressLine2,
            //             "city": this.state.city, 
            //             "state": this.state.State,
            //             "country": this.state.country,
            //             "postalcode": this.state.postalcode
            //         }
            //     }
            // }
        }

        const access_token = sessionStorage.getItem('token');
        fetch('http://3653ec57.ngrok.io/api/LisenceApplication', {
            headers: {
                    "X-Access-Token":access_token,
                    "Content-Type":"application/json"
                },
            method: 'POST',
            body: JSON.stringify(fields)
            })
            .then(response => response.json())
            .then(success => {
                console.log('sucess',success);
                this.setState({success: true});
            })
            .catch(error => console.log(error)
        );
    }
    
    componentDidMount() {
        sessionStorage.setItem('id',uuid.v4().toString())
    }
    
    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    
    render() {
        const setImageURL = (imageURL) =>{
            const whiteURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
            if(imageURL!==whiteURL && imageURL!==this.state.sign)
            {
                this.setState({sign:imageURL},()=>{
                    console.log(this.state.sign);
                });    
            }
        };
        if (this.state.success) {
            return <Redirect to='/form2' />
        }
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
                <h6>
                    Address of applicant
                </h6>
                
                <InputForm 
                    type={this.state.type} 
                    name="Line 1" 
                    onChange={this.handleChange('line1')} 
                    placeholder="Line 1" />
                <InputForm 
                    type={this.state.type} 
                    name="Line 2" 
                    onChange={this.handleChange('line')} 
                    placeholder="Line 2" />
                <InputForm 
                    type={this.state.type} 
                    name="City" 
                    onChange={this.handleChange('city')} 
                    placeholder="City" />
                <InputForm 
                    type={this.state.type} 
                    name="State" 
                    onChange={this.handleChange('state')} 
                    placeholder="state" />
                <InputForm 
                    type={this.state.type} 
                    name="Country" 
                    onChange={this.handleChange('country')} 
                    placeholder="country" />
                
                <InputForm 
                    type={this.state.type} 
                    name="Postal Code" 
                    onChange={this.handleChange('postalcode')} 
                    placeholder="Postal Code" />
                <InputForm 
                    type={this.state.type} 
                    name="Telephone Number" 
                    onChange={this.handleChange('telephonenumber')} 
                    placeholder="Telephone Number" />
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
                <Signpad setImageURL={setImageURL}/>
                <button type="button" onClick={this.handleSubmit} class="btn btn-success">Submit</button>
            </div>
        )
    }
}

export default Form1
