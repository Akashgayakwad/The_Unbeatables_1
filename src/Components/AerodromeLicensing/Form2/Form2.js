import React, { Component } from 'react'
import InputForm from '../../FormComponents/InputForm'

export class Form1 extends Component {
    
    state = {
        placename:"",
        addressofApplicant:"",
        telephonenumber:"",
        faxnumber:"",
        email_telex_number:"",
        ituationaerodromesite:"",
        state_district:"",
        elevationreferencefeet:"",
        elevationreferencemeter:"",
        gridreference:"",
        orientation:"",
        lengthrunwaymeter:"",
        lengthrunwayfeet:""



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
    // DETAILS OF AERODROME (as required to be shown on the license)
    render() {
        return (
            <div>
                <InputForm type={0} name="Place name by which the aerodrome is to be known in all future references" onChange={this.handleChange('placename')} placeholder="Place name by which the aerodrome is to be known in all future references" />
                <InputForm type={0} name="Name and Address of the owner of Aerodrome" onChange={this.handleChange('addressofApplicant')} placeholder="Name and Address of the owner of Aerodrome"/>
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('telephonenumber')} placeholder="Telephone Number" />
                <InputForm type={0} name="Fax Number" onChange={this.handleChange('faxnumber')} placeholder="Fax Number"/>
                <InputForm type={0} name="Email/Telex Number" onChange={this.handleChange('email_telex_number')} placeholder="Email/Telex Number" />
                
                <InputForm type={0} name="Situation of the aerodrome site with reference to the nearest airport, railway station and town/village" 
                                    onChange={this.handleChange('situationaerodromesite')} 
                                    placeholder="Situation of the aerodrome site with reference to the nearest airport, railway station and town/village"/>
                <InputForm type={0} name="State / District in which situated" onChange={this.handleChange('state_district')} placeholder="State / District in which situated" />
                <InputForm type={0} name="Grid reference in WGS 84" onChange={this.handleChange('gridreference')} placeholder="Grid reference in WGS 84" />
                
                {//attach a survey map, scale1:10,000 showing by means of broken line the exact boundaries of the aerodrome
    }
                <InputForm type={0} name="Elevation of the Aerodrome reference point (AMSL) (in feet)" onChange={this.handleChange('elevationreferencefeet')} placeholder="Elevation of the Aerodrome reference point (AMSL)(in feet)" />
                <InputForm type={0} name="Elevation of the Aerodrome reference point (AMSL) (in meter)" onChange={this.handleChange('elevationreferencemeter')} placeholder="Elevation of the Aerodrome reference point (AMSL)(in meters)" />
                
                {// There maybe multiple runways
    }
                
                <InputForm type={0} name="Orientation of runway (s)" onChange={this.handleChange('orientation')} placeholder="Orientation of runway (s)(in meters)" />
                <InputForm type={0} name="Length of runway (s)(in meter)" onChange={this.handleChange('lengthrunwaymeter')} placeholder="Length of runway (s)(in meter)" />
                <InputForm type={0} name="Length of runway (s)(in feet)" onChange={this.handleChange('lengthrunwayfeet')} placeholder="Length of runway (s)(in feet)" />
                                   
                

            </div>
        )
    }
}

export default Form1
