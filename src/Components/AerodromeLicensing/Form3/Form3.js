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
                    value2= "Private Use" 
                    handleChange={this.handleChange('category')} 
                    check={this.state.category}/>
                <InputForm 
                    type={0} 
                    name="In case of private aerodrome, indicate the purpose for which the aerodrome will be used e.g. joy rides, air displays, miscellaneous instructional flying, private flying etc" 
                    onChange={this.handleChange('privatePurpose')} 
                    placeholder="Purpose"/>
                <CheckBox 
                    name="Whether your own aircraft only will use the aerodrome" 
                    value1="Yes" 
                    value2= "No" 
                    handleChange={this.handleChange('ownA')} 
                    check={this.state.ownA}/>
                <CheckBoxOther
                    name="Do you propose to use the aerodrome by own aircraft as well as other aircraft ?" 
                    value1="Yes" 
                    value2= "No" 
                    handleChange={this.handleChange('otherA')} 
                    check={this.state.otherA} />
                <CheckBox
                    name="If use by others aircraft, state whether prior permission or notice is required." 
                    value1="Yes" 
                    value2= "No" 
                    handleChange={this.handleChange('priorPermission')} 
                    check={this.state.priorPermission}/>
                <CheckBoxOther
                    name="Is a licence for NIGHT USE/ ALL WEATHER required?" 
                    value1="Yes" 
                    value2= "No" 
                    handleChange={this.handleChange('nightUse')} 
                    check={this.state.nightUse}/>
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
                <Labels head="Type and maximum total weight of the largest / heaviest aircraft for which the aerodrome is designed, including overall length and maximum fuselage width." />
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