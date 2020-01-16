import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'
import ImageUpload from '../FormComponents/ImageUpload'

export class Form2 extends Component {
    
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
        lengthrunwayfeet:"",
        file:null,
        runways: [{name : ""}]
    }

    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }

    handleChangeFile = input => (e) => {
        this.setState({
            [input] : e.target.file
        })
    }

    handleRunwayChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleRunwayNameChange = idx => evt => {
        const newRunways = this.state.runways.map((runway, sidx) => {
            if (idx !== sidx) return runway;
            return { ...runway, name: evt.target.value };
        });
    
        this.setState({ runways: newRunways });
    };
    
    handleAddRunway = () => {
        this.setState({
            runways: this.state.runways.concat([{ name: "" }])
        });
    };

    handleRemoveRunway = idx => () => {
        this.setState({
            runways: this.state.runways.filter((s, sidx) => idx !== sidx)
        });
    };

    render() {
        return (
            <div>
                <Labels head="DETAILS OF AERODROME (as required to be shown on the license)" faded=""/>
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
                
                <h6>
                    Attach a survey map, scale 1:10,000 showing by means of broken line the exact boundaries of the aerodrome         
                </h6>
                <br/>
                    <ImageUpload handleChange={this.handleChangeFile('file')}/>
                <br/>
                <InputForm type={0} name="Elevation of the Aerodrome reference point (AMSL) (in feet)" onChange={this.handleChange('elevationreferencefeet')} placeholder="Elevation of the Aerodrome reference point (AMSL)(in feet)" />
                <InputForm type={0} name="Elevation of the Aerodrome reference point (AMSL) (in meter)" onChange={this.handleChange('elevationreferencemeter')} placeholder="Elevation of the Aerodrome reference point (AMSL)(in meters)" />
                <div>
                <h6>Orientation and length of runway (s) (in feet and meter)</h6>
                    {this.state.runways.map((runway, idx) => (
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-10">
                                <div class="form-group" >
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder={`Runway ${idx + 1}`}
                                        value={runway.name}
                                        onChange={this.handleRunwayNameChange(idx)}
                                    />
                                </div>
                                </div>
                                <div class="col col-lg-2">                                
                                    <button 
                                        class="btn btn-primary" 
                                        onClick={this.handleRemoveRunway(idx)} 
                                        type="button">
                                        Remove
                                    </button>
                                </div>
                        </div>
                    </div>
                    ))}
                    <button class="btn btn-primary" onClick={this.handleAddRunway} type="button">Add Runway</button>
                </div>
                <br/>
            </div>
        )
    }
}

export default Form2