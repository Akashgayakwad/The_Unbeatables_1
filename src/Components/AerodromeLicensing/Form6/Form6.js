import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'

export class Form6 extends Component {
    
    state = {
        firstNameofBoardMember:"",
        lastNameofBoardMember:"",
        nameofApplicant:"", // create two names first and last name
        firstNameofIncharge:"", // create two names first and last name
        lastNameofIncharge:"",
        firstNameAerodromeSafety:"", // create two names first and last name
        lastNameAerodromeSafety:"", // create two names first and last name
        firstNameMETS:"",
        lastNameMETS:"", // create two names first and last name
        firstNameCNSATM:"", // create two names first and last name
        lastNameCNSATM:"", // create two names first and last name
        nameCNS:"", // create two names first and last name
        nameRFF:"", // create two names first and last name
        nameMET:"", // create two names first and last name
        addressLine1METS:"",
        addressLine2METS:"",
        addressCityMETS:"",
        addressStateMETS:"",
        addressCountryMETS:"",
        adressPostalCodeMETS:"",
        addressLine1CNSATM:"", // create two names first and last name
        addressLine2CNSATM:"", // create two names first and 2ast name
        addressCityCNSATM:"",
        addressStateCNSATM:"",
        addressCountryCNSATM:"",
        adressPostalCodeCNSATM:"",
        numberBoardMenber:"", 
        numberIncharge:"", 
        numberAerodromeSafety:"", 
        numberATM:"", // create two names first and last name
        numberCNS:"", // create two names first and last name
        numberRFF:"", // create two names first and last name
        numberMET:"", // create two names first and last name
        statusBoardMember:"", 
        statusIncharge:"", 
        statusAerodromeSafety:"", 
        statusATM:"", 
        statusCNS:"",
        statusRFF:"",
        statusMET:"",
    }

// 0 for normal input Form
// 1 form under evaluation but needs any change
// 2 for sucessful Form only readme 
// 3 for incorrect form needs change with the error
// 4 for incorect and rejected so diabled with the error

    handleSubmit = (e) => {
        const fields = {
            "mangement": {
                "$class": "org.example.airportlicensing.AerodromeManagementPersonnel",
                "managingDirector": {
                    "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                    "firstName": this.state.firstNameofBoardMember,
                    "lastName": this.state.lastNameofBoardMember,
                    "phoneNumber": this.state.numberBoardMenber,
                    "designation": this.state.statusBoardMember,
                    "id": ""
                },
                "dayToDayIncharge": {
                  "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                  "firstName": this.state.firstNameofIncharge,
                  "lastName": this.state.lastNameofIncharge,
                  "phoneNumber": this.state.numberIncharge,
                  "designation": this.state.statusIncharge,
                  "id": ""
                },
                "areodromeSaftey": {
                  "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                  "firstName": this.state.firstNameAerodromeSafety,
                  "lastName": this.state.lastNameAerodromeSafety,
                  "phoneNumber": this.state.numberAerodromeSafety,
                  "designation": this.state.statusAerodromeSafety,
                  "id": ""
                },
                "providerCNSATM": {
                  "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                  "firstName": this.state.firstNameATM,
                  "lastName": this.state.lastNameATM,
                  "address": {
                    "$class": "org.example.airportlicensing.Address",
                    "line1": this.state.addressLine1CNSATM,
                    "line": this.state.addressLine2CNSATM,
                    "city": this.state.addressCityCNSATM,
                    "state": this.state.addressStateCNSATM,
                    "country": this.state.addressCountryCNSATM,
                    "postalcode": this.state.adressPostalCodeCNSATM,
                    "id": "string"
                  },
                  "id": "string"
                },
                "providerMET": {
                  "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                  "firstName": this.state.firstnameMETS,
                  "lastName": this.state.lastNameMETS,
                  "address": {
                    "$class": "org.example.airportlicensing.Address",
                    "line1": this.state.addressLine1METS,
                    "line": this.state.addressLine2METS,
                    "city": this.state.addressCityMETS,
                    "state": this.state.addressCityMETS,
                    "country": this.state.addressCountryMETS,
                    "postalcode": this.state.adressPostalCodeMETS,
                    "id": ""
                  },
                  "id": "string"
                },
                "dayToDayATM": {
                  "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                  "firstName": "string",
                  "lastName": "string",
                  "phoneNumber": "string",
                  "email": "string",
                  "designation": "string",
                  "address": {
                    "$class": "org.example.airportlicensing.Address",
                    "line1": "string",
                    "line": "string",
                    "city": "string",
                    "state": "string",
                    "country": "string",
                    "postalcode": 0,
                    "id": "string"
                  },
                  "id": "string"
                },
                "dayToDayCNS": {
                  "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                  "firstName": "string",
                  "lastName": "string",
                  "phoneNumber": "string",
                  "email": "string",
                  "designation": "string",
                  "address": {
                    "$class": "org.example.airportlicensing.Address",
                    "line1": "string",
                    "line": "string",
                    "city": "string",
                    "state": "string",
                    "country": "string",
                    "postalcode": 0,
                    "id": "string"
                  },
                  "id": "string"
                },
                "dayToDayRFF": {
                  "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                  "firstName": "string",
                  "lastName": "string",
                  "phoneNumber": "string",
                  "email": "string",
                  "designation": "string",
                  "address": {
                    "$class": "org.example.airportlicensing.Address",
                    "line1": "string",
                    "line": "string",
                    "city": "string",
                    "state": "string",
                    "country": "string",
                    "postalcode": 0,
                    "id": "string"
                  },
                  "id": "string"
                },
                "dayToDayMET": {
                  "$class": "org.example.airportlicensing.PersonWithoutIdentity",
                  "firstName": "string",
                  "lastName": "string",
                  "phoneNumber": "string",
                  "email": "string",
                  "designation": "string",
                  "address": {
                    "$class": "org.example.airportlicensing.Address",
                    "line1": "string",
                    "line": "string",
                    "city": "string",
                    "state": "string",
                    "country": "string",
                    "postalcode": 0,
                    "id": "string"
                  },
                  "id": "string"
                },
                "id": "string"
              },
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
                <Labels head="Board Member/ Managing Director or person having specific responsibility for safety." faded="(To be completed only where the applicant is a company/ corporate/society)" />
                <InputForm type={0} name="First Name" onChange={this.handleChange('firstNameofBoardMember')} placeholder="First Name" />
                <InputForm type={0} name="Last Name" onChange={this.handleChange('lastNameofBoardMember')} placeholder="Last Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusBoardMember')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberBoardMember')} placeholder="Telephone Number" />

                <Labels head="The person in charge of day to day operation of aerodrome." faded="(Please enclose a current Curriculum Vitae [CV])" />
                <InputForm type={0} name="First Name" onChange={this.handleChange('firstNameofIncharge')} placeholder="First Name" />
                <InputForm type={0} name="Last Name" onChange={this.handleChange('lastNameofIncharge')} placeholder="Last Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusIncharge')} placeholder="Status/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberIncharge')} placeholder="Telephone Number" />
                {// create checkbox to aprrove if 6.2 is same or not
                }
                <Labels head="The person responsible for Aerodrome Safety." faded="(Please enclose a current Curriculum Vitae [CV])" />
                <InputForm type={0} name="First Name" onChange={this.handleChange('firstNameAerodromeSafety')} placeholder="First Name" />
                <InputForm type={0} name="Last Name" onChange={this.handleChange('lastNameAerodromeSafety')} placeholder="Last Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusAerodromeSafety')} placeholder="Status/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberAerodromeSafety')} placeholder="Telephone Number" />
                
                <Labels head="Provider of the CNS - ATM" />
                <InputForm type={0} name="First Name" onChange={this.handleChange('firstNameCNSATM')} placeholder="First Name" />
                <InputForm type={0} name="Last Name" onChange={this.handleChange('lastNameCNSATM')} placeholder="Last Name" />
                <InputForm type={0} name="Address Line 1" onChange={this.handleChange('adressLine1addressCNSATM')} placeholder="Address Line 1" />
                <InputForm type={0} name="Address Line 2" onChange={this.handleChange('adressLine2addressCNSATM')} placeholder="Address Line 2" />
                <InputForm type={0} name="City" onChange={this.handleChange('addressCityCNSATM')} placeholder="City" />
                <InputForm type={0} name="State" onChange={this.handleChange('addressStateCNSATM')} placeholder="State" />
                <InputForm type={0} name="Country" onChange={this.handleChange('addressCountryCNSATM')} placeholder="Country" />
                
                <Labels head="Provider of the MET services" />
                <InputForm type={0} name="First Name" onChange={this.handleChange('firstNamMETS')} placeholder="First Name" />
                <InputForm type={0} name="Last Name" onChange={this.handleChange('lastNameMETS')} placeholder="Last Name" />
                <InputForm type={0} name="Address Line 1" onChange={this.handleChange('adressLine1addressMETS')} placeholder="Address Line 1" />
                <InputForm type={0} name="Address Line 2" onChange={this.handleChange('adressLine2addressMETS')} placeholder="Address Line 2" />
                <InputForm type={0} name="City" onChange={this.handleChange('addressCityMETS')} placeholder="City" />
                <InputForm type={0} name="State" onChange={this.handleChange('addressStateMETS')} placeholder="State" />
                <InputForm type={0} name="Country" onChange={this.handleChange('addressCountryMETS')} placeholder="Country" />

                <Labels head="The person responsible for overseeing the day to day provisions of the Air Traffic Management" />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameCNS')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusCNS')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberCNS')} placeholder="Telephone Number" />
                
                <Labels head="The person responsible for overseeing the day to day provisions of CNS" />                
                <InputForm type={0} name="Name" onChange={this.handleChange('nameRFF')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusRFF')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberRFF')} placeholder="Telephone Number" />

                <Labels head="The person responsible for overseeing the day to day provisions of RFF"  />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameMET')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusMET')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberMET')} placeholder="Telephone Number" />

                <Labels head="The person responsible for overseeing the day to day provisions of MET services"  />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameMET')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusMET')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberMET')} placeholder="Telephone Number" />

            </div>
        )
    }
}

export default Form6
