import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'
import CheckBox from '../FormComponents/CheckBox'
import CheckBoxOther from '../FormComponents/CheckBoxOther'
import TextArea from '../FormComponents/TextArea'


export class Form3 extends Component {

    state={
        category:"",
        privatePurpose:"",
        ownA:"",
        otherA:"",
        priorPermission:"",
        nightUse:"",
        nightdetails:"",
        CNS_ATM:"",
        met:"",
        aviation:"",
        typeAircraft:"",
    }

    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }

    render() {
        return (
            <div>
                <Labels head="AERODROME ACTIVITIES" />
                <CheckBox 
                    name="GenderState category of licence required as defined in Aircraft Rules 1937?" 
                    value1="Public Use"
                    id1="Public-Use" 
                    id2="Private-Use" 
                    value2= "Private Use" 
                    handleChange={this.handleChange('category')} 
                    check={this.state.category}/>
                <InputForm 
                    type={0} 
                    name="In case of private aerodrome, indicate the purpose for which the aerodrome will be used e.g. joy rides, air displays, miscellaneous instructional flying, private flying etc" 
                    onChange={this.handleChange('privatePurpose')} 
                    placeholder="Purpose"/>
                <form>
                    <div class="custom-control custom-checkbox mb-3">
                        <h6>Whether your own aircraft only will use the aerodrome</h6>
                        <input
                            class="custom-control-input" 
                            id="customCheck3"
                            type="checkbox"
                            value="Yes"
                            checked={this.state.ownA === "Yes"}
                            onChange={this.handleChange('ownA')}
                        />
                        <label class="custom-control-label" for="customCheck3">Yes</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input
                            class="custom-control-input" 
                            id="customCheck4"
                            type="checkbox"
                            value="No"
                            checked={this.state.ownA === "No"}
                            onChange={this.handleChange('ownA')}
                        />
                        <label class="custom-control-label" for="customCheck4">No</label>
                    </div>
                </form>
                <form>
                    <div class="custom-control custom-checkbox mb-3">
                        <h6>Do you propose to use the aerodrome by own aircraft as well as other aircraft ?</h6>
                        <input
                            class="custom-control-input" 
                            id="customCheck5"
                            type="checkbox"
                            value="Yes"
                            checked={this.state.otherA === "Yes"}
                            onChange={this.handleChange('otherA')}
                        />
                        <label class="custom-control-label" for="customCheck5">Yes</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input
                            class="custom-control-input" 
                            id="customCheck6"
                            type="checkbox"
                            value="No"
                            checked={this.state.otherA === "No"}
                            onChange={this.handleChange('otherA')}
                        />
                        <label class="custom-control-label" for="customCheck6">No</label>
                    </div>
                </form>
                <form>
                    <div class="custom-control custom-checkbox mb-3">
                        <h6>If use by others aircraft, state whether prior permission or notice is required.</h6>
                        <input
                            class="custom-control-input" 
                            id="customCheck7"
                            type="checkbox"
                            value="Yes"
                            checked={this.state.priorPermission === "Yes"}
                            onChange={this.handleChange('priorPermission')}
                        />
                        <label class="custom-control-label" for="customCheck7">Yes</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input
                            class="custom-control-input" 
                            id="customCheck8"
                            type="checkbox"
                            value="No"
                            checked={this.state.priorPermission === "No"}
                            onChange={this.handleChange('priorPermission')}
                        />
                        <label class="custom-control-label" for="customCheck8">No</label>
                    </div>
                </form>
                <form>
                    <div class="custom-control custom-checkbox mb-3">
                        <h6>Is a licence for NIGHT USE/ ALL WEATHER required?</h6>
                        <input
                            class="custom-control-input" 
                            id="customCheck9"
                            type="checkbox"
                            value="Yes"
                            checked={this.state.nightUse === "Yes"}
                            onChange={this.handleChange('nightUse')}
                        />
                        <label class="custom-control-label" for="customCheck9">Yes</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input
                            class="custom-control-input" 
                            id="customCheck10"
                            type="checkbox"
                            value="No"
                            checked={this.state.nightUse === "No"}
                            onChange={this.handleChange('nightUse')}
                        />
                        <label class="custom-control-label" for="customCheck10">No</label>
                    </div>
                </form>
                <TextArea 
                    name="If the answer to NIGHT Use is YES, Please provide details of proposed lighting along with the lighting plan." 
                    handleChange={this.handleChange('nightDetails')} 
                    palceholder=" Details of proposed lighting along with lighting pan"/>
                <TextArea 
                    name="Please provide details of proposed CNS-ATM facilities." 
                    handleChange={this.handleChange('CNS_ATM')} 
                    palceholder=" Please provide details of proposed CNS-ATM facilities."/>
                <TextArea 
                    name="Please provide details of proposed MET facilities." 
                    handleChange={this.handleChange('met')} 
                    palceholder=" Please provide details of proposed MET facilities"/>
                <TextArea 
                    name="Please give details of other proposed aviation activities (for example gliding, parachuting, micro lights)." 
                    handleChange={this.handleChange('aviation')} 
                    palceholder=" Please give details of other proposed aviation activities (for example gliding, parachuting, micro lights)."/>
                <br/>
                <h6><strong>Type and maximum total weight of the largest / heaviest aircraft for which the aerodrome is designed, including overall length and maximum fuselage width.</strong></h6>
                <InputForm 
                    type={0} name="Type" 
                    onChange={this.handleChange('typeAircraft')} 
                    placeholder="Type of Aircraft" />
                <InputForm 
                    type={0} name="Weight" 
                    onChange={this.handleChange('weightAircraft')} 
                    placeholder="Weight of Aircraft" />
                <InputForm 
                    type={0} name="Length" 
                    onChange={this.handleChange('lengthAircraft')} 
                    placeholder="Length of Aircraft" />
                <InputForm 
                    type={0} name="Width" 
                    onChange={this.handleChange('widthAircraft')} 
                    placeholder="Width of Aircraft" />
            </div>
        )
    }
}

export default Form3